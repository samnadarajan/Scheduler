package com.org.scheduler.controller;

import com.org.scheduler.entity.DutyEntity;
import com.org.scheduler.repository.DutyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * Created by sam on 4/2/17.
 */
@Controller
@RequestMapping("duty")
public class DutyController extends AbstractRestController {
    public DutyController() {super(DutyEntity.class); }

    @Autowired
    DutyRepository dutyRepository;

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public @ResponseBody Map list(ModelMap modelMap) {
        modelMap.put("duties", dutyRepository.findAll());
        return filterModelMapForResponse(modelMap);
    }
}
