//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';
import LayoutPanel from '../layouts/LayoutPanel';
import LayoutDatos from '../layouts/LayoutDatos';
//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminProducts from "../pages/Admin/Products"
import AdminEmpresas from "../pages/Admin/Empresas"
 
//Pages Panel
import Empresas from '../pages/Empresas/Empresas';
import Vacante from '../pages/Empresas/Vacante';
import Evaluaciones from '../pages/Empresas/Evaluaciones';
import Referencias from '../pages/Empresas/Referencias';
import DatosEmpresa from '../pages/Empresas/DatosEmpresa';
import Estudios from '../pages/Empresas/Estudios';
import EstudiosSimple from '../pages/Empresas/EstudiosSimple';
import VacanteForm from '../components/VacanteForm';
import VacantesActivas from '../pages/Empresas/VacantesActivas';
import CandidatosPostulados from '../pages/Empresas/CandidatosPostulados';
import DarReferencias from '../pages/Empresas/DarReferencias';
import CrearEvaluaciones from '../pages/Empresas/CrearEvaluaciones';
import EvaluacionesDisponibles from '../pages/Empresas/EvaluacionesDisponibles';
import PruebasFinalizadas from '../pages/Empresas/PruebasFinalizadas';

//WebPages
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import CrearC from '../pages/CrearC';
import InicioS from '../pages/InicioS';
import MoreEmpresas from "../pages/MoreEmpresas";

//Other pages
import Error404 from '../pages/Error404';
import DatosR from '../pages/DatosR';

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
                path: "/admin/users",
                component: AdminUsers,
                exact:true
            },
            {
                path:"/admin/products",
                component: AdminProducts,
                exact: true
            },
            {
                path:"/admin/empresas",
                component: AdminEmpresas,
                exact: true
            },
          
           
            {
                component: Error404
            }
        ]
    },{
        path: "/DatosR",
        exact: false,
        component: LayoutDatos,
         routes:[
             
             {
                path: "/DatosR/DatosR",
                component: DatosR,
                exact:true
            },
            {
                component: Error404
            }
         ]
        },
    {
        path: "/Empresas",
        exact: false,
        component: LayoutPanel,
         routes:[
             
             {
                path: "/Empresas",
                component: Empresas,
                exact:true
            },
            {
                path: "/Empresas/Vacante",
                component: Vacante,
                exact: true
            },
            {
                path: "/Empresas/DatosR",
                component: DatosR,
                exact: true
            },
            
            {
                path: "/Empresas/Evaluaciones",
                component: Evaluaciones,
                exact: true
            },
            {
                path: "/Empresas/CrearEvaluaciones",
                component: CrearEvaluaciones,
                exact: true
            },
            {
                path: "/Empresas/EvaluacionesDisponibles",
                component: EvaluacionesDisponibles,
                exact: true
            },
            {
                path: "/Empresas/Referencias",
                component: Referencias,
                exact: true
            },
            {
                path: "/Empresas/DarReferencias",
                component: DarReferencias,
                exact: true
            },
          
            {
                path: "/Empresas/DatosEmpresa",
                component: DatosEmpresa,
                exact: true
            },
            {
                path: "/Empresas/Estudios",
                component: Estudios,
                exact: true
            },
            {
                path: "/Empresas/EstudiosSimple",
                component: EstudiosSimple,
                exact: true
            },
            {
                path: "/Empresas/VacanteForm",
                component: VacanteForm,
                exact: true
            },
            {
                path: "/Empresas/VacantesActivas",
                component: VacantesActivas,
                exact: true
            },
            {
                path: "/Empresas/CandidatosPostulados",
                component: CandidatosPostulados,
                exact: true
            },
            {
                path: "/Empresas/PruebasFinalizadas",
                component: PruebasFinalizadas,
                exact: true
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
            },{
                path: "/MoreEmpresas",
                component: MoreEmpresas,
                exact: true
            },
            {
                component: Error404
            }
         ]
        },
       
        
    
];

export default routes;