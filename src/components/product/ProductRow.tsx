import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  producerName: string;
  productName: string;
  price: number;
}

export const ProductRow = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        data-testid={`product-row-card-ds`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '20px', md: '16px' },
          height: 'auto',
          padding: 0,
          bgcolor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          borderRadius: '0'
        }}
      >
        <Box
          data-testid={`product-row-box-ds`}
          sx={{
            width: { xs: '76px', md: '114px' },
            height: { xs: '76px', md: '114px' },
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <CardMedia
            data-testid={`product-row-card-media-ds`}
            sx={{ borderRadius: '4px' }}
            component="img"
            image="https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg"
            alt="Profile Pic"
          />
        </Box>

        <CardContent
          data-testid={`product-row-card-content-ds`}
          sx={{ color: colors.black }}
        >
          <Typography className="interSemibold16">
            {props.productName}
          </Typography>
          <Typography className="interRegular16" sx={{ marginTop: '2px' }}>
            {'$'}
            {props.price}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
