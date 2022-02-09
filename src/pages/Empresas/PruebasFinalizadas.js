import * as React from 'react';
import { Divider } from '@mui/material'
import { Row, Col, Button } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import '../../App.css';


function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}


const rows: GridRowsProp = [

    {
        id: 1,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 2,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 3,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 4,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 5,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 6,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 7,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 8,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 9,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },
    {
        id: 10,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 90
    },


];
const columns: GridColDef[] = [
    { field: 'name', headerName: 'name', width: 250 },
    { field: 'prueba', headerName: 'prueba', width: 250 },
    { field: 'resultados', headerName: 'resultados', width: 250 },
];

export default function PruebasFinalizadas() {

    return (
        <div className='App'>
            <div className='ContenedorEmpresas'>
                <h4>Pruebas Finalizadas</h4>
                <Divider className='mb-2' />
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}

                        components={{
                            Toolbar: CustomToolbar,
                            toolbar: { printOptions: { disableToolbarButton: true } }
                        }}
                    />

                </div>
                <Row className="mb-3">
                    <Col className="d-grid gap-2">
                        <Button className="m-2">Volver al incio</Button>
                    </Col>
                    <Col>
                    </Col>
                    <Col className="d-grid gap-2">
                    </Col>
                </Row>
            </div>
            <footer>
                <div className="Fcontainer">
                    <div className="row">
                        <div className="Fcol-md-4 footer-col">
                            <h4>Dirección</h4>
                            <p>

                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Correo</h4>
                            <p>

                            </p>
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
                                <GitHubIcon name='GitHub'
                                />
                                <span>GitHub</span>
                            </Link>
                            <Link
                                display="block"
                                variant="body1"
                                href="#"
                                name="Facebook"
                                sx={{ mb: 0.5 }}
                            >
                                <FacebookIcon name='Facebook'
                                />
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
                                    <TwitterIcon name='Twitter'
                                    />
                                    <span>Twitter</span>
                                </Link>

                                <Link
                                    display="block"
                                    variant="body1"
                                    href="#"
                                    name="Instagram"
                                    sx={{ mb: 0.5 }}
                                >
                                    <Instagram name='Instagram'
                                    />
                                    <span>Instagram</span>
                                </Link>
                            </p>
                        </div>
                        <div className="Fcol-md-4 footer-col">
                            <h4>Empresa</h4>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}