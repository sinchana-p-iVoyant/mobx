import React from 'react'
import { useTeamStore } from './TeamStore'
import { observer } from 'mobx-react-lite'

const TeamInfo = () => {
  const { teamName, setMascot } = useTeamStore()
  
  return (
    <div>
        <h1 style={{ marginBottom: 1 }}>Team: {teamName}</h1>
        <input
            type="text"
            placeholder='Change  Mascot...'
            onChange={(e) => setMascot(e.target.value)}
            style={{ marginBottom: 98 }}
        />{" "}
    </div>
  )
}

export default observer(TeamInfo)               