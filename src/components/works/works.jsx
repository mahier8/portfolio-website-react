import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/icons/icons8-briefcase-50-white.png",
      title: "Career",
      desc: "I have been developing projects for the past two years. I started my development journey by completing a few certifications with FreeCodeCamp and then moved swiftly to develop a portfolio. I then continued by focusing on front-end development, leading me to specialize in React.",
      img: "./assets/portfolio-images/Mahier-Sydow-photo.jpg",
    },
    {
      id: "2",
      icon: "./assets/icons/icons8-africa-50.png",
      title: "Background",
      desc: "Originally from a psychology an educational background, I taught children and adults in South Korea for 7 years, learning many valuable skills along the way. I am from South Africa and, I have a Bachelor's Degree in Psychology and a Master's Degree in Applied Linguistics.",
      img: "./assets/portfolio-images/KakaoTalk_20210706_121610089_02.jpg",
    },
    {
      id: "3",
      icon: "./assets/icons/icons8-soccer-50.png",
      title: "Hobbies",
      desc: "Outside of development and education I spend most of my time with my family or playing football. I have been a Liverpool FC supporter for 30 years, and, with the help of my Wife, we visited Anfield for our honeymoon.",
      img: "./assets/portfolio-images/KakaoTalk_20210706_120748813.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Read More</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
