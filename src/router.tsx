import React, { lazy } from 'react'
import Index from './pages/index/index'
import Xtest from './pages/xtest/index'
import Login from './pages/login/index'
import Xheard from './pages/components/xheard/index'
import { Navigate } from 'react-router-dom'

// 路由懒加载方法
const lazyLoad = (url:string) => {
    const Module = lazy(() => import("./pages/"+url));
    return  <Module />
};

 const routes = [
    {
        path: '/',
        element: <Xheard />,
        children: [
            {
                path: "",
                element: <Navigate to="/index" />,
            },
            {
                path: '/index',
                element: lazyLoad("index/index"),
            },
            {
              path: '/xtest',
              element: lazyLoad("xtest/index"),
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    // {
    //     path: '*',
    //     element: lazyLoad("xtest/index"),
    // },
]
export default  routes
