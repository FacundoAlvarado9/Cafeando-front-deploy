import axiosClient from "../apiClient"

export async function getAllOrigenes(){
  return await axiosClient.get('/origenes')
}