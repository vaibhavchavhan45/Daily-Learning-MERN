import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil"
import { networkAtom, jobsAtom, messagesAtom, notificationAtom } from "./Store/Atoms/atoms";
//import { useMemo } from "react";
import { totalCountSelector } from "./Store/Selectors/selector";
function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const [messageCount, setMessageCount] = useRecoilState(messagesAtom)
  const notificationCount = useRecoilValue(notificationAtom)

  // const totalCount = useMemo(() => {
  //   return networkCount + jobsCount + messageCount + notificationCount
  // },[networkCount, jobsCount, messageCount, notificationCount]) //This or selector

  const totalCount = useRecoilValue(totalCountSelector)

  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkCount >= 100 ? "99+" : networkCount}) </button>
      <button>Jobs ({jobsCount}) </button>
      <button>Messages ({messageCount}) </button>
      <button>Notifications {notificationCount} </button>

      <button onClick={() => {
        setMessageCount(messageCount + 1)
      }}>Me ({totalCount})</button>
    </div>
  )
}

export default App

//Started as 6 btn, then show count using atoms and selector se total count showed on Me btn
