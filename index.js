const weakMap = new WeakMap();

const obj = {
  a: 1,
  b: [1, 2, 3, 4],
  c: function () {
    console.log(1212);
  },
};
obj.d = obj;

function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (weakMap.has(value)) {
    return weakMap.get(value);
  }

  const result = Array.isArray(value) ? [] : {};

  weakMap.set(value, result);
  for (const key in value) {
    if (result.hasOwnProperty) {
      result[key] = deepClone(value[key]);
    }
  }

  return result;
}

console.log(obj);
const result = deepClone(obj);
console.log(result);
result.b[2] = 111;
