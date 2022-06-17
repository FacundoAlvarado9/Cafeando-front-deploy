import axiosClient from "../apiClient"

export async function getAllTostadurias(qParams){
  return await axiosClient.get('/tostadurias', { params: qParams })
}

export async function getSingleTostaduria(tost_id){
  return await axiosClient.get('/tostadurias/' + tost_id)
}

export async function getSucursalesFromSingleTostaduria(tost_id){
  return await axiosClient.get('/tostadurias/' + tost_id + '/sucursales')
}
