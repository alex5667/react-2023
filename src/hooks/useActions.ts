import { useMemo } from 'react';
import { useAppDispatch } from './redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { formSlice } from 'redux/reducers/FormSlice';
import { homeSlice } from './../redux/reducers/HomeSlice';

const rootActions = {
  ...formSlice.actions,
  ...homeSlice.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
