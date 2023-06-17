import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const problems1 = [
  {
      title:"201, invert BT",
      difficulty:"Medium",
      acceptance:"42%"
  },
  {
      title:"202,2-sum",
      difficulty:"Medium",
      acceptance:"42%"
  },
  {
      title:"203, coins",
      difficulty:"Medium",
      acceptance:"42%"
  }]

  const problems2 = [
  {
      title:"204, reverse LL",
      difficulty:"Medium",
      acceptance:"42%"
  },
  {
      title:"205,filter dupli",
      difficulty:"Medium",
      acceptance:"42%"
  },
  {
      title:"206, invert graph",
      difficulty:"Medium",
      acceptance:"42%"
  }]

function App() {
  const [problems, setProblems] = useState([]);

  

  return (
    <div>
      <input type="text" placeholder="email"></input>
   <input type="text" placeholder="password"></input>
   <button>Sign in</button>
  
   <div>
  <button onClick={() => setProblems((problems) => problems1)}>1</button>
  <button onClick={() => setProblems((problems) => problems2)}>2</button>
</div>

  <div>
 {problems.map(problem=>
    <ProblemStatement title={problem.title}
    acceptance = {problem.acceptance}
    difficulty = {problem.difficulty}
  ></ProblemStatement>)}
  </div>
    </div>
  )
}

function ProblemStatement(props){
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return <tr>
    <td>{title}</td>
    <td>{acceptance}</td>
    <td>{difficulty}</td>
  </tr>

}

export default App
