import { createEntityAdapter } from '@reduxjs/toolkit';

export type Road = {
  id: string;
  name: string;
  layerGroupIds: string[];
};

export const roadAdapter = createEntityAdapter<Road>();

export function updateRoadName(state: Road, name: string): Road {
  return { ...state, name };
}

export function createRoad({ id, name, layerGroupIds }: {
  id: string;
  name: string;
  layerGroupIds: string[];
}): Road {
  return {
    id,
    name,
    layerGroupIds,
  };
}
