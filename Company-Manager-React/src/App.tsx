import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import EmployeesListPage from './pages/EmployeesListPage';
import NotFoundPage from './pages/NotFoundPage';
import EmployeePage from './pages/EmployeePage';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}> 
        <Route index element={<HomePage />} />
        <Route path='/employees' element={<EmployeesListPage/>}/>
        <Route path={'/employees/:id'} element={ <EmployeePage/> }/>

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
