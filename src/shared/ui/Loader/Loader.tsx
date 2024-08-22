import { type FC } from 'react';
import clsx from 'clsx';

import styles from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={clsx(styles.ldsEllipsis, className)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
