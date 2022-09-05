import { useState, useEffect } from 'react';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import TabBarView from '@/layout/TabBarView';
import RouteRender from '@/routers/RouteRender';
import { HomeContext } from './Context/homeContext';
import history from '@/utils/history';
const App = () => {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    id?: string;
    age?: string;
  }>({
    name: 'zhangsan'
  });
  useEffect(() => {
    setTimeout(()=>{
      setUserInfo({
        name:'wojiaoxiaoming',
        age: '12'
      })
    },2000)
  }, [])
  return (
    <HomeContext.Provider value={userInfo}>
      <Router history={history}>
        <RouteRender />
        <TabBarView />
      </Router>
    </HomeContext.Provider>
  );
};
export default App;
