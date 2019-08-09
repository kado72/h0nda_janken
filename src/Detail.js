import React, { useState } from 'react';

function Detail() {
  // Declare a new state variable, which we'll call "count"
  const [dswitch, setSwitch] = useState(true);
  let plus = (dswitch ? "+" : "-");

  return (
    <div className='detail'>
      <span class='line' onClick={() => setSwitch(!dswitch)}>
        詳細{plus}
      </span>
      <div aria-hidden={dswitch}>
      <h2>Reactで何かを作りたかった。作成時から約1ヶ月おいて公開してそう。</h2>
      某じゃんけんの勝率が異常なぐらい高いということから、それを作ってみようとなった。
      自分がじゃんけんを出した際に、相手はその間に9回じゃんけんをし、その中で7回以上勝利をすれば、勝ちとなる。
      本家よりも勝率は低い。本家同様あいこはなく、負け扱いとした。
      <p>特に面白みはないが、reactでの仕様をそれとなく知ることができたので良かった。
      </p>
      <p>コード自体はスクランブルになっているが、作成が目的だったため、そのあたりを意識するフェーズではないと思ったためである。
      </p>


      <small>パロディ元:
      <a class='hondalink' href='https://twitter.com/pepsi_jpn/status/1119058031709499394'>
      Pepsi（ペプシ）Twitter:@pepsi_jpn</a></small>
      </div>
    </div>
  );
}
export default Detail;
