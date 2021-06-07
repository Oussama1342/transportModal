
import axios from 'axios';

class ClientService { 

    addClient(client){
        return axios.post("http://localhost:8080/auth/addClient", client)
        }

        allClient(){
            return axios.get("http://localhost:8080/auth/allclient")
        }
           

        getcodeClien(codeclt){
            return axios.get("http://localhost:8080/auth/ficndcode" + "/" +codeclt)
        }


        getallBureau(){
            return axios.get("http://localhost:8080/auth/allbureau")

        }

        g
        updateClient(idclient){

            return  axios.put("localhost:8080/auth/editclient" + "/" + idclient , {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
         )
        }
}
export default new ClientService 