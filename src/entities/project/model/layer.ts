import { createEntityAdapter } from '@reduxjs/toolkit';

export type Layer = {
  id: string;
  name: string;
  empty: boolean;
  visible: boolean;
  blocked: boolean;
  // layerConfigId: string | null; // ask about setting configs
  componentIds: string[];
  objectIds: string[];
  selectedComponentId: string | null;
};

export const layerAdapter = createEntityAdapter<Layer>();

export function createLayer(params: Layer) {
  return params;
}

// No need to change the object: can be handled in user space by tracking layer changes
export function updateLayerVisibility(state: Layer, visibility: boolean) {
  return { ...state, visible: visibility };
}
