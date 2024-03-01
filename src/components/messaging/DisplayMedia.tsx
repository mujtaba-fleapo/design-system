import AudioFileOutlined from '@mui/icons-material/AudioFileOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import _ from 'lodash';
import React from 'react';
import { defaultMessageThreadText } from '../../default-text';
import { PostThumbnail } from '../../elements/PostThumbnail';
import { Typography } from '../../elements/Typography';
import {
  MessageAssetDto,
  MessageDto,
  UserProfilesEntity
} from '../../gql/generated/graphql';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import MessageAudioPlayer from './audio/MessageAudioPlayer';
import { currencyFormatter } from './helpers';

interface CreatorSubDataProps {
  subscribed: boolean;
  subCostInCents: number;
  publicProfile: UserProfilesEntity;
  transactionDisabled: boolean;
  showWatermark: boolean;
}

interface Props {
  user: {
    id: string;
    type: 'fan' | 'creator';
    avatarUrl: string;
    showWatermark: boolean;
    watermark: string;
  };
  media: MessageAssetDto[];
  message: MessageDto;
  purchased: boolean;
  paidMedia: boolean;
  messageCost: number;
  tempAudioUrl: string | null;
  setTempAudioUrl: (url: string | null) => void;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  setMediaViewerData: (data: any) => void;
  setInitialSlide: (slide: number) => void;
  setIsImageModalOpen: (open: boolean) => void;
  activeCreatorSubData?: CreatorSubDataProps | null;
  setUnlockModalOpen?: (value: boolean) => void;
  setSelectedMessageToUnlock?: (message: MessageDto) => void;
  msgMediaPurchased?: boolean;
}

const DisplayMedia: React.FC<Props> = ({
  user,
  media,
  message,
  purchased,
  paidMedia,
  messageCost,
  tempAudioUrl,
  currentTime,
  duration,
  isPlaying,
  setTempAudioUrl,
  setUnlockModalOpen,
  setSelectedMessageToUnlock,
  setMediaViewerData,
  setInitialSlide,
  setIsImageModalOpen,
  msgMediaPurchased
}) => {
  const Box = styled(MuiBox)({
    '&.mediaWrapper': {
      overflow: 'hidden',
      borderRadius: '8px',
      maxHeight: '400px'
    },
    '&.messageBody': {
      width: '100%',
      maxWidth: '400px'
    },
    // '&.other-message': {
    //   backgroundImage: 'linear-gradient(90deg, #f1ebfa, #fcf1ee)'
    // },
    '&.messageContent': {
      backgroundColor: colors.lightgray[100],
      wordBreak: 'break-word',
      padding: '12px',
      borderRadius: '8px',
      position: 'relative'
    },
    '&.mymessage': {
      marginBottom: { xs: '16', md: '20px' },
      '& .message-wrapper': {
        justifyContent: 'flex-end',
        '& .messageContent': {
          backgroundColor: colors.lightgray[300]
        },
        '& .messageBody': {
          marginLeft: 'auto'
        }
      }
    },
    '& .autoLink': {
      fontWeight: 'bolder',
      color: 'black',
      textDecoration: 'underline'
    },
    '& .expired': {
      fontWeight: 'light',
      color: 'gray',
      fontStyle: 'italic'
    }
  });

  const assetLength = media.length - 1;
  const length = assetLength > 5 ? 4 : assetLength;
  const isStacked = !(purchased || !paidMedia) || user.type === 'creator';

  const clonedMedia = _.cloneDeep(media ?? []);
  const _media = clonedMedia.reverse();
  const stackedArray = assetLength > 5 ? media.slice(-5) : media;
  const renderArray = isStacked ? stackedArray : _media;

  const getAssetsType = (assets: MessageAssetDto[]) => {
    const assetsMap: any = {};
    assets.forEach((asset) => {
      if (!asset.type) return;
      if (assetsMap[asset.type])
        assetsMap[asset.type] = assetsMap[asset.type] + 1;
      else assetsMap[asset.type] = 1;
    });
    return (
      <Stack direction={'row'} spacing={2} alignItems={'center'}>
        {assetsMap['image'] > 0 && (
          <Box display="flex" alignItems="center" gap={'4px'}>
            <PhotoSizeSelectActualOutlinedIcon fontSize="small" />{' '}
            {assetsMap['image']}
          </Box>
        )}
        {assetsMap['video'] > 0 && (
          <Box display="flex" alignItems="center" gap={1}>
            <VideocamOutlinedIcon fontSize="small" />
            {assetsMap['video']}
          </Box>
        )}
        {assetsMap['audio'] > 0 && (
          <Box display="flex" alignItems="center" gap={1}>
            <AudioFileOutlined fontSize="small" />
            {assetsMap['audio']}
          </Box>
        )}
      </Stack>
    );
  };

  const pauseAllAudio = (url?: string) => {
    const audioElements = document.querySelectorAll('audio');
    console.log({ audioElements });
    audioElements.forEach((audio) => {
      if (url && audio.src === url) return;
      audio.pause();
      audio.currentTime = 0;
    });
  };

  const showPreview = (assets: MessageAssetDto[], index: number) => {
    if (purchased || !paidMedia || user.type === 'creator') {
      setMediaViewerData(
        assets?.map((e) => {
          return {
            id: e.id,
            url: e.originalURL,
            isFree: true,
            resizedUrl: e.resizedURL,
            type: e.type
          };
        }) ?? []
      );
      setInitialSlide(index);
      setIsImageModalOpen(true);
    } else {
      setUnlockModalOpen?.(true);
      setSelectedMessageToUnlock?.(message);
    }
  };

  return (
    <>
      <Box
        data-testid={`display-media-box-handle-asset-ds`}
        position={'relative'}
        dir={getLocaleDirection(defaultLocaleValue)}
      >
        <Box
          position={'relative'}
          mt={isStacked ? `${(length + 1) * 10}px` : 0}
        >
          {renderArray.map((asset, index) => {
            const isUnlockedAudio =
              asset.type === 'audio' &&
              (user.type === 'creator' || purchased || !paidMedia);
            const isThisAudioPlaying = tempAudioUrl === asset.originalURL;

            return (
              <Box
                data-testid={`display-media-wrapper-container-box-ds`}
                key={index}
                className="mediaWrapper"
                onClick={() => {
                  if (isUnlockedAudio) return;
                  pauseAllAudio();
                  showPreview(media, isStacked ? 0 : index);
                }}
                sx={
                  isStacked
                    ? {
                        position: index !== length ? 'absolute' : 'relative',
                        width: `calc(100% - ${(length - index) * 20}px)`,
                        top: `-${(length - index) * 10}px`,
                        left: `${(length - index) * 10}px`
                      }
                    : { marginTop: '4px', width: '100%' }
                }
              >
                {isUnlockedAudio ? (
                  <MessageAudioPlayer
                    id={asset.id}
                    currentTime={isThisAudioPlaying ? currentTime : 0}
                    duration={isThisAudioPlaying ? duration : 0}
                    isPlaying={isThisAudioPlaying ? isPlaying : false}
                    playPauseHandler={() => {
                      setTempAudioUrl(
                        isThisAudioPlaying ? null : asset.originalURL ?? ''
                      );
                    }}
                  />
                ) : (
                  <PostThumbnail
                    watermark={user.showWatermark ? user.watermark : ''}
                    type={asset.type as 'image' | 'video'}
                    sx={{ aspectRatio: '1/1' }}
                    src={
                      asset.type === 'video'
                        ? asset.videoPlaybackId ?? ''
                        : asset.originalURL ?? ''
                    }
                    showButton={paidMedia && !purchased}
                    buttonText={`Unlock for $${messageCost}`}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
      {paidMedia && purchased && user.type === 'fan' ? (
        <Typography
          sx={{ lineHeight: 1, mt: '4px', opacity: 0.5, display: 'none' }}
          className="interSemibold12"
        >
          {defaultMessageThreadText.unlockedText}
        </Typography>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="messageContent"
          mt="4px"
        >
          <Stack className="interRegular14">{getAssetsType(media)}</Stack>

          {msgMediaPurchased && (
            <Typography sx={{ opacity: 0.5 }} className="interRegular12">
              {`${
                defaultMessageThreadText.purchasedAtText
              } ${currencyFormatter.formatDollarAmount(messageCost)}`}
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};

export default DisplayMedia;
