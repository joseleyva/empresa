import {basePath, apiVersion} from './config';


export function getCompanyApi(){
    const url = `${basePath}/${apiVersion}/get-company`;

    return fetch(url).then(response=>{
        return response.json();
    }).then(result=>{
        return result;
    }).catch(err=>{
        return err.message;
    })
}

export function updateCompanyApi(token, id, data){
    const url =`${basePath}/${apiVersion}/update-company/${id}`;

    const params={
        method: "PUT",
        headers: {
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


export function activateCompanyApi(token, id, data){
    const url =`${basePath}/${apiVersion}/activate-company/${id}`;

    const params={
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({active: data})
    }

    return fetch(url, params).then(response=>{
        return response.json();
    }).then(result=>{
        return result.message;
    }).catch(err=>{
        console.log(err) 
   })

}
