import http from 'utils/http-common';

class DataSetService {
  getAll(params) {
    return http.post('/getAllReferenceDataSets', params);
  }
  create(params) {
    return http.post('/createReferenceDataSet', params);
  }
  get(params) {
    return http.post('/getReferenceDataSet', params);
  }
  update(params) {
    return http.put('/updateReferenceDataSet', params);
  }
}

export default new DataSetService();
