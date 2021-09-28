import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import NotFound from "./NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";


function App() {
  //any javascript logic can go here before the render function

  //JSX template - can output dynamic values
  return (
    <Router>
      <div className="App">
        {/* Navbar will always show because it is not inside the Switch statement */}
        <Navbar> </Navbar>
        <div className="content">
          {/* Switch component makes sure only one route shows at any one time */}
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route exact path="/create" >
              <Create></Create>
            </Route>
            <Route exact path="/blogs/:id" >
              <BlogDetails/>
            </Route>
            <Route exact path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App; //always export component function to use in other applications
