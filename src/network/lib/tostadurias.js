import axiosClient from "../apiClient"

export async function getAllTostadurias(){
  return await axiosClient.get('/tostadurias')
}

export async function getSingleTostaduria(tost_id){
  return await axiosClient.get('/tostadurias/' + tost_id)
}
