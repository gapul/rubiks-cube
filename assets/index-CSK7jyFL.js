(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function t(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const qs = "158", jn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Kn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, jl = 0, ha = 1, Kl = 2, tl = 1, nl = 2, ln = 3, wn = 0, bt = 1, $t = 2, yn = 0, pi = 1, fa = 2, da = 3, pa = 4, Zl = 5, Fn = 100, $l = 101, Jl = 102, ma = 103, ga = 104, Ql = 200, ec = 201, tc = 202, nc = 203, Ps = 204, Ds = 205, ic = 206, rc = 207, sc = 208, ac = 209, oc = 210, lc = 211, cc = 212, uc = 213, hc = 214, fc = 0, dc = 1, pc = 2, br = 3, mc = 4, gc = 5, _c = 6, vc = 7, il = 0, xc = 1, Mc = 2, Tn = 0, Sc = 1, Ec = 2, yc = 3, rl = 4, Tc = 5, sl = 300, gi = 301, _i = 302, Us = 303, Is = 304, Dr = 306, Ns = 1e3, Xt = 1001, Fs = 1002, xt = 1003, _a = 1004, Xr = 1005, Ft = 1006, bc = 1007, Bi = 1008, bn = 1009, Ac = 1010, wc = 1011, Ys = 1012, al = 1013, Mn = 1014, Sn = 1015, zi = 1016, ol = 1017, ll = 1018, zn = 1020, Rc = 1021, qt = 1023, Cc = 1024, Lc = 1025, Hn = 1026, vi = 1027, Pc = 1028, cl = 1029, Dc = 1030, ul = 1031, hl = 1033, qr = 33776, Yr = 33777, jr = 33778, Kr = 33779, va = 35840, xa = 35841, Ma = 35842, Sa = 35843, Uc = 36196, Ea = 37492, ya = 37496, Ta = 37808, ba = 37809, Aa = 37810, wa = 37811, Ra = 37812, Ca = 37813, La = 37814, Pa = 37815, Da = 37816, Ua = 37817, Ia = 37818, Na = 37819, Fa = 37820, Oa = 37821, Zr = 36492, Ba = 36494, za = 36495, Ic = 36283, Ha = 36284, Ga = 36285, Va = 36286, fl = 3e3, Gn = 3001, Nc = 3200, Fc = 3201, dl = 0, Oc = 1, zt = "", ut = "srgb", fn = "srgb-linear", js = "display-p3", Ur = "display-p3-linear", Ar = "linear", Ye = "srgb", wr = "rec709", Rr = "p3", Zn = 7680, ka = 519, Bc = 512, zc = 513, Hc = 514, Gc = 515, Vc = 516, kc = 517, Wc = 518, Xc = 519, Wa = 35044, Xa = "300 es", Os = 1035, un = 2e3, Cr = 2001;
class Xn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return false;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const pt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Fi = Math.PI / 180, Bs = 180 / Math.PI;
function Vi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (pt[i & 255] + pt[i >> 8 & 255] + pt[i >> 16 & 255] + pt[i >> 24 & 255] + "-" + pt[e & 255] + pt[e >> 8 & 255] + "-" + pt[e >> 16 & 15 | 64] + pt[e >> 24 & 255] + "-" + pt[t & 63 | 128] + pt[t >> 8 & 255] + "-" + pt[t >> 16 & 255] + pt[t >> 24 & 255] + pt[n & 255] + pt[n >> 8 & 255] + pt[n >> 16 & 255] + pt[n >> 24 & 255]).toLowerCase();
}
function St(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function qc(i, e) {
  return (i % e + e) % e;
}
function $r(i, e, t) {
  return (1 - t) * i + t * e;
}
function qa(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function zs(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ci(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Et(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Yc = { DEG2RAD: Fi };
class Ce {
  constructor(e = 0, t = 0) {
    Ce.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Oe {
  constructor(e, t, n, r, s, o, a, l, c) {
    Oe.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], f = n[7], d = n[2], m = n[5], _ = n[8], x = r[0], p = r[3], h = r[6], y = r[1], v = r[4], R = r[7], A = r[2], L = r[5], b = r[8];
    return s[0] = o * x + a * y + l * A, s[3] = o * p + a * v + l * L, s[6] = o * h + a * R + l * b, s[1] = c * x + u * y + f * A, s[4] = c * p + u * v + f * L, s[7] = c * h + u * R + f * b, s[2] = d * x + m * y + _ * A, s[5] = d * p + m * v + _ * L, s[8] = d * h + m * R + _ * b, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * o * u - t * a * c - n * s * u + n * a * l + r * s * c - r * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], f = u * o - a * c, d = a * l - u * s, m = c * s - o * l, _ = t * f + n * d + r * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / _;
    return e[0] = f * x, e[1] = (r * c - u * n) * x, e[2] = (a * n - r * o) * x, e[3] = d * x, e[4] = (u * t - r * l) * x, e[5] = (r * s - a * t) * x, e[6] = m * x, e[7] = (n * l - c * t) * x, e[8] = (o * t - n * s) * x, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -r * c, r * l, -r * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Jr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Jr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Jr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Jr = new Oe();
function pl(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return true;
  return false;
}
function Lr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function jc() {
  const i = Lr("canvas");
  return i.style.display = "block", i;
}
const Ya = {};
function Oi(i) {
  i in Ya || (Ya[i] = true, console.warn(i));
}
const ja = new Oe().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199), Ka = new Oe().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), qi = { [fn]: { transfer: Ar, primaries: wr, toReference: (i) => i, fromReference: (i) => i }, [ut]: { transfer: Ye, primaries: wr, toReference: (i) => i.convertSRGBToLinear(), fromReference: (i) => i.convertLinearToSRGB() }, [Ur]: { transfer: Ar, primaries: Rr, toReference: (i) => i.applyMatrix3(Ka), fromReference: (i) => i.applyMatrix3(ja) }, [js]: { transfer: Ye, primaries: Rr, toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Ka), fromReference: (i) => i.applyMatrix3(ja).convertLinearToSRGB() } }, Kc = /* @__PURE__ */ new Set([fn, Ur]), We = { enabled: true, _workingColorSpace: fn, get legacyMode() {
  return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
}, set legacyMode(i) {
  console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !i;
}, get workingColorSpace() {
  return this._workingColorSpace;
}, set workingColorSpace(i) {
  if (!Kc.has(i)) throw new Error(`Unsupported working color space, "${i}".`);
  this._workingColorSpace = i;
}, convert: function(i, e, t) {
  if (this.enabled === false || e === t || !e || !t) return i;
  const n = qi[e].toReference, r = qi[t].fromReference;
  return r(n(i));
}, fromWorkingColorSpace: function(i, e) {
  return this.convert(i, this._workingColorSpace, e);
}, toWorkingColorSpace: function(i, e) {
  return this.convert(i, e, this._workingColorSpace);
}, getPrimaries: function(i) {
  return qi[i].primaries;
}, getTransfer: function(i) {
  return i === zt ? Ar : qi[i].transfer;
} };
function mi(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Qr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let $n;
class ml {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      $n === void 0 && ($n = Lr("canvas")), $n.width = e.width, $n.height = e.height;
      const n = $n.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = $n;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Lr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = mi(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(mi(t[n] / 255) * 255) : t[n] = mi(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Zc = 0;
class gl {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Zc++ }), this.uuid = Vi(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++) r[o].isDataTexture ? s.push(es(r[o].image)) : s.push(es(r[o]));
      } else s = es(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function es(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? ml.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let $c = 0;
class Dt extends Xn {
  constructor(e = Dt.DEFAULT_IMAGE, t = Dt.DEFAULT_MAPPING, n = Xt, r = Xt, s = Ft, o = Bi, a = qt, l = bn, c = Dt.DEFAULT_ANISOTROPY, u = zt) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: $c++ }), this.uuid = Vi(), this.name = "", this.source = new gl(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Ce(0, 0), this.repeat = new Ce(1, 1), this.center = new Ce(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Oe(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Gn ? ut : zt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== sl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Ns:
        e.x = e.x - Math.floor(e.x);
        break;
      case Xt:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Fs:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Ns:
        e.y = e.y - Math.floor(e.y);
        break;
      case Xt:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Fs:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  get encoding() {
    return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ut ? Gn : fl;
  }
  set encoding(e) {
    Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Gn ? ut : zt;
  }
}
Dt.DEFAULT_IMAGE = null;
Dt.DEFAULT_MAPPING = sl;
Dt.DEFAULT_ANISOTROPY = 1;
class ht {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    ht.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], u = l[4], f = l[8], d = l[1], m = l[5], _ = l[9], x = l[2], p = l[6], h = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(f - x) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(f + x) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, R = (m + 1) / 2, A = (h + 1) / 2, L = (u + d) / 4, b = (f + x) / 4, G = (_ + p) / 4;
      return v > R && v > A ? v < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), r = L / n, s = b / n) : R > A ? R < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(R), n = L / r, s = G / r) : A < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(A), n = b / s, r = G / s), this.set(n, r, s, t), this;
    }
    let y = Math.sqrt((p - _) * (p - _) + (f - x) * (f - x) + (d - u) * (d - u));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - _) / y, this.y = (f - x) / y, this.z = (d - u) / y, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Jc extends Xn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new ht(0, 0, e, t), this.scissorTest = false, this.viewport = new ht(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Gn ? ut : zt), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ft, depthBuffer: true, stencilBuffer: false, depthTexture: null, samples: 0 }, n), this.texture = new Dt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = true;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new gl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Vn extends Jc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class _l extends Dt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = xt, this.minFilter = xt, this.wrapR = Xt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Qc extends Dt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = xt, this.minFilter = xt, this.wrapR = Xt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class kn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], f = n[r + 3];
    const d = s[o + 0], m = s[o + 1], _ = s[o + 2], x = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = _, e[t + 3] = x;
      return;
    }
    if (f !== x || l !== d || c !== m || u !== _) {
      let p = 1 - a;
      const h = l * d + c * m + u * _ + f * x, y = h >= 0 ? 1 : -1, v = 1 - h * h;
      if (v > Number.EPSILON) {
        const A = Math.sqrt(v), L = Math.atan2(A, h * y);
        p = Math.sin(p * L) / A, a = Math.sin(a * L) / A;
      }
      const R = a * y;
      if (l = l * p + d * R, c = c * p + m * R, u = u * p + _ * R, f = f * p + x * R, p === 1 - a) {
        const A = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        l *= A, c *= A, u *= A, f *= A;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], f = s[o], d = s[o + 1], m = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + u * f + l * m - c * d, e[t + 1] = l * _ + u * d + c * f - a * m, e[t + 2] = c * _ + u * m + a * d - l * f, e[t + 3] = u * _ - a * f - l * d - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(r / 2), f = a(s / 2), d = l(n / 2), m = l(r / 2), _ = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * u * f + c * m * _, this._y = c * m * f - d * u * _, this._z = c * u * _ + d * m * f, this._w = c * u * f - d * m * _;
        break;
      case "YXZ":
        this._x = d * u * f + c * m * _, this._y = c * m * f - d * u * _, this._z = c * u * _ - d * m * f, this._w = c * u * f + d * m * _;
        break;
      case "ZXY":
        this._x = d * u * f - c * m * _, this._y = c * m * f + d * u * _, this._z = c * u * _ + d * m * f, this._w = c * u * f - d * m * _;
        break;
      case "ZYX":
        this._x = d * u * f - c * m * _, this._y = c * m * f + d * u * _, this._z = c * u * _ - d * m * f, this._w = c * u * f + d * m * _;
        break;
      case "YZX":
        this._x = d * u * f + c * m * _, this._y = c * m * f + d * u * _, this._z = c * u * _ - d * m * f, this._w = c * u * f - d * m * _;
        break;
      case "XZY":
        this._x = d * u * f - c * m * _, this._y = c * m * f - d * u * _, this._z = c * u * _ + d * m * f, this._w = c * u * f + d * m * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== false && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], f = t[10], d = n + a + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > f) {
      const m = 2 * Math.sqrt(1 + n - a - f);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > f) {
      const m = 2 * Math.sqrt(1 + a - n - f);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(St(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + o * a + r * c - s * l, this._y = r * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - r * a, this._w = o * u - n * a - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), f = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = o * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(t * Math.cos(r), n * Math.sin(s), n * Math.cos(s), t * Math.sin(r));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class U {
  constructor(e = 0, t = 0, n = 0) {
    U.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Za.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Za.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), u = 2 * (a * t - s * r), f = 2 * (s * n - o * t);
    return this.x = t + l * c + o * f - a * u, this.y = n + l * u + a * c - s * f, this.z = r + l * f + s * u - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return ts.copy(this).projectOnVector(e), this.sub(ts);
  }
  reflect(e) {
    return this.sub(ts.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ts = new U(), Za = new kn();
class ki {
  constructor(e = new U(1 / 0, 1 / 0, 1 / 0), t = new U(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Vt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Vt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Vt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = s.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, Vt) : Vt.fromBufferAttribute(s, o), Vt.applyMatrix4(e.matrixWorld), this.expandByPoint(Vt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Yi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Yi.copy(n.boundingBox)), Yi.applyMatrix4(e.matrixWorld), this.union(Yi);
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Vt), Vt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Li), ji.subVectors(this.max, Li), Jn.subVectors(e.a, Li), Qn.subVectors(e.b, Li), ei.subVectors(e.c, Li), dn.subVectors(Qn, Jn), pn.subVectors(ei, Qn), Ln.subVectors(Jn, ei);
    let t = [0, -dn.z, dn.y, 0, -pn.z, pn.y, 0, -Ln.z, Ln.y, dn.z, 0, -dn.x, pn.z, 0, -pn.x, Ln.z, 0, -Ln.x, -dn.y, dn.x, 0, -pn.y, pn.x, 0, -Ln.y, Ln.x, 0];
    return !ns(t, Jn, Qn, ei, ji) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ns(t, Jn, Qn, ei, ji)) ? false : (Ki.crossVectors(dn, pn), t = [Ki.x, Ki.y, Ki.z], ns(t, Jn, Qn, ei, ji));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Vt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Vt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(nn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const nn = [new U(), new U(), new U(), new U(), new U(), new U(), new U(), new U()], Vt = new U(), Yi = new ki(), Jn = new U(), Qn = new U(), ei = new U(), dn = new U(), pn = new U(), Ln = new U(), Li = new U(), ji = new U(), Ki = new U(), Pn = new U();
function ns(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    Pn.fromArray(i, s);
    const a = r.x * Math.abs(Pn.x) + r.y * Math.abs(Pn.y) + r.z * Math.abs(Pn.z), l = e.dot(Pn), c = t.dot(Pn), u = n.dot(Pn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return false;
  }
  return true;
}
const eu = new ki(), Pi = new U(), is = new U();
class Ir {
  constructor(e = new U(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : eu.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++) r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    Pi.subVectors(e, this.center);
    const t = Pi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Pi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (is.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Pi.copy(e.center).add(is)), this.expandByPoint(Pi.copy(e.center).sub(is))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const rn = new U(), rs = new U(), Zi = new U(), mn = new U(), ss = new U(), $i = new U(), as = new U();
class Nr {
  constructor(e = new U(), t = new U(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, rn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = rn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (rn.copy(this.origin).addScaledVector(this.direction, t), rn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    rs.copy(e).add(t).multiplyScalar(0.5), Zi.copy(t).sub(e).normalize(), mn.copy(this.origin).sub(rs);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Zi), a = mn.dot(this.direction), l = -mn.dot(Zi), c = mn.lengthSq(), u = Math.abs(1 - o * o);
    let f, d, m, _;
    if (u > 0) if (f = o * l - a, d = o * a - l, _ = s * u, f >= 0) if (d >= -_) if (d <= _) {
      const x = 1 / u;
      f *= x, d *= x, m = f * (f + o * d + 2 * a) + d * (o * f + d + 2 * l) + c;
    } else d = s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
    else d = -s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
    else d <= -_ ? (f = Math.max(0, -(-o * s + a)), d = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c) : d <= _ ? (f = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (f = Math.max(0, -(o * s + a)), d = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c);
    else d = o > 0 ? -s : s, f = Math.max(0, -(o * d + a)), m = -f * f + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(rs).addScaledVector(Zi, d), m;
  }
  intersectSphere(e, t) {
    rn.subVectors(e.center, this.origin);
    const n = rn.dot(this.direction), r = rn.dot(rn) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - d.z) * f, l = (e.max.z - d.z) * f) : (a = (e.max.z - d.z) * f, l = (e.min.z - d.z) * f), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, rn) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    ss.subVectors(t, e), $i.subVectors(n, e), as.crossVectors(ss, $i);
    let o = this.direction.dot(as), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    mn.subVectors(this.origin, e);
    const l = a * this.direction.dot($i.crossVectors(mn, $i));
    if (l < 0) return null;
    const c = a * this.direction.dot(ss.cross(mn));
    if (c < 0 || l + c > o) return null;
    const u = -a * mn.dot(as);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class it {
  constructor(e, t, n, r, s, o, a, l, c, u, f, d, m, _, x, p) {
    it.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, u, f, d, m, _, x, p);
  }
  set(e, t, n, r, s, o, a, l, c, u, f, d, m, _, x, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = l, h[2] = c, h[6] = u, h[10] = f, h[14] = d, h[3] = m, h[7] = _, h[11] = x, h[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new it().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / ti.setFromMatrixColumn(e, 0).length(), s = 1 / ti.setFromMatrixColumn(e, 1).length(), o = 1 / ti.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * u, m = o * f, _ = a * u, x = a * f;
      t[0] = l * u, t[4] = -l * f, t[8] = c, t[1] = m + _ * c, t[5] = d - x * c, t[9] = -a * l, t[2] = x - d * c, t[6] = _ + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * u, m = l * f, _ = c * u, x = c * f;
      t[0] = d + x * a, t[4] = _ * a - m, t[8] = o * c, t[1] = o * f, t[5] = o * u, t[9] = -a, t[2] = m * a - _, t[6] = x + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * u, m = l * f, _ = c * u, x = c * f;
      t[0] = d - x * a, t[4] = -o * f, t[8] = _ + m * a, t[1] = m + _ * a, t[5] = o * u, t[9] = x - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * u, m = o * f, _ = a * u, x = a * f;
      t[0] = l * u, t[4] = _ * c - m, t[8] = d * c + x, t[1] = l * f, t[5] = x * c + d, t[9] = m * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, m = o * c, _ = a * l, x = a * c;
      t[0] = l * u, t[4] = x - d * f, t[8] = _ * f + m, t[1] = f, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * f + _, t[10] = d - x * f;
    } else if (e.order === "XZY") {
      const d = o * l, m = o * c, _ = a * l, x = a * c;
      t[0] = l * u, t[4] = -f, t[8] = c * u, t[1] = d * f + x, t[5] = o * u, t[9] = m * f - _, t[2] = _ * f - m, t[6] = a * u, t[10] = x * f + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(tu, e, nu);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return Rt.subVectors(e, t), Rt.lengthSq() === 0 && (Rt.z = 1), Rt.normalize(), gn.crossVectors(n, Rt), gn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Rt.x += 1e-4 : Rt.z += 1e-4, Rt.normalize(), gn.crossVectors(n, Rt)), gn.normalize(), Ji.crossVectors(Rt, gn), r[0] = gn.x, r[4] = Ji.x, r[8] = Rt.x, r[1] = gn.y, r[5] = Ji.y, r[9] = Rt.y, r[2] = gn.z, r[6] = Ji.z, r[10] = Rt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], f = n[5], d = n[9], m = n[13], _ = n[2], x = n[6], p = n[10], h = n[14], y = n[3], v = n[7], R = n[11], A = n[15], L = r[0], b = r[4], G = r[8], S = r[12], T = r[1], k = r[5], J = r[9], Q = r[13], P = r[2], H = r[6], j = r[10], X = r[14], ee = r[3], q = r[7], K = r[11], D = r[15];
    return s[0] = o * L + a * T + l * P + c * ee, s[4] = o * b + a * k + l * H + c * q, s[8] = o * G + a * J + l * j + c * K, s[12] = o * S + a * Q + l * X + c * D, s[1] = u * L + f * T + d * P + m * ee, s[5] = u * b + f * k + d * H + m * q, s[9] = u * G + f * J + d * j + m * K, s[13] = u * S + f * Q + d * X + m * D, s[2] = _ * L + x * T + p * P + h * ee, s[6] = _ * b + x * k + p * H + h * q, s[10] = _ * G + x * J + p * j + h * K, s[14] = _ * S + x * Q + p * X + h * D, s[3] = y * L + v * T + R * P + A * ee, s[7] = y * b + v * k + R * H + A * q, s[11] = y * G + v * J + R * j + A * K, s[15] = y * S + v * Q + R * X + A * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], f = e[6], d = e[10], m = e[14], _ = e[3], x = e[7], p = e[11], h = e[15];
    return _ * (+s * l * f - r * c * f - s * a * d + n * c * d + r * a * m - n * l * m) + x * (+t * l * m - t * c * d + s * o * d - r * o * m + r * c * u - s * l * u) + p * (+t * c * f - t * a * m - s * o * f + n * o * m + s * a * u - n * c * u) + h * (-r * a * u - t * l * f + t * a * d + r * o * f - n * o * d + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], f = e[9], d = e[10], m = e[11], _ = e[12], x = e[13], p = e[14], h = e[15], y = f * p * c - x * d * c + x * l * m - a * p * m - f * l * h + a * d * h, v = _ * d * c - u * p * c - _ * l * m + o * p * m + u * l * h - o * d * h, R = u * x * c - _ * f * c + _ * a * m - o * x * m - u * a * h + o * f * h, A = _ * f * l - u * x * l - _ * a * d + o * x * d + u * a * p - o * f * p, L = t * y + n * v + r * R + s * A;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / L;
    return e[0] = y * b, e[1] = (x * d * s - f * p * s - x * r * m + n * p * m + f * r * h - n * d * h) * b, e[2] = (a * p * s - x * l * s + x * r * c - n * p * c - a * r * h + n * l * h) * b, e[3] = (f * l * s - a * d * s - f * r * c + n * d * c + a * r * m - n * l * m) * b, e[4] = v * b, e[5] = (u * p * s - _ * d * s + _ * r * m - t * p * m - u * r * h + t * d * h) * b, e[6] = (_ * l * s - o * p * s - _ * r * c + t * p * c + o * r * h - t * l * h) * b, e[7] = (o * d * s - u * l * s + u * r * c - t * d * c - o * r * m + t * l * m) * b, e[8] = R * b, e[9] = (_ * f * s - u * x * s - _ * n * m + t * x * m + u * n * h - t * f * h) * b, e[10] = (o * x * s - _ * a * s + _ * n * c - t * x * c - o * n * h + t * a * h) * b, e[11] = (u * a * s - o * f * s - u * n * c + t * f * c + o * n * m - t * a * m) * b, e[12] = A * b, e[13] = (u * x * r - _ * f * r + _ * n * d - t * x * d - u * n * p + t * f * p) * b, e[14] = (_ * a * r - o * x * r - _ * n * l + t * x * l + o * n * p - t * a * p) * b, e[15] = (o * f * r - u * a * r + u * n * l - t * f * l - o * n * d + t * a * d) * b, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, u = s * a;
    return this.set(c * o + n, c * a - r * l, c * l + r * a, 0, c * a + r * l, u * a + n, u * l - r * o, 0, c * l - r * a, u * l + r * o, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, f = a + a, d = s * c, m = s * u, _ = s * f, x = o * u, p = o * f, h = a * f, y = l * c, v = l * u, R = l * f, A = n.x, L = n.y, b = n.z;
    return r[0] = (1 - (x + h)) * A, r[1] = (m + R) * A, r[2] = (_ - v) * A, r[3] = 0, r[4] = (m - R) * L, r[5] = (1 - (d + h)) * L, r[6] = (p + y) * L, r[7] = 0, r[8] = (_ + v) * b, r[9] = (p - y) * b, r[10] = (1 - (d + x)) * b, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = ti.set(r[0], r[1], r[2]).length();
    const o = ti.set(r[4], r[5], r[6]).length(), a = ti.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], kt.copy(this);
    const c = 1 / s, u = 1 / o, f = 1 / a;
    return kt.elements[0] *= c, kt.elements[1] *= c, kt.elements[2] *= c, kt.elements[4] *= u, kt.elements[5] *= u, kt.elements[6] *= u, kt.elements[8] *= f, kt.elements[9] *= f, kt.elements[10] *= f, t.setFromRotationMatrix(kt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o, a = un) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), f = (t + e) / (t - e), d = (n + r) / (n - r);
    let m, _;
    if (a === un) m = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === Cr) m = -o / (o - s), _ = -o * s / (o - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o, a = un) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), f = 1 / (o - s), d = (t + e) * c, m = (n + r) * u;
    let _, x;
    if (a === un) _ = (o + s) * f, x = -2 * f;
    else if (a === Cr) _ = s * f, x = -1 * f;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const ti = new U(), kt = new it(), tu = new U(0, 0, 0), nu = new U(1, 1, 1), gn = new U(), Ji = new U(), Rt = new U(), $a = new it(), Ja = new kn();
class Fr {
  constructor(e = 0, t = 0, n = 0, r = Fr.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], u = r[9], f = r[2], d = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(St(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-St(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(St(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-St(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(St(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-St(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return $a.makeRotationFromQuaternion(e), this.setFromRotationMatrix($a, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ja.setFromEuler(this), this.setFromQuaternion(Ja, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Fr.DEFAULT_ORDER = "XYZ";
class Ks {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let iu = 0;
const Qa = new U(), ni = new kn(), sn = new it(), Qi = new U(), Di = new U(), ru = new U(), su = new kn(), eo = new U(1, 0, 0), to = new U(0, 1, 0), no = new U(0, 0, 1), au = { type: "added" }, ou = { type: "removed" };
class ft extends Xn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: iu++ }), this.uuid = Vi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ft.DEFAULT_UP.clone();
    const e = new U(), t = new Fr(), n = new kn(), r = new U(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new it() }, normalMatrix: { value: new Oe() } }), this.matrix = new it(), this.matrixWorld = new it(), this.matrixAutoUpdate = ft.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.matrixWorldAutoUpdate = ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Ks(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ni.setFromAxisAngle(e, t), this.quaternion.multiply(ni), this;
  }
  rotateOnWorldAxis(e, t) {
    return ni.setFromAxisAngle(e, t), this.quaternion.premultiply(ni), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(eo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(to, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(no, e);
  }
  translateOnAxis(e, t) {
    return Qa.copy(e).applyQuaternion(this.quaternion), this.position.add(Qa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(eo, e);
  }
  translateY(e) {
    return this.translateOnAxis(to, e);
  }
  translateZ(e) {
    return this.translateOnAxis(no, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(sn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Qi.copy(e) : Qi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(true, false), Di.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? sn.lookAt(Di, Qi, this.up) : sn.lookAt(Qi, Di, this.up), this.quaternion.setFromRotationMatrix(sn), r && (sn.extractRotation(r.matrixWorld), ni.setFromRotationMatrix(sn), this.quaternion.premultiply(ni.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(au)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ou)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), sn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), sn.multiply(e.parent.matrixWorld)), e.applyMatrix4(sn), this.add(e), e.updateWorldMatrix(false, true), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Di, e, ru), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Di, su, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === true || e === true) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.matrixWorldAutoUpdate === true && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === true) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === true && a.updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === true && (r.castShadow = true), this.receiveShadow === true && (r.receiveShadow = true), this.visible === false && (r.visible = false), this.frustumCulled === false && (r.frustumCulled = false), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === false && (r.matrixAutoUpdate = false), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const f = l[c];
          s(e.shapes, f);
        }
        else s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(s(e.materials, this.material[l]));
      r.material = a;
    } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++) r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), f = o(e.shapes), d = o(e.skeletons), m = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      this.add(r.clone());
    }
    return this;
  }
}
ft.DEFAULT_UP = new U(0, 1, 0);
ft.DEFAULT_MATRIX_AUTO_UPDATE = true;
ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Wt = new U(), an = new U(), os = new U(), on = new U(), ii = new U(), ri = new U(), io = new U(), ls = new U(), cs = new U(), us = new U();
let er = false;
class Ot {
  constructor(e = new U(), t = new U(), n = new U()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Wt.subVectors(e, t), r.cross(Wt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Wt.subVectors(r, t), an.subVectors(n, t), os.subVectors(e, t);
    const o = Wt.dot(Wt), a = Wt.dot(an), l = Wt.dot(os), c = an.dot(an), u = an.dot(os), f = o * c - a * a;
    if (f === 0) return s.set(-2, -1, -1);
    const d = 1 / f, m = (c * l - a * u) * d, _ = (o * u - a * l) * d;
    return s.set(1 - m - _, _, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, on), on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return er === false && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), er = true), this.getInterpolation(e, t, n, r, s, o, a, l);
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, on), l.setScalar(0), l.addScaledVector(s, on.x), l.addScaledVector(o, on.y), l.addScaledVector(a, on.z), l;
  }
  static isFrontFacing(e, t, n, r) {
    return Wt.subVectors(n, t), an.subVectors(e, t), Wt.cross(an).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Wt.subVectors(this.c, this.b), an.subVectors(this.a, this.b), Wt.cross(an).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ot.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ot.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return er === false && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), er = true), Ot.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return Ot.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Ot.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ot.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    ii.subVectors(r, n), ri.subVectors(s, n), ls.subVectors(e, n);
    const l = ii.dot(ls), c = ri.dot(ls);
    if (l <= 0 && c <= 0) return t.copy(n);
    cs.subVectors(e, r);
    const u = ii.dot(cs), f = ri.dot(cs);
    if (u >= 0 && f <= u) return t.copy(r);
    const d = l * f - u * c;
    if (d <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(n).addScaledVector(ii, o);
    us.subVectors(e, s);
    const m = ii.dot(us), _ = ri.dot(us);
    if (_ >= 0 && m <= _) return t.copy(s);
    const x = m * c - l * _;
    if (x <= 0 && c >= 0 && _ <= 0) return a = c / (c - _), t.copy(n).addScaledVector(ri, a);
    const p = u * _ - m * f;
    if (p <= 0 && f - u >= 0 && m - _ >= 0) return io.subVectors(s, r), a = (f - u) / (f - u + (m - _)), t.copy(r).addScaledVector(io, a);
    const h = 1 / (p + x + d);
    return o = x * h, a = d * h, t.copy(n).addScaledVector(ii, o).addScaledVector(ri, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const vl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, _n = { h: 0, s: 0, l: 0 }, tr = { h: 0, s: 0, l: 0 };
function hs(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ve {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = ut) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (e = qc(e, 1), t = St(t, 0, 1), n = St(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = hs(o, s, e + 1 / 3), this.g = hs(o, s, e), this.b = hs(o, s, e - 1 / 3);
    }
    return We.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = ut) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = ut) {
    const n = vl[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = mi(e.r), this.g = mi(e.g), this.b = mi(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Qr(e.r), this.g = Qr(e.g), this.b = Qr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ut) {
    return We.fromWorkingColorSpace(mt.copy(this), e), Math.round(St(mt.r * 255, 0, 255)) * 65536 + Math.round(St(mt.g * 255, 0, 255)) * 256 + Math.round(St(mt.b * 255, 0, 255));
  }
  getHexString(e = ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(mt.copy(this), t);
    const n = mt.r, r = mt.g, s = mt.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const f = o - a;
      switch (c = u <= 0.5 ? f / (o + a) : f / (2 - o - a), o) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.fromWorkingColorSpace(mt.copy(this), t), e.r = mt.r, e.g = mt.g, e.b = mt.b, e;
  }
  getStyle(e = ut) {
    We.fromWorkingColorSpace(mt.copy(this), e);
    const t = mt.r, n = mt.g, r = mt.b;
    return e !== ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(_n), this.setHSL(_n.h + e, _n.s + t, _n.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(_n), e.getHSL(tr);
    const n = $r(_n.h, tr.h, t), r = $r(_n.s, tr.s, t), s = $r(_n.l, tr.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const mt = new Ve();
Ve.NAMES = vl;
let lu = 0;
class Ai extends Xn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: lu++ }), this.uuid = Vi(), this.name = "", this.type = "Material", this.blending = pi, this.side = wn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Ps, this.blendDst = Ds, this.blendEquation = Fn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ve(0, 0, 0), this.blendAlpha = 0, this.depthFunc = br, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = ka, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Zn, this.stencilZFail = Zn, this.stencilZPass = Zn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== pi && (n.blending = this.blending), this.side !== wn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Ps && (n.blendSrc = this.blendSrc), this.blendDst !== Ds && (n.blendDst = this.blendDst), this.blendEquation !== Fn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== br && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ka && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Zn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Zn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Zn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class xl extends Ai {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = il, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const nt = new U(), nr = new Ce();
class Jt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Wa, this.updateRange = { offset: 0, count: -1 }, this.gpuType = Sn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) nr.fromBufferAttribute(this, t), nr.applyMatrix3(e), this.setXY(t, nr.x, nr.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) nt.fromBufferAttribute(this, t), nt.applyMatrix3(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) nt.fromBufferAttribute(this, t), nt.applyMatrix4(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) nt.fromBufferAttribute(this, t), nt.applyNormalMatrix(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) nt.fromBufferAttribute(this, t), nt.transformDirection(e), this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Ci(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ci(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ci(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ci(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ci(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array), r = Et(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Et(t, this.array), n = Et(n, this.array), r = Et(r, this.array), s = Et(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Wa && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Ml extends Jt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Sl extends Jt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ut extends Jt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let cu = 0;
const Nt = new it(), fs = new ft(), si = new U(), Ct = new ki(), Ui = new ki(), lt = new U();
class en extends Xn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: cu++ }), this.uuid = Vi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (pl(e) ? Sl : Ml)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Oe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return fs.lookAt(e), fs.updateMatrix(), this.applyMatrix4(fs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(si).negate(), this.translate(si.x, si.y, si.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Ut(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ki());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new U(-1 / 0, -1 / 0, -1 / 0), new U(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) {
        const s = t[n];
        Ct.setFromBufferAttribute(s), this.morphTargetsRelative ? (lt.addVectors(this.boundingBox.min, Ct.min), this.boundingBox.expandByPoint(lt), lt.addVectors(this.boundingBox.max, Ct.max), this.boundingBox.expandByPoint(lt)) : (this.boundingBox.expandByPoint(Ct.min), this.boundingBox.expandByPoint(Ct.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ir());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ct.setFromBufferAttribute(e), t) for (let s = 0, o = t.length; s < o; s++) {
        const a = t[s];
        Ui.setFromBufferAttribute(a), this.morphTargetsRelative ? (lt.addVectors(Ct.min, Ui.min), Ct.expandByPoint(lt), lt.addVectors(Ct.max, Ui.max), Ct.expandByPoint(lt)) : (Ct.expandByPoint(Ui.min), Ct.expandByPoint(Ui.max));
      }
      Ct.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++) lt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(lt));
      if (t) for (let s = 0, o = t.length; s < o; s++) {
        const a = t[s], l = this.morphTargetsRelative;
        for (let c = 0, u = a.count; c < u; c++) lt.fromBufferAttribute(a, c), l && (si.fromBufferAttribute(e, c), lt.add(si)), r = Math.max(r, n.distanceToSquared(lt));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Jt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let T = 0; T < a; T++) c[T] = new U(), u[T] = new U();
    const f = new U(), d = new U(), m = new U(), _ = new Ce(), x = new Ce(), p = new Ce(), h = new U(), y = new U();
    function v(T, k, J) {
      f.fromArray(r, T * 3), d.fromArray(r, k * 3), m.fromArray(r, J * 3), _.fromArray(o, T * 2), x.fromArray(o, k * 2), p.fromArray(o, J * 2), d.sub(f), m.sub(f), x.sub(_), p.sub(_);
      const Q = 1 / (x.x * p.y - p.x * x.y);
      isFinite(Q) && (h.copy(d).multiplyScalar(p.y).addScaledVector(m, -x.y).multiplyScalar(Q), y.copy(m).multiplyScalar(x.x).addScaledVector(d, -p.x).multiplyScalar(Q), c[T].add(h), c[k].add(h), c[J].add(h), u[T].add(y), u[k].add(y), u[J].add(y));
    }
    let R = this.groups;
    R.length === 0 && (R = [{ start: 0, count: n.length }]);
    for (let T = 0, k = R.length; T < k; ++T) {
      const J = R[T], Q = J.start, P = J.count;
      for (let H = Q, j = Q + P; H < j; H += 3) v(n[H + 0], n[H + 1], n[H + 2]);
    }
    const A = new U(), L = new U(), b = new U(), G = new U();
    function S(T) {
      b.fromArray(s, T * 3), G.copy(b);
      const k = c[T];
      A.copy(k), A.sub(b.multiplyScalar(b.dot(k))).normalize(), L.crossVectors(G, k);
      const Q = L.dot(u[T]) < 0 ? -1 : 1;
      l[T * 4] = A.x, l[T * 4 + 1] = A.y, l[T * 4 + 2] = A.z, l[T * 4 + 3] = Q;
    }
    for (let T = 0, k = R.length; T < k; ++T) {
      const J = R[T], Q = J.start, P = J.count;
      for (let H = Q, j = Q + P; H < j; H += 3) S(n[H + 0]), S(n[H + 1]), S(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Jt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
      const r = new U(), s = new U(), o = new U(), a = new U(), l = new U(), c = new U(), u = new U(), f = new U();
      if (e) for (let d = 0, m = e.count; d < m; d += 3) {
        const _ = e.getX(d + 0), x = e.getX(d + 1), p = e.getX(d + 2);
        r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, x), o.fromBufferAttribute(t, p), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let d = 0, m = t.count; d < m; d += 3) r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), u.subVectors(o, s), f.subVectors(r, s), u.cross(f), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) lt.fromBufferAttribute(e, t), lt.normalize(), e.setXYZ(t, lt.x, lt.y, lt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, f = a.normalized, d = new c.constructor(l.length * u);
      let m = 0, _ = 0;
      for (let x = 0, p = l.length; x < p; x++) {
        a.isInterleavedBufferAttribute ? m = l[x] * a.data.stride + a.offset : m = l[x] * u;
        for (let h = 0; h < u; h++) d[_++] = c[m++];
      }
      return new Jt(d, u, f);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new en(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u], m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (r[l] = u, s = true);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], f = s[c];
      for (let d = 0, m = f.length; d < m; d++) u.push(f[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const f = o[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ro = new it(), Dn = new Nr(), ir = new Ir(), so = new U(), ai = new U(), oi = new U(), li = new U(), ds = new U(), rr = new U(), sr = new Ce(), ar = new Ce(), or = new Ce(), ao = new U(), oo = new U(), lo = new U(), lr = new U(), cr = new U();
class Yt extends ft {
  constructor(e = new en(), t = new xl()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      rr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l], f = s[l];
        u !== 0 && (ds.fromBufferAttribute(f, e), o ? rr.addScaledVector(ds, u) : rr.addScaledVector(ds.sub(t), u));
      }
      t.add(rr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ir.copy(n.boundingSphere), ir.applyMatrix4(s), Dn.copy(e.ray).recast(e.near), !(ir.containsPoint(Dn.origin) === false && (Dn.intersectSphere(ir, so) === null || Dn.origin.distanceToSquared(so) > (e.far - e.near) ** 2)) && (ro.copy(s).invert(), Dn.copy(e.ray).applyMatrix4(ro), !(n.boundingBox !== null && Dn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Dn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, f = s.attributes.normal, d = s.groups, m = s.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let _ = 0, x = d.length; _ < x; _++) {
      const p = d[_], h = o[p.materialIndex], y = Math.max(p.start, m.start), v = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
      for (let R = y, A = v; R < A; R += 3) {
        const L = a.getX(R), b = a.getX(R + 1), G = a.getX(R + 2);
        r = ur(this, h, e, n, c, u, f, L, b, G), r && (r.faceIndex = Math.floor(R / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const _ = Math.max(0, m.start), x = Math.min(a.count, m.start + m.count);
      for (let p = _, h = x; p < h; p += 3) {
        const y = a.getX(p), v = a.getX(p + 1), R = a.getX(p + 2);
        r = ur(this, o, e, n, c, u, f, y, v, R), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let _ = 0, x = d.length; _ < x; _++) {
      const p = d[_], h = o[p.materialIndex], y = Math.max(p.start, m.start), v = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let R = y, A = v; R < A; R += 3) {
        const L = R, b = R + 1, G = R + 2;
        r = ur(this, h, e, n, c, u, f, L, b, G), r && (r.faceIndex = Math.floor(R / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const _ = Math.max(0, m.start), x = Math.min(l.count, m.start + m.count);
      for (let p = _, h = x; p < h; p += 3) {
        const y = p, v = p + 1, R = p + 2;
        r = ur(this, o, e, n, c, u, f, y, v, R), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
  }
}
function uu(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === bt ? l = n.intersectTriangle(o, s, r, true, a) : l = n.intersectTriangle(r, s, o, e.side === wn, a), l === null) return null;
  cr.copy(a), cr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(cr);
  return c < t.near || c > t.far ? null : { distance: c, point: cr.clone(), object: i };
}
function ur(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, ai), i.getVertexPosition(l, oi), i.getVertexPosition(c, li);
  const u = uu(i, e, t, n, ai, oi, li, lr);
  if (u) {
    r && (sr.fromBufferAttribute(r, a), ar.fromBufferAttribute(r, l), or.fromBufferAttribute(r, c), u.uv = Ot.getInterpolation(lr, ai, oi, li, sr, ar, or, new Ce())), s && (sr.fromBufferAttribute(s, a), ar.fromBufferAttribute(s, l), or.fromBufferAttribute(s, c), u.uv1 = Ot.getInterpolation(lr, ai, oi, li, sr, ar, or, new Ce()), u.uv2 = u.uv1), o && (ao.fromBufferAttribute(o, a), oo.fromBufferAttribute(o, l), lo.fromBufferAttribute(o, c), u.normal = Ot.getInterpolation(lr, ai, oi, li, ao, oo, lo, new U()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a, b: l, c, normal: new U(), materialIndex: 0 };
    Ot.getNormal(ai, oi, li, f.normal), u.face = f;
  }
  return u;
}
class qn extends en {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s, depthSegments: o };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], u = [], f = [];
    let d = 0, m = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, o, 2), _("x", "z", "y", 1, -1, e, n, -t, r, o, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new Ut(c, 3)), this.setAttribute("normal", new Ut(u, 3)), this.setAttribute("uv", new Ut(f, 2));
    function _(x, p, h, y, v, R, A, L, b, G, S) {
      const T = R / b, k = A / G, J = R / 2, Q = A / 2, P = L / 2, H = b + 1, j = G + 1;
      let X = 0, ee = 0;
      const q = new U();
      for (let K = 0; K < j; K++) {
        const D = K * k - Q;
        for (let W = 0; W < H; W++) {
          const ce = W * T - J;
          q[x] = ce * y, q[p] = D * v, q[h] = P, c.push(q.x, q.y, q.z), q[x] = 0, q[p] = 0, q[h] = L > 0 ? 1 : -1, u.push(q.x, q.y, q.z), f.push(W / b), f.push(1 - K / G), X += 1;
        }
      }
      for (let K = 0; K < G; K++) for (let D = 0; D < b; D++) {
        const W = d + D + H * K, ce = d + D + H * (K + 1), ue = d + (D + 1) + H * (K + 1), de = d + (D + 1) + H * K;
        l.push(W, ce, de), l.push(ce, ue, de), ee += 6;
      }
      a.addGroup(m, ee, S), m += ee, d += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new qn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function xi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function vt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = xi(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function hu(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function El(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : We.workingColorSpace;
}
const fu = { clone: xi, merge: vt };
var du = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, pu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wn extends Ai {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = du, this.fragmentShader = pu, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = xi(e.uniforms), this.uniformsGroups = hu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[r] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[r] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[r] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[r] = { type: "m4", value: o.toArray() } : t.uniforms[r] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) this.extensions[r] === true && (n[r] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class yl extends ft {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new it(), this.projectionMatrix = new it(), this.projectionMatrixInverse = new it(), this.coordinateSystem = un;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Bt extends yl {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Bs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Fi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Bs * 2 * Math.atan(Math.tan(Fi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Fi * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * r / l, t -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ci = -90, ui = 1;
class mu extends ft {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Bt(ci, ui, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Bt(ci, ui, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Bt(ci, ui, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Bt(ci, ui, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Bt(ci, ui, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Bt(ci, ui, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === un) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Cr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children, f = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = false;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(f, d, m), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Tl extends Dt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : gi, super(e, t, n, r, s, o, a, l, c, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class gu extends Vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Gn ? ut : zt), this.texture = new Tl(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ft;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new qn(5, 5, 5), s = new Wn({ name: "CubemapFromEquirect", uniforms: xi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: bt, blending: yn });
    s.uniforms.tEquirect.value = t;
    const o = new Yt(r, s), a = t.minFilter;
    return t.minFilter === Bi && (t.minFilter = Ft), new mu(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const ps = new U(), _u = new U(), vu = new Oe();
class vn {
  constructor(e = new U(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = ps.subVectors(n, t).cross(_u.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(ps), r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || vu.getNormalMatrix(e), r = this.coplanarPoint(ps).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Un = new Ir(), hr = new U();
class Zs {
  constructor(e = new vn(), t = new vn(), n = new vn(), r = new vn(), s = new vn(), o = new vn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = un) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], u = r[5], f = r[6], d = r[7], m = r[8], _ = r[9], x = r[10], p = r[11], h = r[12], y = r[13], v = r[14], R = r[15];
    if (n[0].setComponents(l - s, d - c, p - m, R - h).normalize(), n[1].setComponents(l + s, d + c, p + m, R + h).normalize(), n[2].setComponents(l + o, d + u, p + _, R + y).normalize(), n[3].setComponents(l - o, d - u, p - _, R - y).normalize(), n[4].setComponents(l - a, d - f, p - x, R - v).normalize(), t === un) n[5].setComponents(l + a, d + f, p + x, R + v).normalize();
    else if (t === Cr) n[5].setComponents(a, f, x, v).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Un);
  }
  intersectsSprite(e) {
    return Un.center.set(0, 0, 0), Un.radius = 0.7071067811865476, Un.applyMatrix4(e.matrixWorld), this.intersectsSphere(Un);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (hr.x = r.normal.x > 0 ? e.max.x : e.min.x, hr.y = r.normal.y > 0 ? e.max.y : e.min.y, hr.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(hr) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function bl() {
  let i = null, e = false, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return { start: function() {
    e !== true && t !== null && (n = i.requestAnimationFrame(r), e = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    i = s;
  } };
}
function xu(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(c, u) {
    const f = c.array, d = c.usage, m = i.createBuffer();
    i.bindBuffer(u, m), i.bufferData(u, f, d), c.onUploadCallback();
    let _;
    if (f instanceof Float32Array) _ = i.FLOAT;
    else if (f instanceof Uint16Array) if (c.isFloat16BufferAttribute) if (t) _ = i.HALF_FLOAT;
    else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
    else _ = i.UNSIGNED_SHORT;
    else if (f instanceof Int16Array) _ = i.SHORT;
    else if (f instanceof Uint32Array) _ = i.UNSIGNED_INT;
    else if (f instanceof Int32Array) _ = i.INT;
    else if (f instanceof Int8Array) _ = i.BYTE;
    else if (f instanceof Uint8Array) _ = i.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray) _ = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
    return { buffer: m, type: _, bytesPerElement: f.BYTES_PER_ELEMENT, version: c.version };
  }
  function s(c, u, f) {
    const d = u.array, m = u.updateRange;
    i.bindBuffer(f, c), m.count === -1 ? i.bufferSubData(f, 0, d) : (t ? i.bufferSubData(f, m.offset * d.BYTES_PER_ELEMENT, d, m.offset, m.count) : i.bufferSubData(f, m.offset * d.BYTES_PER_ELEMENT, d.subarray(m.offset, m.offset + m.count)), m.count = -1), u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (i.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = n.get(c);
    f === void 0 ? n.set(c, r(c, u)) : f.version < c.version && (s(f.buffer, c, u), f.version = c.version);
  }
  return { get: o, remove: a, update: l };
}
class Or extends en {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, u = l + 1, f = e / a, d = t / l, m = [], _ = [], x = [], p = [];
    for (let h = 0; h < u; h++) {
      const y = h * d - o;
      for (let v = 0; v < c; v++) {
        const R = v * f - s;
        _.push(R, -y, 0), x.push(0, 0, 1), p.push(v / a), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++) for (let y = 0; y < a; y++) {
      const v = y + c * h, R = y + c * (h + 1), A = y + 1 + c * (h + 1), L = y + 1 + c * h;
      m.push(v, R, L), m.push(R, A, L);
    }
    this.setIndex(m), this.setAttribute("position", new Ut(_, 3)), this.setAttribute("normal", new Ut(x, 3)), this.setAttribute("uv", new Ut(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Or(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Mu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Su = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Eu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, yu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Tu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, bu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Au = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, wu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ru = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Cu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Lu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Pu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Du = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Uu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Iu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Nu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Fu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ou = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Bu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, zu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Hu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Gu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Vu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, ku = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Wu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Xu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, qu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Yu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ju = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ku = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Zu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, $u = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Ju = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Qu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, eh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, th = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, nh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ih = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, rh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, sh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ah = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, oh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ch = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, uh = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, hh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, fh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, dh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ph = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, mh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, gh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, _h = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, vh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, xh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Mh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Sh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Eh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, yh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Th = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, bh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ah = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, wh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Rh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ch = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Lh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ph = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Dh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Uh = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Ih = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Nh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Fh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Oh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Bh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Hh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Gh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Vh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, kh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Wh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Xh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, qh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Yh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, jh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Kh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Zh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, $h = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Jh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Qh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ef = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, tf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, nf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, rf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, sf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, af = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, of = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, lf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, cf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, uf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, hf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ff = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, df = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, pf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, mf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, gf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, _f = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const vf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, xf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ef = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, yf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Tf = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, bf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Af = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, wf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Rf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Cf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Lf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Pf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Df = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Uf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, If = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ff = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Of = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, zf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Hf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, kf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Yf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jf = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Kf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Zf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $f = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = { alphahash_fragment: Mu, alphahash_pars_fragment: Su, alphamap_fragment: Eu, alphamap_pars_fragment: yu, alphatest_fragment: Tu, alphatest_pars_fragment: bu, aomap_fragment: Au, aomap_pars_fragment: wu, begin_vertex: Ru, beginnormal_vertex: Cu, bsdfs: Lu, iridescence_fragment: Pu, bumpmap_pars_fragment: Du, clipping_planes_fragment: Uu, clipping_planes_pars_fragment: Iu, clipping_planes_pars_vertex: Nu, clipping_planes_vertex: Fu, color_fragment: Ou, color_pars_fragment: Bu, color_pars_vertex: zu, color_vertex: Hu, common: Gu, cube_uv_reflection_fragment: Vu, defaultnormal_vertex: ku, displacementmap_pars_vertex: Wu, displacementmap_vertex: Xu, emissivemap_fragment: qu, emissivemap_pars_fragment: Yu, colorspace_fragment: ju, colorspace_pars_fragment: Ku, envmap_fragment: Zu, envmap_common_pars_fragment: $u, envmap_pars_fragment: Ju, envmap_pars_vertex: Qu, envmap_physical_pars_fragment: hh, envmap_vertex: eh, fog_vertex: th, fog_pars_vertex: nh, fog_fragment: ih, fog_pars_fragment: rh, gradientmap_pars_fragment: sh, lightmap_fragment: ah, lightmap_pars_fragment: oh, lights_lambert_fragment: lh, lights_lambert_pars_fragment: ch, lights_pars_begin: uh, lights_toon_fragment: fh, lights_toon_pars_fragment: dh, lights_phong_fragment: ph, lights_phong_pars_fragment: mh, lights_physical_fragment: gh, lights_physical_pars_fragment: _h, lights_fragment_begin: vh, lights_fragment_maps: xh, lights_fragment_end: Mh, logdepthbuf_fragment: Sh, logdepthbuf_pars_fragment: Eh, logdepthbuf_pars_vertex: yh, logdepthbuf_vertex: Th, map_fragment: bh, map_pars_fragment: Ah, map_particle_fragment: wh, map_particle_pars_fragment: Rh, metalnessmap_fragment: Ch, metalnessmap_pars_fragment: Lh, morphcolor_vertex: Ph, morphnormal_vertex: Dh, morphtarget_pars_vertex: Uh, morphtarget_vertex: Ih, normal_fragment_begin: Nh, normal_fragment_maps: Fh, normal_pars_fragment: Oh, normal_pars_vertex: Bh, normal_vertex: zh, normalmap_pars_fragment: Hh, clearcoat_normal_fragment_begin: Gh, clearcoat_normal_fragment_maps: Vh, clearcoat_pars_fragment: kh, iridescence_pars_fragment: Wh, opaque_fragment: Xh, packing: qh, premultiplied_alpha_fragment: Yh, project_vertex: jh, dithering_fragment: Kh, dithering_pars_fragment: Zh, roughnessmap_fragment: $h, roughnessmap_pars_fragment: Jh, shadowmap_pars_fragment: Qh, shadowmap_pars_vertex: ef, shadowmap_vertex: tf, shadowmask_pars_fragment: nf, skinbase_vertex: rf, skinning_pars_vertex: sf, skinning_vertex: af, skinnormal_vertex: of, specularmap_fragment: lf, specularmap_pars_fragment: cf, tonemapping_fragment: uf, tonemapping_pars_fragment: hf, transmission_fragment: ff, transmission_pars_fragment: df, uv_pars_fragment: pf, uv_pars_vertex: mf, uv_vertex: gf, worldpos_vertex: _f, background_vert: vf, background_frag: xf, backgroundCube_vert: Mf, backgroundCube_frag: Sf, cube_vert: Ef, cube_frag: yf, depth_vert: Tf, depth_frag: bf, distanceRGBA_vert: Af, distanceRGBA_frag: wf, equirect_vert: Rf, equirect_frag: Cf, linedashed_vert: Lf, linedashed_frag: Pf, meshbasic_vert: Df, meshbasic_frag: Uf, meshlambert_vert: If, meshlambert_frag: Nf, meshmatcap_vert: Ff, meshmatcap_frag: Of, meshnormal_vert: Bf, meshnormal_frag: zf, meshphong_vert: Hf, meshphong_frag: Gf, meshphysical_vert: Vf, meshphysical_frag: kf, meshtoon_vert: Wf, meshtoon_frag: Xf, points_vert: qf, points_frag: Yf, shadow_vert: jf, shadow_frag: Kf, sprite_vert: Zf, sprite_frag: $f }, oe = { common: { diffuse: { value: new Ve(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Oe() }, alphaMap: { value: null }, alphaMapTransform: { value: new Oe() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Oe() } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Oe() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Oe() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Oe() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Oe() }, normalScale: { value: new Ce(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Oe() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Oe() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Oe() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Oe() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ve(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ve(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Oe() }, alphaTest: { value: 0 }, uvTransform: { value: new Oe() } }, sprite: { diffuse: { value: new Ve(16777215) }, opacity: { value: 1 }, center: { value: new Ce(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Oe() }, alphaMap: { value: null }, alphaMapTransform: { value: new Oe() }, alphaTest: { value: 0 } } }, Zt = { basic: { uniforms: vt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.fog]), vertexShader: Ne.meshbasic_vert, fragmentShader: Ne.meshbasic_frag }, lambert: { uniforms: vt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, { emissive: { value: new Ve(0) } }]), vertexShader: Ne.meshlambert_vert, fragmentShader: Ne.meshlambert_frag }, phong: { uniforms: vt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, { emissive: { value: new Ve(0) }, specular: { value: new Ve(1118481) }, shininess: { value: 30 } }]), vertexShader: Ne.meshphong_vert, fragmentShader: Ne.meshphong_frag }, standard: { uniforms: vt([oe.common, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.roughnessmap, oe.metalnessmap, oe.fog, oe.lights, { emissive: { value: new Ve(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag }, toon: { uniforms: vt([oe.common, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.gradientmap, oe.fog, oe.lights, { emissive: { value: new Ve(0) } }]), vertexShader: Ne.meshtoon_vert, fragmentShader: Ne.meshtoon_frag }, matcap: { uniforms: vt([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, { matcap: { value: null } }]), vertexShader: Ne.meshmatcap_vert, fragmentShader: Ne.meshmatcap_frag }, points: { uniforms: vt([oe.points, oe.fog]), vertexShader: Ne.points_vert, fragmentShader: Ne.points_frag }, dashed: { uniforms: vt([oe.common, oe.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ne.linedashed_vert, fragmentShader: Ne.linedashed_frag }, depth: { uniforms: vt([oe.common, oe.displacementmap]), vertexShader: Ne.depth_vert, fragmentShader: Ne.depth_frag }, normal: { uniforms: vt([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ne.meshnormal_vert, fragmentShader: Ne.meshnormal_frag }, sprite: { uniforms: vt([oe.sprite, oe.fog]), vertexShader: Ne.sprite_vert, fragmentShader: Ne.sprite_frag }, background: { uniforms: { uvTransform: { value: new Oe() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ne.background_vert, fragmentShader: Ne.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: Ne.backgroundCube_vert, fragmentShader: Ne.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ne.cube_vert, fragmentShader: Ne.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ne.equirect_vert, fragmentShader: Ne.equirect_frag }, distanceRGBA: { uniforms: vt([oe.common, oe.displacementmap, { referencePosition: { value: new U() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ne.distanceRGBA_vert, fragmentShader: Ne.distanceRGBA_frag }, shadow: { uniforms: vt([oe.lights, oe.fog, { color: { value: new Ve(0) }, opacity: { value: 1 } }]), vertexShader: Ne.shadow_vert, fragmentShader: Ne.shadow_frag } };
Zt.physical = { uniforms: vt([Zt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Oe() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Oe() }, clearcoatNormalScale: { value: new Ce(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Oe() }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Oe() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Oe() }, sheen: { value: 0 }, sheenColor: { value: new Ve(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Oe() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Oe() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Oe() }, transmissionSamplerSize: { value: new Ce() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Oe() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ve(0) }, specularColor: { value: new Ve(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Oe() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Oe() }, anisotropyVector: { value: new Ce() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Oe() } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag };
const fr = { r: 0, b: 0, g: 0 };
function Jf(i, e, t, n, r, s, o) {
  const a = new Ve(0);
  let l = s === true ? 0 : 1, c, u, f = null, d = 0, m = null;
  function _(p, h) {
    let y = false, v = h.isScene === true ? h.background : null;
    v && v.isTexture && (v = (h.backgroundBlurriness > 0 ? t : e).get(v)), v === null ? x(a, l) : v && v.isColor && (x(v, 1), y = true);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || y) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), v && (v.isCubeTexture || v.mapping === Dr) ? (u === void 0 && (u = new Yt(new qn(1, 1, 1), new Wn({ name: "BackgroundCubeMaterial", uniforms: xi(Zt.backgroundCube.uniforms), vertexShader: Zt.backgroundCube.vertexShader, fragmentShader: Zt.backgroundCube.fragmentShader, side: bt, depthTest: false, depthWrite: false, fog: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(A, L, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(u)), u.material.uniforms.envMap.value = v, u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, u.material.toneMapped = We.getTransfer(v.colorSpace) !== Ye, (f !== v || d !== v.version || m !== i.toneMapping) && (u.material.needsUpdate = true, f = v, d = v.version, m = i.toneMapping), u.layers.enableAll(), p.unshift(u, u.geometry, u.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new Yt(new Or(2, 2), new Wn({ name: "BackgroundMaterial", uniforms: xi(Zt.background.uniforms), vertexShader: Zt.background.vertexShader, fragmentShader: Zt.background.fragmentShader, side: wn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, c.material.toneMapped = We.getTransfer(v.colorSpace) !== Ye, v.matrixAutoUpdate === true && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (f !== v || d !== v.version || m !== i.toneMapping) && (c.material.needsUpdate = true, f = v, d = v.version, m = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function x(p, h) {
    p.getRGB(fr, El(i)), n.buffers.color.setClear(fr.r, fr.g, fr.b, h, o);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(p, h = 1) {
    a.set(p), l = h, x(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(p) {
    l = p, x(a, l);
  }, render: _ };
}
function Qf(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, l = p(null);
  let c = l, u = false;
  function f(P, H, j, X, ee) {
    let q = false;
    if (o) {
      const K = x(X, j, H);
      c !== K && (c = K, m(c.object)), q = h(P, X, j, ee), q && y(P, X, j, ee);
    } else {
      const K = H.wireframe === true;
      (c.geometry !== X.id || c.program !== j.id || c.wireframe !== K) && (c.geometry = X.id, c.program = j.id, c.wireframe = K, q = true);
    }
    ee !== null && t.update(ee, i.ELEMENT_ARRAY_BUFFER), (q || u) && (u = false, G(P, H, j, X), ee !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(ee).buffer));
  }
  function d() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(P) {
    return n.isWebGL2 ? i.bindVertexArray(P) : s.bindVertexArrayOES(P);
  }
  function _(P) {
    return n.isWebGL2 ? i.deleteVertexArray(P) : s.deleteVertexArrayOES(P);
  }
  function x(P, H, j) {
    const X = j.wireframe === true;
    let ee = a[P.id];
    ee === void 0 && (ee = {}, a[P.id] = ee);
    let q = ee[H.id];
    q === void 0 && (q = {}, ee[H.id] = q);
    let K = q[X];
    return K === void 0 && (K = p(d()), q[X] = K), K;
  }
  function p(P) {
    const H = [], j = [], X = [];
    for (let ee = 0; ee < r; ee++) H[ee] = 0, j[ee] = 0, X[ee] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: H, enabledAttributes: j, attributeDivisors: X, object: P, attributes: {}, index: null };
  }
  function h(P, H, j, X) {
    const ee = c.attributes, q = H.attributes;
    let K = 0;
    const D = j.getAttributes();
    for (const W in D) if (D[W].location >= 0) {
      const ue = ee[W];
      let de = q[W];
      if (de === void 0 && (W === "instanceMatrix" && P.instanceMatrix && (de = P.instanceMatrix), W === "instanceColor" && P.instanceColor && (de = P.instanceColor)), ue === void 0 || ue.attribute !== de || de && ue.data !== de.data) return true;
      K++;
    }
    return c.attributesNum !== K || c.index !== X;
  }
  function y(P, H, j, X) {
    const ee = {}, q = H.attributes;
    let K = 0;
    const D = j.getAttributes();
    for (const W in D) if (D[W].location >= 0) {
      let ue = q[W];
      ue === void 0 && (W === "instanceMatrix" && P.instanceMatrix && (ue = P.instanceMatrix), W === "instanceColor" && P.instanceColor && (ue = P.instanceColor));
      const de = {};
      de.attribute = ue, ue && ue.data && (de.data = ue.data), ee[W] = de, K++;
    }
    c.attributes = ee, c.attributesNum = K, c.index = X;
  }
  function v() {
    const P = c.newAttributes;
    for (let H = 0, j = P.length; H < j; H++) P[H] = 0;
  }
  function R(P) {
    A(P, 0);
  }
  function A(P, H) {
    const j = c.newAttributes, X = c.enabledAttributes, ee = c.attributeDivisors;
    j[P] = 1, X[P] === 0 && (i.enableVertexAttribArray(P), X[P] = 1), ee[P] !== H && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, H), ee[P] = H);
  }
  function L() {
    const P = c.newAttributes, H = c.enabledAttributes;
    for (let j = 0, X = H.length; j < X; j++) H[j] !== P[j] && (i.disableVertexAttribArray(j), H[j] = 0);
  }
  function b(P, H, j, X, ee, q, K) {
    K === true ? i.vertexAttribIPointer(P, H, j, ee, q) : i.vertexAttribPointer(P, H, j, X, ee, q);
  }
  function G(P, H, j, X) {
    if (n.isWebGL2 === false && (P.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
    v();
    const ee = X.attributes, q = j.getAttributes(), K = H.defaultAttributeValues;
    for (const D in q) {
      const W = q[D];
      if (W.location >= 0) {
        let ce = ee[D];
        if (ce === void 0 && (D === "instanceMatrix" && P.instanceMatrix && (ce = P.instanceMatrix), D === "instanceColor" && P.instanceColor && (ce = P.instanceColor)), ce !== void 0) {
          const ue = ce.normalized, de = ce.itemSize, ye = t.get(ce);
          if (ye === void 0) continue;
          const Be = ye.buffer, Te = ye.type, Re = ye.bytesPerElement, qe = n.isWebGL2 === true && (Te === i.INT || Te === i.UNSIGNED_INT || ce.gpuType === al);
          if (ce.isInterleavedBufferAttribute) {
            const Ie = ce.data, N = Ie.stride, dt = ce.offset;
            if (Ie.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < W.locationSize; xe++) A(W.location + xe, Ie.meshPerAttribute);
              P.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Ie.meshPerAttribute * Ie.count);
            } else for (let xe = 0; xe < W.locationSize; xe++) R(W.location + xe);
            i.bindBuffer(i.ARRAY_BUFFER, Be);
            for (let xe = 0; xe < W.locationSize; xe++) b(W.location + xe, de / W.locationSize, Te, ue, N * Re, (dt + de / W.locationSize * xe) * Re, qe);
          } else {
            if (ce.isInstancedBufferAttribute) {
              for (let Ie = 0; Ie < W.locationSize; Ie++) A(W.location + Ie, ce.meshPerAttribute);
              P.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ce.meshPerAttribute * ce.count);
            } else for (let Ie = 0; Ie < W.locationSize; Ie++) R(W.location + Ie);
            i.bindBuffer(i.ARRAY_BUFFER, Be);
            for (let Ie = 0; Ie < W.locationSize; Ie++) b(W.location + Ie, de / W.locationSize, Te, ue, de * Re, de / W.locationSize * Ie * Re, qe);
          }
        } else if (K !== void 0) {
          const ue = K[D];
          if (ue !== void 0) switch (ue.length) {
            case 2:
              i.vertexAttrib2fv(W.location, ue);
              break;
            case 3:
              i.vertexAttrib3fv(W.location, ue);
              break;
            case 4:
              i.vertexAttrib4fv(W.location, ue);
              break;
            default:
              i.vertexAttrib1fv(W.location, ue);
          }
        }
      }
    }
    L();
  }
  function S() {
    J();
    for (const P in a) {
      const H = a[P];
      for (const j in H) {
        const X = H[j];
        for (const ee in X) _(X[ee].object), delete X[ee];
        delete H[j];
      }
      delete a[P];
    }
  }
  function T(P) {
    if (a[P.id] === void 0) return;
    const H = a[P.id];
    for (const j in H) {
      const X = H[j];
      for (const ee in X) _(X[ee].object), delete X[ee];
      delete H[j];
    }
    delete a[P.id];
  }
  function k(P) {
    for (const H in a) {
      const j = a[H];
      if (j[P.id] === void 0) continue;
      const X = j[P.id];
      for (const ee in X) _(X[ee].object), delete X[ee];
      delete j[P.id];
    }
  }
  function J() {
    Q(), u = true, c !== l && (c = l, m(c.object));
  }
  function Q() {
    l.geometry = null, l.program = null, l.wireframe = false;
  }
  return { setup: f, reset: J, resetDefaultState: Q, dispose: S, releaseStatesOfGeometry: T, releaseStatesOfProgram: k, initAttributes: v, enableAttribute: R, disableUnusedAttributes: L };
}
function ed(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    i.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, f) {
    if (f === 0) return;
    let d, m;
    if (r) d = i, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, c, u, f), t.update(u, s, f);
  }
  this.setMode = o, this.render = a, this.renderInstances = l;
}
function td(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const b = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(b) {
    if (b === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      b = "mediump";
    }
    return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === true, f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), x = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, R = o || e.has("OES_texture_float"), A = v && R, L = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return { isWebGL2: o, drawBuffers: c, getMaxAnisotropy: r, getMaxPrecision: s, precision: a, logarithmicDepthBuffer: u, maxTextures: f, maxVertexTextures: d, maxTextureSize: m, maxCubemapSize: _, maxAttributes: x, maxVertexUniforms: p, maxVaryings: h, maxFragmentUniforms: y, vertexTextures: v, floatFragmentTextures: R, floatVertexTextures: A, maxSamples: L };
}
function nd(i) {
  const e = this;
  let t = null, n = 0, r = false, s = false;
  const o = new vn(), a = new Oe(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const m = f.length !== 0 || d || n !== 0 || r;
    return r = d, n = f.length, m;
  }, this.beginShadows = function() {
    s = true, u(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(f, d) {
    t = u(f, d, 0);
  }, this.setState = function(f, d, m) {
    const _ = f.clippingPlanes, x = f.clipIntersection, p = f.clipShadows, h = i.get(f);
    if (!r || _ === null || _.length === 0 || s && !p) s ? u(null) : c();
    else {
      const y = s ? 0 : n, v = y * 4;
      let R = h.clippingState || null;
      l.value = R, R = u(_, d, v, m);
      for (let A = 0; A !== v; ++A) R[A] = t[A];
      h.clippingState = R, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(f, d, m, _) {
    const x = f !== null ? f.length : 0;
    let p = null;
    if (x !== 0) {
      if (p = l.value, _ !== true || p === null) {
        const h = m + x * 4, y = d.matrixWorldInverse;
        a.getNormalMatrix(y), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let v = 0, R = m; v !== x; ++v, R += 4) o.copy(f[v]).applyMatrix4(y, a), o.normal.toArray(p, R), p[R + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return e.numPlanes = x, e.numIntersection = 0, p;
  }
}
function id(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Us ? o.mapping = gi : a === Is && (o.mapping = _i), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === false) {
      const a = o.mapping;
      if (a === Us || a === Is) if (e.has(o)) {
        const l = e.get(o).texture;
        return t(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new gu(l.height / 2);
          return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", r), t(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: s };
}
class Al extends yl {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const di = 4, co = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], On = 20, ms = new Al(), uo = new Ve();
let gs = null, _s = 0, vs = 0;
const Nn = (1 + Math.sqrt(5)) / 2, hi = 1 / Nn, ho = [new U(1, 1, 1), new U(-1, 1, 1), new U(1, 1, -1), new U(-1, 1, -1), new U(0, Nn, hi), new U(0, Nn, -hi), new U(hi, 0, Nn), new U(-hi, 0, Nn), new U(Nn, hi, 0), new U(-Nn, hi, 0)];
class fo {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    gs = this._renderer.getRenderTarget(), _s = this._renderer.getActiveCubeFace(), vs = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = true, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = go(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = mo(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(gs, _s, vs), e.scissorTest = false, dr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === gi || e.mapping === _i ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), gs = this._renderer.getRenderTarget(), _s = this._renderer.getActiveCubeFace(), vs = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Ft, minFilter: Ft, generateMipmaps: false, type: zi, format: qt, colorSpace: fn, depthBuffer: false }, r = po(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = po(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = rd(s)), this._blurMaterial = sd(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Yt(this._lodPlanes[0], e);
    this._renderer.compile(t, ms);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new Bt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(uo), u.toneMapping = Tn, u.autoClear = false;
    const m = new xl({ name: "PMREM.Background", side: bt, depthWrite: false, depthTest: false }), _ = new Yt(new qn(), m);
    let x = false;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, x = true) : (m.color.copy(uo), x = true);
    for (let h = 0; h < 6; h++) {
      const y = h % 3;
      y === 0 ? (a.up.set(0, l[h], 0), a.lookAt(c[h], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[h]), a.lookAt(0, c[h], 0)) : (a.up.set(0, l[h], 0), a.lookAt(0, 0, c[h]));
      const v = this._cubeSize;
      dr(r, y * v, h > 2 ? v : 0, v, v), u.setRenderTarget(r), x && u.render(_, a), u.render(e, a);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = d, u.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === gi || e.mapping === _i;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = go()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = mo());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Yt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    dr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, ms);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = ho[(r - 1) % ho.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, r, "latitudinal", s), this._halfBlur(o, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3, f = new Yt(this._lodPlanes[r], c), d = c.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * On - 1), x = s / _, p = isFinite(s) ? 1 + Math.floor(u * x) : On;
    p > On && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);
    const h = [];
    let y = 0;
    for (let b = 0; b < On; ++b) {
      const G = b / x, S = Math.exp(-G * G / 2);
      h.push(S), b === 0 ? y += S : b < p && (y += 2 * S);
    }
    for (let b = 0; b < h.length; b++) h[b] = h[b] / y;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = h, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: v } = this;
    d.dTheta.value = _, d.mipInt.value = v - n;
    const R = this._sizeLods[r], A = 3 * R * (r > v - di ? r - v + di : 0), L = 4 * (this._cubeSize - R);
    dr(t, A, L, 3 * R, 2 * R), l.setRenderTarget(t), l.render(f, ms);
  }
}
function rd(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - di + 1 + co.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - di ? l = co[o - i + di - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, f = 1 + c, d = [u, u, f, u, f, f, u, u, f, f, u, f], m = 6, _ = 6, x = 3, p = 2, h = 1, y = new Float32Array(x * _ * m), v = new Float32Array(p * _ * m), R = new Float32Array(h * _ * m);
    for (let L = 0; L < m; L++) {
      const b = L % 3 * 2 / 3 - 1, G = L > 2 ? 0 : -1, S = [b, G, 0, b + 2 / 3, G, 0, b + 2 / 3, G + 1, 0, b, G, 0, b + 2 / 3, G + 1, 0, b, G + 1, 0];
      y.set(S, x * _ * L), v.set(d, p * _ * L);
      const T = [L, L, L, L, L, L];
      R.set(T, h * _ * L);
    }
    const A = new en();
    A.setAttribute("position", new Jt(y, x)), A.setAttribute("uv", new Jt(v, p)), A.setAttribute("faceIndex", new Jt(R, h)), e.push(A), r > di && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function po(i, e, t) {
  const n = new Vn(i, e, t);
  return n.texture.mapping = Dr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function dr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function sd(i, e, t) {
  const n = new Float32Array(On), r = new U(0, 1, 0);
  return new Wn({ name: "SphericalGaussianBlur", defines: { n: On, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: $s(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: yn, depthTest: false, depthWrite: false });
}
function mo() {
  return new Wn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: $s(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: yn, depthTest: false, depthWrite: false });
}
function go() {
  return new Wn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: $s(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: yn, depthTest: false, depthWrite: false });
}
function $s() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function ad(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === Us || l === Is, u = l === gi || l === _i;
      if (c || u) if (a.isRenderTargetTexture && a.needsPMREMUpdate === true) {
        a.needsPMREMUpdate = false;
        let f = e.get(a);
        return t === null && (t = new fo(i)), f = c ? t.fromEquirectangular(a, f) : t.fromCubemap(a, f), e.set(a, f), f.texture;
      } else {
        if (e.has(a)) return e.get(a).texture;
        {
          const f = a.image;
          if (c && f && f.height > 0 || u && f && r(f)) {
            t === null && (t = new fo(i));
            const d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
            return e.set(a, d), a.addEventListener("dispose", s), d.texture;
          } else return null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: o };
}
function od(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function(n) {
    n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
  }, get: function(n) {
    const r = t(n);
    return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function ld(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes) e.remove(d.attributes[_]);
    for (const _ in d.morphAttributes) {
      const x = d.morphAttributes[_];
      for (let p = 0, h = x.length; p < h; p++) e.remove(x[p]);
    }
    d.removeEventListener("dispose", o), delete r[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(f, d) {
    return r[d.id] === true || (d.addEventListener("dispose", o), r[d.id] = true, t.memory.geometries++), d;
  }
  function l(f) {
    const d = f.attributes;
    for (const _ in d) e.update(d[_], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const _ in m) {
      const x = m[_];
      for (let p = 0, h = x.length; p < h; p++) e.update(x[p], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const d = [], m = f.index, _ = f.attributes.position;
    let x = 0;
    if (m !== null) {
      const y = m.array;
      x = m.version;
      for (let v = 0, R = y.length; v < R; v += 3) {
        const A = y[v + 0], L = y[v + 1], b = y[v + 2];
        d.push(A, L, L, b, b, A);
      }
    } else if (_ !== void 0) {
      const y = _.array;
      x = _.version;
      for (let v = 0, R = y.length / 3 - 1; v < R; v += 3) {
        const A = v + 0, L = v + 1, b = v + 2;
        d.push(A, L, L, b, b, A);
      }
    } else return;
    const p = new (pl(d) ? Sl : Ml)(d, 1);
    p.version = x;
    const h = s.get(f);
    h && e.remove(h), s.set(f, p);
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function cd(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, l;
  function c(d) {
    a = d.type, l = d.bytesPerElement;
  }
  function u(d, m) {
    i.drawElements(s, m, a, d * l), t.update(m, s, 1);
  }
  function f(d, m, _) {
    if (_ === 0) return;
    let x, p;
    if (r) x = i, p = "drawElementsInstanced";
    else if (x = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", x === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    x[p](s, m, a, d * l, _), t.update(m, s, _);
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = f;
}
function ud(i) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: r, update: n };
}
function hd(i, e) {
  return i[0] - e[0];
}
function fd(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function dd(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new ht(), a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, f) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === true) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, _ = m !== void 0 ? m.length : 0;
      let x = s.get(u);
      if (x === void 0 || x.count !== _) {
        let P = function() {
          J.dispose(), s.delete(u), u.removeEventListener("dispose", P);
        };
        x !== void 0 && x.texture.dispose();
        const y = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, R = u.morphAttributes.color !== void 0, A = u.morphAttributes.position || [], L = u.morphAttributes.normal || [], b = u.morphAttributes.color || [];
        let G = 0;
        y === true && (G = 1), v === true && (G = 2), R === true && (G = 3);
        let S = u.attributes.position.count * G, T = 1;
        S > e.maxTextureSize && (T = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
        const k = new Float32Array(S * T * 4 * _), J = new _l(k, S, T, _);
        J.type = Sn, J.needsUpdate = true;
        const Q = G * 4;
        for (let H = 0; H < _; H++) {
          const j = A[H], X = L[H], ee = b[H], q = S * T * 4 * H;
          for (let K = 0; K < j.count; K++) {
            const D = K * Q;
            y === true && (o.fromBufferAttribute(j, K), k[q + D + 0] = o.x, k[q + D + 1] = o.y, k[q + D + 2] = o.z, k[q + D + 3] = 0), v === true && (o.fromBufferAttribute(X, K), k[q + D + 4] = o.x, k[q + D + 5] = o.y, k[q + D + 6] = o.z, k[q + D + 7] = 0), R === true && (o.fromBufferAttribute(ee, K), k[q + D + 8] = o.x, k[q + D + 9] = o.y, k[q + D + 10] = o.z, k[q + D + 11] = ee.itemSize === 4 ? o.w : 1);
          }
        }
        x = { count: _, texture: J, size: new Ce(S, T) }, s.set(u, x), u.addEventListener("dispose", P);
      }
      let p = 0;
      for (let y = 0; y < d.length; y++) p += d[y];
      const h = u.morphTargetsRelative ? 1 : 1 - p;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", h), f.getUniforms().setValue(i, "morphTargetInfluences", d), f.getUniforms().setValue(i, "morphTargetsTexture", x.texture, t), f.getUniforms().setValue(i, "morphTargetsTextureSize", x.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let _ = n[u.id];
      if (_ === void 0 || _.length !== m) {
        _ = [];
        for (let v = 0; v < m; v++) _[v] = [v, 0];
        n[u.id] = _;
      }
      for (let v = 0; v < m; v++) {
        const R = _[v];
        R[0] = v, R[1] = d[v];
      }
      _.sort(fd);
      for (let v = 0; v < 8; v++) v < m && _[v][1] ? (a[v][0] = _[v][0], a[v][1] = _[v][1]) : (a[v][0] = Number.MAX_SAFE_INTEGER, a[v][1] = 0);
      a.sort(hd);
      const x = u.morphAttributes.position, p = u.morphAttributes.normal;
      let h = 0;
      for (let v = 0; v < 8; v++) {
        const R = a[v], A = R[0], L = R[1];
        A !== Number.MAX_SAFE_INTEGER && L ? (x && u.getAttribute("morphTarget" + v) !== x[A] && u.setAttribute("morphTarget" + v, x[A]), p && u.getAttribute("morphNormal" + v) !== p[A] && u.setAttribute("morphNormal" + v, p[A]), r[v] = L, h += L) : (x && u.hasAttribute("morphTarget" + v) === true && u.deleteAttribute("morphTarget" + v), p && u.hasAttribute("morphNormal" + v) === true && u.deleteAttribute("morphNormal" + v), r[v] = 0);
      }
      const y = u.morphTargetsRelative ? 1 : 1 - h;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", y), f.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return { update: l };
}
function pd(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, f = e.get(l, u);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const wl = new Dt(), Rl = new _l(), Cl = new Qc(), Ll = new Tl(), _o = [], vo = [], xo = new Float32Array(16), Mo = new Float32Array(9), So = new Float32Array(4);
function wi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = _o[r];
  if (s === void 0 && (s = new Float32Array(r), _o[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, i[o].toArray(s, a);
  }
  return s;
}
function rt(i, e) {
  if (i.length !== e.length) return false;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return false;
  return true;
}
function st(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Br(i, e) {
  let t = vo[e];
  t === void 0 && (t = new Int32Array(e), vo[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function md(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function gd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    i.uniform2fv(this.addr, e), st(t, e);
  }
}
function _d(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (rt(t, e)) return;
    i.uniform3fv(this.addr, e), st(t, e);
  }
}
function vd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    i.uniform4fv(this.addr, e), st(t, e);
  }
}
function xd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    i.uniformMatrix2fv(this.addr, false, e), st(t, e);
  } else {
    if (rt(t, n)) return;
    So.set(n), i.uniformMatrix2fv(this.addr, false, So), st(t, n);
  }
}
function Md(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    i.uniformMatrix3fv(this.addr, false, e), st(t, e);
  } else {
    if (rt(t, n)) return;
    Mo.set(n), i.uniformMatrix3fv(this.addr, false, Mo), st(t, n);
  }
}
function Sd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    i.uniformMatrix4fv(this.addr, false, e), st(t, e);
  } else {
    if (rt(t, n)) return;
    xo.set(n), i.uniformMatrix4fv(this.addr, false, xo), st(t, n);
  }
}
function Ed(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function yd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    i.uniform2iv(this.addr, e), st(t, e);
  }
}
function Td(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e)) return;
    i.uniform3iv(this.addr, e), st(t, e);
  }
}
function bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    i.uniform4iv(this.addr, e), st(t, e);
  }
}
function Ad(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    i.uniform2uiv(this.addr, e), st(t, e);
  }
}
function Rd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e)) return;
    i.uniform3uiv(this.addr, e), st(t, e);
  }
}
function Cd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    i.uniform4uiv(this.addr, e), st(t, e);
  }
}
function Ld(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || wl, r);
}
function Pd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Cl, r);
}
function Dd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Ll, r);
}
function Ud(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Rl, r);
}
function Id(i) {
  switch (i) {
    case 5126:
      return md;
    case 35664:
      return gd;
    case 35665:
      return _d;
    case 35666:
      return vd;
    case 35674:
      return xd;
    case 35675:
      return Md;
    case 35676:
      return Sd;
    case 5124:
    case 35670:
      return Ed;
    case 35667:
    case 35671:
      return yd;
    case 35668:
    case 35672:
      return Td;
    case 35669:
    case 35673:
      return bd;
    case 5125:
      return Ad;
    case 36294:
      return wd;
    case 36295:
      return Rd;
    case 36296:
      return Cd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ld;
    case 35679:
    case 36299:
    case 36307:
      return Pd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Dd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ud;
  }
}
function Nd(i, e) {
  i.uniform1fv(this.addr, e);
}
function Fd(i, e) {
  const t = wi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Od(i, e) {
  const t = wi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Bd(i, e) {
  const t = wi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function zd(i, e) {
  const t = wi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, t);
}
function Hd(i, e) {
  const t = wi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, t);
}
function Gd(i, e) {
  const t = wi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, t);
}
function Vd(i, e) {
  i.uniform1iv(this.addr, e);
}
function kd(i, e) {
  i.uniform2iv(this.addr, e);
}
function Wd(i, e) {
  i.uniform3iv(this.addr, e);
}
function Xd(i, e) {
  i.uniform4iv(this.addr, e);
}
function qd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Yd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function jd(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Kd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Zd(i, e, t) {
  const n = this.cache, r = e.length, s = Br(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || wl, s[o]);
}
function $d(i, e, t) {
  const n = this.cache, r = e.length, s = Br(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture3D(e[o] || Cl, s[o]);
}
function Jd(i, e, t) {
  const n = this.cache, r = e.length, s = Br(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || Ll, s[o]);
}
function Qd(i, e, t) {
  const n = this.cache, r = e.length, s = Br(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o) t.setTexture2DArray(e[o] || Rl, s[o]);
}
function ep(i) {
  switch (i) {
    case 5126:
      return Nd;
    case 35664:
      return Fd;
    case 35665:
      return Od;
    case 35666:
      return Bd;
    case 35674:
      return zd;
    case 35675:
      return Hd;
    case 35676:
      return Gd;
    case 5124:
    case 35670:
      return Vd;
    case 35667:
    case 35671:
      return kd;
    case 35668:
    case 35672:
      return Wd;
    case 35669:
    case 35673:
      return Xd;
    case 5125:
      return qd;
    case 36294:
      return Yd;
    case 36295:
      return jd;
    case 36296:
      return Kd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zd;
    case 35679:
    case 36299:
    case 36307:
      return $d;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qd;
  }
}
class tp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Id(t.type);
  }
}
class np {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = ep(t.type);
  }
}
class ip {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const xs = /(\w+)(\])?(\[|\.)?/g;
function Eo(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function rp(i, e, t) {
  const n = i.name, r = n.length;
  for (xs.lastIndex = 0; ; ) {
    const s = xs.exec(n), o = xs.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      Eo(t, c === void 0 ? new tp(a, i, e) : new np(a, i, e));
      break;
    } else {
      let f = t.map[a];
      f === void 0 && (f = new ip(a), Eo(t, f)), t = f;
    }
  }
}
class Mr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      rp(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== false && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function yo(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const sp = 37297;
let ap = 0;
function op(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function lp(i) {
  const e = We.getPrimaries(We.workingColorSpace), t = We.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === Rr && t === wr ? n = "LinearDisplayP3ToLinearSRGB" : e === wr && t === Rr && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case fn:
    case Ur:
      return [n, "LinearTransferOETF"];
    case ut:
    case js:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function To(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + op(i.getShaderSource(e), o);
  } else return r;
}
function cp(i, e) {
  const t = lp(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function up(i, e) {
  let t;
  switch (e) {
    case Sc:
      t = "Linear";
      break;
    case Ec:
      t = "Reinhard";
      break;
    case yc:
      t = "OptimizedCineon";
      break;
    case rl:
      t = "ACESFilmic";
      break;
    case Tc:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function hp(i) {
  return [i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ii).join(`
`);
}
function fp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function dp(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = { type: s.type, location: i.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function Ii(i) {
  return i !== "";
}
function bo(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ao(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const pp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Hs(i) {
  return i.replace(pp, gp);
}
const mp = /* @__PURE__ */ new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]);
function gp(i, e) {
  let t = Ne[e];
  if (t === void 0) {
    const n = mp.get(e);
    if (n !== void 0) t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Hs(t);
}
const _p = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function wo(i) {
  return i.replace(_p, vp);
}
function vp(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ro(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function xp(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === tl ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === nl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === ln && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Mp(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case gi:
    case _i:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Dr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Sp(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case _i:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function Ep(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case il:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case xc:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case Mc:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function yp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Tp(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = xp(t), c = Mp(t), u = Sp(t), f = Ep(t), d = yp(t), m = t.isWebGL2 ? "" : hp(t), _ = fp(s), x = r.createProgram();
  let p, h, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(Ii).join(`
`), p.length > 0 && (p += `
`), h = [m, "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(Ii).join(`
`), h.length > 0 && (h += `
`)) : (p = [Ro(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ii).join(`
`), h = [m, Ro(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + f : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Tn ? "#define TONE_MAPPING" : "", t.toneMapping !== Tn ? Ne.tonemapping_pars_fragment : "", t.toneMapping !== Tn ? up("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ne.colorspace_pars_fragment, cp("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Ii).join(`
`)), o = Hs(o), o = bo(o, t), o = Ao(o, t), a = Hs(a), a = bo(a, t), a = Ao(a, t), o = wo(o), a = wo(a), t.isWebGL2 && t.isRawShaderMaterial !== true && (y = `#version 300 es
`, p = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, h = ["precision mediump sampler2DArray;", "#define varying in", t.glslVersion === Xa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Xa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const v = y + p + o, R = y + h + a, A = yo(r, r.VERTEX_SHADER, v), L = yo(r, r.FRAGMENT_SHADER, R);
  r.attachShader(x, A), r.attachShader(x, L), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === true && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function b(k) {
    if (i.debug.checkShaderErrors) {
      const J = r.getProgramInfoLog(x).trim(), Q = r.getShaderInfoLog(A).trim(), P = r.getShaderInfoLog(L).trim();
      let H = true, j = true;
      if (r.getProgramParameter(x, r.LINK_STATUS) === false) if (H = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, x, A, L);
      else {
        const X = To(r, A, "vertex"), ee = To(r, L, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Program Info Log: ` + J + `
` + X + `
` + ee);
      }
      else J !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", J) : (Q === "" || P === "") && (j = false);
      j && (k.diagnostics = { runnable: H, programLog: J, vertexShader: { log: Q, prefix: p }, fragmentShader: { log: P, prefix: h } });
    }
    r.deleteShader(A), r.deleteShader(L), G = new Mr(r, x), S = dp(r, x);
  }
  let G;
  this.getUniforms = function() {
    return G === void 0 && b(this), G;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && b(this), S;
  };
  let T = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return T === false && (T = r.getProgramParameter(x, sp)), T;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = ap++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = A, this.fragmentShader = L, this;
}
let bp = 0;
class Ap {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === false && (o.add(r), r.usedTimes++), o.has(s) === false && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new wp(e), t.set(e, n)), n;
  }
}
class wp {
  constructor(e) {
    this.id = bp++, this.code = e, this.usedTimes = 0;
  }
}
function Rp(i, e, t, n, r, s, o) {
  const a = new Ks(), l = new Ap(), c = [], u = r.isWebGL2, f = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let m = r.precision;
  const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function x(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, T, k, J, Q) {
    const P = J.fog, H = Q.geometry, j = S.isMeshStandardMaterial ? J.environment : null, X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || j), ee = X && X.mapping === Dr ? X.image.height : null, q = _[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const K = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, D = K !== void 0 ? K.length : 0;
    let W = 0;
    H.morphAttributes.position !== void 0 && (W = 1), H.morphAttributes.normal !== void 0 && (W = 2), H.morphAttributes.color !== void 0 && (W = 3);
    let ce, ue, de, ye;
    if (q) {
      const et = Zt[q];
      ce = et.vertexShader, ue = et.fragmentShader;
    } else ce = S.vertexShader, ue = S.fragmentShader, l.update(S), de = l.getVertexShaderID(S), ye = l.getFragmentShaderID(S);
    const Be = i.getRenderTarget(), Te = Q.isInstancedMesh === true, Re = !!S.map, qe = !!S.matcap, Ie = !!X, N = !!S.aoMap, dt = !!S.lightMap, xe = !!S.bumpMap, be = !!S.normalMap, Ae = !!S.displacementMap, Ke = !!S.emissiveMap, De = !!S.metalnessMap, Le = !!S.roughnessMap, ke = S.anisotropy > 0, Qe = S.clearcoat > 0, at = S.iridescence > 0, E = S.sheen > 0, g = S.transmission > 0, F = ke && !!S.anisotropyMap, te = Qe && !!S.clearcoatMap, Z = Qe && !!S.clearcoatNormalMap, ne = Qe && !!S.clearcoatRoughnessMap, me = at && !!S.iridescenceMap, se = at && !!S.iridescenceThicknessMap, le = E && !!S.sheenColorMap, w = E && !!S.sheenRoughnessMap, re = !!S.specularMap, Y = !!S.specularColorMap, Se = !!S.specularIntensityMap, ge = g && !!S.transmissionMap, Me = g && !!S.thicknessMap, pe = !!S.gradientMap, fe = !!S.alphaMap, ze = S.alphaTest > 0, C = !!S.alphaHash, ae = !!S.extensions, $ = !!H.attributes.uv1, V = !!H.attributes.uv2, ie = !!H.attributes.uv3;
    let ve = Tn;
    return S.toneMapped && (Be === null || Be.isXRRenderTarget === true) && (ve = i.toneMapping), { isWebGL2: u, shaderID: q, shaderType: S.type, shaderName: S.name, vertexShader: ce, fragmentShader: ue, defines: S.defines, customVertexShaderID: de, customFragmentShaderID: ye, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: m, instancing: Te, instancingColor: Te && Q.instanceColor !== null, supportsVertexTextures: d, outputColorSpace: Be === null ? i.outputColorSpace : Be.isXRRenderTarget === true ? Be.texture.colorSpace : fn, map: Re, matcap: qe, envMap: Ie, envMapMode: Ie && X.mapping, envMapCubeUVHeight: ee, aoMap: N, lightMap: dt, bumpMap: xe, normalMap: be, displacementMap: d && Ae, emissiveMap: Ke, normalMapObjectSpace: be && S.normalMapType === Oc, normalMapTangentSpace: be && S.normalMapType === dl, metalnessMap: De, roughnessMap: Le, anisotropy: ke, anisotropyMap: F, clearcoat: Qe, clearcoatMap: te, clearcoatNormalMap: Z, clearcoatRoughnessMap: ne, iridescence: at, iridescenceMap: me, iridescenceThicknessMap: se, sheen: E, sheenColorMap: le, sheenRoughnessMap: w, specularMap: re, specularColorMap: Y, specularIntensityMap: Se, transmission: g, transmissionMap: ge, thicknessMap: Me, gradientMap: pe, opaque: S.transparent === false && S.blending === pi, alphaMap: fe, alphaTest: ze, alphaHash: C, combine: S.combine, mapUv: Re && x(S.map.channel), aoMapUv: N && x(S.aoMap.channel), lightMapUv: dt && x(S.lightMap.channel), bumpMapUv: xe && x(S.bumpMap.channel), normalMapUv: be && x(S.normalMap.channel), displacementMapUv: Ae && x(S.displacementMap.channel), emissiveMapUv: Ke && x(S.emissiveMap.channel), metalnessMapUv: De && x(S.metalnessMap.channel), roughnessMapUv: Le && x(S.roughnessMap.channel), anisotropyMapUv: F && x(S.anisotropyMap.channel), clearcoatMapUv: te && x(S.clearcoatMap.channel), clearcoatNormalMapUv: Z && x(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ne && x(S.clearcoatRoughnessMap.channel), iridescenceMapUv: me && x(S.iridescenceMap.channel), iridescenceThicknessMapUv: se && x(S.iridescenceThicknessMap.channel), sheenColorMapUv: le && x(S.sheenColorMap.channel), sheenRoughnessMapUv: w && x(S.sheenRoughnessMap.channel), specularMapUv: re && x(S.specularMap.channel), specularColorMapUv: Y && x(S.specularColorMap.channel), specularIntensityMapUv: Se && x(S.specularIntensityMap.channel), transmissionMapUv: ge && x(S.transmissionMap.channel), thicknessMapUv: Me && x(S.thicknessMap.channel), alphaMapUv: fe && x(S.alphaMap.channel), vertexTangents: !!H.attributes.tangent && (be || ke), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!H.attributes.color && H.attributes.color.itemSize === 4, vertexUv1s: $, vertexUv2s: V, vertexUv3s: ie, pointsUvs: Q.isPoints === true && !!H.attributes.uv && (Re || fe), fog: !!P, useFog: S.fog === true, fogExp2: P && P.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: f, skinning: Q.isSkinnedMesh === true, morphTargets: H.morphAttributes.position !== void 0, morphNormals: H.morphAttributes.normal !== void 0, morphColors: H.morphAttributes.color !== void 0, morphTargetsCount: D, morphTextureStride: W, numDirLights: T.directional.length, numPointLights: T.point.length, numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T.rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap.length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T.spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps, numLightProbes: T.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && k.length > 0, shadowMapType: i.shadowMap.type, toneMapping: ve, useLegacyLights: i._useLegacyLights, decodeVideoTexture: Re && S.map.isVideoTexture === true && We.getTransfer(S.map.colorSpace) === Ye, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === $t, flipSided: S.side === bt, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionDerivatives: ae && S.extensions.derivatives === true, extensionFragDepth: ae && S.extensions.fragDepth === true, extensionDrawBuffers: ae && S.extensions.drawBuffers === true, extensionShaderTextureLOD: ae && S.extensions.shaderTextureLOD === true, rendererExtensionFragDepth: u || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
  }
  function h(S) {
    const T = [];
    if (S.shaderID ? T.push(S.shaderID) : (T.push(S.customVertexShaderID), T.push(S.customFragmentShaderID)), S.defines !== void 0) for (const k in S.defines) T.push(k), T.push(S.defines[k]);
    return S.isRawShaderMaterial === false && (y(T, S), v(T, S), T.push(i.outputColorSpace)), T.push(S.customProgramCacheKey), T.join();
  }
  function y(S, T) {
    S.push(T.precision), S.push(T.outputColorSpace), S.push(T.envMapMode), S.push(T.envMapCubeUVHeight), S.push(T.mapUv), S.push(T.alphaMapUv), S.push(T.lightMapUv), S.push(T.aoMapUv), S.push(T.bumpMapUv), S.push(T.normalMapUv), S.push(T.displacementMapUv), S.push(T.emissiveMapUv), S.push(T.metalnessMapUv), S.push(T.roughnessMapUv), S.push(T.anisotropyMapUv), S.push(T.clearcoatMapUv), S.push(T.clearcoatNormalMapUv), S.push(T.clearcoatRoughnessMapUv), S.push(T.iridescenceMapUv), S.push(T.iridescenceThicknessMapUv), S.push(T.sheenColorMapUv), S.push(T.sheenRoughnessMapUv), S.push(T.specularMapUv), S.push(T.specularColorMapUv), S.push(T.specularIntensityMapUv), S.push(T.transmissionMapUv), S.push(T.thicknessMapUv), S.push(T.combine), S.push(T.fogExp2), S.push(T.sizeAttenuation), S.push(T.morphTargetsCount), S.push(T.morphAttributeCount), S.push(T.numDirLights), S.push(T.numPointLights), S.push(T.numSpotLights), S.push(T.numSpotLightMaps), S.push(T.numHemiLights), S.push(T.numRectAreaLights), S.push(T.numDirLightShadows), S.push(T.numPointLightShadows), S.push(T.numSpotLightShadows), S.push(T.numSpotLightShadowsWithMaps), S.push(T.numLightProbes), S.push(T.shadowMapType), S.push(T.toneMapping), S.push(T.numClippingPlanes), S.push(T.numClipIntersection), S.push(T.depthPacking);
  }
  function v(S, T) {
    a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a.enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), S.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), S.push(a.mask);
  }
  function R(S) {
    const T = _[S.type];
    let k;
    if (T) {
      const J = Zt[T];
      k = fu.clone(J.uniforms);
    } else k = S.uniforms;
    return k;
  }
  function A(S, T) {
    let k;
    for (let J = 0, Q = c.length; J < Q; J++) {
      const P = c[J];
      if (P.cacheKey === T) {
        k = P, ++k.usedTimes;
        break;
      }
    }
    return k === void 0 && (k = new Tp(i, T, S, s), c.push(k)), k;
  }
  function L(S) {
    if (--S.usedTimes === 0) {
      const T = c.indexOf(S);
      c[T] = c[c.length - 1], c.pop(), S.destroy();
    }
  }
  function b(S) {
    l.remove(S);
  }
  function G() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: h, getUniforms: R, acquireProgram: A, releaseProgram: L, releaseShaderCache: b, programs: c, dispose: G };
}
function Cp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: r };
}
function Lp(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Co(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Lo() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(f, d, m, _, x, p) {
    let h = i[e];
    return h === void 0 ? (h = { id: f.id, object: f, geometry: d, material: m, groupOrder: _, renderOrder: f.renderOrder, z: x, group: p }, i[e] = h) : (h.id = f.id, h.object = f, h.geometry = d, h.material = m, h.groupOrder = _, h.renderOrder = f.renderOrder, h.z = x, h.group = p), e++, h;
  }
  function a(f, d, m, _, x, p) {
    const h = o(f, d, m, _, x, p);
    m.transmission > 0 ? n.push(h) : m.transparent === true ? r.push(h) : t.push(h);
  }
  function l(f, d, m, _, x, p) {
    const h = o(f, d, m, _, x, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === true ? r.unshift(h) : t.unshift(h);
  }
  function c(f, d) {
    t.length > 1 && t.sort(f || Lp), n.length > 1 && n.sort(d || Co), r.length > 1 && r.sort(d || Co);
  }
  function u() {
    for (let f = e, d = i.length; f < d; f++) {
      const m = i[f];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: r, init: s, push: a, unshift: l, finish: u, sort: c };
}
function Pp() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Lo(), i.set(n, [o])) : r >= s.length ? (o = new Lo(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Dp() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new U(), color: new Ve() };
        break;
      case "SpotLight":
        t = { position: new U(), direction: new U(), color: new Ve(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new U(), color: new Ve(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new U(), skyColor: new Ve(), groundColor: new Ve() };
        break;
      case "RectAreaLight":
        t = { color: new Ve(), position: new U(), halfWidth: new U(), halfHeight: new U() };
        break;
    }
    return i[e.id] = t, t;
  } };
}
function Up() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ce() };
        break;
      case "SpotLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ce() };
        break;
      case "PointLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ce(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[e.id] = t, t;
  } };
}
let Ip = 0;
function Np(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Fp(i, e) {
  const t = new Dp(), n = Up(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let u = 0; u < 9; u++) r.probe.push(new U());
  const s = new U(), o = new it(), a = new it();
  function l(u, f) {
    let d = 0, m = 0, _ = 0;
    for (let J = 0; J < 9; J++) r.probe[J].set(0, 0, 0);
    let x = 0, p = 0, h = 0, y = 0, v = 0, R = 0, A = 0, L = 0, b = 0, G = 0, S = 0;
    u.sort(Np);
    const T = f === true ? Math.PI : 1;
    for (let J = 0, Q = u.length; J < Q; J++) {
      const P = u[J], H = P.color, j = P.intensity, X = P.distance, ee = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) d += H.r * j * T, m += H.g * j * T, _ += H.b * j * T;
      else if (P.isLightProbe) {
        for (let q = 0; q < 9; q++) r.probe[q].addScaledVector(P.sh.coefficients[q], j);
        S++;
      } else if (P.isDirectionalLight) {
        const q = t.get(P);
        if (q.color.copy(P.color).multiplyScalar(P.intensity * T), P.castShadow) {
          const K = P.shadow, D = n.get(P);
          D.shadowBias = K.bias, D.shadowNormalBias = K.normalBias, D.shadowRadius = K.radius, D.shadowMapSize = K.mapSize, r.directionalShadow[x] = D, r.directionalShadowMap[x] = ee, r.directionalShadowMatrix[x] = P.shadow.matrix, R++;
        }
        r.directional[x] = q, x++;
      } else if (P.isSpotLight) {
        const q = t.get(P);
        q.position.setFromMatrixPosition(P.matrixWorld), q.color.copy(H).multiplyScalar(j * T), q.distance = X, q.coneCos = Math.cos(P.angle), q.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), q.decay = P.decay, r.spot[h] = q;
        const K = P.shadow;
        if (P.map && (r.spotLightMap[b] = P.map, b++, K.updateMatrices(P), P.castShadow && G++), r.spotLightMatrix[h] = K.matrix, P.castShadow) {
          const D = n.get(P);
          D.shadowBias = K.bias, D.shadowNormalBias = K.normalBias, D.shadowRadius = K.radius, D.shadowMapSize = K.mapSize, r.spotShadow[h] = D, r.spotShadowMap[h] = ee, L++;
        }
        h++;
      } else if (P.isRectAreaLight) {
        const q = t.get(P);
        q.color.copy(H).multiplyScalar(j), q.halfWidth.set(P.width * 0.5, 0, 0), q.halfHeight.set(0, P.height * 0.5, 0), r.rectArea[y] = q, y++;
      } else if (P.isPointLight) {
        const q = t.get(P);
        if (q.color.copy(P.color).multiplyScalar(P.intensity * T), q.distance = P.distance, q.decay = P.decay, P.castShadow) {
          const K = P.shadow, D = n.get(P);
          D.shadowBias = K.bias, D.shadowNormalBias = K.normalBias, D.shadowRadius = K.radius, D.shadowMapSize = K.mapSize, D.shadowCameraNear = K.camera.near, D.shadowCameraFar = K.camera.far, r.pointShadow[p] = D, r.pointShadowMap[p] = ee, r.pointShadowMatrix[p] = P.shadow.matrix, A++;
        }
        r.point[p] = q, p++;
      } else if (P.isHemisphereLight) {
        const q = t.get(P);
        q.skyColor.copy(P.color).multiplyScalar(j * T), q.groundColor.copy(P.groundColor).multiplyScalar(j * T), r.hemi[v] = q, v++;
      }
    }
    y > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === true ? (r.rectAreaLTC1 = oe.LTC_FLOAT_1, r.rectAreaLTC2 = oe.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === true ? (r.rectAreaLTC1 = oe.LTC_HALF_1, r.rectAreaLTC2 = oe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = d, r.ambient[1] = m, r.ambient[2] = _;
    const k = r.hash;
    (k.directionalLength !== x || k.pointLength !== p || k.spotLength !== h || k.rectAreaLength !== y || k.hemiLength !== v || k.numDirectionalShadows !== R || k.numPointShadows !== A || k.numSpotShadows !== L || k.numSpotMaps !== b || k.numLightProbes !== S) && (r.directional.length = x, r.spot.length = h, r.rectArea.length = y, r.point.length = p, r.hemi.length = v, r.directionalShadow.length = R, r.directionalShadowMap.length = R, r.pointShadow.length = A, r.pointShadowMap.length = A, r.spotShadow.length = L, r.spotShadowMap.length = L, r.directionalShadowMatrix.length = R, r.pointShadowMatrix.length = A, r.spotLightMatrix.length = L + b - G, r.spotLightMap.length = b, r.numSpotLightShadowsWithMaps = G, r.numLightProbes = S, k.directionalLength = x, k.pointLength = p, k.spotLength = h, k.rectAreaLength = y, k.hemiLength = v, k.numDirectionalShadows = R, k.numPointShadows = A, k.numSpotShadows = L, k.numSpotMaps = b, k.numLightProbes = S, r.version = Ip++);
  }
  function c(u, f) {
    let d = 0, m = 0, _ = 0, x = 0, p = 0;
    const h = f.matrixWorldInverse;
    for (let y = 0, v = u.length; y < v; y++) {
      const R = u[y];
      if (R.isDirectionalLight) {
        const A = r.directional[d];
        A.direction.setFromMatrixPosition(R.matrixWorld), s.setFromMatrixPosition(R.target.matrixWorld), A.direction.sub(s), A.direction.transformDirection(h), d++;
      } else if (R.isSpotLight) {
        const A = r.spot[_];
        A.position.setFromMatrixPosition(R.matrixWorld), A.position.applyMatrix4(h), A.direction.setFromMatrixPosition(R.matrixWorld), s.setFromMatrixPosition(R.target.matrixWorld), A.direction.sub(s), A.direction.transformDirection(h), _++;
      } else if (R.isRectAreaLight) {
        const A = r.rectArea[x];
        A.position.setFromMatrixPosition(R.matrixWorld), A.position.applyMatrix4(h), a.identity(), o.copy(R.matrixWorld), o.premultiply(h), a.extractRotation(o), A.halfWidth.set(R.width * 0.5, 0, 0), A.halfHeight.set(0, R.height * 0.5, 0), A.halfWidth.applyMatrix4(a), A.halfHeight.applyMatrix4(a), x++;
      } else if (R.isPointLight) {
        const A = r.point[m];
        A.position.setFromMatrixPosition(R.matrixWorld), A.position.applyMatrix4(h), m++;
      } else if (R.isHemisphereLight) {
        const A = r.hemi[p];
        A.direction.setFromMatrixPosition(R.matrixWorld), A.direction.transformDirection(h), p++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function Po(i, e) {
  const t = new Fp(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(f) {
    n.push(f);
  }
  function a(f) {
    r.push(f);
  }
  function l(f) {
    t.setup(n, f);
  }
  function c(f) {
    t.setupView(n, f);
  }
  return { init: s, state: { lightsArray: n, shadowsArray: r, lights: t }, setupLights: l, setupLightsView: c, pushLight: o, pushShadow: a };
}
function Op(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? (l = new Po(i, e), t.set(s, [l])) : o >= a.length ? (l = new Po(i, e), a.push(l)) : l = a[o], l;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
class Bp extends Ai {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Nc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class zp extends Ai {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Hp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Vp(i, e, t) {
  let n = new Zs();
  const r = new Ce(), s = new Ce(), o = new ht(), a = new Bp({ depthPacking: Fc }), l = new zp(), c = {}, u = t.maxTextureSize, f = { [wn]: bt, [bt]: wn, [$t]: $t }, d = new Wn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ce() }, radius: { value: 4 } }, vertexShader: Hp, fragmentShader: Gp }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new en();
  _.setAttribute("position", new Jt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const x = new Yt(_, d), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = tl;
  let h = this.type;
  this.render = function(A, L, b) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || A.length === 0) return;
    const G = i.getRenderTarget(), S = i.getActiveCubeFace(), T = i.getActiveMipmapLevel(), k = i.state;
    k.setBlending(yn), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(true), k.setScissorTest(false);
    const J = h !== ln && this.type === ln, Q = h === ln && this.type !== ln;
    for (let P = 0, H = A.length; P < H; P++) {
      const j = A[P], X = j.shadow;
      if (X === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (X.autoUpdate === false && X.needsUpdate === false) continue;
      r.copy(X.mapSize);
      const ee = X.getFrameExtents();
      if (r.multiply(ee), s.copy(X.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / ee.x), r.x = s.x * ee.x, X.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / ee.y), r.y = s.y * ee.y, X.mapSize.y = s.y)), X.map === null || J === true || Q === true) {
        const K = this.type !== ln ? { minFilter: xt, magFilter: xt } : {};
        X.map !== null && X.map.dispose(), X.map = new Vn(r.x, r.y, K), X.map.texture.name = j.name + ".shadowMap", X.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(X.map), i.clear();
      const q = X.getViewportCount();
      for (let K = 0; K < q; K++) {
        const D = X.getViewport(K);
        o.set(s.x * D.x, s.y * D.y, s.x * D.z, s.y * D.w), k.viewport(o), X.updateMatrices(j, K), n = X.getFrustum(), R(L, b, X.camera, j, this.type);
      }
      X.isPointLightShadow !== true && this.type === ln && y(X, b), X.needsUpdate = false;
    }
    h = this.type, p.needsUpdate = false, i.setRenderTarget(G, S, T);
  };
  function y(A, L) {
    const b = e.update(x);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, m.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = true, m.needsUpdate = true), A.mapPass === null && (A.mapPass = new Vn(r.x, r.y)), d.uniforms.shadow_pass.value = A.map.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, i.setRenderTarget(A.mapPass), i.clear(), i.renderBufferDirect(L, null, b, d, x, null), m.uniforms.shadow_pass.value = A.mapPass.texture, m.uniforms.resolution.value = A.mapSize, m.uniforms.radius.value = A.radius, i.setRenderTarget(A.map), i.clear(), i.renderBufferDirect(L, null, b, m, x, null);
  }
  function v(A, L, b, G) {
    let S = null;
    const T = b.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (T !== void 0) S = T;
    else if (S = b.isPointLight === true ? l : a, i.localClippingEnabled && L.clipShadows === true && Array.isArray(L.clippingPlanes) && L.clippingPlanes.length !== 0 || L.displacementMap && L.displacementScale !== 0 || L.alphaMap && L.alphaTest > 0 || L.map && L.alphaTest > 0) {
      const k = S.uuid, J = L.uuid;
      let Q = c[k];
      Q === void 0 && (Q = {}, c[k] = Q);
      let P = Q[J];
      P === void 0 && (P = S.clone(), Q[J] = P), S = P;
    }
    if (S.visible = L.visible, S.wireframe = L.wireframe, G === ln ? S.side = L.shadowSide !== null ? L.shadowSide : L.side : S.side = L.shadowSide !== null ? L.shadowSide : f[L.side], S.alphaMap = L.alphaMap, S.alphaTest = L.alphaTest, S.map = L.map, S.clipShadows = L.clipShadows, S.clippingPlanes = L.clippingPlanes, S.clipIntersection = L.clipIntersection, S.displacementMap = L.displacementMap, S.displacementScale = L.displacementScale, S.displacementBias = L.displacementBias, S.wireframeLinewidth = L.wireframeLinewidth, S.linewidth = L.linewidth, b.isPointLight === true && S.isMeshDistanceMaterial === true) {
      const k = i.properties.get(S);
      k.light = b;
    }
    return S;
  }
  function R(A, L, b, G, S) {
    if (A.visible === false) return;
    if (A.layers.test(L.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && S === ln) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, A.matrixWorld);
      const J = e.update(A), Q = A.material;
      if (Array.isArray(Q)) {
        const P = J.groups;
        for (let H = 0, j = P.length; H < j; H++) {
          const X = P[H], ee = Q[X.materialIndex];
          if (ee && ee.visible) {
            const q = v(A, ee, G, S);
            i.renderBufferDirect(b, null, J, q, A, X);
          }
        }
      } else if (Q.visible) {
        const P = v(A, Q, G, S);
        i.renderBufferDirect(b, null, J, P, A, null);
      }
    }
    const k = A.children;
    for (let J = 0, Q = k.length; J < Q; J++) R(k[J], L, b, G, S);
  }
}
function kp(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let C = false;
    const ae = new ht();
    let $ = null;
    const V = new ht(0, 0, 0, 0);
    return { setMask: function(ie) {
      $ !== ie && !C && (i.colorMask(ie, ie, ie, ie), $ = ie);
    }, setLocked: function(ie) {
      C = ie;
    }, setClear: function(ie, ve, He, et, It) {
      It === true && (ie *= et, ve *= et, He *= et), ae.set(ie, ve, He, et), V.equals(ae) === false && (i.clearColor(ie, ve, He, et), V.copy(ae));
    }, reset: function() {
      C = false, $ = null, V.set(-1, 0, 0, 0);
    } };
  }
  function s() {
    let C = false, ae = null, $ = null, V = null;
    return { setTest: function(ie) {
      ie ? Re(i.DEPTH_TEST) : qe(i.DEPTH_TEST);
    }, setMask: function(ie) {
      ae !== ie && !C && (i.depthMask(ie), ae = ie);
    }, setFunc: function(ie) {
      if ($ !== ie) {
        switch (ie) {
          case fc:
            i.depthFunc(i.NEVER);
            break;
          case dc:
            i.depthFunc(i.ALWAYS);
            break;
          case pc:
            i.depthFunc(i.LESS);
            break;
          case br:
            i.depthFunc(i.LEQUAL);
            break;
          case mc:
            i.depthFunc(i.EQUAL);
            break;
          case gc:
            i.depthFunc(i.GEQUAL);
            break;
          case _c:
            i.depthFunc(i.GREATER);
            break;
          case vc:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        $ = ie;
      }
    }, setLocked: function(ie) {
      C = ie;
    }, setClear: function(ie) {
      V !== ie && (i.clearDepth(ie), V = ie);
    }, reset: function() {
      C = false, ae = null, $ = null, V = null;
    } };
  }
  function o() {
    let C = false, ae = null, $ = null, V = null, ie = null, ve = null, He = null, et = null, It = null;
    return { setTest: function(Xe) {
      C || (Xe ? Re(i.STENCIL_TEST) : qe(i.STENCIL_TEST));
    }, setMask: function(Xe) {
      ae !== Xe && !C && (i.stencilMask(Xe), ae = Xe);
    }, setFunc: function(Xe, gt, Kt) {
      ($ !== Xe || V !== gt || ie !== Kt) && (i.stencilFunc(Xe, gt, Kt), $ = Xe, V = gt, ie = Kt);
    }, setOp: function(Xe, gt, Kt) {
      (ve !== Xe || He !== gt || et !== Kt) && (i.stencilOp(Xe, gt, Kt), ve = Xe, He = gt, et = Kt);
    }, setLocked: function(Xe) {
      C = Xe;
    }, setClear: function(Xe) {
      It !== Xe && (i.clearStencil(Xe), It = Xe);
    }, reset: function() {
      C = false, ae = null, $ = null, V = null, ie = null, ve = null, He = null, et = null, It = null;
    } };
  }
  const a = new r(), l = new s(), c = new o(), u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, _ = /* @__PURE__ */ new WeakMap(), x = [], p = null, h = false, y = null, v = null, R = null, A = null, L = null, b = null, G = null, S = new Ve(0, 0, 0), T = 0, k = false, J = null, Q = null, P = null, H = null, j = null;
  const X = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = false, q = 0;
  const K = i.getParameter(i.VERSION);
  K.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(K)[1]), ee = q >= 1) : K.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), ee = q >= 2);
  let D = null, W = {};
  const ce = i.getParameter(i.SCISSOR_BOX), ue = i.getParameter(i.VIEWPORT), de = new ht().fromArray(ce), ye = new ht().fromArray(ue);
  function Be(C, ae, $, V) {
    const ie = new Uint8Array(4), ve = i.createTexture();
    i.bindTexture(C, ve), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let He = 0; He < $; He++) n && (C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY) ? i.texImage3D(ae, 0, i.RGBA, 1, 1, V, 0, i.RGBA, i.UNSIGNED_BYTE, ie) : i.texImage2D(ae + He, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ie);
    return ve;
  }
  const Te = {};
  Te[i.TEXTURE_2D] = Be(i.TEXTURE_2D, i.TEXTURE_2D, 1), Te[i.TEXTURE_CUBE_MAP] = Be(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Te[i.TEXTURE_2D_ARRAY] = Be(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Te[i.TEXTURE_3D] = Be(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Re(i.DEPTH_TEST), l.setFunc(br), De(false), Le(ha), Re(i.CULL_FACE), Ae(yn);
  function Re(C) {
    d[C] !== true && (i.enable(C), d[C] = true);
  }
  function qe(C) {
    d[C] !== false && (i.disable(C), d[C] = false);
  }
  function Ie(C, ae) {
    return m[C] !== ae ? (i.bindFramebuffer(C, ae), m[C] = ae, n && (C === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = ae), C === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = ae)), true) : false;
  }
  function N(C, ae) {
    let $ = x, V = false;
    if (C) if ($ = _.get(ae), $ === void 0 && ($ = [], _.set(ae, $)), C.isWebGLMultipleRenderTargets) {
      const ie = C.texture;
      if ($.length !== ie.length || $[0] !== i.COLOR_ATTACHMENT0) {
        for (let ve = 0, He = ie.length; ve < He; ve++) $[ve] = i.COLOR_ATTACHMENT0 + ve;
        $.length = ie.length, V = true;
      }
    } else $[0] !== i.COLOR_ATTACHMENT0 && ($[0] = i.COLOR_ATTACHMENT0, V = true);
    else $[0] !== i.BACK && ($[0] = i.BACK, V = true);
    V && (t.isWebGL2 ? i.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function dt(C) {
    return p !== C ? (i.useProgram(C), p = C, true) : false;
  }
  const xe = { [Fn]: i.FUNC_ADD, [$l]: i.FUNC_SUBTRACT, [Jl]: i.FUNC_REVERSE_SUBTRACT };
  if (n) xe[ma] = i.MIN, xe[ga] = i.MAX;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (xe[ma] = C.MIN_EXT, xe[ga] = C.MAX_EXT);
  }
  const be = { [Ql]: i.ZERO, [ec]: i.ONE, [tc]: i.SRC_COLOR, [Ps]: i.SRC_ALPHA, [oc]: i.SRC_ALPHA_SATURATE, [sc]: i.DST_COLOR, [ic]: i.DST_ALPHA, [nc]: i.ONE_MINUS_SRC_COLOR, [Ds]: i.ONE_MINUS_SRC_ALPHA, [ac]: i.ONE_MINUS_DST_COLOR, [rc]: i.ONE_MINUS_DST_ALPHA, [lc]: i.CONSTANT_COLOR, [cc]: i.ONE_MINUS_CONSTANT_COLOR, [uc]: i.CONSTANT_ALPHA, [hc]: i.ONE_MINUS_CONSTANT_ALPHA };
  function Ae(C, ae, $, V, ie, ve, He, et, It, Xe) {
    if (C === yn) {
      h === true && (qe(i.BLEND), h = false);
      return;
    }
    if (h === false && (Re(i.BLEND), h = true), C !== Zl) {
      if (C !== y || Xe !== k) {
        if ((v !== Fn || L !== Fn) && (i.blendEquation(i.FUNC_ADD), v = Fn, L = Fn), Xe) switch (C) {
          case pi:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case fa:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case da:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case pa:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        else switch (C) {
          case pi:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case fa:
            i.blendFunc(i.SRC_ALPHA, i.ONE);
            break;
          case da:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case pa:
            i.blendFunc(i.ZERO, i.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        R = null, A = null, b = null, G = null, S.set(0, 0, 0), T = 0, y = C, k = Xe;
      }
      return;
    }
    ie = ie || ae, ve = ve || $, He = He || V, (ae !== v || ie !== L) && (i.blendEquationSeparate(xe[ae], xe[ie]), v = ae, L = ie), ($ !== R || V !== A || ve !== b || He !== G) && (i.blendFuncSeparate(be[$], be[V], be[ve], be[He]), R = $, A = V, b = ve, G = He), (et.equals(S) === false || It !== T) && (i.blendColor(et.r, et.g, et.b, It), S.copy(et), T = It), y = C, k = false;
  }
  function Ke(C, ae) {
    C.side === $t ? qe(i.CULL_FACE) : Re(i.CULL_FACE);
    let $ = C.side === bt;
    ae && ($ = !$), De($), C.blending === pi && C.transparent === false ? Ae(yn) : Ae(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), a.setMask(C.colorWrite);
    const V = C.stencilWrite;
    c.setTest(V), V && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), Qe(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === true ? Re(i.SAMPLE_ALPHA_TO_COVERAGE) : qe(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function De(C) {
    J !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), J = C);
  }
  function Le(C) {
    C !== jl ? (Re(i.CULL_FACE), C !== Q && (C === ha ? i.cullFace(i.BACK) : C === Kl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : qe(i.CULL_FACE), Q = C;
  }
  function ke(C) {
    C !== P && (ee && i.lineWidth(C), P = C);
  }
  function Qe(C, ae, $) {
    C ? (Re(i.POLYGON_OFFSET_FILL), (H !== ae || j !== $) && (i.polygonOffset(ae, $), H = ae, j = $)) : qe(i.POLYGON_OFFSET_FILL);
  }
  function at(C) {
    C ? Re(i.SCISSOR_TEST) : qe(i.SCISSOR_TEST);
  }
  function E(C) {
    C === void 0 && (C = i.TEXTURE0 + X - 1), D !== C && (i.activeTexture(C), D = C);
  }
  function g(C, ae, $) {
    $ === void 0 && (D === null ? $ = i.TEXTURE0 + X - 1 : $ = D);
    let V = W[$];
    V === void 0 && (V = { type: void 0, texture: void 0 }, W[$] = V), (V.type !== C || V.texture !== ae) && (D !== $ && (i.activeTexture($), D = $), i.bindTexture(C, ae || Te[C]), V.type = C, V.texture = ae);
  }
  function F() {
    const C = W[D];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function te() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ne() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function w() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function re() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Y() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Se() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ge(C) {
    de.equals(C) === false && (i.scissor(C.x, C.y, C.z, C.w), de.copy(C));
  }
  function Me(C) {
    ye.equals(C) === false && (i.viewport(C.x, C.y, C.z, C.w), ye.copy(C));
  }
  function pe(C, ae) {
    let $ = f.get(ae);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), f.set(ae, $));
    let V = $.get(C);
    V === void 0 && (V = i.getUniformBlockIndex(ae, C.name), $.set(C, V));
  }
  function fe(C, ae) {
    const V = f.get(ae).get(C);
    u.get(ae) !== V && (i.uniformBlockBinding(ae, V, C.__bindingPointIndex), u.set(ae, V));
  }
  function ze() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === true && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, D = null, W = {}, m = {}, _ = /* @__PURE__ */ new WeakMap(), x = [], p = null, h = false, y = null, v = null, R = null, A = null, L = null, b = null, G = null, S = new Ve(0, 0, 0), T = 0, k = false, J = null, Q = null, P = null, H = null, j = null, de.set(0, 0, i.canvas.width, i.canvas.height), ye.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return { buffers: { color: a, depth: l, stencil: c }, enable: Re, disable: qe, bindFramebuffer: Ie, drawBuffers: N, useProgram: dt, setBlending: Ae, setMaterial: Ke, setFlipSided: De, setCullFace: Le, setLineWidth: ke, setPolygonOffset: Qe, setScissorTest: at, activeTexture: E, bindTexture: g, unbindTexture: F, compressedTexImage2D: te, compressedTexImage3D: Z, texImage2D: Y, texImage3D: Se, updateUBOMapping: pe, uniformBlockBinding: fe, texStorage2D: w, texStorage3D: re, texSubImage2D: ne, texSubImage3D: me, compressedTexSubImage2D: se, compressedTexSubImage3D: le, scissor: ge, viewport: Me, reset: ze };
}
function Wp(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, u = r.maxTextureSize, f = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), _ = /* @__PURE__ */ new WeakMap();
  let x;
  const p = /* @__PURE__ */ new WeakMap();
  let h = false;
  try {
    h = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(E, g) {
    return h ? new OffscreenCanvas(E, g) : Lr("canvas");
  }
  function v(E, g, F, te) {
    let Z = 1;
    if ((E.width > te || E.height > te) && (Z = te / Math.max(E.width, E.height)), Z < 1 || g === true) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
      const ne = g ? zs : Math.floor, me = ne(Z * E.width), se = ne(Z * E.height);
      x === void 0 && (x = y(me, se));
      const le = F ? y(me, se) : x;
      return le.width = me, le.height = se, le.getContext("2d").drawImage(E, 0, 0, me, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + me + "x" + se + ")."), le;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function R(E) {
    return qa(E.width) && qa(E.height);
  }
  function A(E) {
    return a ? false : E.wrapS !== Xt || E.wrapT !== Xt || E.minFilter !== xt && E.minFilter !== Ft;
  }
  function L(E, g) {
    return E.generateMipmaps && g && E.minFilter !== xt && E.minFilter !== Ft;
  }
  function b(E) {
    i.generateMipmap(E);
  }
  function G(E, g, F, te, Z = false) {
    if (a === false) return g;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let ne = g;
    if (g === i.RED && (F === i.FLOAT && (ne = i.R32F), F === i.HALF_FLOAT && (ne = i.R16F), F === i.UNSIGNED_BYTE && (ne = i.R8)), g === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (ne = i.R8UI), F === i.UNSIGNED_SHORT && (ne = i.R16UI), F === i.UNSIGNED_INT && (ne = i.R32UI), F === i.BYTE && (ne = i.R8I), F === i.SHORT && (ne = i.R16I), F === i.INT && (ne = i.R32I)), g === i.RG && (F === i.FLOAT && (ne = i.RG32F), F === i.HALF_FLOAT && (ne = i.RG16F), F === i.UNSIGNED_BYTE && (ne = i.RG8)), g === i.RGBA) {
      const me = Z ? Ar : We.getTransfer(te);
      F === i.FLOAT && (ne = i.RGBA32F), F === i.HALF_FLOAT && (ne = i.RGBA16F), F === i.UNSIGNED_BYTE && (ne = me === Ye ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (ne = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (ne = i.RGB5_A1);
    }
    return (ne === i.R16F || ne === i.R32F || ne === i.RG16F || ne === i.RG32F || ne === i.RGBA16F || ne === i.RGBA32F) && e.get("EXT_color_buffer_float"), ne;
  }
  function S(E, g, F) {
    return L(E, F) === true || E.isFramebufferTexture && E.minFilter !== xt && E.minFilter !== Ft ? Math.log2(Math.max(g.width, g.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? g.mipmaps.length : 1;
  }
  function T(E) {
    return E === xt || E === _a || E === Xr ? i.NEAREST : i.LINEAR;
  }
  function k(E) {
    const g = E.target;
    g.removeEventListener("dispose", k), Q(g), g.isVideoTexture && _.delete(g);
  }
  function J(E) {
    const g = E.target;
    g.removeEventListener("dispose", J), H(g);
  }
  function Q(E) {
    const g = n.get(E);
    if (g.__webglInit === void 0) return;
    const F = E.source, te = p.get(F);
    if (te) {
      const Z = te[g.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && P(E), Object.keys(te).length === 0 && p.delete(F);
    }
    n.remove(E);
  }
  function P(E) {
    const g = n.get(E);
    i.deleteTexture(g.__webglTexture);
    const F = E.source, te = p.get(F);
    delete te[g.__cacheKey], o.memory.textures--;
  }
  function H(E) {
    const g = E.texture, F = n.get(E), te = n.get(g);
    if (te.__webglTexture !== void 0 && (i.deleteTexture(te.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget) for (let Z = 0; Z < 6; Z++) {
      if (Array.isArray(F.__webglFramebuffer[Z])) for (let ne = 0; ne < F.__webglFramebuffer[Z].length; ne++) i.deleteFramebuffer(F.__webglFramebuffer[Z][ne]);
      else i.deleteFramebuffer(F.__webglFramebuffer[Z]);
      F.__webglDepthbuffer && i.deleteRenderbuffer(F.__webglDepthbuffer[Z]);
    }
    else {
      if (Array.isArray(F.__webglFramebuffer)) for (let Z = 0; Z < F.__webglFramebuffer.length; Z++) i.deleteFramebuffer(F.__webglFramebuffer[Z]);
      else i.deleteFramebuffer(F.__webglFramebuffer);
      if (F.__webglDepthbuffer && i.deleteRenderbuffer(F.__webglDepthbuffer), F.__webglMultisampledFramebuffer && i.deleteFramebuffer(F.__webglMultisampledFramebuffer), F.__webglColorRenderbuffer) for (let Z = 0; Z < F.__webglColorRenderbuffer.length; Z++) F.__webglColorRenderbuffer[Z] && i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);
      F.__webglDepthRenderbuffer && i.deleteRenderbuffer(F.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets) for (let Z = 0, ne = g.length; Z < ne; Z++) {
      const me = n.get(g[Z]);
      me.__webglTexture && (i.deleteTexture(me.__webglTexture), o.memory.textures--), n.remove(g[Z]);
    }
    n.remove(g), n.remove(E);
  }
  let j = 0;
  function X() {
    j = 0;
  }
  function ee() {
    const E = j;
    return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), j += 1, E;
  }
  function q(E) {
    const g = [];
    return g.push(E.wrapS), g.push(E.wrapT), g.push(E.wrapR || 0), g.push(E.magFilter), g.push(E.minFilter), g.push(E.anisotropy), g.push(E.internalFormat), g.push(E.format), g.push(E.type), g.push(E.generateMipmaps), g.push(E.premultiplyAlpha), g.push(E.flipY), g.push(E.unpackAlignment), g.push(E.colorSpace), g.join();
  }
  function K(E, g) {
    const F = n.get(E);
    if (E.isVideoTexture && Qe(E), E.isRenderTargetTexture === false && E.version > 0 && F.__version !== E.version) {
      const te = E.image;
      if (te === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Re(F, E, g);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + g);
  }
  function D(E, g) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      Re(F, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + g);
  }
  function W(E, g) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      Re(F, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + g);
  }
  function ce(E, g) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      qe(F, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + g);
  }
  const ue = { [Ns]: i.REPEAT, [Xt]: i.CLAMP_TO_EDGE, [Fs]: i.MIRRORED_REPEAT }, de = { [xt]: i.NEAREST, [_a]: i.NEAREST_MIPMAP_NEAREST, [Xr]: i.NEAREST_MIPMAP_LINEAR, [Ft]: i.LINEAR, [bc]: i.LINEAR_MIPMAP_NEAREST, [Bi]: i.LINEAR_MIPMAP_LINEAR }, ye = { [Bc]: i.NEVER, [Xc]: i.ALWAYS, [zc]: i.LESS, [Gc]: i.LEQUAL, [Hc]: i.EQUAL, [Wc]: i.GEQUAL, [Vc]: i.GREATER, [kc]: i.NOTEQUAL };
  function Be(E, g, F) {
    if (F ? (i.texParameteri(E, i.TEXTURE_WRAP_S, ue[g.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, ue[g.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, ue[g.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, de[g.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, de[g.minFilter])) : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (g.wrapS !== Xt || g.wrapT !== Xt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(E, i.TEXTURE_MAG_FILTER, T(g.magFilter)), i.texParameteri(E, i.TEXTURE_MIN_FILTER, T(g.minFilter)), g.minFilter !== xt && g.minFilter !== Ft && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), g.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, ye[g.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (g.magFilter === xt || g.minFilter !== Xr && g.minFilter !== Bi || g.type === Sn && e.has("OES_texture_float_linear") === false || a === false && g.type === zi && e.has("OES_texture_half_float_linear") === false) return;
      (g.anisotropy > 1 || n.get(g).__currentAnisotropy) && (i.texParameterf(E, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), n.get(g).__currentAnisotropy = g.anisotropy);
    }
  }
  function Te(E, g) {
    let F = false;
    E.__webglInit === void 0 && (E.__webglInit = true, g.addEventListener("dispose", k));
    const te = g.source;
    let Z = p.get(te);
    Z === void 0 && (Z = {}, p.set(te, Z));
    const ne = q(g);
    if (ne !== E.__cacheKey) {
      Z[ne] === void 0 && (Z[ne] = { texture: i.createTexture(), usedTimes: 0 }, o.memory.textures++, F = true), Z[ne].usedTimes++;
      const me = Z[E.__cacheKey];
      me !== void 0 && (Z[E.__cacheKey].usedTimes--, me.usedTimes === 0 && P(g)), E.__cacheKey = ne, E.__webglTexture = Z[ne].texture;
    }
    return F;
  }
  function Re(E, g, F) {
    let te = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (te = i.TEXTURE_2D_ARRAY), g.isData3DTexture && (te = i.TEXTURE_3D);
    const Z = Te(E, g), ne = g.source;
    t.bindTexture(te, E.__webglTexture, i.TEXTURE0 + F);
    const me = n.get(ne);
    if (ne.version !== me.__version || Z === true) {
      t.activeTexture(i.TEXTURE0 + F);
      const se = We.getPrimaries(We.workingColorSpace), le = g.colorSpace === zt ? null : We.getPrimaries(g.colorSpace), w = g.colorSpace === zt || se === le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, w);
      const re = A(g) && R(g.image) === false;
      let Y = v(g.image, re, false, u);
      Y = at(g, Y);
      const Se = R(Y) || a, ge = s.convert(g.format, g.colorSpace);
      let Me = s.convert(g.type), pe = G(g.internalFormat, ge, Me, g.colorSpace, g.isVideoTexture);
      Be(te, g, Se);
      let fe;
      const ze = g.mipmaps, C = a && g.isVideoTexture !== true, ae = me.__version === void 0 || Z === true, $ = S(g, Y, Se);
      if (g.isDepthTexture) pe = i.DEPTH_COMPONENT, a ? g.type === Sn ? pe = i.DEPTH_COMPONENT32F : g.type === Mn ? pe = i.DEPTH_COMPONENT24 : g.type === zn ? pe = i.DEPTH24_STENCIL8 : pe = i.DEPTH_COMPONENT16 : g.type === Sn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), g.format === Hn && pe === i.DEPTH_COMPONENT && g.type !== Ys && g.type !== Mn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), g.type = Mn, Me = s.convert(g.type)), g.format === vi && pe === i.DEPTH_COMPONENT && (pe = i.DEPTH_STENCIL, g.type !== zn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), g.type = zn, Me = s.convert(g.type))), ae && (C ? t.texStorage2D(i.TEXTURE_2D, 1, pe, Y.width, Y.height) : t.texImage2D(i.TEXTURE_2D, 0, pe, Y.width, Y.height, 0, ge, Me, null));
      else if (g.isDataTexture) if (ze.length > 0 && Se) {
        C && ae && t.texStorage2D(i.TEXTURE_2D, $, pe, ze[0].width, ze[0].height);
        for (let V = 0, ie = ze.length; V < ie; V++) fe = ze[V], C ? t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, fe.width, fe.height, ge, Me, fe.data) : t.texImage2D(i.TEXTURE_2D, V, pe, fe.width, fe.height, 0, ge, Me, fe.data);
        g.generateMipmaps = false;
      } else C ? (ae && t.texStorage2D(i.TEXTURE_2D, $, pe, Y.width, Y.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Y.width, Y.height, ge, Me, Y.data)) : t.texImage2D(i.TEXTURE_2D, 0, pe, Y.width, Y.height, 0, ge, Me, Y.data);
      else if (g.isCompressedTexture) if (g.isCompressedArrayTexture) {
        C && ae && t.texStorage3D(i.TEXTURE_2D_ARRAY, $, pe, ze[0].width, ze[0].height, Y.depth);
        for (let V = 0, ie = ze.length; V < ie; V++) fe = ze[V], g.format !== qt ? ge !== null ? C ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, fe.width, fe.height, Y.depth, ge, fe.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, V, pe, fe.width, fe.height, Y.depth, 0, fe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, fe.width, fe.height, Y.depth, ge, Me, fe.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, V, pe, fe.width, fe.height, Y.depth, 0, ge, Me, fe.data);
      } else {
        C && ae && t.texStorage2D(i.TEXTURE_2D, $, pe, ze[0].width, ze[0].height);
        for (let V = 0, ie = ze.length; V < ie; V++) fe = ze[V], g.format !== qt ? ge !== null ? C ? t.compressedTexSubImage2D(i.TEXTURE_2D, V, 0, 0, fe.width, fe.height, ge, fe.data) : t.compressedTexImage2D(i.TEXTURE_2D, V, pe, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, fe.width, fe.height, ge, Me, fe.data) : t.texImage2D(i.TEXTURE_2D, V, pe, fe.width, fe.height, 0, ge, Me, fe.data);
      }
      else if (g.isDataArrayTexture) C ? (ae && t.texStorage3D(i.TEXTURE_2D_ARRAY, $, pe, Y.width, Y.height, Y.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Y.width, Y.height, Y.depth, ge, Me, Y.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, pe, Y.width, Y.height, Y.depth, 0, ge, Me, Y.data);
      else if (g.isData3DTexture) C ? (ae && t.texStorage3D(i.TEXTURE_3D, $, pe, Y.width, Y.height, Y.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Y.width, Y.height, Y.depth, ge, Me, Y.data)) : t.texImage3D(i.TEXTURE_3D, 0, pe, Y.width, Y.height, Y.depth, 0, ge, Me, Y.data);
      else if (g.isFramebufferTexture) {
        if (ae) if (C) t.texStorage2D(i.TEXTURE_2D, $, pe, Y.width, Y.height);
        else {
          let V = Y.width, ie = Y.height;
          for (let ve = 0; ve < $; ve++) t.texImage2D(i.TEXTURE_2D, ve, pe, V, ie, 0, ge, Me, null), V >>= 1, ie >>= 1;
        }
      } else if (ze.length > 0 && Se) {
        C && ae && t.texStorage2D(i.TEXTURE_2D, $, pe, ze[0].width, ze[0].height);
        for (let V = 0, ie = ze.length; V < ie; V++) fe = ze[V], C ? t.texSubImage2D(i.TEXTURE_2D, V, 0, 0, ge, Me, fe) : t.texImage2D(i.TEXTURE_2D, V, pe, ge, Me, fe);
        g.generateMipmaps = false;
      } else C ? (ae && t.texStorage2D(i.TEXTURE_2D, $, pe, Y.width, Y.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ge, Me, Y)) : t.texImage2D(i.TEXTURE_2D, 0, pe, ge, Me, Y);
      L(g, Se) && b(te), me.__version = ne.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function qe(E, g, F) {
    if (g.image.length !== 6) return;
    const te = Te(E, g), Z = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + F);
    const ne = n.get(Z);
    if (Z.version !== ne.__version || te === true) {
      t.activeTexture(i.TEXTURE0 + F);
      const me = We.getPrimaries(We.workingColorSpace), se = g.colorSpace === zt ? null : We.getPrimaries(g.colorSpace), le = g.colorSpace === zt || me === se ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, le);
      const w = g.isCompressedTexture || g.image[0].isCompressedTexture, re = g.image[0] && g.image[0].isDataTexture, Y = [];
      for (let V = 0; V < 6; V++) !w && !re ? Y[V] = v(g.image[V], false, true, c) : Y[V] = re ? g.image[V].image : g.image[V], Y[V] = at(g, Y[V]);
      const Se = Y[0], ge = R(Se) || a, Me = s.convert(g.format, g.colorSpace), pe = s.convert(g.type), fe = G(g.internalFormat, Me, pe, g.colorSpace), ze = a && g.isVideoTexture !== true, C = ne.__version === void 0 || te === true;
      let ae = S(g, Se, ge);
      Be(i.TEXTURE_CUBE_MAP, g, ge);
      let $;
      if (w) {
        ze && C && t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, fe, Se.width, Se.height);
        for (let V = 0; V < 6; V++) {
          $ = Y[V].mipmaps;
          for (let ie = 0; ie < $.length; ie++) {
            const ve = $[ie];
            g.format !== qt ? Me !== null ? ze ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, 0, 0, ve.width, ve.height, Me, ve.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, fe, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, 0, 0, ve.width, ve.height, Me, pe, ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie, fe, ve.width, ve.height, 0, Me, pe, ve.data);
          }
        }
      } else {
        $ = g.mipmaps, ze && C && ($.length > 0 && ae++, t.texStorage2D(i.TEXTURE_CUBE_MAP, ae, fe, Y[0].width, Y[0].height));
        for (let V = 0; V < 6; V++) if (re) {
          ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, Y[V].width, Y[V].height, Me, pe, Y[V].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, fe, Y[V].width, Y[V].height, 0, Me, pe, Y[V].data);
          for (let ie = 0; ie < $.length; ie++) {
            const He = $[ie].image[V].image;
            ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, 0, 0, He.width, He.height, Me, pe, He.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, fe, He.width, He.height, 0, Me, pe, He.data);
          }
        } else {
          ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, Me, pe, Y[V]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, fe, Me, pe, Y[V]);
          for (let ie = 0; ie < $.length; ie++) {
            const ve = $[ie];
            ze ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, 0, 0, Me, pe, ve.image[V]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + V, ie + 1, fe, Me, pe, ve.image[V]);
          }
        }
      }
      L(g, ge) && b(i.TEXTURE_CUBE_MAP), ne.__version = Z.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function Ie(E, g, F, te, Z, ne) {
    const me = s.convert(F.format, F.colorSpace), se = s.convert(F.type), le = G(F.internalFormat, me, se, F.colorSpace);
    if (!n.get(g).__hasExternalTextures) {
      const re = Math.max(1, g.width >> ne), Y = Math.max(1, g.height >> ne);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, ne, le, re, Y, g.depth, 0, me, se, null) : t.texImage2D(Z, ne, le, re, Y, 0, me, se, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), ke(g) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, te, Z, n.get(F).__webglTexture, 0, Le(g)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, te, Z, n.get(F).__webglTexture, ne), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function N(E, g, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), g.depthBuffer && !g.stencilBuffer) {
      let te = a === true ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (F || ke(g)) {
        const Z = g.depthTexture;
        Z && Z.isDepthTexture && (Z.type === Sn ? te = i.DEPTH_COMPONENT32F : Z.type === Mn && (te = i.DEPTH_COMPONENT24));
        const ne = Le(g);
        ke(g) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ne, te, g.width, g.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ne, te, g.width, g.height);
      } else i.renderbufferStorage(i.RENDERBUFFER, te, g.width, g.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, E);
    } else if (g.depthBuffer && g.stencilBuffer) {
      const te = Le(g);
      F && ke(g) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, te, i.DEPTH24_STENCIL8, g.width, g.height) : ke(g) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, te, i.DEPTH24_STENCIL8, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, g.width, g.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, E);
    } else {
      const te = g.isWebGLMultipleRenderTargets === true ? g.texture : [g.texture];
      for (let Z = 0; Z < te.length; Z++) {
        const ne = te[Z], me = s.convert(ne.format, ne.colorSpace), se = s.convert(ne.type), le = G(ne.internalFormat, me, se, ne.colorSpace), w = Le(g);
        F && ke(g) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, w, le, g.width, g.height) : ke(g) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, w, le, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, le, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function dt(E, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(g.depthTexture && g.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(g.depthTexture).__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = true), K(g.depthTexture, 0);
    const te = n.get(g.depthTexture).__webglTexture, Z = Le(g);
    if (g.depthTexture.format === Hn) ke(g) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, te, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, te, 0);
    else if (g.depthTexture.format === vi) ke(g) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, te, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, te, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function xe(E) {
    const g = n.get(E), F = E.isWebGLCubeRenderTarget === true;
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      dt(g.__webglFramebuffer, E);
    } else if (F) {
      g.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++) t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[te]), g.__webglDepthbuffer[te] = i.createRenderbuffer(), N(g.__webglDepthbuffer[te], E, false);
    } else t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer = i.createRenderbuffer(), N(g.__webglDepthbuffer, E, false);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function be(E, g, F) {
    const te = n.get(E);
    g !== void 0 && Ie(te.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && xe(E);
  }
  function Ae(E) {
    const g = E.texture, F = n.get(E), te = n.get(g);
    E.addEventListener("dispose", J), E.isWebGLMultipleRenderTargets !== true && (te.__webglTexture === void 0 && (te.__webglTexture = i.createTexture()), te.__version = g.version, o.memory.textures++);
    const Z = E.isWebGLCubeRenderTarget === true, ne = E.isWebGLMultipleRenderTargets === true, me = R(E) || a;
    if (Z) {
      F.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++) if (a && g.mipmaps && g.mipmaps.length > 0) {
        F.__webglFramebuffer[se] = [];
        for (let le = 0; le < g.mipmaps.length; le++) F.__webglFramebuffer[se][le] = i.createFramebuffer();
      } else F.__webglFramebuffer[se] = i.createFramebuffer();
    } else {
      if (a && g.mipmaps && g.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let se = 0; se < g.mipmaps.length; se++) F.__webglFramebuffer[se] = i.createFramebuffer();
      } else F.__webglFramebuffer = i.createFramebuffer();
      if (ne) if (r.drawBuffers) {
        const se = E.texture;
        for (let le = 0, w = se.length; le < w; le++) {
          const re = n.get(se[le]);
          re.__webglTexture === void 0 && (re.__webglTexture = i.createTexture(), o.memory.textures++);
        }
      } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && E.samples > 0 && ke(E) === false) {
        const se = ne ? g : [g];
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let le = 0; le < se.length; le++) {
          const w = se[le];
          F.__webglColorRenderbuffer[le] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
          const re = s.convert(w.format, w.colorSpace), Y = s.convert(w.type), Se = G(w.internalFormat, re, Y, w.colorSpace, E.isXRRenderTarget === true), ge = Le(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ge, Se, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + le, i.RENDERBUFFER, F.__webglColorRenderbuffer[le]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), N(F.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, te.__webglTexture), Be(i.TEXTURE_CUBE_MAP, g, me);
      for (let se = 0; se < 6; se++) if (a && g.mipmaps && g.mipmaps.length > 0) for (let le = 0; le < g.mipmaps.length; le++) Ie(F.__webglFramebuffer[se][le], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, le);
      else Ie(F.__webglFramebuffer[se], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      L(g, me) && b(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const se = E.texture;
      for (let le = 0, w = se.length; le < w; le++) {
        const re = se[le], Y = n.get(re);
        t.bindTexture(i.TEXTURE_2D, Y.__webglTexture), Be(i.TEXTURE_2D, re, me), Ie(F.__webglFramebuffer, E, re, i.COLOR_ATTACHMENT0 + le, i.TEXTURE_2D, 0), L(re, me) && b(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? se = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, te.__webglTexture), Be(se, g, me), a && g.mipmaps && g.mipmaps.length > 0) for (let le = 0; le < g.mipmaps.length; le++) Ie(F.__webglFramebuffer[le], E, g, i.COLOR_ATTACHMENT0, se, le);
      else Ie(F.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, se, 0);
      L(g, me) && b(se), t.unbindTexture();
    }
    E.depthBuffer && xe(E);
  }
  function Ke(E) {
    const g = R(E) || a, F = E.isWebGLMultipleRenderTargets === true ? E.texture : [E.texture];
    for (let te = 0, Z = F.length; te < Z; te++) {
      const ne = F[te];
      if (L(ne, g)) {
        const me = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, se = n.get(ne).__webglTexture;
        t.bindTexture(me, se), b(me), t.unbindTexture();
      }
    }
  }
  function De(E) {
    if (a && E.samples > 0 && ke(E) === false) {
      const g = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], F = E.width, te = E.height;
      let Z = i.COLOR_BUFFER_BIT;
      const ne = [], me = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, se = n.get(E), le = E.isWebGLMultipleRenderTargets === true;
      if (le) for (let w = 0; w < g.length; w++) t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + w, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + w, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let w = 0; w < g.length; w++) {
        ne.push(i.COLOR_ATTACHMENT0 + w), E.depthBuffer && ne.push(me);
        const re = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : false;
        if (re === false && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), le && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, se.__webglColorRenderbuffer[w]), re === true && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [me]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [me])), le) {
          const Y = n.get(g[w]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Y, 0);
        }
        i.blitFramebuffer(0, 0, F, te, 0, 0, F, te, Z, i.NEAREST), m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ne);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), le) for (let w = 0; w < g.length; w++) {
        t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + w, i.RENDERBUFFER, se.__webglColorRenderbuffer[w]);
        const re = n.get(g[w]).__webglTexture;
        t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + w, i.TEXTURE_2D, re, 0);
      }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function Le(E) {
    return Math.min(f, E.samples);
  }
  function ke(E) {
    const g = n.get(E);
    return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && g.__useRenderToTexture !== false;
  }
  function Qe(E) {
    const g = o.render.frame;
    _.get(E) !== g && (_.set(E, g), E.update());
  }
  function at(E, g) {
    const F = E.colorSpace, te = E.format, Z = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || E.format === Os || F !== fn && F !== zt && (We.getTransfer(F) === Ye ? a === false ? e.has("EXT_sRGB") === true && te === qt ? (E.format = Os, E.minFilter = Ft, E.generateMipmaps = false) : g = ml.sRGBToLinear(g) : (te !== qt || Z !== bn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), g;
  }
  this.allocateTextureUnit = ee, this.resetTextureUnits = X, this.setTexture2D = K, this.setTexture2DArray = D, this.setTexture3D = W, this.setTextureCube = ce, this.rebindTextures = be, this.setupRenderTarget = Ae, this.updateRenderTargetMipmap = Ke, this.updateMultisampleRenderTarget = De, this.setupDepthRenderbuffer = xe, this.setupFrameBufferTexture = Ie, this.useMultisampledRTT = ke;
}
function Xp(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = zt) {
    let a;
    const l = We.getTransfer(o);
    if (s === bn) return i.UNSIGNED_BYTE;
    if (s === ol) return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === ll) return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === Ac) return i.BYTE;
    if (s === wc) return i.SHORT;
    if (s === Ys) return i.UNSIGNED_SHORT;
    if (s === al) return i.INT;
    if (s === Mn) return i.UNSIGNED_INT;
    if (s === Sn) return i.FLOAT;
    if (s === zi) return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Rc) return i.ALPHA;
    if (s === qt) return i.RGBA;
    if (s === Cc) return i.LUMINANCE;
    if (s === Lc) return i.LUMINANCE_ALPHA;
    if (s === Hn) return i.DEPTH_COMPONENT;
    if (s === vi) return i.DEPTH_STENCIL;
    if (s === Os) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Pc) return i.RED;
    if (s === cl) return i.RED_INTEGER;
    if (s === Dc) return i.RG;
    if (s === ul) return i.RG_INTEGER;
    if (s === hl) return i.RGBA_INTEGER;
    if (s === qr || s === Yr || s === jr || s === Kr) if (l === Ye) if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
      if (s === qr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (s === Yr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (s === jr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (s === Kr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
      if (s === qr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (s === Yr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (s === jr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (s === Kr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (s === va || s === xa || s === Ma || s === Sa) if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
      if (s === va) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (s === xa) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (s === Ma) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (s === Sa) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (s === Uc) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Ea || s === ya) if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
      if (s === Ea) return l === Ye ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
      if (s === ya) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (s === Ta || s === ba || s === Aa || s === wa || s === Ra || s === Ca || s === La || s === Pa || s === Da || s === Ua || s === Ia || s === Na || s === Fa || s === Oa) if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
      if (s === Ta) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (s === ba) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (s === Aa) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (s === wa) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (s === Ra) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (s === Ca) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (s === La) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (s === Pa) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (s === Da) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (s === Ua) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (s === Ia) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (s === Na) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (s === Fa) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (s === Oa) return l === Ye ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (s === Zr || s === Ba || s === za) if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
      if (s === Zr) return l === Ye ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (s === Ba) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (s === za) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (s === Ic || s === Ha || s === Ga || s === Va) if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
      if (s === Zr) return a.COMPRESSED_RED_RGTC1_EXT;
      if (s === Ha) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (s === Ga) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (s === Va) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return s === zn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class qp extends Bt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e;
  }
}
class Bn extends ft {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Yp = { type: "move" };
class Ms {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Bn(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Bn(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Bn(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new U()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = true;
        for (const x of e.hand.values()) {
          const p = t.getJointPose(x, n), h = this._getHandJoint(c, x);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], d = u.position.distanceTo(f.position), m = 0.02, _ = 5e-3;
        c.inputState.pinching && d > m + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= m - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, r.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = false, r.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Yp)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Bn();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class jp extends Dt {
  constructor(e, t, n, r, s, o, a, l, c, u) {
    if (u = u !== void 0 ? u : Hn, u !== Hn && u !== vi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Hn && (n = Mn), n === void 0 && u === vi && (n = zn), super(null, r, s, o, a, l, u, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : xt, this.minFilter = l !== void 0 ? l : xt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Kp extends Xn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, u = null, f = null, d = null, m = null, _ = null;
    const x = t.getContextAttributes();
    let p = null, h = null;
    const y = [], v = [], R = new Bt();
    R.layers.enable(1), R.viewport = new ht();
    const A = new Bt();
    A.layers.enable(2), A.viewport = new ht();
    const L = [R, A], b = new qp();
    b.layers.enable(1), b.layers.enable(2);
    let G = null, S = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(D) {
      let W = y[D];
      return W === void 0 && (W = new Ms(), y[D] = W), W.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let W = y[D];
      return W === void 0 && (W = new Ms(), y[D] = W), W.getGripSpace();
    }, this.getHand = function(D) {
      let W = y[D];
      return W === void 0 && (W = new Ms(), y[D] = W), W.getHandSpace();
    };
    function T(D) {
      const W = v.indexOf(D.inputSource);
      if (W === -1) return;
      const ce = y[W];
      ce !== void 0 && (ce.update(D.inputSource, D.frame, c || o), ce.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function k() {
      r.removeEventListener("select", T), r.removeEventListener("selectstart", T), r.removeEventListener("selectend", T), r.removeEventListener("squeeze", T), r.removeEventListener("squeezestart", T), r.removeEventListener("squeezeend", T), r.removeEventListener("end", k), r.removeEventListener("inputsourceschange", J);
      for (let D = 0; D < y.length; D++) {
        const W = v[D];
        W !== null && (v[D] = null, y[D].disconnect(W));
      }
      G = null, S = null, e.setRenderTarget(p), m = null, d = null, f = null, r = null, h = null, K.stop(), n.isPresenting = false, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(D) {
      s = D, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(D) {
      a = D, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(D) {
      c = D;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(D) {
      if (r = D, r !== null) {
        if (p = e.getRenderTarget(), r.addEventListener("select", T), r.addEventListener("selectstart", T), r.addEventListener("selectend", T), r.addEventListener("squeeze", T), r.addEventListener("squeezestart", T), r.addEventListener("squeezeend", T), r.addEventListener("end", k), r.addEventListener("inputsourceschange", J), x.xrCompatible !== true && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === false) {
          const W = { antialias: r.renderState.layers === void 0 ? x.antialias : true, alpha: true, depth: x.depth, stencil: x.stencil, framebufferScaleFactor: s };
          m = new XRWebGLLayer(r, t, W), r.updateRenderState({ baseLayer: m }), h = new Vn(m.framebufferWidth, m.framebufferHeight, { format: qt, type: bn, colorSpace: e.outputColorSpace, stencilBuffer: x.stencil });
        } else {
          let W = null, ce = null, ue = null;
          x.depth && (ue = x.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, W = x.stencil ? vi : Hn, ce = x.stencil ? zn : Mn);
          const de = { colorFormat: t.RGBA8, depthFormat: ue, scaleFactor: s };
          f = new XRWebGLBinding(r, t), d = f.createProjectionLayer(de), r.updateRenderState({ layers: [d] }), h = new Vn(d.textureWidth, d.textureHeight, { format: qt, type: bn, depthTexture: new jp(d.textureWidth, d.textureHeight, ce, void 0, void 0, void 0, void 0, void 0, void 0, W), stencilBuffer: x.stencil, colorSpace: e.outputColorSpace, samples: x.antialias ? 4 : 0 });
          const ye = e.properties.get(h);
          ye.__ignoreDepthValues = d.ignoreDepthValues;
        }
        h.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), K.setContext(r), K.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    };
    function J(D) {
      for (let W = 0; W < D.removed.length; W++) {
        const ce = D.removed[W], ue = v.indexOf(ce);
        ue >= 0 && (v[ue] = null, y[ue].disconnect(ce));
      }
      for (let W = 0; W < D.added.length; W++) {
        const ce = D.added[W];
        let ue = v.indexOf(ce);
        if (ue === -1) {
          for (let ye = 0; ye < y.length; ye++) if (ye >= v.length) {
            v.push(ce), ue = ye;
            break;
          } else if (v[ye] === null) {
            v[ye] = ce, ue = ye;
            break;
          }
          if (ue === -1) break;
        }
        const de = y[ue];
        de && de.connect(ce);
      }
    }
    const Q = new U(), P = new U();
    function H(D, W, ce) {
      Q.setFromMatrixPosition(W.matrixWorld), P.setFromMatrixPosition(ce.matrixWorld);
      const ue = Q.distanceTo(P), de = W.projectionMatrix.elements, ye = ce.projectionMatrix.elements, Be = de[14] / (de[10] - 1), Te = de[14] / (de[10] + 1), Re = (de[9] + 1) / de[5], qe = (de[9] - 1) / de[5], Ie = (de[8] - 1) / de[0], N = (ye[8] + 1) / ye[0], dt = Be * Ie, xe = Be * N, be = ue / (-Ie + N), Ae = be * -Ie;
      W.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Ae), D.translateZ(be), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert();
      const Ke = Be + be, De = Te + be, Le = dt - Ae, ke = xe + (ue - Ae), Qe = Re * Te / De * Ke, at = qe * Te / De * Ke;
      D.projectionMatrix.makePerspective(Le, ke, Qe, at, Ke, De), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
    }
    function j(D, W) {
      W === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(W.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (r === null) return;
      b.near = A.near = R.near = D.near, b.far = A.far = R.far = D.far, (G !== b.near || S !== b.far) && (r.updateRenderState({ depthNear: b.near, depthFar: b.far }), G = b.near, S = b.far);
      const W = D.parent, ce = b.cameras;
      j(b, W);
      for (let ue = 0; ue < ce.length; ue++) j(ce[ue], W);
      ce.length === 2 ? H(b, R, A) : b.projectionMatrix.copy(R.projectionMatrix), X(D, b, W);
    };
    function X(D, W, ce) {
      ce === null ? D.matrix.copy(W.matrixWorld) : (D.matrix.copy(ce.matrixWorld), D.matrix.invert(), D.matrix.multiply(W.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(true), D.projectionMatrix.copy(W.projectionMatrix), D.projectionMatrixInverse.copy(W.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = Bs * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(d === null && m === null)) return l;
    }, this.setFoveation = function(D) {
      l = D, d !== null && (d.fixedFoveation = D), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = D);
    };
    let ee = null;
    function q(D, W) {
      if (u = W.getViewerPose(c || o), _ = W, u !== null) {
        const ce = u.views;
        m !== null && (e.setRenderTargetFramebuffer(h, m.framebuffer), e.setRenderTarget(h));
        let ue = false;
        ce.length !== b.cameras.length && (b.cameras.length = 0, ue = true);
        for (let de = 0; de < ce.length; de++) {
          const ye = ce[de];
          let Be = null;
          if (m !== null) Be = m.getViewport(ye);
          else {
            const Re = f.getViewSubImage(d, ye);
            Be = Re.viewport, de === 0 && (e.setRenderTargetTextures(h, Re.colorTexture, d.ignoreDepthValues ? void 0 : Re.depthStencilTexture), e.setRenderTarget(h));
          }
          let Te = L[de];
          Te === void 0 && (Te = new Bt(), Te.layers.enable(de), Te.viewport = new ht(), L[de] = Te), Te.matrix.fromArray(ye.transform.matrix), Te.matrix.decompose(Te.position, Te.quaternion, Te.scale), Te.projectionMatrix.fromArray(ye.projectionMatrix), Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(), Te.viewport.set(Be.x, Be.y, Be.width, Be.height), de === 0 && (b.matrix.copy(Te.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), ue === true && b.cameras.push(Te);
        }
      }
      for (let ce = 0; ce < y.length; ce++) {
        const ue = v[ce], de = y[ce];
        ue !== null && de !== void 0 && de.update(ue, W, c || o);
      }
      ee && ee(D, W), W.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: W }), _ = null;
    }
    const K = new bl();
    K.setAnimationLoop(q), this.setAnimationLoop = function(D) {
      ee = D;
    }, this.dispose = function() {
    };
  }
}
function Zp(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === true && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, El(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, y, v, R) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), f(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), d(p, h), h.isMeshPhysicalMaterial && m(p, h, R)) : h.isMeshMatcapMaterial ? (s(p, h), _(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), x(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (o(p, h), h.isLineDashedMaterial && a(p, h)) : h.isPointsMaterial ? l(p, h, y, v) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === bt && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === bt && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const y = e.get(h).envMap;
    if (y && (p.envMap.value = y, p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap) {
      p.lightMap.value = h.lightMap;
      const v = i._useLegacyLights === true ? Math.PI : 1;
      p.lightMapIntensity.value = h.lightMapIntensity * v, t(h.lightMap, p.lightMapTransform);
    }
    h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function o(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function a(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, y, v) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * y, p.scale.value = v * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function f(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function d(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, y) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === bt && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = y.texture, p.transmissionSamplerSize.value.set(y.width, y.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function x(p, h) {
    const y = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(y.matrixWorld), p.nearDistance.value = y.shadow.camera.near, p.farDistance.value = y.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function $p(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(y, v) {
    const R = v.program;
    n.uniformBlockBinding(y, R);
  }
  function c(y, v) {
    let R = r[y.id];
    R === void 0 && (_(y), R = u(y), r[y.id] = R, y.addEventListener("dispose", p));
    const A = v.program;
    n.updateUBOMapping(y, A);
    const L = e.render.frame;
    s[y.id] !== L && (d(y), s[y.id] = L);
  }
  function u(y) {
    const v = f();
    y.__bindingPointIndex = v;
    const R = i.createBuffer(), A = y.__size, L = y.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, R), i.bufferData(i.UNIFORM_BUFFER, A, L), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, v, R), R;
  }
  function f() {
    for (let y = 0; y < a; y++) if (o.indexOf(y) === -1) return o.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const v = r[y.id], R = y.uniforms, A = y.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, v);
    for (let L = 0, b = R.length; L < b; L++) {
      const G = R[L];
      if (m(G, L, A) === true) {
        const S = G.__offset, T = Array.isArray(G.value) ? G.value : [G.value];
        let k = 0;
        for (let J = 0; J < T.length; J++) {
          const Q = T[J], P = x(Q);
          typeof Q == "number" ? (G.__data[0] = Q, i.bufferSubData(i.UNIFORM_BUFFER, S + k, G.__data)) : Q.isMatrix3 ? (G.__data[0] = Q.elements[0], G.__data[1] = Q.elements[1], G.__data[2] = Q.elements[2], G.__data[3] = Q.elements[0], G.__data[4] = Q.elements[3], G.__data[5] = Q.elements[4], G.__data[6] = Q.elements[5], G.__data[7] = Q.elements[0], G.__data[8] = Q.elements[6], G.__data[9] = Q.elements[7], G.__data[10] = Q.elements[8], G.__data[11] = Q.elements[0]) : (Q.toArray(G.__data, k), k += P.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, S, G.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(y, v, R) {
    const A = y.value;
    if (R[v] === void 0) {
      if (typeof A == "number") R[v] = A;
      else {
        const L = Array.isArray(A) ? A : [A], b = [];
        for (let G = 0; G < L.length; G++) b.push(L[G].clone());
        R[v] = b;
      }
      return true;
    } else if (typeof A == "number") {
      if (R[v] !== A) return R[v] = A, true;
    } else {
      const L = Array.isArray(R[v]) ? R[v] : [R[v]], b = Array.isArray(A) ? A : [A];
      for (let G = 0; G < L.length; G++) {
        const S = L[G];
        if (S.equals(b[G]) === false) return S.copy(b[G]), true;
      }
    }
    return false;
  }
  function _(y) {
    const v = y.uniforms;
    let R = 0;
    const A = 16;
    let L = 0;
    for (let b = 0, G = v.length; b < G; b++) {
      const S = v[b], T = { boundary: 0, storage: 0 }, k = Array.isArray(S.value) ? S.value : [S.value];
      for (let J = 0, Q = k.length; J < Q; J++) {
        const P = k[J], H = x(P);
        T.boundary += H.boundary, T.storage += H.storage;
      }
      if (S.__data = new Float32Array(T.storage / Float32Array.BYTES_PER_ELEMENT), S.__offset = R, b > 0) {
        L = R % A;
        const J = A - L;
        L !== 0 && J - T.boundary < 0 && (R += A - L, S.__offset = R);
      }
      R += T.storage;
    }
    return L = R % A, L > 0 && (R += A - L), y.__size = R, y.__cache = {}, this;
  }
  function x(y) {
    const v = { boundary: 0, storage: 0 };
    return typeof y == "number" ? (v.boundary = 4, v.storage = 4) : y.isVector2 ? (v.boundary = 8, v.storage = 8) : y.isVector3 || y.isColor ? (v.boundary = 16, v.storage = 12) : y.isVector4 ? (v.boundary = 16, v.storage = 16) : y.isMatrix3 ? (v.boundary = 48, v.storage = 48) : y.isMatrix4 ? (v.boundary = 64, v.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), v;
  }
  function p(y) {
    const v = y.target;
    v.removeEventListener("dispose", p);
    const R = o.indexOf(v.__bindingPointIndex);
    o.splice(R, 1), i.deleteBuffer(r[v.id]), delete r[v.id], delete s[v.id];
  }
  function h() {
    for (const y in r) i.deleteBuffer(r[y]);
    o = [], r = {}, s = {};
  }
  return { bind: l, update: c, dispose: h };
}
class Pl {
  constructor(e = {}) {
    const { canvas: t = jc(), context: n = null, depth: r = true, stencil: s = true, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: f = false } = e;
    this.isWebGLRenderer = true;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let x = null, p = null;
    const h = [], y = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = ut, this._useLegacyLights = false, this.toneMapping = Tn, this.toneMappingExposure = 1;
    const v = this;
    let R = false, A = 0, L = 0, b = null, G = -1, S = null;
    const T = new ht(), k = new ht();
    let J = null;
    const Q = new Ve(0);
    let P = 0, H = t.width, j = t.height, X = 1, ee = null, q = null;
    const K = new ht(0, 0, H, j), D = new ht(0, 0, H, j);
    let W = false;
    const ce = new Zs();
    let ue = false, de = false, ye = null;
    const Be = new it(), Te = new Ce(), Re = new U(), qe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    function Ie() {
      return b === null ? X : 1;
    }
    let N = n;
    function dt(M, I) {
      for (let O = 0; O < M.length; O++) {
        const B = M[O], z = t.getContext(B, I);
        if (z !== null) return z;
      }
      return null;
    }
    try {
      const M = { alpha: true, depth: r, stencil: s, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: f };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${qs}`), t.addEventListener("webglcontextlost", ze, false), t.addEventListener("webglcontextrestored", C, false), t.addEventListener("webglcontextcreationerror", ae, false), N === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (v.isWebGL1Renderer === true && I.shift(), N = dt(I, M), N === null) throw dt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let xe, be, Ae, Ke, De, Le, ke, Qe, at, E, g, F, te, Z, ne, me, se, le, w, re, Y, Se, ge, Me;
    function pe() {
      xe = new od(N), be = new td(N, xe, e), xe.init(be), Se = new Xp(N, xe, be), Ae = new kp(N, xe, be), Ke = new ud(N), De = new Cp(), Le = new Wp(N, xe, Ae, De, be, Se, Ke), ke = new id(v), Qe = new ad(v), at = new xu(N, be), ge = new Qf(N, xe, at, be), E = new ld(N, at, Ke, ge), g = new pd(N, E, at, Ke), w = new dd(N, be, Le), me = new nd(De), F = new Rp(v, ke, Qe, xe, be, ge, me), te = new Zp(v, De), Z = new Pp(), ne = new Op(xe, be), le = new Jf(v, ke, Qe, Ae, g, d, l), se = new Vp(v, g, be), Me = new $p(N, Ke, be, Ae), re = new ed(N, xe, Ke, be), Y = new cd(N, xe, Ke, be), Ke.programs = F.programs, v.capabilities = be, v.extensions = xe, v.properties = De, v.renderLists = Z, v.shadowMap = se, v.state = Ae, v.info = Ke;
    }
    pe();
    const fe = new Kp(v, N);
    this.xr = fe, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = xe.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = xe.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (X = M, this.setSize(H, j, false));
    }, this.getSize = function(M) {
      return M.set(H, j);
    }, this.setSize = function(M, I, O = true) {
      if (fe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = M, j = I, t.width = Math.floor(M * X), t.height = Math.floor(I * X), O === true && (t.style.width = M + "px", t.style.height = I + "px"), this.setViewport(0, 0, M, I);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(H * X, j * X).floor();
    }, this.setDrawingBufferSize = function(M, I, O) {
      H = M, j = I, X = O, t.width = Math.floor(M * O), t.height = Math.floor(I * O), this.setViewport(0, 0, M, I);
    }, this.getCurrentViewport = function(M) {
      return M.copy(T);
    }, this.getViewport = function(M) {
      return M.copy(K);
    }, this.setViewport = function(M, I, O, B) {
      M.isVector4 ? K.set(M.x, M.y, M.z, M.w) : K.set(M, I, O, B), Ae.viewport(T.copy(K).multiplyScalar(X).floor());
    }, this.getScissor = function(M) {
      return M.copy(D);
    }, this.setScissor = function(M, I, O, B) {
      M.isVector4 ? D.set(M.x, M.y, M.z, M.w) : D.set(M, I, O, B), Ae.scissor(k.copy(D).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return W;
    }, this.setScissorTest = function(M) {
      Ae.setScissorTest(W = M);
    }, this.setOpaqueSort = function(M) {
      ee = M;
    }, this.setTransparentSort = function(M) {
      q = M;
    }, this.getClearColor = function(M) {
      return M.copy(le.getClearColor());
    }, this.setClearColor = function() {
      le.setClearColor.apply(le, arguments);
    }, this.getClearAlpha = function() {
      return le.getClearAlpha();
    }, this.setClearAlpha = function() {
      le.setClearAlpha.apply(le, arguments);
    }, this.clear = function(M = true, I = true, O = true) {
      let B = 0;
      if (M) {
        let z = false;
        if (b !== null) {
          const he = b.texture.format;
          z = he === hl || he === ul || he === cl;
        }
        if (z) {
          const he = b.texture.type, _e = he === bn || he === Mn || he === Ys || he === zn || he === ol || he === ll, Ee = le.getClearColor(), we = le.getClearAlpha(), Fe = Ee.r, Pe = Ee.g, Ue = Ee.b;
          _e ? (m[0] = Fe, m[1] = Pe, m[2] = Ue, m[3] = we, N.clearBufferuiv(N.COLOR, 0, m)) : (_[0] = Fe, _[1] = Pe, _[2] = Ue, _[3] = we, N.clearBufferiv(N.COLOR, 0, _));
        } else B |= N.COLOR_BUFFER_BIT;
      }
      I && (B |= N.DEPTH_BUFFER_BIT), O && (B |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), N.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ze, false), t.removeEventListener("webglcontextrestored", C, false), t.removeEventListener("webglcontextcreationerror", ae, false), Z.dispose(), ne.dispose(), De.dispose(), ke.dispose(), Qe.dispose(), g.dispose(), ge.dispose(), Me.dispose(), F.dispose(), fe.dispose(), fe.removeEventListener("sessionstart", It), fe.removeEventListener("sessionend", Xe), ye && (ye.dispose(), ye = null), gt.stop();
    };
    function ze(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = true;
    }
    function C() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = false;
      const M = Ke.autoReset, I = se.enabled, O = se.autoUpdate, B = se.needsUpdate, z = se.type;
      pe(), Ke.autoReset = M, se.enabled = I, se.autoUpdate = O, se.needsUpdate = B, se.type = z;
    }
    function ae(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function $(M) {
      const I = M.target;
      I.removeEventListener("dispose", $), V(I);
    }
    function V(M) {
      ie(M), De.remove(M);
    }
    function ie(M) {
      const I = De.get(M).programs;
      I !== void 0 && (I.forEach(function(O) {
        F.releaseProgram(O);
      }), M.isShaderMaterial && F.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, I, O, B, z, he) {
      I === null && (I = qe);
      const _e = z.isMesh && z.matrixWorld.determinant() < 0, Ee = Wl(M, I, O, B, z);
      Ae.setMaterial(B, _e);
      let we = O.index, Fe = 1;
      if (B.wireframe === true) {
        if (we = E.getWireframeAttribute(O), we === void 0) return;
        Fe = 2;
      }
      const Pe = O.drawRange, Ue = O.attributes.position;
      let Je = Pe.start * Fe, At = (Pe.start + Pe.count) * Fe;
      he !== null && (Je = Math.max(Je, he.start * Fe), At = Math.min(At, (he.start + he.count) * Fe)), we !== null ? (Je = Math.max(Je, 0), At = Math.min(At, we.count)) : Ue != null && (Je = Math.max(Je, 0), At = Math.min(At, Ue.count));
      const ot = At - Je;
      if (ot < 0 || ot === 1 / 0) return;
      ge.setup(z, B, Ee, O, we);
      let tn, $e = re;
      if (we !== null && (tn = at.get(we), $e = Y, $e.setIndex(tn)), z.isMesh) B.wireframe === true ? (Ae.setLineWidth(B.wireframeLinewidth * Ie()), $e.setMode(N.LINES)) : $e.setMode(N.TRIANGLES);
      else if (z.isLine) {
        let Ge = B.linewidth;
        Ge === void 0 && (Ge = 1), Ae.setLineWidth(Ge * Ie()), z.isLineSegments ? $e.setMode(N.LINES) : z.isLineLoop ? $e.setMode(N.LINE_LOOP) : $e.setMode(N.LINE_STRIP);
      } else z.isPoints ? $e.setMode(N.POINTS) : z.isSprite && $e.setMode(N.TRIANGLES);
      if (z.isInstancedMesh) $e.renderInstances(Je, ot, z.count);
      else if (O.isInstancedBufferGeometry) {
        const Ge = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, Gr = Math.min(O.instanceCount, Ge);
        $e.renderInstances(Je, ot, Gr);
      } else $e.render(Je, ot);
    };
    function ve(M, I, O) {
      M.transparent === true && M.side === $t && M.forceSinglePass === false ? (M.side = bt, M.needsUpdate = true, Xi(M, I, O), M.side = wn, M.needsUpdate = true, Xi(M, I, O), M.side = $t) : Xi(M, I, O);
    }
    this.compile = function(M, I, O = null) {
      O === null && (O = M), p = ne.get(O), p.init(), y.push(p), O.traverseVisible(function(z) {
        z.isLight && z.layers.test(I.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), M !== O && M.traverseVisible(function(z) {
        z.isLight && z.layers.test(I.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), p.setupLights(v._useLegacyLights);
      const B = /* @__PURE__ */ new Set();
      return M.traverse(function(z) {
        const he = z.material;
        if (he) if (Array.isArray(he)) for (let _e = 0; _e < he.length; _e++) {
          const Ee = he[_e];
          ve(Ee, O, z), B.add(Ee);
        }
        else ve(he, O, z), B.add(he);
      }), y.pop(), p = null, B;
    }, this.compileAsync = function(M, I, O = null) {
      const B = this.compile(M, I, O);
      return new Promise((z) => {
        function he() {
          if (B.forEach(function(_e) {
            De.get(_e).currentProgram.isReady() && B.delete(_e);
          }), B.size === 0) {
            z(M);
            return;
          }
          setTimeout(he, 10);
        }
        xe.get("KHR_parallel_shader_compile") !== null ? he() : setTimeout(he, 10);
      });
    };
    let He = null;
    function et(M) {
      He && He(M);
    }
    function It() {
      gt.stop();
    }
    function Xe() {
      gt.start();
    }
    const gt = new bl();
    gt.setAnimationLoop(et), typeof self < "u" && gt.setContext(self), this.setAnimationLoop = function(M) {
      He = M, fe.setAnimationLoop(M), M === null ? gt.stop() : gt.start();
    }, fe.addEventListener("sessionstart", It), fe.addEventListener("sessionend", Xe), this.render = function(M, I) {
      if (I !== void 0 && I.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === true) return;
      M.matrixWorldAutoUpdate === true && M.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === true && I.updateMatrixWorld(), fe.enabled === true && fe.isPresenting === true && (fe.cameraAutoUpdate === true && fe.updateCamera(I), I = fe.getCamera()), M.isScene === true && M.onBeforeRender(v, M, I, b), p = ne.get(M, y.length), p.init(), y.push(p), Be.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), ce.setFromProjectionMatrix(Be), de = this.localClippingEnabled, ue = me.init(this.clippingPlanes, de), x = Z.get(M, h.length), x.init(), h.push(x), Kt(M, I, 0, v.sortObjects), x.finish(), v.sortObjects === true && x.sort(ee, q), this.info.render.frame++, ue === true && me.beginShadows();
      const O = p.state.shadowsArray;
      if (se.render(O, M, I), ue === true && me.endShadows(), this.info.autoReset === true && this.info.reset(), le.render(x, M), p.setupLights(v._useLegacyLights), I.isArrayCamera) {
        const B = I.cameras;
        for (let z = 0, he = B.length; z < he; z++) {
          const _e = B[z];
          sa(x, M, _e, _e.viewport);
        }
      } else sa(x, M, I);
      b !== null && (Le.updateMultisampleRenderTarget(b), Le.updateRenderTargetMipmap(b)), M.isScene === true && M.onAfterRender(v, M, I), ge.resetDefaultState(), G = -1, S = null, y.pop(), y.length > 0 ? p = y[y.length - 1] : p = null, h.pop(), h.length > 0 ? x = h[h.length - 1] : x = null;
    };
    function Kt(M, I, O, B) {
      if (M.visible === false) return;
      if (M.layers.test(I.layers)) {
        if (M.isGroup) O = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === true && M.update(I);
        else if (M.isLight) p.pushLight(M), M.castShadow && p.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || ce.intersectsSprite(M)) {
            B && Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Be);
            const _e = g.update(M), Ee = M.material;
            Ee.visible && x.push(M, _e, Ee, O, Re.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || ce.intersectsObject(M))) {
          const _e = g.update(M), Ee = M.material;
          if (B && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Re.copy(M.boundingSphere.center)) : (_e.boundingSphere === null && _e.computeBoundingSphere(), Re.copy(_e.boundingSphere.center)), Re.applyMatrix4(M.matrixWorld).applyMatrix4(Be)), Array.isArray(Ee)) {
            const we = _e.groups;
            for (let Fe = 0, Pe = we.length; Fe < Pe; Fe++) {
              const Ue = we[Fe], Je = Ee[Ue.materialIndex];
              Je && Je.visible && x.push(M, _e, Je, O, Re.z, Ue);
            }
          } else Ee.visible && x.push(M, _e, Ee, O, Re.z, null);
        }
      }
      const he = M.children;
      for (let _e = 0, Ee = he.length; _e < Ee; _e++) Kt(he[_e], I, O, B);
    }
    function sa(M, I, O, B) {
      const z = M.opaque, he = M.transmissive, _e = M.transparent;
      p.setupLightsView(O), ue === true && me.setGlobalState(v.clippingPlanes, O), he.length > 0 && kl(z, he, I, O), B && Ae.viewport(T.copy(B)), z.length > 0 && Wi(z, I, O), he.length > 0 && Wi(he, I, O), _e.length > 0 && Wi(_e, I, O), Ae.buffers.depth.setTest(true), Ae.buffers.depth.setMask(true), Ae.buffers.color.setMask(true), Ae.setPolygonOffset(false);
    }
    function kl(M, I, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      const he = be.isWebGL2;
      ye === null && (ye = new Vn(1, 1, { generateMipmaps: true, type: xe.has("EXT_color_buffer_half_float") ? zi : bn, minFilter: Bi, samples: he ? 4 : 0 })), v.getDrawingBufferSize(Te), he ? ye.setSize(Te.x, Te.y) : ye.setSize(zs(Te.x), zs(Te.y));
      const _e = v.getRenderTarget();
      v.setRenderTarget(ye), v.getClearColor(Q), P = v.getClearAlpha(), P < 1 && v.setClearColor(16777215, 0.5), v.clear();
      const Ee = v.toneMapping;
      v.toneMapping = Tn, Wi(M, O, B), Le.updateMultisampleRenderTarget(ye), Le.updateRenderTargetMipmap(ye);
      let we = false;
      for (let Fe = 0, Pe = I.length; Fe < Pe; Fe++) {
        const Ue = I[Fe], Je = Ue.object, At = Ue.geometry, ot = Ue.material, tn = Ue.group;
        if (ot.side === $t && Je.layers.test(B.layers)) {
          const $e = ot.side;
          ot.side = bt, ot.needsUpdate = true, aa(Je, O, B, At, ot, tn), ot.side = $e, ot.needsUpdate = true, we = true;
        }
      }
      we === true && (Le.updateMultisampleRenderTarget(ye), Le.updateRenderTargetMipmap(ye)), v.setRenderTarget(_e), v.setClearColor(Q, P), v.toneMapping = Ee;
    }
    function Wi(M, I, O) {
      const B = I.isScene === true ? I.overrideMaterial : null;
      for (let z = 0, he = M.length; z < he; z++) {
        const _e = M[z], Ee = _e.object, we = _e.geometry, Fe = B === null ? _e.material : B, Pe = _e.group;
        Ee.layers.test(O.layers) && aa(Ee, I, O, we, Fe, Pe);
      }
    }
    function aa(M, I, O, B, z, he) {
      M.onBeforeRender(v, I, O, B, z, he), M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), z.onBeforeRender(v, I, O, B, M, he), z.transparent === true && z.side === $t && z.forceSinglePass === false ? (z.side = bt, z.needsUpdate = true, v.renderBufferDirect(O, I, B, z, M, he), z.side = wn, z.needsUpdate = true, v.renderBufferDirect(O, I, B, z, M, he), z.side = $t) : v.renderBufferDirect(O, I, B, z, M, he), M.onAfterRender(v, I, O, B, z, he);
    }
    function Xi(M, I, O) {
      I.isScene !== true && (I = qe);
      const B = De.get(M), z = p.state.lights, he = p.state.shadowsArray, _e = z.state.version, Ee = F.getParameters(M, z.state, he, I, O), we = F.getProgramCacheKey(Ee);
      let Fe = B.programs;
      B.environment = M.isMeshStandardMaterial ? I.environment : null, B.fog = I.fog, B.envMap = (M.isMeshStandardMaterial ? Qe : ke).get(M.envMap || B.environment), Fe === void 0 && (M.addEventListener("dispose", $), Fe = /* @__PURE__ */ new Map(), B.programs = Fe);
      let Pe = Fe.get(we);
      if (Pe !== void 0) {
        if (B.currentProgram === Pe && B.lightsStateVersion === _e) return la(M, Ee), Pe;
      } else Ee.uniforms = F.getUniforms(M), M.onBuild(O, Ee, v), M.onBeforeCompile(Ee, v), Pe = F.acquireProgram(Ee, we), Fe.set(we, Pe), B.uniforms = Ee.uniforms;
      const Ue = B.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === true) && (Ue.clippingPlanes = me.uniform), la(M, Ee), B.needsLights = ql(M), B.lightsStateVersion = _e, B.needsLights && (Ue.ambientLightColor.value = z.state.ambient, Ue.lightProbe.value = z.state.probe, Ue.directionalLights.value = z.state.directional, Ue.directionalLightShadows.value = z.state.directionalShadow, Ue.spotLights.value = z.state.spot, Ue.spotLightShadows.value = z.state.spotShadow, Ue.rectAreaLights.value = z.state.rectArea, Ue.ltc_1.value = z.state.rectAreaLTC1, Ue.ltc_2.value = z.state.rectAreaLTC2, Ue.pointLights.value = z.state.point, Ue.pointLightShadows.value = z.state.pointShadow, Ue.hemisphereLights.value = z.state.hemi, Ue.directionalShadowMap.value = z.state.directionalShadowMap, Ue.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Ue.spotShadowMap.value = z.state.spotShadowMap, Ue.spotLightMatrix.value = z.state.spotLightMatrix, Ue.spotLightMap.value = z.state.spotLightMap, Ue.pointShadowMap.value = z.state.pointShadowMap, Ue.pointShadowMatrix.value = z.state.pointShadowMatrix), B.currentProgram = Pe, B.uniformsList = null, Pe;
    }
    function oa(M) {
      if (M.uniformsList === null) {
        const I = M.currentProgram.getUniforms();
        M.uniformsList = Mr.seqWithValue(I.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function la(M, I) {
      const O = De.get(M);
      O.outputColorSpace = I.outputColorSpace, O.instancing = I.instancing, O.instancingColor = I.instancingColor, O.skinning = I.skinning, O.morphTargets = I.morphTargets, O.morphNormals = I.morphNormals, O.morphColors = I.morphColors, O.morphTargetsCount = I.morphTargetsCount, O.numClippingPlanes = I.numClippingPlanes, O.numIntersection = I.numClipIntersection, O.vertexAlphas = I.vertexAlphas, O.vertexTangents = I.vertexTangents, O.toneMapping = I.toneMapping;
    }
    function Wl(M, I, O, B, z) {
      I.isScene !== true && (I = qe), Le.resetTextureUnits();
      const he = I.fog, _e = B.isMeshStandardMaterial ? I.environment : null, Ee = b === null ? v.outputColorSpace : b.isXRRenderTarget === true ? b.texture.colorSpace : fn, we = (B.isMeshStandardMaterial ? Qe : ke).get(B.envMap || _e), Fe = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Pe = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Ue = !!O.morphAttributes.position, Je = !!O.morphAttributes.normal, At = !!O.morphAttributes.color;
      let ot = Tn;
      B.toneMapped && (b === null || b.isXRRenderTarget === true) && (ot = v.toneMapping);
      const tn = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, $e = tn !== void 0 ? tn.length : 0, Ge = De.get(B), Gr = p.state.lights;
      if (ue === true && (de === true || M !== S)) {
        const wt = M === S && B.id === G;
        me.setState(B, M, wt);
      }
      let tt = false;
      B.version === Ge.__version ? (Ge.needsLights && Ge.lightsStateVersion !== Gr.state.version || Ge.outputColorSpace !== Ee || z.isInstancedMesh && Ge.instancing === false || !z.isInstancedMesh && Ge.instancing === true || z.isSkinnedMesh && Ge.skinning === false || !z.isSkinnedMesh && Ge.skinning === true || z.isInstancedMesh && Ge.instancingColor === true && z.instanceColor === null || z.isInstancedMesh && Ge.instancingColor === false && z.instanceColor !== null || Ge.envMap !== we || B.fog === true && Ge.fog !== he || Ge.numClippingPlanes !== void 0 && (Ge.numClippingPlanes !== me.numPlanes || Ge.numIntersection !== me.numIntersection) || Ge.vertexAlphas !== Fe || Ge.vertexTangents !== Pe || Ge.morphTargets !== Ue || Ge.morphNormals !== Je || Ge.morphColors !== At || Ge.toneMapping !== ot || be.isWebGL2 === true && Ge.morphTargetsCount !== $e) && (tt = true) : (tt = true, Ge.__version = B.version);
      let Rn = Ge.currentProgram;
      tt === true && (Rn = Xi(B, I, z));
      let ca = false, Ri = false, Vr = false;
      const _t = Rn.getUniforms(), Cn = Ge.uniforms;
      if (Ae.useProgram(Rn.program) && (ca = true, Ri = true, Vr = true), B.id !== G && (G = B.id, Ri = true), ca || S !== M) {
        _t.setValue(N, "projectionMatrix", M.projectionMatrix), _t.setValue(N, "viewMatrix", M.matrixWorldInverse);
        const wt = _t.map.cameraPosition;
        wt !== void 0 && wt.setValue(N, Re.setFromMatrixPosition(M.matrixWorld)), be.logarithmicDepthBuffer && _t.setValue(N, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && _t.setValue(N, "isOrthographic", M.isOrthographicCamera === true), S !== M && (S = M, Ri = true, Vr = true);
      }
      if (z.isSkinnedMesh) {
        _t.setOptional(N, z, "bindMatrix"), _t.setOptional(N, z, "bindMatrixInverse");
        const wt = z.skeleton;
        wt && (be.floatVertexTextures ? (wt.boneTexture === null && wt.computeBoneTexture(), _t.setValue(N, "boneTexture", wt.boneTexture, Le), _t.setValue(N, "boneTextureSize", wt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const kr = O.morphAttributes;
      if ((kr.position !== void 0 || kr.normal !== void 0 || kr.color !== void 0 && be.isWebGL2 === true) && w.update(z, O, Rn), (Ri || Ge.receiveShadow !== z.receiveShadow) && (Ge.receiveShadow = z.receiveShadow, _t.setValue(N, "receiveShadow", z.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Cn.envMap.value = we, Cn.flipEnvMap.value = we.isCubeTexture && we.isRenderTargetTexture === false ? -1 : 1), Ri && (_t.setValue(N, "toneMappingExposure", v.toneMappingExposure), Ge.needsLights && Xl(Cn, Vr), he && B.fog === true && te.refreshFogUniforms(Cn, he), te.refreshMaterialUniforms(Cn, B, X, j, ye), Mr.upload(N, oa(Ge), Cn, Le)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (Mr.upload(N, oa(Ge), Cn, Le), B.uniformsNeedUpdate = false), B.isSpriteMaterial && _t.setValue(N, "center", z.center), _t.setValue(N, "modelViewMatrix", z.modelViewMatrix), _t.setValue(N, "normalMatrix", z.normalMatrix), _t.setValue(N, "modelMatrix", z.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const wt = B.uniformsGroups;
        for (let Wr = 0, Yl = wt.length; Wr < Yl; Wr++) if (be.isWebGL2) {
          const ua = wt[Wr];
          Me.update(ua, Rn), Me.bind(ua, Rn);
        } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Rn;
    }
    function Xl(M, I) {
      M.ambientLightColor.needsUpdate = I, M.lightProbe.needsUpdate = I, M.directionalLights.needsUpdate = I, M.directionalLightShadows.needsUpdate = I, M.pointLights.needsUpdate = I, M.pointLightShadows.needsUpdate = I, M.spotLights.needsUpdate = I, M.spotLightShadows.needsUpdate = I, M.rectAreaLights.needsUpdate = I, M.hemisphereLights.needsUpdate = I;
    }
    function ql(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === true;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return L;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(M, I, O) {
      De.get(M.texture).__webglTexture = I, De.get(M.depthTexture).__webglTexture = O;
      const B = De.get(M);
      B.__hasExternalTextures = true, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = O === void 0, B.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = false));
    }, this.setRenderTargetFramebuffer = function(M, I) {
      const O = De.get(M);
      O.__webglFramebuffer = I, O.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(M, I = 0, O = 0) {
      b = M, A = I, L = O;
      let B = true, z = null, he = false, _e = false;
      if (M) {
        const we = De.get(M);
        we.__useDefaultFramebuffer !== void 0 ? (Ae.bindFramebuffer(N.FRAMEBUFFER, null), B = false) : we.__webglFramebuffer === void 0 ? Le.setupRenderTarget(M) : we.__hasExternalTextures && Le.rebindTextures(M, De.get(M.texture).__webglTexture, De.get(M.depthTexture).__webglTexture);
        const Fe = M.texture;
        (Fe.isData3DTexture || Fe.isDataArrayTexture || Fe.isCompressedArrayTexture) && (_e = true);
        const Pe = De.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Pe[I]) ? z = Pe[I][O] : z = Pe[I], he = true) : be.isWebGL2 && M.samples > 0 && Le.useMultisampledRTT(M) === false ? z = De.get(M).__webglMultisampledFramebuffer : Array.isArray(Pe) ? z = Pe[O] : z = Pe, T.copy(M.viewport), k.copy(M.scissor), J = M.scissorTest;
      } else T.copy(K).multiplyScalar(X).floor(), k.copy(D).multiplyScalar(X).floor(), J = W;
      if (Ae.bindFramebuffer(N.FRAMEBUFFER, z) && be.drawBuffers && B && Ae.drawBuffers(M, z), Ae.viewport(T), Ae.scissor(k), Ae.setScissorTest(J), he) {
        const we = De.get(M.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + I, we.__webglTexture, O);
      } else if (_e) {
        const we = De.get(M.texture), Fe = I || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, we.__webglTexture, O || 0, Fe);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(M, I, O, B, z, he, _e) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ee = De.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && _e !== void 0 && (Ee = Ee[_e]), Ee) {
        Ae.bindFramebuffer(N.FRAMEBUFFER, Ee);
        try {
          const we = M.texture, Fe = we.format, Pe = we.type;
          if (Fe !== qt && Se.convert(Fe) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ue = Pe === zi && (xe.has("EXT_color_buffer_half_float") || be.isWebGL2 && xe.has("EXT_color_buffer_float"));
          if (Pe !== bn && Se.convert(Pe) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && !(Pe === Sn && (be.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && !Ue) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= M.width - B && O >= 0 && O <= M.height - z && N.readPixels(I, O, B, z, Se.convert(Fe), Se.convert(Pe), he);
        } finally {
          const we = b !== null ? De.get(b).__webglFramebuffer : null;
          Ae.bindFramebuffer(N.FRAMEBUFFER, we);
        }
      }
    }, this.copyFramebufferToTexture = function(M, I, O = 0) {
      const B = Math.pow(2, -O), z = Math.floor(I.image.width * B), he = Math.floor(I.image.height * B);
      Le.setTexture2D(I, 0), N.copyTexSubImage2D(N.TEXTURE_2D, O, 0, 0, M.x, M.y, z, he), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(M, I, O, B = 0) {
      const z = I.image.width, he = I.image.height, _e = Se.convert(O.format), Ee = Se.convert(O.type);
      Le.setTexture2D(O, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, O.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, O.unpackAlignment), I.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, B, M.x, M.y, z, he, _e, Ee, I.image.data) : I.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, B, M.x, M.y, I.mipmaps[0].width, I.mipmaps[0].height, _e, I.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, B, M.x, M.y, _e, Ee, I.image), B === 0 && O.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, I, O, B, z = 0) {
      if (v.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const he = M.max.x - M.min.x + 1, _e = M.max.y - M.min.y + 1, Ee = M.max.z - M.min.z + 1, we = Se.convert(B.format), Fe = Se.convert(B.type);
      let Pe;
      if (B.isData3DTexture) Le.setTexture3D(B, 0), Pe = N.TEXTURE_3D;
      else if (B.isDataArrayTexture) Le.setTexture2DArray(B, 0), Pe = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, B.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, B.unpackAlignment);
      const Ue = N.getParameter(N.UNPACK_ROW_LENGTH), Je = N.getParameter(N.UNPACK_IMAGE_HEIGHT), At = N.getParameter(N.UNPACK_SKIP_PIXELS), ot = N.getParameter(N.UNPACK_SKIP_ROWS), tn = N.getParameter(N.UNPACK_SKIP_IMAGES), $e = O.isCompressedTexture ? O.mipmaps[0] : O.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, $e.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, $e.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, M.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, M.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, M.min.z), O.isDataTexture || O.isData3DTexture ? N.texSubImage3D(Pe, z, I.x, I.y, I.z, he, _e, Ee, we, Fe, $e.data) : O.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(Pe, z, I.x, I.y, I.z, he, _e, Ee, we, $e.data)) : N.texSubImage3D(Pe, z, I.x, I.y, I.z, he, _e, Ee, we, Fe, $e), N.pixelStorei(N.UNPACK_ROW_LENGTH, Ue), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Je), N.pixelStorei(N.UNPACK_SKIP_PIXELS, At), N.pixelStorei(N.UNPACK_SKIP_ROWS, ot), N.pixelStorei(N.UNPACK_SKIP_IMAGES, tn), z === 0 && B.generateMipmaps && N.generateMipmap(Pe), Ae.unbindTexture();
    }, this.initTexture = function(M) {
      M.isCubeTexture ? Le.setTextureCube(M, 0) : M.isData3DTexture ? Le.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? Le.setTexture2DArray(M, 0) : Le.setTexture2D(M, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      A = 0, L = 0, b = null, Ae.reset(), ge.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return un;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === js ? "display-p3" : "srgb", t.unpackColorSpace = We.workingColorSpace === Ur ? "display-p3" : "srgb";
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ut ? Gn : fl;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Gn ? ut : fn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Jp extends Pl {
}
Jp.prototype.isWebGL1Renderer = true;
class Js {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = true, this.name = "", this.color = new Ve(e), this.near = t, this.far = n;
  }
  clone() {
    return new Js(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class Qp extends ft {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Dl extends Ai {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ve(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Do = new U(), Uo = new U(), Io = new it(), Ss = new Nr(), pr = new Ir();
class em extends ft {
  constructor(e = new en(), t = new Dl()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++) Do.fromBufferAttribute(t, r - 1), Uo.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Do.distanceTo(Uo);
      e.setAttribute("lineDistance", new Ut(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), pr.copy(n.boundingSphere), pr.applyMatrix4(r), pr.radius += s, e.ray.intersectsSphere(pr) === false) return;
    Io.copy(r).invert(), Ss.copy(e.ray).applyMatrix4(Io);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new U(), u = new U(), f = new U(), d = new U(), m = this.isLineSegments ? 2 : 1, _ = n.index, p = n.attributes.position;
    if (_ !== null) {
      const h = Math.max(0, o.start), y = Math.min(_.count, o.start + o.count);
      for (let v = h, R = y - 1; v < R; v += m) {
        const A = _.getX(v), L = _.getX(v + 1);
        if (c.fromBufferAttribute(p, A), u.fromBufferAttribute(p, L), Ss.distanceSqToSegment(c, u, d, f) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const G = e.ray.origin.distanceTo(d);
        G < e.near || G > e.far || t.push({ distance: G, point: f.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
      }
    } else {
      const h = Math.max(0, o.start), y = Math.min(p.count, o.start + o.count);
      for (let v = h, R = y - 1; v < R; v += m) {
        if (c.fromBufferAttribute(p, v), u.fromBufferAttribute(p, v + 1), Ss.distanceSqToSegment(c, u, d, f) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(d);
        L < e.near || L > e.far || t.push({ distance: L, point: f.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const No = new U(), Fo = new U();
class tm extends em {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2) No.fromBufferAttribute(t, r), Fo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + No.distanceTo(Fo);
      e.setAttribute("lineDistance", new Ut(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Qs extends en {
  constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: r }, t = Math.max(3, t);
    const s = [], o = [], a = [], l = [], c = new U(), u = new Ce();
    o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
    for (let f = 0, d = 3; f <= t; f++, d += 3) {
      const m = n + f / t * r;
      c.x = e * Math.cos(m), c.y = e * Math.sin(m), o.push(c.x, c.y, c.z), a.push(0, 0, 1), u.x = (o[d] / e + 1) / 2, u.y = (o[d + 1] / e + 1) / 2, l.push(u.x, u.y);
    }
    for (let f = 1; f <= t; f++) s.push(f, f + 1, 0);
    this.setIndex(s), this.setAttribute("position", new Ut(o, 3)), this.setAttribute("normal", new Ut(a, 3)), this.setAttribute("uv", new Ut(l, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Qs(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
const mr = new U(), gr = new U(), Es = new U(), _r = new Ot();
class nm extends en {
  constructor(e = null, t = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: e, thresholdAngle: t }, e !== null) {
      const r = Math.pow(10, 4), s = Math.cos(Fi * t), o = e.getIndex(), a = e.getAttribute("position"), l = o ? o.count : a.count, c = [0, 0, 0], u = ["a", "b", "c"], f = new Array(3), d = {}, m = [];
      for (let _ = 0; _ < l; _ += 3) {
        o ? (c[0] = o.getX(_), c[1] = o.getX(_ + 1), c[2] = o.getX(_ + 2)) : (c[0] = _, c[1] = _ + 1, c[2] = _ + 2);
        const { a: x, b: p, c: h } = _r;
        if (x.fromBufferAttribute(a, c[0]), p.fromBufferAttribute(a, c[1]), h.fromBufferAttribute(a, c[2]), _r.getNormal(Es), f[0] = `${Math.round(x.x * r)},${Math.round(x.y * r)},${Math.round(x.z * r)}`, f[1] = `${Math.round(p.x * r)},${Math.round(p.y * r)},${Math.round(p.z * r)}`, f[2] = `${Math.round(h.x * r)},${Math.round(h.y * r)},${Math.round(h.z * r)}`, !(f[0] === f[1] || f[1] === f[2] || f[2] === f[0])) for (let y = 0; y < 3; y++) {
          const v = (y + 1) % 3, R = f[y], A = f[v], L = _r[u[y]], b = _r[u[v]], G = `${R}_${A}`, S = `${A}_${R}`;
          S in d && d[S] ? (Es.dot(d[S].normal) <= s && (m.push(L.x, L.y, L.z), m.push(b.x, b.y, b.z)), d[S] = null) : G in d || (d[G] = { index0: c[y], index1: c[v], normal: Es.clone() });
        }
      }
      for (const _ in d) if (d[_]) {
        const { index0: x, index1: p } = d[_];
        mr.fromBufferAttribute(a, x), gr.fromBufferAttribute(a, p), m.push(mr.x, mr.y, mr.z), m.push(gr.x, gr.y, gr.z);
      }
      this.setAttribute("position", new Ut(m, 3));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
}
class ea extends Ai {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ve(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = dl, this.normalScale = new Ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class ta extends ft {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ve(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class im extends ta {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(ft.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ve(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const ys = new it(), Oo = new U(), Bo = new U();
class rm {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ce(512, 512), this.map = null, this.mapPass = null, this.matrix = new it(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Zs(), this._frameExtents = new Ce(1, 1), this._viewportCount = 1, this._viewports = [new ht(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Oo.setFromMatrixPosition(e.matrixWorld), t.position.copy(Oo), Bo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Bo), t.updateMatrixWorld(), ys.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ys), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(ys);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class sm extends rm {
  constructor() {
    super(new Al(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class zo extends ta {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ft.DEFAULT_UP), this.updateMatrix(), this.target = new ft(), this.shadow = new sm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class am extends ta {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class om {
  constructor(e, t, n = 0, r = 1 / 0) {
    this.ray = new Nr(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Ks(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = true, n = []) {
    return Gs(e, this, n, t), n.sort(Ho), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let r = 0, s = e.length; r < s; r++) Gs(e[r], this, n, t);
    return n.sort(Ho), n;
  }
}
function Ho(i, e) {
  return i.distance - e.distance;
}
function Gs(i, e, t, n) {
  if (i.layers.test(e.layers) && i.raycast(e, t), n === true) {
    const r = i.children;
    for (let s = 0, o = r.length; s < o; s++) Gs(r[s], e, t, true);
  }
}
class Go {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(St(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: qs } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = qs);
const Vo = { type: "change" }, Ts = { type: "start" }, ko = { type: "end" }, vr = new Nr(), Wo = new vn(), lm = Math.cos(70 * Yc.DEG2RAD);
class cm extends Xn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = true, this.target = new U(), this.cursor = new U(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: jn.ROTATE, MIDDLE: jn.DOLLY, RIGHT: jn.PAN }, this.touches = { ONE: Kn.ROTATE, TWO: Kn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(w) {
      w.addEventListener("keydown", g), this._domElementKeyEvents = w;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", g), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Vo), n.update(), s = r.NONE;
    }, this.update = function() {
      const w = new U(), re = new kn().setFromUnitVectors(e.up, new U(0, 1, 0)), Y = re.clone().invert(), Se = new U(), ge = new kn(), Me = new U(), pe = 2 * Math.PI;
      return function(ze = null) {
        const C = n.object.position;
        w.copy(C).sub(n.target), w.applyQuaternion(re), a.setFromVector3(w), n.autoRotate && s === r.NONE && k(S(ze)), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi);
        let ae = n.minAzimuthAngle, $ = n.maxAzimuthAngle;
        isFinite(ae) && isFinite($) && (ae < -Math.PI ? ae += pe : ae > Math.PI && (ae -= pe), $ < -Math.PI ? $ += pe : $ > Math.PI && ($ -= pe), ae <= $ ? a.theta = Math.max(ae, Math.min($, a.theta)) : a.theta = a.theta > (ae + $) / 2 ? Math.max(ae, a.theta) : Math.min($, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === true ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor), n.zoomToCursor && L || n.object.isOrthographicCamera ? a.radius = q(a.radius) : a.radius = q(a.radius * c), w.setFromSpherical(a), w.applyQuaternion(Y), C.copy(n.target).add(w), n.object.lookAt(n.target), n.enableDamping === true ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), u.set(0, 0, 0));
        let V = false;
        if (n.zoomToCursor && L) {
          let ie = null;
          if (n.object.isPerspectiveCamera) {
            const ve = w.length();
            ie = q(ve * c);
            const He = ve - ie;
            n.object.position.addScaledVector(R, He), n.object.updateMatrixWorld();
          } else if (n.object.isOrthographicCamera) {
            const ve = new U(A.x, A.y, 0);
            ve.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), V = true;
            const He = new U(A.x, A.y, 0);
            He.unproject(n.object), n.object.position.sub(He).add(ve), n.object.updateMatrixWorld(), ie = w.length();
          } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = false;
          ie !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position) : (vr.origin.copy(n.object.position), vr.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(vr.direction)) < lm ? e.lookAt(n.target) : (Wo.setFromNormalAndCoplanarPoint(n.object.up, n.target), vr.intersectPlane(Wo, n.target))));
        } else n.object.isOrthographicCamera && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), V = true);
        return c = 1, L = false, V || Se.distanceToSquared(n.object.position) > o || 8 * (1 - ge.dot(n.object.quaternion)) > o || Me.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(Vo), Se.copy(n.object.position), ge.copy(n.object.quaternion), Me.copy(n.target), V = false, true) : false;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Z), n.domElement.removeEventListener("pointerdown", De), n.domElement.removeEventListener("pointercancel", ke), n.domElement.removeEventListener("wheel", E), n.domElement.removeEventListener("pointermove", Le), n.domElement.removeEventListener("pointerup", ke), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", g), n._domElementKeyEvents = null);
    };
    const n = this, r = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
    let s = r.NONE;
    const o = 1e-6, a = new Go(), l = new Go();
    let c = 1;
    const u = new U(), f = new Ce(), d = new Ce(), m = new Ce(), _ = new Ce(), x = new Ce(), p = new Ce(), h = new Ce(), y = new Ce(), v = new Ce(), R = new U(), A = new Ce();
    let L = false;
    const b = [], G = {};
    function S(w) {
      return w !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * w : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function T() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function k(w) {
      l.theta -= w;
    }
    function J(w) {
      l.phi -= w;
    }
    const Q = function() {
      const w = new U();
      return function(Y, Se) {
        w.setFromMatrixColumn(Se, 0), w.multiplyScalar(-Y), u.add(w);
      };
    }(), P = function() {
      const w = new U();
      return function(Y, Se) {
        n.screenSpacePanning === true ? w.setFromMatrixColumn(Se, 1) : (w.setFromMatrixColumn(Se, 0), w.crossVectors(n.object.up, w)), w.multiplyScalar(Y), u.add(w);
      };
    }(), H = function() {
      const w = new U();
      return function(Y, Se) {
        const ge = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Me = n.object.position;
          w.copy(Me).sub(n.target);
          let pe = w.length();
          pe *= Math.tan(n.object.fov / 2 * Math.PI / 180), Q(2 * Y * pe / ge.clientHeight, n.object.matrix), P(2 * Se * pe / ge.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (Q(Y * (n.object.right - n.object.left) / n.object.zoom / ge.clientWidth, n.object.matrix), P(Se * (n.object.top - n.object.bottom) / n.object.zoom / ge.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
      };
    }();
    function j(w) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c /= w : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function X(w) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c *= w : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
    }
    function ee(w) {
      if (!n.zoomToCursor) return;
      L = true;
      const re = n.domElement.getBoundingClientRect(), Y = w.clientX - re.left, Se = w.clientY - re.top, ge = re.width, Me = re.height;
      A.x = Y / ge * 2 - 1, A.y = -(Se / Me) * 2 + 1, R.set(A.x, A.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function q(w) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, w));
    }
    function K(w) {
      f.set(w.clientX, w.clientY);
    }
    function D(w) {
      ee(w), h.set(w.clientX, w.clientY);
    }
    function W(w) {
      _.set(w.clientX, w.clientY);
    }
    function ce(w) {
      d.set(w.clientX, w.clientY), m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      k(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), f.copy(d), n.update();
    }
    function ue(w) {
      y.set(w.clientX, w.clientY), v.subVectors(y, h), v.y > 0 ? j(T()) : v.y < 0 && X(T()), h.copy(y), n.update();
    }
    function de(w) {
      x.set(w.clientX, w.clientY), p.subVectors(x, _).multiplyScalar(n.panSpeed), H(p.x, p.y), _.copy(x), n.update();
    }
    function ye(w) {
      ee(w), w.deltaY < 0 ? X(T()) : w.deltaY > 0 && j(T()), n.update();
    }
    function Be(w) {
      let re = false;
      switch (w.code) {
        case n.keys.UP:
          w.ctrlKey || w.metaKey || w.shiftKey ? J(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(0, n.keyPanSpeed), re = true;
          break;
        case n.keys.BOTTOM:
          w.ctrlKey || w.metaKey || w.shiftKey ? J(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(0, -n.keyPanSpeed), re = true;
          break;
        case n.keys.LEFT:
          w.ctrlKey || w.metaKey || w.shiftKey ? k(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(n.keyPanSpeed, 0), re = true;
          break;
        case n.keys.RIGHT:
          w.ctrlKey || w.metaKey || w.shiftKey ? k(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(-n.keyPanSpeed, 0), re = true;
          break;
      }
      re && (w.preventDefault(), n.update());
    }
    function Te() {
      if (b.length === 1) f.set(b[0].pageX, b[0].pageY);
      else {
        const w = 0.5 * (b[0].pageX + b[1].pageX), re = 0.5 * (b[0].pageY + b[1].pageY);
        f.set(w, re);
      }
    }
    function Re() {
      if (b.length === 1) _.set(b[0].pageX, b[0].pageY);
      else {
        const w = 0.5 * (b[0].pageX + b[1].pageX), re = 0.5 * (b[0].pageY + b[1].pageY);
        _.set(w, re);
      }
    }
    function qe() {
      const w = b[0].pageX - b[1].pageX, re = b[0].pageY - b[1].pageY, Y = Math.sqrt(w * w + re * re);
      h.set(0, Y);
    }
    function Ie() {
      n.enableZoom && qe(), n.enablePan && Re();
    }
    function N() {
      n.enableZoom && qe(), n.enableRotate && Te();
    }
    function dt(w) {
      if (b.length == 1) d.set(w.pageX, w.pageY);
      else {
        const Y = le(w), Se = 0.5 * (w.pageX + Y.x), ge = 0.5 * (w.pageY + Y.y);
        d.set(Se, ge);
      }
      m.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const re = n.domElement;
      k(2 * Math.PI * m.x / re.clientHeight), J(2 * Math.PI * m.y / re.clientHeight), f.copy(d);
    }
    function xe(w) {
      if (b.length === 1) x.set(w.pageX, w.pageY);
      else {
        const re = le(w), Y = 0.5 * (w.pageX + re.x), Se = 0.5 * (w.pageY + re.y);
        x.set(Y, Se);
      }
      p.subVectors(x, _).multiplyScalar(n.panSpeed), H(p.x, p.y), _.copy(x);
    }
    function be(w) {
      const re = le(w), Y = w.pageX - re.x, Se = w.pageY - re.y, ge = Math.sqrt(Y * Y + Se * Se);
      y.set(0, ge), v.set(0, Math.pow(y.y / h.y, n.zoomSpeed)), j(v.y), h.copy(y);
    }
    function Ae(w) {
      n.enableZoom && be(w), n.enablePan && xe(w);
    }
    function Ke(w) {
      n.enableZoom && be(w), n.enableRotate && dt(w);
    }
    function De(w) {
      n.enabled !== false && (b.length === 0 && (n.domElement.setPointerCapture(w.pointerId), n.domElement.addEventListener("pointermove", Le), n.domElement.addEventListener("pointerup", ke)), ne(w), w.pointerType === "touch" ? F(w) : Qe(w));
    }
    function Le(w) {
      n.enabled !== false && (w.pointerType === "touch" ? te(w) : at(w));
    }
    function ke(w) {
      me(w), b.length === 0 && (n.domElement.releasePointerCapture(w.pointerId), n.domElement.removeEventListener("pointermove", Le), n.domElement.removeEventListener("pointerup", ke)), n.dispatchEvent(ko), s = r.NONE;
    }
    function Qe(w) {
      let re;
      switch (w.button) {
        case 0:
          re = n.mouseButtons.LEFT;
          break;
        case 1:
          re = n.mouseButtons.MIDDLE;
          break;
        case 2:
          re = n.mouseButtons.RIGHT;
          break;
        default:
          re = -1;
      }
      switch (re) {
        case jn.DOLLY:
          if (n.enableZoom === false) return;
          D(w), s = r.DOLLY;
          break;
        case jn.ROTATE:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enablePan === false) return;
            W(w), s = r.PAN;
          } else {
            if (n.enableRotate === false) return;
            K(w), s = r.ROTATE;
          }
          break;
        case jn.PAN:
          if (w.ctrlKey || w.metaKey || w.shiftKey) {
            if (n.enableRotate === false) return;
            K(w), s = r.ROTATE;
          } else {
            if (n.enablePan === false) return;
            W(w), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Ts);
    }
    function at(w) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === false) return;
          ce(w);
          break;
        case r.DOLLY:
          if (n.enableZoom === false) return;
          ue(w);
          break;
        case r.PAN:
          if (n.enablePan === false) return;
          de(w);
          break;
      }
    }
    function E(w) {
      n.enabled === false || n.enableZoom === false || s !== r.NONE || (w.preventDefault(), n.dispatchEvent(Ts), ye(w), n.dispatchEvent(ko));
    }
    function g(w) {
      n.enabled === false || n.enablePan === false || Be(w);
    }
    function F(w) {
      switch (se(w), b.length) {
        case 1:
          switch (n.touches.ONE) {
            case Kn.ROTATE:
              if (n.enableRotate === false) return;
              Te(), s = r.TOUCH_ROTATE;
              break;
            case Kn.PAN:
              if (n.enablePan === false) return;
              Re(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Kn.DOLLY_PAN:
              if (n.enableZoom === false && n.enablePan === false) return;
              Ie(), s = r.TOUCH_DOLLY_PAN;
              break;
            case Kn.DOLLY_ROTATE:
              if (n.enableZoom === false && n.enableRotate === false) return;
              N(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(Ts);
    }
    function te(w) {
      switch (se(w), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === false) return;
          dt(w), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === false) return;
          xe(w), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === false && n.enablePan === false) return;
          Ae(w), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === false && n.enableRotate === false) return;
          Ke(w), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function Z(w) {
      n.enabled !== false && w.preventDefault();
    }
    function ne(w) {
      b.push(w);
    }
    function me(w) {
      delete G[w.pointerId];
      for (let re = 0; re < b.length; re++) if (b[re].pointerId == w.pointerId) {
        b.splice(re, 1);
        return;
      }
    }
    function se(w) {
      let re = G[w.pointerId];
      re === void 0 && (re = new Ce(), G[w.pointerId] = re), re.set(w.pageX, w.pageY);
    }
    function le(w) {
      const re = w.pointerId === b[0].pointerId ? b[1] : b[0];
      return G[re.pointerId];
    }
    n.domElement.addEventListener("contextmenu", Z), n.domElement.addEventListener("pointerdown", De), n.domElement.addEventListener("pointercancel", ke), n.domElement.addEventListener("wheel", E, { passive: false }), this.update();
  }
}
let Mt, Ni = null;
function Ul() {
  return (Ni === null || Ni.byteLength === 0) && (Ni = new Uint8Array(Mt.memory.buffer)), Ni;
}
let Sr = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Sr.decode();
const um = 2146435072;
let bs = 0;
function hm(i, e) {
  return bs += e, bs >= um && (Sr = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Sr.decode(), bs = e), Sr.decode(Ul().subarray(i, i + e));
}
function fm(i, e) {
  return i = i >>> 0, hm(i, e);
}
function dm(i, e) {
  return i = i >>> 0, Ul().subarray(i / 1, i / 1 + e);
}
const ct = Object.freeze({ F: 0, 0: "F", FPrime: 1, 1: "FPrime", F2: 2, 2: "F2", R: 3, 3: "R", RPrime: 4, 4: "RPrime", R2: 5, 5: "R2", U: 6, 6: "U", UPrime: 7, 7: "UPrime", U2: 8, 8: "U2", B: 9, 9: "B", BPrime: 10, 10: "BPrime", B2: 11, 11: "B2", L: 12, 12: "L", LPrime: 13, 13: "LPrime", L2: 14, 14: "L2", D: 15, 15: "D", DPrime: 16, 16: "DPrime", D2: 17, 17: "D2" }), Xo = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => Mt.__wbg_rubikscube_free(i >>> 0, 1));
class Vs {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xo.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    Mt.__wbg_rubikscube_free(e, 0);
  }
  apply_move(e) {
    Mt.rubikscube_apply_move(this.__wbg_ptr, e);
  }
  constructor() {
    const e = Mt.rubikscube_new();
    return this.__wbg_ptr = e >>> 0, Xo.register(this, this.__wbg_ptr, this), this;
  }
  reset() {
    Mt.rubikscube_reset(this.__wbg_ptr);
  }
  get_state() {
    const e = Mt.rubikscube_get_state(this.__wbg_ptr);
    var t = dm(e[0], e[1]).slice();
    return Mt.__wbindgen_free(e[0], e[1] * 1, 1), t;
  }
  is_solved() {
    return Mt.rubikscube_is_solved(this.__wbg_ptr) !== 0;
  }
}
Symbol.dispose && (Vs.prototype[Symbol.dispose] = Vs.prototype.free);
const pm = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function mm(i, e) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, e);
    } catch (n) {
      if (i.ok && pm.has(i.type) && i.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n;
    }
    const t = await i.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(i, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: i } : t;
  }
}
function gm() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbg___wbindgen_throw_b855445ff6a94295 = function(e, t) {
    throw new Error(fm(e, t));
  }, i.wbg.__wbindgen_init_externref_table = function() {
    const e = Mt.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }, i;
}
function _m(i, e) {
  return Mt = i.exports, Il.__wbindgen_wasm_module = e, Ni = null, Mt.__wbindgen_start(), Mt;
}
async function Il(i) {
  if (Mt !== void 0) return Mt;
  typeof i < "u" && (Object.getPrototypeOf(i) === Object.prototype ? { module_or_path: i } = i : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof i > "u" && (i = new URL("/rubiks-cube/assets/rubiks_cube_wasm_bg-BDAcHeXg.wasm", import.meta.url));
  const e = gm();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: t, module: n } = await mm(await i, e);
  return _m(t, n);
}
const As = 80, xr = 140, qo = 0.25;
let ws = null;
function vm() {
  const i = document.getElementById("background-particles");
  if (!i) return;
  const e = i.getContext("2d");
  if (!e) return;
  const t = [], n = { x: null, y: null };
  function r() {
    i.width = window.innerWidth, i.height = window.innerHeight;
  }
  function s() {
    return { x: Math.random() * i.width, y: Math.random() * i.height, vx: (Math.random() - 0.5) * qo, vy: (Math.random() - 0.5) * qo, radius: Math.random() * 1.6 + 0.4 };
  }
  function o() {
    r(), t.length = 0;
    for (let l = 0; l < As; l++) t.push(s());
  }
  function a() {
    e.clearRect(0, 0, i.width, i.height), t.forEach((l, c) => {
      l.x += l.vx, l.y += l.vy, (l.x < -50 || l.x > i.width + 50) && (t[c] = s(), l.x = Math.random() * i.width), (l.y < -50 || l.y > i.height + 50) && (t[c] = s(), l.y = Math.random() * i.height), e.beginPath(), e.fillStyle = "rgba(200, 210, 255, 0.55)", e.arc(l.x, l.y, l.radius, 0, Math.PI * 2), e.fill();
    });
    for (let l = 0; l < As; l++) for (let c = l + 1; c < As; c++) {
      const u = t[l], f = t[c], d = u.x - f.x, m = u.y - f.y, _ = Math.hypot(d, m);
      if (_ < xr) {
        const x = 1 - _ / xr;
        e.beginPath(), e.strokeStyle = `rgba(160, 180, 255, ${x * 0.25})`, e.lineWidth = 1, e.moveTo(u.x, u.y), e.lineTo(f.x, f.y), e.stroke();
      }
    }
    n.x !== null && n.y !== null && t.forEach((l) => {
      const c = l.x - n.x, u = l.y - n.y, f = Math.hypot(c, u);
      if (f < xr) {
        const d = 1 - f / xr;
        e.beginPath(), e.strokeStyle = `rgba(200, 220, 255, ${d * 0.35})`, e.lineWidth = 1.2, e.moveTo(l.x, l.y), e.lineTo(n.x, n.y), e.stroke();
      }
    }), ws = requestAnimationFrame(a);
  }
  window.addEventListener("resize", () => {
    r();
  }), window.addEventListener("pointermove", (l) => {
    n.x = l.clientX, n.y = l.clientY;
  }), window.addEventListener("pointerleave", () => {
    n.x = null, n.y = null;
  }), ws !== null && cancelAnimationFrame(ws), o(), a();
}
function na(i) {
  return i ? i.toString().replace(/[’′]/g, "'").trim().toUpperCase() : "";
}
function xm(i) {
  const e = na(i);
  return e.endsWith("2") ? e : e.endsWith("'") ? e.slice(0, -1) : `${e}'`;
}
function Yo(i) {
  const e = na(i), t = e.charAt(0), n = e.slice(1);
  let r = 1;
  return n === "2" ? r = 2 : n === "'" && (r = 3), { face: t, amount: r };
}
function jo({ face: i, amount: e }) {
  const t = e % 4;
  return t === 0 ? null : t === 1 ? i : t === 2 ? `${i}2` : `${i}'`;
}
function Mm(i) {
  const e = [];
  return i.forEach((t) => {
    const n = Yo(t), r = e[e.length - 1];
    if (!r || r.face !== n.face) {
      e.push(n);
      return;
    }
    const s = { face: r.face, amount: (r.amount + n.amount) % 4 };
    e.pop();
    const o = jo(s);
    o && e.push(Yo(o));
  }), e.map(jo).filter(Boolean).map(na);
}
function Sm(i = []) {
  if (!Array.isArray(i) || i.length === 0) return [];
  const e = i.slice().reverse().map(xm);
  return Mm(e);
}
async function Em({ log: i = [] } = {}) {
  return Sm(i);
}
const zr = { F: ct.F, "F'": ct.FPrime, F2: ct.F2, R: ct.R, "R'": ct.RPrime, R2: ct.R2, U: ct.U, "U'": ct.UPrime, U2: ct.U2, B: ct.B, "B'": ct.BPrime, B2: ct.B2, L: ct.L, "L'": ct.LPrime, L2: ct.L2, D: ct.D, "D'": ct.DPrime, D2: ct.D2 }, ym = { F: "F'", "F'": "F", F2: "F2", R: "R'", "R'": "R", R2: "R2", U: "U'", "U'": "U", U2: "U2", B: "B'", "B'": "B", B2: "B2", L: "L'", "L'": "L", L2: "L2", D: "D'", "D'": "D", D2: "D2" }, Tm = { F: { axis: "z", level: 2, clockwiseAngle: -Math.PI / 2 }, B: { axis: "z", level: 0, clockwiseAngle: Math.PI / 2 }, R: { axis: "x", level: 2, clockwiseAngle: Math.PI / 2 }, L: { axis: "x", level: 0, clockwiseAngle: -Math.PI / 2 }, U: { axis: "y", level: 2, clockwiseAngle: -Math.PI / 2 }, D: { axis: "y", level: 0, clockwiseAngle: Math.PI / 2 } }, Ko = Object.keys(zr), Zo = 12, $o = "rubiks-cube-theme-mode", bm = ["system", "light", "dark"], hn = 0.56, Am = 0.08, Jo = hn - Am, fi = hn / 2 + 0.025, wm = 0.14, cn = hn + wm, Rm = new qn(hn, hn, hn), Cm = new Or(Jo, Jo, 1, 1), Lm = new nm(new qn(hn + 0.02, hn + 0.02, hn + 0.02)), Pm = new Dl({ color: 0 }), Dm = new ea({ color: 987164, metalness: 0.35, roughness: 0.55 }), Um = [16711680, 16746496, 255, 65280, 16777215, 16776960], Im = Um.map((i) => {
  const e = new Ve(i);
  return new ea({ color: e, metalness: 0.15, roughness: 0.32, emissive: e.clone().multiplyScalar(0.08), emissiveIntensity: 0.6, side: $t });
}), ks = new U(8, 8, 8), Mi = { baseDuration: 320, resetBaseDuration: 720, speed: 1, easing(i) {
  return 1 - Math.pow(1 - i, 3);
} };
let jt, Lt, Tt, je, Ht, Ze, Er, Pr, Gt = false, An = [], Pt = [], ia = [], xn = "\u306A\u3057", En = false, Si = false, Rs = false, Hi = [], yt = null, Gi = false, Ws, In = "system", yr = [], Xs = null, ra = 0, Yn = 0, Ei = false;
function Tr(i) {
  return i ? i.toString().replace(/[’′]/g, "'").trim().toUpperCase() : "";
}
async function Nm() {
  try {
    await Il(), jt = new Vs(), vm(), Fm(), Nl(), Bm(), zm(), zl(), Qt();
  } catch (i) {
    console.error("Failed to initialize app:", i);
  }
}
function Fm() {
  const i = document.getElementById("cube-canvas"), e = document.getElementById("canvas-container");
  if (!i || !e) {
    console.error("Canvas or container element missing");
    return;
  }
  Lt = new Qp(), Lt.background = new Ve(592662), Lt.fog = new Js(592662, 22, 46);
  const t = e.clientWidth || 800, n = e.clientHeight || 600;
  Tt = new Bt(45, t / n, 0.1, 1e3), Tt.position.copy(ks), Tt.lookAt(0, 0, 0), je = new Pl({ canvas: i, antialias: true }), je.setPixelRatio(window.devicePixelRatio), je.setSize(t, n), je.shadowMap.enabled = true, je.shadowMap.type = nl, "outputColorSpace" in je && (je.outputColorSpace = ut), je.toneMapping = rl, je.toneMappingExposure = 1.06, "useLegacyLights" in je && (je.useLegacyLights = false), je.domElement.style.touchAction = "none", Ze = new cm(Tt, je.domElement), Ze.enableDamping = true, Ze.dampingFactor = 0.08, Ze.enablePan = false, Ze.minDistance = 6, Ze.maxDistance = 18, Ze.target.set(0, 0, 0), Ze.maxPolarAngle = Math.PI * 0.92, Ze.update();
  const r = new am(16777215, 0.55);
  Lt.add(r);
  const s = new im(15922431, 1052698, 0.6);
  s.position.set(0, 6, 0), Lt.add(s);
  const o = new zo(16777215, 0.8);
  o.position.set(6, 9, 6), o.castShadow = true, o.shadow.mapSize.width = 1024, o.shadow.mapSize.height = 1024, o.shadow.camera.near = 0.5, o.shadow.camera.far = 30, Lt.add(o);
  const a = new zo(16777215, 0.35);
  a.position.set(-6, -4, -6), Lt.add(a);
  const l = new Qs(12, 64), c = new ea({ color: 1119523, metalness: 0.18, roughness: 0.85, transparent: true, opacity: 0.97 }), u = new Yt(l, c);
  u.receiveShadow = true, u.rotation.x = -Math.PI / 2, u.position.y = -1.45, Lt.add(u), Er = new om(), Pr = new Ce(), je.domElement.addEventListener("pointerdown", Zm), je.domElement.addEventListener("pointermove", $m), je.domElement.addEventListener("pointerup", el), je.domElement.addEventListener("pointerleave", el), window.addEventListener("resize", Km);
}
function Nl() {
  if (!jt || !Lt) return;
  Ht && Lt.remove(Ht), Ht = new Bn();
  const i = jt.get_state();
  if (!i || i.length !== 54) {
    console.error("Unexpected cube state", i);
    return;
  }
  for (let e = 0; e < 3; e++) for (let t = 0; t < 3; t++) for (let n = 0; n < 3; n++) {
    const r = Om(e, t, n, i);
    r.position.set((e - 1) * cn, (t - 1) * cn, (n - 1) * cn), r.userData.gridPosition = { x: e, y: t, z: n }, Ht.add(r);
  }
  Lt.add(Ht), Ti();
}
function Om(i, e, t, n) {
  const r = new Bn(), s = new Yt(Rm, Dm);
  s.castShadow = true, s.receiveShadow = true, r.add(s);
  const o = new tm(Lm, Pm);
  o.renderOrder = 1, r.add(o);
  const a = (l, c, u, f = {}) => {
    if (c < 0 || c > 8) return;
    const d = Im[n[l * 9 + c]], m = new Yt(Cm, d);
    m.position.set(u.x, u.y, u.z), m.rotation.set(f.x || 0, f.y || 0, f.z || 0), m.renderOrder = 2, r.add(m);
  };
  if (t === 2) {
    const l = (2 - e) * 3 + i;
    a(0, l, { x: 0, y: 0, z: fi });
  }
  if (t === 0) {
    const l = (2 - e) * 3 + (2 - i);
    a(1, l, { x: 0, y: 0, z: -fi }, { y: Math.PI });
  }
  if (i === 2) {
    const l = (2 - e) * 3 + (2 - t);
    a(2, l, { x: fi, y: 0, z: 0 }, { y: Math.PI / 2 });
  }
  if (i === 0) {
    const l = (2 - e) * 3 + t;
    a(3, l, { x: -fi, y: 0, z: 0 }, { y: -Math.PI / 2 });
  }
  if (e === 2) {
    const l = (2 - t) * 3 + i;
    a(4, l, { x: 0, y: fi, z: 0 }, { x: -Math.PI / 2 });
  }
  if (e === 0) {
    const l = t * 3 + i;
    a(5, l, { x: 0, y: -fi, z: 0 }, { x: Math.PI / 2 });
  }
  return r;
}
function Bm() {
  var _a2, _b, _c2, _d2;
  const i = document.getElementById("scramble-length"), e = document.getElementById("scramble-length-value");
  i && e && (e.textContent = i.value, i.addEventListener("input", (l) => {
    e.textContent = l.target.value;
  }));
  const t = document.getElementById("animation-speed"), n = document.getElementById("animation-speed-value");
  t && n && (n.textContent = `${parseFloat(t.value).toFixed(1)}x`, t.addEventListener("input", (l) => {
    const c = parseFloat(l.target.value);
    Mi.speed = c, n.textContent = `${c.toFixed(1)}x`;
  })), (_a2 = document.getElementById("scramble")) == null ? void 0 : _a2.addEventListener("click", () => {
    !Gt && Pt.length === 0 && qm();
  }), (_b = document.getElementById("undo")) == null ? void 0 : _b.addEventListener("click", () => {
    !Gt && Pt.length === 0 && Ym();
  }), (_c2 = document.getElementById("reset-view")) == null ? void 0 : _c2.addEventListener("click", () => {
    Gt || Ol();
  }), (_d2 = document.getElementById("auto-solve")) == null ? void 0 : _d2.addEventListener("click", () => {
    !Gt && Pt.length === 0 && jm().catch((l) => console.error("Failed to perform auto solve:", l));
  }), Object.keys(zr).forEach((l) => {
    var _a3;
    (_a3 = document.getElementById(l)) == null ? void 0 : _a3.addEventListener("click", () => {
      yi(l, { record: true, source: "button" });
    });
  }), document.addEventListener("keydown", (l) => {
    if (Gt || Pt.length > 0) return;
    const c = l.key.toLowerCase(), f = { f: "F", r: "R", u: "U", b: "B", l: "L", d: "D" }[c];
    if (!f) return;
    const d = Hl(f, l);
    yi(d, { record: true, source: "keyboard" });
  }), bi();
}
function zm() {
  if (yr = Array.from(document.querySelectorAll("[data-theme-mode]")), yr.length === 0) return;
  Ws = window.matchMedia("(prefers-color-scheme: dark)"), Ws.addEventListener("change", () => {
    In === "system" && Cs("system");
  });
  const i = localStorage.getItem($o);
  In = bm.includes(i || "") ? i : "system", Cs(In), yr.forEach((e) => {
    e.addEventListener("click", () => {
      const t = e.dataset.themeMode;
      !t || t === In || (In = t, localStorage.setItem($o, In), Cs(In));
    });
  });
}
function Cs(i) {
  let e = i;
  i === "system" && (e = (Ws == null ? void 0 : Ws.matches) ?? false ? "dark" : "light"), document.body.dataset.theme = e === "light" ? "light" : "dark", yr.forEach((t) => {
    const n = t.dataset.themeMode === i;
    t.classList.toggle("active", n), t.setAttribute("aria-pressed", n ? "true" : "false");
  });
}
function yi(i, e = {}) {
  const t = Tr(i);
  if (zr[t] === void 0) {
    console.warn("Unknown move requested:", i);
    return;
  }
  if (Gt) {
    Pt.push({ moveKey: t, options: e }), Qt();
    return;
  }
  Pt.push({ moveKey: t, options: e }), Qt(), Fl();
}
function Fl() {
  if (Gt) return;
  const i = Pt.shift();
  if (!i) {
    Qt();
    return;
  }
  Hm(i.moveKey, i.options);
}
function Hm(i, e) {
  if (!Ht) return;
  const t = i.charAt(0), n = Tm[t];
  if (!n) return;
  const r = new Bn();
  r.position.set(0, 0, 0), Ht.add(r);
  const s = Ht.children.filter((u) => {
    var _a2;
    const f = (_a2 = u.userData) == null ? void 0 : _a2.gridPosition;
    return f ? f[n.axis] === n.level : false;
  });
  s.forEach((u) => {
    r.attach(u);
  });
  const o = Gm(i, n.clockwiseAngle), a = Vm(i), l = performance.now();
  Gt = true;
  function c(u) {
    const f = u - l, d = Math.min(f / a, 1), m = Mi.easing(d);
    if (r.rotation[n.axis] = o * m, Ti(), d < 1) {
      requestAnimationFrame(c);
      return;
    }
    km(r, s, i, e);
  }
  requestAnimationFrame(c);
}
function Gm(i, e) {
  let t = e;
  return i.endsWith("2") ? t * 2 : i.includes("'") ? -t : t;
}
function Vm(i) {
  const e = Mi.baseDuration, t = i.endsWith("2") ? 1.8 : 1;
  return Math.max(80, e * t / Mi.speed);
}
function km(i, e, t, n) {
  e.forEach((s) => {
    Ht.attach(s);
  }), Ht.remove(i), Wm(e);
  const r = zr[t];
  jt.apply_move(r), Xm(t, n), Gt = false, Qt(), Fl();
}
function Wm(i) {
  i.forEach((e) => {
    const t = e.position, n = Ls(Math.round(t.x / cn) + 1), r = Ls(Math.round(t.y / cn) + 1), s = Ls(Math.round(t.z / cn) + 1);
    e.position.set((n - 1) * cn, (r - 1) * cn, (s - 1) * cn), e.userData.gridPosition = { x: n, y: r, z: s }, e.quaternion.normalize();
  });
}
function Ls(i) {
  return Math.min(2, Math.max(0, i));
}
function Xm(i, e) {
  if (e = e || {}, !En && (e.record || e.source === "scramble") && Hi.push(i), e.record ? (An.push(i), xn = i, tg()) : e.source === "undo" ? xn = e.undoneMove ? `\u4E00\u624B\u623B\u3057 (${e.undoneMove})` : "\u4E00\u624B\u623B\u3057" : e.source === "scramble" ? (xn = `\u30B9\u30AF\u30E9\u30F3\u30D6\u30EB (${i})`, Vl()) : xn = e.source === "autoSolve" ? "\u30AA\u30FC\u30C8\u30BD\u30EB\u30D6\u5B9F\u884C\u4E2D" : i, Si && Pt.length === 0 && !En && (Si = false, Yn = 0, Gl(), xn = "\u30B9\u30AF\u30E9\u30F3\u30D6\u30EB\u5B8C\u4E86"), !En && jt.is_solved() && Hr(), En && Pt.length === 0) {
    Bl();
    return;
  }
  Qt();
}
function qm() {
  const i = document.getElementById("scramble-length"), e = i && parseInt(i.value, 10) || 20, t = [];
  let n = null;
  for (let r = 0; r < e; r++) {
    let s;
    do
      s = Ko[Math.floor(Math.random() * Ko.length)];
    while (n && s.charAt(0) === n);
    t.push(s), n = s.charAt(0);
  }
  ia = t.slice(), xn = "\u30B9\u30AF\u30E9\u30F3\u30D6\u30EB\u6E96\u5099\u4E2D", En = false, Si = true, Vl(), Qt(), t.forEach((r) => {
    yi(r, { record: false, source: "scramble" });
  });
}
function Ym() {
  if (!jt || An.length === 0) return;
  const i = An.pop(), e = ym[i];
  if (!e) {
    An.push(i);
    return;
  }
  Hi.length > 0 && Hi.pop(), yi(e, { record: false, source: "undo", undoneMove: i }), Qt();
}
async function jm() {
  if (!jt || Gt || Pt.length > 0) return;
  const i = jt.get_state();
  let e = [];
  try {
    e = await Em({ state: i, log: Hi });
  } catch (t) {
    console.warn("Optimal solver failed, falling back to recorded history.", t);
  }
  if (!e || e.length === 0) {
    Bl();
    return;
  }
  En = true, Si = false, Hr(), e.forEach((t) => {
    yi(t, { record: false, source: "autoSolve" });
  }), Qt();
}
function Ol() {
  if (Rs) return;
  Rs = true;
  const i = Mi.resetBaseDuration / Mi.speed, e = performance.now(), t = Tt.position.clone(), n = Ze.target.clone(), r = new U(0, 0, 0);
  function s(o) {
    const a = Math.min((o - e) / i, 1), l = 1 - Math.pow(1 - a, 3);
    Tt.position.lerpVectors(t, ks, l), Ze.target.lerpVectors(n, r, l), Ze.update(), Ti(), a < 1 ? requestAnimationFrame(s) : (Tt.position.copy(ks), Ze.target.copy(r), Ze.update(), Ti(), Rs = false);
  }
  requestAnimationFrame(s);
}
function Bl() {
  En = false, Si = false, Hr(), Yn = 0, bi(), jt.reset(), Nl(), An = [], ia = [], Hi = [], xn = "\u30AA\u30FC\u30C8\u30BD\u30EB\u30D6\u5B8C\u4E86", Qt(), Ol();
}
function zl() {
  requestAnimationFrame(zl), Ze && Ze.update(), Ti();
}
function Ti() {
  je && Lt && Tt && je.render(Lt, Tt);
}
function Qt() {
  const i = document.getElementById("status-text"), e = document.getElementById("move-counter"), t = document.getElementById("last-move"), n = document.getElementById("history-list"), r = document.getElementById("undo"), s = document.getElementById("queue-indicator");
  if (i && jt) {
    const o = jt.is_solved();
    i.textContent = o ? "\u72B6\u614B: \u2705 \u89E3\u304B\u308C\u3066\u3044\u307E\u3059" : "\u72B6\u614B: \u{1F500} \u30B9\u30AF\u30E9\u30F3\u30D6\u30EB\u4E2D", i.classList.toggle("solved", o);
  }
  if (e && (e.textContent = `\u624B\u6570: ${An.length}`), t && (t.textContent = `\u76F4\u8FD1\u306E\u64CD\u4F5C: ${xn}`), s && (s.textContent = `\u5F85\u6A5F\u4E2D\u306E\u64CD\u4F5C: ${Pt.length}`), r && (r.disabled = An.length === 0 || Gt || Pt.length > 0), n) {
    const o = [...Qo("\u30B9\u30AF\u30E9\u30F3\u30D6\u30EB", ia), ...Qo("\u624B\u9806", An)];
    n.textContent = o.length === 0 ? "\u307E\u3060\u52D5\u304D\u304C\u3042\u308A\u307E\u305B\u3093" : o.join(`
`);
  }
}
function Qo(i, e) {
  if (!e || e.length === 0) return [];
  const t = [];
  for (let r = 0; r < e.length; r += Zo) t.push(e.slice(r, r + Zo).join(" "));
  const n = " ".repeat(i.length + 2);
  return t.map((r, s) => s === 0 ? `${i}: ${r}` : `${n}${r}`);
}
function Km() {
  if (!Tt || !je) return;
  const i = document.getElementById("canvas-container"), e = (i == null ? void 0 : i.clientWidth) || window.innerWidth, t = (i == null ? void 0 : i.clientHeight) || window.innerHeight;
  Tt.aspect = e / t, Tt.updateProjectionMatrix(), je.setSize(e, t), Ti();
}
function Zm(i) {
  var _a2, _b;
  if (Gt || Pt.length > 0) {
    yt = null, Ze.enabled = true;
    return;
  }
  i.preventDefault(), Jm(i);
  const e = Qm();
  if (!e) {
    yt = null, Ze.enabled = true;
    return;
  }
  const t = eg(e);
  if (!t) {
    yt = null, Ze.enabled = true;
    return;
  }
  yt = { baseMove: t, startX: i.clientX, startY: i.clientY, altKey: i.altKey, shiftKey: i.shiftKey, pointerId: i.pointerId }, Gi = false, Ze.enabled = false, (_b = (_a2 = je.domElement).setPointerCapture) == null ? void 0 : _b.call(_a2, i.pointerId);
}
function $m(i) {
  var _a2, _b;
  if (!yt) return;
  i.preventDefault();
  const e = i.clientX - yt.startX, t = i.clientY - yt.startY;
  !Gi && Math.hypot(e, t) > 8 && (Gi = true, Ze.enabled = true, (_b = (_a2 = je.domElement).releasePointerCapture) == null ? void 0 : _b.call(_a2, yt.pointerId));
}
function el(i) {
  var _a2, _b;
  if (!yt) {
    Ze.enabled = true;
    return;
  }
  if (i.preventDefault(), !Gi) {
    const e = Hl(yt.baseMove, { altKey: yt.altKey, shiftKey: yt.shiftKey });
    yi(e, { record: true, source: "pointer" });
  }
  (_b = (_a2 = je.domElement).releasePointerCapture) == null ? void 0 : _b.call(_a2, yt.pointerId), Ze.enabled = true, yt = null, Gi = false;
}
function Jm(i) {
  const e = je.domElement.getBoundingClientRect();
  Pr.x = (i.clientX - e.left) / e.width * 2 - 1, Pr.y = -((i.clientY - e.top) / e.height) * 2 + 1;
}
function Qm() {
  return !Ht || !Er || !Tt ? null : (Er.setFromCamera(Pr, Tt), Er.intersectObjects(Ht.children, true)[0] || null);
}
function eg(i) {
  if (!i) return null;
  const e = new Oe().getNormalMatrix(i.object.matrixWorld), t = i.face.normal.clone().applyMatrix3(e).normalize(), n = Math.abs(t.x), r = Math.abs(t.y), s = Math.abs(t.z);
  return n > r && n > s ? t.x > 0 ? "R" : "L" : r > n && r > s ? t.y > 0 ? "U" : "D" : s > n && s > r ? t.z > 0 ? "F" : "B" : null;
}
function Hl(i, e) {
  const t = Tr(i);
  return e.altKey ? Tr(`${t}2`) : e.shiftKey ? Tr(`${t}'`) : t;
}
function Gl() {
  Ei || (Ei = true, ra = performance.now() - Yn, Xs = window.setInterval(bi, 100), bi());
}
function Hr() {
  Ei && (Yn = performance.now() - ra, Ei = false, window.clearInterval(Xs), Xs = null, bi());
}
function Vl() {
  Hr(), Yn = 0, bi();
}
function tg() {
  !En && !Si && !Ei && Yn === 0 && Gl();
}
function bi() {
  const i = document.getElementById("timer-display");
  if (!i) return;
  const e = Ei ? performance.now() - ra : Yn;
  i.textContent = ng(e);
}
function ng(i) {
  const e = Math.floor(i / 1e3), t = Math.floor(e / 60).toString().padStart(2, "0"), n = (e % 60).toString().padStart(2, "0"), r = Math.floor(i % 1e3 / 100);
  return `${t}:${n}.${r}`;
}
Nm().catch(console.error);
