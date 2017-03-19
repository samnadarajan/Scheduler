package com.org.scheduler.repository;

import com.org.scheduler.entity.UserProfileDutyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by sam on 3/16/17.
 */
@Repository
public interface UserProfileDutyRepository extends JpaRepository<UserProfileDutyEntity, Long> {
}
