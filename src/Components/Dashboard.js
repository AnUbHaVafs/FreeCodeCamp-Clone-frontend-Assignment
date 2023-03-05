import React, { useCallback, useEffect, useState } from 'react';
import './Header.css';
import Image from '../images/1.jpg';
import { Link, Outlet } from 'react-router-dom';
import { getAllCourses } from '../api';

const Dashboard = () => {
    const [courseArray, setCourseArray] = useState([]);
    const courseDetails = async () => {
        const response = await getAllCourses()
        if (response.data) {
            setCourseArray(response.data.data);
            console.log(response.data.data[0].name)
        }
        else {
            console.log("error ocuured!")
        }
    }

    useEffect(() => {
        courseDetails()
    }, [])


    return (
        <div className='parent'>
            <div className='site-wrapper'>
                <div className='site-nav '>
                    <div className='item1'>
                        <input className='search-input' type="search" placeholder='Search 9,700+ tutorials' />
                    </div>

                    <div className='item2'>
                        <img src={Image} alt='' />
                    </div>
                    <div className='item3'>
                        <button className='btn-donate donate'>Donate</button>
                        <Link to={'/landingpage'} className='btn-signin signin'>Logout</Link>
                    </div>
                </div>
            </div>
            {
                courseArray && courseArray.map((course, index) => {
                    <h1>{course.name} </h1>
                })
            }
        </div>
    )
}

export default Dashboard;  