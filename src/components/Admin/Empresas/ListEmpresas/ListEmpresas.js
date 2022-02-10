import React, { useState, useEffect } from 'react'
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { updateCompanyApi, activateCompanyApi } from '../../../../api/company';
import { getAccessTokenApi } from '../../../../api/auth';
import AddEmpresa from '../AddEmpresa';
import Modal from '../../../Modal';
import DragSortableList from 'react-drag-sortable';
import './EmpresasList.scss';

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
                content: (<CompanyItem item={item} activateCompany={activateCompany} />)
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
        setModalContent(<AddEmpresa/>);
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
    const { item, activateCompany } = props;

    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} onChange={e => activateCompany(item, e)} />,
                <Button type='primary' icon={<EditOutlined />}></Button>,
                <Button type='danger' icon={<DeleteOutlined />}></Button>,
            ]}
        >
            <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
    );
}