import axios from 'axios';
import { NextResponse } from 'next/server';

export const HOST_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export const HOST_API_V1 = `${process.env.API_URL_V1}`;

export const api = axios.create({ baseURL: HOST_URL });

api.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export const axiosErrorHandler = (error: any) => {
  const status = error?.statusCode ?? error?.response?.status ?? 500;
  const message = error?.message ?? error?.response?.data?.message ?? 'Something went wrong';

  return NextResponse.json(
    {
      error: true,
      message,
    },
    { status }
  );
};

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: 'auth/login',
  }
}