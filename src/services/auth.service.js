import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";

class AuthService {
  async login(username, password) {
    const response = await axios
          .post(API_URL + "signin", { username, password });
      if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  async register(email, password) {
    const userData ={
        email: email,
        password:password
    }
    return await axios.post(API_URL + "signup", userData,{
        headers: {
                  'Content-Type': 'application/json',
                  // Other headers if needed
                },
              })
                .then(response => {
                  console.log(response)
                })
                .catch(error => {
                  // Handle any errors
                  console.log(error)
                })
            }
        }        
export default new AuthService();