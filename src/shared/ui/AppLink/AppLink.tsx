import { type FC, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import clsx from 'clsx';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  children,
  to,
  className,
  theme = AppLinkTheme.PRIMARY,
  ...restProps
}) => (
  <Link
    to={to}
    className={clsx(styles.appLink, styles[theme], className)}
    {...restProps}
  >
    {children}
  </Link>
);
