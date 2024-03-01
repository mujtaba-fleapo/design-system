import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import {
  defaultCreatorPostText,
  defaultCreatorPostTextProps
} from '../../default-text';
import { Lock } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { PostActions } from './PostActions';
import { PostBody } from './PostBody';
import { PostCaption } from './PostCaption';
import { PostTop } from './PostTop';
import { PostSlider2 } from './PostSlider2';
import { MutableRefObject } from 'react';

export interface CreatorPost2Props {
  id: string;
  watermark?: string;
  avatarImage: string;
  username: string;
  caption: string;
  likeCount: number;
  commentCount: number;
  isExclusive?: boolean;
  isSubscribed?: boolean;
  isPinned?: boolean;
  onLikeClick?: () => unknown;
  onCommentClick?: () => unknown;
  onOptionsClick?: (e: string) => unknown;
  onTipClick?: () => unknown;
  onMessageClick?: () => unknown;
  onPostAvatarClick?: () => unknown;
  onUnlockMedia?: (openSubscriptionModalFirst?: boolean) => unknown;
  isLiked?: boolean;
  lastItemIsAlert?: boolean;
  assets: {
    id: string;
    url: string;
    isFree: boolean;
    resizedUrl: string;
    type: string;
  }[];
  options?: {
    label: string;
    key: string;
    onClick?: () => void;
  }[];
  onSubscribeCreator?: () => unknown;
  inCreatorProfile?: boolean;
  showComments?: boolean;
  transactionDisabled?: boolean;
  isOnline?: boolean;
  unlockPrice?: number;
  isCreator?: boolean;
  unlockRevenue?: string;
  subscriptionPrice?: number;
  locale?: string;
  nonSubscriberUnlockPrice?: number;
  subscriberUnlockPrice?: number;
  text?: defaultCreatorPostTextProps;
  showProcessingFee?: boolean;
  setPostActiveSlide?: (id: string, index: number) => void;
  postActiveSlideMap?: MutableRefObject<Record<string, number>>;
}

const Footer = styled(Box)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  background: ${colors.lightgray[200]};
  height: 28px;
  gap: 0.5rem;
`;

export const CreatorPost2 = ({
  id,
  avatarImage,
  watermark,
  username,
  caption,
  likeCount,
  commentCount,
  onCommentClick,
  onLikeClick,
  onOptionsClick,
  onTipClick,
  onMessageClick,
  onPostAvatarClick,
  assets,
  isLiked,
  isPinned,
  options,
  onUnlockMedia,
  lastItemIsAlert,
  isExclusive,
  onSubscribeCreator,
  isSubscribed,
  inCreatorProfile,
  showComments,
  transactionDisabled,
  isOnline,
  unlockPrice,
  subscriptionPrice,
  locale = defaultLocaleValue,
  isCreator,
  nonSubscriberUnlockPrice,
  subscriberUnlockPrice,
  text = defaultCreatorPostText,
  unlockRevenue,
  showProcessingFee,
  setPostActiveSlide,
  postActiveSlideMap
}: CreatorPost2Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`creator-post-container-${id}-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}
      >
        <PostTop
          data-testid={`creator-post-top-ds`}
          posterName={username}
          avatarSrc={avatarImage}
          isOnline={isOnline}
          onOptionsClick={(e) => onOptionsClick?.(e)}
          options={options}
          onAvatarClick={onPostAvatarClick}
          lastItemIsAlert={lastItemIsAlert}
          isPinned={!!isPinned}
          inCreatorProfile={!!inCreatorProfile}
          locale={locale}
        />
        <Box width="100%" display="flex" flexDirection="column">
          {assets.length === 0 ? (
            <PostBody
              data-testid={`creator-post-body-ds`}
              body={caption}
              locale={locale}
            />
          ) : (
            <PostCaption
              data-testid={`creator-post-caption-ds`}
              caption={caption}
              locale={locale}
            />
          )}
          {assets.length ? (
            <PostSlider2
              data-testid={`creator-post-slider-ds`}
              id={id}
              watermark={watermark}
              assets={assets}
              onUnlockMedia={onUnlockMedia}
              isExclusive={isExclusive}
              onSubscribeCreator={onSubscribeCreator}
              transactionDisabled={transactionDisabled}
              unlockPrice={unlockPrice ?? 0}
              subscriptionPrice={subscriptionPrice ?? 0}
              showProcessingFee={showProcessingFee}
              setPostActiveSlide={setPostActiveSlide}
              postActiveSlideMap={postActiveSlideMap}
            />
          ) : (
            <></>
          )}
          {isCreator && (
            <Footer
              data-testid={`post-info-footer`}
              className="interSemibold10"
            >
              {!isExclusive &&
              nonSubscriberUnlockPrice === 0 &&
              subscriberUnlockPrice === 0 ? (
                <>
                  <Lock />
                  {text.freeForEveryOneText}
                </>
              ) : (
                <>
                  <Lock />

                  {subscriberUnlockPrice === 0
                    ? text.subscriptionIncludedText
                    : `${text.subscribersPayText} $${subscriberUnlockPrice}`}

                  <Divider
                    orientation="vertical"
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.50)',
                      m: '0px 5px',
                      width: '1px',
                      height: '8px'
                    }}
                  />
                  {!isExclusive && nonSubscriberUnlockPrice ? (
                    <>
                      {text.followersPayText} ${nonSubscriberUnlockPrice}
                    </>
                  ) : (
                    <>{text.followersNotAccessText}</>
                  )}
                </>
              )}
            </Footer>
          )}
        </Box>

        {isSubscribed && (
          <PostActions
            data-testid={`creator-post-actions-ds`}
            locale={locale}
            isLiked={isLiked}
            numLikes={likeCount}
            numComments={commentCount}
            onCommentClick={onCommentClick}
            onLikeClick={onLikeClick}
            onTipClick={onTipClick}
            onMessageClick={onMessageClick}
            showComments={showComments}
            transactionDisabled={transactionDisabled}
            unlockRevenue={unlockRevenue}
            isCreator={isCreator}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};
