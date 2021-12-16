import React from "react";
import {Modal as ModalAntd} from "antd";

export default function Modal(props){
const {children, title, isVisible, setIsVisible, width} = props;
    return(
        <ModalAntd
        title={title}
        centered
        visible={isVisible}
        onCancel={()=>setIsVisible(false)}
        width={width}
        footer={false}
        >
            {children}
        </ModalAntd>
    )
}