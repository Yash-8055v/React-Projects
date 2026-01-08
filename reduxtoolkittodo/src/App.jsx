import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className='text-center text-orange-500 text-4xl'>Learn About Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
