import { RefObject } from 'react';
import { DragSource } from 'dnd-core';
import { DragSourceMonitor } from '../types';
import { DragSourceSpec } from './types';
export interface Source extends DragSource {
    receiveProps(props: any): void;
}
export declare function createSourceFactory<Props, DragObject = any>(spec: DragSourceSpec<Props, DragObject>): (monitor: DragSourceMonitor, ref: RefObject<any>) => Source;
