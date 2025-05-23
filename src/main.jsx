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
        Component: GroupDetails, 
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
