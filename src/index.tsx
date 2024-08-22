import ReactDOM from 'react-dom';
import App from '@/app/App';
import { Providers } from '@/app/providers/Providers';

import '@/shared/config/i18n/i18n';

ReactDOM.render(
  <Providers><App /></Providers>,
  document.getElementById('root'),
);
