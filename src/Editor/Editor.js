import { useState, useEffect } from "react";
import logo from "../assets/images/foryo_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid } from "uuid";
import "./Editor.scss";

function Editor() {
  const wxMiniAppElements = [
    { name: "按钮", type: "button", icon: "toggle-off", id: uuid() },
    { name: "图标", type: "icon", icon: "icons", id: uuid() },
    { name: "文本", type: "text", icon: "align-left", id: uuid() },
    { name: "滑动条", type: "slider", icon: "sliders-h", id: uuid() },
    { name: "图片", type: "image", icon: "images", id: uuid() },
    { name: "视频", type: "video", icon: "video", id: uuid() },
    { name: "地图", type: "map", icon: "map-marked-alt", id: uuid() },
    { name: "轮播图", type: "carousel", icon: "columns", id: uuid() },
  ];

  const wxMiniAppElementTemplates = {
    button: '<button type="primary">确定</button>',
    carousel: `<view>
<view style="padding-left: 32rpx; margin-bottom: 16rpx;font-size: 36rpx">商品轮播图</view>
<scroll-view className="scroll-view_H" scroll-x="true" bindscroll="scroll" style="width: 100%; white-space: nowrap">
        <view id="demo1" className="scroll-view-item_H demo-text-1" style="display: inline-block;text-align: center;width: 100%"><image src="https://cdn.alzashop.com/Foto/f16/RI/RI035d1.jpg" mode="aspectFit" style="diaplay: inline-block;height: 300rpx" /></view>
        <view id="demo2" className="scroll-view-item_H demo-text-2" style="display: inline-block;text-align: center;width: 100%"><image src="https://cdn.alzashop.com/Foto/f16/RI/RI035d1.jpg" mode="aspectFit" style="diaplay: inline-block;height: 300rpx" /></view>
        <view id="demo3" className="scroll-view-item_H demo-text-3" style="display: inline-block;text-align: center;width: 100%"><image src="https://cdn.alzashop.com/Foto/f16/RI/RI035d1.jpg" mode="aspectFit" style="diaplay: inline-block;height: 300rpx" /></view>
    </scroll-view></view>`,
    video: `<view style="width: 100%; box-sizing: border-box; padding: 32rpx"><view style="font-size: 36rpx">播放视频</view><video src='' style="width: 100%; height: 400rpx"/></view>`,
    text: `<view style="padding: 32rpx; width:100%;box-sizing: border-box;">这是一段测试文本用来测试通过后台配置的小程序文本组件是否正常展示，如果你正在阅读这段话，说明文本组件配置正常</view>`,
  };

  const elementRenderer = (elements) =>
    elements.map((element) => (
      <div className="border px-4 py-1 rounded-lg bg-blue-500 text-white">
        {element.type}
      </div>
    ));

  const [configurableBlocks, updateConfigurableBlocks] = useState([]);

  const [focusingBlock, updateFocusingBlock] = useState();

  const addConfigurableClock = (direction, index) => {
    if (index === undefined) {
      updateConfigurableBlocks((prevState) => [
        ...prevState,
        { id: uuid(), elements: [] },
      ]);
      return;
    }
    if (direction === "above") {
      updateConfigurableBlocks((prevState) => {
        let temp = [...prevState];
        console.log(temp);
        if (index === 0) {
          console.log([{ id: uuid(), elements: [] }, ...temp]);
          return [{ id: uuid(), elements: [] }, ...temp];
        }
        temp.splice(index, 0, { id: uuid(), elements: [] });
        return temp;
      });
    } else {
      updateConfigurableBlocks((prevState) => {
        let temp = [...prevState];
        temp.splice(index+1, 0, { id: uuid(), elements: [] });
        return temp;
      });
    }
  };

  const handleBlockFocus = (index) => {
    updateFocusingBlock(index);
  };

  const addElementIntoBlock = (element) => {
    let newBlocks = configurableBlocks.map((block, index) => {
      if (index !== focusingBlock) {
        return block;
      }
      return {
        ...block,
        elements: block.elements.concat([{ type: element.type }]),
      };
    });

    updateConfigurableBlocks(newBlocks);
  };

  const [isSaved, updateIsSaved] = useState(false);
  const handleSave = () => {
    const compiledRes = configurableBlocks.length
      ? configurableBlocks
          .map((block, index) => compileToWXML(block, index))
          .join("")
      : `<view style="width: 100%; height: 600rpx;font-size: 36rpx; display: flex; justify-content: center; align-items: center">随心所欲创建你的小程序 🚀</view>`;

    fetch("http://localhost:3333/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wxml: compiledRes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateIsSaved(data.success);
      });
  };

  useEffect(() => {
    if (isSaved) {
      setTimeout(() => {
        updateIsSaved(false);
      }, 3000);
    }
  }, [isSaved]);

  const compileToWXML = (block, index) =>
    `<view class='block_${index}'>${block.elements.reduce(
      (acc, cur) => acc + wxMiniAppElementTemplates[cur.type],
      ""
    )}</view>`;

  return (
    <div className="border h-screen flex flex-col">
      <header className="h-24 border p-4 flex justify-between items-center">
        <div className="h-full flex items-center">
          <img className="h-full" src={logo} alt="ForYo logo" />
          <span className="mx-4">前端的终极目标就是干掉其他的前端</span>
        </div>
        <span className="border border-black px-2 text-right">
          ForYo v0.0.1
          <br /> made with ❤️ 🤯 😎
        </span>
      </header>
      <main className="flex-auto flex">
        <div className="leftside-bar border h-full w-24">
          <ul className="elements flex flex-col">
            {wxMiniAppElements.map((element) => (
              <li
                key={element.id}
                className="flex flex-col items-center hover:bg-gray-100 py-4"
                onClick={() => addElementIntoBlock(element)}
              >
                <FontAwesomeIcon
                  icon={element.icon}
                  className="text-2xl mb-1"
                />
                <span>{element.name}</span>
              </li>
            ))}
          </ul>
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
                <div className="wx-mini-app-simulator-navigation-bar-title">
                  小程序名称
                </div>
              </div>
              <div className="wx-mini-app-page-render-section">
                {configurableBlocks.map((block, index) => (
                  <div
                    id={block.id}
                    className={`configurable-block ${
                      index === focusingBlock ? "focusing-block" : ""
                    } ${block.elements.length ? "rendering-elements" : ""}`}
                    onClick={() => handleBlockFocus(index)}
                  >
                    <button
                      className="add-section-btn add-above w-max bg-blue-400 font-light text-sm text-white px-2 rounded-xl outline-none"
                      onClick={() => addConfigurableClock("above", index)}
                    >
                      新增区域
                    </button>
                    {block.elements.length ? (
                      elementRenderer(block.elements)
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="mb-4"
                          icon="puzzle-piece"
                          size="3x"
                        />
                        <span>点击配置该区域</span>
                      </>
                    )}
                    <button
                      className="add-section-btn add-below w-max bg-blue-400 font-light text-sm text-white px-2 rounded-xl outline-none"
                      onClick={() => addConfigurableClock("below", index)}
                    >
                      新增区域
                    </button>
                  </div>
                ))}
                <button
                  className="w-4/5 mx-auto flex justify-center items-center my-4 py-4 border border-black"
                  onClick={addConfigurableClock}
                >
                  <FontAwesomeIcon className="text-xl" icon="plus" />
                  <span className="mx-2">新增区域</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside-bar border h-full w-28 flex flex-col items-center py-4">
          <button
            className="px-4 py-1 border bg-green-400 text-white"
            onClick={handleSave}
          >
            保存
          </button>
        </div>
      </main>
      {isSaved && (
        <div className="font-bold text-2xl absolute top-8 inset-x-2/4 w-max px-4 py-2 text-green-400">
          保存成功
        </div>
      )}
      <div className="templates"></div>
    </div>
  );
}

export default Editor;
