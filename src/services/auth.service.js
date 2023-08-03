import axios from "axios";

  async function login(usernameOrEmail, password) {
    
    await axios.post("http://localhost:8082/api/auth/login", { usernameOrEmail, password })
              .then(response => {
                if (response.status === 200) {
                  console.log(response.data)
                  sessionStorage.setItem("token", JSON.stringify(response.data.token));
                  sessionStorage.setItem("uname", JSON.stringify(response.data.userName));
                  sessionStorage.setItem("role", JSON.stringify(response.data.roleName));
                  let path = window.location.pathname;
                  let redirect = path.includes("seller") ? "/seller-dashboard" : path.includes("admin") ? "/admin" : "/"
                  window.location.href =redirect;
                }
                else if (response.status === 401) {
                  console.log(response);
                }
                
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
  async function register(username, email, password, path, redirect) {
    let roleId = path.includes("seller") ? 2 : path.includes("admin") ? 1 : 3
    let role = path.includes("seller") ? "Seller" : path.includes("admin") ? "Admin" : "Customer"
    const userData ={
      "email":email,
      "userName":username,
      "password":password,
      "roleDto":{
        "roleId": roleId,
        "roleName": role
      }
    }

    return await axios.post("http://localhost:8082/api/auth/signup", userData,{
        headers: {
                  'Content-Type': 'application/json',
                  // Other headers if needed
                },
              })
                .then(response => {
                  //TODO: add logic to display toast message on successful login if the page reloads and msg is not visible then we can add setTimeout to path change till then toast msg will display nad redirect to login page
                  console.log(response)
                  window.location.href=redirect
                })
                .catch(error => {
                  // Handle any errors
                  console.log(error)
                })
            }
      
export {login, register};