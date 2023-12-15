import React, { useEffect, useState } from 'react';
import './mentor.css';


const Mentor = () => {
    
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/myapp/mentors/")
            .then(res => res.json())
            .then(result => {
                setMentors(result.mentors); // Оновлено тут
            })
            .catch(error => {
                console.error("Error fetching customers:", error);
            });
    }, []);

    console.log(mentors)


    return (
        <div className="container">
            <div className="title__table">
                <h1 className='title__table__content'>Mentors</h1>
            </div>
            <div className="table">
                <div className="table-header">
                <div className="header__item"><div id="id" className="filter__link">ID</div></div>
                    <div className="header__item"><div id="name" className="filter__link">Name</div></div>
                    <div className="header__item"><div id="surname" className="filter__link">Surname</div></div>
                    <div className="header__item"><div id="age" className="filter__link">Age</div></div>
                    <div className="header__item"><div id="age" className="filter__link">Year experience</div></div>
                    <div className="header__item"><div id="age" className="filter__link">Salary</div></div>
                </div>
                <div className="table-content">
                    {mentors.map(mentor => (
                        <div className="table-row" key={mentor.id}>
                            <div className="table-data">{mentor.id}</div>
                            <div className="table-data">{mentor.name}</div>
                            <div className="table-data">{mentor.surname}</div>
                            <div className="table-data">{mentor.age}</div>
                            <div className="table-data">{mentor.year_experience}</div>
                            <div className="table-data">{mentor.salary}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};

export default Mentor;