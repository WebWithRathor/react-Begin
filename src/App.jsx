import React from 'react'
import {useRef , useState } from "react"

export const App = () => {
  function handle(e) {
    e.preventDefault();
    const newuser = { username, textarea, Gender, City }
    setarray([...array, newuser]);
    setCity('Bhopal');
    setGender('male');
    setUsername("");
    settextarea("");
  }



  const [array, setarray] = useState([])
  const [username, setUsername] = useState('');
  const [textarea, settextarea] = useState('');
  const [Gender, setGender] = useState('male')
  const [City, setCity] = useState('Bhopal');
  let listner = array.map((array, i) => {
    return (
      <div key={i}>
        <h1 >{array.username}</h1>
        <h1>{array.textarea}</h1>
        <h1>{array.Gender}</h1>
        <h1>{array.City}</h1>
      </div>
    )
  })
  const wow = useRef(null)
  setTimeout(() => {
    wow.current.innerHTML = 'nhi btaung'
  }, 1000);
  console.log(listner)
  return (
    <>
    <div className='w-96 h-96 bg-slate-500 m-10 astha'></div>
      <h1 ref={wow} className="text-red-500 font-medium" >Form on react</h1>
      <form onSubmit={handle} action="">
        <input type="radio" onChange={(e) => setGender(e.target.value)} value='male' checked={Gender === 'male' ? true : false} name="a" id="" /> <label htmlFor=''>Male</label>
        <input type="radio" onChange={(e) => setGender(e.target.value)} value='female' checked={Gender === 'female' ? true : false} name="a" id="" /> <label htmlFor="">Female</label><br /><br /><br /><br />
        <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" /><br /><br /><br />
        <textarea onChange={(e) => settextarea(e.target.value)} value={textarea} name="" id="" cols="30" rows="3"></textarea><br /><br />
        <select onChange={(e) => setCity(e.target.value)} value={City} name="" id="">
          <option value="Delhi">delhii</option>
          <option value="Bhopal">bhopal</option>
        </select><br /><br />
        <button>submit</button>
      </form>
      {listner}
    </>
  )
}
export default App;