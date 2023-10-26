import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// 정적 import
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

// 동적 import(런타임에 모듈을 임포트하도록 함)
const ListPage = lazy(() => import('./pages/ListPage/index'));
const ViewPage = lazy(() => import('./pages/ViewPage/index'));

function App() {
  return (
    <div className="App">
      {/* Suspense로 동적 import한 컴포넌트를 감싸지 않으면 컴포넌트가 제대로 로드 되지 않는 순간이 생긴다 */}
      <Suspense fallback={<div>로딩 중...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
