import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import {  Image, Button } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";
import Link from "@mui/material/Link";
import NoAvatar from "../../assets/img/png/logo512.png";
import { getAccessTokenApi } from "../../api/auth";
import { getUserApi, getAvatarApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import {Col, Row, Descriptions } from "antd";
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
    Calle: users.street,
    Numero: users.houseNumber,
    Colonia: users.suburb,
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
        <Row className="mb-3 mt-1">
          <Col  flex="190px">
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
                className="m-1"
              >
                Editar datos
              </Button>
              <Button variant="primary" className="m-1" href="/Empresas">
                Volver al inicio
              </Button>
            </div>
          </Col>
          <Col  flex="600px">
              <h4 style={{textAlight: "left!important"}}>Datos de la Empresa</h4>
            <Descriptions size="middle" layout="horizontal">
            <Descriptions.Item 
          label="Responsable de la Empresa" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}} 
           span={3}
          >
          {Datos.Nombre ? Datos.Nombre : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Puesto del Responsable"           
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          span={3}
          >
          {Datos.Puesto ? Datos.Puesto : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Razón social" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          span={3}
          >
          {Datos.RazonSocial ? Datos.RazonSocial : " "}
          </Descriptions.Item>
        
          <Descriptions.Item 
          label="RFC" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}  >
          {Datos.RFC ? Datos.RFC : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Giro Empresarial" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}} 
          span={3}
          >
          {Datos.Giro ? Datos.Giro : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Dirección" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          span={3}
          > 
          </Descriptions.Item>
       
          <Descriptions.Item
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}} 
          label="Calle"
          span={2}
          >
          {Datos.Calle}
          </Descriptions.Item>
          <Descriptions.Item
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}} 
          label="Numero"
          >
            {Datos.Numero}
          </Descriptions.Item>
          <Descriptions.Item
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}   
          label="Colonia"
          span={2}
          >
            {Datos.Colonia}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Codigo Postal" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          >
          {Datos.Codigo ? Datos.Codigo : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Estado" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          >
          {Datos.Estado ? Datos.Estado : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Municipio" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          span={2}
          >
          {Datos.Municipio ? Datos.Municipio : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Numero de teléfono" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          span={3}
          >
          {Datos.telefono ? Datos.telefono : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Horario de atención" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px",fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          span={3}
          > 
          {Datos.Horario ? Datos.Horario : " "}
          </Descriptions.Item>
          <Descriptions.Item 
          label="Correo" 
          labelStyle={{border: "none", fontSize: "16px"}} 
          contentStyle={{border: "none",fontSize: "16px", fontFamily:"sans-serif" ,backgroundColor: "transparent"}}
          >
          {Datos.Correo ? Datos.Correo : " "}
          </Descriptions.Item>
        </Descriptions>
          </Col>
        </Row>
     
        <Modal
          title={modalTitle}
          isVisible={isVisibleModal}
          setIsVisible={setIsVisibleModal}
          width={700}
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
