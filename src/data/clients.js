const url = import.meta.env.VITE_API_URL;

export const getClients = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getClientById = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();

  return data;
};

export const postClient = async (client) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const putClient = async (client, id) => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
  } catch (err) {
    console.log(err);
  }
};
