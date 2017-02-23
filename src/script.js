export default class MyArray {
  constructor(...args) {
    if(args.length === 0) {
    } else if (args.length === 1) {
      if (typeof args[0] === 'number') {
        let len = args[0];
        for(let i = 0; i < len; i++) {
          this[i] = undefined;
        }
      } else {
        this[0] = args[0];
      }
    } else {
      args.forEach((elm, i) => {
        this[i] = elm;
      });
    }
  }

  get length() {
    const bigArr = Object.keys(this).sort((elm1, elm2) => {
      return Number(elm1) < Number(elm2);
    });

    const biggest = bigArr[0];

    return Number(biggest) + 1;
  }

  from() {
  }

  isArray() {
  }

  of() {
  }

  copyWithin() {
  }

  fill() {
  }

  pop() {
    const lastIndex = this.length - 1;
    let ret = this[lastIndex]
    delete this[lastIndex];

    return ret;
  }

  push(val) {
    let len = this.length
    this[len] = val;

    return len + 1;
  }

  reverse() {
  }

  shift() {
    const lastIndex = this.length - 1;
    let ret = this[0];

    for(let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }

    delete this[lastIndex];

    return ret;
  }

  sort() {
  }

  splice() {
  }

  unshift(val) {
    const lastIndex = this.length;
    let ret = lastIndex + 1;

    for(let i = lastIndex; i > 0; i--) {
      this[i] = this[i - 1];
    }

    this[0] = val;

    return ret;
  }

  concat() {
  }

  includes() {
  }

  join() {
  }

  slice() {
  }

  toSource() {
  }

  toString() {
  }

  toLocaleString() {
  }

  indexOf(val) {
    let ret = -1;

    for(let i = 0; i < this.length; i++) {
      if(this[i] === val) {
        ret = i;
      }
    }

    return ret;
  }

  lastIndexOf() {
  }

  forEach(callback) {
    Object.keys(this).forEach((index) => {
      const item = this[index];
      const array = this;
      return callback(item, index, array);
    });
  }

  entries() {
  }

  every() {
  }

  some() {
  }

  filter() {
  }

  find() {
  }

  findIndex() {
  }

  keys() {
  }

  map() {
  }

  reduce() {
  }

  reduceRight() {
  }

  values() {
  }
}

global.MyArray = MyArray;
