import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from './Theme/Theme';

const router=createBrowserRouter([
  {element: <Layout/>,
  path:'/',
  children:[
    {
    element:<Home/>,
  path:'/',
 
  }
]
}
])
function App() {
  
  return (
    <ThemeProvider theme={Theme}>
      <RouterProvider router={router}>
        <CssBaseline />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
