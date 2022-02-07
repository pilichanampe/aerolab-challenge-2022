import axios from "axios";

export const postPoints = async (pointsToAdd) => {
  const url = 'https://coding-challenge-api.aerolab.co/user/points';
  // const url = 'https://private-anon-c8ce5f3261-aerolabchallenge.apiary-mock.com/user/points';

  const pointsData = {
    amount: pointsToAdd,
  }

  const options = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + process.env.SECRET_TECHZONE_API_KEY,
		}    
  }

  const { data } = await axios.post(url, pointsData, options);
  return data;
}