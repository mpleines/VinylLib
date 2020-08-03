// login the user
export const login = async (user) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/login'}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 200) {
    const res = await response.json();
    const errorMessage = res.message;
    throw new Error(errorMessage);
  }

  const { token } = await response.json();
  return token;
};

// register new User
export const register = async (newUser) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${'/register'}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newUser),
    },
  );

  if (response.status !== 200) {
    const res = await response.json();
    const errorMessage = res.message;
    throw new Error(errorMessage);
  }
};

// common API requests go here
export const getRecords = async (user) => {
  const token = localStorage.getItem('token');

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${'/records/all'}`,
    {
      method: 'POST',
      body: user,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await response.json();
  return data;
};

export const getFilteredRecords = async (body) => {
  const token = localStorage.getItem('token');

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${'/records/filtered'}`,
    {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await response.json();
  return data;
};

export const postRecord = async (record) => {
  const token = localStorage.getItem('token');

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${'/records'}`,
    {
      method: 'POST',
      body: JSON.stringify(record),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response;
};

export const deleteRecord = async (recordId) => {
  const token = localStorage.getItem('token');

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${'/records'}/${recordId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response;
};

export const getGenres = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${process.env.REACT_APP_API_URL}${'/genres'}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

export const emptyResponseHandler = async (request, body) => {
  const res = await request(JSON.stringify(body));
  if (Array.isArray(res)) {
    return res;
  } else {
    return [];
  }
};
