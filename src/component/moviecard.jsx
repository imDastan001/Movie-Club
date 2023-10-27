import {posterUrl} from "../utils/constants"
const MovieCard=({title,poster})=>{

    return (
        <>
        <div className="mt-6 mx-8 w-1/5">
            <div className="w-40">
            <img src={posterUrl+poster} alt="poster" />
            </div>
            <p className="text-white text-xl pt-2">{title}</p>

        </div>
        
        
        </>

    )
}
export default MovieCard;