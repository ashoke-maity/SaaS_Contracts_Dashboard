import axios from 'axios';

const API_BASE_URL = '/';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Mock API service for contracts
export const contractsAPI = {
  // Get all contracts
  getContracts: async () => {
    try {
      const response = await api.get('/contracts.json');
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error fetching contracts:', error);
      return { success: false, error: 'Failed to fetch contracts' };
    }
  },

  // Get contract details by ID
  getContractDetails: async (contractId) => {
    try {
      const response = await api.get('/contract-details.json');
      const contractDetails = response.data[contractId];
      
      if (contractDetails) {
        return { success: true, data: contractDetails };
      } else {
        return { success: false, error: 'Contract not found' };
      }
    } catch (error) {
      console.error('Error fetching contract details:', error);
      return { success: false, error: 'Failed to fetch contract details' };
    }
  },
};

// Mock file upload service
export const uploadAPI = {
  uploadFile: async (file) => {
    return new Promise((resolve) => {
      // Simulate upload delay
      setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% success rate
        
        if (isSuccess) {
          resolve({
            success: true,
            data: {
              id: `file-${Date.now()}`,
              name: file.name,
              size: file.size,
              status: 'Success',
              uploadedAt: new Date().toISOString(),
            },
          });
        } else {
          resolve({
            success: false,
            error: 'Upload failed. Please try again.',
          });
        }
      }, 2000); // 2 second delay
    });
  },
};

export default api;

