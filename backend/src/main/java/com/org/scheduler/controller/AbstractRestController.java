package com.org.scheduler.controller;

import org.springframework.ui.ModelMap;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by sam on 3/16/17.
 */
public abstract class AbstractRestController {

    protected Map<String, Object> filterModelMapForResponse(ModelMap modelMap) {
        return modelMap.entrySet().stream()
                .filter(k -> !k.getKey().startsWith("org.spring"))
                .collect(HashMap::new, (m,v)->m.put(v.getKey(), v.getValue()), HashMap::putAll);
    }
}
