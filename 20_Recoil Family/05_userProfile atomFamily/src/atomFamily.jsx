import { atomFamily } from "recoil";
import { userDB } from "./userInfo";

export const userProfileAtomFamily = atomFamily({
    key : "userProfileAtomFamily",
    default : (id) => {
        return userDB[id]
    }
})
//we need the db item on given id
//our db file is object
//How u access obj by giving its key Simple!