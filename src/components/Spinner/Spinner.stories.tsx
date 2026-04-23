import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = { title: 'Components/Spinner', component: Spinner, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = { args: { size: 'md', variant: 'primary' } }
export const WithLabel: Story = { args: { size: 'lg', label: 'Cargando datos...' } }
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(['sm','md','lg','xl'] as const).map(s => <Spinner key={s} size={s} />)}
    </div>
  ),
}
