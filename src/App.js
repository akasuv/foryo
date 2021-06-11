import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Editor from "./Editor/Editor";
import Homepage from "./Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPlus,
  faToggleOff,
  faIcons,
  faAlignLeft,
  faSlidersH,
  faImages,
  faVideo,
  faMapMarkedAlt,
  faColumns,
  faSignal,
  faBatteryFull,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faPlus,
  faToggleOff,
  faIcons,
  faAlignLeft,
  faSlidersH,
  faImages,
  faVideo,
  faMapMarkedAlt,
  faColumns,
  faSignal,
  faBatteryFull,
  faEllipsisH,
  faDotCircle
);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
