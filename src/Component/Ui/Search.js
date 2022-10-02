
import React, {useState} from 'react'

const Search = ({getQuery}) => {
const [text, setText] = useState("")

const onChange = (q) => {
    setText(q)
    getQuery(q)
}

  return (
    <div>
        <input type='text' className="form-control" placehholder="search charaters"  value={text} onChange={(e) => onChange(e.target.value)} autoFocus/>
      
    </div>
  )
}

export default Search