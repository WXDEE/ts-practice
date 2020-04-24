const obj = {
  "a.b.c.d.f": "hello",
  "a.b.e": "world"
};
const keyArr = Object.keys(obj);
const valueObj = {};
keyArr.forEach(item => {
  const nameArr = item.split(".");
  let temp = {};
  const len = nameArr.length;
  for (let i = 0; i < len; i += 1) {
    const name = nameArr[i];
    if (i === 0) {
      !valueObj[name] && (valueObj[name] = {});
      temp = valueObj[name];
    } else if (i === len - 1) {
      temp[name] = obj[item];
    } else {
      !temp[name] && (temp[name] = {});
      temp = temp[name];
    }
  }
});
console.log(valueObj);
