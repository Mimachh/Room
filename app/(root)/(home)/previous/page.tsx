import CallList from '@/components/CallList'
import PageSection from '@/components/PageSection'
import React from 'react'

const Previous = () => {
  return (
    <PageSection title="Previous">
      <CallList 
      type="ended"
      />
  </PageSection>
  )
}

export default Previous