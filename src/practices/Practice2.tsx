export const Practice2 = () => {
  //複雑なコードや配列を返す時は明示するべき
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  //暗黙の型変換が行われるのでそこが危険にもなりうる
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
