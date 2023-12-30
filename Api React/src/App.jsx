import { useEffect,useState} from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
  fetch('https://api.github.com/users/Yashh56')
  .then(response=> response.json())
  .then(data=>{
    console.log(data);
    setData(data)
  })
  },[])
  
  
  return (
    
    <>
<img src={data.avatar_url} alt=""  width={300}/>
    
    
    </>
  )
}

export default App