
  import { lazy } from 'react'
  import routeGuard from 'anbao-router'

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

  export default routeGuard(Route)

