import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import {getProductsApi} from '../api/products'

function CartasProductos() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(()=>{
    getProductsApi().then(response => {
      setProducts(response.products)
    })
  }, [products])
  
  return (
    <>
    {
      products.map((post) => (
        <Grid
          item
          key={post.title}
          xs={12}
          sm={post.title === 'enterprise' ? 12 : 6}
          md={4}
        >
          <Card>

            <CardHeader
              title={post.title}
              subheader={post.title === 'pro' ? "Most Popular" : null}
              titleTypographyProps={{ align: 'center' }}
              action={post.title === 'pro' ? <StarIcon /> : null}
              subheaderTypographyProps={{
                align: 'center',
              }}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[700],
              }}
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                  mb: 2,
                }}
              >
                <Typography component="h2" variant="h3" color="text.primary">
                  ${post.price}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  /mo
                </Typography>
              </Box>
              <ul>
                {post.description.map((line) => (
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    key={line}
                  >
                    {line}
                  </Typography>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <Button className="btnP" fullWidth href="/CrearC" variant={post.buttonVariant}>
                {post.buttonText}
              </Button>
            </CardActions>
          </Card>
        </Grid>


      ))
    }
    </>
  );
}

export default CartasProductos;