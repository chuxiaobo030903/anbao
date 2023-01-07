
  import React, { Suspense, lazy } from 'react'
  import { useRoutes,Navigate,Routes,Router} from 'react-router-dom'

  const RouteTable:any = [
    {
        path: "/",
        redirect: 'index',
    },
    {
      path: '/',
      component: lazy(() => import('@/pages/components/xheard/index')),
      children: [
        {
          path: 'index',
          component: lazy(() => import('@/pages/index/index'))
        },
        {
            path: 'xtest',
            component: lazy(() => import('@/pages/xtest/index'))
        }
      ]
    },
    {
        path: "login",
        component: lazy(() => import('@/pages/login/index'))
    }
  ]

  const syncRouter = (list:any) => {
    let mRouteTable: any = [];
    list.map((itme:any) => {
        const routeObj = { ...itme };
        if (routeObj.path === undefined) {
          return;
        }
        if (routeObj.redirect) {
            routeObj.element = <Navigate to={routeObj.redirect} replace={true}/>
        }
        if (routeObj.component) {
            //TODO 页面loading
            routeObj.element =  <Suspense fallback={<></>}><routeObj.component /></Suspense>
        }
        if (routeObj.children) {
            routeObj.children = syncRouter(itme.children)
        }
        mRouteTable.push(routeObj)
    })
    return mRouteTable
  }

  // 直接暴露成一个组件调用
  export default () => useRoutes(syncRouter(RouteTable))
