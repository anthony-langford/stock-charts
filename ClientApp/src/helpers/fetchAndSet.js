const fetchAndSet = async (method='', endpoint = '', data = {}) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
  
  try {
    const response = await fetch(`https://localhost:5001/api/${endpoint}/`, options);
    const data = await response.json();
    return data;
  } catch(err) {
    console.error(err); // TypeError: failed to fetch
  }
};

export default fetchAndSet;
