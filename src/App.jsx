import { useActionState, useEffect, useState } from "react"
import roti from "./assets/roti.jpeg"
import hen from "./assets/hen.webp"
import goat from "./assets/Goat.jpeg"
function App(){

  const [url, setUrl] = useState("");
  const [query, setQuery] = useState("")
   
  const handleUrlChange = () => {
    if(query == "ishan"){
      setUrl(hen);
    }
    else if(query == "prashant"){
      setUrl(goat)
    }
    else if (query == "rohit")
    setUrl(roti)
  }

 
return(
  <div className=" text-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600">
    <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent ">Enter Your First Name</h1>
    <input className="border" value={query} onChange={(e)=> setQuery(e.target.value)}/>
    <button className="border ml-4 cursor-pointer p-2 bg-black text-white" onClick={handleUrlChange}>Search</button>
    <img src={url} className="mt-4 mx-auto w-64"></img>
  </div>
)
}
export default App