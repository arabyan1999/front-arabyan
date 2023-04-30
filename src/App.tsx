import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { lazy } from 'react';
import "./styles/global.css"
import HoverEffect from './pages/HoverEffect';

const HomePage = lazy(() => import ('./pages/HomePage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HomePage />
    ),
  },
  {
    path: '/additional-exercise',
    element: (
      <HoverEffect />
    )
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
