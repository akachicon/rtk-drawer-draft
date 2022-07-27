import {useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { projectSlice } from 'entities/project';
import type { AppDispatch, RootState } from 'shared/model/store';

export function RoadCreator() {
  const state = useSelector((s: RootState) => s.project);
  const dispatch = useDispatch<AppDispatch>();

  const stateString = useMemo(
    () => JSON.stringify(state, undefined, 4),
    [state]
  );

  return (
    <div style={{ background: 'palegreen', height: 400 }}>
      <button onClick={() => {
        dispatch(projectSlice.actions.addRoad());
      }}>
        create road
      </button>
      state: <pre />{stateString}<pre />
    </div>
  );
}
