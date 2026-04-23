import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

const meta: Meta<typeof Card> = { title: 'Components/Card', component: Card, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Card.Header>
        <Card.Title>Título de la tarjeta</Card.Title>
        <Card.Description>Descripción breve del contenido de esta tarjeta.</Card.Description>
      </Card.Header>
      <Card.Content><p className="text-sm text-gray-600">Contenido principal de la tarjeta.</p></Card.Content>
      <Card.Footer className="gap-2">
        <Button size="sm" variant="outline">Cancelar</Button>
        <Button size="sm">Confirmar</Button>
      </Card.Footer>
    </Card>
  ),
}
export const Hoverable: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      {['Plan Básico', 'Plan Pro'].map((p) => (
        <Card key={p} hoverable>
          <Card.Header>
            <Badge variant="primary">Nuevo</Badge>
            <Card.Title className="mt-2">{p}</Card.Title>
          </Card.Header>
          <Card.Content><p className="text-2xl font-bold">$9.99<span className="text-sm font-normal text-gray-500">/mes</span></p></Card.Content>
          <Card.Footer><Button fullWidth size="sm">Seleccionar</Button></Card.Footer>
        </Card>
      ))}
    </div>
  ),
}
