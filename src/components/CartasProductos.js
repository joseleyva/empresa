import * as React from 'react';
import {Table} from 'react-bootstrap';
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
  <Table striped bordered style={{borderColor: "black"}}>
  <thead>
    <tr>
      <th></th>
      <th>Gratis</th>
      <th>Basico</th>
      <th>Premium</th>
      <th>Gold</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height: 100}} valign = "middle" >
      <td >Vacantes</td>
      <td>1</td>
      <td>7</td>
      <td>+20</td>
      <td></td>
    </tr>
    <tr style={{height: 100}} valign = "middle" >
      <td >CV</td>
      <td>2</td>
      <td>5</td>
      <td>Ilimitados</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Larry the Bird</td>
      <td></td>
      <td>@twitter</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Larry the Bird</td>
      <td></td>
      <td>@twitter</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Larry the Bird</td>
      <td></td>
      <td>@twitter</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Larry the Bird</td>
      <td></td>
      <td>@twitter</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Larry the Bird</td>
      <td></td>
      <td>@twitter</td>
      <td></td>
    </tr>
  </tbody>
</Table>

    {/*
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
              */}
    </>
  );
}

export default CartasProductos;