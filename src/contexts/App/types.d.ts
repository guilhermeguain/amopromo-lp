import React from 'react'

export type AppContextProps = {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}
