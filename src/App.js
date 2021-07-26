import {
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/Home'
function App() {
  return (
    
   <>
       <Route path="/">
         <Home/>
       </Route>
   </>
  );
}

export default App;
