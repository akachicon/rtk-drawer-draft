import { createEntityAdapter } from '@reduxjs/toolkit';

export type LayerGroup = {
  id: string;
  layerIds: string[];
};

export const layerGroupAdapter = createEntityAdapter<LayerGroup>();

export function createLayerGroup({ id, layerIds }: { id: string, layerIds: string[] }) {
  return { id, layerIds };
}
