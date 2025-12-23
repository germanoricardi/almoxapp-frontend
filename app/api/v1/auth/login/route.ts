import { api, API_ENDPOINTS, axiosErrorHandler, HOST_API_V1 } from '@/app/src/services/api';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const login = await api.post(`${HOST_API_V1}/${API_ENDPOINTS.auth.login}`, body);
    return NextResponse.json(login.data);
  } catch (error) {
    return axiosErrorHandler(error);
  }
}
