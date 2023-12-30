import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [pass, setpass] = useState("")


  const passwordref = useRef(null)

  const copyPassToClip = useCallback(() => {
    window.navigator.clipboard.writeText(pass)
  }, [pass])


  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$&"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpass(pass)


  }, [length, numAllow, charAllow, setpass])

  useEffect(() => {
    passwordGen()
  }, [length, numAllow, charAllow, passwordGen])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-600'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

        <div className='classname="flex shadow rounded-lg overflow-hidden mb-4"'>

          <input type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref} />
        </div>
        <button onClick={copyPassToClip} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              id='numberinput'
              onChange={() => {
                setnumAllow((prev) => !prev);
              }} />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllow}
              id='charinput'
              onChange={() => {
                setcharAllow((prev) => !prev);
              }} />
            <label htmlFor="charinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
