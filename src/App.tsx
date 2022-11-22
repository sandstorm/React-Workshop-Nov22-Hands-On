import './App.css'
import HeaderAndText from './components/HeaderAndText'
import MyList from './components/MyList'

function App() {

  return (
    <div className="App">
      {/* This is a comment in JSX */}
      <HeaderAndText title='MyTitle' />
      <MyList list={['one', 'two', 'three', 'four']} />
    </div>
  )
}

export default App
