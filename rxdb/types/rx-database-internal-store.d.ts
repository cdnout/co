import type { RxDatabase, RxDocumentData, RxJsonSchema, RxStorage, RxStorageInstance } from './types';
export declare const INTERNAL_CONTEXT_COLLECTION = "collection";
export declare const INTERNAL_CONTEXT_STORAGE_TOKEN = "storage-token";
export declare const INTERNAL_CONTEXT_ENCRYPTION = "plugin-encryption";
export declare const INTERNAL_CONTEXT_REPLICATION_PRIMITIVES = "plugin-replication-primitives";
export declare const INTERNAL_STORE_SCHEMA: RxJsonSchema<RxDocumentData<InternalStoreDocType<any>>>;
export declare type InternalStoreDocType<Data = any> = {
    id: string;
    key: string;
    context: string;
    data: Data;
};
/**
 * Stores information about the collections.
 * The collection.name is the 'key' value.
 */
export declare type InternalStoreStorageTokenDocType = InternalStoreDocType<{
    token: string;
}>;
/**
 * Stores information about the collections.
 * The collection.name is the 'key' value.
 */
export declare type InternalStoreCollectionDocType = InternalStoreDocType<{
    /**
     * Plain name of the collection
     */
    name: string;
    schema: RxJsonSchema<any>;
    schemaHash: string;
    version: number;
}>;
export declare function getPrimaryKeyOfInternalDocument(key: string, context: string): string;
/**
 * Returns all internal documents
 * with context 'collection'
 */
export declare function getAllCollectionDocuments(storageInstance: RxStorageInstance<InternalStoreDocType<any>, any, any>, storage: RxStorage<any, any>): Promise<RxDocumentData<InternalStoreCollectionDocType>[]>;
/**
 * to not confuse multiInstance-messages with other databases that have the same
 * name and adapter, but do not share state with this one (for example in-memory-instances),
 * we set a storage-token and use it in the broadcast-channel
 */
export declare const STORAGE_TOKEN_DOCUMENT_KEY = "storageToken";
export declare function ensureStorageTokenExists<Collections = any>(rxDatabase: RxDatabase<Collections>): Promise<string>;
