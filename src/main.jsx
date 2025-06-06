import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Components/Home.jsx';
import CreateGroup from './Components/CreateGroup.jsx';
import UpdateGroup from './Components/UpdateGroup.jsx';
import GroupDetails from './Components/GroupDetails.jsx';
import AllGroups from './Components/AllGroups.jsx';
import SignUp from './Components/SignUp.jsx';
import Login from './Components/Login.jsx';
import MyGroups from './Components/MyGroups.jsx';
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import ErrorPage from './Components/ErrorPage.jsx';

// server site from vercel: https://hobby-hub-server-self.vercel.app/groups

// router setup
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch('https://hobby-hub-server.onrender.com/groups'),
        Component: Home
      },
      {
        path: 'allgroup',
        loader: () => fetch('https://hobby-hub-server.onrender.com/groups'),
        Component: AllGroups 
      },
      {
        path: 'creategroup',
        element: <PrivateRoutes> <CreateGroup></CreateGroup> </PrivateRoutes>
      },
      {
        path: 'updategroup/:id',
        loader: ({params}) => fetch(`https://hobby-hub-server.onrender.com/groups/${params.id}`), 
        Component: UpdateGroup 
      },
      {
        path: 'group/:id',
        loader: ({params}) => fetch(`https://hobby-hub-server.onrender.com/groups/${params.id}`),
        element: <PrivateRoutes> <GroupDetails></GroupDetails> </PrivateRoutes>
      },
      {
        path: 'mygroup/:name',
        loader: ({params}) => fetch(`https://hobby-hub-server.onrender.com/groups/${params.name}`),
        element: <PrivateRoutes> <MyGroups></MyGroups> </PrivateRoutes>
      },
      {
        path: 'login',
        Component: Login, 
      },
      {
        path: 'signup',
        Component: SignUp, 
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
