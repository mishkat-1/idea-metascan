import React from 'react'

interface Props {
    style: string,
    text: string,
    active?: boolean
}

export const Button = ({style, text,active}: Props) => {
  return (
    <div>Button</div>
  )
};