package com.org.scheduler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.org.scheduler.repository.DutyRepository;
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
@RequestMapping("duty")
public class DutyController {

    @Autowired
    DutyRepository dutyRepository;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public @ResponseBody String list(ModelMap modelMap) {
        return new Gson().toJson(dutyRepository.findAll());
    }
}
