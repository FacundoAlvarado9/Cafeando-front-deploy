import axiosClient from "../apiClient"

export async function getAllOrigenes(){
  return await axiosClient.get('/origenes')
}

export async function getSingleOrigin(id){
  return await axiosClient.get('/origen/' + id)
}