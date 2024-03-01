import { ThemeProvider } from '@emotion/react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { styled } from '@mui/material/styles';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  defaultPostSliderText,
  defaultPostSliderTextProps
} from '../../default-text';
import { PostThumbnail } from '../../elements/PostThumbnail';
import { defaultLocaleValue } from '../../helpers/getLocale';
import { AudioPlayer } from '../../lab/AudioPlayer';
import { MuxPlayer } from '../../lab/MuxPlayer';
import { theme } from '../../theme';
import { OnScreen } from './OnScreen';

const Wrapper = styled(Box)`
  .post-slider {
    .swiper-slide-active {
      z-index: 2;
    }
    @media (min-width: 992px) {
      border-radius: 4px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
    }
    .swiper-slide {
      height: unset;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 14px;
      color: var(--white);
    }
    .swiper-pagination-bullet-active-main {
      background: var(--white);
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active-next,
      .swiper-pagination-bullet-active-next-next {
        transform: scale(1);
      }
    }
  }
`;

const StyledMediaWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url(${(props: any) => props['data-attr']});
    background-size: cover;
    filter: blur(13px);
    opacity: 0.99;
  }
`;

interface PostSliderProps {
  id: string;
  assets: {
    id: string;
    url: string;
    isFree: boolean;
    resizedUrl: string;
    type: string;
  }[];
  maintainAspectRatio?: boolean;
  watermark?: string;
  onUnlockMedia?: (openSubscriptionModalFirst?: boolean) => unknown;
  isExclusive?: boolean;
  onSubscribeCreator?: () => unknown;
  initialSlide?: number;
  transactionDisabled?: boolean;
  unlockPrice?: number;
  subscriptionPrice?: number;
  text?: defaultPostSliderTextProps;
  locale?: string;
  showProcessingFee?: boolean;
  setPostActiveSlide?: (id: string, index: number) => void;
  postActiveSlideMap?: MutableRefObject<Record<string, number>>;
}

export const PostSlider2: React.FC<PostSliderProps> = ({
  id,
  assets,
  onUnlockMedia,
  isExclusive,
  unlockPrice,
  subscriptionPrice,
  onSubscribeCreator,
  initialSlide,
  watermark,
  maintainAspectRatio = true,
  transactionDisabled,
  text = defaultPostSliderText,
  locale = defaultLocaleValue,
  showProcessingFee,
  setPostActiveSlide,
  postActiveSlideMap
}) => {
  const Slider = ({ isVisible }: { isVisible: boolean }) => {
    const [activeStep, setActiveStep] = useState(
      postActiveSlideMap?.current[id] ?? 0
    );
    const sliderRef = useRef<HTMLDivElement>(null);

    const pauseAllVideos = async (el: any) => {
      el!.querySelectorAll('mux-player')!.forEach((element: any) => {
        const videoRef = element?.shadowRoot
          ?.querySelector('media-theme > mux-video')
          ?.shadowRoot?.querySelector('video');
        if (videoRef) {
          videoRef.pause();
          videoRef.currentTime = 0;
        }
      });
      return true;
    };

    const pauseVideos = async () => {
      await pauseAllVideos(sliderRef.current);
      return true;
    };

    const autoPlayActiveSlideVideo = async () => {
      await pauseAllVideos(document);
      const el: HTMLVideoElement = (sliderRef.current as any)
        ?.querySelector('.swiper-slide-active')
        ?.querySelector('mux-player')
        ?.shadowRoot?.querySelector('media-theme > mux-video')
        ?.shadowRoot?.querySelector('video');
      if (el) await el.play();

      return true;
    };

    useEffect(() => {
      if (!isVisible) pauseVideos();
      else autoPlayActiveSlideVideo();
    }, [isVisible]);

    const handlePostThumbnailClick = (
      isExclusive: boolean | undefined,
      isFree: boolean,
      openSubscriptionModalFirst?: boolean
    ) => {
      if (!isFree && isExclusive) onSubscribeCreator?.();
      else onUnlockMedia?.(openSubscriptionModalFirst);
    };

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };

    useEffect(() => {
      setPostActiveSlide?.(id, activeStep);
    }, [activeStep]);

    return (
      <Box ref={sliderRef}>
        <SwipeableViews
          enableMouseEvents
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          // onTransitionEnd={() => {
          //   autoPlayActiveSlideVideo();
          // }}
        >
          {assets.map((asset, index) => {
            return (
              <StyledMediaWrapper
                data-testid={`post-slider-swiper-slide-${index}-ds`}
                key={asset.id}
                data-attr={maintainAspectRatio && asset.url}
                sx={{
                  aspectRatio: {
                    xs: maintainAspectRatio ? '7/8' : 'unset',
                    md: maintainAspectRatio ? '1/1' : 'unset'
                  }
                }}
              >
                {(asset.type === 'image' || !asset.isFree) && (
                  <>
                    <PostThumbnail
                      data-testid={`post-slider-post-thumbnail-${index}-ds`}
                      src={asset.url}
                      type={asset.type}
                      watermark={watermark}
                      onClick={() =>
                        handlePostThumbnailClick(isExclusive, asset.isFree)
                      }
                      isExclusive={isExclusive}
                      unlockPrice={unlockPrice}
                      subscriptionPrice={subscriptionPrice}
                      showButton={!asset.isFree}
                      buttonText={
                        isExclusive
                          ? text.subscribeToUnlockText
                          : `${text.unlockMediaText} $${unlockPrice}`
                      }
                      sx={{
                        objectFit: 'contain',
                        maxHeight: { xs: '60vh', md: '80vh' }
                      }}
                      transactionDisabled={transactionDisabled}
                      isMediaZoomable={true}
                      showProcessingFee={showProcessingFee}
                    />
                  </>
                )}
                {asset.type === 'video' && asset.isFree && (
                  <MuxPlayer
                    data-testid={`post-slider-mux-player-${index}-ds`}
                    className="mux-player"
                    poster={asset.resizedUrl}
                    placeholder={asset.resizedUrl}
                    playbackId={asset.url}
                    loop
                    onLoadStart={async () => {
                      if (isVisible) await autoPlayActiveSlideVideo();
                    }}
                    preload="metadata"
                  />
                )}
                {asset.type === 'audio' && asset.isFree && (
                  <AudioPlayer url={asset.url} />
                )}
              </StyledMediaWrapper>
            );
          })}
        </SwipeableViews>
        {assets.length > 1 && (
          <>
            <MobileStepper
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                '& .MuiMobileStepper-dot': {
                  backgroundColor: 'black',
                  opacity: 0.2
                },
                '& .MuiMobileStepper-dotActive': {
                  backgroundColor: 'white',
                  opacity: 0.9
                }
              }}
              steps={assets.length}
              position="static"
              activeStep={activeStep}
              nextButton={null}
              backButton={null}
            />
            <Box
              sx={{
                position: 'absolute',
                paddingInline: '10px',
                top: '50%',
                width: '100%',
                transform: "translate('-50%', '-50%')",
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Button
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={stepButtonStyles}
              >
                <KeyboardArrowLeft sx={{ color: 'white' }} />
              </Button>

              <Button
                onClick={handleNext}
                disabled={activeStep === assets.length - 1}
                sx={stepButtonStyles}
              >
                <KeyboardArrowRight sx={{ color: 'white' }} />
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        data-testid={`post-slider-container-${id}-ds`}
        sx={{ width: '100%', minHeight: '300px', position: 'relative' }}
      >
        <OnScreen threshold={0.75}>
          {(isVisible) => <Slider isVisible={isVisible} />}
        </OnScreen>
      </Wrapper>
    </ThemeProvider>
  );
};

const stepButtonStyles = {
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  padding: 0,
  minWidth: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  '&:disabled': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    opacity: 0.35
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
};
