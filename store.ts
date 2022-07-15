import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Action, AnyAction, combineReducers, configureStore, EnhancedStore, Store, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'

import user from './slices/userSlice'

const persistConfig = {
  key: 'user',
  storage
}

const rootReducer = combineReducers({ user })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
})

const setupStore = (context: any): EnhancedStore => store

const makeStore: MakeStore<any> = (context) => setupStore(context)

export const persistor = persistStore(store)

export const wrapper = createWrapper<Store>(makeStore, {
  debug: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>