import useTrailer from "../hooks/uesTrailer"
import { useSelector } from "react-redux";


const VideoBackground = ({id}) => {
  useTrailer(id);
  const trailer = useSelector((store)=>store.movies?.nowPlayingTrailer);
  if(!trailer) return;
  const {key} = trailer;
  return (
      <>
  
      <iframe
      className="w-full"
        src={"https://www.youtube.com/embed/"+key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        height="700"
      ></iframe>
  
    </>
  );
};
export default VideoBackground;

// 
+"?rel=0&amp;autoplay=1&mute=1"