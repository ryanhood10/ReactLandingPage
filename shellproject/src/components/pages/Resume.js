import React from "react"
import "../assets/App.css"


function Resume(){
   return(
    <div className="resume">
          <h2>Resume</h2>
          
          <div>
          <h3>Click here for a Word Document Resume via OneDrive:</h3>
        <a href="https://1drv.ms/w/s!AoSVg1fJ-_Nwo3e0PoiN-NS-R6qq" download   className="cool-button">
         View Resume
        </a>
        </div>

        <div className="proficiencies">
          <div>
          <h3>Front-End Development Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
             <li>Jquery</li>
              <li>React</li>
              
            </ul>
          </div>
          <div>
            <h3>Back End Development Skills</h3>
              <ul>
                
                <li>Express</li>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>MongoDB</li>
               
              </ul>
          </div>

        </div>
      </div>
   ) 
}

export default Resume;