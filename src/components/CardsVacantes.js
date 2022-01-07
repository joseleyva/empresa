import React from "react";
import { Container } from 'react-bootstrap';
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Button from "@mui/material/Button";
import { getAccessTokenApi } from "../api/auth";
import {deleteVacanciesApi, activateVacancieApi} from '../api/vacancies';
import {notification, Modal as ModalAntd}from 'antd';
const { confirm} = ModalAntd;


function CardsVacantes(props) {
    const { post, setReloadUsers } = props;
    const showDeleteConfirm=()=>{
        const AccessToken= getAccessTokenApi();
       
        confirm({
          title: "Eliminar Vacante",
          content: `¿Estas seguro que quieres eliminar a ${post.nameP}?`,
          okText: "Eliminar",
          okType: "danger",
          cancelText: "Cancelar",
          onOk(){
            deleteVacanciesApi(AccessToken, post._id).then(response=>{
              notification["success"]({
                message: response
              });
              setReloadUsers(true);
            }).catch(err=>{
              notification["error"]({
                message: err
              })
            })
          }
        })
      }

      const desactivateUser= ()=>{
        const accessToken= getAccessTokenApi();
        activateVacancieApi(accessToken, post._id, false).then(response=>{
          notification["success"]({
            message: response,
            placement: 'bottomLeft',
          });
          setReloadUsers(true);
        }).catch(err=>{
          notification["error"]({
            message: err,
            placement: 'bottomLeft',
          });
        });
      }
      const activateVacancie= ()=>{
        const accessToken= getAccessTokenApi();
        activateVacancieApi(accessToken, post._id, true).then(response=>{
          notification["success"]({
            message: response,
            placement: 'bottomLeft',
          });
          setReloadUsers(true);
        }).catch(err=>{
          notification["error"]({
            message: err,
            placement: 'bottomLeft',
          });
        });
      }
    return (
        <>

            <Container className="ContenedorVacante" >
                <div className="C">
                    <div class="col-md-10">
                        <div class="card-body">
                            <h6 align="left" class="card-title">Nombre: {post.nameP} </h6>
                            <h6 align="left" class="card-title">Lugar: {post.place}</h6>
                            <h6 align="left" class="card-title">Experiencia: {post.levelExpe}</h6>
                            <h6 align="left" class="card-title">Examenes:</h6>
                            {post.active ? (
                               <div className="buttonCards">
                                <Button style={{ margin: 5 }} variant="contained"
                                
                                >
                                {<EditIcon />}
                            </Button>
                            <Button
                                style={{ margin: 5 }}
                                variant="contained"
                                color="warning"
                                onClick={desactivateUser}
                            >
                                {<DoNotDisturbAltIcon />}
                            </Button>
                            <Button style={{ margin: 5 }} variant="contained" color="error" onClick={e=> showDeleteConfirm(post)}>
                                {<DeleteIcon />}
                            </Button>
                            </div>
                           ) : ( 
                           <div className="buttonCards">
                            <Button style={{ margin: 5 }} variant="contained" onClick={activateVacancie}>
                              {<CheckIcon />}
                            </Button>
                            <Button style={{ margin: 5 }} variant="contained" color="error" onClick={e=> showDeleteConfirm(post)} >
                              {<DeleteIcon />}
                            </Button>
                          </div>
                          )}
                           
                        
                        </div>
                       
                    </div>
               
                </div>
              
            </Container>
        </>


    );

}


export default CardsVacantes;