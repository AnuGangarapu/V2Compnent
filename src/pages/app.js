import * as React from "react";
import { Router } from '@reach/router';
import { Route } from 'react-router-dom';
import LeftNavigation from "../components/leftNavigation";



 
function IndexPage() {
  return (
   <Router basepath='/'>
      <LeftNavigation/>
     </Router>  
    
  );
}

export default IndexPage;
