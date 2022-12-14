import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Transactions from './components/Transactions'
import './App.css'
function App() {
    const [price, setPrice] = useState(null)
    const [balance, setBalance] = useState(null)
    const [transactions, setTransactions] = useState([])
    const getPrice = () => {
        // Axios is a library that makes it easy to make http requests
        // After we make a request, we can use the .then() method to handle the response asynchronously
        // This is an alternative to using async/await
        axios
            .get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
            // .then is a promise that will run when the API call is successful
            .then((res) => {
                setPrice(res.data.data.amount)
            })
            // .catch is a promise that will run if the API call fails
            .catch((err) => {
                console.log(err)
            })
    }
    // useEffect is a 'hook' or special function that will run code based on a trigger
    // The brackets hold the trigger that determines when the code inside of useEffect will run
    // Since it is empty [] that means this code will run once on page load

    const getWalletBalance = () => {
        // ToDo: Lookup how to move the X-API-Key to a .env file to keep it secret for when we push to Github
        const headers = {
            'X-Api-Key': import.meta.env.VITE_TEST_VAR,
        }
        axios
            .get('https://legend.lnbits.com/api/v1/wallet', { headers })
            .then((res) => {
                // Divide our balance by 1000 since it is denominated in millisats
                setBalance(res.data.balance / 1000)
            })
            .catch((err) => console.log(err))
    }

    const getTransactions = () => {
        const headers = {
            'X-Api-Key': import.meta.env.VITE_TEST_VAR,
        }
        axios
            .get('https://legend.lnbits.com/api/v1/payments', { headers })
            .then((res) => {
                setTransactions(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPrice()
        getWalletBalance()
        getTransactions()
        console.log(import.meta.env.VITE_TEST_VAR)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            getPrice()
            getWalletBalance()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="App">
            <header>
                <h1>pleb wallet</h1>
            </header>
            {/* <Buttons /> */}
            <div className="row">
                <div className="balance-card">
                    <h2>Balance</h2>
                    <p>{balance} sats</p>
                </div>

                <div className="balance-card">
                    <h2>Price</h2>
                    <p>${price}</p>
                </div>
            </div>
            <div className="row">
                <div className="row-item">
                    <Transactions transactions={transactions} />
                </div>
                <div className="row-item">
                    {/* <Chart chartData={chartData} /> */}
                </div>
            </div>
            <footer>
                <p>Made by plebs, for plebs.</p>
            </footer>
        </div>
    )
}

export default App
