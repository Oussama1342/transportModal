
import axios from "axios";

const  API_URL = "http://localhost:8080/"

class AuthentifService {


    login(username, password){
        return axios.post(API_URL + "login", {
            username,
            password
        })
        .then(response=>{
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data.username));
                localStorage.setItem("token", JSON.stringify(response.data.accessToken));
          
            }
          
    
            return response.data
        })
    
    }
    
    logout(){
        localStorage.removeItem("user")
    }

    getBureau(username){
        return axios.get("localhost:8080/getBureau/",  + username)
    }
    
    
     
}
export default new AuthentifService