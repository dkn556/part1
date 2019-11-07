import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
    return (
      <div>
        <p>{props.course} </p> 
      </div>
    )
  }


 
 

  const Content = (props) => {
   return (
      <div>
        <p>name: {props.part1name}</p>
        <p>exercises: {props.part1exercises}</p>

        <p>name: {props.part2name}</p>
        <p>exercises: {props.part2exercises}</p>

        <p>name: {props.part3name}</p>
        <p>exercises: {props.part3exercises}</p>
     
      </div>
    )
  }


  const Total = (props) => {
    return (
      <div>
        <p> Total no of exercises: {props.part1exercises1 + props.part2exercises2 + props.part3exercises3} </p> 
      </div>
    )
  }


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
      <Header course={course} />
      <Content  part1name={part1.name} part1exercises={part1.exercises} part2name={part2.name} part2exercises={part2.exercises} part3name={part3.name} part3exercises={part3.exercises}/>
      <Total part1exercises1={part1.exercises} part2exercises2={part2.exercises} part3exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
