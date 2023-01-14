import React from 'react'
import css from './Header.module.css'

function Header() {
  return (
    <div className={css.container}>
      <h1>Ramedan Is near</h1>
      <p>this is a count down for ramedan 1444</p>
    </div>
  )
}

export default Header