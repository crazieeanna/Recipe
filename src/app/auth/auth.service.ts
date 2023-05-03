import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthSignUp {
    kind: string
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    onAuthSignUp(email: string, password: string) {
        this.http.post<AuthSignUp>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2lVFl5DQFep_9Y3rJ3YXUNjsBEKvBmtI', {
            email: email,
            password: password,
            returnSecureToken: true
        }).subscribe(
            signUpResponse => {
                console.log(signUpResponse);
            }, error => {
                console.log(error);
            }
        ); 
    }
}