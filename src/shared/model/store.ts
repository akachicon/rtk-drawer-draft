// TODO: move to app, save store ref in window to avoid cyclic deps when using store directly;
// derived types still can be used, so reexport them from shared.

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { projectSlice } from 'entities/project';

export const store = configureStore({
  reducer: {
    project: projectSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
