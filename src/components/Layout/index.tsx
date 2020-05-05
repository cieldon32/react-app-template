import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routers from '@/routers';
import Loadable from '../Loadable';

const Layout = () => (
  <>
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <h1 className="flex items-center">Logo</h1>
          </div>
          <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
            <div className="w-full lg:px-6 xl:w-3/4 xl:px-12">
              <div className="relative">
                searching
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
        <div className="relative mr-4"></div>
        <div className="flex justify-start items-center text-gray-500"></div>
      </div>
    </div>
    <div className="w-full max-w-screen-xl mx-auto px-6">
      <div className="lg:flex -mx-6">
        <div className="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
          <div className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
            <nav className="px-6 pt-8 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
              <div className="mb-10 mt-10">
                <Link to="/" className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium text-gray-600">Home</Link>
                <Link to="/list" className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium text-gray-600">List</Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
          <div className="pt-8 pb-16 lg:pt-4 w-full"></div>
          <Router>
            <Switch>
              {
                routers.map((item: any) => (
                  <Route exact key={item.path} path={item.path} component={item.component} />
                ))
              }
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  </>
);
export default Layout;