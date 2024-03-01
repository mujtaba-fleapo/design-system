import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import {
  defaultPostSliderText,
  defaultPostSliderTextProps
} from '../../default-text';
import { PostThumbnail } from '../../elements/PostThumbnail';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
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
}

export const PostSlider: React.FC<PostSliderProps> = ({
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
  showProcessingFee
}) => {
  const Slider = ({ isVisible }: { isVisible: boolean }) => {
    const sliderRef = useRef<SwiperRef>(null);

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

    return (
      <Swiper
        // onRealIndexChange={(swiper) => setActiveItem(swiper.realIndex)}
        data-testid={`post-slider-swiper-ds`}
        dir={getLocaleDirection(locale)}
        id={id}
        navigation={true}
        onTransitionStart={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const direction =
            swiper.activeIndex > swiper.previousIndex ? 'left' : 'right';
          activeSlide.style.transform = `translateX(${
            direction === 'left' ? '-5%' : '5%'
          })`;
          activeSlide.style.transition =
            'transform 0.8s cubic-bezier(0.13, 1.36, 0.38, 0.98)';
          pauseAllVideos(sliderRef.current);
        }}
        onTransitionEnd={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          activeSlide.style.transform = 'translateX(0)';
          autoPlayActiveSlideVideo();
        }}
        pagination={{ dynamicBullets: true }}
        modules={[Navigation, Pagination, Keyboard]}
        initialSlide={initialSlide ?? 0}
        className="post-slider"
        ref={sliderRef}
        slideToClickedSlide={true}
        keyboard={{ enabled: true, onlyInViewport: true }}
      >
        {assets.map((asset, index) => {
          return (
            <SwiperSlide
              virtualIndex={index}
              data-testid={`post-slider-swiper-slide-${index}-ds`}
              key={asset.id}
            >
              <StyledMediaWrapper
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
                      (sliderRef.current as any)!.swiper.update();
                      if (isVisible) await autoPlayActiveSlideVideo();
                    }}
                    preload="metadata"
                  />
                )}
                {asset.type === 'audio' && asset.isFree && (
                  <AudioPlayer url={asset.url} />
                )}
              </StyledMediaWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        data-testid={`post-slider-container-${id}-ds`}
        sx={{ width: '100%', minHeight: '300px' }}
      >
        <OnScreen threshold={0.75}>
          {(isVisible) => <Slider isVisible={isVisible} />}
        </OnScreen>
      </Wrapper>
    </ThemeProvider>
  );
};
