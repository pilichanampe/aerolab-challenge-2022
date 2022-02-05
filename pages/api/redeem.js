import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const URL = 'https://coding-challenge-api.aerolab.co/redeem';
  const data = { 
    'productId': '5a0b35c1734d1d08bf7084c3',
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