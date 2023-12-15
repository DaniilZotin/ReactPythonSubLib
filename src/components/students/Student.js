import React, { useEffect, useState } from 'react';
import './student.css';


const Student = () => {
    
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/myapp/students/")
            .then(res => res.json())
            .then(result => {
                setStudents(result.students); // Оновлено тут
            })
            .catch(error => {
                console.error("Error fetching customers:", error);
            });
    }, []);

    console.log(students)


    return (
        <div className="container">
            <div className="title__table">
                <h1 className='title__table__content'>Students</h1>
            </div>
            <div className="table">
                <div className="table-header">
                <div className="header__item"><div id="id" className="filter__link">ID</div></div>
                    <div className="header__item"><div id="name" className="filter__link">Name</div></div>
                    <div className="header__item"><div id="surname" className="filter__link">Surname</div></div>
                    <div className="header__item"><div id="age" className="filter__link">Age</div></div>
                </div>
                <div className="table-content">
                    {students.map(student => (
                        <div className="table-row" key={student.id}>
                            <div className="table-data">{student.id}</div>
                            <div className="table-data">{student.name}</div>
                            <div className="table-data">{student.surname}</div>
                            <div className="table-data">{student.age}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};

export default Student;