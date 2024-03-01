/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AddFanToFanListInput = {
  fanId: Scalars['String']['input'];
  fanListId: Scalars['String']['input'];
};

export type AgenciesEntity = {
  __typename?: 'AgenciesEntity';
  agents?: Maybe<Array<AgentProfilesEntity>>;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile?: Maybe<CreatorProfilesEntity>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AgentProfilesEntity = {
  __typename?: 'AgentProfilesEntity';
  accessLevel: Scalars['String']['output'];
  agency: AgenciesEntity;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile?: Maybe<CreatorProfilesEntity>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UsersEntity>;
  userId: Scalars['String']['output'];
};

export type Analytics = {
  __typename?: 'Analytics';
  messageRevenue: Scalars['Float']['output'];
  messagesCount: Scalars['Float']['output'];
  postCount: Scalars['Float']['output'];
  subscribersCount: Scalars['Float']['output'];
  subscriptionRevenue: Scalars['Float']['output'];
  tipRevenue: Scalars['Float']['output'];
};

export type AssetsEntity = {
  __typename?: 'AssetsEntity';
  blurredURL?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorAssetVaults: Array<CreatorAssetVaultsEntity>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanAssetVaults: Array<FanAssetVaultsEntity>;
  id: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  originalURL: Scalars['String']['output'];
  owner?: Maybe<UserProfilesEntity>;
  postAssets: Array<PostAssetsEntity>;
  resizedURL: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  videoPlaybackId?: Maybe<Scalars['String']['output']>;
};

export type AudienceInsights = {
  __typename?: 'AudienceInsights';
  averageSessionTime: Scalars['Float']['output'];
  creatorProfileViews: Scalars['Float']['output'];
};

export type CancelSubscriptionOutput = {
  __typename?: 'CancelSubscriptionOutput';
  status: Scalars['String']['output'];
  stripeSubscriptionId: Scalars['String']['output'];
  stripeSubscriptionStatus: Scalars['String']['output'];
  subscriptionId: Scalars['String']['output'];
};

export type CategoriesEntity = {
  __typename?: 'CategoriesEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorCategories: Array<CreatorCategoriesEntity>;
  id: Scalars['String']['output'];
  imageURL: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CommentLikesEntity = {
  __typename?: 'CommentLikesEntity';
  author: UserProfilesEntity;
  comment: CommentsEntity;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentReportsEntity = {
  __typename?: 'CommentReportsEntity';
  comment: CommentsEntity;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  reporter: UserProfilesEntity;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentsEntity = {
  __typename?: 'CommentsEntity';
  author: UserProfilesEntity;
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  likeCount: Scalars['Float']['output'];
  likes?: Maybe<Array<CommentLikesEntity>>;
  parent?: Maybe<CommentsEntity>;
  post: PostsEntity;
  replies?: Maybe<Array<CommentsEntity>>;
  reports: Array<CommentReportsEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ConfirmCardOutput = {
  __typename?: 'ConfirmCardOutput';
  status: Scalars['String']['output'];
};

export type ConfirmCreatorTipInput = {
  creatorId: Scalars['String']['input'];
  paymentId: Scalars['String']['input'];
};

export type ConfirmPostTipInput = {
  paymentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type ConfirmSendMessageAsFanInput = {
  creatorId: Scalars['String']['input'];
  paymentId: Scalars['String']['input'];
};

export type ConfirmSubscriptionInput = {
  creatorId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
  months?: InputMaybe<Scalars['Int']['input']>;
};

export type ConfirmSubscriptionOutput = {
  __typename?: 'ConfirmSubscriptionOutput';
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  processorSubscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionId: Scalars['String']['output'];
  subscriptionPlanId: Scalars['String']['output'];
  subscriptionStatus: Scalars['String']['output'];
};

export type ConfirmUnlockMessageInput = {
  messageId: Scalars['String']['input'];
  paymentId: Scalars['String']['input'];
};

export type ConfirmUnlockPostInput = {
  paymentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreateCreatorInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCreatorTipInput = {
  amountInCents: Scalars['Float']['input'];
  creatorId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
};

export type CreateCreatorTipOutput = {
  __typename?: 'CreateCreatorTipOutput';
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  status: PaymentStatus;
};

export type CreateFanListInput = {
  name: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  message: Scalars['String']['input'];
  read: Scalars['Boolean']['input'];
};

export type CreateOrUpdateFanNoteInput = {
  fanId: Scalars['String']['input'];
  nickname?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrUpdateSubscriptionPlanInput = {
  amountInCents: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type CreateOrUpdateSubscriptionPlanOutput = {
  __typename?: 'CreateOrUpdateSubscriptionPlanOutput';
  amountInCents: Scalars['Float']['output'];
  creatorId: Scalars['String']['output'];
  isTierSubscriptionEnabled: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type CreatePostInput = {
  assets?: InputMaybe<Array<Scalars['String']['input']>>;
  isExclusive?: InputMaybe<Scalars['Boolean']['input']>;
  isFirstAssetPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isPremium?: InputMaybe<Scalars['Boolean']['input']>;
  nonSubscriberPrice?: InputMaybe<Scalars['Float']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  subscriberPrice?: InputMaybe<Scalars['Float']['input']>;
  title: Scalars['String']['input'];
};

export type CreatePostTipInput = {
  amountInCents: Scalars['Float']['input'];
  creatorId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
  postId: Scalars['String']['input'];
};

export type CreatePostTipOutputDto = {
  __typename?: 'CreatePostTipOutputDto';
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  status: PaymentStatus;
};

export type CreateSubscriptionInput = {
  creatorId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
  months?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSubscriptionOutput = {
  __typename?: 'CreateSubscriptionOutput';
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  processorSubscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionId: Scalars['String']['output'];
  subscriptionPlanId: Scalars['String']['output'];
  subscriptionStatus: Scalars['String']['output'];
};

export type CreateTagInput = {
  text: Scalars['String']['input'];
};

export type CreatorAnalytics = {
  __typename?: 'CreatorAnalytics';
  messageRevenue: Scalars['Float']['output'];
  messagesCount: Scalars['Float']['output'];
  postCount: Scalars['Float']['output'];
  subscribersCount: Scalars['Float']['output'];
  subscriptionRevenue: Scalars['Float']['output'];
  tipRevenue: Scalars['Float']['output'];
};

export type CreatorAssetVaultsEntity = {
  __typename?: 'CreatorAssetVaultsEntity';
  asset: AssetsEntity;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  tags: Array<TagsEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreatorBlocksEntity = {
  __typename?: 'CreatorBlocksEntity';
  blockedUser: UserProfilesEntity;
  blockingCreator: CreatorProfilesEntity;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreatorCategoriesEntity = {
  __typename?: 'CreatorCategoriesEntity';
  category: CategoriesEntity;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile?: Maybe<CreatorProfilesEntity>;
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreatorCategoryInput = {
  categoryId: Scalars['String']['input'];
  creatorId: Scalars['String']['input'];
};

export type CreatorDailyInsightDto = {
  __typename?: 'CreatorDailyInsightDto';
  creatorTipsRevenue: Scalars['Int']['output'];
  date: Scalars['String']['output'];
  mediaUnlockTipsRevenue: Scalars['Int']['output'];
  messageTipsRevenue: Scalars['Int']['output'];
  postTipsRevenue: Scalars['Int']['output'];
  postUnlockTipsRevenue: Scalars['Int']['output'];
  subscriptionsRevenue: Scalars['Int']['output'];
  totalRevenue: Scalars['Int']['output'];
  totalTipsRevenue: Scalars['Int']['output'];
};

export type CreatorDashboardDto = {
  __typename?: 'CreatorDashboardDto';
  messageCount?: Maybe<Scalars['Int']['output']>;
  messageRevenue?: Maybe<Scalars['Int']['output']>;
  postCount?: Maybe<Scalars['Int']['output']>;
  subscriberCount?: Maybe<Scalars['Int']['output']>;
  subscriptionRevenue?: Maybe<Scalars['Int']['output']>;
  tipRevenue?: Maybe<Scalars['Int']['output']>;
};

export type CreatorFollowsEntity = {
  __typename?: 'CreatorFollowsEntity';
  createdAt: Scalars['DateTime']['output'];
  followedCreator: CreatorProfilesEntity;
  followingUser: UserProfilesEntity;
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreatorPostsViewCountDto = {
  __typename?: 'CreatorPostsViewCountDto';
  postId: Scalars['String']['output'];
  viewCount: Scalars['Float']['output'];
};

export type CreatorProfileDto = {
  __typename?: 'CreatorProfileDto';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  agency?: Maybe<AgenciesEntity>;
  allowsComments: Scalars['Boolean']['output'];
  allowsMessaging: Scalars['Boolean']['output'];
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorCategories: Array<CreatorCategoriesEntity>;
  exclusivePostCount: Scalars['Int']['output'];
  fanLists: Array<FanListsEntity>;
  foreignAccount: Scalars['Boolean']['output'];
  freeMediaTipEnabled: Scalars['Boolean']['output'];
  freeMessageTipEnabled: Scalars['Boolean']['output'];
  hasTransferCapability?: Maybe<Scalars['Boolean']['output']>;
  isFeatured: Scalars['Boolean']['output'];
  isFollower?: Maybe<Scalars['Boolean']['output']>;
  isOnline: Scalars['Boolean']['output'];
  isWatermarkEnabled: Scalars['Boolean']['output'];
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  minimumMediaTip: Scalars['Float']['output'];
  minimumMessageTip: Scalars['Float']['output'];
  postCount: Scalars['Int']['output'];
  publicPostCount?: Maybe<Scalars['Int']['output']>;
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  socialAccounts?: Maybe<SocialAccountsEntity>;
  source?: Maybe<Scalars['String']['output']>;
  subscribed?: Maybe<Scalars['Boolean']['output']>;
  subscriptionPlan?: Maybe<GetSubscriptionPlan>;
  totalExclusivePost: Scalars['Float']['output'];
  totalPublicPost: Scalars['Float']['output'];
  underFollowersExperiment?: Maybe<Scalars['Boolean']['output']>;
  unreadChannelsCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UsersEntity;
  userId: Scalars['String']['output'];
  userProfile?: Maybe<UserProfilesEntity>;
};

export type CreatorProfilesEntity = {
  __typename?: 'CreatorProfilesEntity';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  agency?: Maybe<AgenciesEntity>;
  allowsComments: Scalars['Boolean']['output'];
  allowsMessaging: Scalars['Boolean']['output'];
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorCategories: Array<CreatorCategoriesEntity>;
  fanLists: Array<FanListsEntity>;
  foreignAccount: Scalars['Boolean']['output'];
  freeMediaTipEnabled: Scalars['Boolean']['output'];
  freeMessageTipEnabled: Scalars['Boolean']['output'];
  isFeatured: Scalars['Boolean']['output'];
  isWatermarkEnabled: Scalars['Boolean']['output'];
  minimumMediaTip: Scalars['Float']['output'];
  minimumMessageTip: Scalars['Float']['output'];
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  socialAccounts?: Maybe<SocialAccountsEntity>;
  source?: Maybe<Scalars['String']['output']>;
  totalExclusivePost: Scalars['Float']['output'];
  totalPublicPost: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UsersEntity;
  userId: Scalars['String']['output'];
  userProfile?: Maybe<UserProfilesEntity>;
};

export type DeleteFanFromFanListInput = {
  fanId: Scalars['String']['input'];
  fanListId: Scalars['String']['input'];
};

export type DeleteOrRestoreAssetInput = {
  action: Scalars['String']['input'];
  assetId: Scalars['String']['input'];
};

export type DeleteOrRestoreCommentInput = {
  action: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type DeleteOrRestorePostInput = {
  action: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type DeleteOrRestoreUserInput = {
  action: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type DeleteUserAvatarOutput = {
  __typename?: 'DeleteUserAvatarOutput';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type DeleteUserBioOutput = {
  __typename?: 'DeleteUserBioOutput';
  bio?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EditFanListInput = {
  fanListId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type EditMessageBlastInput = {
  messageBlastId: Scalars['String']['input'];
  scheduledAt: Scalars['String']['input'];
};

export type EditMessageBlastOutput = {
  __typename?: 'EditMessageBlastOutput';
  messageBlastId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type EstimateMessageBlastReachInput = {
  assetIdsToExcludeFans?: InputMaybe<Array<Scalars['String']['input']>>;
  excludeLists?: InputMaybe<Array<Scalars['String']['input']>>;
  includeGroups?: InputMaybe<Scalars['String']['input']>;
  includeLists?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EstimateMessageBlastReachOutput = {
  __typename?: 'EstimateMessageBlastReachOutput';
  estimatedReach: Scalars['Float']['output'];
};

export type EstimatePaymentInput = {
  amountInCents: Scalars['Float']['input'];
  fanId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
  /** Tip type, one of Message,Media Unlock,Livestream,Livestream Comment,Creator Tip,Publication,Post,Post Unlock,Subscription Charge */
  tipType: Scalars['String']['input'];
};

export type EstimatePaymentOutput = {
  __typename?: 'EstimatePaymentOutput';
  processingFeeAmountInCents: Scalars['Float']['output'];
  taxAmountInCents: Scalars['Float']['output'];
  taxTotal: Scalars['Float']['output'];
  totalAmountInCents: Scalars['Float']['output'];
};

export type EstimateSubscriptionInput = {
  creatorId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
  months?: InputMaybe<Scalars['Int']['input']>;
};

export type EstimateSubscriptionOutput = {
  __typename?: 'EstimateSubscriptionOutput';
  taxTotal: Scalars['Float']['output'];
};

export type FanAssetVaultsEntity = {
  __typename?: 'FanAssetVaultsEntity';
  asset: AssetsEntity;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fan: UserProfilesEntity;
  id: Scalars['String']['output'];
  relatedEntityId?: Maybe<Scalars['String']['output']>;
  sourceType?: Maybe<Scalars['String']['output']>;
  totalPaid: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FanListFansEntity = {
  __typename?: 'FanListFansEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fan: UserProfilesEntity;
  fanList: FanListsEntity;
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FanListsEntity = {
  __typename?: 'FanListsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanCount: Scalars['Float']['output'];
  fanToFanList?: Maybe<Array<FanListFansEntity>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FanNotesEntity = {
  __typename?: 'FanNotesEntity';
  createdAt: Scalars['DateTime']['output'];
  creator: CreatorProfilesEntity;
  fan: UserProfilesEntity;
  id: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum FileType {
  Audio = 'Audio',
  Document = 'Document',
  Image = 'Image',
  Video = 'Video'
}

export type FilterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<FileType>;
};

export type GetCardsOutput = {
  __typename?: 'GetCardsOutput';
  brand?: Maybe<Scalars['String']['output']>;
  expirationMonth: Scalars['Float']['output'];
  expirationYear: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  lastFour: Scalars['String']['output'];
  status: Scalars['String']['output'];
  walletType: Scalars['String']['output'];
};

export type GetChannelMessagesOutput = {
  __typename?: 'GetChannelMessagesOutput';
  hasMore: Scalars['Boolean']['output'];
  messages: Array<MessageDto>;
};

export enum GetChannelsOrderBy {
  New = 'New',
  TipTotal = 'TipTotal'
}

export type GetChannelsOutput = {
  __typename?: 'GetChannelsOutput';
  messageChannels: Array<MessageChannelDto>;
  totalCount: Scalars['Int']['output'];
};

export type GetCreatorAssetsInput = {
  filter: FilterInput;
  pagination: PaginationInput;
};

export type GetCreatorFanDetailsOutput = {
  __typename?: 'GetCreatorFanDetailsOutput';
  lifetimeRevenue: Scalars['Float']['output'];
  subscriptionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GetCreatorTagsOutput = {
  __typename?: 'GetCreatorTagsOutput';
  assetCount: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type GetMessageBlastDto = {
  __typename?: 'GetMessageBlastDto';
  assets: Array<MessageAssetDto>;
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorUsername?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  sentUserCount?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  unlockCount?: Maybe<Scalars['Int']['output']>;
  unlockPriceInCents?: Maybe<Scalars['Float']['output']>;
  unlockRevenueInCents?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GetPayoutLinkInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type GetPayoutLinkOutput = {
  __typename?: 'GetPayoutLinkOutput';
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GetPostDto = {
  __typename?: 'GetPostDto';
  allowsComments: Scalars['Boolean']['output'];
  assets?: Maybe<Array<PostAssetDto>>;
  author?: Maybe<UserProfilesEntity>;
  commentCount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isCreatorProfileBlocked: Scalars['Boolean']['output'];
  isCreatorProfileSubscribed: Scalars['Boolean']['output'];
  isExclusive: Scalars['Boolean']['output'];
  isFirstAssetPublic: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  isLocked: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isWatermarkEnabled: Scalars['Boolean']['output'];
  likeCount: Scalars['Float']['output'];
  nonSubscriberPrice?: Maybe<Scalars['Float']['output']>;
  paymentAmount?: Maybe<Scalars['Float']['output']>;
  postUnlock?: Maybe<PremiumPostUnlocksEntity>;
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  subscriberPrice?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  unlockCount?: Maybe<Scalars['Int']['output']>;
  unlockPriceInCents?: Maybe<Scalars['Float']['output']>;
  unlockRevenueInCents?: Maybe<Scalars['Int']['output']>;
  unlockedAt?: Maybe<Scalars['DateTime']['output']>;
  viewCount: Scalars['Float']['output'];
};

export type GetSubscriptionPlan = {
  __typename?: 'GetSubscriptionPlan';
  amountInCents?: Maybe<Scalars['Float']['output']>;
  isTierSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type GetSubscriptionPlanOutput = {
  __typename?: 'GetSubscriptionPlanOutput';
  amountInCents?: Maybe<Scalars['Float']['output']>;
  creatorId: Scalars['String']['output'];
  hasTransferCapability?: Maybe<Scalars['Boolean']['output']>;
  isTierSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type GetSubscriptionsOutput = {
  __typename?: 'GetSubscriptionsOutput';
  subscriptions: Array<SubscriptionDto>;
  totalCount: Scalars['Float']['output'];
};

export type GreetingMessageAssetsEntity = {
  __typename?: 'GreetingMessageAssetsEntity';
  asset: AssetsEntity;
  assetOrder: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  greetingMessage: GreetingMessagesEntity;
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GreetingMessagesEntity = {
  __typename?: 'GreetingMessagesEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  greetingMessageAssets: Array<GreetingMessageAssetsEntity>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isPreviewEnabled: Scalars['Boolean']['output'];
  text: Scalars['String']['output'];
  type: Scalars['String']['output'];
  unlockPriceInCents: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LikesEntity = {
  __typename?: 'LikesEntity';
  author: UserProfilesEntity;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  post: PostsEntity;
  updatedAt: Scalars['DateTime']['output'];
};

export type LocationDto = {
  countryCode: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type MessageAssetDto = {
  __typename?: 'MessageAssetDto';
  assetId: Scalars['String']['output'];
  assetOrder: Scalars['Float']['output'];
  blurredURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  originalURL?: Maybe<Scalars['String']['output']>;
  resizedURL?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videoPlaybackId?: Maybe<Scalars['String']['output']>;
};

export type MessageBlastDto = {
  __typename?: 'MessageBlastDto';
  assets: Array<MessageAssetDto>;
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorUsername?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  scheduledAt: Scalars['DateTime']['output'];
  sentUserCount?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  unlockCount?: Maybe<Scalars['Int']['output']>;
  unlockPriceInCents?: Maybe<Scalars['Float']['output']>;
  unlockRevenueInCents?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageChannelDto = {
  __typename?: 'MessageChannelDto';
  allowsMessaging: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorLastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  creatorLastSentAt?: Maybe<Scalars['DateTime']['output']>;
  creatorUserId: Scalars['String']['output'];
  creatorUserProfile?: Maybe<UserProfilesEntity>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanLastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  fanLastSentAt?: Maybe<Scalars['DateTime']['output']>;
  fanNote?: Maybe<FanNotesEntity>;
  fanUserId: Scalars['String']['output'];
  fanUserProfile?: Maybe<UserProfilesEntity>;
  freeMediaTipEnabled: Scalars['Boolean']['output'];
  freeMessageTipEnabled: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isOnline: Scalars['Boolean']['output'];
  isUnread: Scalars['Boolean']['output'];
  lastMessage?: Maybe<MessageDto>;
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  minimumMediaTip: Scalars['Float']['output'];
  minimumMessageTip: Scalars['Float']['output'];
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  tipTotal: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** @deprecated Remove it from the schema */
  url?: Maybe<Scalars['String']['output']>;
};

export type MessageDto = {
  __typename?: 'MessageDto';
  approved?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Array<MessageAssetDto>>;
  /** @deprecated We dont need it anymore(remove it with next release) */
  channelUrl?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isPreviewEnabled?: Maybe<Scalars['Boolean']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  paymentAmount?: Maybe<Scalars['Float']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  recipientType: Scalars['String']['output'];
  recipientUserId: Scalars['String']['output'];
  sendbirdId?: Maybe<Scalars['String']['output']>;
  senderType: Scalars['String']['output'];
  senderUserId: Scalars['String']['output'];
  unlockPriceInCents?: Maybe<Scalars['Float']['output']>;
  unlockedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Messages = {
  __typename?: 'Messages';
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  message: Scalars['String']['output'];
  messageRevenue: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCreatorCategory: CreatorCategoriesEntity;
  addFanToFanList: Scalars['Boolean']['output'];
  assignAgent: AgentProfilesEntity;
  blockUser: CreatorBlocksEntity;
  cancelSubscription: CancelSubscriptionOutput;
  changePassword: UsersEntity;
  confirmCard: ConfirmCardOutput;
  confirmCreatorTip: CreateCreatorTipOutput;
  confirmPostTip: CreatePostTipOutputDto;
  confirmSendMessageAsFan: SendMessageAsFanOutput;
  confirmSubscription: ConfirmSubscriptionOutput;
  confirmUnlockMessage: UnlockMessageDto;
  confirmUnlockPost: UnlockPostOutput;
  createAgency: AgenciesEntity;
  createAgentProfile: AgentProfilesEntity;
  createComment: CommentsEntity;
  createCreatorProfile: CreatorProfileDto;
  createCreatorProfileForUserResolver: CreatorProfilesEntity;
  createCreatorTip: CreateCreatorTipOutput;
  createFanList: FanListsEntity;
  createNotification: NotificationsEntity;
  createOrUpdateFanNote: FanNotesEntity;
  createOrUpdateSubscriptionPlan: CreateOrUpdateSubscriptionPlanOutput;
  createPost: PostsEntity;
  createPostTip: CreatePostTipOutputDto;
  createSubscription: CreateSubscriptionOutput;
  createTag: TagsEntity;
  creatorProfileValidationGateway: CreatorProfilesEntity;
  deleteAgency: AgenciesEntity;
  deleteCard: Scalars['Boolean']['output'];
  deleteComment: Scalars['Boolean']['output'];
  deleteCreatorAsset: Scalars['Boolean']['output'];
  deleteCreatorAssets: Scalars['Boolean']['output'];
  deleteCreatorCategory: Scalars['Boolean']['output'];
  deleteFanFromFanList: Scalars['Boolean']['output'];
  deleteFanList: Scalars['Boolean']['output'];
  deleteFanNote: Scalars['Boolean']['output'];
  deleteGreetingMessage: Scalars['Boolean']['output'];
  deleteMessageBlast: Scalars['Boolean']['output'];
  deleteMessageBlastAsAdmin: Scalars['Boolean']['output'];
  deleteOrRestoreAssetResolver: AssetsEntity;
  deleteOrRestoreCommentResolver: CommentsEntity;
  deleteOrRestorePostResolver: PostsEntity;
  deleteOrRestoreUserResolver: UsersEntity;
  deletePost: PostsEntity;
  deleteUserAvatar: DeleteUserAvatarOutput;
  deleteUserBio: DeleteUserBioOutput;
  editFanList: Scalars['Boolean']['output'];
  editMessageBlast: EditMessageBlastOutput;
  estimatePayment: EstimatePaymentOutput;
  estimateSubscription: EstimateSubscriptionOutput;
  followCreator: CreatorFollowsEntity;
  /** Like or unlink a comment. */
  likeComment: Scalars['Boolean']['output'];
  /** Like or unlink a post. */
  likePost: Scalars['Boolean']['output'];
  markNotificationAsRead: NotificationsEntity;
  /** Pin or unpin a post. */
  pinPost: PostsEntity;
  removeAgentProfile: Scalars['Boolean']['output'];
  reportComment: CommentReportsEntity;
  reportPost: PostReportsEntity;
  resendMessageBlast: ResendMessageBlastOutput;
  sendMessageAsCreator: SendMessageAsCreatorOutput;
  sendMessageAsFan: SendMessageAsFanOutput;
  sendMessageBlast: SendMessageBlastOutput;
  toggleCreatorForeignAccountResolver: CreatorProfilesEntity;
  unassignAgent: AgentProfilesEntity;
  unblockUser: Scalars['Boolean']['output'];
  unfollowCreator: Scalars['Boolean']['output'];
  unlockMessage: UnlockMessageDto;
  unlockPost: UnlockPostOutput;
  updateAdminAccess: UsersEntity;
  updateAgentProfile: AgentProfilesEntity;
  updateComment: CommentsEntity;
  updateCreatorAsset: AssetsEntity;
  updateCreatorAssetVault: CreatorAssetVaultsEntity;
  updateCreatorProfile: CreatorProfileDto;
  updateGreetingMessage: GreetingMessagesEntity;
  updateLastSeenAtCreator: Scalars['Boolean']['output'];
  updateLastSeenAtFan: Scalars['Boolean']['output'];
  updatePost: PostsEntity;
  updateSocialAccount: SocialAccountsEntity;
  updateTypedGreetingMessage: GreetingMessagesEntity;
  updateUser: UsersEntity;
  updateUserEmailResolver: UsersEntity;
  updateUserProfile: UserProfilesEntity;
};


export type MutationAddCreatorCategoryArgs = {
  input: CreatorCategoryInput;
};


export type MutationAddFanToFanListArgs = {
  input: AddFanToFanListInput;
};


export type MutationAssignAgentArgs = {
  accessLevel: Scalars['String']['input'];
  email: Scalars['String']['input'];
  role: Scalars['String']['input'];
};


export type MutationBlockUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationCancelSubscriptionArgs = {
  creatorId: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationConfirmCardArgs = {
  cardId: Scalars['String']['input'];
};


export type MutationConfirmCreatorTipArgs = {
  input: ConfirmCreatorTipInput;
};


export type MutationConfirmPostTipArgs = {
  input: ConfirmPostTipInput;
};


export type MutationConfirmSendMessageAsFanArgs = {
  input: ConfirmSendMessageAsFanInput;
};


export type MutationConfirmSubscriptionArgs = {
  input: ConfirmSubscriptionInput;
};


export type MutationConfirmUnlockMessageArgs = {
  input: ConfirmUnlockMessageInput;
};


export type MutationConfirmUnlockPostArgs = {
  input: ConfirmUnlockPostInput;
};


export type MutationCreateAgencyArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateAgentProfileArgs = {
  agencyId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};


export type MutationCreateCommentArgs = {
  comment: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  replyTo?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCreatorProfileArgs = {
  input: CreateCreatorInput;
};


export type MutationCreateCreatorProfileForUserResolverArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateCreatorTipArgs = {
  input: CreateCreatorTipInput;
};


export type MutationCreateFanListArgs = {
  input: CreateFanListInput;
};


export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


export type MutationCreateOrUpdateFanNoteArgs = {
  input: CreateOrUpdateFanNoteInput;
};


export type MutationCreateOrUpdateSubscriptionPlanArgs = {
  input: CreateOrUpdateSubscriptionPlanInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreatePostTipArgs = {
  input: CreatePostTipInput;
};


export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreatorProfileValidationGatewayArgs = {
  input: UpdateCreatorProfileInput;
};


export type MutationDeleteCardArgs = {
  cardId: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationDeleteCreatorAssetArgs = {
  assetId: Scalars['String']['input'];
};


export type MutationDeleteCreatorAssetsArgs = {
  assetIds: Array<Scalars['String']['input']>;
};


export type MutationDeleteCreatorCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type MutationDeleteFanFromFanListArgs = {
  input: DeleteFanFromFanListInput;
};


export type MutationDeleteFanListArgs = {
  fanListId: Scalars['String']['input'];
};


export type MutationDeleteFanNoteArgs = {
  fanId: Scalars['String']['input'];
};


export type MutationDeleteGreetingMessageArgs = {
  type: Scalars['String']['input'];
};


export type MutationDeleteMessageBlastArgs = {
  messageBlastId: Scalars['String']['input'];
};


export type MutationDeleteMessageBlastAsAdminArgs = {
  creatorId: Scalars['String']['input'];
  messageBlastId: Scalars['String']['input'];
};


export type MutationDeleteOrRestoreAssetResolverArgs = {
  input: DeleteOrRestoreAssetInput;
};


export type MutationDeleteOrRestoreCommentResolverArgs = {
  input: DeleteOrRestoreCommentInput;
};


export type MutationDeleteOrRestorePostResolverArgs = {
  input: DeleteOrRestorePostInput;
};


export type MutationDeleteOrRestoreUserResolverArgs = {
  input: DeleteOrRestoreUserInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationDeleteUserAvatarArgs = {
  userId: Scalars['String']['input'];
};


export type MutationDeleteUserBioArgs = {
  userId: Scalars['String']['input'];
};


export type MutationEditFanListArgs = {
  input: EditFanListInput;
};


export type MutationEditMessageBlastArgs = {
  input: EditMessageBlastInput;
};


export type MutationEstimatePaymentArgs = {
  input: EstimatePaymentInput;
};


export type MutationEstimateSubscriptionArgs = {
  input: EstimateSubscriptionInput;
};


export type MutationFollowCreatorArgs = {
  creatorId: Scalars['String']['input'];
};


export type MutationLikeCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['String']['input'];
};


export type MutationPinPostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationRemoveAgentProfileArgs = {
  agentId: Scalars['String']['input'];
};


export type MutationReportCommentArgs = {
  commentId: Scalars['String']['input'];
  description: Scalars['String']['input'];
};


export type MutationReportPostArgs = {
  description: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};


export type MutationResendMessageBlastArgs = {
  input: ResendMessageBlastInput;
};


export type MutationSendMessageAsCreatorArgs = {
  input: SendMessageAsCreatorInput;
};


export type MutationSendMessageAsFanArgs = {
  input: SendMessageAsFanInput;
};


export type MutationSendMessageBlastArgs = {
  input: SendMessageBlastInput;
};


export type MutationToggleCreatorForeignAccountResolverArgs = {
  creatorId: Scalars['String']['input'];
};


export type MutationUnassignAgentArgs = {
  agentId: Scalars['String']['input'];
};


export type MutationUnblockUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUnfollowCreatorArgs = {
  creatorId: Scalars['String']['input'];
};


export type MutationUnlockMessageArgs = {
  input: UnlockMessageInput;
};


export type MutationUnlockPostArgs = {
  input: UnlockPostInput;
};


export type MutationUpdateAdminAccessArgs = {
  input: UpdateAdminAccess;
  userId: Scalars['String']['input'];
};


export type MutationUpdateAgentProfileArgs = {
  accessLevel?: InputMaybe<Scalars['String']['input']>;
  agentId: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCommentArgs = {
  comment: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
};


export type MutationUpdateCreatorAssetArgs = {
  assetId: Scalars['String']['input'];
  input: UpdateCreatorAssetInput;
};


export type MutationUpdateCreatorAssetVaultArgs = {
  creatorAssetVaultId: Scalars['String']['input'];
  input: UpdateCreatorAssetVaultInput;
};


export type MutationUpdateCreatorProfileArgs = {
  input: UpdateCreatorInput;
};


export type MutationUpdateGreetingMessageArgs = {
  input: UpdateGreetingMessage;
};


export type MutationUpdateLastSeenAtCreatorArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationUpdateLastSeenAtFanArgs = {
  channelId: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateSocialAccountArgs = {
  input: UpdateSocialAccountInput;
};


export type MutationUpdateTypedGreetingMessageArgs = {
  input: UpdateGreetingMessage;
  type: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserEmailResolverArgs = {
  input: UserEmailChangeInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};

export type NotificationsEntity = {
  __typename?: 'NotificationsEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userProfile: UserProfilesEntity;
};

export type PaginationInput = {
  limit?: Scalars['Float']['input'];
  offset?: Scalars['Float']['input'];
  order?: Scalars['String']['input'];
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

export enum PaymentStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Succeeded = 'SUCCEEDED'
}

export type PostAssetDto = {
  __typename?: 'PostAssetDto';
  assetId: Scalars['String']['output'];
  assetOrder: Scalars['Float']['output'];
  blurredURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isBlurred: Scalars['Boolean']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  originalURL?: Maybe<Scalars['String']['output']>;
  resizedURL?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  videoPlaybackId?: Maybe<Scalars['String']['output']>;
};

export type PostAssetsEntity = {
  __typename?: 'PostAssetsEntity';
  asset: AssetsEntity;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  order: Scalars['Float']['output'];
  post: PostsEntity;
  updatedAt: Scalars['DateTime']['output'];
};

export type PostReportsEntity = {
  __typename?: 'PostReportsEntity';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  post: PostsEntity;
  reporter: UserProfilesEntity;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PostsEntity = {
  __typename?: 'PostsEntity';
  author?: Maybe<UserProfilesEntity>;
  commentCount: Scalars['Float']['output'];
  comments?: Maybe<Array<CommentsEntity>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isExclusive: Scalars['Boolean']['output'];
  isFirstAssetPublic: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  likeCount: Scalars['Float']['output'];
  likes?: Maybe<Array<LikesEntity>>;
  nonSubscriberPrice?: Maybe<Scalars['Int']['output']>;
  postAssets?: Maybe<Array<PostAssetsEntity>>;
  reports?: Maybe<Array<PostReportsEntity>>;
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  subscriberPrice?: Maybe<Scalars['Int']['output']>;
  timelines?: Maybe<Array<UserTimelinePostsEntity>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewCount: Scalars['Float']['output'];
};

export type PremiumPostUnlocksEntity = {
  __typename?: 'PremiumPostUnlocksEntity';
  amountInCents: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  fan: UserProfilesEntity;
  id: Scalars['String']['output'];
  paymentId: Scalars['String']['output'];
  post: PostsEntity;
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminAggregate: Scalars['Float']['output'];
  blastsAggregate: Scalars['Float']['output'];
  creatorNumbers: Analytics;
  creatorsAggregate: Scalars['Float']['output'];
  deleteOnePost: PostsEntity;
  deleteUser: UsersEntity;
  getAgents: Array<AgentProfilesEntity>;
  getAllAdmins: Array<UsersEntity>;
  getAllApplicants: Array<CreatorProfilesEntity>;
  getAllBlasts: Array<GetMessageBlastDto>;
  getAllCreators: Array<CreatorProfilesEntity>;
  getAllPosts: Array<PostsEntity>;
  getAllUsers: Array<UsersEntity>;
  getAudienceInsights: AudienceInsights;
  getCards: Array<GetCardsOutput>;
  getCategories: Array<CategoriesEntity>;
  getChannelById: MessageChannelDto;
  getChannelMessages: GetChannelMessagesOutput;
  getChannels: GetChannelsOutput;
  getCommentLikes: Array<CommentLikesEntity>;
  getComments: Array<CommentsEntity>;
  getCommentsAggregate: Scalars['Float']['output'];
  /** @deprecated Use getCreatorAssetsV2 instead. */
  getCreatorAssets: Array<CreatorAssetVaultsEntity>;
  getCreatorAssetsV2: Array<CreatorAssetVaultsEntity>;
  getCreatorDailyInsights: Array<CreatorDailyInsightDto>;
  getCreatorDashboard: CreatorDashboardDto;
  getCreatorFanDetails: GetCreatorFanDetailsOutput;
  getCreatorFansPurchasedAssets: Array<FanAssetVaultsEntity>;
  getCreatorInsights: CreatorAnalytics;
  getCreatorPostViewCount: Scalars['Float']['output'];
  getCreatorPostsViewCount: Array<CreatorPostsViewCountDto>;
  getCreatorProfile: CreatorProfileDto;
  getCreatorTags: Array<GetCreatorTagsOutput>;
  getCreators: Array<CreatorProfileDto>;
  getEstimatedMessageBlastReach: EstimateMessageBlastReachOutput;
  getFanAssets: Array<FanAssetVaultsEntity>;
  getFanLists: Array<FanListsEntity>;
  getFanNote: FanNotesEntity;
  getFanProfile: UserProfilesDto;
  getGreetingMessage: GreetingMessagesEntity;
  getGreetingMessages: Array<GreetingMessagesEntity>;
  getLatestMessages: Array<Messages>;
  getLatestNotifications: Array<NotificationsEntity>;
  getLatestPosts: Array<PostsEntity>;
  getLikes: Array<LikesEntity>;
  getMessageBlasts: Array<MessageBlastDto>;
  getNewSubscribers: Array<Subscribers>;
  getNotifications: Array<NotificationsEntity>;
  getOneCreator: CreatorProfilesEntity;
  getOnePost: PostsEntity;
  getOneUser: UsersEntity;
  getOrCreateChannel: MessageChannelDto;
  getPayoutLink: GetPayoutLinkOutput;
  getPost: GetPostDto;
  getPosts: Array<GetPostDto>;
  getPublicPosts: Array<GetPostDto>;
  getPublicProfile: CreatorProfileDto;
  getSubscription?: Maybe<SubscriptionDto>;
  getSubscriptionPlan: GetSubscriptionPlanOutput;
  getSubscriptions: GetSubscriptionsOutput;
  getTimelinePosts: Array<GetPostDto>;
  getTopCountries: Array<TopCountriesData>;
  getTopPosts: Array<PostsEntity>;
  getTopSubscribers: Array<Subscribers>;
  getTotalChannelCountForCreator: Scalars['Int']['output'];
  getTotalRevenueForFan: Scalars['Float']['output'];
  getUserProfile: UserProfilesDto;
  postAggregate: Scalars['Float']['output'];
  userAggregate: Scalars['Float']['output'];
};


export type QueryAdminAggregateArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlastsAggregateArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCreatorNumbersArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCreatorsAggregateArgs = {
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryDeleteOnePostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryDeleteUserArgs = {
  deleteUser: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};


export type QueryGetAllAdminsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllApplicantsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllBlastsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCreatorsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['JSON']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryGetAllPostsArgs = {
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  isPinned?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetAllUsersArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAudienceInsightsArgs = {
  timeFrame: Scalars['String']['input'];
};


export type QueryGetChannelByIdArgs = {
  channelId: Scalars['String']['input'];
};


export type QueryGetChannelMessagesArgs = {
  channelId: Scalars['String']['input'];
  direction?: InputMaybe<Scalars['String']['input']>;
  messageId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetChannelsArgs = {
  limit?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<GetChannelsOrderBy>;
  unreadsOnly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetCommentLikesArgs = {
  commentId: Scalars['String']['input'];
};


export type QueryGetCommentsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  postId: Scalars['String']['input'];
};


export type QueryGetCommentsAggregateArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetCreatorAssetsArgs = {
  fileType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCreatorAssetsV2Args = {
  input: GetCreatorAssetsInput;
};


export type QueryGetCreatorFanDetailsArgs = {
  fanId: Scalars['String']['input'];
};


export type QueryGetCreatorFansPurchasedAssetsArgs = {
  fanId: Scalars['String']['input'];
  sourceType: Scalars['String']['input'];
};


export type QueryGetCreatorPostViewCountArgs = {
  postId: Scalars['String']['input'];
  timeFrame: Scalars['String']['input'];
};


export type QueryGetCreatorPostsViewCountArgs = {
  postIds: Array<Scalars['String']['input']>;
  timeFrame: Scalars['String']['input'];
};


export type QueryGetCreatorsArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  underFollowersExperiment?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetEstimatedMessageBlastReachArgs = {
  input: EstimateMessageBlastReachInput;
};


export type QueryGetFanAssetsArgs = {
  fileType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFanNoteArgs = {
  fanId: Scalars['String']['input'];
};


export type QueryGetFanProfileArgs = {
  fanUserId: Scalars['String']['input'];
};


export type QueryGetLikesArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetMessageBlastsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetNotificationsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetOneCreatorArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOnePostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetOneUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOrCreateChannelArgs = {
  recipientId: Scalars['String']['input'];
};


export type QueryGetPayoutLinkArgs = {
  input: GetPayoutLinkInput;
};


export type QueryGetPostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetPostsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPublicPostsArgs = {
  creatorId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPublicProfileArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetSubscriptionArgs = {
  otherUserId: Scalars['String']['input'];
};


export type QueryGetSubscriptionPlanArgs = {
  creatorId: Scalars['String']['input'];
};


export type QueryGetSubscriptionsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetTimelinePostsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetTopCountriesArgs = {
  timeFrame: Scalars['String']['input'];
};


export type QueryGetTotalRevenueForFanArgs = {
  fanId: Scalars['String']['input'];
};


export type QueryPostAggregateArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserAggregateArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type ResendMessageBlastInput = {
  messageBlastId: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  unlockPriceInCents?: InputMaybe<Scalars['Float']['input']>;
};

export type ResendMessageBlastOutput = {
  __typename?: 'ResendMessageBlastOutput';
  messageBlastId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SendMessageAsCreatorInput = {
  assetIds?: InputMaybe<Array<Scalars['String']['input']>>;
  fanId: Scalars['String']['input'];
  isPreviewEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  messageText: Scalars['String']['input'];
  unlockPriceInCents?: InputMaybe<Scalars['Float']['input']>;
};

export type SendMessageAsCreatorOutput = {
  __typename?: 'SendMessageAsCreatorOutput';
  amountInCents?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  senderUserId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type SendMessageAsFanInput = {
  amountInCents?: InputMaybe<Scalars['Int']['input']>;
  creatorId: Scalars['String']['input'];
  messageText: Scalars['String']['input'];
};

export type SendMessageAsFanOutput = {
  __typename?: 'SendMessageAsFanOutput';
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  sendMessageOutput?: Maybe<SendMessageOutput>;
};

export type SendMessageBlastInput = {
  assetIds?: InputMaybe<Array<Scalars['String']['input']>>;
  assetIdsToExcludeFans?: InputMaybe<Array<Scalars['String']['input']>>;
  excludeLists?: InputMaybe<Array<Scalars['String']['input']>>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  includeGroups?: InputMaybe<Scalars['String']['input']>;
  includeLists?: InputMaybe<Array<Scalars['String']['input']>>;
  isPreviewEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  messageText: Scalars['String']['input'];
  scheduledAt?: InputMaybe<Scalars['String']['input']>;
  unlockPriceInCents?: InputMaybe<Scalars['Float']['input']>;
};

export type SendMessageBlastOutput = {
  __typename?: 'SendMessageBlastOutput';
  messageBlastId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SendMessageOutput = {
  __typename?: 'SendMessageOutput';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  senderUserId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type SocialAccountsEntity = {
  __typename?: 'SocialAccountsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type Subscribers = {
  __typename?: 'Subscribers';
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  months: Scalars['Float']['output'];
  totalPaid: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type SubscriptionDto = {
  __typename?: 'SubscriptionDto';
  createdAt: Scalars['DateTime']['output'];
  creatorExclusivePostCount: Scalars['Int']['output'];
  creatorId: Scalars['String']['output'];
  creatorPublicPostCount: Scalars['Int']['output'];
  creatorUserProfile: UserProfilesEntity;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanNote?: Maybe<FanNotesEntity>;
  fanUserProfile: UserProfilesEntity;
  id: Scalars['String']['output'];
  isCreatorUnderFollowersExperiment: Scalars['Boolean']['output'];
  isFanBlocked: Scalars['Boolean']['output'];
  isFanFollower: Scalars['Boolean']['output'];
  months: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  stripeSubscriptionId: Scalars['String']['output'];
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TagsEntity = {
  __typename?: 'TagsEntity';
  creatorId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type TopCountriesData = {
  __typename?: 'TopCountriesData';
  country: Scalars['String']['output'];
  percent: Scalars['Float']['output'];
  visits: Scalars['Float']['output'];
};

export type UnlockMessageDto = {
  __typename?: 'UnlockMessageDto';
  message?: Maybe<MessageDto>;
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
};

export type UnlockMessageInput = {
  amountInCents: Scalars['Float']['input'];
  creatorId: Scalars['String']['input'];
  location?: InputMaybe<LocationDto>;
  messageId: Scalars['String']['input'];
};

export type UnlockPostInput = {
  amountInCents: Scalars['Float']['input'];
  location?: InputMaybe<LocationDto>;
  postId: Scalars['String']['input'];
};

export type UnlockPostOutput = {
  __typename?: 'UnlockPostOutput';
  nextActionUrl?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  post?: Maybe<GetPostDto>;
};

export type UpdateAdminAccess = {
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCreatorAssetInput = {
  name: Scalars['String']['input'];
};

export type UpdateCreatorAssetVaultInput = {
  tagIds: Array<Scalars['String']['input']>;
};

export type UpdateCreatorInput = {
  allowsComments?: InputMaybe<Scalars['Boolean']['input']>;
  allowsMessaging?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  freeMediaTipEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  freeMessageTipEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isWatermarkEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  minimumMediaTip?: InputMaybe<Scalars['Float']['input']>;
  minimumMessageTip?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateCreatorProfileInput = {
  creatorId: Scalars['String']['input'];
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  isRejected?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGreetingMessage = {
  assetIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPreviewEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  text: Scalars['String']['input'];
  unlockPriceInCents?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePostInput = {
  assets?: InputMaybe<Array<Scalars['String']['input']>>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  isExclusive?: InputMaybe<Scalars['Boolean']['input']>;
  isFirstAssetPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isPinned?: InputMaybe<Scalars['Boolean']['input']>;
  isPremium?: InputMaybe<Scalars['Boolean']['input']>;
  nonSubscriberPrice?: InputMaybe<Scalars['Float']['input']>;
  postId: Scalars['String']['input'];
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  subscriberPrice?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSocialAccountInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  tiktok?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserProfileInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserEmailChangeInput = {
  newEmail: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserProfilesDto = {
  __typename?: 'UserProfilesDto';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bannerUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fanToFanList?: Maybe<Array<FanListFansEntity>>;
  firstName: Scalars['String']['output'];
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  unreadChannelsCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UsersEntity>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type UserProfilesEntity = {
  __typename?: 'UserProfilesEntity';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bannerUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fanToFanList?: Maybe<Array<FanListFansEntity>>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UsersEntity>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type UserTimelinePostsEntity = {
  __typename?: 'UserTimelinePostsEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fan: UserProfilesEntity;
  id: Scalars['String']['output'];
  order: Scalars['Float']['output'];
  post: PostsEntity;
  updatedAt: Scalars['DateTime']['output'];
};

export type UsersEntity = {
  __typename?: 'UsersEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userProfile: UserProfilesEntity;
};
