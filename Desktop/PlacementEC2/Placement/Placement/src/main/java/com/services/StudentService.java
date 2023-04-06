package com.services;

import com.model.Student;
import com.model.Visit;

import java.util.List;

public interface StudentService {

    Student createStudent(Student student);

    Student getStudentById(int id);


    List<Student> getAllStudents();

    Student updateStudent(Student student);

    Student deleteStudent(int id);
}
