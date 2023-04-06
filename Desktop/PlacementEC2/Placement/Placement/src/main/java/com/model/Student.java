package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "studentname")
    private String studentName;
    @Column(name = "rollnumber")
    private int rollNumber;
    @Column(name = "email")
    private String email;
    @Column(name = "presentsemester")
    private int presentSemester;
    @Column(name = "cgpa")
    private int cgpa;

    @Column(name = "Is_placed")
    private boolean isPlaced;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPresentSemester() {
        return presentSemester;
    }

    public void setPresentSemester(int presentSemester) {
        this.presentSemester = presentSemester;
    }

    public int getCgpa() {
        return cgpa;
    }

    public void setCgpa(int cgpa) {
        this.cgpa = cgpa;
    }

    public boolean isPlaced() {
        return isPlaced;
    }

    public void setPlaced(boolean placed) {
        isPlaced = placed;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Student{");
        sb.append("id=").append(id);
        sb.append(", studentName='").append(studentName).append('\'');
        sb.append(", rollNumber=").append(rollNumber);
        sb.append(", email='").append(email).append('\'');
        sb.append(", presentSemester=").append(presentSemester);
        sb.append(", cgpa=").append(cgpa);
        sb.append(", isPlaced=").append(isPlaced);
        sb.append('}');
        return sb.toString();
    }
}
