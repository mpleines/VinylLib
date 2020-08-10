import axios from 'axios';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const request = async (endpoint, payload, method = 'POST') => {
  const token = localStorage.getItem('token');
  const auth = { Authorization: `Bearer ${token}` };

  try {
    const response = await axios({
      method: method,
      url: `${process.env.REACT_APP_API_URL}${endpoint}`,
      data: payload,
      headers: {
        ...DEFAULT_HEADERS,
        ...auth,
      },
    });

    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
  }
};

// login the user
export const login = async (user) => {
  const response = await request('/login', user);
  const { token } = response.data;
  return token;
};

// register new User
export const register = async (newUser) => {
  const response = await request('/register', newUser);
  return response;
};

// common API requests go here
export const getRecords = async (user) => {
  const response = await request('/records/all', user);
  return response.data;
};

export const getRecordCount = async (body) => {
  const response = await request('/records/all/count', body);
  return response.data;
};

export const getLastAddedRecord = async (body) => {
  const response = await request('/records/last-added', body);
  return response.data;
};

export const getFilteredRecords = async (body) => {
  const response = request('/records/filtered', body);
  return response.data;
};

export const postRecord = async (record) => {
  const response = await request('/records', record);
  return response;
};

export const deleteRecord = async (recordId) => {
  const response = await request(`/records'/${recordId}`, recordId);
  return response;
};

export const getGenres = async () => {
  const response = await request('/genres');
  return response.data;
};

export const emptyResponseHandler = async (request, body) => {
  const res = await request(JSON.stringify(body));
  if (Array.isArray(res)) {
    return res;
  } else {
    return [];
  }
};
