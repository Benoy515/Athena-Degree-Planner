import { DragDropContext } from 'react-beautiful-dnd';

import Semester from './Semester';

export default function PlanView({plan, setPlan}) {

  const onDragEnd = ({source, destination}) => {
    if (destination === undefined || destination === null) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    const start = plan.find((semester) => semester.name === source.droppableId)
    const end = plan.find((semester) => semester.name === destination.droppableId)

    if ( start === end ) {
      const newList = start.courses.filter(
        (_, idx) => idx !== source.index
      )
      newList.splice(destination.index, 0, start.courses[source.index])

      const newColumn = {
        name: start.name,
        courses: newList
      }
      // console.log(newColumn)

      const newPlan = plan.map((semester) => {
        if (semester.name === start.name) {
          return newColumn
        } else {
          return semester
        }
      })
      console.log("Before", newPlan)
      setPlan(newPlan)
      console.log("After", plan)

    } else {
      const newStartList = start.courses.filter(
        (_, idx) => idx !== source.index
      )
      const newEndList = end.courses
      newEndList.splice(destination.index, 0, start.courses[source.index])

      setPlan(plan.map((semester) => {
        if (semester.name === start.name) {
          return {
            name: start.name,
            courses: newStartList
          }
        } else if (semester.name === end.name) {
          return {
            name: end.name,
            courses: newEndList
          }
        } else {
          return semester
        }
      }))
    }
  }

  return (
  <DragDropContext onDragEnd={onDragEnd}>
  <div className='flex flex-row align-top overflow-scroll divide-x-2'>
    {plan.map((semester) => {
      return <Semester key={semester.name} name={semester.name} courses={semester.courses}/>
    })}
    {/* <Semester name="Fall 2022" courses={testCourses}/>
    <Semester name="Spring 2023" courses={testCourses}/>
    <Semester name="Fall 2023" courses={testCourses}/>
    <Semester name="Spring 2023" courses={testCourses}/>
    <Semester name="Fall 2024" courses={testCourses}/> */}
  </div>
  </DragDropContext>
  )
}