/*
 * @Author: M78.Kangzhaotong 
 * @Date: 2022-08-27 16:51:39 
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-09-05 15:30:40
 */

import { memo, useState, } from 'react';
import { Button } from 'antd-mobile';
const Home = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('xiaoming');
  const dealName = () => {
    setName('lisi')
  }
  return (
    <div>
        <div
          className="bg-red-500 hover:bg-blue-400 mt-[10px] w-[100px]"
          onClick={() => setCount((count) => count + 1)}>
          home5434
        </div>
        <Button onClick={dealName}>{name}</Button>
        <div className="bg-green-200 font-$30">{count}</div>
      {/* <LoadingView /> */}
    </div>
  );
};
export default memo(Home);
