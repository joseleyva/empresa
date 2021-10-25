import React,{useState} from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormReferencias from './FormReferencias';

function CardsReferencias(props)  {
    const { post} = props;
    const [enviado, setEnviado] = useState(false);
    const handleClick = (event) => {
        const Button = event.currentTarget;
        if (Button.checkValidity() === false) {
           
        }
        if(setEnviado===true){
            setEnviado(false)
        }else{
        setEnviado(true);
        }
    };
        return (
            <>

                <Container className="ContenedorRef">
                    <Row>
                        <Col xs={2} md={1}>
                            <Image src={post.Imagen} roundedCircle width="100px" height="100px" />
                        </Col>
                    </Row>
                    <div>
                        <div class="col-md-10">
                            <div class="card-body">
                                <h5 align="left">El Candidato {post.Nombre} ha mencionado haber trabajado con la empresa a la que representas</h5>
                                <div className="DivRef">
                                    <Button variant="primary" onClick={handleClick} className="botonRef" >Mostrar</Button>
                                </div>
                            </div>

                        </div>
                        

                    </div>

                </Container>
                {
                                    (enviado&&(
                                        <div className="VacanteForm">
                                       <FormReferencias/>
                                   </div>
                                    ))
                                }
            </>


        );

    

}
CardsReferencias.propTypes = {
    post: PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      Imagen: PropTypes.string.isRequired,
    }).isRequired,
  };
export default CardsReferencias;