import { rejects } from "assert";
import { resolve } from "dns";

export class AuthService{
    isLoggedIn= false;

    login(){
        this.isLoggedIn=true;
    }
    logout(){
        this.isLoggedIn=false;
    }

    isAuthenticated(){
        // return this.isLoggedIn;
        new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 1000);
        });
    }
}
