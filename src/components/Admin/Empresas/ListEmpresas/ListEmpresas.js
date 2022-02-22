import React, { useState, useEffect } from 'react'
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Rating from '@mui/material/Rating';
import { updateCompanyApi, activateCompanyApi, deleteCompanyApi } from '../../../../api/company';
import { getAvatarApi } from '../../../../api/user';
import { getAccessTokenApi } from '../../../../api/auth';
import AddEmpresa from '../AddEmpresa';
import Modal from '../../../Modal';
import EditEmpresas from '../EditEmpresas/EditEmpresas';
import DragSortableList from 'react-drag-sortable';
import './EmpresasList.scss';
import NoImagen from '../../../../assets/img/jpg/Usuario.jpg';

const { confirm } = ModalAntd;

export default function ListEmpresas(props) {
    const { companies, setRealoadCompany } = props;
    const [listItems, setListItems] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const ListItemsArray = [];
        companies.forEach((item) => {
            ListItemsArray.push({
                content: (<CompanyItem showDeleteConfirm={showDeleteConfirm} item={item} activateCompany={activateCompany} editCompanyModal={editCompanyModal} />)
            })
        });
        setListItems(ListItemsArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [companies]);

    const activateCompany = (company, status) => {
        const token = getAccessTokenApi();
        activateCompanyApi(token, company._id, status).then(response => {
            notification["success"]({
                message: response,
                placement: "bottomLeft"
            });
        });
    };

    const onSort = (sortedList, dropEvent) => {
        const token = getAccessTokenApi();

        sortedList.forEach((item) => {
            const { _id } = item.content.props.item;
            const order = item.rank;
            updateCompanyApi(token, _id, { order });
        });
    }


    const addCompanyModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Crando nueva empresa");
        setModalContent(<AddEmpresa setIsVisibleModal={setIsVisibleModal} setRealoadCompany={setRealoadCompany} />);
    }


    const editCompanyModal = company => {
        setIsVisibleModal(true);
        setModalTitle(`Editando empresa: ${company.title}`);
        setModalContent(<EditEmpresas setIsVisibleModal={setIsVisibleModal} setRealoadCompany={setRealoadCompany} company={company} />);
    }

    const showDeleteConfirm = company => {
        const token = getAccessTokenApi();
        confirm({
            title: "Eliminar Empresa",
            content: `¿Estas seguro que quieres eliminar a ${company.title}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteCompanyApi(token, company._id).then(response => {
                    notification["success"]({
                        message: response,
                        placement: "bottomLeft",
                    });
                    setRealoadCompany(true);
                }).catch(err => {
                    notification["err"]({
                        message: err,
                        placement: "bottomLeft",
                    })
                })
            }
        })
    }
    return (
        <div className='empresas-list'>
            <div className='empresas-list__header'>
                <Button type='primary' onClick={() => addCompanyModal()}>Empresas</Button>
            </div>
            <div className='empresas-list__items'>
                <DragSortableList items={listItems} onSort={onSort} type="vertical" />
            </div>

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width={600}
            >
                {modalContent}
            </Modal>
        </div>

    )
}

function CompanyItem(props) {
    const { item, activateCompany, editCompanyModal, showDeleteConfirm } = props;
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (item.avatar) {
            getAvatarApi(item.avatar).then(response => {
                setAvatar(response);
            })
        } else {
            setAvatar(null);
        }
    }, [item]);

    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} onChange={e => activateCompany(item, e)} />,
                <Button type='primary' icon={<EditOutlined />} onClick={() => editCompanyModal(item)}></Button>,
                <Button type='danger' icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(item)}></Button>,
            ]}
        >
            <img
                src={avatar ? avatar : NoImagen}
                alt={item.title}
                style={{ width: "100px", marginRight: "20px" }}
            />
            <List.Item.Meta
                title={item.title}
                description={[item.description,<br/> ,<Rating name="half-rating-read" defaultValue={item.rate} precision={0.1} readOnly />]}
            />
        </List.Item>
    );
}