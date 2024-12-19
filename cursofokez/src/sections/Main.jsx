import React from 'react';

function Main() {
  return (
    <div>
       <main style={styles.main}>
      <section id="courses" style={styles.section}>
        <h2 style={styles.sectionTitle}>Nossos Cursos</h2>
        <div style={styles.courseList}>
          <CourseCard title="Curso de React" description="Aprenda React do zero ao avançado." price="R$ 199,99" />
          <CourseCard title="Curso de JavaScript" description="Domine a linguagem que move a web." price="R$ 149,99" />
          <CourseCard title="Curso de Design" description="Desperte o designer em você." price="R$ 99,99" />
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>Sobre Nós</h2>
        <p style={styles.text}>Somos especialistas em oferecer cursos de alta qualidade para capacitar você no mercado de trabalho.</p>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contato</h2>
        <p style={styles.text}>Email: contato@cursotop.com</p>
        <p style={styles.text}>Telefone: (11) 98765-4321</p>
      </section>
    </main>
    </div>
  )
}

export default Main
