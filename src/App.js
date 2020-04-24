import React from 'react';
import Header from './components/Header';
import Name from './components/Name';
import TechnicalProfile from './components/TechnicalProfile';
import ProfesionalExperience from './components/ProfesionalExperience';
import Education from './components/Education';
import Courses from './components/Courses';
import Languages from './components/Languages';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Name />
      <TechnicalProfile />
      <ProfesionalExperience />
      <Education />
      <Courses />
      <Languages />
    </div>
  );
}

export default App;
