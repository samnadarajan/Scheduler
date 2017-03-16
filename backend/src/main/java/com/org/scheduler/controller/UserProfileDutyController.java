package com.org.scheduler.controller;

import com.google.gson.Gson;
import com.org.scheduler.entity.UserProfileEntity;
import com.org.scheduler.repository.DutyRepository;
import com.org.scheduler.repository.UserProfileRepository;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by sam on 3/7/17.
 */
@RestController
@RequestMapping("userprofileduty")
public class UserProfileDutyController {

    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    DutyRepository dutyRepository;

    /**
     * Return data necessary for user to see list of duties assigned to him/her.
     * @param modelMap
     * @return
     */
    @RequestMapping(value = "list", method = RequestMethod.GET)
    public @ResponseBody Map list(ModelMap modelMap) {

        return modelMap;
    }

    private ModelMap setupModelData(ModelMap modelMap) {
        modelMap.put("dutyList", new Gson().toJson(dutyRepository.findAll()));
        return modelMap;
    }
}
