import Box from '@mui/material/Box';
import { ChangeEvent } from 'react';
import { Typography } from '../../../elements/Typography';
import { PlayerPause, PlayerPlay } from '../../../elements/icons';

const PlayerIcon = ({
  icon,
  onClick
}: {
  icon: React.ReactElement;
  onClick?: () => void;
}) => {
  return (
    <Box
      data-testid="audio-player-icon-ms"
      sx={{
        display: 'inline-flex',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {icon}
    </Box>
  );
};

const PlayerSlider = ({
  id,
  min = 0,
  max = 1,
  step = 1,
  value,
  onChange,
  height
}: {
  id: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  height: number;
}) => {
  return (
    <>
      <input
        data-testid="audio-player-slider-ms"
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          background: `linear-gradient(to right, #6FB7A6 ${
            (value / max) * 100
          }%, #3D3D3D ${(value / max) * 100}%)`,
          border: 'none',
          height: `${height}px`,
          borderRadius: '10px',
          cursor: 'pointer',
          appearance: 'none',
          outline: 'none'
        }}
      />
      <style>
        {`
          #${id}::-webkit-slider-thumb {
            appearance: none;
            border-radius: 50%;
            background: #6FB7A6;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
};

interface MessageAudioPlayerProps {
  id: string;
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  playPauseHandler: () => void;
}

const MessageAudioPlayer: React.FC<MessageAudioPlayerProps> = ({
  id,
  duration,
  currentTime,
  isPlaying,
  playPauseHandler
}) => {
  return (
    <Box
      data-testid="audio-player-ms"
      sx={{
        backgroundColor: '#1F1F1F',
        paddingY: '20px',
        paddingX: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}
    >
      <PlayerIcon
        icon={
          isPlaying ? (
            <PlayerPause size="24px" color="#fff" />
          ) : (
            <PlayerPlay size="24px" color="#fff" />
          )
        }
        onClick={playPauseHandler}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            className="interRegular13"
            sx={{
              color: '#fff'
            }}
          >
            <span>{formatTime(currentTime)}</span>
          </Typography>
          <Typography
            className="interRegular13"
            sx={{
              color: '#fff'
            }}
          >
            <span>{formatTime(duration)}</span>
          </Typography>
        </Box>
        <PlayerSlider
          id={`timeSlider-${id}`}
          min={0}
          max={duration}
          value={currentTime}
          onChange={() => {}}
          height={3}
        />
      </Box>
    </Box>
  );
};

export default MessageAudioPlayer;
