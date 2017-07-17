var path = require('path');

//进入到angular目录
var _root = path.resolve(__dirname, '..');

//根据参数返回文件地址
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
