import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { type FC, type ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { type i18n } from 'i18next';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

export const renderWithTranslations = (
  ui: ReactElement,
  options?: RenderOptions,
  i18nInstance?: i18n,
): RenderResult => {
  const Wrapper: FC = ({ children }) => {
    const i18n = i18nInstance || i18nForTests;

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  };

  return render(ui, { wrapper: Wrapper, ...options });
};
