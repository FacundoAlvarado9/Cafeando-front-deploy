import axiosClient from "../apiClient"

export async function getAllVariedades(qParams){
  return await axiosClient.get('/variedades/', { params: qParams })
}

export async function getVariedadesFromTostaduria(id, qParams){
  return await axiosClient.get('/tostadurias/' + id + '/variedades', { params: qParams })
}

export async function getVariedadesFromOrigen(id, qParams){
  return await axiosClient.get('/origenes/' + id + '/variedades', { params: qParams })
}
