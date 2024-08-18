import { useTranslation } from 'react-i18next';

import { Counter } from '@/shared/ui';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('title')}</h1>

      <Counter />
    </div>
  );
};

export default AboutPage;
