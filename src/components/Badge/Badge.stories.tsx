import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['default','primary','success','warning','danger','outline'] } },
}
export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = { args: { children: 'Default' } }
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['default','primary','success','warning','danger','outline'] as const).map(v => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
}
export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" dot>Activo</Badge>
      <Badge variant="danger" dot>Inactivo</Badge>
      <Badge variant="warning" dot>Pendiente</Badge>
    </div>
  ),
}
