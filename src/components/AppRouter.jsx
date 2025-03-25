import React, {useContext} from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Error from '../pages/Error.jsx';
import { privateRoutes, publicRoutes } from '../router/routes.jsx';
import Loader from "./UI/Loader/Loader.jsx";
import { AuthContext } from '../context/AuthContext.jsx';



const AppRouter = () => {

  // Check if user is authenticated
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if (isLoading) {
      return <Loader/>
  }

  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="/" element={<Navigate to="/posts" />} /> {/*Redirect to Posts*/}
          <Route path="*" element={<Error />} /> {/* Error page for not found*/}
        </>
      ) : (
        <>
          {publicRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Error />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;