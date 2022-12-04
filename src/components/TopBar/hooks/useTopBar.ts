import { SmartPhone } from '@assets/icons/SmartPhone'
import { WhatsApp } from '@assets/icons/WhatsApp'

export const useTopBar = () => {
  const contacts = [
    {
      id: 1,
      icon: SmartPhone,
      link: 'tel:3140001667',
      label: '(31) 4000-1667',
    },
    {
      id: 2,
      icon: WhatsApp,
      link: 'tel:3140001667',
      label: '(31) 2534-2115',
    },
  ]

  return {
    contacts,
  }
}
