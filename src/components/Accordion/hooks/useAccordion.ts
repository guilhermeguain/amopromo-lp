import { useState } from 'react'

type UseAccordionProps = {
  initialTab?: number
}

export const useAccordion = ({ initialTab = 1 }: UseAccordionProps) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab)

  return {
    activeTab,
    setActiveTab,
  }
}
