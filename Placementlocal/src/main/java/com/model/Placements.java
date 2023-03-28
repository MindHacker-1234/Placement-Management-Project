package com.model;

import javax.persistence.*;

@Entity
@Table(name = "placements")
public class Placements {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "referenceid")
    private int referenceId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "studentid")
    private Student student;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "companyid")
    private Company company;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "visitid")
    private Visit visit;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(int referenceId) {
        this.referenceId = referenceId;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Visit getVisit() {
        return visit;
    }

    public void setVisit(Visit visit) {
        this.visit = visit;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Placements{");
        sb.append("id=").append(id);
        sb.append(", referenceId=").append(referenceId);
        sb.append(", student=").append(student);
        sb.append(", company=").append(company);
        sb.append(", visit=").append(visit);
        sb.append('}');
        return sb.toString();
    }
}
