import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = { title: 'Components/Alert', component: Alert, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = { args: { variant: 'info', title: 'Información', children: 'Esta es una alerta informativa.' } }
export const Success: Story = { args: { variant: 'success', title: '¡Éxito!', children: 'Los cambios se guardaron correctamente.' } }
export const Warning: Story = { args: { variant: 'warning', title: 'Atención', children: 'Esta acción podría tener consecuencias.' } }
export const Error: Story = { args: { variant: 'error', title: 'Error', children: 'Ocurrió un problema al procesar la solicitud.' } }
export const WithClose: Story = { args: { variant: 'info', title: 'Cerrable', children: 'Haz clic en la X para cerrar.', onClose: () => alert('cerrado') } }
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      {(['info','success','warning','error'] as const).map(v => (
        <Alert key={v} variant={v} title={v.charAt(0).toUpperCase() + v.slice(1)}>Mensaje de ejemplo para la variante {v}.</Alert>
      ))}
    </div>
  ),
}
