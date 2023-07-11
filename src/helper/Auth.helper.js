import { useAuth0 } from "@auth0/auth0-react";
import { store } from "../app/store";
import { setUsername } from "../features/authenticate/authSlice";

const {user} = useAuth0();
export default function AuthHelper(){
    SetAuthUsername
}

function SetAuthUsername(){
    store.dispatch(setUsername(user.name));
}

