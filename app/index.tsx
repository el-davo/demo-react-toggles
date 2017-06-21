import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import ReduxToastr from 'react-redux-toastr';
import { routes } from './routes';
import { configureStore } from './store/configureStore';
import { NavbarComponent } from './common/navbar/navbar.component';

import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './app.css';

injectTapEventPlugin();

const store = configureStore.configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <div>
        <NavbarComponent />
        <div style={{marginLeft: 10, marginRight: 10}}>
          <Router history={history} routes={routes} />
        </div>
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            position="bottom-right" />
      </div>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
