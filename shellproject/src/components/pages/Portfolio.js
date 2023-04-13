import React from "react";
import "../assets/App.css";

function Portfolio() {
  return (
 <>
    <div className="projects-div">
       
      <h1 id="Portfolio">Portfolio</h1>

        <div className="project-container">
          <h4> Social Media Application </h4>
          <a href="https://wotsproject.herokuapp.com/">
            <img
            src=""
            alt="Social Media App"
            height="200"
            href= "#"
            />
          </a>
        </div>
 
        <div className="project-container">
          <h4> Book Search Application </h4>
          <a href="https://search4booksapplication.herokuapp.com/">
            <img
            src="BookSearch1.jpg"
            alt="Reading List Application"
            height="200"
            href= "#"
            />
          </a>
          <p>Here is my GitHub repo link: <a href="https://github.com/ryanhood10/SearchBookEngine"> https://github.com/ryanhood10/SearchBookEngine </a> </p>
        </div>

        <div>
          <h4> Social Media API </h4>
          <p> Here is my GitHub repo link: https://github.com/ryanhood10/APISocialNetwork
            <br></br>
            Here is my walkthrough video for the API: https://vimeo.com/808889435/a043a20c80 </p>
        </div>

        <div>
          <h5>Here is my gist written about Regex expressions</h5>
          <p> https://gist.github.com/ryanhood10/105761ece421c3b00f36f0065b127e19https://gist.github.com/ryanhood10/105761ece421c3b00f36f0065b127e19</p>
        </div>

        <div>
          <h4> Project Manager Application </h4>
          <p> (written with HandleBars) here is GitHub repo: https://github.com/ryanhood10/ProjectManager </p>
          <a href="https://floating-bayou-84303.herokuapp.com/">
            <img 
            src="ProjectPilot1.jpg"
            alt="Project Pilot"
            height="300"
            href="#"
            />
          </a>
        </div>

        <div>
          <h4> E-commerce Back-End MySQL database </h4>
                    <p> Here is the GitHub link to my Ecommerce Back-End database: https://github.com/ryanhood10/ECommerceApp </p>
        </div>

        <div>
          <h4>Team Builder Application</h4>
          <p> This application uses inquirer to generate an HTML page with cards of the users on the team. 
            <br></br>
            Walkthrough Link: https://vimeo.com/797531502/4b44fd00f8
          </p>
          <a href="https://github.com/ryanhood10/TeamPageCreator">
            <img 
            src="TeamBuilder1.jpg"
            alt="Team Creator"
            height= "300"     
            href="#"     
            />
          </a>
          </div>  

          <div>
            <h4> ReadMe Generator </h4>
            <p> This application uses inquirer to prompt the user and then generate a README.md file
              <br></br>
              Here is the GitHub link: https://github.com/ryanhood10/ReadMeGenerator
             <br></br> 
              Walkthrough video: 
            </p>
          </div>

          <div>
            <h4> The Daily Planner </h4>
            <p> Here is a collaboration project. We made an interactive site where the user is presented with an interactive calander of the current month. A user can toggle between adding or removing holidays (brought in from an API), add their own events in the calander (stored in local storage), and see events for that month (brought in from Ticketmaster API). The user also has the option to search for other cities, or share their location- the geolocated automatically shows an events calander for local events to the user.  </p>
            <a href="https://nmotley92.github.io/group-project/">
              <img
              src="DailyPlanner1.png"
              alt="The Daily Planner"
              height="300"
              href="#"
              />
            </a>
            <a href="https://nmotley92.github.io/group-project/">
              <img
              src="DailyPlanner2.jpg"
              alt="The Daily Planner"
              height="300"
              href="#"
              />
            </a>
          </div>
       




        <div className="project-container">
          <h4>Horiseon Project</h4>
          <a href="https://ryanhood10.github.io/Challenge1Horiseon/">
            <img
              src="website-top-screen-shot.png"
              alt="Webpage Example 1"
              height="300"
              href="#"
            />
            <br />
          </a>
        </div>
        <div className="project-container">
          <a href="https://ryanhood10.github.io/Challenge1Horiseon/">
            <img
              src="website-bottom-screen-shot.png"
              alt="Webpage Example 2"
              height="300"
              href="#"
            />
            <br />
          </a>
        </div>

        <div className="project-container">
          <h4>Flexbox Project</h4>
          <a href="https://google.com">
            <img
              src="Screenshot slack.png"
              alt="Project 2g"
              height="300"
              href="#"
            />
          </a>
        </div>
      </div>
       </>
    
   
  );
}

export default Portfolio;
