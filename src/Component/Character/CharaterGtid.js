import React from 'react'

const CharaterGtid = ({items, isLoading}) => {
  return (
    isLoading ? <h2>Loading</h2> : <section className='cards'>
        {items.map((item) =>( 
            <h1 key={item.char_id}> {item.name}</h1>
        ))}
    </section>
  )
}

export default CharaterGtid