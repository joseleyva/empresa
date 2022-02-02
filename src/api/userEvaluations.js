import { basePath, apiVersion } from './config';

export function CreateUserEvaluationsApi(token, data) {
  const url = `${basePath}/${apiVersion}/create-evaluation`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: token

    }
  };
  return fetch(url, params).then(response => {
    return response.json();
  }).then(result => {
    if (result.evaluations) {
      return {
        ok: true,
        message: 'Evaluación creada correctamente'
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

export function getEvaluationApi(token, nameEm) {
  const url = `${basePath}/${apiVersion}/get-evaluation/${nameEm}`;

  const params = {
    method: "GET",
    headers: {
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


export function deleteEvaluationApi(token, evaluationId) {
  const url = `${basePath}/${apiVersion}/delete-evaluation/${evaluationId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  }

  return fetch(url, params).then(response => {
    return response.json();
  }).then(result => {
    return result.message;
  }).catch(err => {
    return err.message;
  })
}