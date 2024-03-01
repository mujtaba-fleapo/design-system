import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { SxProps, Theme } from '@mui/material/styles';
import { animated, useSpring } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { useEffect, useRef, useState } from 'react';
import { theme } from '../theme';
import { PillButton } from './PillButton';
import { Typography } from './Typography';
import { BigLock, PlayIcon } from './icons';
import { Union } from './icons/Union';

interface Props {
  alt?: string;
  src: string;
  type?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  sx?: SxProps<Theme>;
  showButton?: boolean;
  showSubscribeButton?: boolean;
  buttonText?: string;
  watermark?: string;
  onClick?: (openSubscriptionModalFirst?: boolean) => unknown;
  isMediaZoomable?: boolean;
  transactionDisabled?: boolean;
  unlockPrice?: number;
  subscriptionPrice?: number;
  isExclusive?: boolean;
  showProcessingFee?: boolean;
}

export const PostThumbnail = ({
  alt = 'fanfix',
  src,
  type,
  height = '100%',
  width = '100%',
  className,
  sx,
  showButton,
  showSubscribeButton,
  buttonText,
  onClick,
  watermark,
  isMediaZoomable,
  transactionDisabled,
  unlockPrice,
  subscriptionPrice,
  isExclusive,
  showProcessingFee
}: Props) => {
  const watermarkBg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='220px' width='220px'><text transform='translate(10, 200) rotate(-45)' fill='rgb(211, 211, 211, 0.2)' font-family='Arial' font-size='18'  letter-spacing='-0.2' font-weight='400'>${watermark}</text></svg>")`;
  const [mediaLoadingError, setMediaLoadingError] = useState(false);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0
  }));

  const imageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const resetTransform = () => {
    api.start({ scale: 1, rotateZ: 0, x: 0, y: 0 });
  };

  useGesture(
    {
      onPinch: ({ origin: [ox, oy], first, offset: [s, a], memo }) => {
        if (first) {
          const { left, top, width, height } =
            imageRef.current!.getBoundingClientRect();
          const tx = ox - (left + width / 2);
          const ty = oy - (top + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        if (s > 1) {
          const x = memo[0] + (1 - s) * memo[2];
          const y = memo[1] + (1 - s) * memo[3];
          const rotate = a !== 0 ? a : style.rotateZ.get();
          api.start({
            scale: s,
            rotateZ: rotate,
            x,
            y
          });
        }

        return memo;
      },
      onPinchEnd: resetTransform // Reset transform when the gesture ends
    },
    {
      target: imageRef,
      pinch: { scaleBounds: { min: 1, max: 4 }, rubberband: true }
    }
  );

  const getZoomableMedia = (card: React.ReactNode): React.ReactNode => {
    if (isMediaZoomable && !showButton) {
      return (
        <animated.div
          ref={imageRef}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: width ?? '100%',
            height: height ?? '100%',
            ...style
          }}
        >
          {card}
        </animated.div>
      );
    }

    return card;
  };

  const handleFileError = async (index: number) => {
    try {
      if (index > 50) return;
      await wait(3000);

      const img = new Image();
      img.src = src;

      img.onload = () => {
        imgRef.current?.setAttribute('src', src);
        setMediaLoadingError(false);
      };

      img.onerror = () => {
        handleFileError(index + 1);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (openSubscriptionModalFirst?: boolean) => {
    if (transactionDisabled) return;
    return onClick?.(openSubscriptionModalFirst);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-thumbnail-${alt
          ? alt.replace(/\s+/g, '-').toLowerCase()
          : src.slice(src.length - 7, src.length)
          }-ds`}
        height={height ?? '100%'}
        width={width ?? '100%'}
        position={'relative'}
        maxWidth={'100%'}
        maxHeight={'100%'}
      >
        {getZoomableMedia(
          <>
            <CardMedia
              data-testid={`post-thumbnail-card-media-ds`}
              src={
                type === 'audio'
                  ? 'https://app.fanfix.io/static/images/audio.png'
                  : src
              }
              title={alt}
              ref={imgRef}
              component="img"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: width ?? '100%',
                height: height ?? '100%',
                ...sx
              }}
              className={className}
              onError={(e) => {
                handleFileError(0);
                setMediaLoadingError(true);
                imgRef.current?.setAttribute(
                  'src',
                  'https://app.fanfix.io/static/images/loader.gif'
                );
              }}
            />
            <Box
              gap="20px"
              position="absolute"
              overflow={'hidden'}
              width="100%"
              height="100%"
              top={0}
              left={0}
              color={'#ccc'}
              fontSize={'20px'}
              textAlign={'center'}
              sx={{
                backgroundImage: watermark && !showButton ? watermarkBg : 'none'
              }}
            >
              {showButton && (
                <Box position="absolute" width="100%" height="100%">
                  <BigLock />
                </Box>
              )}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
                flexDirection="column"
                gap="20px"
              >
                {showButton && <Union />}
                {type === 'video' && !mediaLoadingError && (
                  <PlayIcon onClick={handleClick} />
                )}
                {showButton && (
                  <PillButton
                    data-testid={`post-thumbnail-pill-button-ds`}
                    onClick={() => handleClick()}
                    variant={isExclusive ? 'gradient-unlock' : 'unlock'}
                    text={buttonText}
                    disabled={transactionDisabled}
                    showProcessingFee={showProcessingFee}
                  />
                )}
                {showSubscribeButton && !isExclusive && (
                  <>
                    <Typography
                      className="interSemibold14"
                      sx={{ color: '#fff' }}
                    >
                      -or-
                    </Typography>

                    <PillButton
                      data-testid={`post-thumbnail-pill-button-ds`}
                      onClick={() => handleClick(true)}
                      variant={'gradient-unlock'}
                      text={`Subscribe & Unlock for $${subscriptionPrice}`}
                      disabled={transactionDisabled}
                    />
                  </>
                )}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};
