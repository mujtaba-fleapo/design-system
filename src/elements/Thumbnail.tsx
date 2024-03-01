import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { SxProps, Theme } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { colors } from '../styles/colors';
import { theme } from '../theme';
import { PlayIcon } from './icons';

interface Props {
  src: string;
  className?: string;
  height?: string | number;
  width?: string | number;
  sx?: SxProps<Theme>;
  alt?: string;
  type?: string;
  onClick?: () => unknown;
  showMask?: boolean;
}

export const Thumbnail = ({
  src,
  className,
  height = '100%',
  width = '100%',
  sx,
  alt,
  type,
  onClick,
  showMask
}: Props) => {
  const [mediaLoadingError, setMediaLoadingError] = useState(false);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const imgRef = useRef<HTMLImageElement>(null);

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
  const handleClick = () => {
    return onClick?.();
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`thumbnail-${
          alt
            ? alt.replace(/\s+/g, '-').toLowerCase()
            : src.slice(src.length - 7, src.length)
        }-ds`}
        height={height ?? '100%'}
        width={width ?? '100%'}
        position={'relative'}
        maxWidth={'100%'}
        maxHeight={'100%'}
      >
        {showMask && (
          <Box
            position={'absolute'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={1}
            bgcolor={colors.maskingWhite}
          />
        )}
        <CardMedia
          data-testid={`thumbnail-card-media-ds`}
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

        {type === 'video' && !mediaLoadingError && (
          <Box
            gap="20px"
            position="absolute"
            width="100%"
            height="100%"
            top={0}
            left={0}
            color={colors.lightgray[600]}
            fontSize={'20px'}
            textAlign={'center'}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100%"
              flexDirection="column"
              gap="20px"
            >
              <PlayIcon onClick={handleClick} />
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};
