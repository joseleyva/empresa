import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {Button} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import FormSueldo from './Componentes/FormSueldo';
import FormVac from './Componentes/FormVac';
import FormEdu from './Componentes/FormEdu';


const steps = ['Datos de la vacante', 'Datos Educativos', 'Datos del pagó'];

function Vacante() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


  const handleNext = () => {
        let newSkipped = skipped;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    return (
        <>
           <header>
                <Navbar collapseOnSelect expand="lg" className="BarraEm">
                    <Container>
                        <Navbar.Brand >
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
                                <Nav.Link href="/DatosEmpresa">Datos de la Empresa
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Vacante">Publicar vacante</Nav.Link>
                                <Nav.Link href="/Solicitudes">Evaluaciones
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link href="/Referencias">Referencias
                                    <Badge bg="danger">1</Badge>
                                </Nav.Link>
                                <Nav.Link>
                                    Estudios
                                    <Badge bg="danger">1</Badge></Nav.Link>
                            </Nav>
                            <Nav>
                                <Navbar.Brand className="UsuarioImg">
                                    <img
                                        alt=""
                                        src="perfil.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                                <NavDropdown title="Perfil" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Cerrar Sesion</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="VacanteStep">
                
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                            
                        );
                       
                    })}
                </Stepper>

                {activeStep === steps.length ? (
                   
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Formulario terminado
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button href={'./Empresas'} variant="outline-success" className="botonStep">Guardar</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent( activeStep)}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} type="submit" className="botonStep" variant="outline-secondary">
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
            </div>
        </>
    );
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return <FormVac />;
        case 1:
            return <FormEdu />;
        case 2:
            return <FormSueldo />;
        default:
            return 'Unknown step';
    }
}

export default Vacante;