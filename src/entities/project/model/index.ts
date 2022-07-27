import { createSlice } from '@reduxjs/toolkit';
import { genId } from '../utils';
import { roadAdapter, createRoad } from './road';
import { layerGroupAdapter, createLayerGroup } from './layer-group';
import { layerAdapter, createLayer } from './layer';
import {
  layerComponentAdapter,
  createLineStyleLayerComponent,
  createFillingStyleLayerComponent,
} from './layer-component';
import {
  roadObjectAdapter,
  createAxisRoadObject,
  createTrafficLaneRoadObject
} from './road-object';

function genIds() {
  return {
    road: genId(),
    layerGroup: genId(),
    layers: {
      axisLayerId: genId(),
      trafficLaneLayerId: genId(),
    },
    axisLayerComponents: {
      lineStyle: genId(),
      fillingStyle: genId(),
    },
    trafficLaneLayerComponents: {
      lineStyle: genId(),
      fillingStyle: genId(),
    },
    roadObjectIds: {
      axis: genId(),
      trafficLane1: genId(),
      trafficLane2: genId(),
    },
  }
}

export const projectSlice = createSlice({
  name: 'entities/project',
  initialState: {
    roads: roadAdapter.getInitialState(),
    layerGroups: layerGroupAdapter.getInitialState(),
    layers: layerAdapter.getInitialState(),
    layerComponents: layerComponentAdapter.getInitialState(),
    roadObjects: roadObjectAdapter.getInitialState(),
  },
  reducers: {
    addRoad: (state) => {
      // Generate ids first.
      const ids = genIds();

      roadAdapter.addOne(state.roads, createRoad({
        id: ids.road,
        name: 'Default road',
        layerGroupIds: [ids.layerGroup],
      }));

      layerGroupAdapter.addOne(state.layerGroups, createLayerGroup({
        id: ids.layerGroup,
        layerIds: [ids.layers.axisLayerId, ids.layers.trafficLaneLayerId],
      }));

      layerAdapter.addMany(state.layers, {
        [ids.layers.axisLayerId]: createLayer({
          id: ids.layers.axisLayerId,
          name: 'axis-layer',
          empty: false,
          visible: true,
          blocked: false,
          componentIds: [ids.axisLayerComponents.lineStyle, ids.axisLayerComponents.fillingStyle],
          objectIds: [ids.roadObjectIds.axis],
          selectedComponentId: null,
        }),
        [ids.layers.trafficLaneLayerId]: createLayer({
          id: ids.layers.trafficLaneLayerId,
          name: 'traffic-layer',
          empty: false,
          visible: true,
          blocked: false,
          componentIds: [
            ids.trafficLaneLayerComponents.lineStyle,
            ids.trafficLaneLayerComponents.fillingStyle
          ],
          objectIds: [ids.roadObjectIds.axis],
          selectedComponentId: null,
        }),
      });

      layerComponentAdapter.addMany(state.layerComponents, {
        [ids.axisLayerComponents.lineStyle]: createLineStyleLayerComponent({
          id: ids.axisLayerComponents.lineStyle,
          __type: 'line-style',
          color: 'red',
        }),
        [ids.axisLayerComponents.fillingStyle]: createFillingStyleLayerComponent({
          id: ids.axisLayerComponents.fillingStyle,
          __type: 'filling-style',
          filling: 'color',
        }),
        [ids.trafficLaneLayerComponents.lineStyle]: createLineStyleLayerComponent({
          id: ids.trafficLaneLayerComponents.lineStyle,
          __type: 'line-style',
          color: 'green',
        }),
        [ids.trafficLaneLayerComponents.fillingStyle]: createFillingStyleLayerComponent({
          id: ids.trafficLaneLayerComponents.fillingStyle,
          __type: 'filling-style',
          filling: 'symbol',
        }),
      });

      roadObjectAdapter.addMany(state.roadObjects, {
        [ids.roadObjectIds.axis]: createAxisRoadObject({
          id: ids.roadObjectIds.axis,
          color: 'default-axis-color',
          layerId: ids.layers.axisLayerId,
          layerComponentIds: [
            ids.axisLayerComponents.lineStyle,
            ids.axisLayerComponents.fillingStyle
          ],
        }),
        [ids.roadObjectIds.trafficLane1]: createTrafficLaneRoadObject({
          id: ids.roadObjectIds.trafficLane1,
          start: 0,
          end: 20,
          layerId: ids.layers.axisLayerId,
          layerComponentIds: [
            ids.trafficLaneLayerComponents.lineStyle,
            ids.trafficLaneLayerComponents.fillingStyle
          ],
        }),
        [ids.roadObjectIds.trafficLane2]: createTrafficLaneRoadObject({
          id: ids.roadObjectIds.trafficLane2,
          start: 10,
          end: 30,
          layerId: ids.layers.axisLayerId,
          layerComponentIds: [
            ids.trafficLaneLayerComponents.lineStyle,
            ids.trafficLaneLayerComponents.fillingStyle
          ],
        }),
      });
    }
  }
});
