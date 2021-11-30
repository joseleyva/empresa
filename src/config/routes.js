//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';
//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn/SignIn";

//Pages
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import CrearC from '../pages/CrearC';
import InicioS from '../pages/InicioS';
import Empresas from '../pages/Empresas';
import Vacante from '../pages/Vacante';
import Formulario from '../components/Formulario';
import DatosR from '../pages/DatosR';
import Solicitudes from '../pages/Solicitudes';
import Referencias from '../pages/Referencias';
import FormReferencias from '../components/FormReferencias';
import DatosEmpresa from '../pages/DatosEmpresa';
import Estudios from '../pages/Estudios';
import EstudiosSimple from '../pages/EstudiosSimple';
import VacanteForm from '../components/VacanteForm';
import VacantesActivas from '../pages/VacantesActivas';
import CandidatosPostulados from '../pages/CandidatosPostulados';
//Other pages
import Error404 from '../pages/Error404';

const routes=[
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes:[
            {
                path: "/admin",
                component: AdminHome,
                exact:true
            },
            {
                path: "/admin/login",
                component: AdminSingIn,
                exact:true
            },
            
           
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        exact: false,
        component: LayoutBasic,
         routes:[
             {
                 path:"/",
                 component: Home,
                 exact: true
             }, 
             {
                 path: "/Contacto",
                 component: Contacto,
                 exact: true
             },
             {
                path: "/Productos",
                component: Productos,
                exact: true
            },
            {
                path: "/Acerca",
                component: Acerca,
                exact: true
            },
            {
                path: "/CrearC",
                component: CrearC,
                exact: true
            },
            {
                path: "/InicioS",
                component: InicioS,
                exact: true
            },
            {
                path: "/Empresas",
                component: Empresas,
                exact: true
            },
            {
                path: "/Vacante",
                component: Vacante,
                exact: true
            },
            {
                path: "/Formulario",
                component: Formulario,
                exact: true
            },
            {
                path: "/DatosR",
                component: DatosR,
                exact: true
            },
            {
                path: "/Solicitudes",
                component: Solicitudes,
                exact: true
            },
            {
                path: "/Referencias",
                component: Referencias,
                exact: true
            },
            {
                path: "/FormReferencias",
                component: FormReferencias,
                exact: true
            },
            {
                path: "/DatosEmpresa",
                component: DatosEmpresa,
                exact: true
            },
            {
                path: "/Estudios",
                component: Estudios,
                exact: true
            },
            {
                path: "/EstudiosSimple",
                component: EstudiosSimple,
                exact: true
            },
            {
                path: "/VacanteForm",
                component: VacanteForm,
                exact: true
            },
            {
                path: "/VacantesActivas",
                component: VacantesActivas,
                exact: true
            },
            {
                path: "/CandidatosPostulados",
                component: CandidatosPostulados,
                exact: true
            },
             {
                 component: Error404
             }
         ]
    }
];

export default routes;