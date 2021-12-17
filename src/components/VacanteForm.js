import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {Button} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import FormSueldo from './FormSueldo';
import FormVac from './FormVac';
import FormEdu from './FormEdu';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';

const steps = ['Datos de la vacante', 'Datos Educativos', 'Datos del pagó'];

function VacanteForm() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [valores, setValores]= React.useState([]);


  const handleNext = () => {
        let newSkipped = skipped;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    function getStepContent(step, funcion) {
        switch (step) {
            case 0:
                return <FormVac setValores={setValores} valores={valores} funcion={handleNext} place={activeStep === steps.length - 1 ? 'Finish' : 'Next'}/>;
            case 1:
                return <FormEdu setValores={setValores} valores={valores} funcion={handleNext} place={activeStep === steps.length - 1 ? 'Finish' : 'Next'}/>;
            case 2:
                return <FormSueldo setValores={setValores} valores={valores} funcion={handleNext} place={activeStep === steps.length - 1 ? 'Finish' : 'Next'}/>;
            default:
                return 'Unknown step';
        }
    }
    return (
        <div>
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
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button href={'./Vacante'} variant="outline-success" className="botonStepG mb-3">Terminar</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
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



export default VacanteForm;