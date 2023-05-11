export class UserData {
    public email: string;
    public userID: string;
    private _token: string;
    private _tokenExpiration: Date;

    constructor(email: string, userID: string, _token: string, _tokenExpiration: Date) {
        this.email = email;
        this.userID = userID;
        this._token = _token;
        this._tokenExpiration = _tokenExpiration;
    }

    get tokenOfUser() {
        if(!this._tokenExpiration || new Date() > this._tokenExpiration) {
            return null;
        } else {
            return this._token;
        }
    }
}