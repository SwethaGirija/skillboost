import React from 'react';
import './Course.css'

// Import images
import html from '../assets/html.png';
import cssLogo from '../assets/css logo.png';
import jsLogo from '../assets/js1.png';
import pyLogo from '../assets/py.jpeg';
import reactLogo from '../assets/react.png';
import mysqlLogo from '../assets/musql.png';
import nodeLogo from '../assets/node.png';
import cLogo from '../assets/c.png';

const languages = [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'C', logo: cLogo },
    { name: 'Python', logo: pyLogo },
    { name: 'React', logo: reactLogo },
    { name: 'mysql', logo: mysqlLogo },
    { name: 'Node', logo: nodeLogo },
];

const Course = () => {
    const handleClick = (languageName) => {
        // Redirect to the page corresponding to the clicked language
        window.location.href = `/${languageName}`;
    };

    return (
        <div className="App">
            <h1>Welcome to Programming Languages!</h1>
            <br></br>
            <div className="language-list">
                {languages.map((language, index) => (
                    <div key={index} className="language-item" onClick={() => handleClick(language.name)}>
                        <img src={language.logo} alt={language.name} />
                        <p style={{ fontSize: '2em', fontWeight:'2em' }}>{language.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
