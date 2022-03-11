import { useState, useEffect } from "react";

function App1() {
  const [msg, setState] = useState("周奥军");


  // // 模拟 mounted
  // useEffect(()=> {
  //   // ajax请求
  // })

  // 模拟 updated,数组中没有值的时候检测所有数据的更新，不需要监听数据更新的时候可以为空数据，需要单独监听的数据：把数据填到数组当中去
  // useEffect(() => {

  // },[])

  // 模拟 beforeDestroy
  useEffect(() => {
    return () => {
      console.log("销毁组件")
    }
  })


  const fn = () => {
    setState("测试");
  };

  return (
    <>
      <h1 onClick={fn}>{msg},你好</h1>
    </>
  );
}

export default App1;
