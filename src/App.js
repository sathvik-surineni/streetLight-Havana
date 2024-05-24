
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./component/Home/Home.js";
import RootLayout from './component/layout/RootLayout.js';
import Login from './component/layout/Login/Login.js';
import Inventory from './component/Inventory/Inventory.js';
import Map from './component/Map/Map.js';
import Analytics from './component/Analytics/Analytics.js';
import ControlPanel from './component/ControlPanel/ControlPanel.js';
import Dasboard from './component/Dashboard/Dasboard.js';
import ControlTower from './component/ControlTower/ControlTower.js';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/contolpanel',
          element:<ControlPanel/>,
          children:[ {
            path:'dashboard',
            element:<Dasboard/>
          },{
            path:'inventory',
            element:<Inventory/>,
          },{
            path:'map',
            element:<Map/>,
          },{
            path:'analytics',
            element:<Analytics/>,
          },{
            path:'controltower',
            element: <ControlTower/>,
          }
            
          ]
        },{
          path:'/login',
          element:<Login/>
        }
      ]
    }
  ])
  return (
    <div>
      {/* Providing the router */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
