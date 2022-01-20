import {basePath, apiVersion} from './config';

export function CreateProductApi(token,data){
    const url =`${basePath}/${apiVersion}/create-product`;
    const params ={
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
            Authorization: token

        }
    };
 return fetch(url, params).then(response => {
  return response.json();
       }).then(result =>{
        if(result.products){
          return {
            ok:true,
            message:'Producto creado correctamente'
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

export function getProductsApi(){
  const url =`${basePath}/${apiVersion}/get-products`;

  const params={
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }

  return fetch(url, params).then(response=>{
    return response.json();
  }).catch(err=>{
    return err.message;
  })
}
export function deleteProductsApi(token, productId){
  const url =`${basePath}/${apiVersion}/delete-products/${productId}`;

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