import Box from '@mui/material/Box';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Typography } from '../elements/Typography';
import {
  PlayerBackward,
  PlayerForward,
  PlayerPause,
  PlayerPlay,
  PlayerVolume
} from '../elements/icons';

interface NewAudioPlayerProps {
  url: string;
}

export const AudioPlayer: React.FC<NewAudioPlayerProps> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const PlayerIcon = ({
    icon,
    onClick
  }: {
    icon: React.ReactElement;
    onClick?: () => void;
  }) => {
    return (
      <Box
        data-testid="audio-player-icon-ds"
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
          data-testid="audio-player-slider-ds"
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
              width: ${height + 10}px;
              height: ${height + 10}px;
              border-radius: 50%;
              background: #6FB7A6;
              cursor: pointer;
            }
          `}
        </style>
      </>
    );
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      const handleDurationChange = () => {
        setDuration(audioElement.duration);
      };

      const handleVolumeChange = () => {
        setVolume(audioElement.volume);
      };

      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('durationchange', handleDurationChange);
      audioElement.addEventListener('volumechange', handleVolumeChange);

      // play the audio when it's ready
      playPauseHandler();

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener(
          'durationchange',
          handleDurationChange
        );
        audioElement.removeEventListener('volumechange', handleVolumeChange);
      };
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement && isPlaying) {
      audioElement.play();
    }

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, [isPlaying, url]); // eslint-disable-line react-hooks/exhaustive-deps

  const playPauseHandler = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const forwardHandler = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime += 5;
    }
  };

  const backwardHandler = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime -= 5;
    }
  };

  const sliderChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime = Number(event.target.value);
    }
  };

  const volumeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = Number(event.target.value);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <Box
      data-testid="audio-player-container-ds"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        margin: '0',
        backgroundColor: '#1F1F1F',
        paddingY: '10px',
        paddingX: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}
    >
      <audio ref={audioRef} src={url}></audio>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px'
        }}
      >
        <PlayerIcon
          icon={<PlayerBackward color="#fff" />}
          onClick={backwardHandler}
        />
        <PlayerIcon
          icon={
            isPlaying ? (
              <PlayerPause color="#fff" />
            ) : (
              <PlayerPlay color="#fff" />
            )
          }
          onClick={playPauseHandler}
        />
        <PlayerIcon
          icon={<PlayerForward color="#fff" />}
          onClick={forwardHandler}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '5px',
          flexGrow: 1
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
        <PlayerSlider
          id="timeSlider"
          min={0}
          max={duration}
          value={currentTime}
          onChange={sliderChangeHandler}
          height={3}
        />

        <Typography
          className="interRegular13"
          sx={{
            color: '#fff'
          }}
        >
          <span>{formatTime(duration)}</span>
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '5px'
        }}
      >
        <PlayerIcon icon={<PlayerVolume color="#fff" />} />
        <PlayerSlider
          id="volumeSlider"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={volumeChangeHandler}
          height={3}
        />
      </Box>
    </Box>
  );
};
