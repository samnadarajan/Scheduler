package com.org.scheduler.repository;

import com.org.scheduler.entity.DutyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by sam on 3/6/17.
 */
@Repository
public interface DutyRepository extends JpaRepository<DutyEntity, Long> {
}
