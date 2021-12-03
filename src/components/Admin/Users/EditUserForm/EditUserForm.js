import React,{useState, useCallback} from 'react';
import {Avatar, Form, Input, Select, Button, Row, Col} from 'antd';
import {useDropzone} from 'react-dropzone';
import "./EditUserForm.scss";
import NoAvatar from "../../../../assets/img/png/logo512.png"

export default function EditUserForm(props){
   const [avatar, setAvatar]=useState(null);
    return(
        <div className="edit-user-form">
        <UploadAvatar avatar={avatar} setAvatar={setAvatar}/>
        </div>
    )
}


function UploadAvatar(props){
    const {avatar, setAvatar}=props;

    const onDrop= useCallback(
        acceptedFile=>{
            const file = acceptedFile[0];
            setAvatar({file, preview: URL.createObjectURL(file)});
        },
        [setAvatar]
    );

    const {getRootProps, getInputProps, isDragActive}= useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard:true,
        onDrop
    });

    return (
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive? (
                <Avatar size={150} src={NoAvatar}/>
            ):(
                <Avatar size={150} src={avatar ? avatar.preview : NoAvatar}/>
            )}
        </div>
    );
}