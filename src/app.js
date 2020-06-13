import React from 'react'
import {Card, Goo} from './components'

export const App = () => {
  return (
    <div className="layout">
      <Goo />

      <Card>
        <Card.Header>
          <h1>Gooey card</h1>
        </Card.Header>
        <Card.Details>
          <p>Ooey gooey</p>
        </Card.Details>
      </Card>
    </div>
  )
}
