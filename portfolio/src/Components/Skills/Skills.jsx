import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaDatabase, FaPython, FaJava, FaJsSquare, FaServer,
  FaBrain, FaEye, FaRecycle
} from 'react-icons/fa';

import {
  SiPandas, SiNumpy, SiTableau, SiApachehadoop,
  SiScikitlearn, SiTensorflow, SiPytorch, SiKeras
} from 'react-icons/si';

import './Skills.css';

const allSkills = [
  { name: 'HTML', level: 90, category: 'Frontend', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS', level: 85, category: 'Frontend', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'JavaScript', level: 80, category: 'Frontend', icon: <FaJsSquare color="#F7DF1E" /> },
  { name: 'React', level: 75, category: 'Frontend', icon: <FaReact color="#61DAFB" /> },
  
  { name: 'Node.js', level: 70, category: 'Backend', icon: <FaNodeJs color="#339933" /> },
  { name: 'Java', level: 85, category: 'Backend', icon: <FaJava color="#007396" /> },
  { name: 'Python', level: 80, category: 'Backend', icon: <FaPython color="#3776AB" /> },
  
  { name: 'MySQL', level: 75, category: 'Database', icon: <FaDatabase color="#4479A1" /> },
  { name: 'MongoDB', level: 70, category: 'Database', icon: <FaDatabase color="#47A248" /> },
  
  { name: 'AI', level: 65, category: 'AI/ML', icon: <FaBrain /> },
  { name: 'ML', level: 60, category: 'AI/ML', icon: <FaEye /> },
  { name: 'DL', level: 55, category: 'AI/ML', icon: <FaRecycle /> },
  
  // Data Science skills
  { name: 'SQL', level: 80, category: 'Data Science', icon: <FaDatabase color="#4479A1" /> },
  { name: 'Pandas', level: 75, category: 'Data Science', icon: <SiPandas color="#150458" /> },
  { name: 'NumPy', level: 70, category: 'Data Science', icon: <SiNumpy color="#013243" /> },
  { name: 'Matplotlib', level: 65, category: 'Data Science', icon: <FaPython color="#3776AB" /> },
  { name: 'Tableau', level: 60, category: 'Data Science', icon: <SiTableau color="#E97627" /> },
  { name: 'Big Data', level: 65, category: 'Data Science', icon: <SiApachehadoop color="#66CCFF" /> },
  { name: 'Python', level: 70, category: 'Data Science', icon: <FaPython color="#3776AB" /> },
  { name: 'Data Preprocessing', level: 80, category: 'Data Science', icon: <FaRecycle /> },
  { name: 'Scikit-learn', level: 75, category: 'Data Science', icon: <SiScikitlearn color="#F7931E" /> },
  { name: 'TensorFlow', level: 70, category: 'Data Science', icon: <SiTensorflow color="#FF6F00" /> },
  { name: 'PyTorch', level: 65, category: 'Data Science', icon: <SiPytorch color="#EE4C2C" /> },
  { name: 'Keras', level: 70, category: 'Data Science', icon: <SiKeras color="#D00000" /> },
  { name: 'NLP', level: 70, category: 'Data Science', icon: <FaBrain /> },
  { name: 'Computer Vision', level: 60, category: 'Data Science', icon: <FaEye /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI/ML', 'Data Science'];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="skills-section" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active-tab' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="skills-container">
        {filteredSkills.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
