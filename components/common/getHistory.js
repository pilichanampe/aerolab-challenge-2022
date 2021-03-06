import axios from "axios";

export const getHistory = async () => {
  const url = 'https://coding-challenge-api.aerolab.co/user/history';
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