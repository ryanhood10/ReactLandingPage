import React from "react"


function Resume(){
   return(
    <div className="resume">
          <h2>Resume</h2>
          <a> My Resume </a>
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