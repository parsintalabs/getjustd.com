'use client'

import * as React from 'react'

import { ControlledValues } from '@/components/docs/colors/controlled-values'
import { parseColor } from '@react-stately/color'
import { ColorSwatchPicker } from 'ui'

export default function ColorSwatchPickerDemo() {
  const [value, setValue] = React.useState(parseColor('#0d6efd'))
  return (
    <div className="flex flex-col gap-4">
      <ColorSwatchPicker
        aria-label="Pick color"
        value={value}
        onChange={setValue}
        className="flex justify-center gap-2"
      >
        <ColorSwatchPicker.Item color="#f59e0b" />
        <ColorSwatchPicker.Item color="#84cc16" />
        <ColorSwatchPicker.Item color="#0d6efd" />
        <ColorSwatchPicker.Item color="#ec4899" />
        <ColorSwatchPicker.Item color="#f43f5e" />
      </ColorSwatchPicker>
      <ControlledValues color={value} />
    </div>
  )
}