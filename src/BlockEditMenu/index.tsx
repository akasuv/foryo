import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Popover from "@material-ui/core/Popover";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch } from "../hooks";
import { useDispatch } from "react-redux";

export default function BlockEditMenu({
  anchor,
  handleLayoutChange,
  handleBlockDelete,
}) {
  return (
    <div className="absolute" style={{ top: 0, right: 0, zIndex: 99 }}>
      <Paper>
        <MenuList>
          <MenuItem onClick={handleLayoutChange}>更换布局</MenuItem>
          <MenuItem onClick={handleBlockDelete}>删除</MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
