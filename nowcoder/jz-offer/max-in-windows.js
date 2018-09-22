// 滑动窗口的最大值

// 题目描述
// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
// 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
// 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
// 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
// {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， 
// {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， 
// {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。


/**
 * @param {Array} num
 * @param {Number} size
 * @return {Array}
 */
function maxInWindows(num, size) {
  let res = [];
  let s = [];
  for (let i = 0, l = num.length; i < l; i++) {
    while (s.length && num[s[s.length - 1]] <= num[i]) //从后面依次弹出队列中比当前num值小的元素，同时也能保证队列首元素为当前窗口最大值下标
      s.pop();
    while (s.length && i - s[0] + 1 > size) //当当前窗口移出队首元素所在的位置，即队首元素坐标对应的num不在窗口中，需要弹出
      s.shift();
    s.push(i); //把每次滑动的num下标加入队列
    if (size && i + 1 >= size) //当滑动窗口首地址i大于等于size时才开始写入窗口最大值
      res.push(num[s[0]]);
  }
  return res;
}

let a = maxInWindows([4,2,3,2,6,2,5,1], 3)
console.log(a)