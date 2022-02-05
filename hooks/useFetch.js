import axios from "axios";
export const getUser = async(token) => {
	const url = 'https://coding-challenge-api.aerolab.co/user/me';

	const options = {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token,
		}
	}

  const resp = await axios.get(url, options);
  const { data } = resp;
 
  return data;
}




// import axios from "axios";
// import { useEffect, useState } from "react";

// export default async function useFetch(url){

//   const [data,setData] = useState(null);
//   const [error,setError] = useState(null);
//   const [loading,setLoading] = useState(false);

// 	console.log('SOY LA KEY', process.env.NEXT_PUBLIC_TECHZONE_API_KEY);
// 	const baseUrl = 'https://coding-challenge-api.aerolab.co';

// 	const options = {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Accept': 'application/json',
// 			'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_TECHZONE_API_KEY,
// 		}
// 	}
//   useEffect(() => {
// 		(
// 			async function(){
// 				try{
// 					setLoading(true);
// 					const response = await axios.get(baseUrl + url, options);
// 					const json =  await response.json();
// 					setData(json);
// 				}catch(err){
// 					setError(err);
// 				}finally{
// 					setLoading(false);
// 				}
// 			}
// 		)()
//   }, [url]);

//   // return { error, loading };
//   return { data, error, loading };

// }