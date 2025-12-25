import { RecoilRoot, useRecoilState } from "recoil"
import { userProfileAtomFamily } from "./atomFamily"
import { userDB } from "./userInfo"

function App(){
  return(
    <div>
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    </div>
  )
}

function UserProfile({id}){
  const [userProfile, setUserProfile] = useRecoilState(userProfileAtomFamily(id))

  function togglePreferences(){
    setUserProfile({
      ...userProfile, 
      preferences : userProfile.preferences === "light" ? "dark" : "light"
    })
  }
  return(
    <>
        <h2>{userProfile.name}</h2>
        <p>{userProfile.age}</p>
        <p>{userProfile.preferences}</p>
        <button onClick={togglePreferences}>update user Info</button>
    </>
  )
}


function Dashboard(){
    const userIds = Object.keys(userDB)  //got ["1", "2", "3", "4"] from db file
    return(
        <div>
            {userIds.map((item) => (
                <UserProfile key={item} id={Number(item)}/>
            ))}
        </div>
    )
}

export default App