import Navbar from "../components/Navbar";
import "./Home.css";
import { FaLaptopCode, FaBriefcase, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <Navbar />  
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Learn Programming & Build Your Career  
            <span>With India’s Best Online Training</span>
          </h1>
          <p>Live classes • Real projects • Internship • Job Assistance</p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Popular Courses</h2>

        <div className="course-grid">

          <div className="course-card">
            <FaLaptopCode className="course-icon" />
            <h3>Full Stack Development</h3>
            <p>Learn React, Node.js, Express, MySQL</p>
          </div>

          <div className="course-card">
            <FaLaptopCode className="course-icon" />
            <h3>Python Programming</h3>
            <p>Basics to Advanced | Projects Included</p>
          </div>

          <div className="course-card">
            <FaLaptopCode className="course-icon" />
            <h3>Java Programming</h3>
            <p>OOPS, Spring Boot, Real-world projects</p>
          </div>

          <div className="course-card">
            <FaLaptopCode className="course-icon" />
            <h3>DevOps</h3>
            <p>Monitoring, CI/CD, Cloud Services</p>
          </div>

         
          <div className="course-card">
            <FaLaptopCode className="course-icon" />
            <h3>UI/UX Designing</h3>
            <p>Figma, UI Principles, Prototyping</p>
          </div>


         
        </div>
      </section>
      <section>
        <h2>Up Comming Courses</h2>   
        <div className="" id="up-comming">
            <FaLaptopCode className="course-icon" />
            <h3>AI/ML</h3>
            <p>Machine Learning, Deep Learning, Neural Networks</p>
          </div>
  
        </section>  

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div className="why-card">
            <FaChalkboardTeacher className="why-icon" />
            <h3>Expert Trainers</h3>
            <p>Learn from real industry professionals.</p>
          </div>

          <div className="why-card">
            <FaUserGraduate className="why-icon" />
            <h3>Internship</h3>
            <p>Work on real-time projects and gain experience.</p>
          </div>

          <div className="why-card">
            <FaBriefcase className="why-icon" />
            <h3>Job Assistance</h3>
            <p>Mock interviews, resume building & placement support.</p>
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section">
        <h2>Start Your Learning Journey Today!</h2>
        <p>Call or WhatsApp Us</p>
        <a className="btn-primary" href="tel:+91 9390966127" target="_blank">
            Call Now</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 SkillVibe Hub - All Rights Reserved.</p>
      </footer>

    </div>
    </>
  );
}
