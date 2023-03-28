export const getClients = async () => {
  const url = import.meta.env.VITE_API_URL;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
