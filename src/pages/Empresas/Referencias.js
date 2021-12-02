import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import {Row, Form, Col} from 'react-bootstrap';
import {Divider} from '@mui/material';
import CardsReferenciasMini from '../../components/CardsReferenciasMini';
import CardsRefRecibidas from '../../components/CardsRefRecibidas';

const cards = [
  {
    Nombre: 'Juan Lopez',
    Area: 'Contador',
    Experiencia:'2 Años',
    id:1,
   
  },
  {
    Nombre: 'Pedro Paramo',
    Area: 'Desarrollador de Software',
    Experiencia:'6 meses',
    id:2,
  }
];

const cardsRec = [
  {
    Nombre: 'Juan Lopez',
    Imagen: 'Usuario.jpg',
    id:1,
   
  },
  {
    Nombre: 'Pedro Paramo',
    Imagen:'Usuario.jpg',
    id:2,
  }
];
    function Referencias() {
    return(
        <div className="App">
         
            <div className="ContenedorEmpresas">
            <h4> Escritorio Virtual</h4>
            <Divider/>
                <Row className="MargenL" >
                <Form.Group as={Col} md="4">
                        <h6>Candidato activo </h6>
                
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Area de especialidad</h6>
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <h6>Años de experiancia</h6>
                </Form.Group>
                </Row>
                <div className="MarginB">
                {cards.map((post) => (
                  <CardsReferenciasMini key={post.id} post={post} />
                ))}
                </div>
              <Divider/>
              <h4>Referencias recibidas</h4>
              <div className="DivRefRec">
              {cardsRec.map((post) => (
                  <CardsRefRecibidas key={post.id} post={post} />
                ))}
              </div>
            </div>

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

export default Referencias;