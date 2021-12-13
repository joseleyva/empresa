import { basePath, apiVersion } from './config';

export function createPollApi(token, poll) {
    const url = `${basePath}/${apiVersion}/create-poll`;
    const params = {
        method: "POST",
        body: JSON.stringify(poll),
        headers: {
            "Content-Type": "application/json",
            authorization: token
        }
    };
    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        if (result.poll) {
            return {
                ok: true,
                message: 'Vacante creada correctamente'
            };
        }
        return {
            ok: false,
            message: result.message
        };
    }).catch(err => {
        return {
            ok: false,
            message: err.message
        };
    })
}