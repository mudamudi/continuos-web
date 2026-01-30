const API_URL = "http://localhost:1337/api";

export async function fetchAPI(path) {
  const res = await fetch(`${API_URL}${path}`);
  return res.json();
}
