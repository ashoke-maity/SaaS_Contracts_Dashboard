
import axios from 'axios';
import { API_CONFIG } from './api.config';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
});

// Mock API service for contracts
export const contractsAPI = {
  // Get all contracts
  getContracts: async () => {
    try {
      const response = await api.get(API_CONFIG.CONTRACTS_ENDPOINT);
      return { success: true, data: response.data };
    } catch (error) {
      console.error(API_CONFIG.ERROR_MESSAGES.FETCH_CONTRACTS, error);
      return { success: false, error: API_CONFIG.ERROR_MESSAGES.FETCH_CONTRACTS };
    }
  },

  // Get contract details by ID
  getContractDetails: async (contractId) => {
    try {
      const response = await api.get(API_CONFIG.CONTRACT_DETAILS_ENDPOINT);
      const contractDetails = response.data[contractId];

      if (contractDetails) {
        return { success: true, data: contractDetails };
      } else {
        return { success: false, error: API_CONFIG.ERROR_MESSAGES.CONTRACT_NOT_FOUND };
      }
    } catch (error) {
      console.error(API_CONFIG.ERROR_MESSAGES.FETCH_CONTRACT_DETAILS, error);
      return { success: false, error: API_CONFIG.ERROR_MESSAGES.FETCH_CONTRACT_DETAILS };
    }
  },
};

// Mock file upload service
export const uploadAPI = {
  uploadFile: async (file) => {
    return new Promise((resolve) => {
      // Simulate upload delay
      setTimeout(() => {
        const isSuccess = Math.random() < API_CONFIG.UPLOAD_SUCCESS_RATE;

        if (isSuccess) {
          resolve({
            success: true,
            data: {
              id: `file-${Date.now()}`,
              name: file.name,
              size: file.size,
              status: API_CONFIG.ERROR_MESSAGES.UPLOAD_SUCCESS,
              uploadedAt: new Date().toISOString(),
            },
          });
        } else {
          resolve({
            success: false,
            error: API_CONFIG.ERROR_MESSAGES.UPLOAD_FAILED,
          });
        }
      }, API_CONFIG.UPLOAD_DELAY_MS);
    });
  },
};

export default api;

