const postAndSet = async (endpoint = '', data = {}, setter = () => {}) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`https://localhost:5001/api/${endpoint}/`, options);
    const data = await response.json();
    await setter(data);
    return data;
  } catch(err) {
    console.error(err); // TypeError: failed to fetch
  }
};

export default postAndSet;
