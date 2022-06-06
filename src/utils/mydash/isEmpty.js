function isEmpty(value) {
  if (value === null) return true;
  if (typeof value === 'boolean') return true;
  if (typeof value === 'number') return true;
  if (Array.isArray(value)) {
    return !value.length;
  }
  if (value instanceof Object) {
    if (value.size) {
      return !value.size;
    }
    return !Object.keys(value).length;
  }
  if (typeof value === 'string') {
    return !value.length;
  }
  if (typeof value === 'undefined') {
    return true;
  }
  return null;
}

function isLength(value) {
  return (
    typeof value === 'number'
        && value > -1
        && value % 1 === 0
        && value <= Number.MAX_SAFE_INTEGER
  );
}

function isNil(value) {
  return value === null || value === undefined;
}

function isArrayLike(value) {
  return !isNil(value) && typeof value !== 'function' && isLength(value.length);
}

function isObjectLike(value) {
  return typeof value === 'object' && value !== null;
}

function getTag(value) {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

const objectProto = Object.prototype;
function isPrototype(value) {
  const ctor = value && value.constructor;
  const proto = (typeof ctor === 'function' && ctor.prototype) || objectProto;

  return value === proto;
}

function isArguments(value) {
  return isObjectLike(value) && getTag(value) === '[object Arguments]';
}
