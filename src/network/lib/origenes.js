import axiosClient from "../apiClient"

export async function getAllOrigenes(qParams){
  return await axiosClient.get('/origenes', {params: qParams})
}

export async function getSingleOrigin(id){
  return await axiosClient.get('/origenes/' + id)
}