import { useState, useEffect } from 'react'

type UseAccordionProps = {
  initialTab?: number
}

export const useAccordion = ({ initialTab = 1 }: UseAccordionProps) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab, setActiveTab])

  return {
    activeTab,
    setActiveTab,
  }
}
