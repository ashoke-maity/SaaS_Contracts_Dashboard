import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { ToastProvider } from '../contexts/ToastContext';
import Login from '../components/Login';
import DashboardLayout from '../components/DashboardLayout';
import ContractsDashboard from '../components/ContractsDashboard';
import ContractDetail from '../components/ContractDetail';
import ErrorBoundary from '../components/ErrorBoundary';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// Dashboard Page Component
const Dashboard = () => (
  <DashboardLayout>
    <ContractsDashboard />
  </DashboardLayout>
);

// Contract Detail Page Component
const ContractDetailPage = () => (
  <DashboardLayout>
    <ContractDetail />
  </DashboardLayout>
);

// Placeholder components for other routes
const Insights = () => (
  <DashboardLayout>
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900">Insights</h2>
      <p className="mt-2 text-gray-600">Contract insights and analytics coming soon...</p>
    </div>
  </DashboardLayout>
);

const Reports = () => (
  <DashboardLayout>
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900">Reports</h2>
      <p className="mt-2 text-gray-600">Contract reports and exports coming soon...</p>
    </div>
  </DashboardLayout>
);

const Settings = () => (
  <DashboardLayout>
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      <p className="mt-2 text-gray-600">Application settings coming soon...</p>
    </div>
  </DashboardLayout>
);

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/contract/:contractId" 
                element={
                  <ProtectedRoute>
                    <ContractDetailPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/insights" 
                element={
                  <ProtectedRoute>
                    <Insights />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/reports" 
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard/settings" 
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
