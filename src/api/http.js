import axios from 'axios'
import storeBase from './../store/'

const instance = axios.create({
  baseURL: 'http://10.205.20.250:8081',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTU1ODI4MzI4fQ.bLKYP_7JD4_OZ10DvIo5MJ45IcXXopBCKw73i1uQCSnHVav_ZC5oVnwpbDfjCohMwom-ayBNBmQr1LaA-HeQqg',
  }
});


export default instance;
