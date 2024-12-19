import React from 'react';
import Header from '../sections/Header';
import Main from '../sections/Main';
import Footer from '../sections/Footer';
import CourseCard from '../components/CourseCard';


function LandingPage() {
  return (
    <div className="landing-page">
    <Header />
    <Main />
    <section id="courses" className="courses-section">
      <div className="container">
        <h2>Nossos Cursos</h2>
        <div className="courses-grid">
          <CourseCard title="Curso 1" description="Descrição do curso 1." />
          <CourseCard title="Curso 2" description="Descrição do curso 2." />
          <CourseCard title="Curso 3" description="Descrição do curso 3." />
        </div>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export default LandingPage
