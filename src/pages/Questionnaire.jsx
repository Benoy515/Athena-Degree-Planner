import { useState } from 'react';
import Select from "react-select";
import axios from 'axios';

import PlanView from '../components/PlanView'
import AddAPExam from '../components/AddAPExam'

let testCourses = [
  {
    subject: "CS",
    number: "124",
    name: "Intro to Computer Science",
    requirements: ["Degree Requirement"],
    hours: 3,
    description: "Basic concepts in computing and fundamental techniques for solving computational problems. Intended as a first course for computer science majors and others with a deep interest in computing.",
    color: "cyan"
  },
  {
    subject: "HIST",
    number: "103",
    name: "A History of Everything: The Big Bang to Big Data",
    requirements: ["Cultural Studies - Western", "Humanities - Hist & Phil"],
    hours: 3,
    description: 'This introductory survey in "Big History" explores different scales of time as it places human history in larger geological, ecological, and cosmic contexts. Topics include the big bang, planet formation, the origin and development of life, mass extinctions, the emergence of Homo sapiens, the development of agriculture and cities, wars, plagues, and natural disasters, the advent of religion and science, political revolutions, industrialization and globalization, and human impact on the environment.',
    color: "violet"
  },
  {
    subject: "LAS",
    number: "101",
    name: "Design Your First Year Experience",
    requirements: [],
    hours: 1,
    description: "Design Your First Year Experience orients students to the academic environment at Illinois and establishes a useful framework for engaging in learning both inside and outside the classroom and articulating a purpose for their education. Using design-thinking, students explore campus resources, set goals for their academic, personal and professional development during their first year and make multiple (engagement) maps for reaching those goals.",
    color: "orange"
  },
  {
    subject: "MATH",
    number: "257",
    name: "Linear Algebra with Computational Applications",
    requirements: ["Degree Requirement"],
    hours: 3,
    description: "Introductory course incorporating linear algebra concepts with computational tools, with real world applications to science, engineering and data science. Topics include linear equations, matrix operations, vector spaces, linear transformations, eigenvalues, eigenvectors, inner products and norms, orthogonality, linear regression, equilibrium, linear dynamical systems and the singular value decomposition.",
    color: "red"
  },
  {
    subject: "CS",
    number: "100",
    name: "Computer Science Orientation",
    requirements: ["Degree Requirement"],
    hours: 1,
    description: "Introduction to Computer Science as a field and career for incoming first year and external transfer students in the computer science majors. Overview of the field and specific examples of problem areas and methods of solution.",
    color: "cyan"
  }
]

export default function Questionnaire() {
  const majorOptions = [
    { value: "CSEcon", label: "Computer Science + Economics" },
    { value: "CS", label: "Computer Science" },
    { value: "CSMath", label: "Computer Science and Mathematics" },
    { value: "CSStat", label: "Computer Science and Statistics" },
    { value: "Aero", label: "Aerospace Engineering" },
  ];

  
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [completed, setCompleted] = useState(false)
  const [plan, setPlan] = useState([])

  const [addAP, setAddAP] = useState(false)
  const [completedAPs, setCompletedAPs] = useState([
    { value: "Biology", label: "Biology", score: "5" },
  ])

  const handleUpdate = (newPlan) => {
    setPlan(newPlan)
  }

  const handleSelect = (selectedOption) => {
    setSelectedMajor(selectedOption);
    console.log(`Option selected:`, selectedOption.value);
  };

  const handleSubmit = async () => {
    const server = {
      dev: "http://127.0.0.1:5000/plans?major=",
      prod: "https://benoy515.pythonanywhere.com/plans?major="
    }
    // console.log(`http://127.0.0.1:5000/plans?major=${selectedMajor.value}&aps=${completedAPs.map((ap) => ap.value+'-'+ap.score).join(",")}`)
    try {
      const {data} = await axios.get(`${server.prod}${selectedMajor.value}&aps=${completedAPs.map((ap) => ap.value+'-'+ap.score).join(",")}`)
        console.log("SUCCESS", data)
        // console.log(response.data.courses)
        setPlan(data.plan)
        console.log(plan)
      } catch (error) {
        console.log(error)
      } finally {
        console.log("FINALLY")
        setCompleted(true)
      }
  }

  const handleAddAP = (ap, score) => {
    setAddAP(false)
    if (ap === null || score === null) return
    setCompletedAPs([...completedAPs, {value: ap.value, label: ap.label, score: score.value}])
  }

  return (
    <>
    {!completed ? <div className="flex justify-center align-middle grow">
      <div className="border-black text-center w-4/5 py-5 px-5">
        <h1 className="text-5xl font-semibold">Questionnaire</h1>
        <h2 className='text-xl mt-2 mb-4'>What is your major?</h2>
        <Select options={majorOptions} onChange={handleSelect} className=''/>

        <h2 className="text-4xl font-semibold mt-4">AP Exams</h2>
        {/* <Select options={apOptions} isMulti onChange={setSelectedAPs} className='mx-5'/> */}
        <div className="grid grid-cols-5">
          {completedAPs.map((ap, index) => <div className='border border-black h-20 flex flex-col justify-center rounded-xl mx-2' key={index}>
            <p className='text-2xl underline'>{ap.label}</p>
            <p className='text-xl'><strong>Score:</strong> {ap.score}</p>
          </div>)}
        </div>
        {addAP ? <AddAPExam aps={completedAPs} handleAdd={handleAddAP}/> : 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 mx-auto block"
                onClick={() => setAddAP(true)}>Add AP Score</button>
        }
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
          onClick={handleSubmit}
          >Next</button>
      </div>
    </div> :
    <PlanView plan={plan} setPlan={handleUpdate}/>
  }
    </>
  )
}

