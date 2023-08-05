import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [message, setMessage] = useState({})

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/test').then(response => {
        console.log("SUCCESS", response)
        setMessage(response.data)
        console.log(message)
        }).catch(error => {
        console.log(error)
        })

    }, [])

    return (
        <div className="h-auto bg-gradient-to-br from-blue-900 to-blue-500 2xl:px-64 lg:px-48 py-44">
            <div className="flex flex-row gap-12 my-auto">
                <div className="basis-1/2 my-auto">
                    <h1 className="font-poppins text-white 2xl:text-6xl leading-snug xl:text-4xl">Create your perfect schedule with Athena</h1>
                    <p className="font-poppins text-white 2xl:text-2xl xl:text-xl mt-4">Athena helps you plan your entire major factoring in class credit, early graduation plans, and more.</p>
                    <p>{message.test}</p>
                    <button className="font-poppins text-white text-xl font-bold mt-4 py-3 px-6 border-2 border-white rounded-xl hover:text-custom-100 hover:bg-white transition duration-200">Get Started</button>
                </div>
                <div className="basis-1/2 my-auto">
                    <img className="rounded-3xl " src={"../src/images/squareCourses.png"}></img>
                </div>
            </div>
        </div>
    )
}

export default Home