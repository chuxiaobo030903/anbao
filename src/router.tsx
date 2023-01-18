
  import routeGuard from 'anbao-router'

  const Route:any = [
    {
        path: "/",
        redirect: '/index',
    },
    {
        path: '/',
        component: 'pages/components/xheard/index',
        children: [
            {
            path: '/index',
            component: 'pages/index/index'
            },
            {
                path: '/xtest',
                component: 'pages/xtest/index'
            }
        ]
    },
    {
        path: "/login",
        component: 'pages/login/index'
    },
    {
        path: "/leaflet",
        component: 'pages/leaflet-demo/index'
    },
    // {
    //     path: "*",
    //     component: 'pages/404'
    // }
  ]

  export default routeGuard(Route)

