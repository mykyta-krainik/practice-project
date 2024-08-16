import { type FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from '@/shared/ui';
import { routeConfig } from '@/shared/config';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element, ...otherProps }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="page-wrapper">
                {element}
              </div>
            }
            {...otherProps}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
