import Api from './api';

const StoreService = {
  index: (latitude, longitude) =>  Api.get('/stores', {params: {latitude: latitude, longitude: longitude}}),
  show: (google_place_id) =>  Api.get(`stores/${google_place_id}`)
}

export default StoreService;
