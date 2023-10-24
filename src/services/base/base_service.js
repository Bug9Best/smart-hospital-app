var HTTPService = require('react-native-http').HTTPService;
import { environment } from '../../environment/environment'
import axios from "axios";

class BaseURL {
  baseUrl = environment.BaseURL;
  pathUrl = '_blank';

  constructor(path) {
    this.pathUrl = path;
  }

  get BaseURL() {
    return this.baseUrl + this.pathUrl;
  }

}

export default BaseURL;
