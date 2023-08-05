import { NavLink } from 'react-router-dom';

export default function Navbar({darkMode, handleClick}) {
  return (
    <div className='h-16 flex flex-row justify-between'>
      <div className='grow'></div>

      {/* <button className='my-auto mr-6' >
      {darkMode ? <BsMoonStars className="text-white text-3xl" /> : <BsSun className="text-custom-100 text-3xl" />}
      </button> */}
      <NavLink to="/" className="my-auto mx-4 font-poppins">
      <p className="group text-custom-100 text-xl">About
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-custom-100"></span>
      </p>
      </NavLink>

      <NavLink to="/" className="my-auto mx-4 font-poppins">
      <p className="group text-custom-100 text-xl">FAQ
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-custom-100"></span>
      </p>
      </NavLink>

      <NavLink to="/" className="my-auto flex flex-row mx-4">
      {/* <ImBooks className="text-custom-100 text-4xl mr-2" /> */}
      <p className="text-custom-100 text-3xl font-major font-bold">Athena</p>
      </NavLink>

      <NavLink to="/account" className="my-auto mx-4 font-poppins">
      <p className="group text-custom-100 text-xl">Login
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-custom-100"></span>
      </p>
      {/* <VscAccount className="text-custom-100 text-3xl" /> */}
      </NavLink>

      <NavLink to="/" className="my-auto mx-4 font-poppins">
      <p className="group text-custom-100 text-xl">Sign Up
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-custom-100"></span>
      </p>
      </NavLink>

      <div className='grow'></div>
    </div>
  )
}