package com.org.scheduler.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.org.scheduler.entity.AbstractEntity;
import com.org.scheduler.entity.UserProfileEntity;
import org.springframework.ui.ModelMap;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sam on 3/16/17.
 */
public abstract class AbstractRestController<T extends AbstractEntity> {
    protected Class<T> entityClass;

    public AbstractRestController(Class<T> entityClass) {
        this.entityClass = entityClass;
    }

    protected Map<String, Object> filterModelMapForResponse(ModelMap modelMap) {
        return modelMap.entrySet().stream()
                .filter(k -> !k.getKey().startsWith("org.spring"))
                .collect(HashMap::new, (m,v)->m.put(v.getKey(), v.getValue()), HashMap::putAll);
    }

    protected T validateAndInsert(ModelMap modelMap, Map<String, Object> entityInputData) {
        ObjectMapper objectMapper = new ObjectMapper();
        Class<UserProfileEntity> o = UserProfileEntity.class;
        T entity = objectMapper.convertValue(entityInputData, this.entityClass);
        return entity;
    }
}
