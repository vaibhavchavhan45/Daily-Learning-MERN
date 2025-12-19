import { atom } from "recoil";

export const countAtom = atom({
    key : "countAtom",
    default : 0
})

//useRecoilValue
//useRecoilState
//useSetRecoilState
//selectors