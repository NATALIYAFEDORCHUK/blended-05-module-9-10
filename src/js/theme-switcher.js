import { body } from "./refs";

export function changeTheme(){
    if(body.classList.contains('theme-light')){
        body.classList.replace('theme-light', 'theme-dark')
    }else{
        body.classList.replace('theme-dark', 'theme-light')
    }
}