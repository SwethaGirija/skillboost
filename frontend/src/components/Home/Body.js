import React from 'react';
import './Body.css';
import profile from '../assets/profile.png'
import profile1 from '../assets/profile1.png'

const Body = () => {
    const testimonialData = [
        {
            text: "This platform has helped me enhance my skills and advance my career.",
            rating: 5,
            profilePic: profile
        },
        {
            text: "The courses are well-structured and easy to follow. Highly recommended!",
            rating: 4,
            profilePic: profile1
        },
        // Add more testimonials here
    ];
    const reactcourse = () => {
        window.location.href = 'https://youtu.be/SqcY0GlETPk?si=wxZXJCYbgtPQyVPt';
    };
    const javascriptcourse = () => {
        window.location.href = 'https://youtu.be/EerdGm-ehJQ?si=AWA-vYKf6i9a9vto';
    };
    const web = () => {
        window.location.href = 'https://youtu.be/Q33KBiDriJY?si=hAzURGseT0BVdnrG';
    };
    const python = () => {
        window.location.href = 'https://youtu.be/_uQrJ0TkZlc?si=AkM-SyqLQ59EjECN';
    };
  return (
    <div className="learning-body" style={{backgroundImage: 'url("")'}}>
      <div className="overlay">
      <div className="container">
      <h1>Welcome to Our Learning Platform</h1>
      <br></br>
      <p>Explore our courses and start learning today!</p>
      <br></br>
            <br></br>
            <h1>basic courses</h1>
    </div>
        <div className="courses">
          <div className="course">
            <h2>Course 1: Introduction to React</h2>
            <p>A beginner-friendly course to learn React.js from scratch.</p>
            <button  onClick={reactcourse}>Click Here</button>
          </div>
          <div className="course">
            <h2>Course 2:  JavaScript</h2>
            <p>Take your JavaScript skills to the next level with this advanced course.</p>
            <button onClick={javascriptcourse}>Click Here</button>
          </div>
          <div className="course">
            <h2>Course 3: Web Development Fundamentals</h2>
            <p>Learn the basics of web development including HTML, CSS, and JavaScript.</p>
            <button onClick={web}>Click Here</button>
          </div>
          <div className="course">
            <h2>Course 4: Python Programming</h2>
            <p>Get started with Python programming language and build your first projects.</p>
            <button onClick={python}>Click Here</button>
          </div>
        </div>
        <div className="testimonial">
         
          <br></br>
          <br></br>
          <div className="testimonial-content">
          {testimonialData.map((testimonial, index) => (
                <div key={index} className="testimonial">
                    <img className="profile-pic" src={testimonial.profilePic} alt={`Profile ${index + 1}`} />
                    <div className="feedback">
                        <p>{testimonial.text}</p>
                        <div className="rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="star">&#9733;</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
