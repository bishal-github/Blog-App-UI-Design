import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";




function App() {

const user = false;

  const Layout=()=>{
   return(
     <div className="app">
      <TopBar />
      <Outlet />
    </div>
   )
  }

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
   {
     path: "/",
    element: <Home />,
   },
   {
     path: "/login",
    element: user ? <Home /> : <Login />,
   },
   {
     path: "/write",
    element: user ? <Write /> : <Register />,

    
   },
   {
     path: "/register",
    element: user ? <Home /> : <Register />,
   },
   {
     path: "/settings",
       element: user ? <Settings /> : <Register />,
   },
   {
     path: "/single",
    element: <Single />,
   },

    ]
  },
]);


  return (
   <RouterProvider router={router} />
  )
}

export default App
