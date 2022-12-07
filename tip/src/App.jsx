import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Decode address
// Get Callback url
// fetch invoice from callback
// trigger webLN
function App() {
    const [webLN, setWebLN] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (window.webln) {
                setWebLN(true)
            } else {
                setWebLN(false)
            }
        }, 500)
    }, [])
    const addressDecoder = (address) => {
        const host = address.split('@')[1]
        const user = address.split('@')[0]
        return `https://${host}/.well-known/lnurlp/${user}`
    }
    const clickHandler = async () => {
        const invoice = await fetchInvoice(21, 'spraveenitpro@starbackr.me')
        console.log(invoice)
        if (window.webln) {
            try {
                await window.webln.enable()
                try {
                    await window.webln.sendPayment(invoice)
                } catch (e) {
                    console.log(e)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    const getCallback = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.callback
    }

    const fetchInvoice = async (amount, address) => {
        const callbackURL = await getCallback(addressDecoder(address))
        //console.log(callbackURL, amount)
        const invoiceResponse = await fetch(
            `${callbackURL}?amount=${amount}000`
        )
        const invoiceData = await invoiceResponse.json()
        const payRequest = invoiceData.pr
        //console.log(payRequest)
        return payRequest
    }

    return (
        <div className="App">
            <div className="card">
                <button onClick={clickHandler} disabled={!webLN}>
                    Pay 21 Sats
                </button>
            </div>
        </div>
    )
}

export default App
