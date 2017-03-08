package com.org.scheduler;

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

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public @ResponseBody Map list() {
        return null;
    }
}
