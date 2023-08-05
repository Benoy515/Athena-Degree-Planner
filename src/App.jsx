
import { NavLink, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ImBooks } from 'react-icons/im';
import { VscAccount } from 'react-icons/vsc'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { useState } from 'react';
import Semester from "./components/Semester"
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Questionnaire from './pages/Questionnaire';


let courses = [
  {
    code: "CS 124",
    name: "Intro to Computer Science",
    requirements: ["Degree Requirement"],
    credits: 3,
    description: "Basic concepts in computing and fundamental techniques for solving computational problems. Intended as a first course for computer science majors and others with a deep interest in computing.",
    color: "cyan"
  },
  {
    code: "HIST 103",
    name: "A History of Everything: The Big Bang to Big Data",
    requirements: ["Cultural Studies - Western", "Humanities - Hist & Phil"],
    credits: 3,
    description: 'This introductory survey in "Big History" explores different scales of time as it places human history in larger geological, ecological, and cosmic contexts. Topics include the big bang, planet formation, the origin and development of life, mass extinctions, the emergence of Homo sapiens, the development of agriculture and cities, wars, plagues, and natural disasters, the advent of religion and science, political revolutions, industrialization and globalization, and human impact on the environment.',
    color: "violet"
  },
  {
    code: "LAS 101",
    name: "Design Your First Year Experience",
    requirements: [],
    credits: 1,
    description: "Design Your First Year Experience orients students to the academic environment at Illinois and establishes a useful framework for engaging in learning both inside and outside the classroom and articulating a purpose for their education. Using design-thinking, students explore campus resources, set goals for their academic, personal and professional development during their first year and make multiple (engagement) maps for reaching those goals.",
    color: "orange"
  },
  {
    code: "MATH 257",
    name: "Linear Algebra with Computational Applications",
    requirements: ["Degree Requirement"],
    credits: 3,
    description: "Introductory course incorporating linear algebra concepts with computational tools, with real world applications to science, engineering and data science. Topics include linear equations, matrix operations, vector spaces, linear transformations, eigenvalues, eigenvectors, inner products and norms, orthogonality, linear regression, equilibrium, linear dynamical systems and the singular value decomposition.",
    color: "red"
  },
  {
    code: "CS 100",
    name: "Computer Science Orientation",
    requirements: ["Degree Requirement"],
    credits: 1,
    description: "Introduction to Computer Science as a field and career for incoming first year and external transfer students in the computer science majors. Overview of the field and specific examples of problem areas and methods of solution.",
    color: "cyan"
  }
]



function App() {
  let [darkMode, setDarkMode] = useState(false)
  let darkClass = darkMode ? "dark" : ""
  return (
    <Router>
      <div className={darkClass}>
        <Navbar darkMode={darkMode} handleClick={setDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Questionnaire />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}





export default App;
