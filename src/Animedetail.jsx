import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

function Animedetail()
{
    let {id} = useParams();

    let [anime , setAnime] = useState( null );
    let [pending , setPending] = useState( true );
    let [error , setError] = useState( null );
   
    useEffect(
        ()=>{
            fetch("https://api.jikan.moe/v4/anime/"+id)
            .then((res)=>{
                if(res.ok==true) {
                   return res.json();
                }
                else{
                    throw Error("data is not found")
                }
                
            } )
            .then((data)=>{setAnime(data);setPending(false)})
            .catch((err)=>{setError(err.message);setPending(false)})
        },[])

        // {anime && console.log(anime.data.mal_id);}
    
        return(   
           
           <div className="aninedetails">
             {error && <h1>{error}</h1>}
             {pending && <div className="loder" ></div>}
             { anime  && <div className="anime-detail">
                    <div className="img_details">
                        <div className="image">
                            <img src={anime.data.images.jpg.image_url}/> 
                        </div>
                        <div className="details">
                            <h1><span >Title:</span><span className="col">{anime.data.title}</span></h1> 
                            <h2><span >Duration:</span><span className="col">{anime.data.duration}</span></h2>
                            <h3><span >Episodes:</span><span className="col">{anime.data.episodes}</span></h3>
                            <h3><span >Gener:</span><span className="col">{`${anime.data.genres.map((gener)=>{return gener.name})}  `}</span></h3>
                        </div>
                    </div>
                     <hr />
                     <h2 className="synopsis">{anime.data.synopsis}</h2>
                </div>
                }
            
           </div>
        )
    
}export default  Animedetail