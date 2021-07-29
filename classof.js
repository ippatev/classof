function classof(o) {
  if(typeof o === null) return "Null";
  if(typeof o === undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1)
}
