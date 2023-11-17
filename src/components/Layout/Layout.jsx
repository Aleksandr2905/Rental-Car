import React, { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
