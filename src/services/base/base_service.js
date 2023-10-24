var HTTPService = require('react-native-http').HTTPService;
import { environment } from '../../environment/environment'

class BaseService extends HTTPService {
  baseUrl = environment.BaseURL;
  path = '_blank';

  constructor(path) {
    this.path = path;
  }

  get BaseURL() {
    return this.baseUrl + this.path;
  }

  get(_options) {
    return this.get(this.BaseURL);
  }

  show(id) {
    return this.get(this.BaseURL + '/' + id.toString());
  }

  create(data) {
    return this.post(this.BaseURL, data);
  }

  update(data) {
    return this.put(this.BaseURL + '/' + data.id.toString(), data);
  }

  delete(id) {
    return this.delete(this.BaseURL + '/' + id.toString());
  }
}

export default BaseService;
