/*
 * @Author: M78.Kangzhaotong 
 * @Date: 2022-09-06 14:26:06 
 * @Last Modified by:   M78.Kangzhaotong 
 * @Last Modified time: 2022-09-06 14:26:06 
 */

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const Other = () => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(-1);
      }}
      style={{ backgroundColor: 'red' }}>
      32132131
    </div>
  );
};
export default memo(Other);
