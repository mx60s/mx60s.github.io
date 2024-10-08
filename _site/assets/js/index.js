__webpack_public_path__ = window.location.origin + '/assets/js/';


!function(e) {
    function t(t) {
        for (var n, o, i = t[0], a = t[1], u = 0, c = []; u < i.length; u++) {
            o = i[u];
            Object.prototype.hasOwnProperty.call(r, o) && r[o] && c.push(r[o][0]);
            r[o] = 0;
        }
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (f && f(t); c.length;) c.shift()();
    }

    var n = {}, r = { 0: 0 };
    var o = {};
    var i = {
        3: function() {
            return {
                "./index_bg.js": {
                    __wbg_newwithu8clampedarrayandsh_104cc36644cfc313: function(e, t, r, o) {
                        return n[2].exports.a(e, t, r, o);
                    },
                    __wbg_putImageData_dcb576c1e3408468: function(e, t, r, o) {
                        return n[2].exports.b(e, t, r, o);
                    },
                    __wbindgen_object_drop_ref: function(e) {
                        return n[2].exports.c(e);
                    },
                    __wbindgen_throw: function(e, t) {
                        return n[2].exports.e(e, t);
                    },
                    __wbindgen_rethrow: function(e) {
                        return n[2].exports.d(e);
                    }
                }
            };
        }
    };

    function a(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = { i: t, l: !1, exports: {} };
        return e[t].call(r.exports, r, r.exports, a), r.l = !0, r.exports;
    }

    a.e = function(e) {
        var t = [], n = r[e];
        if (0 !== n) if (n) t.push(n[2]);
        else {
            var u = new Promise(function(t, o) {
                n = r[e] = [t, o];
            });
            t.push(n[2] = u);

            var c, s = document.createElement("script");
            s.charset = "utf-8";
            s.timeout = 120;
            a.nc && s.setAttribute("nonce", a.nc);
            s.src = function(e) {
                return a.p + "" + ({}[e] || e) + ".js";
            }(e);

            var f = new Error;
            c = function(t) {
                s.onerror = s.onload = null;
                clearTimeout(l);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type);
                        var i = t && t.target && t.target.src;
                        f.message = "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")";
                        f.name = "ChunkLoadError";
                        f.type = o;
                        f.request = i;
                        n[1](f);
                    }
                    r[e] = void 0;
                }
            };

            var l = setTimeout(function() {
                c({ type: "timeout", target: s });
            }, 120000);
            s.onerror = s.onload = c;
            document.head.appendChild(s);
        }
        return ({ 1: [3] }[e] || []).forEach(function(e) {
            var n = o[e];
            if (n) t.push(n);
            else {
                var r, u = i[e](), c = fetch(a.p + "" + { 3: "8841d36db1fb6f813ceb" }[e] + ".module.wasm");
                if (u instanceof Promise && "function" == typeof WebAssembly.compileStreaming) {
                    r = Promise.all([WebAssembly.compileStreaming(c), u]).then(function(e) {
                        return WebAssembly.instantiate(e[0], e[1]);
                    });
                } else if ("function" == typeof WebAssembly.instantiateStreaming) {
                    r = WebAssembly.instantiateStreaming(c, u);
                } else {
                    r = c.then(function(e) {
                        return e.arrayBuffer();
                    }).then(function(e) {
                        return WebAssembly.instantiate(e, u);
                    });
                }
                t.push(o[e] = r.then(function(t) {
                    return a.w[e] = (t.instance || t).exports;
                }));
            }
        }), Promise.all(t);
    };

    a.m = e;
    a.c = n;
    a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    };

    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        Object.defineProperty(e, "__esModule", { value: !0 });
    };

    a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) {
            for (var r in e) a.d(n, r, function(t) {
                return e[t];
            }.bind(null, r));
        }
        return n;
    };

    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return a.d(t, "a", t), t;
    };

    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    };

    a.p = "assets/js/";
    a.oe = function(e) {
        throw console.error(e), e;
    };

    a.w = {};

    var u = window.webpackJsonp = window.webpackJsonp || [], c = u.push.bind(u);
    u.push = t;
    u = u.slice();

    for (var s = 0; s < u.length; s++) t(u[s]);
    var f = c;
    a(a.s = 0);
}([function(e, t, n) {
    "use strict";
    n.e(1).then(n.bind(null, 1)).then(function(e) {
        var t = function() {
            var t = window.innerWidth, n = window.innerHeight, r = Math.floor(1e4 * Math.random()), o = document.getElementById("perlin-noise-canvas");
            o.width = t;
            o.height = n;
            o.style.width = t + "px";
            o.style.height = n + "px";
            var i = o.getContext("2d");
            if (!i) throw new Error('"2d" is not a valid rendering context.');
            e.draw(i, o.width, o.height, r);
            document.body.style.background = "url(" + o.toDataURL() + ")";
        };
        t();
        window.onresize = t;
    }).catch(console.error);
}]);

