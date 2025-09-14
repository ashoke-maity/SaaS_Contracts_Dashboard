// Centralized constants for UI labels, error messages, status/risk mappings, etc.
export const CONTRACT_LABELS = {
  HEADER: 'Contract Details',
  KEY_CLAUSES: 'Key Clauses',
  AI_INSIGHTS: 'AI Risk Insights',
  EVIDENCE: 'Evidence & References',
  SHOW_DETAILS: 'Show Details',
  HIDE_DETAILS: 'Hide Details',
  BACK_TO_DASHBOARD: 'Back to Dashboard',
  BACK_TO_CONTRACTS: 'Back to Contracts',
  CONTRACT_NOT_FOUND: 'Contract not found',
  CONTRACT_NOT_FOUND_DESC: "The contract you're looking for doesn't exist.",
  ERROR_LOADING_CONTRACT: 'Error loading contract',
  ERROR_FETCH_DETAILS: 'Failed to fetch contract details',
};

export const STATUS_COLORS = {
  Active: 'bg-green-100 text-green-800',
  Expired: 'bg-red-100 text-red-800',
  'Renewal Due': 'bg-yellow-100 text-yellow-800',
  default: 'bg-gray-100 text-gray-800',
};

export const RISK_COLORS = {
  Low: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  High: 'bg-red-100 text-red-800',
  default: 'bg-gray-100 text-gray-800',
};

export const RISK_ICON_COLORS = {
  High: 'text-red-500',
  Medium: 'text-yellow-500',
  Low: 'text-green-500',
  default: 'text-gray-500',
};

export const DATE_FORMAT_OPTIONS = {
  locale: 'en-US',
  options: { year: 'numeric', month: 'long', day: 'numeric' },
};
