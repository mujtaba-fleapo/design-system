import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Bag } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

export interface DesktopColumnProductItem {
  username: string;
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

export const DesktopColumnProductProps = (props: DesktopColumnProductItem) => {
  const {
    username,
    productImage,
    productName,
    productDescription,
    productPrice
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
        <Typography className="interSemibold14">
          Buy {username} a gift
        </Typography>
        <CardMedia
          data-testid={`product-column-card-media-ds`}
          component="img"
          alt={productName}
          height="290"
          image={productImage}
          sx={{
            width: '290px',
            height: 'auto',
            padding: '7.25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            borderRadius: '4px',
            background: `${colors.lightgray[100]}`,
            marginBottom: '10px'
          }}
        />

        <Typography className="interMedium12">{productName}</Typography>
        <Typography className="interSemibold14">
          {productDescription}
        </Typography>
        <Typography className="interMedium12">${productPrice}</Typography>

        <Box width="290px" marginTop="10px">
          <PillButton
            data-testid={`product-column-pill-button-ds`}
            fullWidth={true}
            text="Buy Now"
            variant="secondary"
            icon={<Bag />}
          />
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export const ProductColumn = (props: {
  products: DesktopColumnProductItem[];
}) => {
  const { products } = props;

  return (
    <ThemeProvider theme={theme}>
      <Grid
        data-testid={`product-column-grid-container-ds`}
        container
        spacing={1}
      >
        {products.map((product, index) => (
          <Grid
            data-testid={`product-column-grid-${index}-ds`}
            item
            key={index}
            sx={{ xs: 20, sm: 100, md: 150, xl: 200 }}
          >
            <DesktopColumnProductProps {...product} />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};
