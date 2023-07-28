import { store } from "../app/store";
import { setAccessToken, setUsername } from "../features/authenticate/authSlice";


export function SetAuthUsername(username){
    store.dispatch(setUsername(username));
}

export function fetchAccessToken(token){
    store.dispatch(setAccessToken(token));
}
