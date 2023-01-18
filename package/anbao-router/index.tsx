import React, { Suspense,lazy } from 'react'
import { useRoutes,Navigate } from 'react-router-dom'

const routeGuard = (params:any)=> {
    return  () => useRoutes(syncRouter(params))
}

// const lazyLoad = (url:string) => {
//     const Module = lazy(() => import("./pages/"+url));
//     return  <Module />
// };

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
            const Module = lazy(() => import('@/'+ routeObj.component))
            //TODO 页面loading
            routeObj.element =  <Suspense fallback={<></>}><Module /></Suspense>;
        }
        if (routeObj.children) {
            routeObj.children = syncRouter(itme.children);
        }
        RouteTable.push(routeObj);
    })
    return RouteTable
}

export default routeGuard
