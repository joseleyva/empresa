import './DatosR.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from '../components/Formulario';
import useAuth from '../hooks/useAuth'
import { Redirect } from 'react-router-dom';
function DatosR() {
    const {user} = useAuth();

    if (user.date) {
        return <Redirect to="/Empresas" />;
      }
     
    return (

        <div className="ContenedorDatosR">
                <div className="FormularioI">
                <Formulario/>
                </div>
            </div>


    );

}

export default DatosR;