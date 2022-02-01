import React from 'react';
import { Button, Card } from 'react-bootstrap';



export default function CardsEvaluaciones(props) {
    const { post, id } = props;

    return (
            <Card id={id}  className="ContenedorEvaluaciones">
                <Card.Header>Evaluación de {post.nameEvaluation}</Card.Header>
                <Card.Body>
                    <Card.Title>{post.nameEvaluation}</Card.Title>
                    <Card.Text>
                        Cantidad de preguntas: {post.exam.length} <br/>
                        Tiempo de duración: {post.time} min.
                    </Card.Text>
                    <Button variant="primary">ver</Button>
                </Card.Body>
            </Card>
        
    );
}
