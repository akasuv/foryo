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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function BlockEditMenu({ anchorElement }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Popover
        anchorEl={anchorElement}
        open={!!anchorElement}
        style={{ pointerEvents: "none" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        disablePortal
        onClick={() => console.log('xx')}
      >
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Popover>
    </div>
  );
}
