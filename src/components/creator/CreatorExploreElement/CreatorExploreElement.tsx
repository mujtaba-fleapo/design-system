import { ThemeProvider } from '@emotion/react';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../../elements/Avatar';
import { Typography } from '../../../elements/Typography';
import { Image, Lock } from '../../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../../helpers/getLocale';
import { theme } from '../../../theme';

export interface CreatorExploreElementProps {
  firstName: string;
  lastName: string;
  username: string;
  profilePic: string;
  publicPostCount: number;
  privatePostCount: number;
  onClick: (id?: string) => unknown;
  isOnline?: boolean;
  locale?: string;
}

const CreatorExploreElement = ({
  firstName,
  lastName,
  username,
  profilePic,
  publicPostCount,
  privatePostCount,
  onClick,
  isOnline,
  locale = defaultLocaleValue
}: CreatorExploreElementProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`creator-explore-${username}-ds`}
        dir={getLocaleDirection(locale)}
        spacing={0.5}
        alignItems={'center'}
      >
        <Avatar
          src={profilePic || ''}
          size={80}
          onClick={onClick}
          isOnline={isOnline}
          badgeSize={15}
        />
        <Stack
          data-testid={`creator-explore-name-stack-ds`}
          direction="row"
          spacing={0.5}
          alignItems={'center'}
        >
          <Stack
            data-testid={`creator-explore-name-container-ds`}
            direction="row"
            spacing={0.5}
            alignItems={'center'}
          >
            <Typography className="interSemibold12">{firstName}</Typography>
            <Typography className="interSemibold12">{lastName}</Typography>
          </Stack>
          <Avatar
            src="https://app.fanfix.io/static/images/favicon.png"
            alt="home"
            size={12}
          />
        </Stack>
        <Stack
          data-testid={`creator-explore-posts-details-ds`}
          direction="row"
          spacing={1}
          alignItems={'center'}
        >
          <Stack
            data-testid={`creator-explore-posts-details-public-ds`}
            direction="row"
            spacing={0.5}
          >
            <Image />
            <Typography className="interRegular12">
              {publicPostCount}
            </Typography>
          </Stack>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.50)' }}>|</Typography>
          <Stack
            data-testid={`creator-explore-posts-details-private-ds`}
            direction="row"
            spacing={0.5}
          >
            <Lock />
            <Typography className="interRegular12">
              {privatePostCount}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default CreatorExploreElement;