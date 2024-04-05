import CallList from '@/components/CallList'
import PageSection from '@/components/PageSection'
import React from 'react'

const Upcoming = () => {
  return (
    <PageSection title="Upcoming">
      <CallList 
      type="upcoming"
      />
  </PageSection>
  )
}

export default Upcoming