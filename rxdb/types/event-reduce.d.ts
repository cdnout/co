import { QueryParams } from 'event-reduce-js';
import type { RxQuery, MangoQuery, RxChangeEvent } from './types';
export declare type EventReduceResultNeg = {
    runFullQueryAgain: true;
};
export declare type EventReduceResultPos<RxDocumentType> = {
    runFullQueryAgain: false;
    changed: boolean;
    newResults: RxDocumentType[];
};
export declare type EventReduceResult<RxDocumentType> = EventReduceResultNeg | EventReduceResultPos<RxDocumentType>;
export declare function getSortFieldsOfQuery<RxDocType>(primaryKey: keyof RxDocType, query: MangoQuery<RxDocType>): (string | keyof RxDocType)[];
export declare const RXQUERY_QUERY_PARAMS_CACHE: WeakMap<RxQuery, QueryParams<any>>;
export declare function getQueryParams<RxDocType>(rxQuery: RxQuery<RxDocType>): QueryParams<RxDocType>;
export declare function calculateNewResults<RxDocumentType>(rxQuery: RxQuery<RxDocumentType>, rxChangeEvents: RxChangeEvent<RxDocumentType>[]): EventReduceResult<RxDocumentType>;
