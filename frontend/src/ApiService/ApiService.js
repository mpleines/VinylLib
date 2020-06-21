const options = {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

// common API requests go here
export const getRecords = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/records'}`, options);
  const data = await response.json();
  return data;
}

export const postRecord = async (record) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/records'}`, {
    method: 'POST',
    body: JSON.stringify(record),
    ...options
  });
}

export const deleteRecord = async (recordId) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/records'}/${recordId}`, {
    method: 'DELETE',
    ...options
  });
  console.log(response)
  return response;
}