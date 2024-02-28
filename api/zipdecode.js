export default async function handler(request, response) {
  const API_URL = "https://api.zipcodestack.com/v1/search";
  const headers = {
    apikey: process.env.ZIPDECODE_APIKEY, //takes value from vercel, works on build
    Accept: "application/json",
  };
  const res = await fetch(`${API_URL}?country=${request.query.country}&codes=${request.query.codes}`, {
    headers,
  });
  const data = await res.json();

  response.status(200).json(data);
}
  