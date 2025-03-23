import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LiveStream from './cases/liveStream.tsx'
import JobInterviewAssistantUserCasePage from './cases/jobInterview.tsx'
// import BusinessNegotiationAssistantUserCasePage from './cases/businessNegotiation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={VITE_BASE}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/live-stream-interaction" element={<LiveStream />} />
        <Route path="/job-interview" element={<JobInterviewAssistantUserCasePage />} />
        {/* <Route path="/business-negotiation" element={<BusinessNegotiationAssistantUserCasePage />} /> */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
