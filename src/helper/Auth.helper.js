import { store } from "../app/store";
import { setAccessPath, setAccessToken, setUsername } from "../features/authenticate/authSlice";


export function SetAuthUsername(username){
    store.dispatch(setUsername(username));
}

export function fetchAccessToken(token){
    store.dispatch(setAccessToken(token));
}

export function storeAcessPath(path){
    store.dispatch(setAccessPath(path))
}
