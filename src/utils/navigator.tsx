
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

// export const NToXtest = () => {
     // navigate('/xtest');
// }


import {createHashHistory,createBrowserHistory} from "history";
const customHistory = createHashHistory()
export const NToXtest = () => {
    customHistory.push('/xtest')
    // window.location.reload();
}
