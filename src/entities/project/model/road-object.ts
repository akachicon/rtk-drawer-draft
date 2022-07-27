import { createEntityAdapter } from '@reduxjs/toolkit';

// Should update on layer/[layer component] change or inherent property change.
// Layer updates can be tracked in user space on layer level as well
// as layerComponentProps.
type RoadObjectExt<T extends Record<string, unknown>> = {
  id: string;
  layerId: string;
  layerComponentIds: string[];
  inherentProps: T;
};

export type AxisRoadObject = RoadObjectExt<{
  color: string;
}>;

export type TrafficLaneRoadObject = RoadObjectExt<{
  start: number;
  end: number;
}>;

export type RoadObject = AxisRoadObject | TrafficLaneRoadObject;

export const roadObjectAdapter = createEntityAdapter<RoadObject>();

export function updateAxisRoadObject(state: AxisRoadObject, update: Partial<AxisRoadObject>) {
  return { ...state, ...update };
}

export function updateTrafficLaneRoadObject(
  state: TrafficLaneRoadObject,
  update: Partial<TrafficLaneRoadObject>
) {
  return { ...state, ...update };
}

export function createAxisRoadObject({ id, color, layerId, layerComponentIds }: {
  id: string;
  color: string;
  layerId: string;
  layerComponentIds: string[];
}): AxisRoadObject {
  return {
    id,
    layerId,
    layerComponentIds,
    inherentProps: { color },
  };
}

export function createTrafficLaneRoadObject({ id, start, end, layerId, layerComponentIds }: {
  id: string;
  start: number;
  end: number;
  layerId: string;
  layerComponentIds: string[];
}): TrafficLaneRoadObject {
  return {
    id,
    layerId,
    layerComponentIds,
    inherentProps: { start, end },
  };
}
