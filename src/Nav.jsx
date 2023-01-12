import { useState } from "react"
import { Link } from "react-router-dom"


function Nav()
{

    const [search,setsearch]=useState("")
    return (

        <nav className="app">
            <Link to="/" className="home">Home</Link>

            <div className="searchBar">
                 <input type="search" placeholder="search the anime"  value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
                 <Link to={`/searchanime${search}`}><button>search</button> </Link>

            </div>
        </nav>
    )
}

export default Nav