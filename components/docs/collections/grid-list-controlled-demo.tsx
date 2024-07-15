'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'
import { Description, GridList, GridListItem } from 'ui'

export default function GridListControlledDemo() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]))
  return (
    <div>
      <GridList
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={items}
        aria-label="Select items"
        selectionMode="multiple"
        className="min-w-64"
      >
        {(item) => <GridListItem id={item.id}>{item.name}</GridListItem>}
      </GridList>
      <Description className="mt-2 block [&>strong]:text-fg text-muted-fg">
        You have selected: <strong>{Array.from(selectedKeys).join(', ')}</strong>
      </Description>
    </div>
  )
}

const items = [
  { id: '1', name: 'The Beatles' },
  { id: '2', name: 'Led Zeppelin' },
  { id: '3', name: 'Pink Floyd' },
  { id: '4', name: 'Queen' },
  { id: '5', name: 'The Rolling Stones' }
]
