var HTTPService = require('react-native-http').HTTPService;
import { environment } from '../../environment/environment'

class AuthenService extends HTTPService {
  baseUrl = environment.BaseURL;
  path = '_blank';

  constructor(path) {
    this.path = path;
  }

  get BaseURL() {
    return this.baseUrl + this.path;
  }

  _postWithPathAndCredentials(path, credentials) {
    return new Promise((resolve, reject) => {
      this.post(path, credentials, { skipAuthorization: true })
        .then((response) => {
          this.jwtService.setToken(response.token);
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

  signInWithCredentials(credentials) {
    return this._postWithPathAndCredentials(this.BaseURL, credentials);
  }

  signUpWithCredentials(credentials) {
    return this._postWithPathAndCredentials(this.BaseURL, credentials);
  }
}

export default AuthenService;
