package com.org.scheduler.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by sam on 3/6/17.
 */
@Entity
@Table(name = "DUTY")
public class DutyEntity {
    private Long dutyId;
    private Long userId;
    private String dutyCode;
    private Date dutyDate;

    @Id
    @Column(name = "DUTY_ID")
    public Long getDutyId() {
        return dutyId;
    }

    public void setDutyId(Long dutyId) {
        this.dutyId = dutyId;
    }

    @Column(name = "USER_ID")
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Column(name = "DUTY_CODE")
    public String getDutyCode() {
        return dutyCode;
    }

    public void setDutyCode(String dutyCode) {
        this.dutyCode = dutyCode;
    }

    @Column(name = "DUTY_DATE")
    @Temporal(TemporalType.DATE)
    public Date getDutyDate() {
        return dutyDate;
    }

    public void setDutyDate(Date dutyDate) {
        this.dutyDate = dutyDate;
    }
}
