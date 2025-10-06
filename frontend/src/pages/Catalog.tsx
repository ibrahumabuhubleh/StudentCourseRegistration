import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Course = { id:number, code:string, title:string, credits:number }

export default function Catalog(){
  const [q, setQ] = useState('')
  const [data, setData] = useState<Course[]>([])

  async function load(){
    const res = await axios.get(`/api/courses`, { params: { q } })
    setData(res.data)
  }
  useEffect(()=>{ load() }, [])

  return (
    <div>
      <h2>Course Catalog</h2>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <input placeholder="Search code or title" value={q} onChange={e=>setQ(e.target.value)} />
        <button onClick={load}>Search</button>
      </div>
      <table width="100%" cellPadding={8} style={{borderCollapse:'collapse'}}>
        <thead><tr><th>Code</th><th>Title</th><th>Credits</th></tr></thead>
        <tbody>
          {data.map(c=> (
            <tr key={c.id} style={{borderTop:'1px solid #eee'}}>
              <td>{c.code}</td><td>{c.title}</td><td>{c.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{marginTop:8, fontSize:12}}>Tip: seed a few courses via POST /api/courses</p>
    </div>
  )
}
