import axios from "axios";
// import axiosInstance from "../components/axiosInstance";

// const API_URL = "http://localhost:8082/";

class AuthService {

  async login(usernameOrEmail, password) {

    await axios.post("http://localhost:8082/api/auth/login", { usernameOrEmail, password })
              .then(response => {
                
                console.log(response);
                if (response.status === 200) {
                  localStorage.setItem("token", JSON.stringify(response.data));
                  
                  console.log(response);
                  console.log(response.data);
                  
                  // window.location.href="/";
          
                  return response;
          
                }
                else if (response.status === 401) {
                  console.log(response);
                }
                
                return response.data;
            })
              .catch(error => {
                // Handle any errors
                console.log(error);
              })
          }
    
  // logout() {
  //   localStorage.removeItem("user");
  // }

  //register
  async register(username, email, password) {
    const userData ={

      "email":email,
      "userName":username,
      "password":password
    }

    return await axios.post("http://localhost:8082/api/auth/signup", userData,{
        headers: {
                  'Content-Type': 'application/json',
                  // Other headers if needed
                },
              })
                .then(response => {
                  console.log(response)
                  window.location.href="/login"
                })
                .catch(error => {
                  // Handle any errors
                  console.log(error)
                })
            }
        }        
export default new AuthService();