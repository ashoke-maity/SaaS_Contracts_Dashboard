# SaaS Contracts Dashboard

A modern, responsive React application for managing SaaS contracts with AI-powered insights and risk analysis.

## 🚀 Features

- **Authentication**: Secure login with mock JWT authentication
- **Contract Management**: View, search, and filter contracts
- **Contract Details**: Detailed view with clauses, AI insights, and evidence
- **File Upload**: Drag & drop file upload with progress tracking
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Notifications**: Toast notifications for user feedback
- **Error Handling**: Comprehensive error boundaries and graceful error states
- **Loading States**: Skeleton loading animations for better UX

## 🛠 Tech Stack

- **Frontend**: React 19.1.1 (Functional components with hooks)
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.1
- **State Management**: React Context API
- **HTTP Client**: Axios 1.12.1
- **Build Tool**: Vite 7.1.2
- **Linting**: ESLint 9.33.0

## 📁 Project Structure

```
client/
├── public/
│   ├── contracts.json          # Mock contracts data
│   ├── contract-details.json   # Mock contract details data
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ContractDetail.jsx      # Contract detail page
│   │   ├── ContractsDashboard.jsx  # Main contracts table
│   │   ├── DashboardLayout.jsx     # Layout with sidebar & header
│   │   ├── ErrorBoundary.jsx       # Error boundary component
│   │   ├── LoadingSkeleton.jsx     # Loading skeleton components
│   │   ├── Login.jsx               # Login page
│   │   └── UploadModal.jsx         # File upload modal
│   ├── contexts/
│   │   ├── AuthContext.jsx         # Authentication context
│   │   └── ToastContext.jsx        # Toast notifications context
│   ├── routes/
│   │   └── App.jsx                 # Main app routing
│   ├── services/
│   │   └── api.js                  # API service layer
│   ├── index.css                   # Global styles
│   └── main.jsx                    # App entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔐 Authentication

The application uses mock authentication for demonstration purposes:

- **Username**: Any username (e.g., "admin", "user", "demo")
- **Password**: `test123` (required)

## 📊 Mock Data

The application uses static JSON files for mock data:

- `public/contracts.json` - List of contracts
- `public/contract-details.json` - Detailed contract information

## 🎨 UI/UX Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Collapsible sidebar for mobile devices
- Responsive tables and cards

### Loading States
- Skeleton loading animations
- Spinner loading indicators
- Progressive loading for better perceived performance

### Error Handling
- Error boundaries for component-level error catching
- Graceful error states with retry options
- User-friendly error messages

### Notifications
- Toast notifications for user feedback
- Success, error, warning, and info message types
- Auto-dismiss with manual close option

## 🔍 Search & Filtering

- **Global Search**: Search contracts by name or parties
- **Status Filter**: Filter by Active, Expired, or Renewal Due
- **Risk Filter**: Filter by Low, Medium, or High risk
- **Pagination**: 10 items per page with navigation controls

## 📤 File Upload

- **Drag & Drop**: Intuitive file upload interface
- **File Types**: Supports PDF, DOC, DOCX files
- **Progress Tracking**: Real-time upload progress
- **Status Updates**: Success, error, and retry states
- **File Management**: Remove files and retry failed uploads

## 🧩 Component Architecture

### Context Providers
- **AuthContext**: Manages authentication state and user session
- **ToastContext**: Handles global toast notifications

### Key Components
- **DashboardLayout**: Main layout with sidebar navigation and header
- **ContractsDashboard**: Contract listing with search and filters
- **ContractDetail**: Detailed contract view with insights
- **UploadModal**: File upload interface
- **ErrorBoundary**: Error catching and fallback UI

## 🎯 Key Features Implementation

### Authentication Flow
1. User enters credentials on login page
2. Mock JWT token generated and stored in localStorage
3. Protected routes check authentication status
4. Session persists across browser refreshes

### Contract Management
1. Fetch contracts from mock API
2. Display in responsive table with pagination
3. Implement search and filtering
4. Navigate to detailed contract view

### AI Insights Display
1. Show contract clauses with confidence scores
2. Display risk insights with severity levels
3. Present evidence with relevance scores
4. Collapsible evidence panel for better UX

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy automatically on push to main branch

## 🧪 Testing

The application includes comprehensive error handling and user feedback mechanisms:

- **Error Boundaries**: Catch and display component errors gracefully
- **Loading States**: Provide visual feedback during data fetching
- **Toast Notifications**: Inform users of successful operations and errors
- **Responsive Design**: Tested across different screen sizes

## 🔧 Development Notes

### State Management
- Uses React Context API for global state
- Local component state for UI interactions
- No external state management library required

### API Integration
- Mock API service layer for demonstration
- Easy to replace with real backend endpoints
- Error handling and loading states included

### Styling Approach
- Tailwind CSS utility classes
- No custom CSS files
- Responsive design patterns
- Consistent color scheme and spacing

## 📝 Assumptions Made

1. **Mock Authentication**: Used mock JWT for demonstration
2. **Static Data**: JSON files instead of real database
3. **File Upload Simulation**: Mock upload with timeout
4. **Responsive Breakpoints**: Standard Tailwind breakpoints
5. **Browser Support**: Modern browsers with ES6+ support

## 🎨 Design Decisions

1. **Component Structure**: Functional components with hooks
2. **Styling**: Tailwind CSS for rapid development
3. **State Management**: Context API for simplicity
4. **Error Handling**: Error boundaries for robustness
5. **Loading States**: Skeleton screens for better UX
6. **Notifications**: Toast system for user feedback

## 🔮 Future Enhancements

- Real backend API integration
- Advanced search with filters
- Contract editing capabilities
- Export functionality
- User management
- Real-time notifications
- Advanced analytics dashboard

## 📄 License

This project is created for assessment purposes.

---

**Demo Credentials:**
- Username: Any username
- Password: `test123`

**Live Demo:** [Deployment URL will be added here]
