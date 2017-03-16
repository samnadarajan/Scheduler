package com.org.scheduler.repository;

import com.org.scheduler.entity.UserProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by sam on 3/15/17.
 */
@Repository
public interface UserProfileRepository extends JpaRepository<UserProfileEntity, Long> {
}
