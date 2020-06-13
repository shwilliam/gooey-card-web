import React from 'react'

export const Card = ({children}) => (
  <section className="card">{children}</section>
)

Card.Header = ({
  toggleId = 'card__toggle',
  toggleIcon = '▼',
  toggleLabel = 'Toggle card details',
  children,
}) => (
  <>
    <div className="card__content">{children}</div>
    <input
      className="card__toggle sr-only"
      type="checkbox"
      id={toggleId}
      name={toggleId}
      aria-hidden
    />

    <label className="card__toggle-label" for={toggleId} aria-hidden>
      <span role="img" aria-label={toggleLabel}>
        {toggleIcon}
      </span>
    </label>
  </>
)

Card.Details = ({children}) => (
  <div className="card__details">
    <div class="drip"></div>
    <div class="drip"></div>
    <div class="drip"></div>

    {children}
  </div>
)
