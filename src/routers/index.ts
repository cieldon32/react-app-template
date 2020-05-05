import Loadable from '@/components/Loadable';

export default [
  {
    path: '/',
    component: Loadable(() => import('@/pages/Home'))
  },
  {
    path: '/list',
    component: Loadable(() => import('@/pages/List'))
  }
];