import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import {wrapper, store} from "../store";
import { persistor } from "../store";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
