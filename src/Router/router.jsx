import {createBrowserRouter} from 'react-router-dom'
import ClassC from '../ClassComponents/ClassC'
import ClassContext from '../ClassComponents/ClassContext'
import ClassContextProvide from '../ClassComponents/ClassContextProvide'
import CallbackH from '../Hooks/CallbackHook/CallBackH'
import EffectH from '../Hooks/EffectHook/EffectH'
import MemoH from '../Hooks/MemoHook/MemoH'
import StateH from '../Hooks/StateHook/StateH'

const router = createBrowserRouter([
    {
        path: '/',
        element: <StateH />
    },
    {
        path: '/CallbackHook',
        element: <CallbackH />
    },
    {
        path: '/MemoHook',
        element: <MemoH />
    },
    {
        path: '/EffectHook',
        element: <EffectH />
    },
    {
        path: '/Class',
        children: [
            {
                path: "",
                element: <ClassC />,
            },
            {
                path: "/Class/Context",
                element: <ClassContextProvide>
                             <ClassContext />
                         </ClassContextProvide> //ClassContext dùng chỉ phạm vi được hỗ trợ của context
            }
        ]
    }
])

export default router;