import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Health(){
  const [status, setStatus] = useState('...')
  useEffect(()=>{
    axios.get('/api/health').then(r => setStatus(r.data.status)).catch(()=>setStatus('down'))
  },[])
  return <div><h2>API Health</h2><p>Status: <b>{status}</b></p></div>
}
