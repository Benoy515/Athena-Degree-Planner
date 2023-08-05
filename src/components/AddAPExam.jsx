import Select from "react-select";
import { useState } from "react";

export default function AddAPExam({ aps, handleAdd}) {
  const apOptions = [
    { value: "2dArt", label: "2D Art and Design" },
    { value: "3dArt", label: "3D Art and Design" },
    { value: "ArtHistory", label: "Art History" },
    { value: "Biology", label: "Biology" },
    { value: "CalculusAB", label: "Calculus AB" },
    { value: "CalculusBC", label: "Calculus BC" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Chinese", label: "Chinese Language and Culture" },
    { value: "CompGov", label: "Comparative Government and Politics" },
    { value: "CompSciA", label: "Computer Science A" },
    { value: "CompSciPrin", label: "Computer Science Principles" },
    { value: "Drawing", label: "Drawing" },
    { value: "EnglishLang", label: "English Language and Composition" },
    { value: "EnglishLit", label: "English Literature and Composition" },
    { value: "EnvironmentalScience", label: "Environmental Science" },
    { value: "EuropeanHistory", label: "European History" },
    { value: "French", label: "French Language and Culture" },
    { value: "German", label: "German Language and Culture" },
    { value: "HumanGeography", label: "Human Geography" },
    { value: "Italian", label: "Italian Language and Culture" },
    { value: "Japanese", label: "Japanese Language and Culture" },
    { value: "Latin", label: "Latin" },
    { value: "Macro", label: "Macroeconomics" },
    { value: "Micro", label: "Microeconomics" },
    { value: "MusicTheory", label: "Music Theory" },
    { value: "Physics1", label: "Physics 1: Algebra-Based" },
    { value: "Physics2", label: "Physics 2: Algebra-Based" },
    { value: "PhysicsCEM", label: "Physics C: Electricity and Magnetism" },
    { value: "PhysicsCMech", label: "Physics C: Mechanics" },
    { value: "Precalculus", label: "Precalculus" },
    { value: "Psychology", label: "Psychology" },
    { value: "Research", label: "Research" },
    { value: "Seminar", label: "Seminar" },
    { value: "Spanish", label: "Spanish Language and Culture" },
    { value: "SpanishLit", label: "Spanish Literature and Culture" },
    { value: "Statistics", label: "Statistics" },
    { value: "USGov", label: "United States Government and Politics" },
    { value: "USHist", label: "United States History" },
    { value: "WorldHistory", label: "World History" },
  ]

  const scores = [
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "3", label: "3" },
    { value: "2", label: "2" },
    { value: "1", label: "1" },
  ]

  const [selectedAP, setSelectedAP] = useState(null);
  const [selectedScore, setSelectedScore] = useState(null);

  return (
    <div className="grid grid-cols-8 my-3">
      <Select options={apOptions} onChange={setSelectedAP} className='mr-2 col-span-6'/>
      <Select options={scores} onChange={setSelectedScore} className='ml-2 col-span-1' isSearchable={false}/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 ml-3 my-auto h-full rounded col-span-1"
              onClick={() => handleAdd(selectedAP, selectedScore)}>Add</button>
    </div>
  )
}