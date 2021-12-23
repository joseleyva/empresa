import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Col, Row, Image, Form, Button } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";
import Link from "@mui/material/Link";
import NoAvatar from "../../assets/img/png/logo512.png";
import { getAccessTokenApi } from "../../api/auth";
import { getUserApi, getAvatarApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";

import EditInfoForm from "../../components/EditInfoForm";
import Modal from "../../components/Modal";
function DatosEmpresas() {
  const token = getAccessTokenApi();
  const [avatar, setAvatar] = useState(null);
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [reloadUsers, setReloadUsers] = useState(false);
  useEffect(() => {
    getUserApi(token, user.id).then((result) => {
      setUsers(result);
    });
    setReloadUsers(false);
  }, [user, reloadUsers, token]);
  useEffect(() => {
    if (users.avatar) {
      getAvatarApi(users.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [users]);
  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(`Editar ${users.name}`);
    setModalContent(
      <EditInfoForm user={users} setReloadUsers={setReloadUsers} setIsVisibleModal={setIsVisibleModal} />
    );
  };

  const Datos = {
    RazonSocial: users.RSocial,
    Direccion: `${users.street}, ${users.houseNumber}, ${users.suburb}`,
    RFC: users.RFC,
    Giro: users.business,
    Nombre: `${users.nameUser} ${users.lastnameP} ${users.lastnameM}`,
    Puesto: users.job,
    Estado: users.estado,
    Municipio: users.municipality,
    Codigo: users.zip,
    telefono: users.numberphone,
    Horario: users.schedule,
    Correo: users.email,
  };
  return (
    <div className="App">
      <div className="DivDatosEmpresa">
        <Row className="mb-3 ImagenDatosEmpresa">
          <Form.Group as={Col} md="3">
            <Image
              src={avatar ? avatar : NoAvatar}
              width="150px"
              height="150px"
              thumbnail 
            />
            <div className="DivBtnDE">
              <Button
                variant="success"
                onClick={() => editUser(users)}
                className="boton"
              >
                Editar datos
              </Button>
              <Button variant="primary" className="boton" href="/Empresas">
                Volver al inicio
              </Button>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="7" className="DatosEmpresas">
            <div className="AlinDatosEmpresas">
              <h5>Datos de la Empresa: </h5>
              <Form.Label>
                Razon Social: {Datos.RazonSocial ? Datos.RazonSocial : " "}
              </Form.Label>
              <Form.Label>
                Dirección: {Datos.Direccion ? Datos.Direccion : " "}
              </Form.Label>
              <Form.Label>RFC: {Datos.RFC ? Datos.RFC : " "}</Form.Label>
              <Form.Label>
                Giro Empresarial: {Datos.Giro ? Datos.Giro : " "}
              </Form.Label>
              <Form.Label>
                Responsable de la Empresa: {Datos.Nombre ? Datos.Nombre : " "}
              </Form.Label>
              <Form.Label>
                Puesto del Responsable: {Datos.Puesto ? Datos.Puesto : " "}
              </Form.Label>
              <Form.Label>
                Estado: {Datos.Estado ? Datos.Estado : " "}
              </Form.Label>
              <Form.Label>
                Municipio: {Datos.Municipio ? Datos.Municipio : " "}
              </Form.Label>
              <Form.Label>
                Codigo Postal: {Datos.Codigo ? Datos.Codigo : " "}
              </Form.Label>
              <Form.Label>
                Télefono: {Datos.telefono ? Datos.telefono : " "}
              </Form.Label>
              <Form.Label>
                Horario de atención: {Datos.Horario ? Datos.Horario : " "}
              </Form.Label>
              <Form.Label>
                Correo: {Datos.Correo ? Datos.Correo : " "}
              </Form.Label>
            </div>
          </Form.Group>
        </Row>
        <Modal
          title={modalTitle}
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
          width={1000}
        >
            
          {modalContent}
        </Modal>
      </div>

      <footer>
        <div className="Fcontainer">
          <div className="row">
            <div className="Fcol-md-4 footer-col">
              <h4>Dirección</h4>
              <p></p>
            </div>
            <div className="Fcol-md-4 footer-col">
              <h4>Correo</h4>
              <p></p>
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
                <GitHubIcon name="GitHub" />
                <span>GitHub</span>
              </Link>
              <Link
                display="block"
                variant="body1"
                href="#"
                name="Facebook"
                sx={{ mb: 0.5 }}
              >
                <FacebookIcon name="Facebook" />
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
                  <TwitterIcon name="Twitter" />
                  <span>Twitter</span>
                </Link>

                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  name="Instagram"
                  sx={{ mb: 0.5 }}
                >
                  <Instagram name="Instagram" />
                  <span>Instagram</span>
                </Link>
              </p>
            </div>
            <div className="Fcol-md-4 footer-col">
              <h4>Empresa</h4>
              <p></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DatosEmpresas;
