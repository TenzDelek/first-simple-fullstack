
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
//cors - for safety for example, you wont allow
//any random person in your house right, only those
//whose origin is here like your dad,mom,cousin can come

//cross origin request- your server is running on some port
//and here there is another application running right,
//and it is not like everyone can take data from here to there 
//if it happens server will get to many request which will create bill like for bandwith and size

//origin same means to have same port, url.
//ip whitelist/domain whitelist
//one solution is to whitelist the port number take u r working on in frontend(work of backend dev)
//another is using proxy --here we used that
function App() {
  const[quote,setquote]=useState([])
  useEffect(()=>{
    //here usually we write the whole url but it is not a good way
    //because in future the endpoint will not stay the same, cause 
    //in production the domain is not localhost
    //so to deal with it we use proxy, there are different ways
    //depending on the bundler, search proxy vite or proxy npm create to understand
    //in vite we make changes in the vite.config
    axios.get('/api/quote')
    .then((res)=>{
      setquote(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
     <h1>Tenzin and Code</h1>
    <p>Quote length: {quote.length}</p>
    { 
      quote.map((data)=>(
        <div key={data.id}>
          <h4>{data.title}</h4>
          <p>{data.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
