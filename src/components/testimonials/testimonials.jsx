import React from "react";
import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Peter Christie",
      title: "Senior Teacher",
      img: "assets/fastone-logo2.png",
      desc: "Mahier brought his energetic, engaging personality and a positive attitude towards language teaching that really resonated with his students.",
    },
    {
      id: 2,
      name: "Sonja Bernard",
      title: "Head of Career Counselling and Academic Development",
      img: "assets/unisa-logo.png",
      desc: "He is a serious person with regards to his career aspirations and put effort into mastering a new set of skills related to interpersonal communication and sensitivity for diversity.",
      featured: true,
    },
    {
      id: 3,
      name: "Won S. Yang",
      title: "CEO of Trued",
      img: "assets/trued-logo.png",
      desc: "He performs at the highest level in instructing different levels of students with excellent reviews from the students and management.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
