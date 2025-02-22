'use client'

import * as React from 'react'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider storageKey="justd-theme" {...props}>
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider, useTheme }
