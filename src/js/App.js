import React from 'react';
import { Route, Switch } from "react-router-dom";
import { IndexRoutes } from "js/routes/index";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore } from "js/helpers";
import { history } from "js/helpers";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <AppProvider i18n={enTranslations}>
                <Provider store={store} >
                    <ConnectedRouter history={history} >
                        <Switch>
                            {IndexRoutes.map((prop, key) => {
                                return <Route path={prop.path} component={prop.component} key={key} />;
                            })}
                        </Switch>
                    </ConnectedRouter>
                </Provider>
            </AppProvider>
        );
    }
}
