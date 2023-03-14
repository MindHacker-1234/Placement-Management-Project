package com.controller;

import com.model.Student;
import com.model.Visit;
import com.services.StudentService;
import com.services.VisitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(value="http://127.0.0.1:5500/")
@RequestMapping(value = "/student")
public class StudentController {


    @Autowired
    StudentService studentService;

    private static final Logger logger = LoggerFactory.getLogger(StudentController.class);


    @GetMapping("/display")
    public List<Student> getAllStudents() {
        logger.info("studentslist");
        return studentService.getAllStudents();
    }

    @PostMapping("/create")
    public Student createStudent(@RequestBody Student student) {
        logger.info("Create visit is invoked {}", student);
        return studentService.createStudent(student);
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable("id") int id) {
        logger.info("getStudentById is invoked with  Id: {}", id);
        return studentService.getStudentById(id);

    }

    @PutMapping("/update")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);

    }

    @DeleteMapping("/delete/{id}")
    public Student deleteStudent(@PathVariable("id") int id)
    {
        return studentService.deleteStudent(id);
    }
}
