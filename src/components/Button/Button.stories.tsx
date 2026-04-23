import type { Meta, StoryObj } from '@storybook/react'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Botón primario', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'Botón secundario', variant: 'secondary' } }
export const Outline: Story = { args: { children: 'Botón outline', variant: 'outline' } }
export const Danger: Story = { args: { children: 'Eliminar', variant: 'danger' } }
export const Loading: Story = { args: { children: 'Guardando...', loading: true } }
export const WithIcons: Story = { args: { children: 'Enviar email', leftIcon: <Mail size={15} />, rightIcon: <ArrowRight size={15} /> } }
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
