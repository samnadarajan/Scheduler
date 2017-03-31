package com.org.scheduler.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by sam on 3/14/17.
 */
@Entity
@Table(name = "USER_PROFILE")
public class UserProfileEntity extends AbstractEntity {
    private Long userProfileId;
    private String firstName;
    private String lastName;
    private String email;
    private Long phone;
    private Date createdOn;
    private String createdBy;
    private String notes;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "S_USER_PROFILE_ID")
    @SequenceGenerator(name = "S_USER_PROFILE_ID", sequenceName = "S_USER_PROFILE_ID", allocationSize = 1)
    @Column(name = "USER_PROFILE_ID")
    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
    }

    @Column(name = "FIRST_NAME")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "LAST_NAME")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "EMAIL")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "PHONE")
    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
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

    @Column(name = "NOTES")
    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
