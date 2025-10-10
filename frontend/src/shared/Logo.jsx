import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})} className="flex items-center space-x-3">
      <div className="w-12 h-12 rounded-lg bg-secondaryBg p-2 shadow-lg">
        <div className="w-8 h-1.5 bg-white/95 rounded-full"></div>
        <div className="w-6 h-1.5 bg-white/85 rounded-full mt-2"></div>
        <div className="w-4 h-1.5 bg-white/70 rounded-full mt-2"></div>
      </div>
      <span className="font-extrabold text-lg text-white tracking-wide">ANBSTACK</span>
    </Link>
  );
}