import React from 'react';
import Btn from './Btn';

class Janken extends React.Component{
  render(){
    return(
        <div>
          <Btn
          name = "パー"
          name2 = "グー"
          name3 = "チョキ"
          />
        </div>
      );
    }
  }
export default Janken;
