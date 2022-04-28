/**
 * For some RxStorage implementations,
 * we need to use our custom crafted indexes
 * so we can easily iterate over them. And sort plain arrays of document data.
 */
import { JsonSchema, RxDocumentData, RxJsonSchema } from './types';
/**
 * Crafts an indexable string that can be used
 * to check if a document would be sorted below or above
 * another documents, dependent on the index values.
 */
export declare function getIndexableString<RxDocType>(schema: RxJsonSchema<RxDocumentData<RxDocType>>, index: string[], docData: RxDocumentData<RxDocType>): string;
declare type ParsedLengths = {
    nonDecimals: number;
    decimals: number;
    roundedMinimum: number;
};
export declare function getStringLengthOfIndexNumber(schemaPart: JsonSchema): ParsedLengths;
export declare function getNumberIndexString(parsedLengths: ParsedLengths, fieldValue: number): string;
export declare function getStartIndexStringFromLowerBound(schema: RxJsonSchema<any>, index: string[], lowerBound: (string | boolean | number | null | undefined)[]): string;
export declare const MAX_CHAR: string;
export declare function getStartIndexStringFromUpperBound(schema: RxJsonSchema<any>, index: string[], upperBound: (string | boolean | number | null | undefined)[]): string;
export {};
