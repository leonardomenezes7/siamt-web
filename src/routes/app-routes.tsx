import { Routes, Route } from "react-router-dom"
import { Home } from "@/pages/home"
import { About } from "@/pages/about"
import { Admin } from "@/pages/admin"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  )
}
