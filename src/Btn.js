import React from 'react';

class Btn extends React.Component{
  constructor(props){
    super(props);
    this.state={
    pcard: '',
    janken: false,
    win: false,
    syobu: '',
    message: '',
    countsum: 0,
    countkati: 0,
    countmake: 0,
  };
}
//クリックしたときの反応　不要
handleClick() {
 this.setState({countsum: this.state.countsum+1});
 //初期化
 this.setState({win: false});
 this.setState({lose: false});
 this.setState({message: '俺の勝ち！なんで負けたのか、明日まで考えといてください。そしたら何かが見えてくるはずです'});
};
// ランダムを取得する適当な関数
  getRandomValue(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}
// hondaとじゃんけん勝ちか負けかを判定する。　this.state.value次弟で完成
  vshonda(){


    const hondacards = ['グー','チョキ','パー'];
    let count=0;
    for(let i=0;i<9;i++){
      let hondacard = this.getRandomValue(hondacards);
      //一致するならカウント　★一致というのは見た目ではそうだが処理としてはあいこ、勝ち、負けとも取れるため。
      if(this.state.pcard === hondacard){
      count++;
    }
    }

    if(count>6){
      this.setState({win: true});
      this.setState({syobu: "You Win!"});
      this.setState({message: "やるやん。次は俺にリベンジさせて"});
      this.setState({countkati: this.state.countkati +1});
    }else{
      this.setState({lose: true});
      this.setState({syobu: "You Lose!!"});
      const losemessage = [
        "俺の勝ち！なんで負けたのか、明日まで考えといてください。そしたら何かが見えてくるはずです",
        "俺の勝ち！負けは次につながるチャンスです！ネバーギブアップ！",
        "俺の勝ち！たかがじゃんけん、そう思ってないですか？それやったら明日も、俺が勝ちますよ。"
      ];
      this.setState({message:this.getRandomValue(losemessage)});

      this.setState({countmake: this.state.countmake +1});
    }
  };


  render(){
    let modal = ''
    let siai_counter = ''
    //勝利
    if(this.state.win){
      modal = (
        <div>
        あなたが選んだのは{this.state.pcard}
        <h2>{this.state.syobu}</h2>
        H○NDA「
        {this.state.message}
        」
        </div>
      );
    }
    //負け
    if(this.state.lose){
      modal = (
        <div>
        あなたが選んだのは{this.state.pcard}
        <h2>{this.state.syobu}</h2>
        H○NDA「
        {this.state.message}
        」
        </div>
      );
    }
    if(this.state.countsum !== 0){
    siai_counter=(
    <h4>{this.state.countsum}試合中,{this.state.countkati}勝,{this.state.countsum - this.state.countkati}負</h4>
  );}

    return(
    <div>
      {modal}
      {siai_counter}
      <div>
      <span class='btn'
      onClick={()=>{this.setState({pcard: this.props.name});this.handleClick();this.vshonda()}}
      >
      {this.props.name}
      </span>
      <span class='btn'
      onClick={()=>{this.setState({pcard: this.props.name2});this.handleClick();this.vshonda()}}
      >
      {this.props.name2}
      </span>
      <span class='btn'
      onClick={()=>{this.setState({pcard: this.props.name3});this.handleClick();this.vshonda()}}
      >
      {this.props.name3}
      </span>

      </div>
    </div>
    );
  }
}
export default Btn;
