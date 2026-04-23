import type { Meta, StoryObj } from '@storybook/react'
import { Mail, Search } from 'lucide-react'
import { Input } from './Input'

const meta: Meta<typeof Input> = { title: 'Components/Input', component: Input, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = { args: { placeholder: 'Escribe algo...', label: 'Campo de texto' } }
export const WithError: Story = { args: { label: 'Email', value: 'no-es-email', error: 'Formato de email inválido', readOnly: true } }
export const WithHint: Story = { args: { label: 'Contraseña', type: 'password', hint: 'Mínimo 8 caracteres' } }
export const WithIcon: Story = { args: { label: 'Buscar', placeholder: 'Buscar...', leftElement: <Search size={15} /> } }
export const WithEmail: Story = { args: { label: 'Correo electrónico', type: 'email', placeholder: 'usuario@ejemplo.com', leftElement: <Mail size={15} /> } }
export const Disabled: Story = { args: { label: 'Campo deshabilitado', value: 'No editable', disabled: true } }
