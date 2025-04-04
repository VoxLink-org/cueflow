import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LiveStream from './cases/liveStream.tsx'
import JobInterviewAssistantUserCasePage from './cases/jobInterview.tsx'
// import BusinessNegotiationAssistantUserCasePage from './cases/businessNegotiation.tsx'

// VITE_BASE
console.log('new one');
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/live-stream-interaction" element={<LiveStream />} />
        <Route path="/job-interview" element={<JobInterviewAssistantUserCasePage />} />
        {/* <Route path="/business-negotiation" element={<BusinessNegotiationAssistantUserCasePage />} /> */}
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
