import React,{useState, useEffect} from 'react';

function Detail(){
  const [dswitch,setswitch] = userState(true);

  return(
    <div className='detail'>
    <h4>詳細</h4>
    <p></p>
    <span onClick={()=> setSwitch(!dswitch)}>Click me</span>
    <div aria-hidden={dswitch}>

    <p>Reactで何かをやりたいと思ったので、作ってみた。
    アイデアとしては某じゃんけんの勝率が異常なぐらい高いというのがある。

    </p>
    </div>
    </div>

  );
}


export default Detail;
