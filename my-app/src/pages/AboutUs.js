import React from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import havish from '../images/havish.jpeg';
import image from "../images/greenlogo.png";


const AboutUs = () => {

  return(
    <div>
      <Navbar />
      <div class = "container">
      <div style = {{ fontFamily: "PingFang SC" }}>
        <div class = "is-size-3">
        <br />
        <div class = "has-text-centered">
        It's hard to find similar people, especially in these trying times - we know.
        <br />
        <br />
        <div class = "is-size-4">
        As current freshmen at Duke University, we've found it particularly difficult finding and connecting
         with others during the COVID-19 pandemic. In normal circumstances, many students
         make friends through in-person classes and clubs, but we lack these chances to
         interact and bond with our peers. Carrying this sentiment through our project,
         we were inspired to apply our computer science skills and develop a website where
         students can meet others with similar classes, clubs, and interests, giving way to atrium.
         After logging in with your school email, atrium allows you to build a personalized profile,
         where you can enter your classes, clubs, and interests. You will then be able to find other
         students with similar classes, clubs, and interests, along with their linked social media
         platforms as a way to reach out and connect with them.
         </div>
         <br />
        <div class = "is-size-3">
        Our goal is simple: we want to connect students with atrium.
        <br />
        <img src={image} width = "150" height = "150"/>
        </div>
        </div>
        </div>
        </div>
      </div>
  </div>
  );
}

export default AboutUs;
