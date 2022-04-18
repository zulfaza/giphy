import "./styles.css";
import Home from "./pages/home/index";
import { Switch, Route } from "react-router-dom";
import Trending from "./pages/Trending";
// import Testing from "./pages/testing";
export default function App() {
  return (
    <Switch>
      <Route path="/trending" component={Trending}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}
