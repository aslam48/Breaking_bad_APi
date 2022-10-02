import './App.css';
import Header from './Component/Ui/Header'
import CharaterGtid from './Component/Character/CharaterGtid'
import Search  from './Component/Ui/Search'
import axios from 'axios'
import React, {useEffect, useState} from 'react' 


function App() {
  const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")


    useEffect(()=> {
        const fechItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            console.log(result.data)

            setItems(result.data)
            setIsLoading(false)
        }
        fechItems()
       
    }, [query])

  return (
    <div className="App">
   <Header/>
   <Search  getQuery={(q) => setQuery(q)}/>
   <CharaterGtid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
