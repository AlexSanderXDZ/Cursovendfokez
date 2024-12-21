import React from 'react'

function CourseCard({ title, description }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Saiba mais</button>
    </div>
  )
}

export default CourseCard