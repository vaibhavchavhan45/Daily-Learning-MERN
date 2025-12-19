import { selector, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "../Atoms/atoms";

export const totalCountSelector = selector({
    key : "totalCountSelector",
    get : ({get}) => {
        const networkCount = get(networkAtom)
        const jobsCount = get(jobsAtom)
        const messageCount = get(messagesAtom)
        const notificationCount = get(notificationAtom)
        return networkCount + jobsCount + messageCount + notificationCount
    }
})