import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [rate, setRate] = useState(0)

    const getPrice = () => {
        axios
            .get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
            .then((response) => {
                setRate(response.data.data.amount)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getPrice()
    }, [])

    return (
        <div className="App">
            <h1>Bitcoin Price</h1>
            <h3>{rate}</h3>
        </div>
    )
}

export default App
