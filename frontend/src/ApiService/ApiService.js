export const getJwtOfUser= () => {
  const jwt = localStorage.getItem('token');
  return jwt;
}

const options = {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${getJwtOfUser()}`
  }
}

// login the user
export const login = async (user) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/login'}`, {
    method: 'POST',
    ...options,
    body: JSON.stringify(user)
  });

  if(response.status !== 200) {
    const res = await response.json();
    const errorMessage = res.message;
    throw new Error(errorMessage);
  }

  const { token } = await response.json();
  return token;
}

// register new User
export const register = async (newUser) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/register'}`, {
    method: 'POST',
    ...options,
    body: JSON.stringify(newUser)
  });

  if(response.status !== 200) {
    const res = await response.json();
    const errorMessage = res.message;
    throw new Error(errorMessage);
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
  return response;
}

export const deleteRecord = async (recordId) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/records'}/${recordId}`, {
    method: 'DELETE',
    ...options
  });
  return response;
}

export const emptyResponseHandler = async (request) => {
  const res = await request();
  if(Array.isArray(res)) {
    return res;
  } else {
    return [];
  }
}