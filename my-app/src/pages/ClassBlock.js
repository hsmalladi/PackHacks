import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import fb from "../images/fb.png";
import ins from "../images/insta.png";
//import styles from "../css/ClassBlock.css";


function ClassBlock(props) {
    //const peopleList = ["Bryan Pan", "Minjun Kwak", "Harry Wang", "Shawn Lee", "Nirvan Silswall", "Bald Ma"];

    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    const peopleList = [
        {
            name: "Bryan Pan",
            insta: "https://www.instagram.com/_bryanpan_/",
            face: "https://www.facebook.com"
        },
        {
            name: "Minjun Kwak",
            insta: "https://www.instagram.com",
            face: "https://www.facebook.com"
        },
        {
            name: "Harry Wang",
            insta: "https://www.instagram.com/harr.yw/",
            face: "https://www.facebook.com/harry.wang.5454"
        },
        {
            name: "Shawn Lee",
            insta: "https://www.instagram.com",
            face: "https://www.facebook.com"
        },
        {
            name: "Nirvan Silswal",
            insta: "https://www.instagram.com",
            face: "https://www.facebook.com"
        },
        {
            name: "Patrick Nguyen",
            insta: "https://www.instagram.com/patrcknguyen/",
            face: "https://www.facebook.com/profile.php?id=100010804659223",
        }
    ];


    const personOne = peopleList[Math.floor(Math.random() * 6)];
    const personTwo = peopleList[Math.floor(Math.random() * 6)];
    const personThree = peopleList[Math.floor(Math.random() * 6)];
    const personFour = peopleList[Math.floor(Math.random() * 6)];
    const personFive = peopleList[Math.floor(Math.random() * 6)];

    return (
        <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            {/* <h2> {props.courseName} </h2>
            <ul>
                <li>{peopleList[Math.floor(Math.random() * 6)].name}</li>
                <li>{peopleList[Math.floor(Math.random() * 6)].name}</li>
                <li>{peopleList[Math.floor(Math.random() * 6)].name}</li>
            </ul> */}
            {/*{personOne.name}
            <a href={personOne.insta}> <img width="60" height="60" src={ins} /></a>
            <a href={personOne.face}> <img width="60" height="60" src={fb} /></a>*/}
            <div class="button has-text-white has-text-weight-bold" onClick={() => handleClick()} style={{ backgroundColor: "#2FBC6A", width: "10vw" }}>
                <span>{show ? "Close" : props.courseName}</span>
            </div>
            <div>
                {show ?
                    <div class="box" style={{
                        maxHeight: "33vh", width: "20vw", overflow: "scroll", overflowX: "hidden"
                    }}>
                        <div class="level" >
                            <div class="level-item has-text-centered mr-3 has-text-weight-bold">
                                {personOne.name}
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold mr-3">
                                <a href={personOne.insta}> <img width="40" height="40" src={ins} /></a>
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold">
                                <a href={personOne.face}> <img width="40" height="40" src={fb} /></a>
                            </div>
                        </div>
                        <div class="level">
                            <div class="level-item mr-3 has-text-centered has-text-weight-bold">
                                {personTwo.name}
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold mr-3">
                                <a href={personTwo.insta}> <img width="40" height="40" src={ins} /></a>
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold">
                                <a href={personTwo.face}> <img width="40" height="40" src={fb} /></a>
                            </div>
                        </div>
                        <div class="level">
                            <div class="level-item has-text-centered mr-3 has-text-weight-bold">
                                {personThree.name}
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold mr-3">
                                <a href={personThree.insta}> <img width="40" height="40" src={ins} /></a>
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold">
                                <a href={personThree.face}> <img width="40" height="40" src={fb} /></a>
                            </div>
                        </div>
                        <div class="level">
                            <div class="level-item has-text-centered mr-3 has-text-weight-bold">
                                {personFour.name}
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold mr-3">
                                <a href={personFour.insta}> <img width="40" height="40" src={ins} /></a>
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold">
                                <a href={personFour.face}> <img width="40" height="40" src={fb} /></a>
                            </div>
                        </div>
                        <div class="level">
                            <div class="level-item has-text-centered mr-3 has-text-weight-bold">
                                {personFive.name}
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold mr-3">
                                <a href={personFive.insta}> <img width="40" height="40" src={ins} /></a>
                            </div>
                            <div class="level-item has-text-centered has-text-weight-bold">
                                <a href={personFive.face}> <img width="40" height="40" src={fb} /></a>
                            </div>
                        </div>
                    </div> : <div style={{ height: "33vh", width: "20vw" }} />}
            </div>
        </div >
    );
}

export default ClassBlock;