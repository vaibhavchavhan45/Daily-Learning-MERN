import axios from "axios";
import { atom, selector } from "recoil";

//fetch ke liye use krna hai
// export const notifications = atom({
//     key: "notifications",
//     default: {
//         network: 0, 
//         jobs: 0,
//         messaging: 0, 
//         notifications: 0
//     }
// });


export const notifications = atom({
    key : "notifications",
    default : selector({
        key : "notificationsSelector",
        get : async () => {
 //         await new Promise(r => setTimeout(r, 5000)) //sleeps the function for 5 sec
            const res = await axios.get("https://practic-repo.onrender.com/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => { //this get computes the value means calculation logic in selector
        const allNotifications = get(notifications); //this get read the value of atom
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})


//Why we make async calls as atom ke andar selector, why can't directly from selector
//because, selector are only capable of onlly giving u data(u only read from that data)
//U can't able to update that data if needed be
//thatswhy we use atom ke andar selector
//selector take that data by doing async call and using atom we can read it, update it, edit it etc etc


//one thing to remember in syntax :
//Here, in async call of selector we just using one get only which is the default thing we have to provide
//but like the selector there are no three get.. like in normal selector(e.g. totalNotificationSelector) where we read atom value
//because the async call is not dependent on anyone, i.e. we are not getting values from anyone we're fetching value
