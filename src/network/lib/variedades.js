import axiosClient from "../apiClient"

export async function getVariedadesFromTostaduria(id, qParams){
  console.log(JSON.stringify(qParams))
  return await axiosClient.get('/tostadurias/' + id + '/variedades', { params: qParams })
}
