import React from 'react'

function ClassBlock(props) {
    const peopleList = [
        {
            name: "Bryan Pan",
            insta: "https://www.instagram.com/_bryanpan_/",
            face: "",
            email: "",
        }, 
        {
            name:"Minjun Kwak",
            insta:""
        }, 
        {
            name: "Harry Wang",
            insta: "https://www.instagram.com/harr.yw/",
            face: "https://www.facebook.com/harry.wang.5454",
            email: "hsw20@duke.edu"
        }, 
        {name:"Shawn Lee"}, 
        {name:"Nirvan Silswal"}, 
        {name:"Bald Ma"}
    ];
    return(
        <div>
            <h2> {props.courseName} </h2>
            <ul>
                <li>{peopleList[Math.floor(Math.random() * 6)]}</li>
                <li>{peopleList[Math.floor(Math.random() * 6)]}</li>
                <li>{peopleList[Math.floor(Math.random() * 6)]}</li>
            </ul>
        </div>
    );
}

export default ClassBlock;
