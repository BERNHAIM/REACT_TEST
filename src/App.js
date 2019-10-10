import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Info from './components/Info';
import Member from './components/Member';
import SimpleMap from './components/SimpleMap';

import './App.css';

// 이 컴포넌트는 동적으로 불러옵니다
const OtherComponent = React.lazy(() => import('./components/Member'));
const Spinner = () => {
  return(
    <h1>TEST</h1>
  )
}

const style = {

  transition : "all 0.4s ease-out",
  backgroundColor : "red",
  animation: "fadeIn 0.5s linear"
}
function App() {
  // return (
  //   // Displays <Spinner> until OtherComponent loads
  //   <React.Suspense fallback={<Spinner />}>
  //     <div>
  //       <OtherComponent />
  //     </div>
  //   </React.Suspense>
  // );

  return (
    <div style={style}>
      <ul onClick={(e)=>console.log(e.currentTarget)}> 
        <li> <a href test="test">test1</a></li></ul>
    </div>
   
  )
}

export default App;