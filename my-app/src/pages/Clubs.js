import React, { Component, useState, useEffect } from 'react'
import ClassBlock from './ClassBlock.js';
import Navbar from "./Navbar";
import axios from '../../node_modules/axios';

var isDone = false;

function Clubs() {
    const [classArray, setAddClass] = useState([]);


    if (!isDone) {
        axios.get('http://localhost:5000/getclubs')
            .then(response => {
                console.log(response.data);
                setAddClass(arr => {
                    arr = response.data;
                    return arr;

                })
            })
            .catch(e => console.log(e))
        isDone = true;
    }

    //const classList = props.map(course => <ClassBlock courseName={course}/>)
    return (
        <div>
            <Navbar />
            <div class="box pb-6 pt-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
                style={{
                    fontFamily: "PingFang SC", width: "75%", margin: "10vh auto"
                }}
            >
                <h1>My Clubs</h1>
                <div class="level mt-6" style={{ width: "100%" }}>
                    {classArray.map(course =>
                        <div class="level-item has-text-centered" style={{ margin: "auto" }}>
                            <ClassBlock courseName={course} />
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Clubs;
