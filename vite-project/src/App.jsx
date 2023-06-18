import './App.css'
import { Heading, Textbox, Input, FirstComponent } from './components'
import { useState, useRef, useEffect } from 'react'

function App() {

  const [message, setMessage] = useState(null)
  const messageTextRef = useRef()
  const [clicks, setClicks] = useState(0)
  const [text, setText] = useState('')
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    console.log(`Общее число переотрисовки DOM: ${renderCount}`);
    setRenderCount(prev => prev + 1)
  }, [clicks, text])

  return (
    <>
      <Heading/>
      <Textbox name='Алексей' city='Димитровград' age={19}/>
      <h2>Способ 1</h2>
      <h3>{message ?? 'Введите Ваше сообщение:'}</h3>
      <Input onChange={(e) => setMessage(e.target.value)}/>
      <h2>Способ 2</h2>
      <h3>{messageTextRef?.current?.value}</h3>
      <Input ref={messageTextRef} onChange={() => setMessage(old => old + ' ')}/>
      <h2>{`Количество кликов: ${clicks}`}</h2>
      <input onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => setClicks(prev => prev + 1)}>Click me!</button>
      <h2>Последнее задание</h2>
      <FirstComponent/>
    </>
  )
}

export default App
