import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Row, Form, Col } from 'react-bootstrap';
import { Divider } from '@mui/material';
import CardsReferencias from '../../components/CardsReferencias';
import { getReqReferenceApi } from '../../api/reqReference'
import { getAccessTokenApi } from '../../api/auth'
import { Button } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth';
import { Switch} from 'antd';


function DarReferencias() {
  const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const [reloadUsers,setReloadUsers ] = useState(false);
  const token = getAccessTokenApi();
  const { user } = useAuth();

  useEffect(() => {
    getReqReferenceApi(token, user.name, false).then(response => {
      setUsersActive(response.reference);
    });
    getReqReferenceApi(token, user.name, true).then(response => {
      setUsersInactive(response.reference);
    });
    setReloadUsers(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token,reloadUsers]);

  return (
    <div className="App">

      <div className="ContenedorEmpresas">
        <h4> Escritorio Virtual</h4>
        <Row className="mb-3 BotonesEm">
          <Form.Group as={Col} md="4">
            <Button variant="outline-primary" href="/Empresas/Referencias">Solicitar referencias</Button>{' '}
          </Form.Group>
          <Form.Group as={Col} md="4">

          </Form.Group>
          <Form.Group as={Col} md="4">
            <Button variant="outline-primary" href="">Dar referencias</Button>{' '}
          </Form.Group>
        </Row>

        <Divider />
        
        
        <div className="list-users">

          <div className="switch">
            <Switch
              defaultChecked
              onChange={() => setViewUsersActives(!viewUsersActives)}
            />
            <span>
              {viewUsersActives ? "Referencias Activas" : "Referencias Enviadas"}
            </span>
          </div>
        </div>
        <Divider/>
        <h4>Referencias</h4>
        <div className="divRefRec">
        {viewUsersActives ? 
        (usersActive ?
           usersActive.map((post) => (
           <CardsReferencias key={post.id} post={post} setReloadUsers={setReloadUsers}/>))
           : 
           null)
          : 
        (usersInactive ? 
        usersInactive.map((post) => (
        <CardsReferencias key={post.id} post={post} setReloadUsers={setReloadUsers}/>))
        : 
        null)}
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