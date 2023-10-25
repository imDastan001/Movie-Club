const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-60 pl-8 h-screen absolute bg-gradient-to-r from-black">
        <h1 className="text-white font-bold text-3xl pb-5">{title}</h1>
        <p className="w-1/4 text-white">{overview}</p>
        <button className="text-black bg-white py-3 px-8 mt-6 rounded-lg font-bold hover:bg-slate-200">
          Play
        </button>
        <button className="text-white ml-4 bg-gray-800 py-3 px-8 mt-6 rounded-lg font-bold hover:bg-gray-600 hover:text-white">
          More info
        </button>
      </div>
    </>
  );
};
export default VideoTitle;
