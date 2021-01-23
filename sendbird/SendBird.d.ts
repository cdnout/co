/**
 * Type Definitions for Sendbird SDK v3.0.142
 * homepage: https://sendbird.com/
 * git: https://github.com/sendbird/Sendbird-SDK-JavaScript
 */

export = SendBird;
export as namespace SendBird;

declare const SendBird: SendBirdStatic;

interface SendBirdStatic {
  version: number;
  new({ appId }: { appId: string }): SendBird.SendBirdInstance;
  getInstance(): SendBird.SendBirdInstance;

  LogLevel: SendBird.LogLevel;

  getLogLevel(): typeof SendBird.LogLevel[keyof typeof SendBird.LogLevel];
  setLogLevel(logLevel: typeof SendBird.LogLevel[keyof typeof SendBird.LogLevel]);
}

declare namespace SendBird {
  interface SendBirdError extends Error {
    code: number;
    message: string;
  }

  type userCallback = (user: User, error: SendBirdError) => void;
  type pushSettingCallback = (response: string, error: SendBirdError) => void;

  type getFriendChangeLogs = {
    updatedUsers: Array<User>;
    deletedUserIds: Array<string>;
    hasMore: boolean;
    token: string;
  };
  type getFriendChangeLogsByTokenHandler = (data: getFriendChangeLogs, error: SendBirdError) => void;

  type groupChannelChangeLogs = {
    updatedChannels: Array<GroupChannel>;
    deletedChannelUrls: Array<string>;
    hasMore: boolean;
    token: string;
  };
  type getGroupChannelChangeLogsHandler = (data: groupChannelChangeLogs, error: SendBirdError) => void;

  type getEmojiContainerHandler = (data: EmojiContainer, error: SendBirdError) => void;

  type getEmojiCategoryHandler = (data: EmojiCategory, error: SendBirdError) => void;

  type getEmojiHandler = (data: Emoji, error: SendBirdError) => void;

  type pushTokens = {
    deviceTokens: Array<string>;
    type: 'gcm' | 'apns' | 'apns_voip';
    hasMore: boolean;
    token: string;
  };
  type getMyPushTokensHandler = (data: pushTokens, error: SendBirdError) => void;

  type LogLevel = {
    VERBOSE: 'verbose',
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
  };

  interface DiscoveryObject {
    friendDiscoveryKey: string;
    friendName?: string;
  }
  interface SendBirdInstance {
    User: UserStatic;
    Member: MemberStatic;
    OpenChannel: OpenChannelStatic;
    GroupChannel: GroupChannelStatic;
    UserMessage: UserMessageStatic;
    FileMessage: FileMessageStatic;
    AdminMessage: AdminMessageStatic;

    SessionHandler: SessionHandlerStatic;
    UserEventHandler: UserEventHandlerStatic;
    ChannelHandler: ChannelHandlerStatic;
    ConnectionHandler: ConnectionHandlerStatic;

    GroupChannelParams: GroupChannelParams;
    OpenChannelParams: OpenChannelParams;
    GroupChannelListQuery: GroupChannelListQueryStatic;
    UserMessageParams: UserMessageParams;
    FileMessageParams: FileMessageParams;
    GroupChannelTotalUnreadMessageCountParams: GroupChannelTotalUnreadMessageCountParams;
    ScheduledUserMessageParams: ScheduledUserMessageParams;
    GroupChannelChangeLogsParams: GroupChannelChangeLogsParams;
    MessageRetrievalParams: MessageRetrievalParams;
    MessageListParams: MessageListParams;
    ThreadedMessageListParams: ThreadedMessageListParams;
    MessageChangeLogsParams: MessageChangeLogsParams;
    MessageMetaArray: MessageMetaArray;
    Options: Options;

    currentUser: User;
    appInfo: AppInfo;
    ekey: string;

    setErrorFirstCallback(errorFirstCallback: boolean): void;

    connect(userId: string): Promise<User>;
    connect(userId: string, callback: userCallback): void;
    connect(userId: string, accessToken: string): Promise<User>;
    connect(userId: string, accessToken: string, callback?: userCallback): void;
    connect(userId: string, apiHost: string, wsHost: string): Promise<User>;
    connect(userId: string, apiHost: string, wsHost: string, callback: userCallback): void;
    connect(userId: string, accessToken: string, apiHost: string, wsHost: string): Promise<User>;
    connect(userId: string, accessToken: string, apiHost: string, wsHost: string, callback?: userCallback): void;

    disconnect(): Promise<void>;
    disconnect(callback?: commonCallback): void;

    reconnect(): boolean; // You can initiate auto-reconnect manually.

    updateCurrentUserInfo(nickname: string, profileUrl: string): Promise<User>;
    updateCurrentUserInfo(nickname: string, profileUrl: string, callback?: userCallback): void;
    updateCurrentUserInfoWithProfileImage(nickname: string, profileImageFile: File): Promise<User>;
    updateCurrentUserInfoWithProfileImage(nickname: string, profileImageFile: File, callback?: userCallback): void;
    updateCurrentUserInfoWithPreferredLanguages(preferredLanguages: Array<string>): Promise<User>;
    updateCurrentUserInfoWithPreferredLanguages(preferredLanguages: Array<string>, callback?: userCallback): void;

    /**
     * @deprecated
     */
    getCurrentUserId(): string;
    getApplicationId(): string;
    getConnectionState(): string;
    getLastConnectedAt(): number;

    setSessionHandler(handler: SessionHandler): void;

    addChannelHandler(id: string, handler: ChannelHandler): void;
    removeChannelHandler(id: string): void;
    removeAllChannelHandlers(): void;

    addConnectionHandler(id: string, handler: ConnectionHandler): void;
    removeConnectionHandler(id: string): void;
    removeAllConnectionHandlers(): void;

    addUserEventHandler(id: string, handler: UserEventHandler): void;
    removeUserEventHandler(id: string): void;
    removeAllUserEventHandler(): void;

    /**
     * @deprecated
     */
    createUserListQuery(): UserListQuery;
    /**
     * @deprecated
     */
    createUserListQuery(userIds: Array<string>): UserListQuery;
    createApplicationUserListQuery(): ApplicationUserListQuery;
    createBlockedUserListQuery(): BlockedUserListQuery;
    createMessageSearchQuery(keyword: String, options: MessageSearchQueryOptions): MessageSearchQuery;

    blockUser(userToBlock: User, callback?: userCallback): void;
    blockUserWithUserId(userToBlock: string, callback?: userCallback): void;

    unblockUser(blockedUser: User, callback?: commonCallback): void;
    unblockUserWithUserId(blockedUserId: string, callback?: commonCallback): void;

    setChannelInvitationPreference(isAutoAccept: boolean, callback: commonCallback): void;
    getChannelInvitationPreference(callback: commonCallback): void;

    getPendingGCMToken(): string;
    getPendingAPNSToken(): string;

    registerGCMPushTokenForCurrentUser(gcmRegToken: string, callback?: pushSettingCallback): void;
    unregisterGCMPushTokenForCurrentUser(gcmRegToken: string, callback?: commonCallback): void;
    unregisterGCMPushTokenAllForCurrentUser(callback?: commonCallback): void;

    registerAPNSPushTokenForCurrentUser(apnsRegToken: string, callback?: pushSettingCallback): void;
    unregisterAPNSPushTokenForCurrentUser(apnsRegToken: string, callback?: commonCallback): void;
    unregisterAPNSPushTokenAllForCurrentUser(callback?: commonCallback): void;

    unregisterPushTokenAllForCurrentUser(callback?: commonCallback): void; // This removes all push tokens including APNS/GCM
    getMyPushTokensByToken(token: string, type: 'gcm' | 'apns' | 'apns_voip', callback: getMyPushTokensHandler): void;

    setPushTemplate(templateName: string, callback?: pushSettingCallback): void;
    getPushTemplate(callback?: pushSettingCallback): void;

    setPushTriggerOption(pushTriggerOption: 'all' | 'mention_only' | 'off', callback: commonCallback): void;
    getPushTriggerOption(callback: getPushTriggerOptionCallback): void;

    setDoNotDisturb(
      doNotDisturbOn: boolean,
      startHour: number,
      startMin: number,
      endHour: number,
      endMin: number,
      timezone: string,
      callback?: commonCallback
    ): void;
    getDoNotDisturb(callback: commonCallback): void;

    setSnoozePeriod(snoozeOn: boolean, startTs: number, endTs: number, callback?: commonCallback): void;
    getSnoozePeriod(callback: commonCallback): void;

    // Background/Foreground Appstate for push notifications in React Native / Ionic
    setBackgroundState(): void;
    setForegroundState(): void;

    // State change should be disabled when image picker is loaded in Android.
    disableStateChange(): void;
    enableStateChange(): void;

    uploadFriendDiscoveries(discoveries: Array<DiscoveryObject>, callback: commonCallback): void;
    deleteFriendDiscovery(discoveryKey: string, callback: commonCallback): void;
    deleteFriendDiscoveries(discoveryKeys: Array<string>, callback: commonCallback): void;

    getFriendChangeLogsByToken(callback: getFriendChangeLogsByTokenHandler): void;
    getFriendChangeLogsByToken(token: string, callback: getFriendChangeLogsByTokenHandler): void;

    addFriends(userIds: Array<string>, callback: userListQueryCallback): void;
    deleteFriend(userId: string, callback: commonCallback): void;
    deleteFriends(userIds: Array<string>, callback: commonCallback): void;

    createFriendListQuery(): FriendListQuery;

    markAsReadAll(callback: commonCallback): void;
    markAsReadWithChannelUrls(channelUrls: Array<string>, callback: commonCallback): void;

    markAsDelivered(channelUrl: String): void;

    getGroupChannelCount(memberStateFilter: string, callback: commonCallback): void;

    getUnreadItemCount(keys: Array<string>, callback: commonCallback): void;
    getTotalUnreadMessageCount(
      groupChannelTotalUnreadMessageCountParams: GroupChannelTotalUnreadMessageCountParams,
      callback: groupChannelCountCallback
    ): void;
    getTotalUnreadMessageCount(callback: groupChannelCountCallback): void;
    getTotalUnreadMessageCount(channelCustomTypes: Array<string>, callback: groupChannelCountCallback): void;
    getTotalUnreadChannelCount(callback: groupChannelCountCallback): void;

    getSubscribedTotalUnreadMessageCount(): number;
    getSubscribedCustomTypeTotalUnreadMessageCount(): number;
    getSubscribedCustomTypeUnreadMessageCount(customType: string): number;

    /**
     * @deprecated
     */
    getMyGroupChannelChangeLogsByToken(
      token: string,
      customTypes: Array<string>,
      callback: getGroupChannelChangeLogsHandler
    ): void;
    /**
     * @deprecated
     */
    getMyGroupChannelChangeLogsByToken(
      token: string,
      customTypes: Array<string>,
      includeEmpty: boolean,
      callback: getGroupChannelChangeLogsHandler
    ): void;
    getMyGroupChannelChangeLogsByToken(
      token: string,
      params: GroupChannelChangeLogsParams,
      callback: getGroupChannelChangeLogsHandler
    ): void;
    /**
     * @deprecated
     */
    getMyGroupChannelChangeLogsByTimestamp(
      ts: number,
      customTypes: Array<string>,
      callback: getGroupChannelChangeLogsHandler
    ): void;
    /**
     * @deprecated
     */
    getMyGroupChannelChangeLogsByTimestamp(
      ts: number,
      customTypes: Array<string>,
      includeEmpty: boolean,
      callback: getGroupChannelChangeLogsHandler
    ): void;
    getMyGroupChannelChangeLogsByTimestamp(
      ts: number,
      params: GroupChannelChangeLogsParams,
      callback: getGroupChannelChangeLogsHandler
    ): void;

    getAllEmoji(callback: getEmojiContainerHandler): void;
    getEmojiCategory(categoryId: number, callback: getEmojiCategoryHandler): void;
    getEmoji(emojiKey: string, callback: getEmojiHandler): void;

    getAllEmoji(): Promise<EmojiContainer>;
    getEmojiCategory(categoryId: number): Promise<EmojiCategory>;
    getEmoji(emojiKey: string): Promise<Emoji>;

    getAllowFriendDiscovery(callback: commonCallback): void;
    getAllowFriendDiscovery(): Promise<boolean>;
    setAllowFriendDiscovery(allowFriendDiscovery: boolean, callback: commonCallback): void;
    setAllowFriendDiscovery(allowFriendDiscovery: boolean): Promise<void>;
  }
  interface Options {
    useMemberAsMessageSender: boolean;
    typingIndicatorThrottle: number;
    websocketResponseTimeout: number;
  }
  interface AppInfo {
    uploadSizeLimit: number;
    emojiHash: string;
    premiumFeatureList: Array<string>;
    applicationAttributes: Array<string>;
    isUsingReaction: boolean;
  }

  interface FriendListQuery {
    hasMore: boolean;
    isLoading: boolean;
    limit: number;
    next(callback: userListQueryCallback): void;
  }
  interface MessageSearchQuery {
    hasNext: boolean;
    isLoading: boolean;
    next(callback: messageListCallback): void;
  }
  interface MessageSearchQueryOptions {
    limit: number;
    reverse: boolean;
    exactMatch: boolean;
    channelUrl: string;
    channelCustomType: string;
    messageTimestampFrom: number;
    messageTimestampTo: number;
    order: 'score' | 'ts';
  }

  interface SessionHandlerStatic {
    new(): SessionHandler;
  }
  interface SessionHandler {
    onSessionExpired(): void;
    onSessionTokenRequired(resolve: (accessToken: string) => void, reject: () => void): void;
    onSessionRefreshed(): void;
    onSessionError(err: SendBirdError): void;
    onSessionClosed(): void;
  }

  interface UserEventHandlerStatic {
    new(): UserEventHandler;
  }
  interface UserEventHandler {
    onFriendsDiscovered(users: Array<User>): void;
    onTotalUnreadMessageCountUpdated(totalCount: Number, countByCustomTypes: Object): void;
  }

  interface ChannelHandlerStatic {
    new(): ChannelHandler;
  }
  interface ChannelHandler {
    onMessageReceived(channel: OpenChannel | GroupChannel, message: AdminMessage | UserMessage | FileMessage): void;
    onMessageUpdated(channel: OpenChannel | GroupChannel, message: AdminMessage | UserMessage | FileMessage): void;
    onMessageDeleted(channel: OpenChannel | GroupChannel, messageId: number): void;
    onReadReceiptUpdated(channel: GroupChannel): void;
    onTypingStatusUpdated(channel: GroupChannel): void;
    onUserJoined(channel: GroupChannel, user: User): void;
    onUserLeft(channel: GroupChannel, user: User): void;
    onOperatorUpdated(channel: BaseChannel, operators: Array<User>): void;
    onUserEntered(channel: OpenChannel, user: User): void;
    onUserExited(channel: OpenChannel, user: User): void;
    onUserMuted(channel: OpenChannel | GroupChannel, user: User): void;
    onUserUnmuted(channel: OpenChannel | GroupChannel, user: User): void;
    onUserBanned(channel: OpenChannel | GroupChannel, user: User): void;
    onUserUnbanned(channel: OpenChannel | GroupChannel, user: User): void;
    onChannelFrozen(channel: OpenChannel | GroupChannel): void;
    onChannelUnfrozen(channel: OpenChannel | GroupChannel): void;
    onChannelChanged(channel: OpenChannel | GroupChannel): void;
    onChannelDeleted(channelUrl: string, channelType: string): void;
    onUserReceivedInvitation(channel: GroupChannel, inviter: User, invitees: Array<User>): void;
    onUserDeclinedInvitation(channel: GroupChannel, inviter: User, invitee: Member): void;
    onMetaDataCreated(channel: OpenChannel | GroupChannel, metaData: Object): void;
    onMetaDataUpdated(channel: OpenChannel | GroupChannel, metaData: Object): void;
    onMetaDataDeleted(channel: OpenChannel | GroupChannel, metaDataKeys: Array<string>): void;
    onMetaCountersCreated(channel: OpenChannel | GroupChannel, metaCounter: Object): void;
    onMetaCountersUpdated(channel: OpenChannel | GroupChannel, metaCounter: Object): void;
    onMetaCountersDeleted(channel: OpenChannel | GroupChannel, metaCounterKeys: Array<string>): void;
    onChannelHidden(channel: GroupChannel): void;
    onReactionUpdated(channel: OpenChannel | GroupChannel, reactionEvent: ReactionEvent): void;
    onMentionReceived(channel: OpenChannel | GroupChannel, message: AdminMessage | UserMessage | FileMessage): void;
    onThreadInfoUpdated(channel: OpenChannel | GroupChannel, threadInfoUpdateEvent: ThreadInfoUpdateEvent): void;
  }

  interface ConnectionHandlerStatic {
    new(): ConnectionHandler;
  }
  interface ConnectionHandler {
    onReconnectStarted(): void;
    onReconnectSucceeded(): void;
    onReconnectFailed(): void;
  }

  /**
   * Message
   */
  interface BaseMessageInstance {
    channelUrl: string;
    channelType: string;
    messageId: number;
    messageType: 'base' | 'user' | 'file' | 'admin';
    data: string;
    customType: string;
    metaArrays: Array<MessageMetaArray>;
    reactions: Array<Reaction>;
    mentionType: string;
    mentionedUsers: Array<User>;
    silent: boolean;
    createdAt: number;
    updatedAt: number;
    parentMessageId: number;
    parentMessageText: string;
    threadInfo: ThreadInfo;
    ogMetaData: OGMetaData;

    isEqual(target: BaseMessageInstance): boolean;
    isIdentical(target: BaseMessageInstance): boolean;
    isOpenChannel(): boolean;
    isGroupChannel(): boolean;
    isUserMessage(): boolean;
    isFileMessage(): boolean;
    isAdminMessage(): boolean;
    serialize(): Object;
    getMetaArraysByKeys(keys: Array<string>): Array<MessageMetaArray>;
    applyReactionEvent(event: ReactionEvent): void;
    getThreadedMessagesByTimestamp(
      timestamp: number,
      params: ThreadedMessageListParams,
      callback: messageListCallback
    ): void;
    applyThreadInfoUpdateEvent(threadInfoUpdateEvent: ThreadInfoUpdateEvent): boolean;

    /**
     * @deprecated
     */
    metaArray: Object;
    /**
     * @deprecated
     */
    getMetaArrayByKeys(keys: Array<string>): Object;
  }

  interface AdminMessage extends BaseMessageInstance {
    messageType: 'admin';
    message: string;
    translations: Object;
  }
  interface AdminMessageStatic {
    buildFromSerializedData(serializedObject: Object): AdminMessage;
    getMessage(params: MessageRetrievalParams, callback: messageCallback): void;
  }

  interface GroupChannelTotalUnreadMessageCountParams {
    new(): GroupChannelTotalUnreadMessageCountParams;
    channelCustomTypesFilter: Array<string>;
    superChannelFilter: 'all' | 'super' | 'nonsuper';
  }

  interface Emoji {
    key: string;
    url: string;
  }

  interface EmojiCategory {
    id: number;
    name: string;
    url: string;
    emojis: Array<Emoji>;
  }

  interface EmojiContainer {
    emojiHash: string;
    emojiCategories: Array<EmojiCategory>;
  }

  interface Plugin {
    type: string;
    vendor: string;
    detail: {};
  }

  interface UserMessageParams {
    new(): UserMessageParams;
    message: string;
    data: string;
    customType: string;
    /**
     * @deprecated
     */
    targetLanguages: Array<string>;
    translationTargetLanguages: Array<string>;
    mentionType: 'users' | 'channel';
    mentionedUserIds: Array<string>;
    mentionedUsers: Array<User>;
    metaArrays: Array<MessageMetaArray>;
    /**
     * @deprecated
     */
    metaArrayKeys: Array<string>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
    parentMessageId: number;
  }
  interface UserMessage extends BaseMessageInstance {
    messageType: 'user';
    message: string;
    sender: Sender;
    reqId: string;
    translations: Object;
    /**
     * @deprecated
     */
    requestState: 'none' | 'pending' | 'failed' | 'succeeded';
    sendingStatus: 'none' | 'pending' | 'failed' | 'canceled' | 'succeeded';
    requestedMentionUserIds: Array<string>;
    errorCode: number;
    messageSurvivalSeconds: number;
    plugins: Plugin[];
    isResendable(): boolean;
  }
  interface UserMessageStatic {
    buildFromSerializedData(serializedObject: Object): UserMessage;
    getMessage(params: MessageRetrievalParams, callback: messageCallback): void;
  }

  interface FileMessageParams {
    new(): FileMessageParams;
    file: File;
    fileUrl: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    data: string;
    customType: string;
    thumbnailSizes: Array<ThumbnailSize>;
    mentionType: 'users' | 'channel';
    mentionedUserIds: Array<string>;
    mentionedUsers: Array<User>;
    metaArrays: Array<MessageMetaArray>;
    /**
     * @deprecated
     */
    metaArrayKeys: Array<string>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
    parentMessageId: number;
  }
  interface FileMessage extends BaseMessageInstance {
    messageType: 'file';
    sender: Sender;
    reqId: string;
    plainUrl: string;
    url: string;
    name: string;
    size: number;
    type: string;
    thumbnails: Array<ThumbnailObject>;
    /**
     * @deprecated
     */
    requestState: 'none' | 'pending' | 'failed' | 'succeeded';
    sendingStatus: 'none' | 'pending' | 'failed' | 'canceled' | 'succeeded';
    requestedMentionUserIds: Array<string>;
    errorCode: number;
    messageSurvivalSeconds: number;
    isResendable(): boolean;
  }
  interface FileMessageStatic {
    buildFromSerializedData(serializedObject: Object): FileMessage;
    getMessage(params: MessageRetrievalParams, callback: messageCallback): void;
  }

  interface MessageRetrievalParams {
    new(): MessageRetrievalParams;
    channelUrl: string;
    channelType: string;
    messageId: number;
    includeMetaArray: boolean;
    includeParentMessageText: boolean;
    includeThreadInfo: boolean;
  }
  interface MessageListParams {
    new(): MessageListParams;
    prevResultSize: number;
    nextResultSize: number;
    isInclusive: boolean;
    shouldReverse: boolean;
    messageType: string;
    /**
     * @deprecated
     */
    customType: string;
    customTypes: string[];
    senderUserIds: Array<string>;
    includeMetaArray: boolean;
    includeReactions: boolean;
    includeReplies: boolean;
    includeParentMessageText: boolean;
    includeThreadInfo: boolean;
    showSubchannelMessagesOnly: boolean;
  }
  interface ThreadedMessageListParams {
    new(): ThreadedMessageListParams;
    prevResultSize: number;
    nextResultSize: number;
    isInclusive: boolean;
    shouldReverse: boolean;
    messageType: string;
    /**
     * @deprecated
     */
    customType: string;
    customTypes: string[];
    senderUserIds: Array<string>;
    includeMetaArray: boolean;
    includeReactions: boolean;
    includeParentMessageText: boolean;
  }
  interface MessageChangeLogsParams {
    new(): MessageChangeLogsParams;
    includeMetaArray: boolean;
    includeReactions: boolean;
    includeReplies: boolean;
    includeParentMessageText: string;
    includeThreadInfo: boolean;
  }

  interface ThumbnailObject {
    url: string;
    plainUrl: string;
    height: number;
    width: number;
    real_height: number;
    real_width: number;
  }
  interface ThumbnailSize {
    maxWidth: number;
    maxHeight: number;
  }

  /**
   * User
   */
  interface User {
    userId: string;
    nickname: string;
    profileUrl: string;
    plainProfileUrl: string;
    metaData: Object;
    connectionStatus: string;
    lastSeenAt: string;
    isActive: boolean;
    requireAuth: boolean;
    friendDiscoveryKey: string | null;
    friendName: string | null;
    preferredLanguages: Array<string>;

    getOriginalProfileUrl(): string;
    createMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, upsert: boolean, callback: commonCallback): void;
    deleteMetaData(metaDataKey: string, callback: commonCallback): void;
    deleteAllMetaData(callback: commonCallback): void;

    serialize(): Object;
  }
  interface UserStatic {
    buildFromSerializedData(serializedObject: Object): User;
  }

  interface Sender extends User {
    isBlockedByMe: boolean;
  }
  interface SenderStatic {
    buildFromSerializedData(serializedObject: Object): Sender;
  }

  interface Member extends User {
    state: 'invited' | 'joined';
    role: 'none' | 'operator';
    isMuted: boolean;
    isBlockedByMe: boolean;
    isBlockingMe: boolean;
  }
  interface MemberStatic {
    buildFromSerializedData(serializedObject: Object): Member;
  }

  /**
   * Channel
   */
  type fileMessagesCallbackObject = {
    progress: (event: ProgressEvent, messageRequestId: string) => void;
    sent: (message: FileMessage, error: SendBirdError) => void;
    complete: (error: SendBirdError) => void;
  };
  type messageCallback = (message: UserMessage | FileMessage | AdminMessage, error: SendBirdError) => void;
  type reactionEventCallback = (reactionEvent: ReactionEvent, error: SendBirdError) => void;
  type cancelUploadingFileMessageCallback = (isSuccess: boolean, error: SendBirdError) => void;
  type fileUploadprogressHandler = (event: ProgressEvent) => void;
  type messageChangeLogs = {
    updatedMessages: Array<UserMessage | FileMessage | AdminMessage>;
    deletedMessageIds: Array<number>;
    hasMore: boolean;
    token: string;
  };
  type getMessageChangeLogsHandler = (data: messageChangeLogs, error: SendBirdError) => void;
  type mutedInfo = {
    isMuted: boolean;
    startAt: number;
    endAt: number;
    remainingDuration: number;
    description: string;
  };
  type getMyMutedInfoHandler = (info: mutedInfo, error: SendBirdError) => void;
  interface BaseChannel {
    url: string;
    name: string;
    coverUrl: string;
    data: string;
    customType: string;
    isFrozen: boolean;
    isEphemeral: boolean;
    creator: User;
    createdAt: number;

    isGroupChannel(): boolean;
    isOpenChannel(): boolean;
    serialize(): Object;

    /**
     * @deprecated
     */
    getMessageChangeLogsByToken(callback: getMessageChangeLogsHandler): void;
    /**
     * @deprecated
     */
    getMessageChangeLogsByToken(token: string, callback: getMessageChangeLogsHandler): void;
    /**
     * @deprecated
     */
    getMessageChangeLogsByToken(token: string, includeMetaArray: boolean, callback: getMessageChangeLogsHandler): void;
    /**
     * @deprecated
     */
    getMessageChangeLogsByToken(
      token: string,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: getMessageChangeLogsHandler
    ): void;

    /**
     * @deprecated
     */
    getMessageChangeLogsByTimestamp(ts: number, callback: getMessageChangeLogsHandler): void;
    /**
     * @deprecated
     */
    getMessageChangeLogsByTimestamp(ts: number, includeMetaArray: boolean, callback: getMessageChangeLogsHandler): void;
    /**
     * @deprecated
     */
    getMessageChangeLogsByTimestamp(
      ts: number,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: getMessageChangeLogsHandler
    ): void;

    getMessageChangeLogsSinceToken(
      token: string,
      params: MessageChangeLogsParams,
      callback: getMessageChangeLogsHandler
    ): void;
    getMessageChangeLogsSinceTimestamp(
      timestamp: number,
      params: MessageChangeLogsParams,
      callback: getMessageChangeLogsHandler
    ): void;

    getMyMutedInfo(callback: getMyMutedInfoHandler): void;
    createOperatorListQuery(): OperatorListQuery;

    /** Message  */
    /**
     * @deprecated
     */
    createMessageListQuery(): MessageListQuery;
    createPreviousMessageListQuery(): PreviousMessageListQuery;

    /**
     * @deprecated
     */
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    /**
     * @deprecated
     */
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      includeReaction: boolean,
      includeReactions: boolean,
      callback: messageListCallback
    ): void;

    getMessagesByTimestamp(timestamp: number, params: MessageListParams, callback: messageListCallback): void;
    getMessagesByMessageId(messageId: number, params: MessageListParams, callback: messageListCallback): void;

    /** FileMessage  */
    sendFileMessage(fileMessageParams: FileMessageParams, callback: messageCallback): FileMessage;
    sendFileMessage(file: File, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(file: File, data: string, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(file: File, data: string, customType: string, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      callback: messageCallback
    ): FileMessage;
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      callback: messageCallback
    ): FileMessage;

    sendFileMessage(
      fileMessageParams: FileMessageParams,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    sendFileMessage(file: File, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;

    sendFileMessage(file: string, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(file: string, data: string, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(file: string, data: string, customType: string, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      callback: messageCallback
    ): FileMessage;
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      callback: messageCallback
    ): FileMessage;

    /**
     * @deprecated
     */
    sendFileMessage(file: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: string,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: string,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    /**
     * @deprecated
     */
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;

    sendFileMessages(
      fileMessageParamsList: Array<FileMessageParams>,
      callbackObject: fileMessagesCallbackObject
    ): Array<FileMessage>;

    /** UserMessage  */
    sendUserMessage(userMessageParams: UserMessageParams, callback: messageCallback): UserMessage;
    sendUserMessage(message: string, callback: messageCallback): UserMessage;
    /**
     * @deprecated
     */
    sendUserMessage(message: string, data: string, callback: messageCallback): UserMessage;
    /**
     * @deprecated
     */
    sendUserMessage(message: string, data: string, customType: string, callback: messageCallback): UserMessage;
    sendUserMessage(
      message: string,
      data: string,
      customType: string,
      translationTargetLanguages: Array<string>,
      callback: messageCallback
    ): UserMessage;

    resendUserMessage(userMessage: UserMessage, callback: messageCallback): void;
    resendFileMessage(fileMessage: FileMessage, callback: messageCallback): void;
    resendFileMessage(fileMessage: FileMessage, file: Blob, callback: messageCallback): void;

    translateUserMessage(
      message: UserMessage,
      translationTargetLanguages: Array<string>,
      callback: messageCallback
    ): void;

    /** Edit Message  */
    updateFileMessage(messageId: number, data: string, customType: string, callback: messageCallback): void;
    updateFileMessage(messageId: number, fileMessageParams: FileMessageParams, callback: messageCallback): void;
    updateUserMessage(
      messageId: number,
      message: string,
      data: string,
      customType: string,
      callback: messageCallback
    ): void;
    updateUserMessage(messageId: number, userMessageParams: UserMessageParams, callback: messageCallback): void;
    deleteMessage(message: FileMessage | UserMessage, callback: commonCallback): void;
    cancelUploadingFileMessage(messageReqId: string, callback: cancelUploadingFileMessageCallback): boolean;

    /** Copy Message */
    copyUserMessage(channel: BaseChannel, message: UserMessage, callback: messageCallback): void;
    copyFileMessage(channel: BaseChannel, message: FileMessage, callback: messageCallback): void;

    /** Operators */
    addOperators(operatorUserIds: Array<string>, callback: commonCallback): void;
    removeOperators(operatorUserIds: Array<string>, callback: commonCallback): void;

    /** Reaction */
    addReaction(message: UserMessage | FileMessage | AdminMessage, key: string, callback: reactionEventCallback): void;
    deleteReaction(
      message: UserMessage | FileMessage | AdminMessage,
      key: string,
      callback: reactionEventCallback
    ): void;

    /** MetaData */
    createMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, upsert: boolean, callback: commonCallback): void;
    getMetaData(keys: Array<string>, callback: commonCallback): void;
    getAllMetaData(callback: commonCallback): void;
    deleteMetaData(key: string, callback: commonCallback): void;
    deleteAllMetaData(callback: commonCallback): void;

    /** MetaCounter */
    createMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    updateMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    updateMetaCounters(metaCounterMap: Object, upsert: boolean, callback: commonCallback): void;
    increaseMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    decreaseMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    getMetaCounters(keys: Array<string>, callback: commonCallback): void;
    getAllMetaCounters(callback: commonCallback): void;
    deleteMetaCounter(key: string, callback: commonCallback): void;
    deleteAllMetaCounters(callback: commonCallback): void;

    /** MessageMetaArray */
    createMessageMetaArrayKeys(
      message: UserMessage | FileMessage | AdminMessage,
      keys: Array<string>,
      callback: commonCallback
    ): void;
    deleteMessageMetaArrayKeys(
      message: UserMessage | FileMessage | AdminMessage,
      keys: Array<string>,
      callback: commonCallback
    ): void;
    addMessageMetaArrayValues(
      message: UserMessage | FileMessage | AdminMessage,
      data: Array<MessageMetaArray>,
      callback: commonCallback
    ): void;
    removeMessageMetaArrayValues(
      message: UserMessage | FileMessage | AdminMessage,
      data: Array<MessageMetaArray>,
      callback: commonCallback
    ): void;

    /**
     * @deprecated
     */
    addMessageMetaArrayValues(
      message: UserMessage | FileMessage | AdminMessage,
      data: Object,
      callback: commonCallback
    ): void;
    /**
     * @deprecated
     */
    removeMessageMetaArrayValues(
      message: UserMessage | FileMessage | AdminMessage,
      data: Object,
      callback: commonCallback
    ): void;

    /** Report */
    report(category: string, description: string, callback: commonCallback): void;
    reportUser(user: User, category: string, description: string, callback: commonCallback): void;
    reportMessage(
      message: UserMessage | FileMessage | AdminMessage,
      category: string,
      description: string,
      callback: commonCallback
    ): void;
  }

  type messageListCallback = (
    messageList: Array<UserMessage | FileMessage | AdminMessage>,
    error: SendBirdError
  ) => void;
  interface MessageListQuery {
    /**
     * @deprecated
     */
    next(messageTimestamp: number, limit: number, reverse: boolean, callback: messageListCallback): void;
    prev(messageTimestamp: number, limit: number, reverse: boolean, callback: messageListCallback): void;
    load(
      messageTimestamp: number,
      prevLimit: number,
      nextLimit: number,
      reverse: boolean,
      callback: messageListCallback
    ): void;
  }

  type threadedMessageList = {
    parentMessage: UserMessage | FileMessage | AdminMessage;
    threadedReplies: Array<UserMessage | FileMessage | AdminMessage>;
  };
  type threadedMessageCallback = (threadedMessageList: threadedMessageList, error: SendBirdError) => void;

  interface PreviousMessageListQuery {
    hasMore: boolean;
    isLoading: boolean;
    limit: number;
    reverse: boolean;
    messageTypeFilter: 0 | 1 | 2 | 3; // 0: ALL, 1: USER, 2: FILE, 3: ADMIN
    /**
     * @deprecated
     */
    customTypeFilter: string;
    customTypesFilter: string;
    senderUserIdsFilter: Array<string>;
    includeMetaArray: boolean;
    /**
     * @deprecated
     */
    includeReaction: boolean;
    includeReactions: boolean;
    includeReplies: boolean;
    includeParentMessageText: boolean;
    includeThreadInfo: boolean;
    showSubchannelMessagesOnly: boolean;

    load(limit: number, reverse: boolean, callback: messageListCallback): void;
    load(limit: number, reverse: boolean, messageType: number, callback: messageListCallback): void;
    load(callback: messageListCallback): void;
  }

  /**
   * OpenChannel
   */
  type commonCallback = (response: Object, error: SendBirdError) => void;
  type openChannelCallback = (openChannel: OpenChannel, error: SendBirdError) => void;

  interface OpenChannelParams {
    new(): OpenChannelParams;
    channelUrl: string;
    name: string;
    coverUrlOrImage: string | File;
    data: string;
    customType: string;

    operatorUserIds(userIds: string[]): void;
  }

  interface OpenChannel extends BaseChannel {
    participantCount: number;
    operators: Array<User>;

    refresh(callback: openChannelCallback): void;
    delete(callback: commonCallback): void;
    enter(callback: openChannelCallback): void;
    exit(callback: openChannelCallback): void;

    createParticipantListQuery(): ParticipantListQuery;
    createMutedUserListQuery(): MutedUserListQuery;
    createBannedUserListQuery(): BannedUserListQuery;

    updateChannel(params: OpenChannelParams, callback: openChannelCallback): void;
    updateChannel(name: string, coverUrlOrImageFile: string | File, data: string, callback: openChannelCallback): void;
    /**
     * @deprecated
     */
    updateChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void;
    updateChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    updateChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void;
    updateChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    banUser(user: User, callback: commonCallback): void;
    banUser(user: User, seconds: number, callback: commonCallback): void;
    banUserWithUserId(userId: string, callback: commonCallback): void;
    banUserWithUserId(userId: string, seconds: number, callback: commonCallback): void;
    unbanUser(user: User, callback: commonCallback): void;
    unbanUserWithUserId(userId: string, callback: commonCallback): void;

    muteUser(user: User, callback: commonCallback): void;
    muteUser(user: User, seconds: number, description: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, seconds: number, description: string, callback: commonCallback): void;
    unmuteUser(user: User, callback: commonCallback): void;
    unmuteUserWithUserId(userId: string, callback: commonCallback): void;

    isOperator(user: User): boolean;
    isOperatorWithUserId(userId: string): boolean;
  }

  type userListQueryCallback = (userList: Array<User>, error: SendBirdError) => void;
  interface UserListQuery {
    /**
     * @deprecated
     */
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    metaDataKey: string;
    metaDataValues: Array<string>;

    next(callback: userListQueryCallback): void;
  }

  interface ApplicationUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    userIdsFilter: Array<string>;
    metaDataKeyFilter: string;
    metaDataValuesFilter: Array<string>;
    nicknameStartsWithFilter: string;

    next(callback: userListQueryCallback): void;
  }

  interface BlockedUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    userIdsFilter: Array<string>;

    next(callback: userListQueryCallback): void;
  }

  interface ParticipantListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;

    next(callback: userListQueryCallback): void;
  }

  interface MutedUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;

    next(callback: userListQueryCallback): void;
  }

  interface BannedUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;

    next(callback: userListQueryCallback): void;
  }

  interface OperatorListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    next(callback: userListQueryCallback): void;
  }

  interface OpenChannelStatic {
    buildFromSerializedData(serializedObject: Object): OpenChannel;

    getChannel(channelUrl: string): Promise<OpenChannel>;
    getChannel(channelUrl: string, callback: openChannelCallback): void;
    getChannelWithoutCache(channelUrl: string): Promise<OpenChannel>;
    getChannelWithoutCache(channelUrl: string, callback: openChannelCallback): void;

    createChannel(): Promise<OpenChannel>;
    createChannel(callback: openChannelCallback): void;
    createChannel(params: OpenChannelParams): Promise<OpenChannel>;
    createChannel(params: OpenChannelParams, callback: openChannelCallback): void;

    /**
     * @deprecated
     */
    createChannel(name: string, coverUrlOrImageFile: string | File, data: string): Promise<OpenChannel>;
    /**
     * @deprecated
     */
    createChannel(name: string, coverUrlOrImageFile: string | File, data: string, callback: openChannelCallback): void;

    /**
     * @deprecated
     */
    createChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string
    ): Promise<OpenChannel>;
    /**
     * @deprecated
     */
    createChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void;
    createChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
    ): Promise<OpenChannel>;
    createChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    createChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string
    ): Promise<OpenChannel>;
    createChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void;
    createChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
    ): Promise<OpenChannel>;
    createChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    createOpenChannelListQuery(): OpenChannelListQuery;
  }

  type openChannelListQueryCallback = (openChannelList: Array<OpenChannel>, error: SendBirdError) => void;
  interface OpenChannelListQuery {
    limit: number;
    hasNext: boolean;
    nameKeyword: string;
    urlKeyword: string;
    customTypes: string[];
    includeFrozen: boolean;

    next(callback: openChannelListQueryCallback): void;
  }

  /**
   * ScheduledUserMessage
   */
  interface ScheduledUserMessage {
    scheduledId: number;
    scheduledDateTimeString: string;
    scheduledTimezone: string;
    status: 'scheduled' | 'sent' | 'canceled' | 'failed';
    createdAt: number;
    updatedAt: number;
    channelUrl: string;
    sender: User;
    message: string;
    customType: string;
    data: string;
    /**
     * @deprecated
     */
    metaArray: Object;
    metaArrays: Array<MessageMetaArray>;
    mentionType: 'users' | 'channel';
    mentionedUsers: Array<User>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
    translationTargetLanguages: Array<string>;
    errorMessage: string;
    errorCode: number;

    isGroupChannel(): boolean;
    isOpenChannel(): boolean;
  }

  type scheduledUserMessageCallback = (scheduledUserMessage: ScheduledUserMessage, error: SendBirdError) => void;

  /**
   * GroupChannel
   */
  interface GroupChannelParams {
    new(): GroupChannelParams;
    isDistinct: boolean;
    isSuper: boolean;
    isBroadcast: boolean;
    isPublic: boolean;
    isDiscoverable: boolean;
    isStrict: boolean;
    isEphemeral: boolean;
    channelUrl: string;
    name: string;
    data: string;
    customType: string;
    coverUrl: string;
    coverImage: File;
    operators: Array<User>;
    operatorUserIds: Array<string>;
    accessCode: string;
    messageSurvivalSeconds: number;

    addUser(user: User): void;
    addUsers(user: Array<User>): void;
    addUserId(userId: string): void;
    addUserIds(userId: Array<string>): void;
  }

  interface ScheduledUserMessageParams {
    new(): ScheduledUserMessageParams;
    message: string;
    data: string;
    customType: string;
    translationTargetLanguages: Array<string>;
    metaArrayKeys: Array<string>;
    mentionType: 'users' | 'channel';
    mentionedUserIds: Array<string>;
    mentionedUsers: Array<User>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    timezone: string;
    scheduledDateTimeString: string;

    setSchedule(year: number, month: number, day: number, hour: number, min: number, timezone: string): void;
  }

  interface GroupChannelChangeLogsParams {
    new(): GroupChannelChangeLogsParams;
    customTypes: Array<string>;
    includeEmpty: boolean;
    includeFrozen: boolean;
  }

  interface DistinctGroupChannelResponse {
    channel: GroupChannel;
    isCreated: boolean;
  }

  interface MessageMetaArray {
    new(key: string, value: Array<string>): MessageMetaArray;
    key: string;
    value: Array<string>;
  }
  interface Reaction {
    new(): Reaction;
    key: string;
    userIds: Array<string>;
    updatedAt: number;
  }
  interface ReactionEvent {
    new(): ReactionEvent;
    messageId: number;
    userId: string;
    key: string;
    operation: 'add' | 'delete';
    updatedAt: number;
  }

  interface ThreadInfo {
    new(): ThreadInfo;
    replyCount: number;
    mostRepliedUsers: Array<User>;
    lastRepliedAt: number;
    updatedAt: number;
  }
  interface ThreadInfoUpdateEvent {
    new(): ThreadInfoUpdateEvent;
    threadInfo: ThreadInfo;
    targetMessageId: number;
    channelUrl: string;
    channelType: string;
  }

  interface OGMetaData {
    new(): OGMetaData;
    title: string;
    url: string;
    description: string;
    defaultImage: OGImage;
  }
  interface OGImage {
    new(): OGImage;
    url: string;
    secureUrl: string;
    type: string;
    width: number;
    height: number;
    alt: string;
  }

  type groupChannelCallback = (groupChannel: GroupChannel, error: SendBirdError) => void;
  type distinctGroupChannelCallback = (response: DistinctGroupChannelResponse, error: SendBirdError) => void;
  type getPushPreferenceCallback = (isPushOn: boolean, error: SendBirdError) => void;
  type getPushTriggerOptionCallback = (
    pushTriggerOption: 'all' | 'mention_only' | 'off' | 'default',
    error: SendBirdError
  ) => void;
  interface GroupChannel extends BaseChannel {
    isHidden: boolean;
    isDistinct: boolean;
    isSuper: boolean;
    isBroadcast: boolean;
    isPublic: boolean;
    /**
     * @deprecated
     */
    isPushEnabled: boolean;
    myPushTriggerOption: 'default' | 'all' | 'mention_only' | 'off';
    myCountPreference: string;
    lastMessage: UserMessage | FileMessage | AdminMessage;
    unreadMessageCount: number;
    unreadMentionCount: number;
    members: Array<Member>;
    memberCount: number;
    joinedMemberCount: number;
    myMemberState: 'none' | 'joined' | 'invited';
    myRole: 'operator' | 'none';
    myMutedState: 'muted' | 'unmuted';
    inviter: User;
    invitedAt: number;
    isAccessCodeRequired: boolean;
    hiddenState: 'unhidden' | 'hidden_allow_auto_unhide' | 'hidden_prevent_auto_unhide';
    isDiscoverable: boolean;
    myLastRead: number;
    messageOffsetTimestamp: number;
    messageSurvivalSeconds: number;

    isEqual(target: GroupChannel): boolean;
    isIdentical(target: GroupChannel): boolean;
    refresh(callback: groupChannelCallback): void;
    delete(callback: commonCallback): void;

    updateChannel(groupChannelParams: GroupChannelParams, callback: groupChannelCallback): void;
    updateChannel(name: string, coverUrlOrImageFile: string | File, data: string, callback: groupChannelCallback): void;
    /**
     * @deprecated
     */
    updateChannel(
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      callback: groupChannelCallback
    ): void;
    updateChannel(
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      customType: string,
      callback: groupChannelCallback
    ): void;

    resetMyHistory(callback?: commonCallback): void;

    invite(users: Array<User>, callback: groupChannelCallback): void;
    inviteWithUserIds(userIds: Array<string>, callback: groupChannelCallback): void;
    acceptInvitation(): Promise<GroupChannel>;
    acceptInvitation(accessCode: string): Promise<GroupChannel>;
    acceptInvitation(callback: groupChannelCallback): void;
    acceptInvitation(accessCode: string, callback: groupChannelCallback): void;
    declineInvitation(callback: commonCallback): void;

    join(callback: groupChannelCallback): void;
    join(accessCode: string, callback: groupChannelCallback): void;
    leave(callback: commonCallback): void;

    hide(callback: commonCallback): void;
    hide(hidePreviousMessages: boolean, callback: commonCallback): void;
    hide(hidePreviousMessages: boolean, allowAutoUnhide: boolean, callback: commonCallback): void;
    unhide(callback: commonCallback): void;

    markAsRead(): void;
    /**
     * @deprecated
     */
    getReadReceipt(message: UserMessage | FileMessage | AdminMessage): number;
    getReadStatus(includeAllMembers?: boolean): Object;
    getUnreadMembers(message: UserMessage | FileMessage, includeAllMembers?: boolean): Array<Member>;
    getReadMembers(message: UserMessage | FileMessage, includeAllMembers?: boolean): Array<Member>;
    getUnreadMemberCount(message: UserMessage | FileMessage | AdminMessage): number;

    markAsDelivered(): void;
    /**
     * @deprecated
     */
    getDeliveryReceipt(message: UserMessage | FileMessage | AdminMessage): number;
    getUndeliveredMemberCount(message: UserMessage | FileMessage | AdminMessage): number;

    startTyping(): void;
    endTyping(): void;
    isTyping(): boolean;
    getTypingMembers(): Array<Member>; // DEPRECATE
    getTypingUsers(): Array<User>;

    /**
     * @deprecated
     */
    setPushPreference(pushOn: boolean, callback: commonCallback): void;
    /**
     * @deprecated
     */
    getPushPreference(callback: getPushPreferenceCallback): void;
    setMyPushTriggerOption(
      pushTriggerOption: 'all' | 'mention_only' | 'off' | 'default',
      callback: getPushTriggerOptionCallback
    ): void;
    getMyPushTriggerOption(callback: getPushTriggerOptionCallback): void;
    setMyCountPreference(
      preference: 'all' | 'unread_message_count_only' | 'unread_mention_count_only' | 'off',
      callback: commonCallback
    ): void;

    createMemberListQuery(): GroupChannelMemberListQuery;
    createBannedUserListQuery(): BannedUserListQuery;

    banUser(user: User, seconds: number, description: string, callback: commonCallback): void;
    banUserWithUserId(userId: string, seconds: number, description: string, callback: commonCallback): void;
    unbanUser(User: User, callback: commonCallback): void;
    unbanUserWithUserId(userId: string, callback: commonCallback): void;

    muteUser(user: User, callback: commonCallback): void;
    muteUser(user: User, seconds: number, description: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, seconds: number, description: string, callback: commonCallback): void;
    unmuteUser(user: User, callback: commonCallback): void;
    unmuteUserWithUserId(userId: string, callback: commonCallback): void;

    freeze(callback: commonCallback): void;
    freeze(): Promise<void>;
    unfreeze(callback: commonCallback): void;
    unfreeze(): Promise<void>;

    registerScheduledUserMessage(
      scheduledUserMessageParams: ScheduledUserMessageParams,
      callback: scheduledUserMessageCallback
    ): void;
  }

  type groupChannelCountCallback = (count: number, error: SendBirdError) => void;
  interface GroupChannelStatic {
    buildFromSerializedData(serializedObject: Object): GroupChannel;

    createMyGroupChannelListQuery(): GroupChannelListQuery;
    createPublicGroupChannelListQuery(): PublicGroupChannelListQuery;

    /**
     * @deprecated
     */
    getUnreadItemCount(keys: Array<string>, callback: commonCallback): void;
    /**
     * @deprecated
     */
    getTotalUnreadMessageCount(
      groupChannelTotalUnreadMessageCountParams: GroupChannelTotalUnreadMessageCountParams,
      callback: groupChannelCountCallback
    ): void;
    /**
     * @deprecated
     */
    getTotalUnreadMessageCount(callback: groupChannelCountCallback): void;
    /**
     * @deprecated
     */
    getTotalUnreadMessageCount(channelCustomTypes: Array<string>, callback: groupChannelCountCallback): void;
    /**
     * @deprecated
     */
    getTotalUnreadChannelCount(callback: groupChannelCountCallback): void;

    createChannel(groupChannelParams: GroupChannelParams, callback: groupChannelCallback): void;
    createChannel(users: Array<User>, callback: groupChannelCallback): void;
    /**
     * @deprecated
     */
    createChannel(users: Array<User>, isDistinct: boolean, callback: groupChannelCallback): void;
    /**
     * @deprecated
     */
    createChannel(users: Array<User>, isDistinct: boolean, customType: string, callback: groupChannelCallback): void;
    /**
     * @deprecated
     */
    createChannel(
      users: Array<User>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      callback: groupChannelCallback
    ): void;
    createChannel(
      users: Array<User>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      customType: string,
      callback: groupChannelCallback
    ): void;
    createDistinctChannelIfNotExist(
      groupChannelParams: GroupChannelParams,
      callback: distinctGroupChannelCallback
    ): void;

    createChannelWithUserIds(userIds: Array<string>, callback: groupChannelCallback): void;
    /**
     * @deprecated
     */
    createChannelWithUserIds(userIds: Array<string>, isDistinct: boolean, callback: groupChannelCallback): void;
    /**
     * @deprecated
     */
    createChannelWithUserIds(
      userIds: Array<string>,
      isDistinct: boolean,
      customType: string,
      callback: groupChannelCallback
    ): void;
    /**
     * @deprecated
     */
    createChannelWithUserIds(
      userIds: Array<string>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      callback: groupChannelCallback
    ): void;
    createChannelWithUserIds(
      userIds: Array<string>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      customType: string,
      callback: groupChannelCallback
    ): void;

    getChannel(channelUrl: string, callback: groupChannelCallback): void;
    getChannelWithoutCache(channelUrl: string, callback: groupChannelCallback): void;

    /**
     * @deprecated
     */
    markAsReadAll(callback: commonCallback): void;
  }

  type groupChannelMemberListQueryCallback = (groupChannelList: Array<Member>, error: SendBirdError) => void;
  interface GroupChannelMemberListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    order: 'member_nickname_alphabetical' | 'operator_then_member_alphabetical';
    mutedMemberFilter: 'all' | 'muted' | 'unmuted';
    /**
     * @deprecated
     */
    operatorFilter: 'all' | 'operator' | 'nonoperator';
    memberStateFilter: 'all' | 'joined_only' | 'invited_only' | 'invited_by_friend' | 'invited_by_non_friend';
    nicknameStartsWithFilter: string;

    next(callback: groupChannelMemberListQueryCallback): void;
  }

  type groupChannelListQueryCallback = (groupChannelList: Array<GroupChannel>, error: SendBirdError) => void;
  interface GroupChannelListQueryStatic {
    buildFromSerializedData(serializedObject: object): GroupChannelListQuery;
  }
  interface GroupChannelListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    includeEmpty: boolean;
    order: 'latest_last_message' | 'chronological' | 'channel_name_alphabetical' | 'metadata_value_alphabetical';
    /**
     * @deprecated
     */
    userIdsFilter: Array<string>;
    /**
     * @deprecated
     */
    userIdsFilterExactMatch: boolean;
    /**
     * @deprecated
     */
    queryType: 'AND' | 'OR';
    userIdsExactFilter: Array<string>;
    userIdsIncludeFilter: Array<string>;
    userIdsIncludeFilterQueryType: 'AND' | 'OR';
    nicknameContainsFilter: string;
    channelNameContainsFilter: string;
    /**
     * @deprecated
     */
    customTypeFilter: string;
    customTypesFilter: Array<string>;
    customTypeStartsWithFilter: string;
    channelUrlsFilter: Array<string>;
    superChannelFilter: 'all' | 'super' | 'nonsuper';
    publicChannelFilter: 'all' | 'public' | 'private';
    metadataOrderKeyFilter: string;
    memberStateFilter: 'all' | 'joined_only' | 'invited_only' | 'invited_by_friend' | 'invited_by_non_friend';
    hiddenChannelFilter: 'unhidden_only' | 'hidden_only' | 'hidden_allow_auto_unhide' | 'hidden_prevent_auto_unhide';
    unreadChannelFilter: 'all' | 'unread_message';
    includeFrozen: boolean;

    setSearchFilter(fields: Array<string>, queryString: string): void;
    serialize(): object;
    next(callback: groupChannelListQueryCallback): void;
  }

  interface PublicGroupChannelListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    includeEmpty: boolean;
    order: 'chronological' | 'channel_name_alphabetical' | 'metadata_value_alphabetical';
    channelNameContainsFilter: string;
    channelUrlsFilter: Array<string>;
    customTypesFilter: Array<string>;
    customTypeStartsWithFilter: string;
    superChannelFilter: 'all' | 'super' | 'nonsuper';
    membershipFilter: 'all' | 'joined';
    metadataOrderKeyFilter: string;
    includeFrozen: boolean;

    next(callback: groupChannelListQueryCallback): void;
  }
}
