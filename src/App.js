
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Main from './Layout/Main';


import FAQ from './FAQ/FAQ';
import Courses from './Course/Courses';
import Vlog from './vlog/Vlog';
import Home from './Home/Home';
import Login from './Login/Login';



// import {getauth, GoogleAuthProvider} from 'firebase/auth'
// import app from './firebase/firebase.init';
// const auth = getauth(app);


function App() {
// const provider = new GoogleAuthProvider ();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Courses',
        element: <Courses></Courses>
      },
      {
        path:'/FAQ',
        element: <FAQ></FAQ>
      },
      {
        path:'/Vlog',
        element: <Vlog></Vlog>
      },
      {
        path:'/Login',
        element:<Login></Login>
      }
    ]
  }
])

  return (
    <div className="App">
     
      <RouterProvider router ={router} >

</RouterProvider>
    </div>
  );
}

export default App;
