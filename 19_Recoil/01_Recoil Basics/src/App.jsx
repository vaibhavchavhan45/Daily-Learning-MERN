import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/atoms/selector";

function App() {
  console.log("App re-rendered");
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("Count re-renders");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  console.log("countRender re-rendered");
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom)
  // console.log("button re-rendered");
  
  const setCount = useSetRecoilState(countAtom)
  console.log("buttons re-rendered");
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

//Ugly way to check even or not
// function EvenCountRenderer(){
//     const count = useRecoilValue(countAtom)
//     const isEven = useMemo(() => {
//       return count % 2 == 0
//     }, [count])

//     return (
//       <div>
//         {isEven ? `${count} is Even` : null}
//       </div>
//     )
// }

function EvenCountRenderer() {
  const count = useRecoilValue(countAtom)
  const isEven = useRecoilValue(evenSelector)
  return (
    <div>
      {isEven ? `${count} is even` : null}
    </div>
  )
}

export default App
