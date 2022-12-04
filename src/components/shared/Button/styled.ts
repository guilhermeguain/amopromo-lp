import styled, { css } from 'styled-components'

import { ButtonProps } from './types'

export const Container = styled.button<ButtonProps>`
  border: none;
  border-radius: 64px;
  padding: 18px 36px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: var(--color-primary);
  color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  font-size: 18px;
  font-weight: 600;
  line-height: 1;

  cursor: pointer;

  ${(props) =>
    props.variant === 'alternative' &&
    css`
      padding: 0.625rem 1.25rem;

      font-size: 0.625rem;
      line-height: 1.5;
      font-weight: 700;
      text-decoration: underline;

      color: var(--color-primary);
      background-color: var(--color-bg-button);

      &:hover {
        text-decoration: none;
      }
    `}

  ${(props) =>
    props.variant === 'footer' &&
    css`
      border-radius: 8px;

      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

      font-weight: 300;
    `}

    ${(props) =>
    props.fontSize === 'small' &&
    css`
      font-size: 12px;
    `}
`
