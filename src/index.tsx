import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@source/App';

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

if (root) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}