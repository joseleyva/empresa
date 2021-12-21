import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from '../components/Formulario';
import useAuth from '../hooks/useAuth'
import { Redirect } from 'react-router-dom';
function DatosR() {
    const {user} = useAuth();
    if (user.active) {
        return <Redirect to="/Empresas" />;
      }
    return (
        <div className="PrincipalC">
                <div className="FormularioI">
                <Formulario/>
                </div>
            </div>


    );

}

export default DatosR;