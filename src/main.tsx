import { ThemeProvider } from '@emotion/react';
import { IVGSCollect } from '@vgs/collect-js-react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

declare global {
  interface Window {
    vgsForm: any;
    VGSCollect: IVGSCollect;
  }
}
