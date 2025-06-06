import Api from './api';

const RatingService = {
  create: (store, rating) =>  Api.get('/ratings', { store: store, rating: rating })
}

export default RatingService;
