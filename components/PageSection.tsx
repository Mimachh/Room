import React from 'react'

interface Props {
  children: React.ReactNode
    title: string
}
const PageSection = (props: Props) => {
    const { children, title } = props
  return (
    <section className="flex size-full flex-col gap-10 text-white">
    <h1 className="text-3xl font-bold">
      {title}
    </h1>
    {children}
  </section>
  )
}

export default PageSection