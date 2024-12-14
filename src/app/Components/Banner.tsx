
export default function Banner() {
  return (<div className="bg-transparent flex flex-col items-center justify-center w-4/5 mt-5">
    <img
      src="/banner.png"
      className="w-full"
      alt="Banner"
    />
    <div className="text-center">
        <span className="dotactive"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
    </div>
  </div>
  );
}
