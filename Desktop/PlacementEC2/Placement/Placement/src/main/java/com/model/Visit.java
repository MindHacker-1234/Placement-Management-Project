package com.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "visit")
public class Visit {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "driveid")
    private int driveId;
    @Column(name = "drivename")
    private String driveName;
    @Column(name = "ctc")
    private int ctc;
    @Column(name = "jobprofile")
    private String jobProfile;
    @Column(name = "scheduledate")
    private Date scheduleDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "companyid")
    private Company company;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDriveId() {
        return driveId;
    }

    public void setDriveId(int driveId) {
        this.driveId = driveId;
    }

    public String getDriveName() {
        return driveName;
    }

    public void setDriveName(String driveName) {
        this.driveName = driveName;
    }

    public int getCtc() {
        return ctc;
    }

    public void setCtc(int ctc) {
        this.ctc = ctc;
    }

    public String getJobProfile() {
        return jobProfile;
    }

    public void setJobProfile(String jobProfile) {
        this.jobProfile = jobProfile;
    }

    public Date getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(Date scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Visit{");
        sb.append("id=").append(id);
        sb.append(", driveId=").append(driveId);
        sb.append(", driveName='").append(driveName).append('\'');
        sb.append(", ctc=").append(ctc);
        sb.append(", jobProfile='").append(jobProfile).append('\'');
        sb.append(", scheduleDate=").append(scheduleDate);
        sb.append(", company=").append(company);
        sb.append('}');
        return sb.toString();
    }
}
