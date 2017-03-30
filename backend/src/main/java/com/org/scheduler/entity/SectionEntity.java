package com.org.scheduler.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by sam on 3/14/17.
 */
@Entity
@Table(name = "SECTION")
public class SectionEntity extends AbstractEntity {
    private String sectionCode;
    private String sectionName;
    private Date beginDate;
    private Date endDate;
    private Date createdOn;
    private String createdBy;

    @Id
    @Column(name = "SECTION_CODE")
    public String getSectionCode() {
        return sectionCode;
    }

    public void setSectionCode(String sectionCode) {
        this.sectionCode = sectionCode;
    }

    @Column(name = "SECTION_NAME")
    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName;
    }

    @Column(name = "BEGIN_DATE")
    @Temporal(TemporalType.DATE)
    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    @Column(name = "END_DATE")
    @Temporal(TemporalType.DATE)
    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Column(name = "CREATED_ON")
    @Temporal(TemporalType.DATE)
    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    @Column(name = "CREATED_BY")
    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }
}
