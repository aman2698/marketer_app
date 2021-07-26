import React from "react";
import PropTypes from "prop-types";
import { Link,Redirect,Switch,Route } from "react-router-dom";

import Signup from './Signup';
import Login from './Login';
const Home = (props) => {

  return (
    <header className="bg-white dark:bg-gray-800">
      <nav className="bg-white dark:bg-gray-800">
        <div className="container  mx-auto">
         

          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
           
            <Link to="/signup"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              SignUp
            </Link >

            <Link to="/login"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Login
            </Link>
        </div>
        </div>
      </nav>

      <div >
        
         <Switch>
             <Route path="/login">
                 <Login/>
             </Route>
             <Route path="/signup">
                 <Signup/>
             </Route>
             <Route path="*">
                 <Redirect to="/login"/>
             </Route>
         </Switch>
       
      </div>
    </header>
  );
};

Home.propTypes = {};

export default Home;