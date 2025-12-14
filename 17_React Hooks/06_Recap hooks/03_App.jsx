import { useEffect, useState, memo, useCallback } from "react"

function App() {
  const [crypto1return, setCrypto1return] = useState({})
  const [crypto2return, setCrypto2return] = useState({})
  const [bankReturn, setBankReturn] = useState({})

  useEffect(() => {
    setCrypto1return({ returns: 1000 })
  }, [])

  useEffect(() => {
    setCrypto2return({ returns: 1000 })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBankReturn({ profit: 500 })
    }, 2000)
  }, [])

  const calculateReturns = useCallback(() => {
    return (crypto1return.returns + crypto2return.returns) * 0.3
  }, [crypto1return, crypto2return])

  return (
    <>
      <CryptoReturnsCalculator calculateReturns={calculateReturns} />
    </>
  )
}

const CryptoReturnsCalculator = memo(({ calculateReturns }) => {
  console.log("Child re-renders")
  return (
    <div>
      <h1>Crypto returns are {calculateReturns()}</h1>
    </div>
  )
})

export default App
