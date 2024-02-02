import React from 'react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layuot/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
export const App = () => {
  return (
    <Suspense fallback={'loading'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
