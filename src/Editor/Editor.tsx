import { useState, useEffect } from "react";
import logo from "../assets/images/foryo_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Editor.scss";
import SectionTemplateModal from "../SectionTemplateModal";
import { useAppSelector, useAppDispatch } from "../hooks";
import blockRenderer from "../blockRenderer";
import { updateAnchorBlock } from "./EditorSlice";
import {
  deleteBlock,
  clearBlock,
} from "../SectionTemplateModal/selectedTemplateSlice";
import { Tooltip, Fade } from "@material-ui/core";
import BlockEditMenu from "../BlockEditMenu";
import templateCompiler from "../templateCompiler";
import Editable from "../Editable";

function Editor() {
  const blocks = useAppSelector((state) => state.blocks);
  const dispatch = useAppDispatch();
  const [anchor, updateAnchor] = useState<{
    element: HTMLElement;
    index: number;
  } | null>(null);
  const [isReset, updateIsReset] = useState<boolean>(false);
  const [focusingBlock, updateFocusingBlock] = useState();

  const addConfigurableClock = (
    position?: "above" | "below",
    index?: number
  ) => {
    const anchorBlock =
      index !== undefined && position !== undefined
        ? { position, index }
        : null;

    dispatch(updateAnchorBlock(anchorBlock));
    openSectionTemplateModal();
  };

  const handleBlockFocus = (index) => {
    updateFocusingBlock(index);
  };

  const [isSaved, updateIsSaved] = useState(false);
  const handleSave = () => {
    fetch("http://localhost:3333/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wxml: blocks.map(templateCompiler).join(""),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateIsSaved(data.success);
      });
  };

  const handleReset = () => {
    dispatch(clearBlock());
    fetch("http://localhost:3333/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wxml: `<view style='text-align: center; height: 300px; line-height:300px'>随心所欲创建你的小程序🚀</view>`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateIsReset(data.success);
      });
  };

  useEffect(() => {
    if (isSaved) {
      setTimeout(() => {
        updateIsSaved(false);
      }, 3000);
    }

    if (isReset) {
      setTimeout(() => {
        updateIsReset(false);
      }, 3000);
    }
  }, [isSaved, isReset]);

  const [isSectionTemplateModalOpen, updateIsSectionTemplateModalOpen] =
    useState<boolean>(false);
  const openSectionTemplateModal = () => updateIsSectionTemplateModalOpen(true);
  const [layoutChangeBlockIndex, updateLayoutChangeBlockIndex] = useState<
    number | null
  >(null);

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
                  MINI APP :)
                </div>
              </div>
              <div className="wx-mini-app-page-render-section">
                {blocks.map((block, index) => (
                  <Tooltip
                    interactive
                    placement="right-start"
                    title={
                      <BlockEditMenu
                        handleLayoutChange={() => {
                          updateIsSectionTemplateModalOpen(true);
                          updateLayoutChangeBlockIndex(index);
                        }}
                        handleBlockDelete={() =>
                          dispatch(deleteBlock({ blockIndex: index }))
                        }
                      />
                    }
                    TransitionComponent={Fade}
                  >
                    <div
                      id={block.id}
                      className={`configurable-block ${
                        index === focusingBlock ? "focusing-block" : ""
                      }`}
                      onClick={() => handleBlockFocus(index)}
                    >
                      <button
                        className="add-section-btn add-above w-max bg-blue-400 font-light text-sm text-white px-2 rounded-xl outline-none"
                        onClick={() => addConfigurableClock("above", index)}
                      >
                        新增区域
                      </button>
                      {blockRenderer(block, true)}
                      <button
                        className="add-section-btn add-below w-max bg-blue-400 font-light text-sm text-white px-2 rounded-xl outline-none"
                        onClick={() => addConfigurableClock("below", index)}
                      >
                        新增区域
                      </button>
                    </div>
                  </Tooltip>
                ))}
                <button
                  className="w-4/5 mx-auto flex justify-center items-center my-4 py-4 border border-black"
                  onClick={() => addConfigurableClock()}
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
          <button
            className="px-4 py-1 border bg-red-400 text-white"
            onClick={handleReset}
          >
            重置
          </button>
        </div>
      </main>
      {isSaved && (
        <div className="font-bold text-2xl absolute top-8 inset-x-2/4 w-max px-4 py-2 text-green-400">
          保存成功
        </div>
      )}
      {isReset && (
        <div className="font-bold text-2xl absolute top-8 inset-x-2/4 w-max px-4 py-2 text-green-400">
          重置成功
        </div>
      )}
      <div className="templates">
        <SectionTemplateModal
          open={isSectionTemplateModalOpen}
          close={() => {
            updateIsSectionTemplateModalOpen(false);
            updateLayoutChangeBlockIndex(null);
          }}
          layoutChangeBlockIndex={layoutChangeBlockIndex}
        />
      </div>
    </div>
  );
}

export default Editor;
