import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'react-bootstrap';
import { Tooltip } from 'primereact/tooltip';
import { Divider } from '@mui/material'
import { Row, Col } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Instagram } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { classNames } from 'primereact/utils';
import { getAvatarApi, getUserApi } from '../../api/user';
import { getAccessTokenApi } from '../../api/auth';
import useAuth from '../../hooks/useAuth';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import '../../App.css';


const datos = [

    {
        id: 1,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 34
    },
    {
        id: 2,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 54
    },
    {
        id: 3,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 65
    },
    {
        id: 4,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 76
    },
    {
        id: 5,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 94
    },
    {
        id: 6,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 0
    },
    {
        id: 7,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 51
    },
    {
        id: 8,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 52
    },
    {
        id: 9,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 64
    },
    {
        id: 10,
        name: "jose leyva",
        prueba: "Socieconomica",
        resultados: 68
    },


];

export default function PruebasFinalizadas() {
    const [products, setProducts] = useState([]);
    const dt = useRef(null);
    const [avatar, setAvatar] = useState(null);
    const { user } = useAuth();
    const token = getAccessTokenApi();
 
    const cols = [
        { field: 'name', header: 'name' },
        { field: 'prueba', header: 'prueba' },
        { field: 'resultados', header: 'resultados' }
    ];

    useEffect(() => {
        getUserApi(token, user.id).then((result) => {
            getAvatarApi(result.avatar).then(response => {
                setAvatar(response);
            })
        });


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, user]);
  
    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));
  
    useEffect(() => {
        setProducts(datos);
    }, [datos]); // eslint-disable-line react-hooks/exhaustive-deps

    console.log(avatar);
    const exportPdf = () => {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.addImage(avatar, 'JPEG', 10, 10, 30, 30);
                doc.setFontSize(14);
                doc.text(45, 20, 'ALEF-GLOBAL Integral Productivity Consulting');
                doc.autoTable(exportColumns, products, {
                    margin: { top: 60 }
                })
                doc.save('products.pdf');
            })
        })
    }

    // eslint-disable-next-line no-lone-blocks
    {/*
        const exportCSV = (selectionOnly) => {
            dt.current.exportCSV({ selectionOnly });
        }
        const exportExcel = () => {
            import('xlsx').then(xlsx => {
                const worksheet = xlsx.utils.json_to_sheet(products);
                const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                saveAsExcelFile(excelBuffer, 'products');
            });
        }
        
        const saveAsExcelFile = (buffer, fileName) => {
            import('file-saver').then(FileSaver => {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });
                FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            });
        }
        
    */}



    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'outofstock': rowData.resultados === 0,
            'lowstock': rowData.resultados > 0 && rowData.resultados < 69,
            'instock': rowData.resultados >= 70
        });

        return (
            <div className={stockClassName}>
                {rowData.resultados}
            </div>
        );
    }


    return (
        <div className='App'>
            <div className='ContenedorEmpresas'>
                <h4>Pruebas Finalizadas</h4>
                <Divider className='mb-2' />
                <div>

                    <div className="card">
                        <Tooltip target=".export-buttons>button" position="bottom" />

                        <DataTable ref={dt} value={products} scrollable scrollHeight="400px" resizableColumns columnResizeMode="expand" showGridlines dataKey="id" responsiveLayout="scroll" breakpoint="600px" >
                            {
                                cols.map((col, index) => <Column key={index} field={col.field} header={col.header} body={col.header === "resultados" ? stockBodyTemplate : null} sortable />)
                            }
                        </DataTable>
                    </div>
                </div>

                <Row className="mb-3">
                    <Col className="d-grid gap-2">
                        <Button className="m-2">Volver al incio</Button>
                    </Col>
                    <Col>
                    </Col>
                    <Col className="d-grid gap-2">
                        <Button className='m-2' variant="danger" onClick={exportPdf}> Descargar en PDF</Button>
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