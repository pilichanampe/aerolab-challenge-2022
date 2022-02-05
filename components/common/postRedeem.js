import axios from "axios";

export const getPoints = async (data) => {
  const url = 'https://coding-challenge-api.aerolab.co/redeem';

  const data = {};
  const options = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + process.env.SECRET_TECHZONE_API_KEY,
		}    
  }

  const { data } = await axios.post(url, data, options);
  return data;
}