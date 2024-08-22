import { type FC } from 'react';
import clsx from 'clsx';

import { Loader } from '@/shared/ui';
import styles from './PageLoader.module.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={clsx(styles.pageLoader, className)}>
    <Loader />
  </div>
);
