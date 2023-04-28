import { Provider } from 'react-redux';
import { store } from 'redux/store';
import React from 'react';

interface DataProviderProps {
  children: React.ReactNode;
}
export function DataProvider({ children }: DataProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
