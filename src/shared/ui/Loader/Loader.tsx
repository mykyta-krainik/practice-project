import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Loader: FC = () => {
  const { t } = useTranslation();

  return <div>{t('shared.loading')}</div>;
};
