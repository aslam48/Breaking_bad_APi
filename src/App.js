import './App.css';
import Header from './Component/Ui/Header'
import CharaterGtid from './Component/Character/CharaterGtid'
import axios from 'axios'
import React, {useEffect, useState} from 'react' 


function App() {
  const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        const fechItems = async () => {
            const result = await axios("https://www.breakingbadapi.com/api/characters")
            console.log(result.data)

            setItems(result.data)
            setIsLoading(false)
        }
        fechItems()
       
    }, [])

  return (
    <div className="App">
   <Header/>
   <CharaterGtid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
