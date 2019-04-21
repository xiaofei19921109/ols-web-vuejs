import http from './http'

export default {
  login() {
    return http.post('/login')
  },
  createCamp(camp) {
    return http.post('/camp', camp);
  },
  getCamp(id) {
    return http.get(`/camp/${id}`);
  },
  getCamps() {
    return http.get(`/camp`);
  },
  deleteCamp(id) {
    return http.delete(`/camp/${id}`);
  }
}
