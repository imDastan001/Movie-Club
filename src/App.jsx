import { Provider } from 'react-redux'
import Body from './component/body'
import appStore from './utils/reduxStore'

function App() {


  return (
    <>
    <Provider store={appStore}>
    <Body/> 
    </Provider>
    </>
  )
}

export default App
