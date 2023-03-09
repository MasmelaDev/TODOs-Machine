import React from 'react'
import "./TodoHeader.css"
function TodoHeader({children, loading}) {
  return (
    <header className={`${!!loading && "header__loading"}`}>
        {
            // React.Children.toArray(children).map(child => React.cloneElement(children, {loading}))
            children
        }
    </header>
  )
}

export  {TodoHeader}