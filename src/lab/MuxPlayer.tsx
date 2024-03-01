import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { MuxPlayerProps } from '@mux/mux-player-react';
import MuxPlayerImport from '@mux/mux-player-react/lazy';

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  mux-player {
    // --seek-backward-button: none;
    // --seek-forward-button: none;
    // --fullscreen-button: none;
    // --volume-range: none;
    // --time-range: none;
    // --time-display: none;
    // --duration-display: none;
    // --bottom-play-button: none;
    --airplay-button: none;
    --pip-button: none;
    --cast-button: none;
    --playback-rate-button: none;
    --rendition-selectmenu: none;
    height: 100%;
    width: 100%;
  }
`;

export const MuxPlayer = (props: MuxPlayerProps) => {
  return (
    <Wrapper
      data-testid="mux-player-wrapper"
      maxHeight={{ xs: 'unset', md: '80vh' }}
    >
      <MuxPlayerImport {...props} />
    </Wrapper>
  );
};
