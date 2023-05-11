import React from "react";


import "../assets/App.css"

function About(){
    return(
        <div className="about">
            <h4 className="name-header">Ryan Hood</h4> 
            <img
            src="Profile1.jpg"
            alt="Ryan Hood"
            height="100px"
            />
            <p>Hey, I'm Ryan. I'm a Full-Stack Software Developer from Nashville, Tennessee, with a focus on JavaScript. I graduated from Vanderbilt University's Full-Stack Coding Program, and I have hands-on experience with REST APIs, MongoDB, Express, React, and Node.js.
<br></br>
 My continuous learning journey includes various platforms like YouTube, Udemy, iTalki, Meta and Google Certification, as well as other online courses that help me stay up-to-date with the latest technologies.
<br></br>
When I'm not coding, you can find me hiking, learning Spanish, trading crypto, or playing basketball with friends.
<br></br>
Feel free to check out my portfolio to see the skills I've honed and the projects I've worked on. I'm always up for a new challenge or an interesting collaboration.
<br></br>
Some books that have left an impression on me are "Rich Dad Poor Dad," "The Richest Man in Babylon," "Tuesdays with Morrie," and I'm currently exploring the book "Simplicity" to improve my thinking as a programmer.</p>
        </div>
    )
}

export default About;