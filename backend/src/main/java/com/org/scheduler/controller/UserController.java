package com.org.scheduler.controller;

import com.org.scheduler.repository.DutyRepository;
import com.org.scheduler.repository.UserProfileRepository;
import com.sun.javafx.sg.prism.NGShape;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * Created by sam on 3/22/17.
 */
@Controller
@RequestMapping("user")
public class UserController extends AbstractRestController {

    @Autowired
    UserProfileRepository userProfileRepository;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public @ResponseBody Map list(ModelMap modelMap) {
        modelMap.put("users", userProfileRepository.findAll());
        return filterModelMapForResponse(modelMap);
    }
}
