import '@/styles/globals.css'
import { StoreProvider, useStoreRehydrated } from 'easy-peasy'
import store from '../store/index'


function MainApp({ children }) {
  const isRehydrated = useStoreRehydrated();
  return (
    <div>
      {isRehydrated ? children : <div>Loading...</div>}
    </div>
  );
}


export default function App({ Component, pageProps }) {

  return (
    <StoreProvider store={store}>
      <MainApp>
        <Component {...pageProps} />
      </MainApp>
    </StoreProvider>
  )
}