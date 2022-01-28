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
import CardsReferenciasMini from '../../components/CardsReferenciasMini';
import CardsRefRecibidas from '../../components/CardsRefRecibidas';
import { getReferenceApi } from '../../api/reference'
import { getUserReferenceApi } from '../../api/userReference';
import { getAccessTokenApi } from '../../api/auth'
import { Button } from 'react-bootstrap'
import { Switch} from 'antd';
import useAuth from '../../hooks/useAuth';

function Referencias() {
  const [reference, setReference] = useState([]);
  const [usersInctiveReference, setUsersInctiveReference] = useState([]);
  const [usersActiveReference, setUsersActiveReference] = useState([]);
  const [reloadReference, setReloadReference] = useState(false);
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const token = getAccessTokenApi();
  const { user } = useAuth();
  useEffect(() => {
    getUserReferenceApi(token, user.name, false).then(response => {
      setUsersInctiveReference(response.reference);
    });

getUserReferenceApi(token, user.name, true).then(response => {
      setUsersActiveReference(response.reference);
    });
    setReloadReference(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, reloadReference])

  useEffect(() => {
    getReferenceApi(token, user.name).then(response => {
      setReference(response.reference);
    });
    setReloadReference(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, reloadReference]);

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
            <Button variant="outline-primary" href="/Empresas/DarReferencias">Dar referencias</Button>{' '}
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
              {viewUsersActives ? "Vacantes sin solicitar" : "Vacantes solicitadas"}
            </span>
          </div>
        </div>
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
        {viewUsersActives ? (
          usersInctiveReference ? usersInctiveReference.map((post) => (
            <CardsReferenciasMini key={post._id} id={post._id} post={post} setReloadReference={setReloadReference}  />
          )) : null) : (usersActiveReference ? usersActiveReference.map((post) => (
            <CardsReferenciasMini key={post._id} id={post._id} post={post} setReloadReference={setReloadReference} />
          )) : null)}
        </div>
        <Divider />
        <h4>Referencias recibidas</h4>
        <div className="divRefRec">
          {reference ? reference.map((post) => (
            <CardsRefRecibidas  key={post._id} id={post._id} post={post} setReloadReference={setReloadReference} />
          )) : null}
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