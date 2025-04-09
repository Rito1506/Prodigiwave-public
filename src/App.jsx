import { Routes, Route } from "react-router-dom";
import "tailwindcss";
import Maintenance from './Components/404_Page'
import Services from './Components/Services'
import './App.css'



export default function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Maintenance/>} />
    <Route path="/services" element={<Services/>} />
    </Routes>
    </>
  )
}