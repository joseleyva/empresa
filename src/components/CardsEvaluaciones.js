import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Modal from '../components/Modal';
import InfoEvaluations from './Web/InfoEvaluations';


export default function CardsEvaluaciones(props) {
    const { post, id, setReloadEvaluations } = props;

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [width, setWidth] = useState(500);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");

    const Info = evaluations => {
        setWidth(600);
        setIsVisibleModal(true);
        setModalTitle(`Examen de ${evaluations.nameEvaluation}`);
        setModalContent(<InfoEvaluations evaluations={evaluations} setIsVisibleModal={setIsVisibleModal} setReloadEvaluations={setReloadEvaluations} />);
    }
    return (
        <Card id={id} className="ContenedorEvaluaciones">
            <Card.Header>Evaluación de {post.nameEvaluation}</Card.Header>
            <Card.Body>
                <Card.Title>{post.nameEvaluation}</Card.Title>
                <Card.Text>
                    Cantidad de preguntas: {post.exam.length} <br />
                    Tiempo de duración: {post.time} min.
                </Card.Text>
                <Button variant="primary" onClick={() => Info(post)} >ver</Button>
            </Card.Body>
            <Modal
                width={width}
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </Card>

    );
}
