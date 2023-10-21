// var HTTPService = require('react-native-http').HTTPService;

// class BasicAPI extends HTTPService {
//     getBasicList() {
//         var path = `basic-list/`;
//         return this.get(path);
//     }
//     getBasicListWithoutAuthorization() {
//         var path = `basic-list/`;
//         return this.get(path, null, { skipAuthorization: true });
//     }
//     getBasicItemWithId(id) {
//         var path = `basic-list/${id}/`;
//         return this.get(path);
//     }
//     postBasicItem(basicItem) {
//         var path = `basic-list/`;
//         return this.post(path, basicItem);
//     }
//     updateBasicItem(basicItem) {
//         var path = `basic-list/${basicItem.id}/`;
//         return this.put(path, basicItem);
//     }
//     deleteBasicItem(id) {
//         var path = `basic-list/${id}/`;
//         return this.delete(path);
//     }
// }

// module.exports = new BasicAPI("http://localhost:3000/api/");