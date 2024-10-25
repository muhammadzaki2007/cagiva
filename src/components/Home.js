import React from 'react';
import './App.css'; // CSS untuk styling

const Profile = () => {
  return (
    // <div className="container">
    //   <header className="header">
    //     <div className="logo">
    //       <img src="path-to-your-logo" alt="Logo Fitri" />
    //     </div>
    //     <h1>Curriculum Vitae</h1>
    //     <p>Posted by Cagiva</p>
    //     <nav>
    //       <ul>
    //         <li><a href="#">Home</a></li>
    //         <li><a href="#">Overview</a></li>
    //         <li><a href="#">About Me</a></li>
    //         <li><a href="#">Skill & Pengalaman</a></li>
    //       </ul>
    //     </nav>
    //   </header>
      <section className="profile">
        <img src="/pp/cagiva.jpg" alt="Cagiva Nur Stella" className="profile-image" />
        <div className="profile-info">\
          <h2>Hi, I'm Cagiva Nur Stella</h2>
          <p>Grade 12 student at SMK Muhammadiyah 04 Sukorejo, majoring in Software Engineering (RPL) or Software and Game Development (PPLG).</p>
          <p>I understand a little about HTML and CSS, with basic knowledge of JavaScript. I chose the RPL major, because I wanted to deepen my skills in web development and learn more about programming.</p>
          <button className="next-btn">Berikutnya</button>
        </div>
      </section>
  );
}

export default Profile;
