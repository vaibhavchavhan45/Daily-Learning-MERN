import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect, Suspense } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'

function App() {
  return <RecoilRoot>
    <Suspense fallback={<>Loading...</>}>  {/*because of async call*/}
        <MainApp />
    </Suspense>
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications) 
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  //ugly way of doing backend calls because shows a flash of 0 0 0 0 infront of every btn as we set all values in atom as 0
  // useEffect(() => {
  //   // fetch 
  //   axios.get("https://practic-repo.onrender.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
