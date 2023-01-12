import { Link } from "react-router-dom"

function Animelist({ animes, title }) {
    return (
        <>
            <h1 align="center">{title}</h1>

            <div className="animeLists">

                {
                    animes.map(
                        (anime) => {
                            return (
                                <div className="animeList">
                                    <Link to={`/animedetail${anime.mal_id}`}>
                                        <img src={anime.images.jpg.image_url} alt="/"/>

                                    </Link>

                                    <h3>{anime.title}</h3><br />
                                   
                                </div>
                            )
                        }
                    )
                }


            </div>
        </>
    )
}
export default Animelist