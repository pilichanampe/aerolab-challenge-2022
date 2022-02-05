import axios from "axios";

export const getProducts = async () => {
  const url = 'https://coding-challenge-api.aerolab.co/products';
  const options = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + process.env.SECRET_TECHZONE_API_KEY,
		}    
  }

  const { data } = await axios.get(url, options);
  return data;
}
