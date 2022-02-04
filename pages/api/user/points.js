import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  const URL = 'https://coding-challenge-api.aerolab.co/user/points';
  const data = { 
    'amount': 1000
   };
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.SECRET_TECHZONE_API_KEY,
    }
  };
  
  const response = await axios.post(URL, data, options);
  res.status(200).json({ data: response.data });
};