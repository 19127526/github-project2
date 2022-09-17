import {Route,Routes} from "react-router-dom";
import React from "react";
import Loading from "../components/Loading/Loading";

const HomePageLazy=React.lazy(()=>import("../pages/HomePage"))
const SearchPageLazy=React.lazy(()=>import("../pages/SearchPage"))
const RepoPageLazy=React.lazy(()=>import("../pages/RepoPage/RepoPage"))
const HistoryUserLazy=React.lazy(()=>import("../pages/HistoryPage/HistoryUser"))
const HistoryProjectLazy=React.lazy(()=>import("../pages/HistoryPage/HistoryProject"))

const RoutesPage=()=>{
  return (
    <Routes>
      {/*<Route path="/"  element={<React.Suspense fallback={<Loading/>} >  <HomePageLazy/> </React.Suspense>}/>*/}
      <Route path="/search" element={<React.Suspense fallback={<Loading/>} >  <SearchPageLazy/> </React.Suspense>}/>
      <Route path="repo/:username" element={<React.Suspense fallback={<Loading/>} >  <RepoPageLazy/> </React.Suspense>}/>
      <Route path="/historyuser" element={<React.Suspense fallback={<Loading/>} >  <HistoryUserLazy/> </React.Suspense>}/>
      <Route path="/historyproject" element={<React.Suspense fallback={<Loading/>} >  <HistoryProjectLazy/> </React.Suspense>}/>
    </Routes>
  )
}

export default RoutesPage