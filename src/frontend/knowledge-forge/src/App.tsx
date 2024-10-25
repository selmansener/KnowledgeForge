import CssBaseline from '@mui/material/CssBaseline';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import { config } from './config';
import { Provider } from 'react-redux';
import { Router } from './router/router';
import { routes } from './router/routes';
import { Auth0Provider } from '@auth0/auth0-react';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { defaultTheme } from './themes/default';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Authenticated } from './pages/auth/Authenticated';
import { Unauthenticated } from './pages/auth/Unauthenticated';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Etc/UTC");

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'querystring', 'htmlTag', 'path', 'subdomain']
    },
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme} >
          <CssBaseline enableColorScheme />
          <Auth0Provider
            domain={config.authConfig.domain}
            clientId={config.authConfig.clientId}
            authorizationParams={{
              redirect_uri: config.authConfig.redirectUri,
              audience: config.authConfig.audience
            }}
          >
              <Authenticated>
                <Router routes={routes} isPublic={false} currentAccountRole="user" environment={config.environment} />
              </Authenticated>
              <Unauthenticated>
                <Router routes={routes} isPublic={true} currentAccountRole="user" environment={config.environment} />
              </Unauthenticated>
          </Auth0Provider>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
