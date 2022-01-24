import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import {Row, Form, Col} from 'react-bootstrap';
import {Divider} from '@mui/material';
import CardsReferencias from '../../components/CardsReferencias';
import {getUsersActiveApi} from '../../api/user'
import {getAccessTokenApi} from '../../api/auth'
import {Button} from 'react-bootstrap'


function DarReferencias() {
const [users, setUsers] = useState([]);
const token = getAccessTokenApi();

useEffect(()=>{
  getUsersActiveApi(token, true).then(response=>{
      setUsers(response.users);
  });
}, [token]);

    return(
        <div className="App">
         
            <div className="ContenedorEmpresas">
            <h4> Escritorio Virtual</h4>
            <Row className="mb-3 BotonesEm">
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="">Pedir referencias</Button>{' '}
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                      
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button variant="outline-primary" href="">Dar referencias</Button>{' '}
                    </Form.Group>
                </Row>
                
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
              <h4>Referencias recibidas</h4>
              <div className="divRefRec">
              {users.map((post) => (
                  <CardsReferencias key={post.id} post={post} />
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

export default DarReferencias;