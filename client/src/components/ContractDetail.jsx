import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contractsAPI } from '../services/api';
import LoadingSkeleton from './LoadingSkeleton';
import {
  CONTRACT_LABELS,
  STATUS_COLORS,
  RISK_COLORS,
  RISK_ICON_COLORS,
  DATE_FORMAT_OPTIONS
} from '../constants';

const ContractDetail = () => {
  const { contractId } = useParams();
  const navigate = useNavigate();
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEvidence, setShowEvidence] = useState(false);

  useEffect(() => {
    fetchContractDetails();
  }, [contractId]);

  const fetchContractDetails = async () => {
    try {
      setLoading(true);
      const result = await contractsAPI.getContractDetails(contractId);
      if (result.success) {
        setContract(result.data);
        setError(null);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(CONTRACT_LABELS.ERROR_FETCH_DETAILS);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => STATUS_COLORS[status] || STATUS_COLORS.default;
  const getRiskColor = (risk) => RISK_COLORS[risk] || RISK_COLORS.default;
  const getRiskIconColor = (risk) => RISK_ICON_COLORS[risk] || RISK_ICON_COLORS.default;
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(
      DATE_FORMAT_OPTIONS.locale,
      DATE_FORMAT_OPTIONS.options
    );
  };

  const formatConfidence = (confidence) => {
    return Math.round(confidence * 100);
  };

  const formatRelevance = (relevance) => {
    return Math.round(relevance * 100);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded w-48 animate-pulse"></div>
          </div>
          <div className="flex space-x-3">
            <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Contract Metadata */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Clauses and Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LoadingSkeleton type="card" />
          <LoadingSkeleton type="card" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              {CONTRACT_LABELS.ERROR_LOADING_CONTRACT}
            </h3>
            <div className="mt-2 text-sm text-red-700">
              {error}
            </div>
            <div className="mt-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-red-100 px-3 py-2 rounded-md text-sm font-medium text-red-800 hover:bg-red-200"
              >
                {CONTRACT_LABELS.BACK_TO_DASHBOARD}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">{CONTRACT_LABELS.CONTRACT_NOT_FOUND}</h3>
        <p className="mt-2 text-gray-500">{CONTRACT_LABELS.CONTRACT_NOT_FOUND_DESC}</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {CONTRACT_LABELS.BACK_TO_DASHBOARD}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
          >
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {CONTRACT_LABELS.BACK_TO_CONTRACTS}
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{contract.name}</h1>
          <p className="mt-1 text-lg text-gray-600">{contract.parties}</p>
        </div>
        <div className="flex space-x-3">
          <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(contract.status)}`}>
            {contract.status}
          </span>
          <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getRiskColor(contract.risk)}`}>
            {contract.risk} Risk
          </span>
        </div>
      </div>

      {/* Contract Metadata */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">{CONTRACT_LABELS.HEADER}</h3>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Start Date</dt>
              <dd className="mt-1 text-sm text-gray-900">{formatDate(contract.start)}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Expiry Date</dt>
              <dd className="mt-1 text-sm text-gray-900">{formatDate(contract.expiry)}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contract.status)}`}>
                  {contract.status}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Risk Level</dt>
              <dd className="mt-1">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(contract.risk)}`}>
                  {contract.risk}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clauses Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">{CONTRACT_LABELS.KEY_CLAUSES}</h3>
            <div className="space-y-4">
              {contract.clauses.map((clause, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{clause.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{clause.summary}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="flex items-center">
                        <div className="text-sm text-gray-500 mr-2">Confidence:</div>
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${formatConfidence(clause.confidence)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {formatConfidence(clause.confidence)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insights Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">{CONTRACT_LABELS.AI_INSIGHTS}</h3>
            <div className="space-y-4">
              {contract.insights.map((insight, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className={`h-5 w-5 ${getRiskIconColor(insight.risk)}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          insight.risk === 'High' ? 'bg-red-100 text-red-800' :
                          insight.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {insight.risk} Risk
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{insight.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Section */}
      {contract.evidence && contract.evidence.length > 0 && (
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{CONTRACT_LABELS.EVIDENCE}</h3>
              <button
                onClick={() => setShowEvidence(!showEvidence)}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                {showEvidence ? CONTRACT_LABELS.HIDE_DETAILS : CONTRACT_LABELS.SHOW_DETAILS}
              </button>
            </div>
            
            {showEvidence && (
              <div className="space-y-4">
                {contract.evidence.map((evidence, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">{evidence.source}</span>
                          <div className="ml-4 flex items-center">
                            <div className="text-sm text-gray-500 mr-2">Relevance:</div>
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${formatRelevance(evidence.relevance)}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900">
                                {formatRelevance(evidence.relevance)}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                          "{evidence.snippet}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractDetail;

