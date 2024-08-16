import { type FC, type ReactNode } from "react";
import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';
import clsx from 'clsx';

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
}) => {
  return (
    <Link
      to={to}
      className={clsx(styles.appLink, styles[theme], className)}
      {...restProps}
    >
      {children}
    </Link>
  );
};
