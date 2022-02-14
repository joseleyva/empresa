import {basePath, apiVersion} from './config';

export function signUpApi(data){
    const url =`${basePath}/${apiVersion}/sign-up`;
    const params ={
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    };
 return fetch(url, params).then(response => {
  return response.json();
          
       }).then(result =>{
         if(result.user){
            return {
              ok:true,
              message:'Usuario creado correctamente'
            };
          }
         return {
            ok:false,
            message: result.message
         };
       }).catch(err => {
        return {
          ok:false,
          message: err.message
       };
       })
}

export function signInApi(data){
  const url= `${basePath}/${apiVersion}/sign-in`;

  const params={
    method: "POST",
    body: JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  };
  return fetch(url, params)
  .then(response=>{
    return response.json();
  })
  .then(result=>{
    console.log(result);
      return result;
  })
  .catch(err=>{
   return err.message;
  })
}

export function getUsersApi(token){
  const url = `${basePath}/${apiVersion}/users`;

  const params={
    method: "GET",
    headers:{
      "Content-Type": "application/json",
      authorization: token
    }
  };

  return fetch(url, params)
  .then((response) => {
    return response.json()
  })
  .then((result) => {
   return result; 
  })
  .catch((err) => {
    return err.message;
  });

}


export function getUsersActiveApi(token, status){
  const url = `${basePath}/${apiVersion}/users-active?active=${status}`;

  const params={
    method: "GET",
    headers:{
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  return fetch(url, params)
  .then((response) => {
    return response.json()
  })
  .then((result) => {
   return result; 
  })
  .catch((err) => {
    return err.message;
  });

}

export function uploadAvatarApi(token, avatar, userId){
  const url= `${basePath}/${apiVersion}/upload-avatar/${userId}`;
  const formData= new FormData();
  formData.append("avatar", avatar, avatar.name);

  const params ={
    method: "PUT",
    body: formData,
    headers:{
      Authorization: token
    }
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result=>{
    return result;
  }).catch(err=>{
    return err.message;
  });
}

export function uploadCardApi(token, card, userId){
  const url= `${basePath}/${apiVersion}/upload-card/${userId}`;
  const formData= new FormData();
  formData.append('File', card[0], card[0].name);

  const params ={
    method: "PUT",
    body: formData,
    headers:{
      Authorization: token
    }
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result =>{
    if(result.cardName){
       return {
         ok:true,
         message:'Archivo subido correctamente'
       };
     }
    return {
       ok:false,
       message: result.message
    };
  }).catch(err => {
   return {
     ok:false,
     message: err.message
  };
  })
}

export function getCardApi(cardName){
  const url=`${basePath}/${apiVersion}/get-card/${cardName}`;

  const params={
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    }
  }

  return fetch(url, params).then(response=>{
    return response.url;
  }).catch(err=>{
    return err.message;
  })
}

export function getAvatarApi(avatarName){
  const url=`${basePath}/${apiVersion}/get-avatar/${avatarName}`;

  return fetch(url).then(response=>{
    return response.url;
  }).catch(err=>{
    return err.message;
  })
}

export function updateUserApi(token, user, userId){
  const url=`${basePath}/${apiVersion}/update-user/${userId}`;

  const params={
    method:"PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(user)
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result=>{
    return result;
  }).catch(err=>{
    return err.message;
  });
}
export function updateInfoUserApi(token, user, userId){
  const url=`${basePath}/${apiVersion}/update-info-user/${userId}`;

  const params={
    method:"PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(user)
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result=>{
    return result;
  }).catch(err=>{
    return err.message;
  });
}

export function activateUserApi(token, userId, status){
  const url=`${basePath}/${apiVersion}/activate-user/${userId}`;

  const params={
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:token
    },
    body: JSON.stringify({
      active: status
    })
  };
  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result=>{
    return result.message;
  }).catch(err=>{
    return err.message;
  });
}

export function deleteUserApi(token, userId){
  const url =`${basePath}/${apiVersion}/delete-user/${userId}`;

  const params={
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result=>{
    return result.message;
  }).catch(err=>{
    return err.message;
  })
}

export function getUserApi(token, userId){
  const url =`${basePath}/${apiVersion}/user/${userId}`;

  const params={
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).catch(err=>{
    return err.message;
  })
}

export function signUpAdminApi(token, data){
  const url= `${basePath}/${apiVersion}/sign-up-admin`;

  const params={
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).then(result=>{
    return result.message;
  }).catch(err=>{
    return err.message;
  })
}

export function signInAdminApi(data){
  const url= `${basePath}/${apiVersion}/sign-in-admin`;

  const params={
    method: "POST",
    body: JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  };
  return fetch(url, params)
  .then(response=>{
    return response.json();
  })
  .then(result=>{
    console.log(result);
      return result;
  })
  .catch(err=>{
   return err.message;
  })
}

export function googleSignInApi(data){
  const url= `${basePath}/${apiVersion}/google`;
  console.log(data);
  const params={
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch(url, params)
  .then(response=>{
    return response.json();
  })
  .then(result=>{
    if(result.user){
      return {
        result,
        ok:true,
        message:'Usuario creado correctamente'
      }
    }else{
      return{
        ok: false,
        message: result.message
      }
    }
      
  })
  .catch(err=>{
   return err.message;
  })
}