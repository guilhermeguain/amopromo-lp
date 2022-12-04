import styled, { css } from 'styled-components'

import { AccordionProps } from './types'

type AccordionItemBodyProps = {
  isActive?: boolean
}

type AccordionItemHeaderIconProps = {
  isActive?: boolean
}

export const AccordionContainer = styled.div``

export const AccordionItem = styled.div<Partial<AccordionProps>>`
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccd1d6;

  ${(props) =>
    props.variant === 'footer' &&
    css`
      border-bottom: 1px solid var(--color-primary);
    `}
`

export const AccordionItemHeader = styled.button`
  margin-bottom: 1rem;

  display: flex;
  gap: 1rem;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  border: none;
  background: none;
`

export const AccordionItemHeaderTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;

  text-align: left;
`

export const AccordionItemHeaderIcon = styled.div<AccordionItemHeaderIconProps>`
  transform: ${(props) => (props.isActive ? 'rotate(0deg)' : 'rotate(180deg)')};

  transition: transform 0.5s ease;
`

export const AccordionItemBody = styled.div<AccordionItemBodyProps>`
  transition: max-height 0.5s ease;
  overflow: hidden;
  max-height: 0;

  ${(props) =>
    props.isActive &&
    css`
      margin-bottom: 1rem;

      max-height: 300px;
    `}
`
