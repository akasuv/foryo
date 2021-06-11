import logo from "../assets/images/foryo_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid } from "uuid";
import "./Editor.css";

function Editor() {
  const wxMiniAppElements = [
    { name: "按钮", icon: "toggle-off", id: uuid() },
    { name: "图标", icon: "icons", id: uuid() },
    { name: "文本", icon: "align-left", id: uuid() },
    { name: "滑动条", icon: "sliders-h", id: uuid() },
    { name: "图片", icon: "images", id: uuid() },
    { name: "视频", icon: "video", id: uuid() },
    { name: "地图", icon: "map-marked-alt", id: uuid() },
    { name: "轮播图", icon: "columns", id: uuid() },
  ];
  return (
    <div className="border h-screen flex flex-col">
      <header className="h-24 border p-2">
        <img className="h-full" src={logo} alt="ForYo logo" />
      </header>
      <main className="flex-auto flex">
        <div className="leftside-bar border h-full w-24">
          <ul className="elements flex flex-col">
            {wxMiniAppElements.map((element) => (
              <li
                key={element.id}
                className="flex flex-col items-center hover:bg-gray-100 py-4"
              >
                <FontAwesomeIcon
                  icon={element.icon}
                  className="text-2xl mb-1"
                />
                <span>{element.name}</span>
              </li>
            ))}
          </ul>
          <div className="template"></div>
        </div>
        <div className="canvas-section border flex-auto bg-gray-100 flex justify-center items-center">
          <div className="viewport-simulator">
            <div className="navigation-bar">
              <div className="right-side">
                <div className="time">10:30</div>
              </div>
              <div className="left-side">
                <div className="signal-icon px-0.5">
                  <FontAwesomeIcon icon="signal" />
                </div>
                <div className="signal-channel px-0.5">4G</div>
                <div className="battery px-0.5">
                  <FontAwesomeIcon icon="battery-full" />
                </div>
              </div>
            </div>
            <div className="wx-mini-app-simulator">
              <div className="right-top-corner-capsule flex justify-between py-1 px-3 items-center">
                <FontAwesomeIcon icon="ellipsis-h" />
                <span className="h-full border border-r-0" />
                <FontAwesomeIcon icon={["far", "dot-circle"]} />
              </div>
              <div className="wx-mini-app-simulator-navigation-bar">
                <div className="wx-mini-app-simulator-navigation-bar-title">小程序名称</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside-bar border h-full w-24"></div>
      </main>
    </div>
  );
}

export default Editor;
