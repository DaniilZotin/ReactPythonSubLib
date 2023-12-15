import React, { useEffect, useState } from 'react';
import './student_course.css';


const Student_Course = () => {
    
    const [studentCourse, setStudentCourse] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/myapp/student_course/")
            .then(res => res.json())
            .then(result => {
                setStudentCourse(result.studentCourse); // Оновлено тут
            })
            .catch(error => {
                console.error("Error fetching customers:", error);
            });
    }, []);

    console.log(studentCourse)


    return (
        <div className="container">
            <div className="title__table">
                <h1 className='title__table__content'>Student-Course</h1>
            </div>
            <div className="table">
                <div className="table-header">
                    <div className="header__item"><div id="id" className="filter__link">ID</div></div>
                    <div className="header__item"><div id="student" className="filter__link">Student</div></div>
                    <div className="header__item"><div id="cource" className="filter__link">Course</div></div>
                    
                </div>
                <div className="table-content">
                    {studentCourse.map(elStudentAndCourse => (
                        <div className="table-row" key={elStudentAndCourse.id}>
                            <div className="table-data">{elStudentAndCourse.id}</div>
                            <div className="table-data">{elStudentAndCourse.student}</div>
                            <div className="table-data">{elStudentAndCourse.course}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};

export default Student_Course;