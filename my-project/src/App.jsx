
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
let myObj = {
  name : "Shreya",
  age : "21"
}
  return (
    <>
      <div>
        <h1 className='bg-red-500 text-amber-50 m-4 p-4 rounded-3xl'>Hello tailwind</h1>
      </div>
      <Card someObj = {myObj}/>
    </>
  )
}

export default App
