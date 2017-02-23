export default class MyArray extends Array {
  constructor(...args) {
    super();

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
}

global.MyArray = MyArray;
