import React from 'react';
import '../components/assets/SplashScreen.css'; // create this css file

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      
      <div>
        <img src="js.png" alt='JavaScript'></img>
      </div>
      
      <div>
        <img src="api.png" alt='REST APIs'></img>
      </div>

      <div>
        <img src="database.png" alt='MongoDB'></img>
      </div>

      <div>
        <img src="html-5.png" alt='HTML5'></img>
      </div>

      <div>
      <h1>Welcome to Ryan Hood's Portfolio Page!</h1>
      </div>


      <div>
        <img src="nodejs.png" alt='NodeJS'></img>
      </div>

      <div>
        <img src="python.png" alt='Python'></img>
      </div>
      
      <div>
        <img src="react.png" alt='React'></img>
      </div>

      <div>
        <img src ="coding.png" alt="Programming"></img>
      </div>

      
      {/* Add more content here as needed */}
    </div>



  );
};

export default SplashScreen;
