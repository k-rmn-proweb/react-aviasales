import axios from 'axios';
import { apiConfig } from './apiConfig';


export const apiClient = axios.create({
  baseURL: apiConfig.baseURL
})