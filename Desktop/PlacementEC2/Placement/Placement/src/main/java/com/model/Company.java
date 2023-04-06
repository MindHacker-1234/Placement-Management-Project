package com.model;

import javax.persistence.*;


@Entity
@Table(name = "company")
public class Company {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "companyname")
    private String companyName;

    @Column(name = "companydescription")
    private String companyDescription;

    @Column(name = "placementOfficer")
    private String placementOfficer;
    @Column(name = "contact")
    private String contact;
    @Column(name = "applicablebranches")
    private String applicableBranches;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyDescription() {
        return companyDescription;
    }

    public void setCompanyDescription(String companyDescription) {
        this.companyDescription = companyDescription;
    }

    public String getPlacementOfficer() {
        return placementOfficer;
    }

    public void setPlacementOfficer(String placementOfficer) {
        this.placementOfficer = placementOfficer;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getApplicableBranches() {
        return applicableBranches;
    }

    public void setApplicableBranches(String applicableBranches) {
        this.applicableBranches = applicableBranches;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Company{");
        sb.append("id=").append(id);
        sb.append(", companyName='").append(companyName).append('\'');
        sb.append(", companyDescription='").append(companyDescription).append('\'');
        sb.append(", placementOfficer='").append(placementOfficer).append('\'');
        sb.append(", contact='").append(contact).append('\'');
        sb.append(", applicableBranches='").append(applicableBranches).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
