import React from "react";
import "../../assets/scss/Home.scss";
import johnDemonte from "../../assets/images/JohnDemonte.jpg";
import slide1 from "../../assets/images/SliderPic1.jpg";
import slide2 from "../../assets/images/SliderPic2.jpg";
import slide3 from "../../assets/images/SliderPic3.jfif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="HomeContainer">
        <Slider {...settings}>
          <img className="sliderImg" src={slide1} alt="slide1img" />
          <img className="sliderImg" src={slide2} alt="slide2img" />
          <img className="sliderImg" src={slide3} alt="slide3img" />
        </Slider>
        <div className="setgoals">
          <div className="goalMission">
            <div className="Mission">
              <h2>Mission:</h2>
              <p>
                Facilitating Self and Social Transformation promoting Ethical
                Consciousness, Intellectual Potentials, Governing Competency
                with Creative Personal and Social Commitment
              </p>
            </div>
          </div>
          <div className="goalMotto">
            <div className="Motto">
              <h2>Motto:</h2>
              <p>Skillful and Ethical Leadership For Good Governance</p>
            </div>
            <div className="Vision">
              <h2>Vision:</h2>
              <p>Humanistic Society based on Fraternity, Justice and Peace</p>
            </div>
          </div>
        </div>
        <div className="johnDemonte">
          <div className="johnDemonteImg">
            <img src={johnDemonte} alt="Sir John Demonte" />
          </div>
          <div>
            <strong>Sir John DeMonte</strong> was an incomparable philanthropist
            of the 19 th century and the biggest benefactor of the Archdiocese
            of Madras- Mylapore. He gifted most of his wealth and property for
            the education of the poor and needy.{" "}
            <strong>JD Academy of Excellence</strong> takes pride in initiating
            his legacy and aim by promoting knowledge revolution among the young
            generation and equipping them with skills and values and this create
            ethical leadership and just governance.
          </div>
        </div>
        <div>
          <h2>Objectives:</h2>
          <ul>
            <li>
              To build and enrich Knowledge, Attitude, Skills and Values (KASV)
              as the core foundation at the school level.
            </li>
            <li>
              To promote the academic competency of the learners through
              innovative and creative teaching and learning process.
            </li>
            <li>
              To offer professional coaching for all exams, such as JEE, NEET,
              CA, UPSC, TNPSC, SSC, IBPS, NET, SET, TET, GRE, TOEFL, IELTS and
              more.
            </li>
            <li>
              To prepare young aspirants in professional careers through courses
              in the schools of Journalism, Corporate Law, Counselling,
              Languages, Data Science, Artificial Intelligence (AI), Machine
              Learning (ML), and such others.
            </li>
            <li>
              To train and develop Entrepreneurs in Small Scall Businesses and
              Industries.
            </li>
            <li>
              To undertake research and development - oriented programmes and
              projects in socio-economic and anthropological studies.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
