/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  colors: {
    text: '#06180e',
    background: '#f8fdfa',
    primary: '#42cd7f',
    secondary: '#91c8e2',
    accent: '#678fd7',
  },
  extend: {
    boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },
  },
}
export const plugins = [addVariablesForColors]

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
