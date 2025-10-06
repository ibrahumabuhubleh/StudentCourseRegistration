import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App(){
  return (
    <div style={{fontFamily:'system-ui', maxWidth: 960, margin:'2rem auto'}}>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>CourseReg</h1>
        <nav style={{display:'flex', gap:12}}>
          <Link to="/">Catalog</Link>
          <Link to="/health">API Health</Link>
        </nav>
      </header>
      <Outlet/>
      <footer style={{marginTop:32, fontSize:12, opacity:0.6}}>React + Spring Boot Skeleton</footer>
    </div>
  )
}
