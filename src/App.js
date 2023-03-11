import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About";

import RootLayout from "./Components/Pages/RootLayout";
import Home from "./Components/Pages/Home";
import Service from "./Components/Pages/Service";
import Contact from "./Components/Pages/Contact";
import ErrorPage from "./Components/ErrorPage";
import SignUp from "./Components/Pages/SignUp";


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
    errorElement: <ErrorPage/>,
  }
]);


function App() {
  return <RouterProvider router={routers} />;
}

export default App;
