import axiosClient from "../apiClient"

export async function getAllTipos(qParams){
  return await axiosClient.get('/tipos', {params: qParams})
}