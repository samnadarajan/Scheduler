package com.org.scheduler.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by sam on 3/16/17.
 */
@Entity
@Table(name = "USER_PROFILE_DUTY")
public class UserProfileDutyEntity {
    private Long userProfileDutyId;
    private String dutyCode;
    private Long userProfileId;
    private Date dutyDate;

    @Id
    @Column(name = "USER_PROFILE_DUTY_ID")
    public Long getUserProfileDutyId() {
        return userProfileDutyId;
    }

    public void setUserProfileDutyId(Long userProfileDutyId) {
        this.userProfileDutyId = userProfileDutyId;
    }

    @Column(name = "DUTY_CODE")
    public String getDutyCode() {
        return dutyCode;
    }

    public void setDutyCode(String dutyCode) {
        this.dutyCode = dutyCode;
    }

    @Column(name = "USER_PROFILE_ID")
    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
    }

    @Column(name = "DUTY_DATE")
    public Date getDutyDate() {
        return dutyDate;
    }

    public void setDutyDate(Date dutyDate) {
        this.dutyDate = dutyDate;
    }
}
