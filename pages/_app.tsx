import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

import {wrapper, store} from "../store";
import { persistor } from "../store";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ToDo</title>
      </Head>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
