package com.org.scheduler.controller;

import com.org.scheduler.entity.UserProfileEntity;
import com.org.scheduler.repository.DutyRepository;
import com.org.scheduler.repository.UserProfileRepository;
import com.sun.javafx.sg.prism.NGShape;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by sam on 3/22/17.
 */
@RestController
@RequestMapping("user")
public class UserController extends AbstractRestController {
    public UserController() {
        super(UserProfileEntity.class);
    }

    @Autowired
    UserProfileRepository userProfileRepository;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public @ResponseBody Map list(ModelMap modelMap) {
        modelMap.put("users", userProfileRepository.findAll());
        return filterModelMapForResponse(modelMap);
    }

    @RequestMapping(value = "save", method = RequestMethod.POST)
    public @ResponseBody Map save(@RequestBody Map<String, Object> user, ModelMap modelMap) {
        UserProfileEntity userProfileEntity = (UserProfileEntity) super.validateAndInsert(modelMap, user);
        userProfileRepository.save(userProfileEntity);
        modelMap.put("user", userProfileEntity);
        return filterModelMapForResponse(modelMap);
    }
}
