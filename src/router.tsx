
  import React, { Suspense, lazy } from 'react'
  import { useRoutes,Navigate } from 'react-router-dom'

  const Route:any = [
    {
        path: "/",
        redirect: '/index',
    },
    {
      path: '/',
      component: lazy(() => import('@/pages/components/xheard/index')),
      children: [
        {
          path: '/index',
          component: lazy(() => import('@/pages/index/index'))
        },
        {
            path: '/xtest',
            component: lazy(() => import('@/pages/xtest/index'))
        }
      ]
    },
    {
        path: "/login",
        component: lazy(() => import('@/pages/login/index'))
    },
    // {
    //     path: "*",
    //     component: lazy(() => import('@/pages/404))
    // }
  ]

  //TODO路由守卫方法
  const syncRouter = (routeList:any) => {
    let RouteTable: any = [];
    routeList.map((itme:any) => {
        const routeObj = { ...itme };
        if (routeObj.path === undefined) {
          return;
        }
        if (routeObj.redirect) {
            routeObj.element = <Navigate to={routeObj.redirect} replace={true}/>;
        }
        if (routeObj.component) {
            //TODO 页面loading
            routeObj.element =  <Suspense fallback={<></>}><routeObj.component /></Suspense>;
        }
        if (routeObj.children) {
            routeObj.children = syncRouter(itme.children);
        }
        RouteTable.push(routeObj);
    })
    return RouteTable
  }

  export default () => useRoutes(syncRouter(Route))
