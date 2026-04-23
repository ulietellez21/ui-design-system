import { useState } from 'react'
import { Button } from './components/Button/Button'
import { Badge } from './components/Badge/Badge'
import { Input } from './components/Input/Input'
import { Card } from './components/Card/Card'
import { Alert } from './components/Alert/Alert'
import { Spinner } from './components/Spinner/Spinner'
import { Mail, Search } from 'lucide-react'
import './index.css'

export default function App() {
  const [showAlert, setShowAlert] = useState(true)
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">UI Design System</h1>
          <p className="text-gray-500">Componentes reutilizables — React + TypeScript + Tailwind</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            {(['primary','secondary','outline','ghost','danger'] as const).map(v => <Button key={v} variant={v}>{v}</Button>)}
            <Button loading>Loading</Button>
            <Button leftIcon={<Mail size={15}/>}>Con ícono</Button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Badges</h2>
          <div className="flex flex-wrap gap-2">
            {(['default','primary','success','warning','danger','outline'] as const).map(v => <Badge key={v} variant={v}>{v}</Badge>)}
            <Badge variant="success" dot>Activo</Badge>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nombre" placeholder="Tu nombre completo" />
            <Input label="Email" type="email" leftElement={<Mail size={15}/>} placeholder="user@example.com" />
            <Input label="Buscar" leftElement={<Search size={15}/>} placeholder="Buscar..." />
            <Input label="Con error" error="Este campo es requerido" />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Alerts</h2>
          <div className="space-y-2">
            {showAlert && <Alert variant="info" title="Información" onClose={() => setShowAlert(false)}>Esta es una alerta cerrable.</Alert>}
            <Alert variant="success" title="¡Listo!">Cambios guardados correctamente.</Alert>
            <Alert variant="warning" title="Atención">Esta acción no se puede deshacer.</Alert>
            <Alert variant="error" title="Error">No se pudo completar la operación.</Alert>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Básico', 'Pro'].map(p => (
              <Card key={p} hoverable>
                <Card.Header><Badge variant="primary">Recomendado</Badge><Card.Title className="mt-2">{p}</Card.Title><Card.Description>Descripción del plan.</Card.Description></Card.Header>
                <Card.Footer><Button size="sm" fullWidth>Elegir plan</Button></Card.Footer>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Spinners</h2>
          <div className="flex items-center gap-6">
            {(['sm','md','lg','xl'] as const).map(s => <Spinner key={s} size={s} />)}
            <Spinner label="Cargando..." />
          </div>
        </section>
      </div>
    </div>
  )
}
