import { useLocation, useNavigate, useParams } from "react-router-dom"

const MovieDescription=({movies})=>{

    const {id} = useParams()
    const found = movies.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()


    return(
        <div>
            <h2>{found.title}</h2>
            <img src={found.posterURL} alt="Not Found"/>
            <br/>
            <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br/>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default MovieDescription