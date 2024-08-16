import clsx from 'clsx';
import {
  type ButtonHTMLAttributes,
  type FC,
  type ReactNode
} from "react";

import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAN = 'clean',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  theme = ButtonTheme.CLEAN,
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      className={clsx(styles.button, styles[theme], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
