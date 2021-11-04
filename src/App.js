import './App.css';
import './Productos.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './Componentes/MainFeaturedPost';
import FeaturedPost from './Componentes/FeaturedPost';
import Main from './Componentes/Main';
import Sidebar from './Componentes/Sidebar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'empresas.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'Usuario.jpg',
    imageLabel: 'Image Text',
  },
];

const cards = [
  {
    title: 'Empresa1',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'empresas.jpg',
  },
  {
    title: 'Empresa2',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'Usuario.jpg',
  },
  {
    title: 'Empresa3',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'empresas.jpg',
  },
  {
    title: 'Empresa4',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'Usuario.jpg',
  },
  {
    title: 'Empresa5',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'empresas.jpg',
  },
  {
    title: 'Empresa6',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'Usuario.jpg',
  },
  {
    title: 'Empresa7',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'Usuario.jpg',
  },
  {
    title: 'Empresa8',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'empresas.jpg',
  },
  {
    title: 'Empresa9',
    descripcion: 'Empresa formada en el año de 1987 en el estado de durango ',
    imagen: 'Usuario.jpg',
  },
];


const sidebar = {
  title: 'Acerca de:',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',

};

const theme = createTheme();


function App() {
  return (

    <div className="App">
      <header >
        <Navbar collapseOnSelect expand="lg" className="Barra">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src="logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Nombre de la empresa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Productos">Productos</Nav.Link>
                <Nav.Link href="/Acerca">Acerca de</Nav.Link>
                <Nav.Link href="/Contacto">Contacto</Nav.Link>
              </Nav>
              <div>
                <Button className="boton" variant="danger" href="/CrearC">Crear Cuenta</Button>
                <Button className="boton" href="/InicioS">Iniciar Sesion</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" className="ContApp">


          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Typography className="LabelEmp" variant="h6" gutterBottom>
                  Empresas Destacadas
                </Typography>
                <Divider/>
                
            <Grid container spacing={0} sx={{ mt: 2 }}>
            
              <Grid container  spacing={0} className="ContCartas">
               
               
                {cards.map((post) => (
                  <Main key={post.title} post={post} />
                ))}
              </Grid>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
              />
            </Grid>
          </main>
        </Container>

      </ThemeProvider>

      <footer>
        <div className="Fcontainer">
          <div className="row">
            <div className="Fcol-md-4 footer-col">
              <h4>Dirección</h4>
              <p>

              </p>
            </div>
            <div className="Fcol-md-4 footer-col">
              <h4>Correo</h4>
              <p>

              </p>
            </div>
            <div className="Fcol-md-4 footer-col">
              <h4>Redes Sociales</h4>
              <Link
                display="block"
                variant="body1"
                href="#"
                name="GitHub"
                sx={{ mb: 0.5 }}
              >
                <GitHubIcon name='GitHub'
                />
                <span>GitHub</span>
              </Link>
              <Link
                display="block"
                variant="body1"
                href="#"
                name="Facebook"
                sx={{ mb: 0.5 }}
              >
                <FacebookIcon name='Facebook'
                />
                <span>Facebook</span>
              </Link>
              <p>
                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  name="Twitter"
                  sx={{ mb: 0.5 }}
                >
                  <TwitterIcon name='Twitter'
                  />
                  <span>Twitter</span>
                </Link>

                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  name="Instagram"
                  sx={{ mb: 0.5 }}
                >
                  <Instagram name='Instagram'
                  />
                  <span>Instagram</span>
                </Link>
              </p>
            </div>
            <div className="Fcol-md-4 footer-col">
              <h4>Empresa</h4>
              <p>

              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
