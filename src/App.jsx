import { useActionState, useEffect, useState } from "react"
import cat from "./assets/cat.png"
import dog from "./assets/dog.png"
function App(){

  const [url, setUrl] = useState("");
  const [query, setQuery] = useState("")
   
  const handleUrlChange = () => {
    if(query == "saroj"){
      setUrl(cat);
    }
    else if(query == "sandesh"){
      setUrl(dog)
    }
  }

 
return(
  <div>
    <h1>Displaying image according to input</h1>
    <input className="border" value={query} onChange={(e)=> setQuery(e.target.value)}/>
    <button className="border ml-2 cursor-pointer" onClick={handleUrlChange}>Search</button>
    <img src={url}></img>
  </div>
)
}
export default App