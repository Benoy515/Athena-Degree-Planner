import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Course from './Course'

export default function Semester({ name, courses }) {
  // courses.sort((a, b) => 0.5 - Math.random())
  // const [courseList, setCourseList] = useState(courses)
  return (
    <Droppable droppableId={name}>
    {provided => (
    <div className='flex flex-col justify-center items-center px-10 py-5 mb-auto'
      {...provided.droppableProps}
      ref={provided.innerRef}>
      <h1 className='text-3xl underline'>
        {name}
      </h1>
      {courses.map((course, index) => <Course 
                          subject={course.subject}
                          number={course.number} 
                          key={course.subject+" "+course.number+" "+index}
                          name={course.name} 
                          hours={course.hours} 
                          description={course.description}
                          identifier={name+" "+course.subject+" "+course.number+" "+index}
                          index={index}
                          />)}
      {provided.placeholder}
    </div>
    )}
    </Droppable>
  )
}

