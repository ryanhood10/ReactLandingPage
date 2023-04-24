import React from "react";
import "../assets/App.css";

function Portfolio() {
  return (
 <>
    <div className="projects-div">
       
      <h1 id="Portfolio">Portfolio</h1>

        <div className="project-container">
          <h4> Social Media Application </h4>
          <p> This is a collaboration project. I was responsible for part of the back-end, authentication and connecting the front and back end.
            <br></br>
            Here is the GitHub repo link: https://github.com/JuanMullert/WOTS_PROJECT
             <br></br>
             Click one of the pictures below to go to the applications live link!
             </p>
              <div className="image-wrapper">
          <a href="https://wotsproject.herokuapp.com/">
            <img
            src={`${process.env.PUBLIC_URL}/WOTS1.png`}
            alt="Social Media App"
            height="100"
            href= "#"
            />
          </a>
          <a href="https://wotsproject.herokuapp.com/">
            <img
            src={`${process.env.PUBLIC_URL}/WOTS2.png`}
            alt="Social Media App"
            height="200"
            href= "#"
            />
          </a>
          <a href="https://wotsproject.herokuapp.com/">
            <img
            src={`${process.env.PUBLIC_URL}/WOTS3.png`}
            alt="Social Media App"
            height="200"
            href= "#"
            />
          </a>
            </div>
 
        <div>
          <h4> Book Search Application </h4>
          <div className="image-wrapper">
          <a href="https://search4booksapplication.herokuapp.com/">
            <img
            src={`${process.env.PUBLIC_URL}/BookSearch1.jpg`}
            alt="Reading List Application"
            height="200"
            href= "#"
            />
          </a>
          </div>
          <p>Here is my GitHub repo link: <a href="https://github.com/ryanhood10/SearchBookEngine"> https://github.com/ryanhood10/SearchBookEngine </a> </p>
       </div>

        <div>
          <h4> Social Media API </h4>
          <p> Here is my GitHub repo link: <a href="https://github.com/ryanhood10/APISocialNetwork">https://github.com/ryanhood10/APISocialNetwork </a>
            <br></br>
            Here is my walkthrough video for the API: <a href="https://vimeo.com/808889435/a043a20c80">https://vimeo.com/808889435/a043a20c80 </a>  
            </p>
        </div>

        <div>
          <h4>Here is my gist written about Regex expressions</h4>
          <p> <a href="https://gist.github.com/ryanhood10/105761ece421c3b00f36f0065b127e19https://gist.github.com/ryanhood10/105761ece421c3b00f36f0065b127e19"> https://gist.github.com/ryanhood10/105761ece421c3b00f36f0065b127e19https://gist.github.com/ryanhood10/105761ece421c3b00f36f0065b127e19
              </a>
          </p>
        </div>

        <div>
          <h4> Project Manager Application </h4>
          <p> (written with HandleBars) here is GitHub repo: <a href="https://github.com/ryanhood10/ProjectManager"> https://github.com/ryanhood10/ProjectManager </a></p>
          <div className="image-wrapper">
          <a href="https://floating-bayou-84303.herokuapp.com/">
            <img 
            src={`${process.env.PUBLIC_URL}/ProjectPilot1.jpg`}
            alt="Project Pilot"
            height="300"
            href="#"
            />
          </a>
          </div>
        </div>

        <div>
          <h4> E-commerce Back-End MySQL database </h4>
                    <p> Here is the GitHub link to my Ecommerce Back-End database: <a href="https://github.com/ryanhood10/ECommerceApp"> https://github.com/ryanhood10/ECommerceApp </a> </p>
        </div>

        <div>
          <h4>Team Builder Application</h4>
          <p> This application uses inquirer to generate an HTML page with cards of the users on the team. 
            <br></br>
            Walkthrough Link: <a href="https://vimeo.com/797531502/4b44fd00f8">  https://vimeo.com/797531502/4b44fd00f8 </a>
          </p>
          <div className="image-wrapper">
          <a href="https://github.com/ryanhood10/TeamPageCreator">
            <img 
            src={`${process.env.PUBLIC_URL}/TeamBuilder1.jpg`}
            alt="Team Creator"
            height= "300"     
            href="#"     
            />
          </a>
          </div>
          </div>  

          <div>
            <h4> ReadMe Generator </h4>
            <p> This application uses inquirer to prompt the user and then generate a README.md file
              <br></br>
              Here is the GitHub link: <a href="https://github.com/ryanhood10/ReadMeGenerator"> https://github.com/ryanhood10/ReadMeGenerator </a>
             <br></br> 
              Walkthrough video: 
            </p>
          </div>

          <div>
            <h4> The Daily Planner </h4>
            <p> Here is a collaboration project. We made an interactive site where the user is presented with an interactive calander of the current month. A user can toggle between adding or removing holidays (brought in from an API), add their own events in the calander (stored in local storage), and see events for that month (brought in from Ticketmaster API). The user also has the option to search for other cities, or share their location- the geolocated automatically shows an events calander for local events to the user.  </p>
            <div className="image-wrapper">
            <a href="https://nmotley92.github.io/group-project/">
              <img
              src={`${process.env.PUBLIC_URL}/DailyPlanner1.png`}
              alt="The Daily Planner"
              height="300"
              href="#"
              />
            </a>
            <a href="https://nmotley92.github.io/group-project/">
              <img
              src={`${process.env.PUBLIC_URL}/DailyPlanner2.jpg`}
              alt="The Daily Planner"
              height="300"
              href="#"
              />
            </a>
            </div>
          </div>

          <div>
            <h4> Weather Forecast</h4>
            <p> This application takes in a weather API and projects a 5 day forecast, with icons to match the weather accordingly. It allows the user to search for different cities, and also stores recent searches in local storage until "Clear Searches" button is clicked.
              <br></br>
              Here is the link to the GitHub repo: <a href="https://github.com/ryanhood10/Module6Challenge"> https://github.com/ryanhood10/Module6Challenge </a>
              <br></br>
              Click one of the pictures below to go to the applications live link!
            </p>
            <div className="image-wrapper">
            <a href="https://ryanhood10.github.io/Module6Challenge/">
              <img
              src={`${process.env.PUBLIC_URL}/WeatherForecast1.png`}
              alt="Weather Forecast"
              height="300"
              href="#"
              />
            </a>
            <a href="https://ryanhood10.github.io/Module6Challenge/">
              <img
              src={`${process.env.PUBLIC_URL}/WeatherForecast2.png`}
              alt="Weather Forecast"
              height="300"
              href="#"
              />
            </a>
            </div>
          </div>

          <div>
            <h4> Local Storage Single Day Planner</h4>
            <p> Here is an application where I used dayJS to take the current time from the user and change the shade of the textboxes according to past, present and future. The user can input events for a single day in their local storage.
              <br></br>
              Here is the link to the GitHub repo: <a href="https://github.com/ryanhood10/DayPlanner"> https://github.com/ryanhood10/DayPlanner </a>  , click on the photo below to go to the live application link.
            </p>
            <div className="image-wrapper">
            <a href="https://ryanhood10.github.io/DayPlanner/">
              <img
              src={`${process.env.PUBLIC_URL}/DayPlanner1.png`}
              alt="DayPlanner"
              height="300"
              href="#"
              />
            </a>
            </div>
          </div>

          <div>
            <h4> Javascript Quiz </h4>
            <p> This is an application I built only using Javascript, HTML and CSS. The user is presented with a "start quiz" button. Once it is clicked, a timer of 1:30 begins counting down. The user is asked 5 quiz questions that must be answered before time expires. When time expires or the user answers all 5 questions, then you are presented with your quiz grade.
              <br></br>
              Here is the link to the GitHub repo: <a href="https://github.com/ryanhood10/QuizAppJava"> https://github.com/ryanhood10/QuizAppJava </a> . Click the picture below to go to the applications live link!
               </p>
               <div className="image-wrapper">
               <a href="https://ryanhood10.github.io/QuizAppJava/">
              <img
              src={`${process.env.PUBLIC_URL}/JavascriptQuiz1.png`}
              alt="Javascript Quiz"
              height="300"
              href="#"
              />
            </a>
            </div>
          </div>

          <div>
            <h4> Password Generator </h4>
            <p> This application was made with Javascript, HTML and CSS. The user is prompted for the following requirements of a randomly generated password: 
              <br></br>
              1. How many characters? 2. Do you want numbers? 3. Do you want lowercase? 4. Do you want uppercase? 5. Include symbols?
              <br></br>
              Then the user is presented a randomly generated password with their requirements. GitHub repo link: <a href="https://github.com/ryanhood10/Pass-Generator">https://github.com/ryanhood10/Pass-Generator</a>
              <br></br>
              Click picture below to go to applications live link!
               </p>
               <div className="image-wrapper">
               <a href="https://ryanhood10.github.io/Pass-Generator/">
                <img
                src={`${process.env.PUBLIC_URL}/PasswordGenerator1.jpg`}
                alt="Password Generator"
                height= "300"
                href= "#"
                />
               </a>
               <a href="https://ryanhood10.github.io/Pass-Generator/">
                <img
                src={`${process.env.PUBLIC_URL}/PasswordGenerator1.jpg`}
                alt="Password Generator"
                height= "300"
                href= "#"
                />
               </a>
               </div>
          </div>
       

        <div className="project-container">
          <h4>My Old Landing Page</h4>
          <p> Here is my old landing page that I made just using HTML and CSS. I don't have much use for it now, but it has a dad joke API at the bottom of the screen where a user is given a new joke everytime the button is clicked.
            <br></br>
            This used to be the page that held my Portfolio. (It is not up to date like this one). Click the picture below to go to the live link! </p>
            <div className="image-wrapper">
          <a href="https://ryanhood10.github.io/RyansLandingPage/">
            <img
              src={`${process.env.PUBLIC_URL}/LandingPage1.jpg`}
              alt="My Old Landing Page"
              height="300"
              href="#"
            />
          </a>
          </div>
        </div>
      </div>
      </div>
       </>
    
   
  );
}

export default Portfolio;
