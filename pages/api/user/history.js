import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  const URL = 'https://coding-challenge-api.aerolab.co/user/history';
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.SECRET_TECHZONE_API_KEY,
    }
  };
  
  const response = await axios.get(URL, options);
  res.status(200).json({ data: response.data });
};