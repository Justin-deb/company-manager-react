import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}> 
        <Route index element={<HomePage />} />

        {/* 404 not found page*/}
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )  
  );

  return (
    <RouterProvider router={router}/>
  )
}

export default App
