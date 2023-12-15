import React, { useEffect, useState } from 'react';
import './course.css';


const Course = () => {
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/myapp/courses/")
            .then(res => res.json())
            .then(result => {
                setCourses(result.courses); // Оновлено тут
            })
            .catch(error => {
                console.error("Error fetching customers:", error);
            });
    }, []);

    console.log(courses)


    return (
        <div className="container">
            <div className="title__table">
                <h1 className='title__table__content'>Courses</h1>
            </div>
            <div className="table">
                <div className="table-header">
                <div className="header__item"><div id="id" className="filter__link">ID</div></div>
                    <div className="header__item"><div id="name" className="filter__link">Name</div></div>
                    <div className="header__item"><div id="price" className="filter__link">Price</div></div>
                    <div className="header__item"><div id="specialty" className="filter__link">Specialty</div></div>
                    <div className="header__item"><div id="mentor_name" className="filter__link">Mentor data</div></div>
                </div>
                <div className="table-content">
                    {courses.map(course => (
                        <div className="table-row" key={course.id}>
                            <div className="table-data">{course.id}</div>
                            <div className="table-data">{course.name}</div>
                            <div className="table-data">{course.price}</div>
                            <div className="table-data">{course.specialty}</div>
                            <div className="table-data">{course.mentor}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};

export default Course;