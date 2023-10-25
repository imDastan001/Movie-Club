import {posterUrl} from "../utils/constants"
const MovieCard=({title,poster})=>{
    console.log(poster);
    return (
        <>
        <div className="mt-6 ml-8 w-1/5">
            <img  className="h-56" src={posterUrl+poster} alt="poster" />
            <p className="text-white text-xl pt-2">{title}</p>

        </div>
        
        
        </>

    )
}
export default MovieCard;