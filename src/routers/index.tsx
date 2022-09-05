/*
 * @Author: M78.Kangzhaotong 
 * @Date: 2022-09-05 15:45:18 
 * @Last Modified by:   M78.Kangzhaotong 
 * @Last Modified time: 2022-09-05 15:45:18 
 */

import { White } from '@/typings';
import { lazy } from 'react';
const Search = lazy(() => import(/* chunkName: "Search" */ '@/pages/Search'));
const List = lazy(() => import(/* chunkName: List */ '@/pages/List'));
const Home = lazy(() => import(/* chunkName: Home */ '@/pages/Home'));
const Detail = lazy(() => import(/* chunkName: Detail */ '@/pages/Detail'));
const Index = lazy(() => import(/* chunkName: Index */ '@/pages/Index'));
const Other = lazy(() => import(/* chunkName: Other */ '@/pages/Other'));
const Other1 = lazy(() => import(/* chunkName: Other1 */ '@/pages/Other1'));
const NoFound = lazy(
  () => import(/* chunkName: NoFound */ '../components/NoFound'),
);
export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/',
    component: <Home />,
    icon: 'white-home1',
    sceneMode: 'scroll',
    title: '首页',
  },
  {
    path: '/detail',
    component: <Detail />,
    icon: 'white-tradingdata',
    sceneMode: 'scroll',
    title: '详情',
  },
  {
    path: '/list',
    component: <List />,
    icon: 'white-order',
    sceneMode: 'scroll',
    title: '统计',
  },
  {
    path: '/search',
    component: <Search />,
    icon: 'white-account',
    sceneMode: 'scroll',
    title: '我的',
  },
];

const routes: White.RouteConfig[] = [
  {
    path: '/',
    component: <Index />,
    tabBars: TabBarList,
  },
  {
    path: '/other',
    component: <Other />,
  },
  {
    path: '/other1',
    sceneMode: 'bottom',
    component: <Other1 />,
  },
  {
    path: '/dcotorDetail',
    component: <Detail />,
  },
  {
    path: '*',
    component: <NoFound />,
  },
];

export default [...routes];
