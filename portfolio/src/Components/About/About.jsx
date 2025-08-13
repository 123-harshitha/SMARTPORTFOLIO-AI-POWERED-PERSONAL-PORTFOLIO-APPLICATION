import React from 'react';
import './About.css';
import photo1 from '../../assets/photo1.png';

const About = () => {
  return (
    <div className='about' id = 'about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className='about_sections'>
        <div className="about-left">
          <img src={photo1} alt="Harshitha" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a dedicated and curious learner with a strong interest in full stack development and AI/ML. With hands-on experience in building responsive web applications and intelligent systems, I enjoy turning ideas into real-world solutions.
            </p>
            <p>
              I’m always eager to explore new technologies and improve my skills through practical projects and continuous learning. My goal is to contribute meaningfully to innovative and impactful tech.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements - Do not touch */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>9+</h1>
          <p>CGPA</p>
        </div>
        <div className="about-achievement">
          <h1>4th Place in Hackathon</h1>
          <p>IIT Bombay</p>
        </div>
        <div className="about-achievement">
          <h1>5</h1>
          <p>Projects Completed</p>
        </div>
      </div>

      {/* Education Section */}
      
      
    </div>
  );
};

export default About;
