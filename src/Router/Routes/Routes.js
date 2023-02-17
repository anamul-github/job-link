import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])