const BASE_URL = "https://picsum.photos/";

export const imageServices = {
    getImageRandom: (size = {}) => {
      const { width = 0, height  = 0} = size
      const img = `${BASE_URL}${width}/${height}`
      return img;
    }
  };