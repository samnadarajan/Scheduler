package com.org.scheduler.service;

import com.org.scheduler.entity.DutyEntity;
import com.org.scheduler.repository.DutyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by sam on 3/18/17.
 */
@Service
public class DutyService {
    @Autowired
    DutyRepository dutyRepository;

    public Map<String, String> getDutyMap() {
       return dutyRepository.findAll().stream().collect(Collectors.toMap(DutyEntity::getDutyCode, DutyEntity::getDutyName));
    }
}

