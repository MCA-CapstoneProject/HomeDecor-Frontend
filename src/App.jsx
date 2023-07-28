import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Authentication from "./Authentication.jsx";


const App = () => {

  return (
    <BrowserRouter>
      {/* <Security {...oktaConfig}> */}
       <Authentication></Authentication>
      {/* </Security> */}
    </BrowserRouter>
  );
};

export default App;
