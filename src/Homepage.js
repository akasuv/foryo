import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./assets/images/foryo_logo.png";

function Homepage() {
  return (
    <div className="container p-4 mx-auto">
      <header className="w-full h-72 flex justify-center">
        <img className="h-full" src={logo} alt="ForYo logo" />
      </header>
      <ul>
        <li className="w-64 h-64">
          <Link to="/editor">
            <div className="bg-gray-20 hover:bg-gray-30 flex h-full rounded-xl container flex-col justify-center items-center shadow-lg motion-safe:hover:shadow-2xl transform transition duration-500 hover:scale-105">
              <FontAwesomeIcon icon="plus" size="2x" />
              <span className="m-4 font-medium text-xl">创建小程序</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
