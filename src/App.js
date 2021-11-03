import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
 } from "react-router-dom";

 import Home from "./components/Home";
 import Results from "./components/Results";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"></Link>
      <Link to="/searchType/searchIdType"></Link>
    
    
    <Switch>
    <Route path="/:searchType/:searchIdType" > 
        <Home />
      </Route>

      <Route path="/">
        <Home />
      </Route>


    </Switch>
    
    
    
    </BrowserRouter>
  );
}

export default App;
