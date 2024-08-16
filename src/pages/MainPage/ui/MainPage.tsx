import { useTranslation } from 'react-i18next';

import { Counter } from '@/shared/ui';

export default function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <h1>{t('title')}</h1>

      <Counter />
    </div>
  );
}
