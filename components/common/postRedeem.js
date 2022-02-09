import axios from "axios";

export const postRedeem = async (productData) => {
  const url = 'https://coding-challenge-api.aerolab.co/redeem';
  // const url = 'https://private-anon-c8ce5f3261-aerolabchallenge.apiary-mock.com/redeem';

  const options = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + process.env.SECRET_TECHZONE_API_KEY,
		}    
  }

  const { data } = await axios.post(url, productData, options);
  return data;
}