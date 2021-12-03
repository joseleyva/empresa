import { useState } from "react";
import * as React from "react";
import { Switch } from "antd";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import NoAvatar from "../../../../assets/img/png/logo512.png";
import Modal from "../../../../components/Modal";
import EditUserForm from "../EditUserForm";

import "./ListUsers.scss";

export default function ListUsers(props) {
  const { usersActive, usersInactive } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActives)}
        />
        <span>
          {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
        </span>
      </div>
      {viewUsersActives ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
      ) : (
        <UsersInactive usersInactive={usersInactive} />
      )}
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function UsersActive(props) {
  const { usersActive, setIsVisibleModal, setModalTitle, setModalContent } = props;
const editUser = user =>{
    setIsVisibleModal(true);
    setModalTitle(`Editar ${user.name} ${user.lastname}`);
    setModalContent(<EditUserForm user={user}/>);
}

  return (
    <List
      className="users-active"
      dense
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {usersActive.map((user) => {
        return (
          <ListItem
            alignItems="flex-start"
            key={user.name}
            secondaryAction={
              <>
                <Button style={{ margin: 5 }} variant="contained" onClick={()=> editUser(user)}>
                  {<EditIcon />}
                </Button>
                <Button
                  style={{ margin: 5 }}
                  variant="contained"
                  color="warning"
                >
                  {<DoNotDisturbAltIcon />}
                </Button>
                <Button style={{ margin: 5 }} variant="contained" color="error">
                  {<DeleteIcon />}
                </Button>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={user.avatar ? user.avatar : NoAvatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary={user.name ? user.name : "..."}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.email ? user.email : "..."}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}

function UsersInactive(props) {
  const { usersInactive } = props;
  return (
    <List
      className="users-active"
      dense
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {usersInactive.map((user) => {
        return (
          <ListItem
            alignItems="flex-start"
            key={user.name}
            secondaryAction={
              <>
                <Button style={{ margin: 5 }} variant="contained">
                  {<CheckIcon />}
                </Button>
                <Button style={{ margin: 5 }} variant="contained" color="error">
                  {<DeleteIcon />}
                </Button>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={user.avatar ? user.avatar : NoAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name ? user.name : "..."}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.email ? user.email : "..."}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
