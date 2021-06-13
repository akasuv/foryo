import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Editable from "../Editable";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Section() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://cdn.vox-cdn.com/thumbor/4rEiBHe3k-Gp2woEZkZ5OmQL2_U=/0x0:1857x1002/1200x800/filters:focal(746x209:1042x505)/cdn.vox-cdn.com/uploads/chorus_image/image/67151471/zgpEPxH.0.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Editable type={"button"} name={"Button"}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Editable>
      </CardActions>
    </Card>
  );
}
