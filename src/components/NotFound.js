import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";

export default function NotFound() {
  const navigate = useNavigate();
  const goBackOne = () => navigate(-1);

  return (
    <div className="bg-cover h-screen w-screen">
      <NavBar />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className=" mt-20 p-5 text-5xl font-display font-bold text-center">
          Whoops! Page Not Found.
        </div>
        <div className=" p-5 text-5xl font-display font-bold text-center">
          Are you lost?
        </div>
        <div className="text-center">
          <button
            className=" hover:bg-gray-300 bg-orange-600 text-white border-2 text-xl sm:text-2xl border-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-full mx-8 my-8"
            onClick={goBackOne}
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
}
