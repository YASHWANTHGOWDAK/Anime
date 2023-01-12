import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import Animelist from "./Animelist";

function Searchanime()
{
    let{searchkeyword}=useParams();
     let [animes , setAnimes]=useState(null);
     let [pending,setPending]=useState(true);
     let [error,setError]=useState(null);

useEffect(()=>{
        fetch("https://api.jikan.moe/v4/anime")
        .then((res)=>{
            if(res.ok===true) {
               return res.json();
        
            }
            else{
                throw Error("data is not found")
            }
            
        } )
        .then((e)=>{setAnimes(e.data);setPending(false)})
        .catch((err)=>{setError(err.message);setPending(false)})
    },[])
    return(
         
        <div>
        {error && <h1>{error}</h1>}
        {pending && <div className="loader" ></div>}
        {console.log(animes)}
        { animes  &&  <Animelist animes={animes.filter((anime)=>{return(anime.title.toUpperCase().includes(searchkeyword.toUpperCase()))})} title=" Animes Lists"  /> }
        
       </div>

    )
}
export default Searchanime