import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Section from "../Section";
import { templates } from "../templates";
import blockRenderer from "../blockRenderer";
import { addBlock } from "./selectedTemplateSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import { BlockTemplate } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SectionTemplateModal(props) {
  const classes = useStyles();
  const { anchorBlock } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    props.close();
  };

  const selectTemplate = (template: BlockTemplate) => {
    dispatch(addBlock({ anchorBlock, template }));
    props.close();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              选择布局
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={1} className="p-8">
          {templates.map((template) => (
            <Grid
              container
              item
              xs={12}
              spacing={3}
              className="p-4"
              onClick={() => selectTemplate(template)}
            >
              {blockRenderer(template)}
            </Grid>
          ))}
        </Grid>
      </Dialog>
    </div>
  );
}
