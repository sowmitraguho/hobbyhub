import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './pages/Home.jsx';
import CreateGroup from './pages/CreateGroup.jsx';
import UpdateGroup from './Components/UpdateGroup.jsx';
import GroupDetails from './pages/GroupDetails.jsx';
import AllGroups from './pages/AllGroups.jsx';
import SignUp from './auth/SignUp.jsx';
import Login from './auth/Login.jsx';
import MyGroups from './pages/MyGroups.jsx';
import AuthProvider from './Firebase/AuthProvider.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ThemeProvider from './Contexts/ThemeProvider.jsx';


// router setup
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch('https://hobby-hub-server.onrender.com/api/groups'),
        Component: Home
      },
      {
        path: 'allgroup',
        loader: () => fetch('https://hobby-hub-server.onrender.com/api/groups'),
        Component: AllGroups
      },
      {
        path: 'creategroup',
        element: <PrivateRoutes> <CreateGroup></CreateGroup> </PrivateRoutes>
      },
      {
        path: 'updategroup/:id',
        loader: ({ params }) => fetch(`https://hobby-hub-server.onrender.com/api/groups/${params.id}`),
        Component: UpdateGroup
      },
      {
        path: 'group/:id',
        loader: ({ params }) => fetch(`https://hobby-hub-server.onrender.com/apigroups/${params.id}`),
        element: <PrivateRoutes> <GroupDetails></GroupDetails> </PrivateRoutes>
      },
      {
        path: 'mygroup/:email',
        loader: ({ params }) => fetch(`https://hobby-hub-server.onrender.com/api/mygroups/${params.email}`),
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
        element: <ErrorPage />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
