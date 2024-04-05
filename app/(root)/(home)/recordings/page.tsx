import CallList from "@/components/CallList";
import PageSection from "@/components/PageSection";
import React from "react";

const Recordings = () => {
  return (
    <PageSection title="Recordings">
      <CallList type="recordings" />
    </PageSection>
  );
};

export default Recordings;
