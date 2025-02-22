'use client'

import { CardBlock } from '@/components/blocks'
import { Button, Modal, Popover } from 'ui'

export function PopoverOverlays() {
  return (
    <CardBlock>
      <Popover>
        <Button appearance="outline">Forgot Password</Button>
        <Popover.Content className="max-w-[28rem]">
          <Popover.Header>
            <Popover.Title>Email</Popover.Title>
            <Popover.Description>We'll send you an email to log in.</Popover.Description>
          </Popover.Header>
          <Popover.Footer>
            <Button>Send Login Link</Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </CardBlock>
  )
}

export function ModalOverlays() {
  return (
    <CardBlock>
      <Modal>
        <Button>Install Update</Button>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Install Update</Modal.Title>
            <Modal.Description>An update is available for your application.</Modal.Description>
          </Modal.Header>
          <Modal.Footer>
            <Modal.Close>Later</Modal.Close>
            <Modal.Close appearance="solid">Update Now</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </CardBlock>
  )
}
