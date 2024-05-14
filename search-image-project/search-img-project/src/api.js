import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID hSpaGcCxdGvBCzZoCiHOYQ23GBSmWSUoGG4aQC1p3ak',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
