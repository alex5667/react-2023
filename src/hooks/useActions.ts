import { useMemo } from 'react';
import { useAppDispatch } from './redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { formSlice } from 'redux/reducers/FormSlice';

const rootActions = {
  ...formSlice.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
