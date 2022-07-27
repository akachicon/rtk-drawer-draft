import { createEntityAdapter } from '@reduxjs/toolkit';

type LayerComponentExt<T extends Record<string, unknown>> = T & {
  id: string;
  __type: string;
};

export type LineStyleLayerComponent = LayerComponentExt<{
  __type: 'line-style';
  color: string;
}>;

export type FillingStyleLayerComponent = LayerComponentExt<{
  __type: 'filling-style';
  filling: 'color' | 'symbol';
}>;

export type LayerComponent = LineStyleLayerComponent | FillingStyleLayerComponent;

export const layerComponentAdapter = createEntityAdapter<LayerComponent>();

export function createLineStyleLayerComponent(params: LineStyleLayerComponent) {
  return params;
}

export function createFillingStyleLayerComponent(params: FillingStyleLayerComponent) {
  return params;
}

export function updateLineStyleLayerComponent(
  state: LineStyleLayerComponent,
  update: Partial<LineStyleLayerComponent>,
) {
  return { ...state, ...update };
}

export function updateFillingStyleLayerComponent(
  state: FillingStyleLayerComponent,
  update: Partial<FillingStyleLayerComponent>,
) {
  return { ...state, ...update };
}
