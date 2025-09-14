// Centralized config for API service
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  CONTRACTS_ENDPOINT: import.meta.env.VITE_CONTRACTS_ENDPOINT,
  CONTRACT_DETAILS_ENDPOINT: import.meta.env.VITE_CONTRACT_DETAILS_ENDPOINT,
  UPLOAD_DELAY_MS: 2000,
  UPLOAD_SUCCESS_RATE: 0.9,
  ERROR_MESSAGES: {
    FETCH_CONTRACTS: 'Failed to fetch contracts',
    FETCH_CONTRACT_DETAILS: 'Failed to fetch contract details',
    CONTRACT_NOT_FOUND: 'Contract not found',
    UPLOAD_FAILED: 'Upload failed. Please try again.',
    UPLOAD_SUCCESS: 'Success',
  },
};
