import { getAvatarApi, getUserApi } from "../api/user";
import {getAccessTokenApi} from "../api/auth";
import {useEffect, useState} from 'react';

 function AvatarPer(props){
    const {users, setAvatar } = props;
    const [user, setUser] = useState([]);
    const token = getAccessTokenApi();
    
    useEffect(() => {
        getUserApi(token, users.id).then((result) => {
          setUser(result);
        });
      }, [users,token]);
    useEffect(() => {
        if (user.avatar) {
          getAvatarApi(user.avatar).then((response) => {
            setAvatar(response);
          });
        } else {
          setAvatar(null);
        }
      }, [user, setAvatar]);

      return null;
}

export default AvatarPer;