import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Componentes/Formulario';
import { Figure } from 'react-bootstrap';
function CrearC() {
    return (
        <div className="PrincipalC">
            <div className="ContenedorC">

                <Figure className="ImagenC">
                    <Figure.Image
                        src="imagen1.jpg"
                        className="ImgC"

                    />
                </Figure>
                
                <div className="FormularioI">
                <Formulario/>
                </div>
            </div>
        </div>


    );

}

export default CrearC;