import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.silver};
  `}
`
export const Container = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin-bottom: 0.3rem;
    transition: all 0.8s ease 0s;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    text-shadow: ${theme.colors.black} 0 0 1rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    outline: 0;
    height: 3.5rem;
    margin-bottom: 1.5rem;
    border-radius: 0.3rem;
    color: ${theme.colors.blue};
    transition: all 0.8s ease 0s;
    background: ${theme.colors.dark};
    padding: ${theme.spacings.xsmall};
    box-shadow: rgb(0 0 0 / 30%) 0 0 1rem;
    border: 0.1rem solid ${theme.colors.dark};
    &:focus{
      border-color: ${theme.colors.blue} !important;
    }
    &:valid{
      border-color: ${theme.colors.blue} !important;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    height: 3rem;
    cursor: pointer;
    margin-top: 1rem;
    border-radius: 0.3rem;
    letter-spacing: 0.1rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.semibold};
    box-shadow: rgb(0 0 0 / 30%) 0 0 1rem;
    font-size: ${theme.font.sizes.xxsmall};
    background-color: ${theme.colors.blue};
  `}
`