import React from 'react'
import CharacterItem from './CharacterItem'
import Spin from '../Ui/Spinner'

const CharaterGtid = ({items, isLoading}) => {
  return (
    isLoading ? <Spin/> : <section className='cards'>
        {items.map((item) =>( 
            <CharacterItem key={item.char_id}  item={item}></CharacterItem>
        ))}
    </section>
  )
}

export default CharaterGtid