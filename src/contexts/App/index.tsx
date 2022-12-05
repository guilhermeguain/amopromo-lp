import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  // useEffect,
} from 'react'

// import { contentServices } from '@services/content'

import { AppContextProps } from './types'

const AppContext = createContext({} as AppContextProps)

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [content, setContent] = useState<string>('')

  // const { getContent } = contentServices()

  // useEffect(() => {
  //   async function fetchContent() {
  //     const { content } = await getContent('')

  //     setContent(content)
  //   }

  //   fetchContent()
  // }, [])

  const contextValue = useMemo(() => {
    return { content, setContent }
  }, [content, setContent])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
