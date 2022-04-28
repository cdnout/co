import { IdleQueue } from 'custom-idle-queue';
import { BroadcastChannel } from 'broadcast-channel';
import type { LeaderElector } from 'broadcast-channel';
import type { CollectionsOfDatabase, RxDatabase, RxCollectionCreator, RxJsonSchema, RxCollection, ServerOptions, RxDumpDatabase, RxDumpDatabaseAny, AllMigrationStates, ServerResponse, BackupOptions, RxStorage, RxStorageInstance, RxChangeEvent, RxDatabaseCreator, RxChangeEventBulk, RxDocumentData, RxCleanupPolicy } from './types';
import { Subject, Subscription, Observable } from 'rxjs';
import type { RxBackupState } from './plugins/backup';
import { ObliviousSet } from 'oblivious-set';
import { InternalStoreCollectionDocType, InternalStoreDocType } from './rx-database-internal-store';
export declare class RxDatabaseBase<Internals, InstanceCreationOptions, Collections = CollectionsOfDatabase> {
    readonly name: string;
    readonly storage: RxStorage<Internals, InstanceCreationOptions>;
    readonly instanceCreationOptions: InstanceCreationOptions;
    readonly password: any;
    readonly multiInstance: boolean;
    readonly eventReduce: boolean;
    options: any;
    readonly idleQueue: IdleQueue;
    /**
     * Stores information documents about the collections of the database
     */
    readonly internalStore: RxStorageInstance<InternalStoreDocType, Internals, InstanceCreationOptions>;
    /**
     * Set if multiInstance: true
     * This broadcast channel is used to send events to other instances like
     * other browser tabs or nodejs processes.
     * We transfer everything in EventBulks because sending many small events has been shown
     * to be performance expensive.
     */
    readonly broadcastChannel?: BroadcastChannel<RxChangeEventBulk<any>> | undefined;
    readonly cleanupPolicy?: Partial<RxCleanupPolicy> | undefined;
    constructor(name: string, storage: RxStorage<Internals, InstanceCreationOptions>, instanceCreationOptions: InstanceCreationOptions, password: any, multiInstance: boolean, eventReduce: boolean, options: any, idleQueue: IdleQueue, 
    /**
     * Stores information documents about the collections of the database
     */
    internalStore: RxStorageInstance<InternalStoreDocType, Internals, InstanceCreationOptions>, 
    /**
     * Set if multiInstance: true
     * This broadcast channel is used to send events to other instances like
     * other browser tabs or nodejs processes.
     * We transfer everything in EventBulks because sending many small events has been shown
     * to be performance expensive.
     */
    broadcastChannel?: BroadcastChannel<RxChangeEventBulk<any>> | undefined, cleanupPolicy?: Partial<RxCleanupPolicy> | undefined);
    get $(): Observable<RxChangeEvent<any>>;
    readonly token: string;
    _subs: Subscription[];
    destroyed: boolean;
    collections: Collections;
    readonly eventBulks$: Subject<RxChangeEventBulk<any>>;
    private observable$;
    /**
     * Unique token that is stored with the data.
     * Used to detect if the dataset has been deleted
     * and if two RxDatabase instances work on the same dataset or not.
     *
     * Because reading and writing the storageToken runs in the hot path
     * of database creation, we do not await the storageWrites but instead
     * work with the promise when we need the value.
     */
    storageToken: Promise<string>;
    /**
     * Contains the ids of all event bulks that have been emitted
     * by the database.
     * Used to detect duplicates that come in again via BroadcastChannel
     * or other streams.
     */
    emittedEventBulkIds: ObliviousSet<string>;
    /**
     * This is the main handle-point for all change events
     * ChangeEvents created by this instance go:
     * RxDocument -> RxCollection -> RxDatabase.$emit -> MultiInstance
     * ChangeEvents created by other instances go:
     * MultiInstance -> RxDatabase.$emit -> RxCollection -> RxDatabase
     */
    $emit(changeEventBulk: RxChangeEventBulk<any>): void;
    /**
     * removes the collection-doc from the internalStore
     */
    removeCollectionDoc(name: string, schema: any): Promise<void>;
    /**
     * creates multiple RxCollections at once
     * to be much faster by saving db txs and doing stuff in bulk-operations
     * This function is not called often, but mostly in the critical path at the initial page load
     * So it must be as fast as possible.
     */
    addCollections<CreatedCollections = Partial<Collections>>(collectionCreators: {
        [key in keyof CreatedCollections]: RxCollectionCreator;
    }): Promise<{
        [key in keyof CreatedCollections]: RxCollection;
    }>;
    /**
     * delete all data of the collection and its previous versions
     */
    removeCollection(collectionName: string): Promise<void>;
    /**
     * runs the given function between idleQueue-locking
     */
    lockedRun<T>(fn: (...args: any[]) => T): T extends Promise<any> ? T : Promise<T>;
    requestIdlePromise(): Promise<void>;
    /**
     * Export database to a JSON friendly format.
     * @param _decrypted
     * When true, all encrypted values will be decrypted.
     */
    exportJSON(_collections?: string[]): Promise<RxDumpDatabase<Collections>>;
    exportJSON(_collections?: string[]): Promise<RxDumpDatabaseAny<Collections>>;
    /**
     * Import the parsed JSON export into the collection.
     * @param _exportedJSON The previously exported data from the `<db>.exportJSON()` method.
     * @note When an interface is loaded in this collection all base properties of the type are typed as `any`
     * since data could be encrypted.
     */
    importJSON(_exportedJSON: RxDumpDatabaseAny<Collections>): Promise<void>;
    /**
     * spawn server
     */
    server(_options?: ServerOptions): Promise<ServerResponse>;
    backup(_options: BackupOptions): RxBackupState;
    leaderElector(): LeaderElector;
    isLeader(): boolean;
    /**
     * returns a promise which resolves when the instance becomes leader
     */
    waitForLeadership(): Promise<boolean>;
    migrationStates(): Observable<AllMigrationStates>;
    /**
     * destroys the database-instance and all collections
     */
    destroy(): Promise<boolean>;
    /**
     * deletes the database and its stored data
     */
    remove(): Promise<void>;
    get asRxDatabase(): RxDatabase<{}, Internals, InstanceCreationOptions>;
}
/**
 * writes the changeEvent to the broadcastChannel
 */
export declare function writeToSocket(rxDatabase: RxDatabase, changeEventBulk: RxChangeEventBulk<any>): Promise<boolean>;
/**
 * returns the primary for a given collection-data
 * used in the internal pouchdb-instances
 */
export declare function _collectionNamePrimary(name: string, schema: RxJsonSchema<any>): string;
/**
 * removes all internal docs of a given collection
 * @return resolves all known collection-versions
 */
export declare function _removeAllOfCollection(rxDatabase: RxDatabaseBase<any, any, any>, collectionName: string): Promise<RxDocumentData<InternalStoreCollectionDocType>[]>;
export declare function createRxDatabase<Collections = {
    [key: string]: RxCollection;
}, Internals = any, InstanceCreationOptions = any>({ storage, instanceCreationOptions, name, password, multiInstance, eventReduce, ignoreDuplicate, options, cleanupPolicy, localDocuments }: RxDatabaseCreator<Internals, InstanceCreationOptions>): Promise<RxDatabase<Collections, Internals, InstanceCreationOptions>>;
/**
 * removes the database and all its known data
 */
export declare function removeRxDatabase(databaseName: string, storage: RxStorage<any, any>): Promise<any>;
export declare function isRxDatabase(obj: any): boolean;
export declare function dbCount(): number;
