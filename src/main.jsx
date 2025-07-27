import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './VoteApp/styles.css'
import VotingApp from './VoteApp/VotingApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VotingApp/>
  </StrictMode>,
)
