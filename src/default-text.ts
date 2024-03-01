import defaultValue from './default-dictionary.json';

export interface defaultMessageTextProps {
  noMessagesText?: string;
  noResultsText?: string;
  userProfileText?: string;
  addToListText?: string;
  unblockUserText?: string;
  blockUserText?: string;
  notAcceptingMessagesText?: string;
  youHaveBlockedText?: string;
  selectConversationText?: string;
  previousMessagesAvailableText?: string;
  allMessagesText?: string;
  unreadMessagesText?: string;
  totalTipsText?: string;
  searchPlaceholderText?: string;
  sendText?: string;
  mediaText?: string;
  fanDefaultMessageTitleToCreatorText?: string;
  subscribeFormText?: string;
  writeMessageText?: string;
  subscriberSinceText?: string;
  lifeTimeRevenueText?: string;
  writeSomeNotesText?: string;
  informationVisibilityText?: string;
  todayText?: string;
  yesterdayText?: string;
  agoText?: string;
  mText?: string;
  moText?: string;
  hrText?: string;
  dText?: string;
  wText?: string;
  yText?: string;
  sText?: string;
  onlineNowText?: string;
}

export interface defaultProfileHeaderTextProps {
  forFreeText?: string;
  subscribeText?: string;
  messageText?: string;
  moText?: string;
  fromText?: string;
  lastSeenText?: string;
  onlineNowText?: string;
}

export interface defaultDesktopNotificationTextProps {
  sinceText?: string;
  sendMessageText?: string;
}

export interface defaultDesktopCreatorRowTextProps {
  subscribeText?: string;
  followText?: string;
  followForFreeText?: string;
}

export interface defaultDesktopMessageRowTextProps {
  youBlockedThisUserText?: string;
  youText?: string;
  seenText?: string;
}

export interface defaultDesktopCreatorNavigationTextProps {
  newPostText?: string;
  messageBlastText?: string;
  liveStreamText?: string;
}

export interface defaultDesktopFanNavigationTextProps {
  messageText?: string;
  tipText?: string;
}

export interface defaultMobileActionMenuTextProps {
  liveStreamText?: string;
  messageBlastText?: string;
  newPostText?: string;
}

export interface defaultCreditCardInputTextProps {
  cardHolderNamePlaceholderText?: string;
  cardNumberPlaceholderText?: string;
  cardExpirationDatePlaceholderText?: string;
  cardCvcPlaceholderText?: string;
  billingZipCodePlaceholderText?: string;
}

export interface defaultPaymentMethodCreditCardTextProps {
  cardEndingInText?: string;
  expiresText?: string;
}

export interface defaultAddCommentTextProps {
  replyingText?: string;
  toText?: string;
  writeCommentText?: string;
  postingText?: string;
  postText?: string;
}

export interface defaultCommentStackTextProps {
  showMoreText?: string;
}

export interface defaultCreatorPostTextProps {
  freeForEveryOneText?: string;
  followersPayText?: string;
  followersNotAccessText?: string;
  subscriptionIncludedText?: string;
  subscribersPayText?: string;
}

export interface defaultPostActionsTextProps {
  messageText?: string;
  tipText?: string;
}

export interface defaultPostSliderTextProps {
  subscribeToUnlockText?: string;
  unlockMediaText?: string;
}

export interface defaultSingleCommentTextProps {
  likeText?: string;
  likesText?: string;
  replyText?: string;
}

export interface defaultMobileHeaderTextProps {
  onlineNowText?: string;
  lastSeenText?: string;
}
export interface defaultOnlineChipTextProps {
  onlineText?: string;
}

export interface defaultMessageThreadTextProps extends defaultMessageTextProps {
  unlockedText?: string;
  purchasedAtText?: string;
  messageExpiredText?: string;
  expiredText?: string;
  expiresInText?: string;
}

export const defaultProfileHeaderText: defaultProfileHeaderTextProps = {
  forFreeText: defaultValue.forFreeText,
  subscribeText: defaultValue.upperSubscribeText,
  fromText: defaultValue.fromText,
  moText: defaultValue.moText,
  messageText: defaultValue.messageText,
  lastSeenText: defaultValue.lastSeenText,
  onlineNowText: defaultValue.onlineNowText
};

export const defaultDesktopNotificationText: defaultDesktopNotificationTextProps =
  {
    sinceText: defaultValue.sinceText,
    sendMessageText: defaultValue.sendMessageText
  };

export const defaultCreatorRowText: defaultDesktopCreatorRowTextProps = {
  subscribeText: defaultValue.subscribeText,
  followText: defaultValue.followText,
  followForFreeText: defaultValue.followForFreeText
};

export const defaultMessageRowText: defaultDesktopMessageRowTextProps = {
  youBlockedThisUserText: defaultValue.youBlockedThisUserText,
  youText: defaultValue.youText,
  seenText: defaultValue.seenText
};

export const defaultDesktopCreatorNavigationText: defaultDesktopCreatorNavigationTextProps =
  {
    liveStreamText: defaultValue.liveStreamText,
    messageBlastText: defaultValue.messageBlastText,
    newPostText: defaultValue.newPostText
  };

export const defaultDesktopFanNavigationText: defaultDesktopFanNavigationTextProps =
  {
    messageText: defaultValue.messageText,
    tipText: defaultValue.tipText
  };

export const defaultMobileActionMenuText: defaultMobileActionMenuTextProps = {
  liveStreamText: defaultValue.liveStreamText,
  messageBlastText: defaultValue.messageBlastText,
  newPostText: defaultValue.newPostText
};

export const defaultCreditCardInputText: defaultCreditCardInputTextProps = {
  cardHolderNamePlaceholderText: defaultValue.cardHolderNamePlaceholderText,
  cardNumberPlaceholderText: defaultValue.cardNumberPlaceholderText,
  cardExpirationDatePlaceholderText:
    defaultValue.cardExpirationDatePlaceholderText,
  cardCvcPlaceholderText: defaultValue.cardCvcPlaceholderText,
  billingZipCodePlaceholderText: defaultValue.billingZipCodePlaceholderText
};

export const defaultPaymentMethodCreditCardText: defaultPaymentMethodCreditCardTextProps =
  {
    cardEndingInText: defaultValue.cardEndingInText,
    expiresText: defaultValue.expiresText
  };

export const defaultAddCommentText: defaultAddCommentTextProps = {
  replyingText: defaultValue.replyingText,
  writeCommentText: defaultValue.writeCommentText,
  postingText: defaultValue.postingText,
  postText: defaultValue.postText
};

export const defaultCommentStackText: defaultCommentStackTextProps = {
  showMoreText: defaultValue.showMoreText
};

export const defaultCreatorPostText: defaultCreatorPostTextProps = {
  freeForEveryOneText: defaultValue.freeForEveryOneText,
  followersPayText: defaultValue.followersPayText,
  followersNotAccessText: defaultValue.followersNotAccessText,
  subscriptionIncludedText: defaultValue.subscriptionIncludedText,
  subscribersPayText: defaultValue.subscribersPayText
};

export const defaultPostActionsText: defaultPostActionsTextProps = {
  messageText: defaultValue.messageText,
  tipText: defaultValue.tipText
};

export const defaultPostSliderText: defaultPostSliderTextProps = {
  subscribeToUnlockText: defaultValue.subscribeToUnlockText,
  unlockMediaText: defaultValue.unlockMediaText
};

export const defaultSingleCommentText: defaultSingleCommentTextProps = {
  likeText: defaultValue.likeText,
  likesText: defaultValue.likesText,
  replyText: defaultValue.replyText
};

export const defaultMobileHeaderText: defaultMobileHeaderTextProps = {
  onlineNowText: defaultValue.onlineNowText,
  lastSeenText: defaultValue.lastSeenText
};

export const defaultOnlineChipText: defaultOnlineChipTextProps = {
  onlineText: defaultValue.onlineText
};

export const defaultMessageThreadText: defaultMessageThreadTextProps = {
  unlockedText: defaultValue.unlockedText,
  purchasedAtText: defaultValue.purchasedAtText,
  messageExpiredText: defaultValue.messageExpiredText,
  expiredText: defaultValue.expiredText,
  expiresInText: defaultValue.expiresInText,
  mText: defaultValue.mText,
  hrText: defaultValue.hrText,
  dText: defaultValue.dText,
  sText: defaultValue.sText
};
