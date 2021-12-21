import React from "react";
import {  Container } from 'react-bootstrap';
import PropTypes from 'prop-types';


function CardsVacantes(props) {
    const { post} = props;
    
        return (
            <>

                <Container className="ContenedorVacante">
                    <div className="C">
                        <div class="col-md-10">
                            <div class="card-body">
                                <h6 align="left" class="card-title">Nombre: {post.nameP} </h6>
                                <h6 align="left" class="card-title">Lugar: {post.place}</h6>
                                <h6 align="left" class="card-title">Experiencia: {post.levelExpe}</h6>
                                <h6 align="left" class="card-title">Examenes:</h6>
                            </div>

                        </div>

                    </div>

                </Container>
            </>


        );

    }


CardsVacantes.propTypes = {
    post: PropTypes.shape({
      Nombre: PropTypes.string.isRequired,
      id:PropTypes.number.isRequired,
    }).isRequired,
  };
export default CardsVacantes;