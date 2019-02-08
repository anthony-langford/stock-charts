const fetchAndSet = async (endpoint = '', setter = () => {}) => {
  try {
    const response = await fetch(`https://localhost:5001/api/${endpoint}/`, {
      mode: 'cors'
    });
    const data = await response.json();
    await setter(data);
    return data;
  } catch(err) {
    console.error(err); // TypeError: failed to fetch
  }
};

export default fetchAndSet;