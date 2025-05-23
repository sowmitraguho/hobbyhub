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
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';

// router setup
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/groups'),
        Component: Home
      },
      {
        path: 'allgroup',
        loader: () => fetch('http://localhost:3000/groups'),
        Component: AllGroups, 
      },
      {
        path: 'creategroup',
        Component: CreateGroup, 
      },
      {
        path: 'updategroup',
        Component: UpdateGroup, 
      },
      {
        path: 'group/:id',
        loader: ({params}) => fetch(`http://localhost:3000/groups/${params.id}`),
        //Component: GroupDetails, 
        element: <PrivateRoutes> <GroupDetails></GroupDetails> </PrivateRoutes>
      },
      {
        path: 'login',
        Component: Login, 
      },
      {
        path: 'signup',
        Component: SignUp, 
      },
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
