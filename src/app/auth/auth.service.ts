import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { UserData } from "./user-data.model";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

interface AuthSignUpLogin {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
@Injectable()
export class AuthService {

    userData = new EventEmitter<UserData>();

    constructor(private http: HttpClient, private router: Router) {}

    // onStoringLogin() {
    //     const storedLogin: {email: string, password: string, _token: string, _tokenExpiration: Date} = JSON.parse(localStorage.getItem('userStoredData'));
    //     if(!storedLogin) {
    //         return;
    //     }

    //     const loadStoredLogin = new UserData(storedLogin.email, storedLogin.password, storedLogin._token, new Date(storedLogin._tokenExpiration));
    //     if(loadStoredLogin.tokenOfUser) {
    //         this.userData.emit(loadStoredLogin);
    //     }
    // }

    onAuthSignUp(email: string, password: string) {
        return this.http.post<AuthSignUpLogin>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2lVFl5DQFep_9Y3rJ3YXUNjsBEKvBmtI', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap( userSignUpDataResponse => {
            let userSignUpDate = new Date(new Date().getTime() + +userSignUpDataResponse.expiresIn*1000);
            const newUserSignUpData = new UserData(userSignUpDataResponse.email, userSignUpDataResponse.localId, userSignUpDataResponse.idToken, userSignUpDate);
            this.userData.emit(newUserSignUpData); 
            localStorage.setItem('userStoredData', JSON.stringify(newUserSignUpData));           
        })); 
    }

    onAuthLogin(email: string, password: string) {
        return this.http.post<AuthSignUpLogin>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2lVFl5DQFep_9Y3rJ3YXUNjsBEKvBmtI', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(tap( userLoginDataResponse => {
            let userLoginDate = new Date(new Date().getTime() + +userLoginDataResponse.expiresIn*1000);
            const newUserLogInData = new UserData(userLoginDataResponse.email, userLoginDataResponse.localId, userLoginDataResponse.idToken, userLoginDate);
            this.userData.emit(newUserLogInData); 
            localStorage.setItem('userStoredData', JSON.stringify(newUserLogInData)); 
        }));
    }

    onAuthLogOut() {
        this.userData.emit();
        this.router.navigate(['/authentication']);
    }
}