type Props = {
  color?: string
}

export const SmartPhoneNew = ({ color = '#fff' }: Props) => {
  return (
    <svg
      width="18"
      height="28"
      viewBox="0 0 18 28"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="celular_novo_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8491 27.3345H3.30673C1.48351 27.3345 0 25.6507 0 23.5802V4.69903C0 2.62854 1.48351 0.944824 3.30673 0.944824H13.8491C15.6724 0.944824 17.1559 2.62854 17.1559 4.69903V23.5802C17.1559 25.6507 15.6724 27.3345 13.8491 27.3345ZM14.8648 4.39374C14.8648 3.43539 14.4725 3.24601 13.721 3.24601H3.42683C2.67535 3.24601 2.28303 3.43539 2.28303 4.39374V5.63787H14.8648V4.39374ZM14.8648 7.83691H2.28303V18.1664H14.8648V7.83691ZM14.8648 20.4619H2.28303V23.9051C2.28303 24.8634 2.67535 25.0528 3.42683 25.0528H13.721C14.4725 25.0528 14.8648 24.8634 14.8648 23.9051V20.4619ZM10.2896 23.9051H6.85823C6.32179 23.9051 6.00038 24.0072 6.00038 23.4506C6.00038 22.8939 6.32179 22.7573 6.85823 22.7573H10.2896C10.8261 22.7573 11.1555 22.8939 11.1555 23.4506C11.1555 24.0072 10.8261 23.9051 10.2896 23.9051Z"
      />
    </svg>
  )
}
