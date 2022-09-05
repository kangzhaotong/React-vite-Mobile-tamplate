/*
 * @Author: M78.Kangzhaotong 
 * @Date: 2022-09-05 15:49:29 
 * @Last Modified by:   M78.Kangzhaotong 
 * @Last Modified time: 2022-09-05 15:49:29 
 */

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const nav = useNavigate();
  return (
    <div
      className="tabbar_page"
      style={{ backgroundColor: 'blue' }}
      onClick={() => nav('/other1')}>
      Search
    </div>
  );
};
export default memo(Search);
