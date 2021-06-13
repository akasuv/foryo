import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./assets/images/foryo_logo.png";

function Homepage() {
  return (
    <div className="container p-4 mx-auto">
      <header className="flex flex-col w-full h-72 flex justify-center items-center mb-16">
        <img className="h-1/2 flex-grow-0 m-8" src={logo} alt="ForYo logo" />
        <h1 className="text-2xl font-medium">自由定制你的小程序</h1>
      </header>
      <ul className='flex justify-between'>
        <li className="w-64 h-64">
          <Link to="/editor">
            <div className="bg-gray-20 hover:bg-gray-30 flex h-full rounded-xl container flex-col justify-center items-center shadow-lg motion-safe:hover:shadow-2xl transform transition duration-500 hover:scale-105">
              <FontAwesomeIcon className="m-4" icon="plus" size="2x" />
              <span className="font-medium text-lg">创建小程序</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
