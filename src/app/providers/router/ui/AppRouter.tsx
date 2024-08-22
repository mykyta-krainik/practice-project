import { type FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { routeConfig } from '@/shared/config';

export const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element, ...otherProps }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="pageWrapper">
              {element}
            </div>
            )}
          {...otherProps}
        />
      ))}
    </Routes>
  </Suspense>
);
