import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";
import Link from "@mui/material/Link";
import {Divider} from "@mui/material";
import InfoAccount from '../../components/InfoAccount';
import Password from '../../components/Password';
import '../../App.css';


export default function Configuracion() {


    return (
        <div >

            <div className='ContenedorEmpresas'>
                <h4 className='App'>Configuracion</h4>
                <Divider/>
                <div className=" mb-2">
                    <TabView className="tabview-custom">
                        <TabPanel header="Usuario" leftIcon="pi pi-user">
                            <InfoAccount/>
                        </TabPanel>
                        <TabPanel header="Contraseña" leftIcon="pi pi-key">
                            <Password/>
                        </TabPanel>
                        <TabPanel header="Header III" leftIcon="pi pi-search" >
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
                <footer className='App'>
                    <div className="Fcontainer">
                        <div className="row">
                            <div className="Fcol-md-4 footer-col">
                                <h4>Dirección</h4>
                                <p></p>
                            </div>
                            <div className="Fcol-md-4 footer-col">
                                <h4>Correo</h4>
                                <p></p>
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
                                    <GitHubIcon name="GitHub" />
                                    <span>GitHub</span>
                                </Link>
                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Facebook"
                                    sx={{ mb: 0.5 }}
                                >
                                    <FacebookIcon name="Facebook" />
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
                                        <TwitterIcon name="Twitter" />
                                        <span>Twitter</span>
                                    </Link>

                                    <Link
                                        display="block"
                                        variant="body1"
                                        href="#"
                                        name="Instagram"
                                        sx={{ mb: 0.5 }}
                                    >
                                        <Instagram name="Instagram" />
                                        <span>Instagram</span>
                                    </Link>
                                </p>
                            </div>
                            <div className="Fcol-md-4 footer-col">
                                <h4>Empresa</h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}
