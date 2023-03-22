import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";


const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'service', element: <Service /> },
      { path: 'contact', element: <Contact /> },
      { path: 'signup', element: <SignUp /> }
    ],
  }
]);


function App() {
  return <RouterProvider router={routers} />;
}

export default App;
