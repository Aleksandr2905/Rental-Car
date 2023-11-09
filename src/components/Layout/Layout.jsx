import React, { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
