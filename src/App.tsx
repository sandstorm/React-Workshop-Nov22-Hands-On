import './App.css'
import HeaderAndText from './components/HeaderAndText'
import HigherOrderComponent from './components/HigherOrderComponent'
import MyList from './components/MyList'

function App() {

  return (
    <div className="App">
      {/* This is a comment in JSX */}
      <HeaderAndText title='MyTitle' />

      <HigherOrderComponent>
        <h3>Composing Components</h3>
        <MyList list={['one', 'two', 'three', 'four']} />
      </HigherOrderComponent>
      
      <HigherOrderComponent otherComponent={<div>DEF</div>} children={<h3>Children as a prop</h3>} />
    </div>
  )
}

export default App
