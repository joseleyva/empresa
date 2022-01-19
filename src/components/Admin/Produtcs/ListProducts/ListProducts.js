import React, { useState } from 'react'
import Button from "@mui/material/Button";
import {  notification, Modal as ModalAntd } from "antd";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "../../../Modal"
import "./ListProducts.scss"

const { confirm} = ModalAntd;

export default function ListProducts(props) {
    const { products } = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [width, setWidth] = useState(500);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");


    const editProduct = product =>{
        setWidth(500);
         setIsVisibleModal(true);
          setModalTitle(`Editar ${product.title}`);
          setModalContent();
      }
      const showDeleteConfirm=product=>{

        confirm({
          title: "Eliminar usuario",
          content: `¿Estas seguro que quieres eliminar a ${product.title}?`,
          okText: "Eliminar",
          okType: "danger",
          cancelText: "Cancelar",
          onOk(){
           
          }
        })
      }

    return (
        <div className="list-products">

            <div className="list-products__header">
                <Button variant="contained" color="primary">Nuevo Producto </Button>

            </div>
            <List
                className="products-active"
                dense
                sx={{ width: "100%", bgcolor: "background.paper" }}
            >
                {products.map((post) => (
                    <ListItem
                        alignItems="flex-start"
                        key={post.title}
                        secondaryAction={
                            <>
                                <Button style={{ margin: 5 }} variant="contained" onClick={()=> editProduct(post)} >
                                    {<EditIcon />}
                                </Button>
                                <Button style={{ margin: 5 }} variant="contained" color="error" onClick={()=> showDeleteConfirm(post)}>
                                    {<DeleteIcon />}
                                </Button>
                            </>
                        }
                    >
                        <ListItemText

                            primary={post.title ? post.title : "..."}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {post.price ? post.price : "..."}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <div>

                        </div>
                    </ListItem>
                ))}
            </List>
            <Modal
        width={width}
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
        </div >

    );
}
