/*!

 Flowplayer Unlimited v6.0.5 (2016-01-13) | flowplayer.org/license

 */
!function (e) {
    function t(e, t, n, r) {
        for (var i, a = n.slice(), l = o(t, e), s = 0, u = a.length; u > s && (handler = a[s], "object" == typeof handler && "function" == typeof handler.handleEvent ? handler.handleEvent(l) : handler.call(e, l), !l.stoppedImmediatePropagation); s++) ;
        return i = !l.stoppedPropagation, r && i && e.parentNode ? e.parentNode.dispatchEvent(l) : !l.defaultPrevented
    }

    function n(e, t) {
        return {configurable: !0, get: e, set: t}
    }

    function r(e, t, r) {
        var o = y(t || e, r);
        g(e, "textContent", n(function () {
            return o.get.call(this)
        }, function (e) {
            o.set.call(this, e)
        }))
    }

    function o(e, t) {
        return e.currentTarget = t, e.eventPhase = e.target === e.currentTarget ? 2 : 3, e
    }

    function i(e, t) {
        for (var n = e.length; n-- && e[n] !== t;) ;
        return n
    }

    function a() {
        if ("BR" === this.tagName) return "\n";
        for (var e = this.firstChild, t = []; e;) 8 !== e.nodeType && 7 !== e.nodeType && t.push(e.textContent), e = e.nextSibling;
        return t.join("")
    }

    function l(e) {
        !f && k.test(document.readyState) && (f = !f, document.detachEvent(d, l), e = document.createEvent("Event"), e.initEvent(p, !0, !0), document.dispatchEvent(e))
    }

    function s(e) {
        for (var t; t = this.lastChild;) this.removeChild(t);
        null != e && this.appendChild(document.createTextNode(e))
    }

    function u(t, n) {
        return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n
    }

    if (!document.createEvent) {
        var c = !0, f = !1, d = "onreadystatechange", p = "DOMContentLoaded", m = "__IE8__" + Math.random(),
            v = e.Object, g = v.defineProperty || function (e, t, n) {
                e[t] = n.value
            }, h = v.defineProperties || function (t, n) {
                for (var r in n) if (b.call(n, r)) try {
                    g(t, r, n[r])
                } catch (o) {
                    e.console && console.log(r + " failed on object:", t, o.message)
                }
            }, y = v.getOwnPropertyDescriptor, b = v.prototype.hasOwnProperty, w = e.Element.prototype,
            x = e.Text.prototype, E = /^[a-z]+$/, k = /loaded|complete/, T = {}, S = document.createElement("div");
        r(e.HTMLCommentElement.prototype, w, "nodeValue"), r(e.HTMLScriptElement.prototype, null, "text"), r(x, null, "nodeValue"), r(e.HTMLTitleElement.prototype, null, "text"), g(e.HTMLStyleElement.prototype, "textContent", function (e) {
            return n(function () {
                return e.get.call(this.styleSheet)
            }, function (t) {
                e.set.call(this.styleSheet, t)
            })
        }(y(e.CSSStyleSheet.prototype, "cssText"))), h(w, {
            textContent: {get: a, set: s}, firstElementChild: {
                get: function () {
                    for (var e = this.childNodes || [], t = 0, n = e.length; n > t; t++) if (1 == e[t].nodeType) return e[t]
                }
            }, lastElementChild: {
                get: function () {
                    for (var e = this.childNodes || [], t = e.length; t--;) if (1 == e[t].nodeType) return e[t]
                }
            }, previousElementSibling: {
                get: function () {
                    for (var e = this.previousSibling; e && 1 != e.nodeType;) e = e.previousSibling;
                    return e
                }
            }, nextElementSibling: {
                get: function () {
                    for (var e = this.nextSibling; e && 1 != e.nodeType;) e = e.nextSibling;
                    return e
                }
            }, childElementCount: {
                get: function () {
                    for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += 1 == t[n].nodeType) ;
                    return e
                }
            }, addEventListener: {
                value: function (e, n, r) {
                    var o, a = this, l = "on" + e, s = a[m] || g(a, m, {value: {}})[m], c = s[l] || (s[l] = {}),
                        f = c.h || (c.h = []);
                    if (!b.call(c, "w")) {
                        if (c.w = function (e) {
                            return e[m] || t(a, u(a, e), f, !1)
                        }, !b.call(T, l)) if (E.test(e)) try {
                            o = document.createEventObject(), o[m] = !0, 9 != a.nodeType && null == a.parentNode && S.appendChild(a), a.fireEvent(l, o), T[l] = !0
                        } catch (o) {
                            for (T[l] = !1; S.hasChildNodes();) S.removeChild(S.firstChild)
                        } else T[l] = !1;
                        (c.n = T[l]) && a.attachEvent(l, c.w)
                    }
                    i(f, n) < 0 && f[r ? "unshift" : "push"](n)
                }
            }, dispatchEvent: {
                value: function (e) {
                    var n, r = this, o = "on" + e.type, i = r[m], a = i && i[o], l = !!a;
                    return e.target || (e.target = r), l ? a.n ? r.fireEvent(o, e) : t(r, e, a.h, !0) : (n = r.parentNode) ? n.dispatchEvent(e) : !0, !e.defaultPrevented
                }
            }, removeEventListener: {
                value: function (e, t, n) {
                    var r = this, o = "on" + e, a = r[m], l = a && a[o], s = l && l.h, u = s ? i(s, t) : -1;
                    u > -1 && s.splice(u, 1)
                }
            }
        }), h(x, {
            addEventListener: {value: w.addEventListener},
            dispatchEvent: {value: w.dispatchEvent},
            removeEventListener: {value: w.removeEventListener}
        }), h(e.XMLHttpRequest.prototype, {
            addEventListener: {
                value: function (e, t, n) {
                    var r = this, o = "on" + e, a = r[m] || g(r, m, {value: {}})[m], l = a[o] || (a[o] = {}),
                        s = l.h || (l.h = []);
                    i(s, t) < 0 && (r[o] || (r[o] = function () {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), r.dispatchEvent(t)
                    }), s[n ? "unshift" : "push"](t))
                }
            }, dispatchEvent: {
                value: function (e) {
                    var n = this, r = "on" + e.type, o = n[m], i = o && o[r], a = !!i;
                    return a && (i.n ? n.fireEvent(r, e) : t(n, e, i.h, !0))
                }
            }, removeEventListener: {value: w.removeEventListener}
        }), h(e.Event.prototype, {
            bubbles: {value: !0, writable: !0},
            cancelable: {value: !0, writable: !0},
            preventDefault: {
                value: function () {
                    this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1)
                }
            },
            stopPropagation: {
                value: function () {
                    this.stoppedPropagation = !0, this.cancelBubble = !0
                }
            },
            stopImmediatePropagation: {
                value: function () {
                    this.stoppedImmediatePropagation = !0, this.stopPropagation()
                }
            },
            initEvent: {
                value: function (e, t, n) {
                    this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation()
                }
            }
        }), h(e.HTMLDocument.prototype, {
            textContent: {
                get: function () {
                    return 11 === this.nodeType ? a.call(this) : null
                }, set: function (e) {
                    11 === this.nodeType && s.call(this, e)
                }
            },
            addEventListener: {
                value: function (t, n, r) {
                    var o = this;
                    w.addEventListener.call(o, t, n, r), c && t === p && !k.test(o.readyState) && (c = !1, o.attachEvent(d, l), e == top && function i(e) {
                        try {
                            o.documentElement.doScroll("left"), l()
                        } catch (t) {
                            setTimeout(i, 50)
                        }
                    }())
                }
            },
            dispatchEvent: {value: w.dispatchEvent},
            removeEventListener: {value: w.removeEventListener},
            createEvent: {
                value: function (e) {
                    var t;
                    if ("Event" !== e) throw new Error("unsupported " + e);
                    return t = document.createEventObject(), t.timeStamp = (new Date).getTime(), t
                }
            }
        }), h(e.Window.prototype, {
            getComputedStyle: {
                value: function () {
                    function e(e) {
                        this._ = e
                    }

                    function t() {
                    }

                    var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/, r = /^(top|right|bottom|left)$/,
                        o = /\-([a-z])/g, i = function (e, t) {
                            return t.toUpperCase()
                        };
                    return e.prototype.getPropertyValue = function (e) {
                        var t, a, l, s = this._, u = s.style, c = s.currentStyle, f = s.runtimeStyle;
                        return e = ("float" === e ? "style-float" : e).replace(o, i), t = c ? c[e] : u[e], n.test(t) && !r.test(e) && (a = u.left, l = f && f.left, l && (f.left = c.left), u.left = "fontSize" === e ? "1em" : t, t = u.pixelLeft + "px", u.left = a, l && (f.left = l)), null == t ? t : t + "" || "auto"
                    }, t.prototype.getPropertyValue = function () {
                        return null
                    }, function (n, r) {
                        return r ? new t(n) : new e(n)
                    }
                }()
            }, addEventListener: {
                value: function (n, r, o) {
                    var a, l = e, s = "on" + n;
                    l[s] || (l[s] = function (e) {
                        return t(l, u(l, e), a, !1)
                    }), a = l[s][m] || (l[s][m] = []), i(a, r) < 0 && a[o ? "unshift" : "push"](r)
                }
            }, dispatchEvent: {
                value: function (t) {
                    var n = e["on" + t.type];
                    return n ? n.call(e, t) !== !1 && !t.defaultPrevented : !0
                }
            }, removeEventListener: {
                value: function (t, n, r) {
                    var o = "on" + t, a = (e[o] || v)[m], l = a ? i(a, n) : -1;
                    l > -1 && a.splice(l, 1)
                }
            }
        })
    }
}(this), !function (a, b, c) {
    var d = function () {
        var l, m,
            e = "undefined" != typeof window && (window.setTimeout || window.alert || window.confirm || window.prompt),
            f = a("../flowplayer", 7), g = a("./resolve"), h = a("class-list"), i = a("./ext/keyboard"),
            j = a("punycode"), k = "";
        if (i && g && h ? k += i[6] + g[7] + h[3] : k = c, this[k + f]) for (l in this[k + f]) m = this[k + f][l], b(m.conf, (e ? f ? g ? typeof e : h : i : f) + a(g, 1)[0], j.substring(4), "16px", c);
        e && e(function () {
            d()
        }, 50)
    };
    d()
}(function (a, b) {
    return a && b ? a.substring(b) : a
}, function (a, b, c, d, e) {
    for (var f in a) if (0 == a[f].indexOf(b)) {
        var g = a[f].substring(b.length).split(b[b.length - 1]);
        if (g[0] > 0) {
            var h = g[6].substring(0, 2 * parseInt(d)), i = e ? e(a, c, d) : "";
            if (i && h) {
                for (var j = h, k = h.length - 1; k >= 0; k--) {
                    for (var l = k, m = k; m < i.length; m++) l += parseInt(i[m]);
                    for (; l >= h.length;) l -= h.length;
                    for (var n = "", o = 0; o < h.length; o++) n += o == k ? h[l] : o == l ? h[k] : h[o];
                    h = n
                }
                g[6] = g[6].replace(j, h), g.splice(0, 1), a[f] = g.join(b[b.length - 1])
            }
        }
    }
}, function (a, b, c) {
    var e, g, h, i, j, k, l, m, n, d = "", f = "", o = window.parseInt;
    for (e in a) if (e.indexOf(b) > 0 && a[e].length == o(c)) {
        d = a[e];
        break
    }
    if (d) {
        for (f = "", g = 1; g < d.length; g++) f += o(d[g]) ? o(d[g]) : 1;
        for (j = o(f.length / 2), k = o(f.substring(0, j + 1)), l = o(f.substring(j)), g = l - k, g < 0 && (g = -g), f = g, g = k - l, g < 0 && (g = -g), f += g, f *= 2, f = "" + f, i = o(c) / 2 + 2, m = "", g = 0; g < j + 1; g++) for (h = 1; h <= 4; h++) n = o(d[g + h]) + o(f[g]), n >= i && (n -= i), m += n;
        return m
    }
    return d
}), !function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.flowplayer = e()
    }
}(function () {
    var e;
    return function t(e, n, r) {
        function o(a, l) {
            if (!n[a]) {
                if (!e[a]) {
                    var s = "function" == typeof require && require;
                    if (!l && s) return s(a, !0);
                    if (i) return i(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[a] = {exports: {}};
                e[a][0].call(c.exports, function (t) {
                    var n = e[a][1][t];
                    return o(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[a].exports
        }

        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
        1: [function (e, t, n) {
            "use strict";
            var r = t.exports = {}, o = e("class-list"), i = window.jQuery, a = e("punycode"), l = e("computed-style");
            r.noop = function () {
            }, r.identity = function (e) {
                return e
            }, r.removeNode = function (e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }, r.find = function (e, t) {
                return i ? i(e, t).toArray() : (t = t || document, Array.prototype.map.call(t.querySelectorAll(e), function (e) {
                    return e
                }))
            }, r.text = function (e, t) {
                e["innerText" in e ? "innerText" : "textContent"] = t
            }, r.findDirect = function (e, t) {
                return r.find(e, t).filter(function (e) {
                    return e.parentNode === t
                })
            }, r.hasClass = function (e, t) {
                return o(e).contains(t)
            }, r.isSameDomain = function (e) {
                var t = window.location, n = r.createElement("a", {href: e});
                return t.hostname === n.hostname && t.protocol === n.protocol && t.port === n.port
            }, r.css = function (e, t, n) {
                return "object" == typeof t ? Object.keys(t).forEach(function (n) {
                    r.css(e, n, t[n])
                }) : "undefined" != typeof n ? "" === n ? e ? e.style.removeProperty(t) : void 0 : e ? e.style.setProperty(t, n) : void 0 : e ? l(e, t) : void 0
            }, r.createElement = function (e, t, n) {
                try {
                    var o = document.createElement(e);
                    for (var a in t) t.hasOwnProperty(a) && ("css" === a ? r.css(o, t[a]) : r.attr(o, a, t[a]));
                    return o.innerHTML = n || "", o
                } catch (l) {
                    if (!i) throw l;
                    return i("<" + e + ">" + n + "</" + e + ">").attr(t)[0]
                }
            }, r.toggleClass = function (e, t, n) {
                if (e) {
                    var r = o(e);
                    "undefined" == typeof n ? r.toggle(t) : n ? r.add(t) : n || r.remove(t)
                }
            }, r.addClass = function (e, t) {
                return r.toggleClass(e, t, !0)
            }, r.removeClass = function (e, t) {
                return r.toggleClass(e, t, !1)
            }, r.append = function (e, t) {
                return e.appendChild(t), e
            }, r.appendTo = function (e, t) {
                return r.append(t, e), e
            }, r.prepend = function (e, t) {
                e.insertBefore(t, e.firstChild)
            }, r.insertAfter = function (e, t, n) {
                t == r.lastChild(e) && e.appendChild(n);
                var o = Array.prototype.indexOf.call(e.children, t);
                e.insertBefore(n, e.children[o + 1])
            }, r.html = function (e, t) {
                e = e.length ? e : [e], e.forEach(function (e) {
                    e.innerHTML = t
                })
            }, r.attr = function (e, t, n) {
                if ("class" === t && (t = "className"), r.hasOwnOrPrototypeProperty(e, t)) try {
                    e[t] = n
                } catch (o) {
                    if (!i) throw o;
                    i(e).attr(t, n)
                } else n === !1 ? e.removeAttribute(t) : e.setAttribute(t, n);
                return e
            }, r.prop = function (e, t, n) {
                return "undefined" == typeof n ? e && e[t] : void (e[t] = n)
            }, r.offset = function (e) {
                var t = e.getBoundingClientRect();
                return e.offsetWidth / e.offsetHeight > e.clientWidth / e.clientHeight && (t = {
                    left: 100 * t.left,
                    right: 100 * t.right,
                    top: 100 * t.top,
                    bottom: 100 * t.bottom,
                    width: 100 * t.width,
                    height: 100 * t.height
                }), t
            }, r.width = function (e, t) {
                if (t) return e.style.width = ("" + t).replace(/px$/, "") + "px";
                var n = r.offset(e).width;
                return "undefined" == typeof n ? e.offsetWidth : n
            }, r.height = function (e, t) {
                if (t) return e.style.height = ("" + t).replace(/px$/, "") + "px";
                var n = r.offset(e).height;
                return "undefined" == typeof n ? e.offsetHeight : n
            }, r.lastChild = function (e) {
                return e.children[e.children.length - 1]
            }, r.hasParent = function (e, t) {
                for (var n = e.parentElement; n;) {
                    if (r.matches(n, t)) return !0;
                    n = n.parentElement
                }
                return !1
            }, r.createAbsoluteUrl = function (e) {
                return r.createElement("a", {href: e}).href
            }, r.xhrGet = function (e, t, n) {
                var r = new XMLHttpRequest;
                r.onreadystatechange = function () {
                    return 4 === this.readyState ? this.status >= 400 ? n() : void t(this.responseText) : void 0
                }, r.open("get", e, !0), r.send()
            }, r.pick = function (e, t) {
                var n = {};
                return t.forEach(function (t) {
                    e.hasOwnProperty(t) && (n[t] = e[t])
                }), n
            }, r.hostname = function (e) {
                return a.toUnicode(e || window.location.hostname)
            }, r.browser = {webkit: "WebkitAppearance" in document.documentElement.style}, r.getPrototype = function (e) {
                return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__
            }, r.hasOwnOrPrototypeProperty = function (e, t) {
                for (var n = e; n;) {
                    if (Object.prototype.hasOwnProperty.call(n, t)) return !0;
                    n = r.getPrototype(n)
                }
                return !1
            }, r.matches = function (e, t) {
                var n = Element.prototype,
                    r = n.matches || n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector || function (e) {
                        for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; n[r] && n[r] !== t;) r++;
                        return n[r] ? !0 : !1
                    };
                return r.call(e, t)
            }, function (e) {
                function t(e) {
                    return e.replace(/-[a-z]/g, function (e) {
                        return e[1].toUpperCase()
                    })
                }

                "undefined" != typeof e.setAttribute && (e.setProperty = function (e, n) {
                    return this.setAttribute(t(e), String(n))
                }, e.getPropertyValue = function (e) {
                    return this.getAttribute(t(e)) || null
                }, e.removeProperty = function (e) {
                    var n = this.getPropertyValue(e);
                    return this.removeAttribute(t(e)), n
                })
            }(window.CSSStyleDeclaration.prototype)
        }, {"class-list": 21, "computed-style": 23, punycode: 29}],
        2: [function (e, t, n) {
            "use strict";
            var r = e("../common");
            t.exports = function (e, t, n, o) {
                n = n || "opaque";
                var i = "obj" + ("" + Math.random()).slice(2, 15),
                    a = '<object class="fp-engine" id="' + i + '" name="' + i + '" ',
                    l = navigator.userAgent.indexOf("MSIE") > -1;
                a += l ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + e + '" type="application/x-shockwave-flash">';
                var s = {
                    width: "100%",
                    height: "100%",
                    allowscriptaccess: "always",
                    wmode: n,
                    quality: "high",
                    flashvars: "",
                    movie: e + (l ? "?" + i : ""),
                    name: i
                };
                "transparent" !== n && (s.bgcolor = o || "#333333"), Object.keys(t).forEach(function (e) {
                    s.flashvars += e + "=" + t[e] + "&"
                }), Object.keys(s).forEach(function (e) {
                    a += '<param name="' + e + '" value="' + s[e] + '"/>'
                }), a += "</object>";
                var u = r.createElement("div", {}, a);
                return r.find("object", u)
            }, window.attachEvent && window.attachEvent("onbeforeunload", function () {
                window.__flash_savedUnloadHandler = window.__flash_unloadHandler = function () {
                }
            })
        }, {"../common": 1}],
        3: [function (e, t, n) {
            "use strict";

            function r(e) {
                return /^https?:/.test(e)
            }

            var o, i = e("../flowplayer"), a = e("../common"), l = e("./embed"), s = e("extend-object"), u = e("bean");
            o = function (e, t) {
                function n(e) {
                    function t(e) {
                        return ("0" + parseInt(e).toString(16)).slice(-2)
                    }

                    return (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + t(e[1]) + t(e[2]) + t(e[3]) : void 0
                }

                function c(e) {
                    if (7 === e.length) return e;
                    var t = e.split("").slice(1);
                    return "#" + t.map(function (e) {
                        return e + e
                    }).join("")
                }

                function f(e) {
                    return /application\/x-mpegurl/i.test(e.type)
                }

                var d, p, m, v = e.conf, g = (e.video, window, {
                    engineName: o.engineName, pick: function (t) {
                        var n = s({}, function () {
                            if (i.support.flashVideo) {
                                for (var n, r, o = 0; o < t.length; o++) if (r = t[o], /mp4|flv|flash/i.test(r.type) && (n = r), e.conf.swfHls && /mpegurl/i.test(r.type) && (n = r), n && !/mp4/i.test(n.type)) return n;
                                return n
                            }
                        }());
                        if (n) return !n.src || r(n.src) || e.conf.rtmp || n.rtmp || (n.src = a.createAbsoluteUrl(n.src)), n
                    }, load: function (o) {
                        function h(e) {
                            return e.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
                        }

                        d = o;
                        var y = a.findDirect("video", t)[0] || a.find(".fp-player > video", t)[0], b = o.src, w = r(b),
                            x = function () {
                                a.removeNode(y)
                            }, E = function (e) {
                                return e.some(function (e) {
                                    return !!y.canPlayType(e.type)
                                })
                            };
                        i.support.video && a.prop(y, "autoplay") && E(o.sources) ? u.one(y, "timeupdate", x) : x();
                        var k = o.rtmp || v.rtmp;
                        if (w || k || (b = a.createAbsoluteUrl(b)), m && f(o) && m.data !== v.swfHls && g.unload(), m) {
                            ["live", "preload", "loop"].forEach(function (e) {
                                o.hasOwnProperty(e) && m.__set(e, o[e])
                            }), Object.keys(o.flashls || {}).forEach(function (e) {
                                m.__set("hls_" + e, o.flashls[e])
                            });
                            var T = !1;
                            if (!w && k) m.__set("rtmp", k.url || k); else {
                                var S = m.__get("rtmp");
                                T = !!S, m.__set("rtmp", null)
                            }
                            m.__play(b, T || o.rtmp && o.rtmp !== v.rtmp)
                        } else {
                            p = "fpCallback" + ("" + Math.random()).slice(3, 15), b = h(b);
                            var N = {
                                hostname: v.embedded ? a.hostname(v.hostname) : a.hostname(location.hostname),
                                url: b,
                                callback: p
                            };
                            t.getAttribute("data-origin") && (N.origin = t.getAttribute("data-origin")), ["proxy", "key", "autoplay", "preload", "subscribe", "live", "loop", "debug", "splash", "poster", "rtmpt"].forEach(function (e) {
                                v.hasOwnProperty(e) && (N[e] = v[e]), o.hasOwnProperty(e) && (N[e] = o[e]), (v.rtmp || {}).hasOwnProperty(e) && (N[e] = (v.rtmp || {})[e]), (o.rtmp || {}).hasOwnProperty(e) && (N[e] = (o.rtmp || {})[e])
                            }), v.rtmp && (N.rtmp = v.rtmp.url || v.rtmp), o.rtmp && (N.rtmp = o.rtmp.url || o.rtmp), Object.keys(o.flashls || {}).forEach(function (e) {
                                var t = o.flashls[e];
                                N["hls_" + e] = t
                            }), void 0 !== v.bufferTime && (N.bufferTime = v.bufferTime), w && delete N.rtmp, N.rtmp && (N.rtmp = h(N.rtmp));
                            var C, j = v.bgcolor || a.css(t, "background-color") || "";
                            0 === j.indexOf("rgb") ? C = n(j) : 0 === j.indexOf("#") && (C = c(j)), N.initialVolume = e.volumeLevel;
                            var O = f(o) ? v.swfHls : v.swf;
                            m = l(O, N, v.wmode, C)[0];
                            var P = a.find(".fp-player", t)[0];
                            a.prepend(P, m), setTimeout(function () {
                                try {
                                    if (!m.PercentLoaded()) return e.trigger("error", [e, {code: 7, url: v.swf}])
                                } catch (t) {
                                }
                            }, 5e3), setTimeout(function () {
                                "undefined" == typeof m.PercentLoaded && e.trigger("flashdisabled", [e])
                            }, 1e3), e.off("resume.flashhack").on("resume.flashhack", function () {
                                var t = setTimeout(function () {
                                    e.playing && e.trigger("flashdisabled", [e])
                                }, 1e3);
                                e.one("progress", function () {
                                    clearTimeout(t)
                                })
                            }), m.pollInterval = setInterval(function () {
                                if (m) {
                                    var t = m.__status ? m.__status() : null;
                                    t && (e.playing && t.time && t.time !== e.video.time && e.trigger("progress", [e, t.time]), o.buffer = t.buffer / o.bytes * o.duration, e.trigger("buffer", [e, o.buffer]), !o.buffered && t.time > 0 && (o.buffered = !0, e.trigger("buffered", [e])))
                                }
                            }, 250), window[p] = function (n, r) {
                                var o = d;
                                v.debug && (0 === n.indexOf("debug") && r && r.length ? console.log.apply(console, ["-- " + n].concat(r)) : console.log("--", n, r));
                                var i = {type: n};
                                switch (n) {
                                    case"ready":
                                        r = s(o, r);
                                        break;
                                    case"click":
                                        i.flash = !0;
                                        break;
                                    case"keydown":
                                        i.which = r;
                                        break;
                                    case"seek":
                                        o.time = r;
                                        break;
                                    case"status":
                                        e.trigger("progress", [e, r.time]), r.buffer < o.bytes && !o.buffered ? (o.buffer = r.buffer / o.bytes * o.duration, e.trigger("buffer", o.buffer)) : o.buffered || (o.buffered = !0, e.trigger("buffered"))
                                }
                                "click" === n || "keydown" === n ? (i.target = t, u.fire(t, n, [i])) : "buffered" != n && "unload" !== n ? setTimeout(function () {
                                    e.trigger(i, [e, r])
                                }, 1) : "unload" === n && e.trigger(i, [e, r])
                            }
                        }
                    }, speed: a.noop, unload: function () {
                        m && m.__unload && m.__unload();
                        try {
                            p && window[p] && delete window[p]
                        } catch (n) {
                        }
                        a.find("object", t).forEach(a.removeNode), m = 0, e.off(".flashengine"), clearInterval(m.pollInterval)
                    }
                });
                return ["pause", "resume", "seek", "volume"].forEach(function (t) {
                    g[t] = function (n) {
                        try {
                            e.ready && (void 0 === n ? m["__" + t]() : m["__" + t](n))
                        } catch (r) {
                            if ("undefined" == typeof m["__" + t]) return e.trigger("flashdisabled", [e]);
                            throw r
                        }
                    }
                }), g
            }, o.engineName = "flash", o.canPlay = function (e, t) {
                return i.support.flashVideo && /video\/(mp4|flash|flv)/i.test(e) || i.support.flashVideo && t.swfHls && /mpegurl/i.test(e)
            }, i.engines.push(o)
        }, {"../common": 1, "../flowplayer": 18, "./embed": 2, bean: 20, "extend-object": 25}],
        4: [function (e, t, n) {
            "use strict";

            function r(e, t) {
                return t = t || 100, Math.round(e * t) / t
            }

            function o(e) {
                return /mpegurl/i.test(e) ? "application/x-mpegurl" : e
            }

            function i(e) {
                return /^(video|application)/i.test(e) || (e = o(e)), !!m.canPlayType(e).replace("no", "")
            }

            function a(e, t) {
                var n = e.filter(function (e) {
                    return e.type === t
                });
                return n.length ? n[0] : null
            }

            var l, s, u = e("../flowplayer"), c = e("bean"), f = e("class-list"), d = e("extend-object"),
                p = e("../common"), m = document.createElement("video"), v = {
                    ended: "finish",
                    pause: "pause",
                    play: "resume",
                    progress: "buffer",
                    timeupdate: "progress",
                    volumechange: "volume",
                    ratechange: "speed",
                    seeked: "seek",
                    loadeddata: "ready",
                    error: "error",
                    dataunavailable: "error",
                    webkitendfullscreen: !u.support.inlineVideo && "unload"
                }, g = function (e, t, n, r) {
                    if ("undefined" == typeof t && (t = !0), "undefined" == typeof n && (n = "none"), "undefined" == typeof r && (r = !0), r && l) return l.type = o(e.type), l.src = e.src, p.find("track", l).forEach(p.removeNode), l.removeAttribute("crossorigin"), l;
                    var i = document.createElement("video");
                    return i.src = e.src, i.type = o(e.type), i.className = "fp-engine", i.autoplay = t ? "autoplay" : !1, i.preload = n, i.setAttribute("x-webkit-airplay", "allow"), i.setAttribute("webkit-playsinline", "true"), i.setAttribute("playsinline", "true"), r && (l = i), i
                };
            s = function (e, t) {
                function n(n, o, a) {
                    var l = t.getAttribute("data-flowplayer-instance-id");
                    if (n.listeners && n.listeners.hasOwnProperty(l)) return void (n.listeners[l] = a);
                    (n.listeners || (n.listeners = {}))[l] = a, c.on(o, "error", function (t) {
                        try {
                            i(t.target.getAttribute("type")) && e.trigger("error", [e, {
                                code: 4,
                                video: d(a, {src: n.src, url: n.src})
                            }])
                        } catch (r) {
                        }
                    }), e.on("shutdown", function () {
                        c.off(o)
                    });
                    var s = {};
                    return Object.keys(v).forEach(function (o) {
                        var i = v[o];
                        if (i) {
                            var u = function (s) {
                                if (a = n.listeners[l], s.target && f(s.target).contains("fp-engine") && (w.debug && !/progress/.test(i) && console.log(o, "->", i, s), (e.ready || /ready|error/.test(i)) && i && p.find("video", t).length)) {
                                    var u;
                                    if ("unload" === i) return void e.unload();
                                    var c = function () {
                                        e.trigger(i, [e, u])
                                    };
                                    switch (i) {
                                        case"ready":
                                            u = d(a, {
                                                duration: n.duration,
                                                width: n.videoWidth,
                                                height: n.videoHeight,
                                                url: n.currentSrc,
                                                src: n.currentSrc
                                            });
                                            try {
                                                u.seekable = !e.live && /mpegurl/i.test(a ? a.type || "" : "") && n.duration || n.seekable && n.seekable.end(null)
                                            } catch (v) {
                                            }
                                            if (m = m || setInterval(function () {
                                                try {
                                                    u.buffer = n.buffered.end(n.buffered.length - 1)
                                                } catch (t) {
                                                }
                                                u.buffer && (r(u.buffer, 1e3) < r(u.duration, 1e3) && !u.buffered ? e.trigger("buffer", [e, u.buffer]) : u.buffered || (u.buffered = !0, e.trigger("buffer", [e, u.buffer]).trigger("buffered", s), clearInterval(m), m = 0))
                                            }, 250), !e.live && !u.duration && !b.hlsDuration && "loadeddata" === o) {
                                                var g = function () {
                                                    u.duration = n.duration;
                                                    try {
                                                        u.seekable = n.seekable && n.seekable.end(null)
                                                    } catch (e) {
                                                    }
                                                    c(), n.removeEventListener("durationchange", g), f(t).remove("is-live")
                                                };
                                                n.addEventListener("durationchange", g);
                                                var h = function () {
                                                    e.ready || n.duration || (u.duration = 0, f(t).add("is-live"), c()), n.removeEventListener("timeupdate", h)
                                                };
                                                return void n.addEventListener("timeupdate", h)
                                            }
                                            break;
                                        case"progress":
                                        case"seek":
                                            e.video.duration;
                                            if (n.currentTime > 0 || e.live) u = Math.max(n.currentTime, 0); else if ("progress" == i) return;
                                            break;
                                        case"speed":
                                            u = r(n.playbackRate);
                                            break;
                                        case"volume":
                                            u = r(n.volume);
                                            break;
                                        case"error":
                                            try {
                                                u = (s.srcElement || s.originalTarget).error, u.video = d(a, {
                                                    src: n.src,
                                                    url: n.src
                                                })
                                            } catch (y) {
                                                return
                                            }
                                    }
                                    c()
                                }
                            };
                            t.addEventListener(o, u, !0), s[o] || (s[o] = []), s[o].push(u)
                        }
                    }), s
                }

                var o, m, h, y = p.findDirect("video", t)[0] || p.find(".fp-player > video", t)[0], b = u.support,
                    w = (p.find("track", y)[0], e.conf);
                return o = {
                    engineName: s.engineName, pick: function (e) {
                        var t = function () {
                            if (b.video) {
                                if (w.videoTypePreference) {
                                    var t = a(e, w.videoTypePreference);
                                    if (t) return t
                                }
                                for (var n = 0; n < e.length; n++) if (i(e[n].type)) return e[n]
                            }
                        }();
                        if (t) return "string" == typeof t.src && (t.src = p.createAbsoluteUrl(t.src)), t
                    }, load: function (r) {
                        var i = !1, a = p.find(".fp-player", t)[0], l = !1;
                        w.splash && !y ? (y = g(r), p.prepend(a, y), i = !0) : y ? (f(y).add("fp-engine"), p.find("source,track", y).forEach(p.removeNode), e.conf.nativesubtitles || p.attr(y, "crossorigin", !1), l = y.src === r.src) : (y = g(r, !!r.autoplay || !!w.autoplay, w.clip.preload || "metadata", !1), p.prepend(a, y), i = !0), c.off(y, "timeupdate", p.noop), c.on(y, "timeupdate", p.noop), p.prop(y, "loop", !(!r.loop && !w.loop)), "undefined" != typeof h && (y.volume = h), (e.video.src && r.src != e.video.src || r.index) && p.attr(y, "autoplay", "autoplay"), y.src = r.src, y.type = r.type, o._listeners = n(y, p.find("source", y).concat(y), r), ("none" != w.clip.preload && "mpegurl" != r.type || !b.zeropreload || !b.dataload) && y.load(), (i || l) && y.load();
                        if (y.paused && (r.autoplay || w.autoplay)) {
                            var pr = y.play();
                            pr && pr.catch && pr.catch(function () {
                                w.autoplay = !1, e.trigger("ready", [e, r])
                            })
                        }
                    }, pause: function () {
                        y.pause()
                    }, resume: function () {
                        var pr = y.play();
                        pr && pr.catch && pr.catch(function () {
                            return
                        })
                    }, speed: function (e) {
                        y.playbackRate = e
                    }, seek: function (t) {
                        try {
                            var n = e.paused;
                            y.currentTime = t, n && y.pause()
                        } catch (r) {
                        }
                    }, volume: function (e) {
                        h = e, y && (y.volume = e, y.muted = (e === 0))
                    }, unload: function () {
                        p.find("video.fp-engine", t).forEach(p.removeNode), b.cachedVideoTag || (l = null), m = clearInterval(m);
                        var e = t.getAttribute("data-flowplayer-instance-id");
                        delete y.listeners[e], y = 0, o._listeners && Object.keys(o._listeners).forEach(function (e) {
                            o._listeners[e].forEach(function (n) {
                                t.removeEventListener(e, n, !0)
                            })
                        })
                    }
                }
            }, s.canPlay = function (e) {
                return u.support.video && i(e)
            }, s.engineName = "html5", u.engines.push(s)
        }, {"../common": 1, "../flowplayer": 18, bean: 20, "class-list": 21, "extend-object": 25}],
        5: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = e("./resolve").TYPE_RE, i = e("scriptjs"), a = e("bean");
            r(function (e, t) {
                var n, r = e.conf.analytics, l = 0, s = 0;
                if (r) {
                    "undefined" == typeof _gat && i("//google-analytics.com/ga.js");
                    var u = function () {
                        var e = _gat._getTracker(r);
                        return e._setAllowLinker(!0), e
                    }, c = function (r, i, a) {
                        if (a = a || e.video, l && "undefined" != typeof _gat) {
                            var s = u();
                            s._trackEvent("Video / Seconds played", e.engine.engineName + "/" + a.type, a.title || t.getAttribute("title") || a.src.split("/").slice(-1)[0].replace(o, ""), Math.round(l / 1e3)), l = 0, n && (clearTimeout(n), n = null)
                        }
                    };
                    e.bind("load unload", c).bind("progress", function () {
                        e.seeking || (l += s ? +new Date - s : 0, s = +new Date), n || (n = setTimeout(function () {
                            n = null;
                            var e = u();
                            e._trackEvent("Flowplayer heartbeat", "Heartbeat", "", 0, !0)
                        }, 6e5))
                    }).bind("pause", function () {
                        s = 0
                    }), e.bind("shutdown", function () {
                        a.off(window, "unload", c)
                    }), a.on(window, "unload", c)
                }
            })
        }, {"../flowplayer": 18, "./resolve": 13, bean: 20, scriptjs: 28}],
        6: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = e("class-list"), i = e("../common"), a = e("bean");
            r(function (e, t) {
                function n(e) {
                    t.className = t.className.replace(l, " "), e >= 0 && o(t).add("cue" + e)
                }

                function r(t) {
                    var n = t && !isNaN(t.time) ? t.time : t;
                    return 0 > n && (n = e.video.duration + n), .125 * Math.round(n / .125)
                }

                var l = / ?cue\d+ ?/, s = !1, u = {}, c = -.125, f = function (t) {
                    var r = e.cuepoints.indexOf(t);
                    isNaN(t) || (t = {time: t}), t.index = r, n(r), e.trigger("cuepoint", [e, t])
                };
                e.on("progress", function (e, t, n) {
                    if (!s) for (var o = r(n); o > c;) c += .125, u[c] && u[c].forEach(f)
                }).on("unload", n).on("beforeseek", function (e) {
                    setTimeout(function () {
                        e.defaultPrevented || (s = !0)
                    })
                }).on("seek", function (e, t, o) {
                    n(), c = r(o || 0) - .125, s = !1, !o && u[0] && u[0].forEach(f)
                }).on("ready", function (t, n, r) {
                    c = -.125;
                    var o = r.cuepoints || e.conf.cuepoints || [];
                    e.setCuepoints(o)
                }).on("finish", function () {
                    c = -.125
                }), e.conf.generate_cuepoints && e.bind("load", function () {
                    i.find(".fp-cuepoint", t).forEach(i.removeNode)
                }), e.setCuepoints = function (t) {
                    return e.cuepoints = [], u = {}, t.forEach(e.addCuepoint), e
                }, e.addCuepoint = function (n) {
                    e.cuepoints || (e.cuepoints = []);
                    var o = r(n);
                    if (u[o] || (u[o] = []), u[o].push(n), e.cuepoints.push(n), e.conf.generate_cuepoints && n.visible !== !1) {
                        var l = e.video.duration, s = i.find(".fp-timeline", t)[0];
                        i.css(s, "overflow", "visible");
                        var c = n.time || n;
                        0 > c && (c = l + c);
                        var f = i.createElement("a", {className: "fp-cuepoint fp-cuepoint" + (e.cuepoints.length - 1)});
                        i.css(f, "left", c / l * 100 + "%"), s.appendChild(f), a.on(f, "mousedown", function (t) {
                            t.preventDefault(), t.stopPropagation(), e.seek(c)
                        })
                    }
                    return e
                }, e.removeCuepoint = function (t) {
                    var n = e.cuepoints.indexOf(t), o = r(t);
                    if (-1 !== n) {
                        e.cuepoints = e.cuepoints.slice(0, n).concat(e.cuepoints.slice(n + 1));
                        var i = u[o].indexOf(t);
                        if (-1 !== i) return u[o] = u[o].slice(0, i).concat(u[o].slice(i + 1)), e
                    }
                }
            })
        }, {"../common": 1, "../flowplayer": 18, bean: 20, "class-list": 21}],
        7: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = e("bean"), i = e("../common"), a = (e("is-object"), e("extend-object")),
                l = e("class-list");
            r(function (e, t) {
                if (e.conf.embed !== !1) {
                    var n = (e.conf, i.find(".fp-ui", t)[0]),
                        r = i.createElement("a", {"class": "fp-embed", title: "Copy to your site"}),
                        l = i.createElement("div", {"class": "fp-embed-code"}, "<label>Paste this HTML code on your site to embed.</label><textarea></textarea>"),
                        u = i.find("textarea", l)[0];
                    n.appendChild(r), n.appendChild(l), e.embedCode = function () {
                        var n = e.conf.embed || {}, r = e.video;
                        if (n.code) {
                            return n.code
                        } else if (n.iframe) {
                            var o = (e.conf.embed.iframe, n.width || r.width || i.width(t)),
                                l = n.height || r.height || i.height(t);
                            return '<iframe src="' + e.conf.embed.iframe + '" allowfullscreen style="width:' + o + ";height:" + l + ';border:none;"></iframe>'
                        }
                        var s = ["ratio", "rtmp", "live", "bufferTime", "origin", "analytics", "key", "subscribe", "swf", "swfHls", "embed", "adaptiveRatio", "logo"];
                        n.playlist && s.push("playlist");
                        var u = i.pick(e.conf, s);
                        u.logo && (u.logo = i.createElement("img", {src: u.logo}).src), n.playlist && e.conf.playlist.length || (u.clip = a({}, e.conf.clip, i.pick(e.video, ["sources"])));
                        var c = 'var w=window,d=document,e;w._fpes||(w._fpes=[],w.addEventListener("load",function(){var s=d.createElement("script");s.src="//embed.flowplayer.org/6.0.5/embed.min.js",d.body.appendChild(s)})),e=[].slice.call(d.getElementsByTagName("script"),-1)[0].parentNode,w._fpes.push({e:e,l:"$library",c:$conf});\n'.replace("$conf", JSON.stringify(u)).replace("$library", n.library || "");
                        return '<a href="$href">Watch video!\n<script>$script</script></a>'.replace("$href", e.conf.origin || window.location.href).replace("$script", c)
                    }, s(t, ".fp-embed", "is-embedding"), o.on(t, "click", ".fp-embed-code textarea", function () {
                        u.select()
                    }), o.on(t, "click", ".fp-embed", function () {
                        u.textContent = e.embedCode().replace(/(\r\n|\n|\r)/gm, ""), u.focus(), u.select()
                    })
                }
            });
            var s = function (e, t, n) {
                function r() {
                    a.remove(n), o.off(document, ".st")
                }

                var a = l(e);
                o.on(e, "click", t || "a", function (e) {
                    e.preventDefault(), a.toggle(n), a.contains(n) && (o.on(document, "keydown.st", function (e) {
                        27 == e.which && r()
                    }), o.on(document, "click.st", function (e) {
                        i.hasParent(e.target, "." + n) || r()
                    }))
                })
            }
        }, {"../common": 1, "../flowplayer": 18, bean: 20, "class-list": 21, "extend-object": 25, "is-object": 27}],
        8: [function (e, t, n) {
            "use strict";
            t.exports = function (e, t) {
                t || (t = document.createElement("div"));
                var n = {}, r = {}, o = function (e, o, i) {
                    var a = e.split(".")[0], l = function (s) {
                        i && (t.removeEventListener(a, l), n[e].splice(n[e].indexOf(l), 1));
                        var u = [s].concat(r[s.timeStamp + s.type] || []);
                        o && o.apply(void 0, u)
                    };
                    t.addEventListener(a, l), n[e] || (n[e] = []), n[e].push(l)
                };
                e.on = e.bind = function (t, n) {
                    var r = t.split(" ");
                    return r.forEach(function (e) {
                        o(e, n)
                    }), e
                }, e.one = function (t, n) {
                    var r = t.split(" ");
                    return r.forEach(function (e) {
                        o(e, n, !0)
                    }), e
                };
                var i = function (e, t) {
                    return 0 === t.filter(function (t) {
                        return -1 === e.indexOf(t)
                    }).length
                };
                e.off = e.unbind = function (r) {
                    var o = r.split(" ");
                    return o.forEach(function (e) {
                        var r = e.split(".").slice(1), o = e.split(".")[0];
                        Object.keys(n).filter(function (e) {
                            var t = e.split(".").slice(1);
                            return (!o || 0 === e.indexOf(o)) && i(t, r)
                        }).forEach(function (e) {
                            var r = n[e], o = e.split(".")[0];
                            r.forEach(function (e) {
                                t.removeEventListener(o, e), r.splice(r.indexOf(e), 1)
                            })
                        })
                    }), e
                }, e.trigger = function (n, o, i) {
                    if (n) {
                        o = (o || []).length ? o || [] : [o];
                        var a, l = document.createEvent("Event");
                        return a = n.type || n, l.initEvent(a, !1, !0), Object.defineProperty && (l.preventDefault = function () {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function () {
                                    return !0
                                }
                            })
                        }), r[l.timeStamp + l.type] = o, t.dispatchEvent(l), i ? l : e
                    }
                }
            }, t.exports.EVENTS = ["beforeseek", "disable", "error", "finish", "fullscreen", "fullscreen-exit", "load", "mute", "pause", "progress", "ready", "resume", "seek", "speed", "stop", "unload", "volume", "boot", "shutdown"]
        }, {}],
        9: [function (e, t, n) {
            "use strict";
            var r, o = e("../flowplayer"), i = e("bean"), a = e("class-list"), l = (e("extend-object"), e("../common")),
                s = (o.support.browser.mozilla ? "moz" : "webkit", "fullscreen"), u = "fullscreen-exit",
                c = o.support.fullscreen,
                f = ("function" == typeof document.exitFullscreen, navigator.userAgent.toLowerCase()),
                d = /(safari)[ \/]([\w.]+)/.exec(f) && !/(chrome)[ \/]([\w.]+)/.exec(f);
            i.on(document, "fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr", function (e) {
                var t = document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement || e.target;
                if (r || t.parentNode && t.parentNode.getAttribute("data-flowplayer-instance-id")) {
                    var n = r || o(t.parentNode);
                    t && !r ? r = n.trigger(s, [t]) : (r.trigger(u, [r]), r = null)
                }
            }), o(function (e, t) {
                var n = l.createElement("div", {className: "fp-player"});
                if (Array.prototype.map.call(t.children, l.identity).forEach(function (e) {
                    l.matches(e, ".fp-ratio,script") || n.appendChild(e)
                }), t.appendChild(n), e.conf.fullscreen) {
                    var o, i, f = window, p = a(t);
                    e.isFullscreen = !1, e.fullscreen = function (t) {
                        return e.disabled ? void 0 : (void 0 === t && (t = !e.isFullscreen), t && (o = f.scrollY, i = f.scrollX), c ? t ? ["requestFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].forEach(function (e) {
                            return "function" == typeof n[e] ? (n[e](Element.ALLOW_KEYBOARD_INPUT), !1) : void 0
                        }) : ["exitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].forEach(function (e) {
                            return "function" == typeof document[e] ? (document[e](), !1) : void 0
                        }) : e.trigger(t ? s : u, [e]), e)
                    };
                    var m;
                    e.on("mousedown.fs", function () {
                        +new Date - m < 150 && e.ready && e.fullscreen(), m = +new Date
                    }), e.on(s, function (n) {
                        p.add("is-fullscreen"), c || l.css(t, "position", "fixed"), e.isFullscreen = !0
                    }).on(u, function (n) {
                        var r;
                        c || "html5" !== e.engine || (r = t.css("opacity") || "", l.css(t, "opacity", 0)), c || l.css(t, "position", ""), p.remove("is-fullscreen"), c || "html5" !== e.engine || setTimeout(function () {
                            t.css("opacity", r)
                        }), e.isFullscreen = !1, f.scrollTo(i, o)
                    }).on("unload", function () {
                        e.isFullscreen && e.fullscreen()
                    }), e.on("shutdown", function () {
                        r = null
                    })
                }
            })
        }, {"../common": 1, "../flowplayer": 18, bean: 20, "class-list": 21, "extend-object": 25}],
        10: [function (e, t, n) {
            "use strict";
            var r, o, i = e("../flowplayer"), a = e("bean"), l = "is-help", s = e("../common"), u = e("class-list");
            a.on(document, "keydown.fp", function (e) {
                var t = r, n = e.ctrlKey || e.metaKey || e.altKey, i = e.which, a = t && t.conf, s = o && u(o);
                if (t && a.keyboard && !t.disabled) {
                    if (-1 != [63, 187, 191].indexOf(i)) return s.toggle(l), !1;
                    if (27 == i && s.contains(l)) return s.toggle(l), !1;
                    if (!n && t.ready) {
                        if (e.preventDefault(), e.shiftKey) return void (39 == i ? t.speed(!0) : 37 == i && t.speed(!1));
                        if (58 > i && i > 47) return t.seekTo(i - 48);
                        switch (i) {
                            case 38:
                            case 75:
                                t.volume(t.volumeLevel + .15);
                                break;
                            case 40:
                            case 74:
                                t.volume(t.volumeLevel - .15);
                                break;
                            case 190:
                                t.seekTo();
                                break;
                            case 32:
                                t.toggle();
                                break;
                            case 70:
                                a.fullscreen && t.fullscreen();
                                break;
                            case 77:
                                t.mute()
                        }
                        ;t.trigger("keydown", [t, i])
                    }
                }
            }), a.on(document, "keyup.fp", function (e) {
                var t = r, n = e.ctrlKey || e.metaKey || e.altKey, i = e.which, a = t && t.conf;
                t && a.keyboard && !t.disabled && !n && t.ready && (e.preventDefault(), t.trigger("keyup", [t, i]))
            }), i(function (e, t) {
                if (e.conf.keyboard) {
                    a.on(t, "mouseenter mouseleave", function (n) {
                        r = e.disabled || "mouseover" != n.type ? 0 : e, r && (o = t)
                    });
                    var n = i.support.video && "flash" !== e.conf.engine && document.createElement("video").playbackRate ? "<p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster</p>" : "";
                    if (t.appendChild(s.createElement("div", {
                        className: "fp-help"
                    }, '         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>' + n + '         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip; <em>6</em> seek to 10%, 20% &hellip; 60% </p>         </div>   ')), e.conf.tooltip) {
                        var c = s.find(".fp-ui", t)[0];
                        c.setAttribute("title", "Hit ? for help"), a.one(t, "mouseout.tip", ".fp-ui", function () {
                            c.removeAttribute("title")
                        })
                    }
                    a.on(t, "click", ".fp-close", function () {
                        u(t).toggle(l)
                    }), e.bind("shutdown", function () {
                        o == t && (o = null)
                    })
                }
            })
        }, {"../common": 1, "../flowplayer": 18, bean: 20, "class-list": 21}],
        11: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = /IEMobile/.test(window.navigator.userAgent), i = e("class-list"),
                a = e("../common"), l = e("bean"), s = e("./ui").format, u = window.navigator.userAgent;
            (r.support.touch || o) && r(function (e, t) {
                var n = /Android/.test(u) && !/Firefox/.test(u) && !/Opera/.test(u), c = /Silk/.test(u),
                    f = n ? parseFloat(/Android\ (\d+(\.\d+)?)/.exec(u)[1], 10) : 0, d = i(t);
                if (n && !o) {
                    if (!/Chrome/.test(u) && 4 > f) {
                        var p = e.load;
                        e.load = function (t, n) {
                            var r = p.apply(e, arguments);
                            return e.trigger("ready", [e, e.video]), r
                        }
                    }
                    var m, v = 0, g = function (e) {
                        m = setInterval(function () {
                            e.video.time = ++v, e.trigger("progress", [e, v])
                        }, 1e3)
                    };
                    e.bind("ready pause unload", function () {
                        m && (clearInterval(m), m = null)
                    }), e.bind("ready", function () {
                        v = 0
                    }), e.bind("resume", function (t, n) {
                        return n.live ? v ? g(n) : void e.one("progress", function (e, t, n) {
                            0 === n && g(t)
                        }) : void 0
                    })
                }
                r.support.volume || (d.add("no-volume"), d.add("no-mute")), d.add("is-touch"), e.sliders && e.sliders.timeline && e.sliders.timeline.disableAnimation(), (!r.support.inlineVideo || e.conf.native_fullscreen) && (e.conf.nativesubtitles = !0);
                var h = !1;
                l.on(t, "touchmove", function () {
                    h = !0
                }), l.on(t, "touchend click", function (t) {
                    return h ? void (h = !1) : e.playing && !d.contains("is-mouseover") ? (d.add("is-mouseover"), d.remove("is-mouseout"), t.preventDefault(), void t.stopPropagation()) : void (e.playing || e.splash || !d.contains("is-mouseout") || d.contains("is-mouseover") || setTimeout(function () {
                        e.playing || e.splash || e.resume()
                    }, 400))
                }), e.conf.native_fullscreen && "function" == typeof document.createElement("video").webkitEnterFullScreen && (e.fullscreen = function () {
                    var e = a.find("video.fp-engine", t)[0];
                    e.webkitEnterFullScreen(), l.one(e, "webkitendfullscreen", function () {
                        a.prop(e, "controls", !0), a.prop(e, "controls", !1)
                    })
                }), (false) && e.bind("ready", function () {
                    var n = a.find("video.fp-engine", t)[0];
                    l.one(n, "canplay", function () {
                        n.play()
                    }), n.play(), e.bind("progress.dur", function () {
                        var r = n.duration;
                        1 !== r && (e.video.duration = r, a.find(".fp-duration", t)[0].innerHTML = s(r), e.unbind("progress.dur"))
                    })
                })
            })
        }, {"../common": 1, "../flowplayer": 18, "./ui": 17, bean: 20, "class-list": 21}],
        12: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = e("extend-object"), i = e("bean"), a = e("class-list"), l = e("../common"),
                s = e("./resolve"), u = new s, c = window.jQuery, f = /^#/;
            r(function (e, t) {
                function n() {
                    return l.find(v.query, r())
                }

                function r() {
                    return f.test(v.query) ? void 0 : t
                }

                function d() {
                    return l.find(v.query + "." + g, r())
                }

                function p() {
                    var n = l.find(".fp-playlist", t)[0];
                    if (!n) {
                        n = l.createElement("div", {className: "fp-playlist"});
                        var r = l.find(".fp-next,.fp-prev", t);
                        r.length ? r[0].parentElement.insertBefore(n, r[0]) : l.insertAfter(t, l.find("video", t)[0], n)
                    }
                    n.innerHTML = "", e.conf.playlist[0].length && (e.conf.playlist = e.conf.playlist.map(function (e) {
                        if ("string" == typeof e) {
                            var t = e.split(s.TYPE_RE)[1];
                            return {
                                sources: [{
                                    type: "m3u8" === t.toLowerCase() ? "application/x-mpegurl" : "video/" + t,
                                    src: e
                                }]
                            }
                        }
                        return {
                            sources: e.map(function (e) {
                                var t = {};
                                return Object.keys(e).forEach(function (n) {
                                    t.type = /mpegurl/i.test(n) ? "application/x-mpegurl" : "video/" + n, t.src = e[n]
                                }), t
                            })
                        }
                    })), e.conf.playlist.forEach(function (e, t) {
                        var r = e.sources[0].src;
                        n.appendChild(l.createElement("a", {href: r, "data-index": t}))
                    })
                }

                function m(t) {
                    return "undefined" != typeof t.index ? t.index : "undefined" != typeof e.video.index ? e.video.index : e.conf.startIndex || 0
                }

                var v = o({active: "is-active", advance: !0, query: ".fp-playlist a"}, e.conf), g = v.active, h = a(t);
                e.play = function (t) {
                    if (void 0 === t) return e.resume();
                    if ("number" == typeof t && !e.conf.playlist[t]) return e;
                    if ("number" != typeof t) return e.load.apply(null, arguments);
                    var n = o({index: t}, e.conf.playlist[t]);
                    return t === e.video.index ? e.load(n, function () {
                        e.resume()
                    }) : (e.off("resume.fromfirst"), e.load(n, function () {
                        e.video.index = t
                    }), e)
                }, e.next = function (t) {
                    t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = n === e.conf.playlist.length - 1 ? 0 : n + 1, e.play(n)), e
                }, e.prev = function (t) {
                    t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = 0 === n ? e.conf.playlist.length - 1 : n - 1, e.play(n)), e
                }, e.setPlaylist = function (t) {
                    return e.conf.playlist = t, delete e.video.index, p(), e
                }, e.addPlaylistItem = function (t) {
                    return e.setPlaylist(e.conf.playlist.concat([t]))
                }, e.removePlaylistItem = function (t) {
                    var n = e.conf.playlist;
                    return e.setPlaylist(n.slice(0, t).concat(n.slice(t + 1)))
                }, i.on(t, "click", ".fp-next", e.next), i.on(t, "click", ".fp-prev", e.prev), v.advance && e.off("finish.pl").on("finish.pl", function (e, t) {
                    if (t.video.loop) return t.seek(0, function () {
                        t.resume()
                    });
                    var n = t.video.index >= 0 ? t.video.index + 1 : void 0;
                    n < t.conf.playlist.length || v.loop ? (n = n === t.conf.playlist.length ? 0 : n, h.remove("is-finished"), setTimeout(function () {
                        t.play(n)
                    })) : t.conf.playlist.length > 1 && t.one("resume.fromfirst", function () {
                        return t.play(0), !1
                    })
                });
                var y = !1;
                e.conf.playlist.length && (y = !0, p(), e.conf.clip && e.conf.clip.sources.length || (e.conf.clip = e.conf.playlist[e.conf.startIndex || 0])), n().length && !y && (e.conf.playlist = [], delete e.conf.startIndex, n().forEach(function (t) {
                    var n = t.href;
                    t.setAttribute("data-index", e.conf.playlist.length);
                    var r = u.resolve(n, e.conf.clip.sources);
                    c && o(r, c(t).data()), e.conf.playlist.push(r)
                })), i.on(f.test(v.query) ? document : t, "click", v.query, function (t) {
                    t.preventDefault();
                    var n = t.currentTarget, r = Number(n.getAttribute("data-index"));
                    -1 != r && e.play(r)
                }), e.on("load", function (n, o, i) {
                    if (e.conf.playlist.length) {
                        var s = d()[0], u = s && s.getAttribute("data-index"), c = i.index = m(i),
                            f = l.find(v.query + '[data-index="' + c + '"]', r())[0],
                            p = c == e.conf.playlist.length - 1;
                        s && a(s).remove(g), f && a(f).add(g), h.remove("video" + u), h.add("video" + c), l.toggleClass(t, "last-video", p), i.index = o.video.index = c, i.is_last = o.video.is_last = p
                    }
                }).on("unload.pl", function () {
                    e.conf.playlist.length && (d().forEach(function (e) {
                        a(e).toggle(g)
                    }), e.conf.playlist.forEach(function (e, t) {
                        h.remove("video" + t)
                    }))
                }), e.conf.playlist.length && (e.conf.loop = !1)
            })
        }, {"../common": 1, "../flowplayer": 18, "./resolve": 13, bean: 20, "class-list": 21, "extend-object": 25}],
        13: [function (e, t, n) {
            "use strict";

            function r(e) {
                var t = e.attr("src"), n = e.attr("type") || "", r = t.split(i)[1];
                return n = n.toLowerCase(), a(e.data(), {src: t, suffix: r || n, type: n || r})
            }

            function o(e) {
                return /mpegurl/i.test(e) ? "application/x-mpegurl" : "video/" + e
            }

            var i = /\.(\w{3,4})(\?.*)?$/i, a = e("extend-object");
            t.exports = function () {
                var e = this;
                e.sourcesFromVideoTag = function (e, t) {
                    var n = [];
                    return t("source", e).each(function () {
                        n.push(r(t(this)))
                    }), !n.length && e.length && n.push(r(e)), n
                }, e.resolve = function (e, t) {
                    return e ? ("string" == typeof e && (e = {
                        src: e,
                        sources: []
                    }, e.sources = (t || []).map(function (t) {
                        var n = t.src.split(i)[1];
                        return {type: t.type, src: e.src.replace(i, "." + n + "$2")}
                    })), e instanceof Array && (e = {
                        sources: e.map(function (e) {
                            return e.type && e.src ? e : Object.keys(e).reduce(function (t, n) {
                                return a(t, {type: o(n), src: e[n]})
                            }, {})
                        })
                    }), e) : {sources: t}
                }
            }, t.exports.TYPE_RE = i
        }, {"extend-object": 25}],
        14: [function (e, t, n) {
            "use strict";
            var r = e("class-list"), o = e("bean"), i = e("../common"), a = function (e, t) {
                var n;
                return function () {
                    n || (e.apply(this, arguments), n = 1, setTimeout(function () {
                        n = 0
                    }, t))
                }
            }, l = function (e, t) {
                var n, l, s, u, c, f, d, p,
                    m = (/iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent), i.lastChild(e)),
                    v = r(e), g = r(m), h = !1, y = function () {
                        l = i.offset(e), s = i.width(e), u = i.height(e), f = c ? u : s, p = E(d)
                    }, b = function (t) {
                        n || t == k.value || d && !(d > t) || (o.fire(e, "slide", [t]), k.value = t)
                    }, w = function (e) {
                        var n = e.pageX || e.clientX;
                        !n && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length && (n = e.originalEvent.touches[0].pageX);
                        var r = c ? e.pageY - l.top : n - l.left;
                        r = Math.max(0, Math.min(p || f, r));
                        var o = r / f;
                        return c && (o = 1 - o), t && (o = 1 - o), x(o, 0, !0)
                    }, x = function (e, t) {
                        void 0 === t && (t = 0), e > 1 && (e = 1);
                        var n = Math.round(1e3 * e) / 10 + "%";
                        return (!d || d >= e) && (g.remove("animated"), h ? g.remove("animated") : (g.add("animated"), i.css(m, "transition-duration", (t || 0) + "ms")), i.css(m, "width", n)), e
                    }, E = function (e) {
                        return Math.max(0, Math.min(f, c ? (1 - e) * u : e * s))
                    }, k = {
                        max: function (e) {
                            d = e
                        }, disable: function (e) {
                            n = e
                        }, slide: function (e, t, n) {
                            y(), n && b(e), x(e, t)
                        }, disableAnimation: function (t, n) {
                            h = t !== !1, i.toggleClass(e, "no-animation", !!n)
                        }
                    };
                return y(), o.on(e, "mousedown.sld touchstart", function (e) {
                    if (e.preventDefault(), !n) {
                        var t = a(b, 100);
                        y(), k.dragging = !0, v.add("is-dragging"), b(w(e)), o.on(document, "mousemove.sld touchmove.sld", function (e) {
                            e.preventDefault(), t(w(e))
                        }), o.one(document, "mouseup touchend", function () {
                            k.dragging = !1, v.remove("is-dragging"), o.off(document, "mousemove.sld touchmove.sld")
                        })
                    }
                }), k
            };
            t.exports = l
        }, {"../common": 1, bean: 20, "class-list": 21}],
        15: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = e("../common"), i = e("bean"), a = e("class-list");
            r.defaults.subtitleParser = function (e) {
                function t(e) {
                    var t = e.split(":");
                    return 2 == t.length && t.unshift(0), 60 * t[0] * 60 + 60 * t[1] + parseFloat(t[2].replace(",", "."))
                }

                for (var n, r, o, i = /^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/, a = [], l = 0, s = e.split("\n"), u = s.length, c = {}; u > l; l++) if (r = i.exec(s[l])) {
                    for (n = s[l - 1], o = "<p>" + s[++l] + "</p><br/>"; "string" == typeof s[++l] && s[l].trim() && l < s.length;) o += "<p>" + s[l] + "</p><br/>";
                    c = {title: n, startTime: t(r[1]), endTime: t(r[3]), text: o}, a.push(c)
                }
                return a
            }, r(function (e, t) {
                var n, l, s, u, c = a(t), f = function () {
                    u = o.createElement("a", {className: "fp-menu"});
                    var n = o.createElement("ul", {className: "fp-dropdown fp-dropup"});
                    return n.appendChild(o.createElement("li", {"data-subtitle-index": -1}, "No subtitles")), (e.video.subtitles || []).forEach(function (e, t) {
                        var r = e.srclang || "en", i = e.label || "Default (" + r + ")",
                            a = o.createElement("li", {"data-subtitle-index": t}, i);
                        n.appendChild(a)
                    }), u.appendChild(n), o.find(".fp-controls", t)[0].appendChild(u), u
                };
                i.on(t, "click", ".fp-menu", function (e) {
                    a(u).toggle("dropdown-open")
                }), i.on(t, "click", ".fp-menu li[data-subtitle-index]", function (t) {
                    var n = t.target.getAttribute("data-subtitle-index");
                    return "-1" === n ? e.disableSubtitles() : void e.loadSubtitles(n)
                });
                var d = function () {
                    var e = o.find(".fp-player", t)[0];
                    s = o.find(".fp-subtitle", t)[0], s = s || o.appendTo(o.createElement("div", {"class": "fp-subtitle"}), e), Array.prototype.forEach.call(s.children, o.removeNode), n = a(s), o.find(".fp-menu", t).forEach(o.removeNode), f()
                };
                e.on("ready", function (n, i, a) {
                    var l = i.conf;
                    if (r.support.subtitles && l.nativesubtitles && "html5" == i.engine.engineName) {
                        var s = function (e) {
                            var n = o.find("video", t)[0].textTracks;
                            n.length && (n[0].mode = e)
                        };
                        if (!a.subtitles || !a.subtitles.length) return;
                        var u = o.find("video.fp-engine", t)[0];
                        return a.subtitles.some(function (e) {
                            return !o.isSameDomain(e.src)
                        }) && o.attr(u, "crossorigin", "anonymous"), u.textTracks.addEventListener("addtrack", function () {
                            s("disabled"), s("showing")
                        }), void a.subtitles.forEach(function (e) {
                            u.appendChild(o.createElement("track", {
                                kind: "subtitles",
                                srclang: e.srclang || "en",
                                label: e.label || "en",
                                src: e.src,
                                "default": e["default"]
                            }))
                        })
                    }
                    if (i.subtitles = [], d(), c.remove("has-menu"), e.disableSubtitles(), a.subtitles && a.subtitles.length) {
                        c.add("has-menu");
                        var f = a.subtitles.filter(function (e) {
                            return e["default"]
                        })[0];
                        f && i.loadSubtitles(a.subtitles.indexOf(f))
                    }
                }), e.bind("cuepoint", function (e, t, r) {
                    r.subtitle ? (l = r.index, o.html(s, r.subtitle.text), n.add("fp-active")) : r.subtitleEnd && (n.remove("fp-active"), l = r.index)
                }), e.bind("seek", function (t, r, o) {
                    l && e.cuepoints[l] && e.cuepoints[l].time > o && (n.remove("fp-active"), l = null), (e.cuepoints || []).forEach(function (t) {
                        var n = t.subtitle;
                        n && l != t.index ? o >= t.time && (!n.endTime || o <= n.endTime) && e.trigger("cuepoint", [e, t]) : t.subtitleEnd && o >= t.time && t.index == l + 1 && e.trigger("cuepoint", [e, t])
                    })
                });
                var p = function (e) {
                    o.toggleClass(o.find("li.active", t)[0], "active"), o.toggleClass(o.find('li[data-subtitle-index="' + e + '"]', t)[0], "active")
                };
                e.disableSubtitles = function () {
                    return e.subtitles = [], (e.cuepoints || []).forEach(function (t) {
                        (t.subtitle || t.subtitleEnd) && e.removeCuepoint(t)
                    }), s && Array.prototype.forEach.call(s.children, o.removeNode), p(-1), e
                }, e.loadSubtitles = function (t) {
                    e.disableSubtitles();
                    var n = e.video.subtitles[t], r = n.src;
                    return r ? (p(t), o.xhrGet(r, function (t) {
                        var n = e.conf.subtitleParser(t);
                        n.forEach(function (t) {
                            var n = {time: t.startTime, subtitle: t, visible: !1};
                            e.subtitles.push(t), e.addCuepoint(n), e.addCuepoint({
                                time: t.endTime,
                                subtitleEnd: t.title,
                                visible: !1
                            }), 0 !== t.startTime || e.video.time || e.trigger("cuepoint", [e, n])
                        })
                    }, function () {
                        return e.trigger("error", {code: 8, url: r}), !1
                    }), e) : void 0
                }
            })
        }, {"../common": 1, "../flowplayer": 18, bean: 20, "class-list": 21}],
        16: [function (e, t, n) {
            "use strict";
            var r = e("../flowplayer"), o = e("extend-object");
            !function () {
                var e = function (e) {
                        var t = /Version\/(\d\.\d)/.exec(e);
                        return t && t.length > 1 ? parseFloat(t[1], 10) : 0
                    }, t = function () {
                        var e = document.createElement("video");
                        return e.loop = !0, e.autoplay = !0, e.preload = !0, e
                    }, n = {}, i = navigator.userAgent.toLowerCase(),
                    a = /(chrome)[ \/]([\w.]+)/.exec(i) || /(safari)[ \/]([\w.]+)/.exec(i) || /(webkit)[ \/]([\w.]+)/.exec(i) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i) || /(msie) ([\w.]+)/.exec(i) || i.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i) || [];
                a[1] && (n[a[1]] = !0, n.version = a[2] || "0");
                var l = t(), s = navigator.userAgent, u = n.msie || /Trident\/7/.test(s),
                    c = /iPad|MeeGo/.test(s) && !/CriOS/.test(s), f = /iPad/.test(s) && /CriOS/.test(s),
                    d = /iP(hone|od)/i.test(s) && !/iPad/.test(s) && !/IEMobile/i.test(s),
                    p = /Android/.test(s) && !/Firefox/.test(s), m = /Android/.test(s) && /Firefox/.test(s),
                    v = /Silk/.test(s), g = /IEMobile/.test(s),
                    h = g ? parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(s)[1], 10) : 0,
                    y = g ? parseFloat(/IEMobile\/(\d+\.\d+)/.exec(s)[1], 10) : 0,
                    b = (c ? e(s) : 0, p ? parseFloat(/Android\ (\d+(\.\d+)?)/.exec(s)[1], 10) : 0), w = o(r.support, {
                        browser: n,
                        subtitles: !!l.addTextTrack,
                        fullscreen: "function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(s) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen || "function" == typeof document.msExitFullscreen,
                        inlineBlock: !(u && n.version < 8),
                        touch: "ontouchstart" in window,
                        dataload: !c && !d && !g,
                        zeropreload: !u && !p,
                        volume: !(c || p || d || v || f || m),
                        cachedVideoTag: !(c || d || f || g),
                        firstframe: !(p || v || g || m),
                        autoplay: !(c || d || f || p || v || g || m),
                        inlineVideo: (!g || h >= 8.1 && y >= 11) && (!p || b >= 3),
                        hlsDuration: !p && (!n.safari || c || d || f),
                        seekable: !c && !f,
                        iphone: d,
                        ios: d || c || f
                    });
                try {
                    var x = navigator.plugins["Shockwave Flash"],
                        E = u ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : x.description;
                    u || x[0].enabledPlugin ? (E = E.split(/\D+/), E.length && !E[0] && (E = E.slice(1)), w.flashVideo = E[0] > 9 || 9 == E[0] && E[3] >= 115) : w.flashVideo = !1
                } catch (k) {
                }
                try {
                    w.video = !!l.canPlayType, w.video && l.canPlayType("video/mp4")
                } catch (T) {
                    w.video = !1
                }
                w.animation = function () {
                    for (var e = ["", "Webkit", "Moz", "O", "ms", "Khtml"], t = document.createElement("p"), n = 0; n < e.length; n++) if ("undefined" != typeof t.style[e[n] + "AnimationName"]) return !0
                }()
            }()
        }, {"../flowplayer": 18, "extend-object": 25}],
        17: [function (e, t, n) {
            "use strict";

            function r(e) {
                return e = parseInt(e, 10), e >= 10 ? e : "0" + e
            }

            function o(e) {
                e = e || 0;
                var t = Math.floor(e / 3600), n = Math.floor(e / 60);
                return e -= 60 * n, t >= 1 ? (n -= 60 * t, t + ":" + r(n) + ":" + r(e)) : r(n) + ":" + r(e)
            }

            var i = e("../flowplayer"), a = e("../common"), l = e("class-list"), s = e("bean"), u = e("./slider");
            i(function (e, t) {
                function n(e) {
                    return a.find(".fp-" + e, t)[0]
                }

                function r(e) {
                    a.css(w, "padding-top", 100 * e + "%"), p.inlineBlock || a.height(a.find("object", t)[0], a.height(t))
                }

                function c(e) {
                    e ? (m.add("is-mouseover"), m.remove("is-mouseout")) : (m.add("is-mouseout"), m.remove("is-mouseover"))
                }

                var f, d = e.conf, p = i.support, m = l(t);
                a.find(".fp-ratio,.fp-ui", t).forEach(a.removeNode), m.add("flowplayer"), t.appendChild(a.createElement("div", {className: "fp-ratio"}));
                var v = a.createElement("div", {className: "fp-ui"}, '         <div class="waiting"><em></em><em></em><em></em></div>         <a class="fullscreen"></a>         <a class="unload"></a>         <p class="speed"></p>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"></div>               <div class="progress"></div>            </div>            <div class="timeline-tooltip fp-tooltip"></div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"></div>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"></em>            <em class="duration">00:00</em>         </div>         <div class="message"><h2></h2><p></p></div>'.replace(/class="/g, 'class="fp-'));
                t.appendChild(v);
                var g = (n("progress"), n("buffer")), h = n("elapsed"), y = n("remaining"), b = n("waiting"),
                    w = n("ratio"), x = n("speed"), E = l(x), k = n("duration"), T = n("controls"),
                    S = n("timeline-tooltip"), N = a.css(w, "padding-top"), C = n("timeline"), j = u(C, e.rtl),
                    O = (n("volume"), n("fullscreen")), P = n("volumeslider"), A = u(P, e.rtl),
                    _ = m.contains("fixed-controls") || m.contains("no-toggle");
                j.disableAnimation(m.contains("is-touch")), e.sliders = e.sliders || {}, e.sliders.timeline = j, e.sliders.volume = A, p.animation || a.html(b, "<p>loading &hellip;</p>"), d.ratio && r(d.ratio);
                try {
                    d.fullscreen || a.removeNode(O)
                } catch (D) {
                    a.removeNode(O)
                }
                e.on("ready", function (e, n, i) {
                    var l = n.video.duration;
                    j.disable(n.disabled || !l), d.adaptiveRatio && !isNaN(i.height / i.width) && r(i.height / i.width, !0), a.html([k, y], o(l)), a.toggleClass(t, "is-long", l >= 3600), A.slide(n.volumeLevel), "flash" === n.engine.engineName ? j.disableAnimation(!0, !0) : j.disableAnimation(!1), a.find(".fp-title", v).forEach(a.removeNode), i.title && a.prepend(v, a.createElement("div", {className: "fp-title"}, i.title))
                }).on("unload", function () {
                    N || d.splash || a.css(w, "paddingTop", ""), j.slide(0)
                }).on("buffer", function (xE, xA, xV) {
                    var t = e.video, n = Math.round(xV) / Math.round(t.duration);
                    if (typeof xV != 'undefined') {
                        !t.seekable && p.seekable && j.max(n), 1 > n ? a.css(g, "width", 100 * n + "%") : a.css(g, "width", "100%")
                    }
                }).on("speed", function (e, t, n) {
                    a.text(x, n + "x"), E.add("fp-hilite"), setTimeout(function () {
                        E.remove("fp-hilite")
                    }, 1e3)
                }).on("buffered", function () {
                    a.css(g, "width", "100%"), j.max(1)
                }).on("progress", function () {
                    var t = e.video.time, n = e.video.duration;
                    j.dragging || j.slide(t / n, e.seeking ? 0 : 250), a.html(h, o(t)), a.html(y, "-" + o(n - t))
                }).on("finish resume seek", function (e) {
                    a.toggleClass(t, "is-finished", "finish" == e.type)
                }).on("stop", function () {
                    a.html(h, o(0)), j.slide(0, 100)
                }).on("finish", function () {
                    a.html(h, o(e.video.duration)), j.slide(1, 100), m.remove("is-seeking")
                }).on("beforeseek", function () {
                }).on("volume", function () {
                    A.slide(e.volumeLevel)
                }).on("disable", function () {
                    var n = e.disabled;
                    j.disable(n), A.disable(n), a.toggleClass(t, "is-disabled", e.disabled)
                }).on("mute", function (e, n, r) {
                    a.toggleClass(t, "is-muted", r)
                }).on("error", function (e, n, r) {
                    if (a.removeClass(t, "is-loading"), a.removeClass(t, "is-seeking"), a.addClass(t, "is-error"), r) {
                        var errorMessage = d.errors[r.code];
                        n.error = !0;
                        var o = a.find(".fp-message", t)[0], i = r.video || n.video;
                        a.find("h2", o)[0].innerHTML = (n.engine && n.engine.engineName || "html5") + ": " + errorMessage, a.find("p", o)[0].innerHTML = r.url || i.url || i.src || d.errorUrls[r.code], n.off("mouseenter click"), m.remove("is-mouseover")
                    }
                }), s.on(t, "mouseenter mouseleave", function (n) {
                    if (!_) {
                        var r, o = "mouseover" == n.type;
                        if (c(o), o) {
                            var i = function () {
                                c(!0), r = new Date
                            };
                            e.on("pause.x volume.x", i), s.on(t, "mousemove.x", i), s.on(t, "touchmove.x", i), f = setInterval(function () {
                                new Date - r > d.mouseoutTimeout && (c(!1), r = new Date)
                            }, 100)
                        } else s.off(t, "mousemove.x"), s.off(t, "touchmove.x"), e.off("pause.x volume.x"), clearInterval(f)
                    }
                }), s.on(t, "mouseleave", function () {
                    (j.dragging || A.dragging) && (m.add("is-mouseover"), m.remove("is-mouseout"))
                }), s.on(t, "click.player", function (t) {
                    if (!e.disabled) {
                        var n = l(t.target);
                        return n.contains("fp-ui") || n.contains("fp-engine") || t.flash ? (t.preventDefault && t.preventDefault(), e.toggle()) : void 0
                    }
                }), s.on(t, "mousemove touchmove touchstart", ".fp-timeline", function (ev) {
                    var xX = ev.pageX || ev.clientX || (ev.changedTouches ? ev.changedTouches[0].clientX : 0),
                        r = xX - a.offset(C).left, i = r / a.width(C), l = i * e.video.duration;
                    0 > i || (a.html(S, '<span class="fp-timeline-time">' + o(l) + '</span>'), a.css(S, "left", Math.max(2, Math.min(a.width(n('player')) - a.width(S) - 2, xX - a.offset(T).left - a.width(S) / 2)) + "px"))
                }), s.on(t, "contextmenu", function (e) {
                    var n = a.offset(a.find(".fp-player", t)[0]), r = window, o = e.clientX - (n.left + r.scrollX),
                        i = e.clientY - (n.top + r.scrollY);
                    if (!m.contains("is-flash-disabled")) {
                        var l = a.find(".fp-context-menu", t)[0];
                        l && (e.preventDefault(), a.css(l, {
                            left: o + "px",
                            top: i + "px",
                            display: "block"
                        }), s.on(t, "click", ".fp-context-menu", function (e) {
                            e.stopPropagation()
                        }), s.on(document, "click.outsidemenu", function (e) {
                            a.css(l, "display", "none"), s.off(document, "click.outsidemenu")
                        }))
                    }
                }), e.on("flashdisabled", function () {
                    m.add("is-flash-disabled"), e.one("ready progress", function () {
                        m.remove("is-flash-disabled"), a.find(".fp-flash-disabled", t).forEach(a.removeNode)
                    }), t.appendChild(a.createElement("div", {className: "fp-flash-disabled"}, "Adobe Flash is disabled for this page, click player area to enable"))
                }), d.poster && a.css(t, "background-image", "url(" + d.poster + ")");
                var M = a.css(t, "background-color"),
                    L = "none" != a.css(t, "background-image") || M && "rgba(0, 0, 0, 0)" != M && "transparent" != M;
                L && !d.splash && (d.poster || (d.poster = !0), e.on("ready stop", function () {
                    m.add("is-poster"), e.poster = !0, e.one("progress", function () {
                        m.remove("is-poster"), e.poster = !1
                    })
                })), "string" == typeof d.splash && a.css(t, "background-image", "url('" + d.splash + "')"), !L && e.forcedSplash && a.css(t, "background-color", "#555"), s.on(t, "click", ".fp-toggle, .fp-play", function () {
                    e.disabled || e.toggle()
                }), s.on(t, "click", ".fp-mute", function () {
                    e.mute()
                }), s.on(t, "click", ".fp-fullscreen", function () {
                    e.fullscreen()
                }), s.on(t, "click", ".fp-unload", function () {
                    e.unload()
                }), s.on(C, "slide", function (t) {
                    e.seeking = !0, e.seek(t * e.video.duration)
                }), s.on(P, "slide", function (t) {
                    e.volume(t)
                });
                var I = n("time");
                s.on(t, "click", ".fp-time", function () {
                    l(I).toggle("is-inverted")
                }), c(_), e.on("shutdown", function () {
                    s.off(C), s.off(P)
                })
            }), t.exports.format = o
        }, {"../common": 1, "../flowplayer": 18, "./slider": 14, bean: 20, "class-list": 21}],
        18: [function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                t && t.embed && (t.embed = o({}, y.defaults.embed, t.embed));
                var r, d, m = e, v = a(m), g = o({}, y.defaults, y.conf, t), h = {}, x = new w;
                v.add("is-loading");
                try {
                    h = p ? window.localStorage : h
                } catch (E) {
                }
                var k = m.currentStyle && "rtl" === m.currentStyle.direction || window.getComputedStyle && null !== window.getComputedStyle(m, null) && "rtl" === window.getComputedStyle(m, null).getPropertyValue("direction");
                k && v.add("is-rtl");
                var T = {
                    conf: g,
                    currentSpeed: 1,
                    volumeLevel: g.muted ? 0 : "undefined" == typeof g.volume ? 1 * h.volume : g.volume,
                    video: {},
                    disabled: !1,
                    finished: !1,
                    loading: !1,
                    muted: "true" == h.muted || g.muted,
                    paused: !1,
                    playing: !1,
                    ready: !1,
                    splash: !1,
                    rtl: k,
                    load: function (e, t) {
                        if (!T.error && !T.loading) {
                            T.video = {}, T.finished = !1, e = e || g.clip, e = o({}, x.resolve(e, g.clip.sources)), (T.playing || T.engine) && (e.autoplay = !0);
                            var n = S(e);
                            if (!n) return T.trigger("error", [T, {code: y.support.flashVideo ? 5 : 10}]);
                            if (!n.engineName) throw new Error("engineName property of factory should be exposed");
                            if (T.engine && n.engineName === T.engine.engineName || (T.ready = !1, T.engine && (T.engine.unload(), T.conf.autoplay = !0), d = T.engine = n(T, m), T.one("ready", function () {
                                d.volume(T.volumeLevel)
                            })), o(e, d.pick(e.sources.filter(function (e) {
                                return e.engine ? e.engine === d.engineName : !0
                            }))), e.src) {
                                var r = T.trigger("load", [T, e, d], !0);
                                r.defaultPrevented ? T.loading = !1 : (d.load(e), i(e) && (t = e), t && T.one("ready", t))
                            }
                            return T
                        }
                    },
                    pause: function (e) {
                        return !T.ready || T.seeking || T.loading || (d.pause(), T.one("pause", e)), T
                    },
                    resume: function () {
                        return T.ready && T.paused && (d.resume(), T.finished && (T.trigger("resume", [T]), T.finished = !1)), T
                    },
                    toggle: function () {
                        return T.ready ? T.paused ? T.resume() : T.pause() : T.load()
                    },
                    seek: function (e, t) {
                        if (T.ready && !T.live) {
                            if ("boolean" == typeof e) {
                                var n = .1 * T.video.duration;
                                e = T.video.time + (e ? n : -n)
                            }
                            e = r = Math.min(Math.max(e, 0), T.video.duration - .1).toFixed(1);
                            var o = T.trigger("beforeseek", [T, e], !0);
                            o.defaultPrevented ? (T.seeking = !1, s.toggleClass(m, "is-seeking", T.seeking)) : (d.seek(e), i(t) && T.one("seek", t))
                        }
                        return T
                    },
                    seekTo: function (e, t) {
                        var n = void 0 === e ? r : .1 * T.video.duration * e;
                        return T.seek(n, t)
                    },
                    mute: function (e, t) {
                        return void 0 === e && (e = !T.muted), t || (h.muted = T.muted = e, h.volume = isNaN(h.volume) ? g.volume : h.volume), T.volume(e ? 0 : h.volume, !0), T.trigger("mute", [T, e]), T
                    },
                    volume: function (e, t) {
                        return e = Math.min(Math.max(e, 0), 1), T.volumeLevel = e, T.trigger("volume", [T, e]), t || (h.volume = e), T.ready && d.volume(e), T
                    },
                    speed: function (e, t) {
                        return T.ready && ("boolean" == typeof e && (e = g.speeds[g.speeds.indexOf(T.currentSpeed) + (e ? 1 : -1)] || T.currentSpeed), d.speed(e), t && m.one("speed", t)), T
                    },
                    stop: function () {
                        return T.ready && (T.pause(), T.seek(0, function () {
                            T.trigger("stop", [T])
                        })), T
                    },
                    unload: function () {
                        return v.contains("is-embedding") || (g.splash ? (T.trigger("unload", [T]), d && (d.unload(), T.engine = d = 0)) : T.stop()), T
                    },
                    shutdown: function () {
                        T.unload(), T.trigger("shutdown", [T]), l.off(m), delete c[m.getAttribute("data-flowplayer-instance-id")], m.removeAttribute("data-flowplayer-instance-id")
                    },
                    disable: function (e) {
                        return void 0 === e && (e = !T.disabled), e != T.disabled && (T.disabled = e, T.trigger("disable", e)), T
                    }
                };
                T.conf = o(T.conf, g), u(T);
                T.time = Math.round(new Date().getTime() / 1000);
                var S = function (e) {
                    var t, n = y.engines;
                    if (g.engine) {
                        var r = n.filter(function (e) {
                            return e.engineName === g.engine
                        })[0];
                        if (r && e.sources.some(function (e) {
                            return e.engine && e.engine !== r.engineName ? !1 : r.canPlay(e.type, T.conf)
                        })) return r
                    }
                    return g.enginePreference && (n = y.engines.filter(function (e) {
                        return g.enginePreference.indexOf(e.engineName) > -1
                    }).sort(function (e, t) {
                        return g.enginePreference.indexOf(e.engineName) - g.enginePreference.indexOf(t.engineName)
                    })), e.sources.some(function (e) {
                        var r = n.filter(function (t) {
                            return e.engine && e.engine !== t.engineName ? !1 : t.canPlay(e.type, T.conf)
                        }).shift();
                        return r && (t = r), !!r
                    }), t
                };
                return m.getAttribute("data-flowplayer-instance-id") || (m.setAttribute("data-flowplayer-instance-id", b++), T.on("boot", function () {
                    (g.splash || v.contains("is-splash") || !y.support.firstframe) && (T.forcedSplash = !g.splash && !v.contains("is-splash"), T.splash = g.autoplay = !0, g.splash || (g.splash = !0), v.add("is-splash")), g.splash && s.find("video", m).forEach(s.removeNode), (g.live || v.contains("is-live")) && (T.live = g.live = !0, v.add("is-live")), f.forEach(function (e) {
                        e(T, m)
                    }), c.push(T), g.splash ? T.unload() : T.load(), g.disabled && T.disable(), T.one("ready", n)
                }).on("load", function (e, t, n) {
                    g.splash && s.find(".flowplayer.is-ready,.flowplayer.is-loading").forEach(function (e) {
                        var t = e.getAttribute("data-flowplayer-instance-id");
                        if (t !== m.getAttribute("data-flowplayer-instance-id")) {
                            var n = c[Number(t)];
                            n && n.conf.splash && n.unload()
                        }
                    }), v.add("is-loading"), t.loading = !0, "undefined" != typeof n.live && (s.toggleClass(m, "is-live", n.live), t.live = n.live)
                }).on("ready", function (e, t, n) {
                    n.time = 0, t.video = n, v.remove("is-loading"), t.loading = !1, t.muted ? t.mute(!0, !0) : t.volume(t.volumeLevel);
                    var r = t.conf.hlsFix && /mpegurl/i.exec(n.type);
                    s.toggleClass(m, "hls-fix", !!r)
                }).on("unload", function (e) {
                    v.remove("is-loading"), T.loading = !1
                }).on("ready unload", function (e) {
                    var t = "ready" == e.type;
                    s.toggleClass(m, "is-splash", !t), s.toggleClass(m, "is-ready", t), T.ready = t, T.splash = !t
                }).on("progress", function (e, t, n) {
                    t.video.time = n
                }).on("speed", function (e, t, n) {
                    t.currentSpeed = n
                }).on("volume", function (e, t, n) {
                    t.volumeLevel = Math.round(100 * n) / 100, t.muted ? n && !y.support.ios && t.mute(!1) : h.volume = n
                }).on("beforeseek seek", function (e) {
                    T.seeking = "beforeseek" == e.type, s.toggleClass(m, "is-seeking", T.seeking)
                }).on("ready pause resume unload finish stop", function (e, t, n) {
                    T.paused = /pause|finish|unload|stop/.test(e.type), T.paused = T.paused || "ready" === e.type && !g.autoplay && !T.playing, T.playing = !T.paused, s.toggleClass(m, "is-paused", T.paused), s.toggleClass(m, "is-playing", T.playing), T.load.ed || T.pause()
                }).on("finish", function (e) {
                    T.finished = !0
                }).on("error", function () {
                })), T.trigger("boot", [T, m]), T
            }

            var o = e("extend-object"), i = e("is-function"), a = e("class-list"), l = e("bean"), s = e("./common"),
                u = e("./ext/events"), c = [], f = [], d = (window.navigator.userAgent, window.onbeforeunload);
            window.onbeforeunload = function (e) {
                return c.forEach(function (e) {
                    e.conf.splash ? e.unload() : e.bind("error", function () {
                        s.find(".flowplayer.is-error .fp-message").forEach(s.removeNode)
                    })
                }), d ? d(e) : void 0
            };
            var p = !1;
            try {
                "object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", p = !0)
            } catch (m) {
            }
            var v = /Safari/.exec(navigator.userAgent) && !/Chrome/.exec(navigator.userAgent),
                g = /(\d+\.\d+) Safari/.exec(navigator.userAgent), h = g ? Number(g[1]) : 100,
                y = t.exports = function (e, t, n) {
                    if (i(e)) return f.push(e);
                    if ("number" == typeof e || "undefined" == typeof e) return c[e || 0];
                    if (e.nodeType) {
                        if (null !== e.getAttribute("data-flowplayer-instance-id")) return c[e.getAttribute("data-flowplayer-instance-id")];
                        if (!t) return;
                        return r(e, t, n)
                    }
                    if (e.jquery) return y(e[0], t, n);
                    if ("string" == typeof e) {
                        var o = s.find(e)[0];
                        return o && y(o, t, n)
                    }
                };
            o(y, {
                version: "6.0.5",
                engines: [],
                conf: {},
                set: function (e, t) {
                    "string" == typeof e ? y.conf[e] = t : o(y.conf, e)
                },
                support: {},
                defaults: {
                    debug: p ? !!localStorage.flowplayerDebug : !1,
                    disabled: !1,
                    fullscreen: window == window.top,
                    keyboard: !0,
                    ratio: 9 / 16,
                    adaptiveRatio: !1,
                    rtmp: 0,
                    proxy: "best",
                    splash: !1,
                    live: !1,
                    swf: "//releases.flowplayer.org/6.0.5/commercial/flowplayer.swf",
                    swfHls: "//releases.flowplayer.org/6.0.5/commercial/flowplayerhls.swf",
                    speeds: [.25, .5, 1, 1.5, 2],
                    tooltip: !0,
                    mouseoutTimeout: 5e3,
                    volume: p ? "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1 : 1,
                    errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],
                    errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],
                    playlist: [],
                    hlsFix: v && 8 > h
                },
                bean: l,
                common: s,
                extend: o
            });
            var b = 0, w = e("./ext/resolve");
            if ("undefined" != typeof window.jQuery) {
                var x = window.jQuery;
                x(function () {
                    "function" == typeof x.fn.flowplayer && x('.flowplayer:has(video,script[type="application/json"])').flowplayer()
                });
                var E = function (e) {
                    if (!e.length) return {};
                    var t = e.data() || {}, n = {};
                    return x.each(["autoplay", "loop", "preload", "poster"], function (r, o) {
                        var i = e.attr(o);
                        void 0 !== i && -1 !== ["autoplay", "poster"].indexOf(o) ? n[o] = i ? i : !0 : void 0 !== i && (t[o] = i ? i : !0)
                    }), t.subtitles = e.find("track").map(function () {
                        var e = x(this);
                        return {
                            src: e.attr("src"),
                            kind: e.attr("kind"),
                            label: e.attr("label"),
                            srclang: e.attr("srclang"),
                            "default": e.prop("default")
                        }
                    }).get(), t.sources = (new w).sourcesFromVideoTag(e, x), o(n, {clip: t})
                };
                x.fn.flowplayer = function (e, t) {
                    return this.each(function () {
                        "string" == typeof e && (e = {swf: e}), i(e) && (t = e, e = {});
                        var n = x(this), o = n.find('script[type="application/json"]'),
                            a = o.length ? JSON.parse(o.text()) : E(n.find("video")),
                            l = x.extend({}, e || {}, a, n.data()), s = r(this, l, t);
                        u.EVENTS.forEach(function (e) {
                            s.on(e + ".jquery", function (e) {
                                n.trigger.call(n, e.type, e.detail && e.detail.args)
                            })
                        }), n.data("flowplayer", s)
                    })
                }
            }
        }, {
            "./common": 1,
            "./ext/events": 8,
            "./ext/resolve": 13,
            bean: 20,
            "class-list": 21,
            "extend-object": 25,
            "is-function": 26
        }],
        19: [function (e, t, n) {
            e("es5-shim");
            var r = t.exports = e("./flowplayer");
            e("./ext/support"), e("./engine/embed"), e("./engine/html5"), e("./engine/flash"), e("./ext/ui"), e("./ext/keyboard"), e("./ext/playlist"), e("./ext/cuepoint"), e("./ext/subtitle"), e("./ext/analytics"), e("./ext/embed"), e("./ext/fullscreen"), e("./ext/mobile"), r(function (e, t) {
                function n(e) {
                    var t = document.createElement("a");
                    return t.href = e, u.hostname(t.hostname)
                }

                function o(e) {
                    var t = "ab.ca,ac.ac,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.sg,ac.th,ac.uk,ad.jp,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.de,co.gl,co.hk,co.id,co.il,co.in,co.jp,co.kr,co.mg,co.ms,co.nz,co.th,co.uk,co.ve,co.vi,co.za,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.co,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.na,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,cp.tz,cq.cn,de.com,de.org,ecn.br,ed.jp,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pl,edu.pt,edu.qa,edu.sg,edu.tr,edu.tw,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gov.uk,gr.jp,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,in.ua,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,iwi.nz,jl.cn,jor.br,js.cn,jus.br,k12.il,k12.tr,kr.com,lel.br,lg.jp,ln.cn,ltd.uk,maori.nz,mb.ca,me.uk,med.br,mi.th,mil.br,mil.uk,mo.cn,mod.uk,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nhs.uk,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,nt.ro,ntr.br,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,or.jp,or.kr,or.th,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,pe.ca,plc.uk,police.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.uk,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tm.ro,tmp.br,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",");
                    e = e.toLowerCase();
                    var n = e.split("."), r = n.length;
                    if (2 > r || /^\d+$/.test(n[r - 1])) return e;
                    var o = n.slice(-2).join(".");
                    return r >= 3 && t.indexOf(o) >= 0 ? n.slice(-3).join(".") : o
                }

                function i(e, t) {
                    t = o(t);
                    for (var n = 0, r = t.length - 1; r >= 0; r--) n += 42403449800 * t.charCodeAt(r);
                    for (n = ("" + n).substring(0, 7), r = 0; r < e.length; r++) if (n === e[r].substring(1, 8)) return 1
                }

                var a = function (e, t) {
                        var n = e.className.split(" ");
                        -1 === n.indexOf(t) && (e.className += " " + t)
                    }, l = function (e) {
                        return "none" !== window.getComputedStyle(e).display
                    }, s = e.conf, u = r.common, c = u.createElement,
                    f = s.swf.indexOf("flowplayer.org") && s.e && t.getAttribute("data-origin"),
                    d = f ? n(f) : u.hostname(), p = (document, s.key);
                "file:" == location.protocol && (d = "localhost"), e.load.ed = 1, s.hostname = d, s.origin = f || location.href, f && a(t, "is-embedded"), "string" == typeof p && (p = p.split(/,\s*/));
                var m = function (e, n) {
                    var r = c("a", {href: n, className: "fp-brand"});
                    r.innerHTML = e, u.find(".fp-controls", t)[0].appendChild(r)
                };
                if (p && "function" == typeof i && i(p, d)) {
                    if (s.logo) {
                        var v = u.find(".fp-player", t)[0], g = c("a", {className: "fp-logo"});
                        f && (g.href = f), s.embed && s.embed.popup && (g.target = "_blank");
                        var h = c("img", {src: s.logo});
                        g.appendChild(h), (v || t).appendChild(g)
                    }
                    s.brand && f || s.brand && s.brand.showOnOrigin ? m(s.brand.text || s.brand, f || location.href) : u.addClass(t, "no-brand")
                } else {
                    m("flowplayer", "http://flowplayer.org");
                    var g = c("a", {href: "http://flowplayer.org"});
                    t.appendChild(g);
                    var y = c("div", {className: "fp-context-menu"}, '<ul><li class="copyright">&copy; 2015</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul>'),
                        b = window.location.href.indexOf("localhost"), v = u.find(".fp-player", t)[0];
                    7 !== b && (v || t).appendChild(y), e.on("pause resume finish unload ready", function (e, n) {
                        u.removeClass(t, "no-brand");
                        var r = -1;
                        if (n.video.src) for (var o = [["org", "flowplayer", "drive"], ["org", "flowplayer", "my"], ["org", "flowplayer", "cdn"]], i = 0; i < o.length && (r = n.video.src.indexOf("://" + o[i].reverse().join(".")), -1 === r); i++) ;
                        if ((4 === r || 5 === r) && u.addClass(t, "no-brand"), /pause|resume/.test(e.type) && "flash" != n.engine.engineName && 4 != r && 5 != r) {
                            var a = {
                                display: "block",
                                position: "absolute",
                                left: "16px",
                                bottom: "46px",
                                zIndex: 99999,
                                width: "100px",
                                height: "20px",
                                backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")"
                            };
                            for (var s in a) a.hasOwnProperty(s) && (g.style[s] = a[s]);
                            n.load.ed = l(g) && (7 === b || y.parentNode == t || y.parentNode == v) && !u.hasClass(t, "no-brand"), n.load.ed || n.pause()
                        } else g.style.display = "none"
                    })
                }
            })
        }, {
            "./engine/embed": 2,
            "./engine/flash": 3,
            "./engine/html5": 4,
            "./ext/analytics": 5,
            "./ext/cuepoint": 6,
            "./ext/embed": 7,
            "./ext/fullscreen": 9,
            "./ext/keyboard": 10,
            "./ext/mobile": 11,
            "./ext/playlist": 12,
            "./ext/subtitle": 15,
            "./ext/support": 16,
            "./ext/ui": 17,
            "./flowplayer": 18,
            "es5-shim": 24
        }],
        20: [function (t, n, r) {
            !function (t, r, o) {
                "undefined" != typeof n && n.exports ? n.exports = o() : "function" == typeof e && e.amd ? e(o) : r[t] = o()
            }("bean", this, function (e, t) {
                e = e || "bean", t = t || this;
                var n, r = window, o = t[e], i = /[^\.]*(?=\..*)\.|.*/, a = /\..*/, l = "addEventListener",
                    s = "removeEventListener", u = document || {}, c = u.documentElement || {}, f = c[l],
                    d = f ? l : "attachEvent", p = {}, m = Array.prototype.slice, v = function (e, t) {
                        return e.split(t || " ")
                    }, g = function (e) {
                        return "string" == typeof e
                    }, h = function (e) {
                        return "function" == typeof e
                    },
                    y = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",
                    b = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",
                    w = function (e, t, n) {
                        for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                        return e
                    }({}, v(y + (f ? b : ""))), x = function () {
                        var e = "compareDocumentPosition" in c ? function (e, t) {
                            return t.compareDocumentPosition && 16 === (16 & t.compareDocumentPosition(e))
                        } : "contains" in c ? function (e, t) {
                            return t = 9 === t.nodeType || t === window ? c : t, t !== e && t.contains(e)
                        } : function (e, t) {
                            for (; e = e.parentNode;) if (e === t) return 1;
                            return 0
                        }, t = function (t) {
                            var n = t.relatedTarget;
                            return n ? n !== this && "xul" !== n.prefix && !/document/.test(this.toString()) && !e(n, this) : null == n
                        };
                        return {
                            mouseenter: {base: "mouseover", condition: t},
                            mouseleave: {base: "mouseout", condition: t},
                            mousewheel: {base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"}
                        }
                    }(), E = function () {
                        var e = v("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
                            t = e.concat(v("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                            n = t.concat(v("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
                            o = e.concat(v("char charCode key keyCode keyIdentifier keyLocation location")),
                            i = e.concat(v("data")), a = e.concat(v("touches targetTouches changedTouches scale rotation")),
                            l = e.concat(v("data origin source")), s = e.concat(v("state")), f = /over|out/, d = [{
                                reg: /key/i, fix: function (e, t) {
                                    return t.keyCode = e.keyCode || e.which, o
                                }
                            }, {
                                reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i, fix: function (e, n, r) {
                                    return n.rightClick = 3 === e.which || 2 === e.button, n.pos = {
                                        x: 0,
                                        y: 0
                                    }, e.pageX || e.pageY ? (n.clientX = e.pageX, n.clientY = e.pageY) : (e.clientX || e.clientY) && (n.clientX = e.clientX + u.body.scrollLeft + c.scrollLeft, n.clientY = e.clientY + u.body.scrollTop + c.scrollTop), f.test(r) && (n.relatedTarget = e.relatedTarget || e[("mouseover" == r ? "from" : "to") + "Element"]), t
                                }
                            }, {
                                reg: /mouse.*(wheel|scroll)/i, fix: function () {
                                    return n
                                }
                            }, {
                                reg: /^text/i, fix: function () {
                                    return i
                                }
                            }, {
                                reg: /^touch|^gesture/i, fix: function () {
                                    return a
                                }
                            }, {
                                reg: /^message$/i, fix: function () {
                                    return l
                                }
                            }, {
                                reg: /^popstate$/i, fix: function () {
                                    return s
                                }
                            }, {
                                reg: /.*/, fix: function () {
                                    return e
                                }
                            }], p = {}, m = function (e, t, n) {
                                if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || r).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                                    var o, i, a, l, s, u = e.type, c = e.target || e.srcElement;
                                    if (this.target = c && 3 === c.nodeType ? c.parentNode : c, n) {
                                        if (s = p[u], !s) for (o = 0, i = d.length; i > o; o++) if (d[o].reg.test(u)) {
                                            p[u] = s = d[o].fix;
                                            break
                                        }
                                        for (l = s(e, this, u), o = l.length; o--;) !((a = l[o]) in this) && a in e && (this[a] = e[a])
                                    }
                                }
                            };
                        return m.prototype.preventDefault = function () {
                            this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
                        }, m.prototype.stopPropagation = function () {
                            this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
                        }, m.prototype.stop = function () {
                            this.preventDefault(), this.stopPropagation(), this.stopped = !0
                        }, m.prototype.stopImmediatePropagation = function () {
                            this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function () {
                                return !0
                            }
                        }, m.prototype.isImmediatePropagationStopped = function () {
                            return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                        }, m.prototype.clone = function (e) {
                            var t = new m(this, this.element, this.isNative);
                            return t.currentTarget = e, t
                        }, m
                    }(), k = function (e, t) {
                        return f || t || e !== u && e !== r ? e : c
                    }, T = function () {
                        var e = function (e, t, n, r) {
                            var o = function (n, o) {
                                return t.apply(e, r ? m.call(o, n ? 0 : 1).concat(r) : o)
                            }, i = function (n, r) {
                                return t.__beanDel ? t.__beanDel.ft(n.target, e) : r
                            }, a = n ? function (e) {
                                var t = i(e, this);
                                return n.apply(t, arguments) ? (e && (e.currentTarget = t), o(e, arguments)) : void 0
                            } : function (e) {
                                return t.__beanDel && (e = e.clone(i(e))), o(e, arguments)
                            };
                            return a.__beanDel = t.__beanDel, a
                        }, t = function (t, n, r, o, i, a, l) {
                            var s, u = x[n];
                            "unload" == n && (r = O(P, t, n, r, o)), u && (u.condition && (r = e(t, r, u.condition, a)), n = u.base || n), this.isNative = s = w[n] && !!t[d], this.customType = !f && !s && n, this.element = t, this.type = n, this.original = o, this.namespaces = i, this.eventType = f || s ? n : "propertychange", this.target = k(t, s), this[d] = !!this.target[d], this.root = l, this.handler = e(t, r, null, a)
                        };
                        return t.prototype.inNamespaces = function (e) {
                            var t, n, r = 0;
                            if (!e) return !0;
                            if (!this.namespaces) return !1;
                            for (t = e.length; t--;) for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && r++;
                            return e.length === r
                        }, t.prototype.matches = function (e, t, n) {
                            return !(this.element !== e || t && this.original !== t || n && this.handler !== n)
                        }, t
                    }(), S = function () {
                        var e = {}, t = function (n, r, o, i, a, l) {
                            var s = a ? "r" : "$";
                            if (r && "*" != r) {
                                var u, c = 0, f = e[s + r], d = "*" == n;
                                if (!f) return;
                                for (u = f.length; u > c; c++) if ((d || f[c].matches(n, o, i)) && !l(f[c], f, c, r)) return
                            } else for (var p in e) p.charAt(0) == s && t(n, p.substr(1), o, i, a, l)
                        }, n = function (t, n, r, o) {
                            var i, a = e[(o ? "r" : "$") + n];
                            if (a) for (i = a.length; i--;) if (!a[i].root && a[i].matches(t, r, null)) return !0;
                            return !1
                        }, r = function (e, n, r, o) {
                            var i = [];
                            return t(e, n, r, null, o, function (e) {
                                return i.push(e)
                            }), i
                        }, o = function (t) {
                            var n = !t.root && !this.has(t.element, t.type, null, !1), r = (t.root ? "r" : "$") + t.type;
                            return (e[r] || (e[r] = [])).push(t), n
                        }, i = function (n) {
                            t(n.element, n.type, null, n.handler, n.root, function (t, n, r) {
                                return n.splice(r, 1), t.removed = !0, 0 === n.length && delete e[(t.root ? "r" : "$") + t.type], !1
                            })
                        }, a = function () {
                            var t, n = [];
                            for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                            return n
                        };
                        return {has: n, get: r, put: o, del: i, entries: a}
                    }(), N = function (e) {
                        n = arguments.length ? e : u.querySelectorAll ? function (e, t) {
                            return t.querySelectorAll(e)
                        } : function () {
                            throw new Error("Bean: No selector engine installed")
                        }
                    }, C = function (e, t) {
                        if (f || !t || !e || e.propertyName == "_on" + t) {
                            var n = S.get(this, t || e.type, null, !1), r = n.length, o = 0;
                            for (e = new E(e, this, !0), t && (e.type = t); r > o && !e.isImmediatePropagationStopped(); o++) n[o].removed || n[o].handler.call(this, e)
                        }
                    }, j = f ? function (e, t, n) {
                        e[n ? l : s](t, C, !1)
                    } : function (e, t, n, r) {
                        var o;
                        n ? (S.put(o = new T(e, r || t, function (t) {
                            C.call(e, t, r)
                        }, C, null, null, !0)), r && null == e["_on" + r] && (e["_on" + r] = 0), o.target.attachEvent("on" + o.eventType, o.handler)) : (o = S.get(e, r || t, C, !0)[0], o && (o.target.detachEvent("on" + o.eventType, o.handler), S.del(o)))
                    }, O = function (e, t, n, r, o) {
                        return function () {
                            r.apply(this, arguments), e(t, n, o)
                        }
                    }, P = function (e, t, n, r) {
                        var o, i, l = t && t.replace(a, ""), s = S.get(e, l, null, !1), u = {};
                        for (o = 0, i = s.length; i > o; o++) n && s[o].original !== n || !s[o].inNamespaces(r) || (S.del(s[o]), !u[s[o].eventType] && s[o][d] && (u[s[o].eventType] = {
                            t: s[o].eventType,
                            c: s[o].type
                        }));
                        for (o in u) S.has(e, u[o].t, null, !1) || j(e, u[o].t, !1, u[o].c)
                    }, A = function (e, t) {
                        var r = function (t, r) {
                            for (var o, i = g(e) ? n(e, r) : e; t && t !== r; t = t.parentNode) for (o = i.length; o--;) if (i[o] === t) return t
                        }, o = function (e) {
                            var n = r(e.target, this);
                            n && t.apply(n, arguments)
                        };
                        return o.__beanDel = {ft: r, selector: e}, o
                    }, _ = f ? function (e, t, n) {
                        var o = u.createEvent(e ? "HTMLEvents" : "UIEvents");
                        o[e ? "initEvent" : "initUIEvent"](t, !0, !0, r, 1), n.dispatchEvent(o)
                    } : function (e, t, n) {
                        n = k(n, e), e ? n.fireEvent("on" + t, u.createEventObject()) : n["_on" + t]++
                    }, D = function (e, t, n) {
                        var r, o, l, s, u = g(t);
                        if (u && t.indexOf(" ") > 0) {
                            for (t = v(t), s = t.length; s--;) D(e, t[s], n);
                            return e
                        }
                        if (o = u && t.replace(a, ""), o && x[o] && (o = x[o].base), !t || u) (l = u && t.replace(i, "")) && (l = v(l, ".")), P(e, o, n, l); else if (h(t)) P(e, null, t); else for (r in t) t.hasOwnProperty(r) && D(e, r, t[r]);
                        return e
                    }, M = function (e, t, r, o) {
                        var l, s, u, c, f, g, y;
                        {
                            if (void 0 !== r || "object" != typeof t) {
                                for (h(r) ? (f = m.call(arguments, 3), o = l = r) : (l = o, f = m.call(arguments, 4), o = A(r, l, n)), u = v(t), this === p && (o = O(D, e, t, o, l)), c = u.length; c--;) y = S.put(g = new T(e, u[c].replace(a, ""), o, l, v(u[c].replace(i, ""), "."), f, !1)), g[d] && y && j(e, g.eventType, !0, g.customType);
                                return e
                            }
                            for (s in t) t.hasOwnProperty(s) && M.call(this, e, s, t[s])
                        }
                    }, L = function (e, t, n, r) {
                        return M.apply(null, g(n) ? [e, n, t, r].concat(arguments.length > 3 ? m.call(arguments, 5) : []) : m.call(arguments))
                    }, I = function () {
                        return M.apply(p, arguments)
                    }, F = function (e, t, n) {
                        var r, o, l, s, u, c = v(t);
                        for (r = c.length; r--;) if (t = c[r].replace(a, ""), (s = c[r].replace(i, "")) && (s = v(s, ".")), s || n || !e[d]) for (u = S.get(e, t, null, !1), n = [!1].concat(n), o = 0, l = u.length; l > o; o++) u[o].inNamespaces(s) && u[o].handler.apply(e, n); else _(w[t], t, e);
                        return e
                    }, z = function (e, t, n) {
                        for (var r, o, i = S.get(t, n, null, !1), a = i.length, l = 0; a > l; l++) i[l].original && (r = [e, i[l].type], (o = i[l].handler.__beanDel) && r.push(o.selector), r.push(i[l].original), M.apply(null, r));
                        return e
                    }, R = {
                        on: M,
                        add: L,
                        one: I,
                        off: D,
                        remove: D,
                        clone: z,
                        fire: F,
                        Event: E,
                        setSelectorEngine: N,
                        noConflict: function () {
                            return t[e] = o, this
                        }
                    };
                if (r.attachEvent) {
                    var q = function () {
                        var e, t = S.entries();
                        for (e in t) t[e].type && "unload" !== t[e].type && D(t[e].element, t[e].type);
                        r.detachEvent("onunload", q), r.CollectGarbage && r.CollectGarbage()
                    };
                    r.attachEvent("onunload", q)
                }
                return N(), R
            })
        }, {}],
        21: [function (e, t, n) {
            function r(e) {
                function t(e) {
                    var t = c();
                    a(t, e) > -1 || (t.push(e), f(t))
                }

                function n(e) {
                    var t = c(), n = a(t, e);
                    -1 !== n && (t.splice(n, 1), f(t))
                }

                function r(e) {
                    return a(c(), e) > -1
                }

                function l(e) {
                    return r(e) ? (n(e), !1) : (t(e), !0)
                }

                function s() {
                    return e.className
                }

                function u(e) {
                    var t = c();
                    return t[e] || null
                }

                function c() {
                    var t = e.className;
                    return o(t.split(" "), i)
                }

                function f(t) {
                    var n = t.length;
                    e.className = t.join(" "), p.length = n;
                    for (var r = 0; r < t.length; r++) p[r] = t[r];
                    delete t[n]
                }

                var d = e.classList;
                if (d) return d;
                var p = {add: t, remove: n, contains: r, toggle: l, toString: s, length: 0, item: u};
                return p
            }

            function o(e, t) {
                for (var n = [], r = 0; r < e.length; r++) t(e[r]) && n.push(e[r]);
                return n
            }

            function i(e) {
                return !!e
            }

            var a = e("indexof");
            t.exports = r
        }, {indexof: 22}],
        22: [function (e, t, n) {
            var r = [].indexOf;
            t.exports = function (e, t) {
                if (r) return e.indexOf(t);
                for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
                return -1
            }
        }, {}],
        23: [function (e, t, n) {
            function r(e, t, n, r) {
                return n = window.getComputedStyle, r = n ? n(e) : e.currentStyle, r ? r[t.replace(/-(\w)/gi, function (e, t) {
                    return t.toUpperCase()
                })] : void 0
            }

            t.exports = r
        }, {}],
        24: [function (t, n, r) {
            !function (t, o) {
                "use strict";
                "function" == typeof e && e.amd ? e(o) : "object" == typeof r ? n.exports = o() : t.returnExports = o()
            }(this, function () {
                var e, t = Array.prototype, n = Object.prototype, r = Function.prototype, o = String.prototype,
                    i = Number.prototype, a = t.slice, l = t.splice, s = t.push, u = t.unshift, c = t.concat,
                    f = r.call, d = n.toString, p = Array.isArray || function (e) {
                        return "[object Array]" === d.call(e)
                    }, m = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                    v = Function.prototype.toString, g = function (e) {
                        try {
                            return v.call(e), !0
                        } catch (t) {
                            return !1
                        }
                    }, h = "[object Function]", y = "[object GeneratorFunction]";
                e = function (e) {
                    if ("function" != typeof e) return !1;
                    if (m) return g(e);
                    var t = d.call(e);
                    return t === h || t === y
                };
                var b, w = RegExp.prototype.exec, x = function (e) {
                    try {
                        return w.call(e), !0
                    } catch (t) {
                        return !1
                    }
                }, E = "[object RegExp]";
                b = function (e) {
                    return "object" != typeof e ? !1 : m ? x(e) : d.call(e) === E
                };
                var k, T = String.prototype.valueOf, S = function (e) {
                    try {
                        return T.call(e), !0
                    } catch (t) {
                        return !1
                    }
                }, N = "[object String]";
                k = function (e) {
                    return "string" == typeof e ? !0 : "object" != typeof e ? !1 : m ? S(e) : d.call(e) === N
                };
                var C = function (t) {
                    var n = d.call(t), r = "[object Arguments]" === n;
                    return r || (r = !p(t) && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && e(t.callee)), r
                }, j = function (e) {
                    var t, n = Object.defineProperty && function () {
                        try {
                            var e = {};
                            Object.defineProperty(e, "x", {enumerable: !1, value: e});
                            for (var t in e) return !1;
                            return e.x === e
                        } catch (n) {
                            return !1
                        }
                    }();
                    return t = n ? function (e, t, n, r) {
                        !r && t in e || Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: n
                        })
                    } : function (e, t, n, r) {
                        !r && t in e || (e[t] = n)
                    }, function (n, r, o) {
                        for (var i in r) e.call(r, i) && t(n, i, r[i], o)
                    }
                }(n.hasOwnProperty), O = function (e) {
                    var t = typeof e;
                    return null === e || "object" !== t && "function" !== t
                }, P = {
                    ToInteger: function (e) {
                        var t = +e;
                        return t !== t ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                    }, ToPrimitive: function (t) {
                        var n, r, o;
                        if (O(t)) return t;
                        if (r = t.valueOf, e(r) && (n = r.call(t), O(n))) return n;
                        if (o = t.toString, e(o) && (n = o.call(t), O(n))) return n;
                        throw new TypeError
                    }, ToObject: function (e) {
                        if (null == e) throw new TypeError("can't convert " + e + " to object");
                        return Object(e)
                    }, ToUint32: function (e) {
                        return e >>> 0
                    }
                }, A = function () {
                };
                j(r, {
                    bind: function (t) {
                        var n = this;
                        if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                        for (var r, o = a.call(arguments, 1), i = function () {
                            if (this instanceof r) {
                                var e = n.apply(this, c.call(o, a.call(arguments)));
                                return Object(e) === e ? e : this
                            }
                            return n.apply(t, c.call(o, a.call(arguments)))
                        }, l = Math.max(0, n.length - o.length), s = [], u = 0; l > u; u++) s.push("$" + u);
                        return r = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this, arguments); }")(i), n.prototype && (A.prototype = n.prototype, r.prototype = new A, A.prototype = null), r
                    }
                });
                var _ = f.bind(n.hasOwnProperty), D = function () {
                    var e = [1, 2], t = e.splice();
                    return 2 === e.length && p(t) && 0 === t.length
                }();
                j(t, {
                    splice: function (e, t) {
                        return 0 === arguments.length ? [] : l.apply(this, arguments)
                    }
                }, !D);
                var M = function () {
                    var e = {};
                    return t.splice.call(e, 0, 0, 1), 1 === e.length
                }();
                j(t, {
                    splice: function (e, t) {
                        if (0 === arguments.length) return [];
                        var n = arguments;
                        return this.length = Math.max(P.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = a.call(arguments), n.length < 2 ? n.push(this.length - e) : n[1] = P.ToInteger(t)), l.apply(this, n)
                    }
                }, !M);
                var L = 1 !== [].unshift(0);
                j(t, {
                    unshift: function () {
                        return u.apply(this, arguments), this.length
                    }
                }, L), j(Array, {isArray: p});
                var I = Object("a"), F = "a" !== I[0] || !(0 in I), z = function (e) {
                    var t = !0, n = !0;
                    return e && (e.call("foo", function (e, n, r) {
                        "object" != typeof r && (t = !1)
                    }), e.call([1], function () {
                        "use strict";
                        n = "string" == typeof this
                    }, "x")), !!e && t && n
                };
                j(t, {
                    forEach: function (t) {
                        var n, r = P.ToObject(this), o = F && k(this) ? this.split("") : r, i = -1, a = o.length >>> 0;
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                        for (; ++i < a;) i in o && ("undefined" != typeof n ? t.call(n, o[i], i, r) : t(o[i], i, r))
                    }
                }, !z(t.forEach)), j(t, {
                    map: function (t) {
                        var n, r = P.ToObject(this), o = F && k(this) ? this.split("") : r, i = o.length >>> 0,
                            a = Array(i);
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                        for (var l = 0; i > l; l++) l in o && ("undefined" != typeof n ? a[l] = t.call(n, o[l], l, r) : a[l] = t(o[l], l, r));
                        return a
                    }
                }, !z(t.map)), j(t, {
                    filter: function (t) {
                        var n, r, o = P.ToObject(this), i = F && k(this) ? this.split("") : o, a = i.length >>> 0,
                            l = [];
                        if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                        for (var s = 0; a > s; s++) s in i && (n = i[s], ("undefined" == typeof r ? t(n, s, o) : t.call(r, n, s, o)) && l.push(n));
                        return l
                    }
                }, !z(t.filter)), j(t, {
                    every: function (t) {
                        var n, r = P.ToObject(this), o = F && k(this) ? this.split("") : r, i = o.length >>> 0;
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                        for (var a = 0; i > a; a++) if (a in o && !("undefined" == typeof n ? t(o[a], a, r) : t.call(n, o[a], a, r))) return !1;
                        return !0
                    }
                }, !z(t.every)), j(t, {
                    some: function (t) {
                        var n, r = P.ToObject(this), o = F && k(this) ? this.split("") : r, i = o.length >>> 0;
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                        for (var a = 0; i > a; a++) if (a in o && ("undefined" == typeof n ? t(o[a], a, r) : t.call(n, o[a], a, r))) return !0;
                        return !1
                    }
                }, !z(t.some));
                var R = !1;
                t.reduce && (R = "object" == typeof t.reduce.call("es5", function (e, t, n, r) {
                    return r
                })), j(t, {
                    reduce: function (t) {
                        var n = P.ToObject(this), r = F && k(this) ? this.split("") : n, o = r.length >>> 0;
                        if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                        if (0 === o && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                        var i, a = 0;
                        if (arguments.length >= 2) i = arguments[1]; else for (; ;) {
                            if (a in r) {
                                i = r[a++];
                                break
                            }
                            if (++a >= o) throw new TypeError("reduce of empty array with no initial value")
                        }
                        for (; o > a; a++) a in r && (i = t(i, r[a], a, n));
                        return i
                    }
                }, !R);
                var q = !1;
                t.reduceRight && (q = "object" == typeof t.reduceRight.call("es5", function (e, t, n, r) {
                    return r
                })), j(t, {
                    reduceRight: function (t) {
                        var n = P.ToObject(this), r = F && k(this) ? this.split("") : n, o = r.length >>> 0;
                        if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                        if (0 === o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                        var i, a = o - 1;
                        if (arguments.length >= 2) i = arguments[1]; else for (; ;) {
                            if (a in r) {
                                i = r[a--];
                                break
                            }
                            if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
                        }
                        if (0 > a) return i;
                        do a in r && (i = t(i, r[a], a, n)); while (a--);
                        return i
                    }
                }, !q);
                var V = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
                j(t, {
                    indexOf: function (e) {
                        var t = F && k(this) ? this.split("") : P.ToObject(this), n = t.length >>> 0;
                        if (0 === n) return -1;
                        var r = 0;
                        for (arguments.length > 1 && (r = P.ToInteger(arguments[1])), r = r >= 0 ? r : Math.max(0, n + r); n > r; r++) if (r in t && t[r] === e) return r;
                        return -1
                    }
                }, V);
                var H = Array.prototype.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
                j(t, {
                    lastIndexOf: function (e) {
                        var t = F && k(this) ? this.split("") : P.ToObject(this), n = t.length >>> 0;
                        if (0 === n) return -1;
                        var r = n - 1;
                        for (arguments.length > 1 && (r = Math.min(r, P.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in t && e === t[r]) return r;
                        return -1
                    }
                }, H);
                var U = !{toString: null}.propertyIsEnumerable("toString"), $ = function () {
                    }.propertyIsEnumerable("prototype"), X = !_("x", "0"),
                    Y = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    B = Y.length;
                j(Object, {
                    keys: function (t) {
                        var n = e(t), r = C(t), o = null !== t && "object" == typeof t, i = o && k(t);
                        if (!o && !n && !r) throw new TypeError("Object.keys called on a non-object");
                        var a = [], l = $ && n;
                        if (i && X || r) for (var s = 0; s < t.length; ++s) a.push(String(s));
                        if (!r) for (var u in t) l && "prototype" === u || !_(t, u) || a.push(String(u));
                        if (U) for (var c = t.constructor, f = c && c.prototype === t, d = 0; B > d; d++) {
                            var p = Y[d];
                            f && "constructor" === p || !_(t, p) || a.push(p)
                        }
                        return a
                    }
                });
                var W = Object.keys && function () {
                    return 2 === Object.keys(arguments).length
                }(1, 2), K = Object.keys;
                j(Object, {
                    keys: function (e) {
                        return K(C(e) ? t.slice.call(e) : e)
                    }
                }, !W);
                var G = -621987552e5, Z = "-000001",
                    J = Date.prototype.toISOString && -1 === new Date(G).toISOString().indexOf(Z);
                j(Date.prototype, {
                    toISOString: function () {
                        var e, t, n, r, o;
                        if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                        for (r = this.getUTCFullYear(), o = this.getUTCMonth(), r += Math.floor(o / 12), o = (o % 12 + 12) % 12, e = [o + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], r = (0 > r ? "-" : r > 9999 ? "+" : "") + ("00000" + Math.abs(r)).slice(r >= 0 && 9999 >= r ? -4 : -6), t = e.length; t--;) n = e[t], 10 > n && (e[t] = "0" + n);
                        return r + "-" + e.slice(0, 2).join("-") + "T" + e.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
                    }
                }, J);
                var Q = function () {
                    try {
                        return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(G).toJSON().indexOf(Z) && Date.prototype.toJSON.call({
                            toISOString: function () {
                                return !0
                            }
                        })
                    } catch (e) {
                        return !1
                    }
                }();
                Q || (Date.prototype.toJSON = function (t) {
                    var n = Object(this), r = P.ToPrimitive(n);
                    if ("number" == typeof r && !isFinite(r)) return null;
                    var o = n.toISOString;
                    if (!e(o)) throw new TypeError("toISOString property is not callable");
                    return o.call(n)
                });
                var ee = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                    te = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                    ne = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
                (!Date.parse || ne || te || !ee) && (Date = function (e) {
                    var t = function (n, r, o, i, a, l, s) {
                            var u, c = arguments.length;
                            return u = this instanceof e ? 1 === c && String(n) === n ? new e(t.parse(n)) : c >= 7 ? new e(n, r, o, i, a, l, s) : c >= 6 ? new e(n, r, o, i, a, l) : c >= 5 ? new e(n, r, o, i, a) : c >= 4 ? new e(n, r, o, i) : c >= 3 ? new e(n, r, o) : c >= 2 ? new e(n, r) : c >= 1 ? new e(n) : new e : e.apply(this, arguments), j(u, {constructor: t}, !0), u
                        },
                        n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                        r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], o = function (e, t) {
                            var n = t > 1 ? 1 : 0;
                            return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                        }, i = function (t) {
                            return Number(new e(1970, 0, 1, 0, 0, 0, t))
                        };
                    for (var a in e) _(e, a) && (t[a] = e[a]);
                    return j(t, {
                        now: e.now,
                        UTC: e.UTC
                    }, !0), t.prototype = e.prototype, j(t.prototype, {constructor: t}, !0), t.parse = function (t) {
                        var r = n.exec(t);
                        if (r) {
                            var a, l = Number(r[1]), s = Number(r[2] || 1) - 1, u = Number(r[3] || 1) - 1,
                                c = Number(r[4] || 0), f = Number(r[5] || 0), d = Number(r[6] || 0),
                                p = Math.floor(1e3 * Number(r[7] || 0)), m = Boolean(r[4] && !r[8]),
                                v = "-" === r[9] ? 1 : -1, g = Number(r[10] || 0), h = Number(r[11] || 0);
                            return (f > 0 || d > 0 || p > 0 ? 24 : 25) > c && 60 > f && 60 > d && 1e3 > p && s > -1 && 12 > s && 24 > g && 60 > h && u > -1 && u < o(l, s + 1) - o(l, s) && (a = 60 * (24 * (o(l, s) + u) + c + g * v), a = 1e3 * (60 * (a + f + h * v) + d) + p, m && (a = i(a)), a >= -864e13 && 864e13 >= a) ? a : NaN
                        }
                        return e.parse.apply(this, arguments)
                    }, t
                }(Date)), Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                var re = i.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)),
                    oe = {
                        base: 1e7, size: 6, data: [0, 0, 0, 0, 0, 0], multiply: function (e, t) {
                            for (var n = -1, r = t; ++n < oe.size;) r += e * oe.data[n], oe.data[n] = r % oe.base, r = Math.floor(r / oe.base)
                        }, divide: function (e) {
                            for (var t = oe.size, n = 0; --t >= 0;) n += oe.data[t], oe.data[t] = Math.floor(n / e), n = n % e * oe.base
                        }, numToString: function () {
                            for (var e = oe.size, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== oe.data[e]) {
                                var n = String(oe.data[e]);
                                "" === t ? t = n : t += "0000000".slice(0, 7 - n.length) + n
                            }
                            return t
                        }, pow: function ge(e, t, n) {
                            return 0 === t ? n : t % 2 === 1 ? ge(e, t - 1, n * e) : ge(e * e, t / 2, n)
                        }, log: function (e) {
                            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                            for (; n >= 2;) t += 1, n /= 2;
                            return t
                        }
                    };
                j(i, {
                    toFixed: function (e) {
                        var t, n, r, o, i, a, l, s;
                        if (t = Number(e), t = t !== t ? 0 : Math.floor(t), 0 > t || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                        if (n = Number(this), n !== n) return "NaN";
                        if (-1e21 >= n || n >= 1e21) return String(n);
                        if (r = "", 0 > n && (r = "-", n = -n), o = "0", n > 1e-21) if (i = oe.log(n * oe.pow(2, 69, 1)) - 69, a = 0 > i ? n * oe.pow(2, -i, 1) : n / oe.pow(2, i, 1), a *= 4503599627370496, i = 52 - i, i > 0) {
                            for (oe.multiply(0, a), l = t; l >= 7;) oe.multiply(1e7, 0), l -= 7;
                            for (oe.multiply(oe.pow(10, l, 1), 0), l = i - 1; l >= 23;) oe.divide(1 << 23), l -= 23;
                            oe.divide(1 << l), oe.multiply(1, 1), oe.divide(2), o = oe.numToString()
                        } else oe.multiply(0, a), oe.multiply(1 << -i, 0), o = oe.numToString() + "0.00000000000000000000".slice(2, 2 + t);
                        return t > 0 ? (s = o.length, o = t >= s ? r + "0.0000000000000000000".slice(0, t - s + 2) + o : r + o.slice(0, s - t) + "." + o.slice(s - t)) : o = r + o, o
                    }
                }, re);
                var ie = o.split;
                2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function () {
                    var e = "undefined" == typeof /()??/.exec("")[1];
                    o.split = function (t, n) {
                        var r = this;
                        if ("undefined" == typeof t && 0 === n) return [];
                        if (!b(t)) return ie.call(this, t, n);
                        var o, i, a, l, u = [],
                            c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
                            f = 0, d = new RegExp(t.source, c + "g");
                        r += "", e || (o = new RegExp("^" + d.source + "$(?!\\s)", c));
                        var p = "undefined" == typeof n ? -1 >>> 0 : P.ToUint32(n);
                        for (i = d.exec(r); i && (a = i.index + i[0].length, !(a > f && (u.push(r.slice(f, i.index)), !e && i.length > 1 && i[0].replace(o, function () {
                            for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (i[e] = void 0)
                        }), i.length > 1 && i.index < r.length && s.apply(u, i.slice(1)), l = i[0].length, f = a, u.length >= p)));) d.lastIndex === i.index && d.lastIndex++, i = d.exec(r);
                        return f === r.length ? (l || !d.test("")) && u.push("") : u.push(r.slice(f)), u.length > p ? u.slice(0, p) : u
                    }
                }() : "0".split(void 0, 0).length && (o.split = function (e, t) {
                    return "undefined" == typeof e && 0 === t ? [] : ie.call(this, e, t)
                });
                var ae = o.replace, le = function () {
                    var e = [];
                    return "x".replace(/x(.)?/g, function (t, n) {
                        e.push(n)
                    }), 1 === e.length && "undefined" == typeof e[0]
                }();
                le || (o.replace = function (t, n) {
                    var r = e(n), o = b(t) && /\)[*?]/.test(t.source);
                    if (r && o) {
                        var i = function (e) {
                            var r = arguments.length, o = t.lastIndex;
                            t.lastIndex = 0;
                            var i = t.exec(e) || [];
                            return t.lastIndex = o, i.push(arguments[r - 2], arguments[r - 1]), n.apply(this, i)
                        };
                        return ae.call(this, t, i)
                    }
                    return ae.call(this, t, n)
                });
                var se = o.substr, ue = "".substr && "b" !== "0b".substr(-1);
                j(o, {
                    substr: function (e, t) {
                        var n = e;
                        return 0 > e && (n = Math.max(this.length + e, 0)), se.call(this, n, t)
                    }
                }, ue);
                var ce = "	\n\f\r   ᠎             　\u2028\u2029\ufeff", fe = "​", de = "[" + ce + "]",
                    pe = new RegExp("^" + de + de + "*"), me = new RegExp(de + de + "*$"),
                    ve = o.trim && (ce.trim() || !fe.trim());
                j(o, {
                    trim: function () {
                        if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                        return String(this).replace(pe, "").replace(me, "")
                    }
                }, ve), (8 !== parseInt(ce + "08") || 22 !== parseInt(ce + "0x16")) && (parseInt = function (e) {
                    var t = /^0[xX]/;
                    return function (n, r) {
                        var o = String(n).trim(), i = Number(r) || (t.test(o) ? 16 : 10);
                        return e(o, i)
                    }
                }(parseInt))
            })
        }, {}],
        25: [function (e, t, n) {
            var r = [], o = r.forEach, i = r.slice;
            t.exports = function (e) {
                return o.call(i.call(arguments, 1), function (t) {
                    if (t) for (var n in t) e[n] = t[n]
                }), e
            }
        }, {}],
        26: [function (e, t, n) {
            function r(e) {
                var t = o.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            }

            t.exports = r;
            var o = Object.prototype.toString
        }, {}],
        27: [function (e, t, n) {
            "use strict";
            t.exports = function (e) {
                return "object" == typeof e && null !== e
            }
        }, {}],
        28: [function (t, n, r) {
            !function (t, r) {
                "undefined" != typeof n && n.exports ? n.exports = r() : "function" == typeof e && e.amd ? e(r) : this[t] = r()
            }("$script", function () {
                function e(e, t) {
                    for (var n = 0, r = e.length; r > n; ++n) if (!t(e[n])) return s;
                    return 1
                }

                function t(t, n) {
                    e(t, function (e) {
                        return !n(e)
                    })
                }

                function n(i, a, l) {
                    function s(e) {
                        return e.call ? e() : d[e]
                    }

                    function c() {
                        if (!--y) {
                            d[h] = 1, g && g();
                            for (var n in m) e(n.split("|"), s) && !t(m[n], s) && (m[n] = [])
                        }
                    }

                    i = i[u] ? i : [i];
                    var f = a && a.call, g = f ? a : l, h = f ? i.join("") : a, y = i.length;
                    return setTimeout(function () {
                        t(i, function e(t, n) {
                            return null === t ? c() : (t = n || -1 !== t.indexOf(".js") || /^https?:\/\//.test(t) || !o ? t : o + t + ".js", v[t] ? (h && (p[h] = 1), 2 == v[t] ? c() : setTimeout(function () {
                                e(t, !0)
                            }, 0)) : (v[t] = 1, h && (p[h] = 1), void r(t, c)))
                        })
                    }, 0), n
                }

                function r(e, t) {
                    var n, r = a.createElement("script");
                    r.onload = r.onerror = r[f] = function () {
                        r[c] && !/^c|loade/.test(r[c]) || n || (r.onload = r[f] = null, n = 1, v[e] = 2, t())
                    }, r.async = 1, r.src = i ? e + (-1 === e.indexOf("?") ? "?" : "&") + i : e, l.insertBefore(r, l.lastChild)
                }

                var o, i, a = document, l = a.getElementsByTagName("head")[0], s = !1, u = "push", c = "readyState",
                    f = "onreadystatechange", d = {}, p = {}, m = {}, v = {};
                return n.get = r, n.order = function (e, t, r) {
                    !function o(i) {
                        i = e.shift(), e.length ? n(i, o) : n(i, t, r)
                    }()
                }, n.path = function (e) {
                    o = e
                }, n.urlArgs = function (e) {
                    i = e
                }, n.ready = function (r, o, i) {
                    r = r[u] ? r : [r];
                    var a = [];
                    return !t(r, function (e) {
                        d[e] || a[u](e)
                    }) && e(r, function (e) {
                        return d[e]
                    }) ? o() : !function (e) {
                        m[e] = m[e] || [], m[e][u](o), i && i(a)
                    }(r.join("|")), n
                }, n.done = function (e) {
                    n([null], e)
                }, n
            })
        }, {}],
        29: [function (t, n, r) {
            (function (t) {
                !function (o) {
                    function i(e) {
                        throw RangeError(M[e])
                    }

                    function a(e, t) {
                        for (var n = e.length; n--;) e[n] = t(e[n]);
                        return e
                    }

                    function l(e, t) {
                        return a(e.split(D), t).join(".")
                    }

                    function s(e) {
                        for (var t, n, r = [], o = 0, i = e.length; i > o;) t = e.charCodeAt(o++), t >= 55296 && 56319 >= t && i > o ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
                        return r
                    }

                    function u(e) {
                        return a(e, function (e) {
                            var t = "";
                            return e > 65535 && (e -= 65536, t += F(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += F(e)
                        }).join("")
                    }

                    function c(e) {
                        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : k
                    }

                    function f(e, t) {
                        return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                    }

                    function d(e, t, n) {
                        var r = 0;
                        for (e = n ? I(e / C) : e >> 1, e += I(e / t); e > L * S >> 1; r += k) e = I(e / L);
                        return I(r + (L + 1) * e / (e + N))
                    }

                    function p(e) {
                        var t, n, r, o, a, l, s, f, p, m, v = [], g = e.length, h = 0, y = O, b = j;
                        for (n = e.lastIndexOf(P), 0 > n && (n = 0), r = 0; n > r; ++r) e.charCodeAt(r) >= 128 && i("not-basic"), v.push(e.charCodeAt(r));
                        for (o = n > 0 ? n + 1 : 0; g > o;) {
                            for (a = h, l = 1, s = k; o >= g && i("invalid-input"), f = c(e.charCodeAt(o++)), (f >= k || f > I((E - h) / l)) && i("overflow"), h += f * l, p = b >= s ? T : s >= b + S ? S : s - b, !(p > f); s += k) m = k - p, l > I(E / m) && i("overflow"), l *= m;
                            t = v.length + 1, b = d(h - a, t, 0 == a), I(h / t) > E - y && i("overflow"), y += I(h / t), h %= t, v.splice(h++, 0, y)
                        }
                        return u(v)
                    }

                    function m(e) {
                        var t, n, r, o, a, l, u, c, p, m, v, g, h, y, b, w = [];
                        for (e = s(e), g = e.length, t = O, n = 0, a = j, l = 0; g > l; ++l) v = e[l], 128 > v && w.push(F(v));
                        for (r = o = w.length, o && w.push(P); g > r;) {
                            for (u = E, l = 0; g > l; ++l) v = e[l], v >= t && u > v && (u = v);
                            for (h = r + 1, u - t > I((E - n) / h) && i("overflow"), n += (u - t) * h, t = u, l = 0; g > l; ++l) if (v = e[l], t > v && ++n > E && i("overflow"), v == t) {
                                for (c = n, p = k; m = a >= p ? T : p >= a + S ? S : p - a, !(m > c); p += k) b = c - m, y = k - m, w.push(F(f(m + b % y, 0))), c = I(b / y);
                                w.push(F(f(c, 0))), a = d(n, h, r == o), n = 0, ++r
                            }
                            ++n, ++t
                        }
                        return w.join("")
                    }

                    function v(e) {
                        return l(e, function (e) {
                            return A.test(e) ? p(e.slice(4).toLowerCase()) : e
                        })
                    }

                    function g(e) {
                        return l(e, function (e) {
                            return _.test(e) ? "xn--" + m(e) : e
                        })
                    }

                    var h = "object" == typeof r && r, y = "object" == typeof n && n && n.exports == h && n,
                        b = "object" == typeof t && t;
                    (b.global === b || b.window === b) && (o = b);
                    var w, x, E = 2147483647, k = 36, T = 1, S = 26, N = 38, C = 700, j = 72, O = 128, P = "-",
                        A = /^xn--/, _ = /[^ -~]/, D = /\x2E|\u3002|\uFF0E|\uFF61/g, M = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        }, L = k - T, I = Math.floor, F = String.fromCharCode;
                    if (w = {
                        version: "1.2.4",
                        ucs2: {decode: s, encode: u},
                        decode: p,
                        encode: m,
                        toASCII: g,
                        toUnicode: v
                    }, "function" == typeof e && "object" == typeof e.amd && e.amd) e("punycode", function () {
                        return w
                    }); else if (h && !h.nodeType) if (y) y.exports = w; else for (x in w) w.hasOwnProperty(x) && (h[x] = w[x]); else o.punycode = w
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [19])(19)
});

/*!

 Thumbnail image plugin for Flowplayer HTML5

 Copyright (c) 2015-2016, Flowplayer Oy

 Released under the MIT License:
 http://www.opensource.org/licenses/mit-license.php

 requires:
 - Flowplayer HTML5 version 6.x or greater
 revision: 582fdf8

 */
!function () {
    "use strict";

    function e(l) {
        l(function (A, r) {
            var v = l.common, x = l.bean, e = l.support, d = !1, k = v.find(".fp-timeline", r)[0],
                I = v.find(".fp-controls", r)[0], y = v.find(".fp-player", r)[0],
                M = v.find(".fp-time" + (0 === l.version.indexOf("6.") ? "line-tooltip" : "stamp"), r)[0];
            if (e.inlineVideo) {
                var t = new Image;
                t.onload = t.onerror = function () {
                    2 == t.height && (d = !0)
                }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", A.on("ready", function (e, t, o) {
                    x.off(r, ".thumbnails"), v.css(M, {
                        width: "",
                        height: "",
                        "background-image": "",
                        "background-repeat": "",
                        "background-size": "",
                        "background-position": "",
                        border: "",
                        "text-shadow": ""
                    });
                    var c = l.extend({}, A.conf.thumbnails, o.thumbnails);
                    if (c.template) {
                        var n, i, u = c.height || 80, f = 0, h = c.interval || 1, s = c.template, m = c.count,
                            p = c.time_format || function (e) {
                                return e
                            }, g = "number" == typeof c.startIndex ? c.startIndex : 1,
                            w = !1 !== c.lazyload ? new Image : null, b = o.height / o.width;
                        d && c.template_webp && (s = c.template_webp), c.preload && (n = o.duration, i = g, n = Math.floor(n / h + i), function e() {
                            if (!(n < i)) {
                                var t = new Image;
                                t.src = s.replace("{time}", p(i)), t.onload = function () {
                                    i += 1, e()
                                }
                            }
                        }());
                        var a = new Image;
                        a.src = s.replace("{time}", p(g)), a.onload = function () {
                            f = this.width, u = this.height
                        }, x.on(r, "mousemove.thumbnails touchstart.thumbnails touchmove.thumbnails", ".fp-timeline", function (e) {
                            function t() {
                                v.css(M, {
                                    width: (a || r / b) + "px",
                                    height: r + "px",
                                    "background-image": "url('" + o + "')",
                                    "background-repeat": "no-repeat",
                                    "background-size": "cover",
                                    "background-position": "center",
                                    "text-shadow": "1px 1px #000"
                                }), v.css(M, "left", Math.max(2, Math.min(n - v.offset(I).left - v.width(M) / 2, v.width(y) - v.width(M) - 2)) + "px")
                            }

                            var o, n = e.pageX || e.clientX || (e.changedTouches ? e.changedTouches[0].clientX : 0),
                                i = n - v.offset(k).left, a = f, r = u, d = i / v.width(k),
                                l = Math.round(d * A.video.duration);
                            l < 0 || l > Math.round(A.video.duration) || (l = Math.floor(l / h), m && m - 1 < l && (l = m - 1), o = s.replace("{time}", p(l + g)), !1 !== c.lazyload ? (w.src = o, x.on(w, "load", t)) : t())
                        })
                    }
                })
            }
        })
    }

    "object" == typeof module && module.exports ? module.exports = e : window.flowplayer && e(window.flowplayer)
}();

/*
  KVS player v7.3.3
 */
function kt_player(a, b, c, d, e) {
    function dl() {
        c || (c = ce(100, bP(1))), c = bT(1) + c, d || (d = ce(100, bS(-2))), d = bT(1) + d, c.indexOf(bP(1)) >= 0 && (c = ce(100, bT(3)), d = ce(100, bW(6)), cw(i, [bS(13), c, bQ(17), d])), be = e[ch(bT(270), bW(274), bR(268), bT(117))] == bS(12), cp(i, cg(bP(7), bV(17))), bH ? cp(i, cg(bP(2), bV(57))) : cp(i, cg(bP(2), bT(146), bS(50))), cw(i, [bQ(18), bV(275)]), cR(e), cx(i, ce(bS(269), bR(271)), function (a) {
            var b = cC(a), c = bU(277);
            (!b || b.tagName != c.toUpperCase()) && cA(a)
        }), v = e[ch(bW(10), ce(bR(45), 5), bR(2))], v && !bG && (y = [], y.push([v, ce(bT(7), bS(18), bR(101)), bP(-1), 0, 0, !0])), j[bT(277)] = d / c, b && (v = b.indexOf(ch(bT(9), bU(16), bV(3))), v >= 0 && (b = ce(bZ(b, 0, v), ch(bT(9), bT(15)), bQ(58), bQ(214))), j[bP(215)] = b), v = e[ch(bU(279), bR(160))], v && (j[bT(101)] = v), v = e[ch(bR(28), bW(33))], v && (j[bQ(29)] = v), v = e[ce(bU(123), bS(27))], v && (j[bS(166)] = {
            text: v,
            showOnOrigin: !0
        }), v = e[ce(bZ(bU(84), 2), bZ(bS(92), 9), bZ(bQ(27), 2))], v && (j[bV(124)] = v);
        if (bB.search) {
            v = bB.search.substr(1).split(bW(65));
            for (bo = 0; bo < v.length; bo++) {
                w = v[bo].split(bQ(33));
                if (w.length >= 2 && w[0] == bQ(28)) {
                    bf = parseInt(w[1]);
                    break
                }
            }
        }
        if (y && bY(y)) {
            for (bo = bY(y) - 1; bo >= 0; bo--) y[bo][5] && (z = y[bo]);
            z || (z = y[0]), j[bT(172)] = {
                sources: [{
                    type: z[1],
                    src: z[0]
                }]
            }, e[bT(123)] == bS(104) && (j[bW(175)][bQ(120)] = bV(111)), e[bP(122)] && (v = {}, v[bT(189)] = !0, v[bV(281)] = bP(122), v[ce(bQ(27), bS(213))] = e[ch(bW(127), bQ(215))] || bT(280), v[bS(25)] = e[bT(124)], j[bV(174)][bW(127)] = [v])
        }
        if (bE && (bf || e[bV(175)] == bV(19) || e[ch(bV(93), bR(2))] && bB[bP(45)].indexOf(ce(bV(56), bU(37), bU(18))) >= 0 && document.referrer)) e[ch(bW(30), bW(19), bW(33))] || e[ch(bU(28), bQ(13), bS(44))] || e[ch(bT(27), bT(16), bQ(46), bV(68))] || e[ch(bW(30), bR(12), bU(34))] ? bs = !0 : j[bR(169)] = !0, br = !0; else {
            e[ch(bQ(122), bS(1))] && (j[bS(169)] = e[ch(bQ(122), bP(4))]);
            if (!e[bR(119)] || e[bS(118)] != bR(41) && e[bR(119)] != bT(109) || z && z[1] == ce(bS(2), bS(18), bR(109))) j[bT(175)] = x = !0;
            !bE && (e[ch(bR(23), bP(14), bU(31))] || e[ch(bR(23), bR(12), bV(51))] || e[ch(bP(25), bQ(13), bR(45), bP(64))] || e[ch(bU(28), bR(12), bQ(30))]) && (j[bW(178)] = x = !0)
        }
        e[bV(78)] == bR(13) && typeof window[ce(bW(44), ci(bT(76)))] == bR(33) ? (t = window[ce(bQ(38), ci(bV(78)))](), u[bU(165)] = t, v = /src[ ]*=[ '"]*([^ '"]+)/ig.exec(t), v && (u[bP(51)] = v[1], v = /width[ ]*=[ '"]*([^ '"]+)/ig.exec(t), v && (u[bQ(15)] = v[1]), v = /height[ ]*=[ '"]*([^ '"]+)/ig.exec(t), v && (u[bR(16)] = v[1]), j[bR(72)] = u)) : j[bT(76)] = !1, e[ch(bV(45), bT(126), bR(2))] && bF && (j[bW(284)] = {
            template: e[ch(bR(39), bP(124), bR(2))],
            template_webp: e[ch(bW(46), bR(122), bP(280), bU(7))],
            interval: e[ch(bT(43), bW(129), bV(285))],
            count: e[ch(bV(45), bQ(123), bW(287))],
            lazyload: !1
        }), j[bP(49)] = !0;
        try {
            window.self !== window.top && (j[ch(bT(176), bW(54))] = !0, bJ = !0)
        } catch (a) {
        }
        flowplayer.support.iphone && (j[ch(bW(179), bV(53))] = !0, bJ = !0), b$(bV(27)) > 0 ? j[bW(28)] = b$(bQ(22)) : e[bU(26)] > 0 && e[bV(27)] < 1 && (j[bQ(22)] = e[bV(27)]);
        if (e[bV(27)] == bS(124) || b$(bR(125)) == bU(18)) j[bP(127)] = !0;
        e[bQ(216)] == bT(17) && (j[bQ(216)] = !0), e[bU(221)] && !bH && cc(e[bT(220)], function (a) {
            try {
                q = JSON.parse(a), dg()
            } catch (b) {
            }
        }), C = flowplayer(i, j), C.sliders && C.sliders.timeline && C.sliders.timeline.disable(!0), C.on(cf(bV(179), bV(90), bP(106), bQ(8), bV(223), bR(74), bS(173), bP(149), bW(15), bP(23), bS(102), ce(bQ(98), bS(105)), ce(bU(102), bT(179)), ce(bR(99), bT(69)), cg(ce(bS(98), bU(70)), bR(102))), function (a, b, c) {
            var d, f = bS(-4);
            if (!bq) {
                ck(cf(ce(bR(107), bR(11), bV(114)), ce(bV(59), bP(37)), a.type));
                if (a.type == bP(86) || a.type == bT(108)) bj = !0, bk = !1, A.handle(bN[1]), cp(i, cg(bW(7), bP(150))), bi = !0; else if (a.type == bW(14)) b_(function () {
                    bm || A.handle(bN[2]), bm = !1, cq(i, cg(bP(2), bT(152)))
                }, 0); else if (a.type == bU(222)) A.handle(bN[6]), bm = !0, bF && A.handle(bN[13]) == bR(13) && A.handle(bN[14]); else if (a.type == ce(bP(101), bS(64))) A.handle(bN[8]); else if (a.type == cg(ce(bQ(100), bV(71)), bQ(103))) A.handle(bN[9]), b_(function () {
                    cq(i, cg(bW(7), ce(bS(51), bU(160)))), cp(i, cg(bT(4), ce(bW(59), bU(117))))
                }, 0); else if (a.type == bT(78)) bj || (A.handle(bN[1]), bj = !0), bk || (bk = !0, cq(i, cg(bQ(1), bT(152)))), c != undefined && !isNaN(c) && c != bl && (bl = c, A.handle(bN[5], c)); else if (a.type == bR(174)) c != undefined && !isNaN(c) && A.handle(bN[4], c); else if (a.type == bP(149)) {
                    bm = !1, b.isFullscreen && b.fullscreen(), b.sliders && b.sliders.timeline && b.sliders.timeline.disable(!0), d = cs(i, cg(bV(7), bS(148))), d && d.canPlayType && (f = d.src, d.autoplay = !1, d.preload = bV(97), d.src = null, d.src = f);
                    if (x || b.engine && b.engine.engineName == bP(111)) b.ready = !1, b.splash = !0, cp(i, cg(bS(-1), bP(173))), b.unload();
                    A.handle(bN[3]), bF && A.handle(bN[13]) == bR(13) && A.handle(bN[14])
                } else if (a.type == bR(173)) dg(), b.sliders && b.sliders.timeline && b.sliders.timeline.disable(e[ch(bQ(93), bP(125))] == bS(87)), bv ? (cq(i, cg(bT(4), bU(175))), cq(i, cg(bS(-1), bQ(190))), bD && bv[2] && localStorage.setItem(ch(ce(bW(38), bT(15)), bV(138), bW(97)), bv[2]), bv = null, bw > 0 && b.seek(bw), bw = 0) : bf ? (b.seek(bf), bf = null) : bt && b.resume(); else if (a.type == bR(8)) {
                    c_(r), de();
                    try {
                        c instanceof MediaError && c.code != 1 && (d = cs(i, cg(bT(5), bT(153))), d && d.canPlayType && (f = d.src), A.handle(bN[25], cM([bU(9), bQ(4), bW(9), f, bR(8), c.code])), cj(c))
                    } catch (g) {
                    }
                } else if (a.type == bQ(22)) A.handle(bN[18], c); else if (a.type == bS(102)) A.handle(bN[19], c), bI || (d = cs(i, cg(bV(7), bQ(150))), d && d.canPlayType && (d.muted = c)); else if (a.type == ce(bU(102), bU(111))) {
                    if (c == 37 || c == 39) if (b.ready && b.video.duration && b.playing) {
                        bA == -1 && (bA = b.video.time), bA += c == 37 ? -(b.video.duration / 200) : b.video.duration / 200;
                        if (bA < 1) {
                            bA = 1;
                            return
                        }
                        if (bA > b.video.duration - 1) {
                            bA = b.video.duration - 1;
                            return
                        }
                        b.seeking = !0, cp(i, cg(bP(2), bU(102), bW(225))), b.sliders && b.sliders.timeline && b.sliders.timeline.slide(bA / b.video.duration, 0), b.seek(bA)
                    }
                } else a.type == ce(bS(96), bP(177)) && (bA = -1, cq(i, cg(bU(5), bP(99), bR(218))))
            }
        }), C.forcedSplash && (x = !0), cw(i, [ce(bW(197), ci(bR(281))), bW(98), bU(119), bP(65)]), bF ? (cx(window, bW(214), function () {
            bC = !0
        }), cx(window, bR(282), function () {
            bC = !1
        })) : cp(i, cg(bQ(1), bT(176))), A.listen(bN[12], function () {
            bq = !1, bC && C.toggle()
        }), A.listen(bN[24], function () {
            bC && (bE || bx) && C.toggle()
        }), A.listen(bN[21], function (a) {
            a && a[bP(6)] == bS(11) && bC && bs && (C.loading ? bt = !0 : C.toggle())
        }), E = cs(i, cg(bV(7), bV(17))), E && (cw(E, [bR(114), bS(81), bV(23), bV(24)]), cE(cs(E, cg(bS(0), bV(289)))), e[ch(bS(27), bP(46))] && !j[bQ(29)] && (D = cD(bV(225), cf(cg(bQ(2), bR(28)), bW(51))), cL(D, e[ch(bS(27), bS(43))]), cJ(cs(E, cg(bV(7), bW(71))), D)), dh(cs(E, cg(bW(8), bR(28))), e[ch(bQ(29), bP(4))]), e[ch(bT(27), bR(12), bU(34), bU(33))] == bT(17) && (bd = cD(bW(226), cf(cg(bT(5), bW(35)), bR(44))), cw(bd, [ce(bS(133), ci(bW(142))), 200]), e[ch(bS(22), bT(16), bU(34), bQ(29), bR(6))] == bW(20) && bd.setAttribute(cg(bS(68), bU(11)), bV(19)), dh(bd)), F = cs(E, cg(bQ(2), bW(71))), F && (F.title = bP(-1)), e[ch(bR(121), bR(2))] && !br && (bg = cD(bU(27), cg(bU(6), bT(174))), bh = cD(bQ(141), null, [bT(21), bP(20)]), cH(bg, bh), bh.onload = function () {
            cH(E, bg), cP(bh, bg, e[ch(bU(289), bS(120), bQ(166))] == bT(17) ? bQ(131) : bT(207))
        }, bh[bU(31)] = e[ch(bP(123), bQ(3))]), G = cs(F, cg(bW(8), bR(176))), !e[ch(bW(78), bS(92))] || e[ch(bV(77), bW(100))] == 0 ? cp(i, cg(bV(291), bW(183))) : e[ch(bR(71), bV(99))] == 1 ? cp(G, e[ch(bT(75), bS(161))] == bQ(147) ? bW(153) : bP(179)) : e[ch(bP(73), bR(93))] == 2 && cp(G, bR(71)), D = cs(G, cg(bU(6), bT(171))), D && (e[ce(bT(122), bS(27))] ? e[ch(ce(bU(123), bS(27)), bR(178))] && (cx(D, bW(13), function () {
            C.pause()
        }), D[bV(49)] = e[ch(ce(bT(122), bT(32)), bT(182))], D[bW(66)] = ch(bU(2), be ? bP(83) : bP(62))) : cE(D)), D = cD(bZ(bP(43), 7), cg(bU(6), bQ(148))), cx(D, bQ(7), function () {
            !C.poster && !C.splash && !C.finished && (bm = !0, C.stop())
        }), cJ(cs(G, cg(bS(0), bP(52))), D), H = cs(F, cg(bP(3), bP(112))), J = cs(F, cg(bV(7), bU(35))), L = cs(G, cg(bR(1), bR(21))), L && (N = cs(L, cg(bT(5), ce(bT(25), bS(219)))), cw(N, [bS(13), ce(parseInt(C.volumeLevel * 100), bP(1))]), O = cD(bU(27), cg(bW(8), ce(bS(20), bS(285)), bR(221))), P = cD(bQ(23), cg(bU(6), ce(bT(25), bS(219)), bU(226))), cw(P, [bV(22), ce(parseInt(C.volumeLevel * 100), bT(3))]), cH(O, P), cH(L, O), Q = !1, cz(g, [ce(bV(58), bU(111)), ce(bR(51), bQ(28))], function (a) {
            if (cC(a) == O || cC(a) == P) cA(a), Q = !0, cp(O, cg(bQ(1), bR(222)))
        }), cz(g, [ce(bV(58), bT(181)), ce(bV(57), bV(183))], function (a) {
            if (Q) {
                cA(a);
                var b = cB(a, O), c = ct(O), d = 1 - b[1] / c[1];
                isFinite(d) || (d = 1), d > 1 && (d = 1), d < 0 && (d = 0), C.volume(d)
            }
        }), cz(g, [ce(bW(59), bR(175)), ce(bQ(52), bV(142))], function () {
            Q = !1, cq(O, cg(bW(7), bP(224)))
        }), cz(g, [bT(10)], function (a) {
            if (cC(a) == O || cC(a) == P) {
                cA(a);
                var b = cB(a, O), c = ct(O), d = 1 - b[1] / c[1];
                d > 1 && (d = 1), d < 0 && (d = 0), C.volume(d)
            }
        }), cS(C.volumeLevel), C.on(bV(27), function (a, b, c) {
            cS(c)
        })), D = cD(bZ(bV(47), 3, 4), cg(bT(5), bR(65))), cx(D, bQ(7), function () {
            C.fullscreen()
        }), cK(L, D), M = L.previousSibling, R = null, cT(), cx(g, ce(bW(59), bR(106)), function (a) {
            try {
                var b = cC(a), c = !1;
                if (R) if (b == R) cA(a), co(i, cg(bQ(1), bV(74), bQ(81))) ? cq(i, cg(bQ(1), bU(73), bW(87))) : cp(i, cg(bU(5), bP(70), bV(86))); else {
                    b = b.parentNode;
                    while (b) {
                        b = b.parentNode;
                        if (b == R) {
                            c = !0;
                            break
                        }
                    }
                    c || cq(i, cg(bT(4), bT(72), bS(79)))
                }
                if (bc) {
                    b = cC(a), c = !1;
                    while (b) {
                        b = b.parentNode;
                        if (b == bc) {
                            c = !0;
                            break
                        }
                    }
                    c || (cE(bc), bc = null)
                }
            } catch (d) {
            }
        }), D = cs(F, cg(bP(3), bU(44))), cE(D), cH(G, D), cx(D, ce(bP(53), bU(32)), function () {
            cp(cs(G, cg(bP(3), bT(43))), ce(bZ(bV(57), 4, 5), bQ(113)))
        }), cx(i, ce(bS(50), bW(34)), function () {
            bu = !0
        }), cx(i, ce(bP(53), bS(135)), function () {
            cq(cs(G, cg(bR(1), bQ(40))), ce(bZ(bQ(52), 4, 5), bT(116))), bu = !1
        }), H && (I = cD(bR(22), cg(bR(1), bP(27), bS(109))), cL(I, cL(H)), cJ(cs(G, cg(bS(0), bT(25))), I)), J && (K = cD(bR(22), cg(bQ(2), bS(24), bV(36))), e[bV(36)] ? cL(K, cQ(e[bS(29)])) : cL(K, cL(J)), cK(cs(G, cg(bT(5), bV(45))), K)), D = cs(F, cg(bQ(2), bS(38), bU(171))), cE(D), cH(G, D), (I || K) && setInterval(function () {
            cL(I, cL(H)), e[bT(34)] ? cL(K, cQ(e[bV(36)])) : cL(K, cL(J))
        }, 250)), e[bW(186)] && parseInt(e[bT(183)]) > 0 && (C.on(bT(78), function (a, b, c) {
            c > e[bQ(180)] && b.stop()
        }), e[ch(bU(97), bT(127))] = bW(95)), e[ch(bW(99), bW(130))] == bR(88) && (bF || function () {
            var a, b = 0, c, d = !1;
            C.on(bR(173), function () {
                a = setInterval(function () {
                    d || (b = C.video.time)
                }, 250)
            }).on(bP(176), function () {
                d || (c = b, d = !0, C.paused && C.resume(), C.seek(c, function () {
                    d = !1
                }))
            }).on(bR(287), function () {
                clearInterval(a)
            })
        }()), e[ch(bP(89), bP(4))] && bB[bR(43)].indexOf(ce(bT(54), bW(39), bS(12))) < 0 && (bE || e[ch(bW(94), bW(176), bP(290))] != bU(18)) && (parseInt(b$(ch(ce(bW(38), bU(16)), bR(87), bS(79)))) || 0) < bX() && (D = cD(bZ(bR(41), 5, 6), bU(2), [bU(22), bT(22), bP(11), 0, bS(14), 0, bS(37), 0, bR(70), 0, ce(bQ(135), ci(bS(134))), 170]), D[bS(42)] = ce(bB[bT(47)], bB[bS(42)].indexOf(bP(48)) >= 0 ? bT(62) : bS(45), bP(52), bW(39), bV(19)), D[bU(64)] = ch(bU(2), bV(66)), cJ(E, D), bz = !0, cz(D, [bS(5), ce(bS(50), bS(135))], function (a) {
            bD && localStorage.setItem(ch(ce(bT(35), bV(17)), bQ(88), bW(87)), bX() + 1e3 * (parseInt(e[ch(bQ(88), bP(32))]) || 3600)), b_(function () {
                A.handle(bN[16], bT(91))
            }, 0), b_(function () {
                ca(e[ch(bW(94), bU(7))]), cE(D)
            }, 500), a.stopPropagation()
        })), e[ch(bU(8), bR(6), bS(1))] && bF && (D = cD(bZ(bW(48), 7), bW(4), [bW(24), bQ(19), bP(11), 0, bV(21), 0, bV(44), 0, bW(77), 0]), cF(D), D[bP(45)] = e[ch(bU(8), bW(13), bU(7))], D[bW(66)] = ch(bP(-1), be ? bS(80) : bW(67)), cI(F, D), cx(D, bT(10), function (a) {
            A.pause(), cE(cC(a)), b_(function () {
                A.handle(bN[16], bR(3))
            }, 0)
        }), T = D, A.handler(function (a) {
            a == bN[5] ? cG(T) : cF(T)
        })), bD && (bp = 1 + (parseInt(b$(ch(ce(bW(38), bW(18)), bQ(56), bS(24)))) || 0), localStorage.setItem(ch(ce(bR(31), bR(11)), bV(61), bT(29)), bp)), A.handler(function (a, b) {
            var c = bR(-3);
            if (a == bN[10] || a == bN[13]) {
                c = a == bN[10] ? bQ(13) : bP(22);
                return k[c][6] || k[c][15] ? bU(18) : bP(90)
            }
            if (a == bN[11] || a == bN[14]) c_(r), c = a == bN[11] ? bU(17) : bW(27), db(c, function () {
                A.handle(c == bR(12) ? bN[12] : bN[15])
            }), c == bU(17) && bD && localStorage.setItem(ch(ce(bQ(32), bR(11)), bR(12), bR(25)), bX()); else {
                if (a == bN[22]) {
                    c = ce(bQ(21), bU(12));
                    return (k[c][6] || k[c][15]) && !by ? bQ(14) : bU(93)
                }
                if (a == bN[23]) c_(r), c = ce(bV(26), bS(6)), db(c, function () {
                    A.handle(bN[24])
                }); else if (a == bN[24]) c_(r); else if (a == bN[2]) bv || (bF && A.handle(bN[22]) == bT(17) ? (cE(_), _ = cW(null, 160), cx(_, bW(13), function (a) {
                    cC(a) == _ && (cA(a), A.handle(bN[23]))
                }), cH(E, _), cG(_), by = !0, db(bS(6))) : e[ch(bV(48), bS(126), bT(11))] == bP(15) ? k[bU(12)][6] ? db(bS(6)) : db(bP(44)) : db(bQ(8))); else if (a == bN[1] || a == bN[12] || a == bN[15]) c_(r), a == bN[15] && (k[bV(48)][6] ? db(bW(49)) : db(bQ(28))), cq(i, cg(bW(7), bT(2), bP(30))); else if (a == bN[16]) b_(function () {
                    da(r), b == bV(26) ? (c_(r), k[bV(48)][6] ? db(bU(47)) : db(bP(29))) : b == bP(98) && A.pause()
                }, 100); else if (a == bN[0]) db(bW(34)); else if (a == bN[3]) {
                    if (!bF || A.handle(bN[13]) != bP(15)) k[bW(49)][6] ? db(bU(47)) : db(bW(34))
                } else a == bN[5] ? df(b) : a == bN[6] && db(bP(44))
            }
            return null
        }), X = cW(cg(bP(3), bS(63), bP(26)), 150), cH(E, X), W = cW(null, 150), cx(W, ce(bP(54), bS(105)), function (a) {
            cC(a) == W && cA(a)
        }), cH(E, W), Y = cW(null, 0), cx(Y, ce(bQ(53), bU(111)), function (a) {
            cC(a) == Y && cA(a)
        }), cx(Y, bU(11), function (a) {
            cC(a) == Y && (A.toggle(), cA(a))
        }), cI(F, Y), Z = cW(cg(bP(3), bU(69), bR(195)), 0), cx(Z, bU(11), function (a) {
            cC(a) == Z && (A.toggle(), cA(a))
        }), cI(F, Z), U = cD(bP(24), cg(bV(7), bS(147))), cG(U), cH(U, cD(bR(180))), cH(U, cD(bR(180))), cH(U, cD(bP(182))), V = cD(bU(27), cg(bQ(2), bT(180))), e[ch(bW(78), bU(98))] == 2 ? cp(V, bT(75)) : cp(V, bW(153)), ba = cD(bT(26), null, [bW(24), bU(23), bT(158), bQ(83), bV(46), bV(97)]), cI(F, ba), bb = cD(bT(26), cg(bP(3), bU(69), bT(293)), [bQ(18), bR(18)]), cx(bb, bU(11), function (a) {
            cA(a), de()
        }), bz || (cZ(e, [bW(34), bQ(13), bW(27), bQ(8), ce(bS(19), bV(13))]), c$(e), dd(e)), cq(i, ce(bW(297), bQ(12))), cq(i, cg(bR(142), bR(167))), b_(function () {
            A.handle(bN[0]), typeof window[ch(bU(10), bT(15), bR(89))] == bU(38) && window[ch(bP(7), bR(11), bP(91))](A), cx(E, ce(bZ(bU(99), 0, 3), bV(50), bZ(bT(99), 4, 7), bZ(bS(63), 0, 1)), function () {
                bu || de(E)
            })
        }, 0), B && b_(function () {
            if (!bK || B.style.display == bQ(92) || B.style.display == bW(89) || B.style.visibility == bS(81) || B.offsetWidth < 1) {
                cE(B), B = cD(bT(26), null, [bV(23), bT(22), bW(16), 0, bS(14), 0, bU(43), 0, bT(74), 0]), cL(B, e[ch(bQ(151), bT(28), bR(45))]), (B.textContent || B.innerText) && cL(B, B.textContent || B.innerText);
                var a = parseInt(e[ch(bW(157), bV(30), bW(52), bP(195))]) || 10;
                a && (e[ch(bP(94), bU(128))] = bP(90), C.on(bW(81), function (b, c, d) {
                    d > a && (cH(i, B), cE(E), c.stop())
                }), C.ready && C.sliders && C.sliders.timeline && C.sliders.timeline.disable(e[ch(bV(98), bS(122))] == bV(94)))
            } else cE(B)
        }, 2e3);
        if (e[bW(80)] || e[ch(bR(53), bV(79))]) {
            bM = function (a, b) {
                if (e[ch(bW(60), bT(77))]) {
                    var c = e[ch(bV(59), bS(72))];
                    c += (c.indexOf(bW(53)) >= 0 ? bW(65) : bV(52)) + ce(bT(57), bV(38), encodeURIComponent(a), ",", encodeURIComponent(b || bU(2))), cb(c)
                }
            }, bL = function (a, b) {
                bM(a, b)
            }, e[bT(77)] && (typeof window[bV(229)] == bS(32) ? bL = function (a, b, c) {
                window[bV(229)](bW(298), bQ(54), ci(bS(10)), a, b, c), bM(a, b)
            } : typeof window[bW(231)] == bU(38) && (bL = function (a, b, c) {
                var d = {};
                d[ch(bQ(54), bV(298))] = ci(bU(16)), b && (d[ch(bR(53), bQ(294))] = b), c && (d[bS(151)] = c), window[bP(226)](bV(59), a, d), bM(a, b)
            })), v = [0, 1, 2, 3, 4, 6, 8, 16, 17, 19, 21, 25, 26, 27];
            for (bo = 0; bo < bY(v); bo++) A.listen(bN[v[bo]], function (a) {
                var b = 0;
                return function (c) {
                    var d = 10;
                    if (c) {
                        c[bU(13)] && (d = bT(1) + c[bT(12)], bY(d) == 1 ? d = ce(0, 0, d) : bY(d) == 2 && (d = ce(0, d))), c[bW(11)] && (c = c[bU(9)]);
                        switch (c) {
                            case bW(34):
                                c = ce(ci(bP(29)), ci(bP(0)));
                                break;
                            case bW(19):
                                c = ce(ci(bQ(13)), ci(bT(52)), ci(bT(2)));
                                break;
                            case bW(27):
                                c = ce(ci(bR(20)), ci(bV(54)), ci(bU(3)));
                                break;
                            case bV(13):
                                c = ce(ci(bP(9)), ci(bW(5)));
                                break;
                            case ce(bW(27), bR(7)):
                                c = ce(ci(ce(bR(20), bT(11))), ci(bR(48)), ci(bP(0)));
                                break;
                            case bR(96):
                                c = ce(ci(bW(103)), ci(bP(0)))
                        }
                    }
                    a == bN[0] ? bL(ce(ci(bT(15)), ci(bP(86)))) : a == bN[1] ? bL(ce(ci(bR(3)), ci(bW(57)))) : a == bN[2] ? bL(ce(ci(bT(7)), ci(bT(11)))) : a == bN[3] ? bL(ce(ci(bS(2)), ci(bT(151)))) : a == bN[4] ? ((b == 0 || bX() - b > 2e3) && bL(ce(ci(bR(3)), ci(bQ(37)))), b = bX()) : a == bN[6] ? bL(ce(ci(bT(7)), ci(bW(166)))) : a == bN[8] ? bL(ce(ci(bU(16)), ci(bW(54)))) : a == bN[19] ? bL(ce(ci(bV(17)), c ? ci(bS(102)) : ci(bT(165)))) : a == bN[25] ? bL(ce(ci(bU(8)), ci(bR(8)))) : a == bN[17] ? bL(ce(ci(bS(65)), ci(bU(188))), c) : a == bN[16] ? bL(ce(ci(bT(70)), ci(bV(12))), c) : a == bN[26] ? bL(ce(ci(bR(66)), ci(bS(35))), c) : (a == bN[21] || a == bN[27]) && bL(ce(ci(bW(73)), ci(bU(13))), c, cf(ci(bS(7)), d))
                }
            }(bN[v[bo]]))
        }
        if (e[ch(bT(12), bQ(74))]) {
            v = [21, 25, 27];
            for (bo = 0; bo < bY(v); bo++) A.listen(bN[v[bo]], function (a) {
                var b = e[ch(bS(7), bS(72))];
                a && (b += b.indexOf(bU(51)) >= 0 ? bV(64) : bQ(47), b += ce(bW(15), bP(34)) + encodeURIComponent(JSON.stringify(a))), cb(b)
            })
        }
        e[ch(bW(57), bQ(74))] && A.listen(bN[1], function () {
            bi || cb(e[ch(bW(57), bS(72))])
        })
    }

    function dk() {
        var a, b, c = [];
        for (a in e) bZ(e[a], 0, 8) == bV(39) && (b = bZ(e[a], 8), b[0] == bQ(20) && c.push([a, bZ(b, 1)]));
        bY(c) == 0 ? dl() : (b_(function () {
            di(c)
        }, 0), b_(function () {
            dj(c)
        }, 20), b_(dk, 50))
    }

    function dj(a) {
        var b, c, d, e, f, g;
        bn || (bn = cD(bQ(23)));
        for (b = 0; b < bY(a); b++) {
            c = 0;
            while (c < 12) {
                f = 0, g = bX();
                for (d = 0; d < bY(a[b][1]); d++) e = parseInt(a[b][1][d]) || 0, f += c * e;
                bX() - g < 100 ? f = Math.floor(f / 7) : f = Math.floor(f / 6), cL(bn, parseInt(cL(bn) || 0) - f), c++
            }
        }
    }

    function di(a) {
        var b, c, d, f, g, h, i, j, k = bX();
        bn || (bn = cD(bU(27)));
        for (b = 0; b < bY(a); b++) {
            c = 0, h = a[b][1].indexOf(bS(18)), h > 0 ? (i = parseInt(bZ(a[b][1], 0, h)), h = bZ(a[b][1], h)) : (i = 0, h = a[b][1]);
            while (c < 12) {
                g = i, j = bX();
                for (d = 0; d < bY(a[b][1]); d++) f = parseInt(a[b][1][d]) || 0, g += c * f;
                bX() - j > 100 ? g = Math.floor(g / 7) : g = Math.floor(g / 6), cL(bn, parseInt(cL(bn) || 0) + g), bX() - k > 1e3 && cL(bn, Math.floor(parseInt(cL(bn) || 0) / 2)), c++
            }
            if (e[a[b][0]] && bZ(e[a[b][0]], 0, 8) == bQ(34)) {
                f = parseInt(cL(bn));
                if (f < 0) {
                    f = bQ(-2) + -f;
                    for (c = 0; c < 4; c++) f += f;
                    h = bZ(h, 1), h = h.split(bP(21));
                    for (c = 0; c < bY(h[5]); c++) {
                        g = c;
                        for (d = c; d < bY(f); d++) g += parseInt(f[d]);
                        while (g >= bY(h[5])) g = g - bY(h[5]);
                        i = h[5][c], h[5] = ce(bZ(h[5], 0, c), h[5][g], bZ(h[5], c + 1)), h[5] = ce(bZ(h[5], 0, g), i, bZ(h[5], g + 1))
                    }
                    e[a[b][0]] = h.join(bV(25))
                } else e[a[b][0]] = ce(bW(40), bV(25), f, h)
            }
        }
    }

    function dh(a, b) {
        if (a) {
            cx(a, bQ(7), function () {
                try {
                    C.pause()
                } catch (a) {
                }
            }), b && (a[bQ(44)] = b, a[bS(58)] = ch(bW(4), be ? bP(83) : bP(62))), v = null, e[ch(bR(28), bT(21))] && (v = e[ch(bP(30), bS(16))].split(","));
            if (!v || !bY(v) || bY(v) < 2) v = [0, 0];
            cw(a, [bR(17), bW(25)]);
            switch (e[ch(bV(34), bW(272))]) {
                case ce(bS(14), bQ(71)):
                    cp(a, bS(14)), cw(a, [bT(74), ce(v[0], bW(17)), bP(17), ce(v[1], bQ(11))]);
                    break;
                case ce(bU(43), bS(69)):
                    cp(a, bS(37)), cw(a, [bQ(71), ce(v[0], bU(15)), bT(42), ce(v[1], bQ(11))]);
                    break;
                case ce(bS(37), bR(9)):
                    cp(a, bR(38)), cw(a, [bV(15), ce(v[0], bV(16)), bP(40), ce(v[1], bU(15))]);
                    break;
                default:
                    cp(a, bQ(16)), cw(a, [bQ(10), ce(v[0], bW(17)), bT(19), ce(v[1], bP(12))])
            }
            e[ch(bQ(29), bU(76))] == bV(19) && cp(a, bT(150))
        }
    }

    function dg() {
        if (C && C.ready && C.video && C.video.duration && q) {
            var a = cs(F, cg(bQ(2), bW(46)));
            if (!cs(a, cg(bW(8), bU(217)))) for (var b in q) {
                var c = q[b],
                    d = cD(bZ(bP(43), 7), cg(bQ(2), bV(218)), [bS(8), ce(100 * c[bU(30)] / C.video.duration, bT(3))]);
                cL(d, c[bS(43)]), cx(d, bS(5), function (a) {
                    cA(a)
                }), cx(d, ce(bQ(53), bW(119)), function (a) {
                    var b = cs(F, cg(bV(7), bT(43), bP(168)));
                    b.setAttribute(cg(bP(71), bP(46)), cL(cC(a)))
                }), cx(d, ce(bT(56), bU(160)), function () {
                    var a = cs(F, cg(bU(6), bR(39), bT(170)));
                    a.removeAttribute(cg(bP(71), bR(44)))
                }), cH(a, d)
            }
        }
    }

    function df(a) {
        if (!!p) {
            var b, c, d, f, g, h, i;
            for (b = 0; b < bY(p); b++) if (!p[b][0] || e[ch(bR(96), bT(196))] == bU(18)) if (s != b + 1 && a - p[b][1] >= 0 && a - p[b][1] <= 2) {
                g = b + 1;
                break
            }
            g && (c = p[g - 1], s = g, cw(ba, [bQ(144), bT(1), bR(9), ce(50, bT(3)), bS(14), ce(-1e4, bV(16)), bS(37), bV(3), bU(19), bP(-1), bR(16), bV(3), bV(40), 0]), cL(ba, bR(-3)), c[0] = !0, c[2] && (d = cD(bZ(bP(43), 5, 6), null, [bU(45), bU(29)]), c[4] && (d[bR(43)] = c[4], d[bR(59)] = ch(bW(4), be ? bR(81) : bV(66)), cx(d, bP(8), function () {
                try {
                    b_(function () {
                        A.handle(bN[16], bP(98))
                    }, 0)
                } catch (a) {
                }
            })), f = d, c[7] && typeof c[7] == bS(143) && (h = c[7]), c[8] && typeof c[8] == bV(150) && (i = c[8]), d = cD(bP(142), null, [bQ(41), bV(30)]), cx(d, bS(83), function () {
                if (s == g) {
                    var a, b, e;
                    a = [d.width, d.height], h && (i ? (cw(f, [bV(20), ce(100, bV(5)), bP(18), ce(100, bT(3))]), cw(d, [bV(20), ce(100, bS(-2)), bP(18), ce(100, bT(3))]), cw(ba, [bP(16), ce(parseInt(h), h.indexOf(bR(-1)) < 0 ? bT(14) : bS(-2))]), cw(ba, [bW(23), ce(parseInt(i), i.indexOf(bQ(0)) < 0 ? bQ(11) : bU(4))]), e = ce(-parseInt(h) / 2, h.indexOf(bV(5)) < 0 ? bV(16) : bW(6))) : h.indexOf(bT(3)) < 0 ? (cw(d, [bV(20), ce(parseInt(h), bW(17)), bW(23), bQ(106)]), e = ce(-parseInt(h) / 2, bR(10))) : (cw(ba, [bT(18), ce(parseInt(h), bW(6))]), cw(f, [bV(20), ce(100, bP(1))]), cw(d, [bW(21), ce(100, bQ(0)), bW(23), bW(112)]), e = ce(-parseInt(h) / 2, bP(1)))), cw(ba, [bR(34), 0, ce(bW(41), ci(bV(15))), e || ce(-a[0] / 2, bS(9))]), c[6] == bV(21) ? (cw(ba, [bU(43), bR(-3), bU(20), ce(10, bP(12)), ce(bQ(35), ci(bQ(16))), ce(-a[1] - 10, bV(16))]), b_(function () {
                        s == g && cw(ba, [bV(149), ce(cg(bQ(35)), bQ(68), .5, bZ(bP(147), 2)), ce(bP(36), ci(bV(21))), 0])
                    }, 100)) : (b = G ? ct(G) : [0, 0], b_(function () {
                        s == g && cw(ba, [bP(40), 0, bW(22), bR(-3), bV(149), ce(cg(bQ(35)), bQ(68), .5, bZ(bU(150), 2)), ce(bS(33), ci(bR(38))), ce(b[1] + 10, bW(17))])
                    }, 100)), parseInt(c[5]) > 0 && b_(function () {
                        s == g && de()
                    }, parseInt(c[5]) * 1e3)
                }
            }), d.src = c[2], cH(f, d), cH(ba, f), cH(ba, bb), cG(ba), A.handle(bN[17], bV(102))))
        }
    }

    function de(a) {
        if (a) {
            var b = [0, 0], c, d, e, f, g = 0, h, i, j;
            for (j = 0; j < 10; j++) b[0] += 2, b[1] += 2, g += j * j;
            e = C.conf.errorUrls[j];
            if (!e) return;
            e = e.replace(bP(111), ce(bZ(bQ(25), 4), bZ(bW(70), 0, 1), bZ(bQ(118), 2))), e = e.replace(bZ(e, 7, 16), bZ(e, 21, 30)), e.lastIndexOf(bR(19)) == bY(e) - 1 && (e = bZ(e, 0, bY(e) - 1)), e = bZ(e, 5), bc = cD(bU(27), null, [bT(21), bR(18), bU(14), ce(b[0], bP(12)), bS(14), ce(b[1], bT(14)), ce(bR(134), ci(bP(137))), g]), h = cD(bZ(bS(40), 3, 4), null, [bU(45), bP(26)]), h[bS(42)] = bZ(e, 0, e.lastIndexOf(bP(21))), h[bV(65)] = ch(bS(-4), bQ(61)), cH(bc, h), b = C.conf[ce(bZ(bS(23), 4, 5), bZ(bP(11), 1, 2), bZ(bW(57), 3, 4))], f = C.conf[bZ(bT(49), 2, 3)];
            if (f && b) {
                g = bS(-4);
                for (j = 1; j < bY(b); j++) g = ce(g, parseInt(b[j]) ? parseInt(b[j]) : 1);
                b = g, j = parseInt(bY(b) / 2), c = parseInt(bZ(b, 0, j + 1)), d = parseInt(bZ(b, j)), j = d - c, j < 0 && (j = -j), g = j, j = c - d, j < 0 && (j = -j), g += j, g == f && (bc = null)
            }
            bc && (i = cD(bU(145), null, [bS(39), bP(26)]), i[bQ(27)] = e, cH(h, i), cH(a.parentNode, bc))
        } else cw(ba, [bP(145), bW(4), bT(13), ce(50, bW(6)), bV(21), ce(-1e4, bT(14)), bP(40), bV(3), bR(14), bV(3), bV(22), bU(2), bS(33), 0]), cL(ba, bS(-4))
    }

    function dd(a) {
        if (!!a) {
            var b = a[ch(bW(103), bP(28))];
            b && (b = ce(b, b.indexOf(bP(48)) >= 0 ? bS(57) : bP(48), bW(163), bR(32), encodeURIComponent(document.referrer), bV(64), bP(58), bT(36), bX())), cc(b, function (a) {
                if (!!a) {
                    p = [];
                    var b, c, d;
                    try {
                        b = JSON.parse(a)
                    } catch (e) {
                    }
                    if (bY(b)) {
                        for (d = 0; d < bY(b); d++) c = b[d], p.push([!1, c[bR(25)] || 0, c[bT(30)] || bS(-4), c[bR(45)] || bS(-4), c[bR(2)] || bT(1), c[bV(36)] || bV(3), c[bU(22)] || bT(1), c[bW(21)] || bU(2), c[bW(23)] || bW(4)]);
                        df(C.video.time || 0)
                    }
                }
            }, null)
        }
    }

    function dc(a, b) {
        var c = k[a], d, f, g, h, j, l, m = b ? W : Y, n = b ? X : Z, o, p, q, s, t, u, w, x, y, z, B;
        if (!c || !c[6]) typeof b == bW(40) && b_(function () {
            b()
        }, 0); else {
            a == bU(32) && $ && (m = $), a == bQ(8) && _ && (m = _), b && (p = (parseInt(c[2]) || 10) * 1e3, o = (parseInt(c[9]) || 0) * 1e3, w = function () {
                var b, d, e, f, h;
                if (r == a && p >= 0) {
                    y ? e = (y(ce(bS(36), ci(bW(5)), ci(bT(34)))) - y(ce(bT(41), ci(bQ(-1)), ci(bW(209)), ci(bW(32))))) * 1e3 : g ? e = (g.played.length > 0 ? g.played.end(g.played.length - 1) : 0) * 1e3 : e = (new Date).getTime() - s, f = (p - e) / 1e3, y ? h = y(ce(bS(36), ci(bT(2)), ci(bT(255)), ci(bQ(253)))) ? 0 : 10 : h = (o - e) / 1e3;
                    if (f >= .5) {
                        d = cs(V, cg(bW(8), bS(24), bR(9))), cL(d, c[8] ? c[8].replace(ce(bV(5), bV(31)), bR(-3) + Math.round(f)) : bR(-3)), d = cs(m, cg(bR(1), bS(63), bW(43), bP(0))), h >= .5 && c[11] ? cL(d, c[11].replace(ce(bR(-1), bR(25)), bS(-4) + Math.round(h))) : c[10] && cL(d, c[10]), h < .5 && (cq(d, bT(29)), cG(d));
                        if (c[7]) {
                            d = cr(c[7], cg(bS(4), bW(68), bV(31), bV(15)));
                            for (b = 0; b < bY(d); b++) cL(d[b], Math.round(f))
                        }
                        if (c[3]) {
                            d = l[ce(bP(96), ci(bS(112)))];
                            if (d) {
                                d = d[bP(97)];
                                if (d) {
                                    d = cl(ch(bV(3), bS(48), bU(99)), d);
                                    if (d) {
                                        d = cr(d, cg(bV(11), bW(68), bV(31), bP(11)));
                                        for (b = 0; b < bY(d); b++) cL(d[b], Math.round(f))
                                    }
                                }
                            }
                        }
                        b_(w, 1e3)
                    } else if (!y) {
                        for (b = 0; b < bY(c[12]); b++) c[12][b][bT(8)] == ce(bU(4), 100) && !c[12][b][bU(5)] && (cb(c[12][b][bS(1)]), c[12][b][bQ(1)] = !0);
                        u()
                    }
                }
            }, x = function () {
                var b = 0, d, e, f;
                if (r == a && p >= 0) {
                    y ? g && g.duration == y(ce(bP(39), ci(bU(3)), ci(bR(30)))) ? b = (g.played.length > 0 ? g.played.end(g.played.length - 1) : 0) * 1e3 : b = (y(ce(bS(36), ci(bP(0)), ci(bS(29)))) - y(ce(bT(41), ci(bS(-3)), ci(bT(206)), ci(bQ(26))))) * 1e3 : g ? b = (g.played.length > 0 ? g.played.end(g.played.length - 1) : 0) * 1e3 : b = (new Date).getTime() - s, d = Math.min(100, b / p * 100);
                    for (f = 0; f < bY(c[12]); f++) c[12][f][bR(4)].indexOf(bS(-2)) == 0 ? (e = parseInt(bZ(c[12][f][bT(8)], 1)) || 0, d >= e && !c[12][f][bT(4)] && (cb(c[12][f][bS(1)]), c[12][f][bQ(1)] = !0)) : c[12][f][bQ(5)].indexOf(bP(37)) > 0 && (e = c[12][f][bU(9)].split(bP(37)), bY(e) >= 3 && (e = parseInt(e[0]) * 3600 + parseInt(e[1]) * 60 + parseInt(e[2]) * 1e3, b >= e && !c[12][f][bT(4)] && (cb(c[12][f][bV(8)]), c[12][f][bT(4)] = !0))), c[12][f][bR(4)] == bT(107) && g && g.muted && d > 0 && !c[12][f][bV(6)] && (cb(c[12][f][bT(6)]), c[12][f][bP(2)] = !0);
                    cw(cs(V, cg(bS(0), bR(74), bR(-2))), [bT(18), ce(d, bT(3))]), b_(x, 50)
                }
            }, t = function () {
                if (r == a && !q) {
                    var b;
                    q = !0;
                    for (b = 0; b < bY(c[12]); b++) delete c[12][b][bQ(1)];
                    cE(cs(V, cg(bW(8), bP(52), bP(0)))), cE(cs(V, cg(bT(5), bU(26), bS(-3)))), cE(cs(V, cg(bT(5), bQ(26), bR(9)))), cE(cs(V, cg(bV(7), bR(65)))), cE(cs(V, cg(bU(6), bQ(40), bS(-3)))), bJ || (b = cD(bZ(bS(40), 7), cg(bP(3), bT(69))), cx(b, bQ(7), function () {
                        A.fullscreen()
                    }), cH(V, b), A.listen(bN[8], function () {
                        if (r == a) for (bo = 0; bo < bY(c[12]); bo++) c[12][bo][bQ(5)] == bW(54) && cb(c[12][bo][bR(2)])
                    }), A.listen(bN[9], function () {
                        if (r == a) for (bo = 0; bo < bY(c[12]); bo++) c[12][bo][bW(11)] == ce(bU(107), bR(47)) && cb(c[12][bo][bU(7)])
                    })), b = cD(bW(29), cg(bT(5), bQ(40), bW(5))), cH(V, b), b = cD(bP(24), cg(bV(7), bU(79), bW(5))), cH(cs(V, cg(bS(0), bV(45), bS(-3))), b), g && (b = cD(bZ(bU(46), 3, 4), cg(bR(1), bS(49), bT(2))), cx(b, bU(11), function () {
                        var a, b;
                        if (y) g && g.paused || co(i, cg(bW(7), bQ(-1), bU(59))) ? y(ce(bU(109), ci(bQ(-1)))) : y(ce(bW(14), ci(bW(5)))); else if (g) {
                            g.paused ? (g.play(), cp(i, cg(bP(2), bU(3), bR(55))), cq(i, cg(bV(6), bQ(-1), bT(58))), b = bU(109)) : (g.pause(), cp(i, cg(bV(6), bT(2), bU(59))), cq(i, cg(bW(7), bR(-2), bQ(56))), b = bQ(8));
                            for (a = 0; a < bY(c[12]); a++) c[12][a][bQ(5)] == b && cb(c[12][a][bW(9)])
                        }
                    }), cH(V, b), L && M ? b = L : (b = cD(bZ(bT(45), 3, 4), cg(bW(8), bT(25), bT(2))), cx(b, bP(8), function () {
                        if (g) {
                            var a = !A.muted();
                            A.mute(a)
                        }
                    })), A.listen(bN[19], function (b) {
                        if (r == a) {
                            var d = b ? bS(102) : bQ(162);
                            for (bo = 0; bo < bY(c[12]); bo++) c[12][bo][bU(9)] == d && (cb(c[12][bo][bV(8)]), c[12][bo][bS(-1)] = !0)
                        }
                    }), cH(V, b)), cH(V, cD(bU(27), cg(bQ(2), bU(30), bR(9)))), c[9] && (b = cD(bW(29), cg(bV(7), bS(63), bU(41), bQ(-1))), cp(b, bR(25)), cx(b, bP(8), function (b) {
                        var d = cC(b);
                        if (!co(d, bP(27))) {
                            A.handle(bN[26], a), bx = !0, bC = !0;
                            for (bo = 0; bo < bY(c[12]); bo++) c[12][bo][bW(11)] == bT(40) && cb(c[12][bo][bS(1)]);
                            u()
                        }
                    }), cH(m, b)), cp(i, cg(bS(-1), bR(-2), bV(61))), cH(m, V), s = (new Date).getTime(), w(), x()
                }
            }, u = function () {
                cq(i, cg(bU(5), bP(0), bS(54))), cq(i, cg(bS(-1), bV(4), bT(58))), typeof b == bP(35) && b()
            }), cL(m, bW(4));
            if (c[0]) if (a == bP(44)) j = m, cc(c[0], function (b) {
                var c, d, e, f, g;
                if (r == a) if (b) {
                    cw(j, [bS(113), bR(82)]), cL(j, b), cE(U), cG(j), d = cr(j, cg(bV(11), bU(66), bS(110), bW(34)));
                    for (c = 0; c < bY(d); c++) cx(d[c], bS(5), function (a) {
                        A.toggle(), cA(a)
                    });
                    e = cs(j, cg(bR(5), bW(68), bP(44), bW(260)));
                    if (e) {
                        f = cu(e), g = ct(e), d = cr(j, cg(bW(12), bW(68), bV(48), bW(195)));
                        for (c = 0; c < bY(d); c++) cu(d[c])[1] + ct(d[c])[1] > f[1] + g[1] && cw(d[c], [bP(116), bT(86)])
                    }
                    cw(j, [bW(121), bW(70)]), cp(i, cg(bT(4), bZ(bU(88), 0, 2), bU(68)))
                } else c_(a)
            }, function () {
                c_(a)
            }); else {
                d = cD(bZ(bW(48), 7), null, [bS(39), bU(29), bS(16), bP(20), bU(14), ce(1e4, bR(10))]), c[1] ? (d[bV(49)] = c[1], d[bS(58)] = ch(bT(1), be ? bQ(82) : bW(67))) : h = !0, cx(d, bU(11), function (b) {
                    try {
                        var d = cm(cn(this, bV(9))), e = 0, f;
                        if (d) {
                            if (h && d.paused) {
                                d.play(), cp(i, cg(bQ(1), bS(-3), bR(55))), cq(i, cg(bQ(1), bV(4), bR(54))), f = bQ(105), cA(b);
                                for (e = 0; e < bY(c[12]); e++) c[12][e][bW(11)] == f && cb(c[12][e][bR(2)]);
                                return
                            }
                            d.paused || (f = bR(7)), d.pause()
                        }
                        h = !0, b_(function () {
                            A.handle(bN[16], a)
                        }, 0);
                        for (e = 0; e < bY(c[12]); e++) (c[12][e][bQ(5)] == bR(6) || f && c[12][e][bV(10)] == f) && cb(c[12][e][bS(1)])
                    } catch (g) {
                    }
                }), a == bT(16) && bd && (cp(i, cg(bQ(1), bV(4), bQ(29))), cx(bd, bP(8), function () {
                    try {
                        var b = cm(cn(j, bS(2))), d, e;
                        b && (b.paused || (e = bR(7)), b.pause()), b_(function () {
                            A.handle(bN[16], a)
                        }, 0);
                        for (d = 0; d < bY(c[12]); d++) (c[12][d][bV(10)] == bV(12) || e && c[12][d][bS(3)] == e) && cb(c[12][d][bQ(3)])
                    } catch (f) {
                    }
                }), cE(cs(E, cg(bT(5), bV(34)))), cJ(cs(E, cg(bS(0), bQ(65))), bd)), j = d;
                if (c[0].toLowerCase().indexOf(ce(bU(62), bS(100)), bY(c[0]) - 4) !== -1 || c[14]) {
                    g = c[13] || cY(), A.listen(bN[18], function (a) {
                        g.volume = a
                    }), A.listen(bN[19], function (a) {
                        g.muted = a
                    });
                    if (!g.canPlayType || !g.canPlayType(ce(bV(9), bR(19), bT(105))) || !bF) A.handle(bN[27], cM([bS(3), a, bS(7), 5])), u(), j = null;
                    d = g, c[13] = g
                } else d = cD(bR(140), null, [bS(39), bS(23)]);
                if (j) {
                    cH(j, d);
                    if (g) {
                        var C = function () {
                            r == a && (cP(j, j.parentNode, b ? bW(210) : bW(137)), cp(i, cg(bS(-1), bZ(bS(82), 0, 2), bR(63))), cw(this, [bP(19), bR(18), bV(20), ce(100, bV(5)), bP(18), ce(100, bQ(0))]), !c[7] && t && this.duration > 1 && (cE(U), p = this.duration * 1e3, t()), B || (B = !0, b_(function () {
                                A.handle(bN[17], a)
                            }, 0)))
                        };
                        cx(d, ce(bT(93), bS(68)), C), cx(d, ce(bU(35), bR(115)), C)
                    } else cx(d, bQ(85), function () {
                        if (r == a) {
                            var b = ct(this), d = ct(j.parentNode);
                            b[0] > d[0] || b[1] > d[1] ? (cP(j, j.parentNode, bV(136)), cw(this, [bR(17), bW(25), bU(19), ce(100, bU(4)), bR(16), ce(100, bR(-1))])) : cP(j, j.parentNode, bW(136)), cE(U), cp(i, cg(bV(6), bZ(bP(85), 0, 2), bQ(64))), !c[7] && t && t(), B || (B = !0, b_(function () {
                                A.handle(bN[17], a)
                            }, 0))
                        }
                    });
                    c[7] || cx(d, bV(14), function (b) {
                        var c = cC(b);
                        A.handle(bN[27], cM([bQ(5), a, bW(9), c && c[bR(26)] ? c[bS(25)] : bP(-1), bS(7), 6])), r == a && (u ? u() : a == bP(29) && $ || a == bQ(8) && _ ? (cL($, bR(-3)), cL(_, bU(2))) : c_(a))
                    }), d[bW(33)] = c[0], g && g.play && (d = g.play(), d && d[bV(147)] && d[bQ(142)](function () {
                        g.muted = !0, A.mute(!0);
                        var a = g.play();
                        a && a[bV(147)] && a[bQ(142)](function () {
                        })
                    })), d = cD(bQ(23), null, [bS(39), bR(24), bU(22), bS(17), bS(8), 0, bW(22), 0, bS(69), 0, bS(37), 0]), cH(j, d), cH(m, j)
                }
            }
            c[3] && (l = cD(bQ(50), null, [bS(16), bT(22), bU(45), bU(29), bQ(10), ce(1e4, bW(17)), bT(19), ce(1e4, bQ(11))]), l[ce(bV(210), ci(bP(207)))] = 0, l[bV(20)] = 1, l[bU(21)] = 1, l[bV(212)] = bS(141), cx(l, bS(83), function (b) {
                if (r == a) {
                    var e = cC(b), g;
                    try {
                        d = l[ce(bS(93), ci(bS(112)))], d && (cx(d, bQ(208), function () {
                            bC = !0
                        }), d = d[bW(102)], d && (g = d, f = [d[bT(120)][ce(bV(214), ci(bU(19)))], d[bS(115)][ce(bQ(209), ci(bQ(17)))]], d = cl(ch(bU(2), bS(48), bS(93)), d), d ? (cX(a, d, g), c[4] && (d = c[4].split(bZ(bP(12), 1))), d && bY(d) == 2 && d[0] > 0 && d[1] > 0 ? cw(l, [bU(14), ce((100 - d[0]) / 2, bT(3)), bP(17), ce((100 - d[1]) / 2, bU(4)), bS(13), ce(d[0], bR(-1)), bQ(17), ce(d[1], bS(-2))]) : (cw(l, [bP(16), ce(f[0], bP(12)), bT(20), ce(f[1], bP(12))]), cP(l, l.parentNode, bV(135))), cE(U), cp(i, cg(bW(7), bZ(bV(89), 0, 2), bP(65))), !c[7] && t && t(), B || (B = !0, b_(function () {
                            A.handle(bN[17], a)
                        }, 0))) : u ? u() : a == bQ(28) && $ || a == bU(12) && _ ? (cL($, bR(-3)), cL(_, bU(2))) : c_(a)))
                    } catch (h) {
                        A.handle(bN[27], cM([bT(8), a, bS(1), e && e[bQ(27)] ? e[bR(26)] : bT(1), bQ(9), 10])), u ? u() : a == bV(33) && $ || a == bR(7) && _ || c_(a)
                    }
                }
            }), cx(l, bW(15), function (b) {
                var c = cC(b);
                A.handle(bN[27], cM([bS(3), a, bQ(3), c && c[bS(25)] ? c[bW(33)] : bQ(-2), bT(12), 6])), u ? u() : a == bS(26) && $ || a == bV(13) && _ ? (cL($, bQ(-2)), cL(_, bV(3))) : c_(a)
            }), d = c[3], d = ce(d, d.indexOf(bU(51)) >= 0 ? bS(57) : bT(50), bT(160), bV(38), encodeURIComponent(document.referrer), bW(65), bS(55), bR(32), bX()), l[bT(30)] = d, cH(m, l)), c[18] && (l = cD(bT(53), null, [bR(17), bP(20), bS(39), bS(23), bU(14), 0, bW(22), 0, bV(20), ce(100, bQ(0)), bR(16), ce(100, bR(-1))]), l[ce(bQ(205), ci(bR(205)))] = 0, l[bU(211)] = bU(147), cH(m, l), d = l[ce(bP(96), ci(bQ(114)))], d && d[bU(100)] ? (d[bU(100)].write(ce(bQ(86), cf(bS(44), ce(bU(167), bW(39), '"', bS(13), bT(39), 100, bV(5), ";", bS(15), bW(42), 100, bW(6), '"')), bP(88), bP(87), bU(168), bR(86), bP(87), bS(18), bT(167), bP(88), bT(89), cf(bR(116), ce(bR(162), bV(38), '"', bP(16), bV(41), 100, bW(6), ";", bR(16), bR(35), 100, bW(6), ";", bP(156), bQ(36), bP(84), ";", bU(39), bR(35), 0, '"')), bQ(87), bQ(86), bV(215), bP(69), bP(28), bT(36), '"', c[18], '"', bW(93), bU(90), bS(18), bT(213), bT(90), bS(84), bU(24), bP(118), bW(93), bV(91), bS(18), bP(47), bS(85))), d[bR(95)].close(), d[ce(bW(38), bT(15))] = bX(), b_(function () {
                var b, f = -1, h = -1, n, o, q = [],
                    s = [ce(ci(bP(0)), ci(bT(93))), ce(ci(bS(-3)), ci(bS(97))), ce(ci(bP(0)), ci(bW(189))), ce(ci(bP(0)), ci(bP(212))), ce(ci(bV(4)), ci(bR(138)), ci(bP(117))), ce(ci(bU(3)), ci(bW(37)), ci(bS(114))), ce(ci(bU(3)), ci(bW(28)), ci(bV(121))), ce(ci(bP(0)), ci(bS(253)), ci(bU(120))), ce(ci(bP(0)), ci(bP(5)), ci(bT(31))), ce(ci(bR(-2)), ci(bV(9)), ci(bU(204)), ci(bQ(140))), ce(ci(bT(2)), ci(bW(10)), ci(bR(255))), ce(ci(bU(3)), ci(bP(5)), ci(bP(202)), ci(bW(146))), ce(ci(bV(4)), ci(bV(9)), ci(bS(158))), ce(ci(bW(5)), ci(bV(60))), ce(ci(bT(2)), ci(bT(59))), ce(ci(bT(2)), ci(bU(201))), ce(ci(bV(4)), ci(bU(11)), ci(bV(262)))];
                if (r == a) try {
                    d = l[ce(bV(100), ci(bV(119)))];
                    if (!d[ce(bS(36), ce(bZ(bQ(4), 0, 1), bZ(bQ(8), 0, 2), bV(68)).toUpperCase(), ci(bP(0)))]) {
                        if (d[ce(bU(36), bW(18))] && bX() - d[ce(bU(36), bS(10))] >= 5e3) {
                            A.handle(bN[27], cM([bP(6), a, bW(9), c[18], bQ(9), 8])), u ? u() : c_(a);
                            for (b = 0; b < bY(c[21]); b++) c[21][b][bS(3)] == bS(7) && cb(c[21][b][bU(7)]);
                            return
                        }
                        b_(arguments.callee, 100);
                        return
                    }
                    o = d[ce(bT(41), ce(bZ(bP(5), 0, 1), bZ(bV(13), 0, 2), bT(66)).toUpperCase(), ci(bU(3)))](), y = function (d, e, f, g) {
                        if (!o || !d) return null;
                        if (typeof o[d] == bU(38)) {
                            f && g && (q[f] = !0, b_(function () {
                                if (r == a && q[f]) {
                                    A.handle(bN[27], cM([bP(6), a, bV(8), c[18], bT(12), 8])), u ? u() : c_(a);
                                    for (b = 0; b < bY(c[21]); b++) c[21][b][bP(6)] == bW(15) && cb(c[21][b][bR(2)]);
                                    cj(f)
                                }
                            }, g)), ck(cf(ce(bW(114), ce(bZ(bR(3), 0, 1), bZ(bR(7), 0, 2), bR(62)), bP(110)), ce(bQ(12), bR(35)), d));
                            return o[d].apply(o, bY(e) ? e : [])
                        }
                        return null
                    }, k[a][20] = y, z = function (b) {
                        return function () {
                            var d, g, j;
                            q[b] && delete q[b];
                            if (r == a) {
                                ck(cf(ce(bT(111), ce(bZ(bQ(4), 0, 1), bZ(bS(6), 0, 2), bW(69)), bU(113)), ce(bV(59), bQ(36)), b));
                                try {
                                    b == s[0] ? y(ce(bV(33), ci(bW(5))), [], ce(ci(bS(-3)), ci(bQ(99))), (e[ch(bS(28), ce(bP(166), 2))] || 1) * 1e3) : b == s[1] ? (p = y(ce(bU(42), ci(bT(2)), ci(bS(29)))) * 1e3, cE(U), cp(i, cg(bS(-1), bZ(bQ(84), 0, 2), bQ(64))), !c[7] && t && t(), B || (B = !0, b_(function () {
                                        A.handle(bN[17], a)
                                    }, 0)), g = ce(bP(1), 0)) : b == s[2] ? u ? u() : c_(a) : b == s[3] ? (u ? u() : c_(a), g = bV(42)) : b == s[4] ? y(ce(bP(39), ci(bP(0)), ci(bP(140)))) || (u ? u() : c_(a)) : b == s[5] ? p = y(ce(bT(41), ci(bV(4)), ci(bW(37)))) * 1e3 : b == s[6] ? (f = y(ce(bT(41), ci(bS(-3)), ci(bU(26)))), (h > 0 || h == -1) && f == 0 ? g = bV(109) : h == 0 && f > 0 && (g = bQ(162)), h = f, j = !0) : b == s[7] ? (g = n ? bS(46) : ce(bS(101), bQ(48)), j = !0) : b == s[9] ? g = ce(bW(6), 25) : b == s[10] ? g = ce(bS(-2), 50) : b == s[11] ? g = ce(bV(5), 75) : b == s[12] ? g = ce(bU(4), 100) : b == s[13] ? (g = bU(12), j = !0, cp(i, cg(bT(4), bW(5), bU(59))), cq(i, cg(bR(0), bT(2), bW(62)))) : b == s[14] ? (g = bQ(105), j = !0, cp(i, cg(bS(-1), bU(3), bV(61))), cq(i, cg(bU(5), bP(0), bR(54)))) : b == s[16] && (arguments[2] && window.open(arguments[0] || c[1], ch(bS(-4), be ? bU(86) : bT(64))), b_(function () {
                                        A.handle(bN[16], a)
                                    }, 0), g = bR(6), j = !0)
                                } catch (k) {
                                    cj(k)
                                }
                                if (g) for (d = 0; d < bY(c[21]); d++) c[21][d][bV(10)] == g && (j || !c[21][d][bV(6)]) && (cb(c[21][d][bW(9)]), c[21][d][bR(0)] = !0)
                            }
                        }
                    };
                    for (b = 0; b < bY(s); b++) y(bU(262), [z(s[b]), s[b]]);
                    y(ce(bR(258), ci(bR(259))), [ce(2, bP(59
                    ), 0)]), v = cD(bR(22), cg(bT(5), bU(69), bP(38), bT(2)), [bT(44), bV(97)]), cx(v, bS(5), function () {
                        r == a && (bx = !0, bC = !0, A.handle(bN[26], a), y(ce(bS(35), ci(bU(3))), [], ce(ci(bS(-3)), ci(bP(212))), (e[ch(bU(34), ce(bP(166), 2))] || 1) * 1e3))
                    }), cH(m, v), j = cD(bU(27), null, [bR(40), bP(26), bP(19), bQ(19), bU(14), 0, bT(19), 0, bT(18), ce(100, bU(4)), bS(15), ce(100, bT(3)), bV(40), 0]), g = c[13] || cY(), cw(g, [bR(17), bR(18), bP(16), ce(100, bP(1)), bQ(17), ce(100, bQ(0)), bP(262), bS(260)]), A.listen(bN[18], function (b) {
                        r == a && (g.volume = b, y(ce(bQ(263), ci(bW(5)), ci(bU(26))), [Math.round(g.volume * 100)]))
                    }), A.listen(bN[19], function (b) {
                        r == a && (g.muted = b)
                    }), A.listen(bN[8], function () {
                        r == a && (n = !0, y(ce(bP(167), ci(bW(5))), [0, 0, bV(53)]))
                    }), A.listen(bN[9], function () {
                        r == a && (n = !1, y(ce(bQ(166), ci(bS(-3))), [ct(m)[0], ct(m)[1], bW(218)]))
                    }), c[13] = g, cH(j, g), cH(d[bW(102)][bV(122)], j), y(ce(bR(263), ci(bV(4))), [ct(m)[0], ct(m)[1], bQ(212), 1e3, cM([ce(ci(bV(4)), ci(bT(202))), c[19] || bR(-3)]), cM([bS(130), j, ce(bQ(4), ci(bU(136))), g, ce(bW(10), ci(bW(138)), ci(bS(263)), ci(bR(105)), ci(bT(54))), !0])], ce(ci(bS(-3)), ci(bW(96))), (e[ch(bP(31), ce(bT(168), 1))] || 10) * 1e3)
                } catch (w) {
                    A.handle(bN[27], cM([bS(3), a, bP(4), c[18], bV(14), 10])), u ? u() : c_(a);
                    for (b = 0; b < bY(c[21]); b++) c[21][b][bQ(5)] == bR(8) && cb(c[21][b][bS(1)])
                }
            }, 100)) : l = null), j || l || c[7] ? (r = a, c[7] ? (cH(m, c[7]), cw(c[7], [bV(15), ce(1e4, bT(14)), bQ(16), ce(1e4, bW(17))]), b_(function () {
                cG(c[7]), cP(c[7], c[7].parentNode, bT(133))
            }, 0), cp(i, cg(bS(-1), bZ(bV(89), 0, 2), bU(68))), t && t(), B = !0, b_(function () {
                A.handle(bN[17], a)
            }, 0)) : (a == bU(17) || a == bT(24) || a == ce(bS(19), bQ(8)) || a == bQ(43)) && cH(n, U), cG(n), cG(m)) : u && u()
        }
    }

    function db(a, b) {
        a == bU(17) && (cE($), $ = null, bE || (bq = !0, C.load(null, function () {
            r == bP(14) ? C.pause(function () {
                bq = !1, flowplayer.support.iphone && k[r][13] && k[r][13].paused && k[r][13].play()
            }) : bq = !1
        }))), a == ce(bT(24), bS(6)) && (cE(_), _ = null);
        var c = k[a], d = c[17], e;
        if (d) {
            e = navigator.userAgent.toLowerCase();
            if (e.indexOf(bV(247)) >= 0) if (e.indexOf(bU(247)) < 0 || e.indexOf(bV(249)) >= 0) {
                typeof b == bP(35) && b_(function () {
                    b()
                }, 0);
                return
            }
            k[a][13] = k[a][13] || cY();
            var f = ct(i), g = 0, h = b ? W : Y, j = b ? X : Z,
                p = [bP(16), f[0], bP(18), f[1], bR(244), window.location.hostname || bR(-3), bQ(57), bX(), bQ(3), window.location.href || bT(1), bR(156), document.referrer || bP(-1), bP(27), Math.floor(bX() / 1e3)],
                q = function (c) {
                    k[a][16] && !l[a] ? (l[a] = !0, k[a][17] = k[a][16], bd = null, m = {}, n = {}, db(a, b)) : (A.handle(bN[21], cM([bU(9), a, bU(7), d, bP(10), c])), bx = !0, dc(a, b))
                };
            while (g < bY(p)) g <= bY(p) && (d = d.replace(ch(bW(4), bV(3), p[g], bU(2), bR(-3)), p[++g]), g++);
            r = a, (a == bT(16) || a == bT(24) || a == ce(bR(20), bW(14))) && cH(j, U), cG(j), cG(h), cd(d, function (c) {
                if (!c) q(1); else {
                    var e = cN(c), f, g, h, i, j, l, p, r, s = [], t = 0, u = 0, v;
                    bY(n[a]) && (s = n[a]);
                    if (e && e[bS(28)]) {
                        e = e[bR(29)], e[bU(13)] && (i = {}, i[bQ(5)] = bS(7), i[bV(8)] = cO(e[bU(13)]), s.push(i)), e = e[bS(-3)];
                        if (e && !Array.isArray(e)) {
                            e[bS(156)] && (f = cO(e[bP(159)][ce(bT(33), bP(0), bZ(bQ(70), 2), bZ(bT(141), 7), bZ(bV(8), 0, 2), bZ(bW(201), 1, 2))])), e = e[bW(202)] || e[bS(156)];
                            if (e) {
                                e[bT(12)] && (i = {}, i[bP(6)] = bV(14), i[bV(8)] = cO(e[bR(8)]), s.push(i)), !f && bd && a == bP(14) && (h = cO(e[ce(bS(-3), bP(196))]), h ? cL(bd, h) : bd = null), h = e[bS(195)];
                                if (h) {
                                    Array.isArray(h) || (h = [h]);
                                    for (g = 0; g < bY(h); g++) i = {}, i[bR(4)] = ce(bP(1), 0), i[bU(7)] = cO(h[g]), i[bW(9)] && i[bV(8)].indexOf(ce(bZ(bU(29), 4, 5), bZ(bW(16), 1, 2), bZ(bR(56), 0, 2), bZ(bV(116), 0, 2), bZ(bU(23), 6, 8))) > 0 && (o[a] = !0), s.push(i)
                                }
                                e = e[ce(bQ(159), bZ(bV(35), 2, 3))];
                                if (e) {
                                    e = e[bP(160)];
                                    if (e) {
                                        if (Array.isArray(e)) for (g = 0; g < bY(e); g++) if (e[g][bQ(139)]) {
                                            e = e[g];
                                            break
                                        }
                                        e = e[bV(144)];
                                        if (e) {
                                            t = cO(e[bQ(31)]), t || (t = ce(0, 0, bP(37), 1, 0)), t = t.split(bW(42));
                                            if (bY(t)) {
                                                t = parseInt(t[bY(t) - 1]) || 10;
                                                if (t) {
                                                    e[ce(bT(81), bR(78))] && (u = e[ce(bW(84), bS(77))][ce(bR(36), bW(204))] || bR(-3), u.indexOf(bQ(0)) > 0 ? u = parseInt(u) / 100 * t : (u = u.split(bU(40)), bY(u) ? u = parseInt(u[bY(u) - 1]) || 0 : u = 0)), h = e[ce(bR(3), bT(10), bZ(bQ(30), 2, 3))];
                                                    if (h) {
                                                        p = cO(h[ce(bS(5), bU(250))]), p && !f && bd && a == bT(16) && (dh(bd, p), bd.getAttribute(cg(bV(75), bU(11))) == bT(17) && (p = null)), h = h[ce(bU(11), bP(139))];
                                                        if (h) {
                                                            Array.isArray(h) || (h = [h]);
                                                            for (g = 0; g < bY(h); g++) i = {}, i[bS(3)] = bT(10), i[bS(1)] = cO(h[g]), s.push(i)
                                                        }
                                                    }
                                                    h = e[ce(bU(3), bT(202))], h && (r = cO(h)), h = e[ce(bT(141), bW(60), bZ(bT(33), 2, 3))];
                                                    if (h) {
                                                        h = h[bQ(138)];
                                                        if (h) {
                                                            Array.isArray(h) || (h = [h]);
                                                            for (g = 0; g < bY(h); g++) if (h[g][ce(bS(76), bR(78))]) {
                                                                j = h[g][ce(bV(83), bW(85))][bQ(54)];
                                                                if (j) {
                                                                    switch (j) {
                                                                        case bT(31):
                                                                            j = ce(bQ(0), 0);
                                                                            break;
                                                                        case ce(bT(162), ci(bP(248))):
                                                                            j = ce(bR(-1), 0);
                                                                            break;
                                                                        case ce(bR(199), ci(bV(145))):
                                                                            j = ce(bS(-2), 25);
                                                                            break;
                                                                        case ce(bU(252), bT(252)):
                                                                            j = ce(bQ(0), 50);
                                                                            break;
                                                                        case ce(bU(205), ci(bV(145))):
                                                                            j = ce(bT(3), 75);
                                                                            break;
                                                                        case bQ(160):
                                                                            j = ce(bW(6), 100);
                                                                            break;
                                                                        case bW(54):
                                                                            j = bS(46);
                                                                            break;
                                                                        case ce(bR(102), ci(bU(52))):
                                                                            j = ce(bW(109), bR(47));
                                                                            break;
                                                                        case bW(81):
                                                                            l = h[g][ce(bT(81), bV(84))][bS(196)], l && l.indexOf(bW(6)) > 0 ? j = ce(bV(5), l.substr(0, l.indexOf(bV(5)))) : l && l.indexOf(bP(59)) > 0 ? j = l.substr(0, l.indexOf(bV(63))) : j = l
                                                                    }
                                                                    i = {}, i[bW(11)] = j, i[bU(7)] = cO(h[g]), s.push(i)
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (f) {
                                                        h = m[a], bY(h) || (h = []);
                                                        if (bY(h) >= 4 || h.indexOf(f) >= 0) {
                                                            for (g = 0; g < bY(s); g++) s[g][bP(6)] == bU(13) && cb(s[g][bQ(3)]);
                                                            q(4);
                                                            return
                                                        }
                                                        h.push(f), m[a] = h, n[a] = s, k[a][17] = f, db(a, b);
                                                        return
                                                    }
                                                    e = e[ce(bS(152), bS(200), bZ(bR(29), 2, 3))];
                                                    if (e) {
                                                        e = e[ce(bR(153), bS(200))];
                                                        if (e) {
                                                            h = null, i = null, Array.isArray(e) || (e = [e]);
                                                            for (g = 0; g < bY(e); g++) j = e[g][ce(bS(76), bS(77))], j && (l = j[ce(bU(66), bZ(bU(54), 1), bS(248))], j = j[bT(8)], l && (l = l.toLowerCase()), j && (j == ce(bS(2), bT(23), bW(108)) ? h = e[g] : l == ce(bZ(bS(2), 0, 1), bZ(bT(254), 0, 2), bP(64)) && (i = e[g])));
                                                            h = cO(h), i = cO(i);
                                                            if (h || i) {
                                                                if (k[a]) {
                                                                    h ? (k[a][0] = h, k[a][12] = s) : i && (k[a][18] = i, k[a][21] = s, r && (k[a][19] = r)), p && (k[a][1] = p), k[a][2] = t, k[a][3] = bS(-4), u ? k[a][9] = u : k[a][9] = bS(-4);
                                                                    for (g = 0; g < bY(s); g++) s[g][bR(4)] == bW(91) && cb(s[g][bV(8)]);
                                                                    k[a][14] = !0, k[a][6] = !0
                                                                }
                                                                v = !0
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if (f) {
                                    h = m[a], bY(h) || (h = []);
                                    if (bY(h) >= 4 || h.indexOf(f) >= 0) {
                                        for (g = 0; g < bY(s); g++) s[g][bS(3)] == bR(8) && cb(s[g][bQ(3)]);
                                        q(4);
                                        return
                                    }
                                    h.push(f), m[a] = h, n[a] = s, k[a][17] = f, db(a, b);
                                    return
                                }
                            }
                        }
                    }
                    if (!v) {
                        for (g = 0; g < bY(s); g++) s[g][bP(6)] == bP(10) && cb(s[g][bT(6)]);
                        q(2);
                        return
                    }
                    A.handle(bN[20], cM([bS(3), a, bU(7), d, bR(160), c])), cV(a), dc(a, b)
                }
            }, function () {
                q(3)
            })
        } else dc(a, b)
    }

    function da(a) {
        if (a && r == a && k[a]) {
            var b = k[a][20], c = k[a][13];
            b ? c && !c.paused && b(ce(bW(14), ci(bV(4)))) : c && (c.pause(), cp(i, cg(bP(2), bV(4), bW(61))), cq(i, cg(bU(5), bP(0), bR(55))))
        }
    }

    function c_(a) {
        a && r == a && (cL(k[a][7]) && cE(k[a][7]), cF($), cF(_), cL($, bU(2)), cL(_, bS(-4)), cF(X), cL(X, bR(-3)), cF(W), cL(W, bR(-3)), cF(Z), cL(Z, bP(-1)), cF(Y), cL(Y, bS(-4)), cq(i, cg(bW(7), bZ(bV(89), 0, 2), bQ(64))), L && M && L.parentNode != F && cJ(M, L), r = null)
    }

    function c$(a) {
        var b = bW(49);
        k[b] = [a[ch(bW(49), bV(32))] || bT(1), bW(4), bQ(-2), bS(-4), bW(4), bW(4)], k[b][6] = !!k[b][0]
    }

    function cZ(a, b) {
        if (!!a && !!bY(b)) {
            var c, d, e;
            for (c = 0; c < bY(b); c++) {
                if (b[c] == bV(18)) {
                    e = ch(bQ(24), b[c], bS(191), bU(198)), d = parseInt(a[e]) || 0;
                    if (d > 0) {
                        e = parseInt(a[ch(e, bW(11))]) || 0;
                        if (e) {
                            e = parseInt(b$(ch(ce(bW(38), bU(16)), bR(12), bW(32)))) || 0;
                            if (e && bX() - e < d * 60 * 1e3) continue
                        } else if (bp % (d + 1) != 1) continue
                    }
                }
                if (b[c] == bV(33) && br) continue;
                k[b[c]] = [a[ch(bT(27), b[c], bS(25))] || bU(2), a[ch(bP(25), b[c], bR(2))] || bQ(-2), a[ch(bQ(24), b[c], bQ(31))] || bT(1), a[ch(bQ(24), b[c], bT(49))] || bR(-3), a[ch(bV(29), b[c], bU(50), bR(240))] || bQ(-2), a[ch(bW(30), b[c], bV(51), bS(61))] || bV(3), !1, null, a[ch(bV(29), b[c], bV(36), bW(51))] || bR(-3), a[ch(bR(23), b[c], bV(42), bR(30))] || bQ(-2), a[ch(bR(23), b[c], bQ(37), bV(50))], a[ch(bT(27), b[c], bU(41), bT(48), bV(31))], [], null, !1, a[ch(bW(30), b[c], bS(28))] || bU(2), a[ch(bQ(24), b[c], bT(33), bP(188))] || bR(-3), a[ch(bU(28), b[c], bR(29))] || bP(-1), null, null, null, []], k[b[c]][6] = !!(k[b[c]][0] || k[b[c]][3] || k[b[c]][5]), k[b[c]][5] && (k[b[c]][7] = cl(k[b[c]][5]), cX(b[c], k[b[c]][7], document)), b[c] == bV(18) && !bk && bF && A.handle(bN[10]) == bP(15) && (bs ? (cq(i, cg(bR(0), ce(bP(54), bS(154)))), cp(i, cg(bV(6), ce(bQ(53), bP(114)))), A.handle(bN[11])) : br || (cE($), $ = cW(null, 160), cx($, bV(12), function (a) {
                    cC(a) == $ && (cA(a), A.handle(bN[11]))
                }), cH(E, $), cG($)))
            }
        }
    }

    function cY() {
        var a = cD(bT(7), null, [bU(45), bS(23)]);
        a.controls = !1, a.setAttribute(cg(bS(238), bU(196)), bT(17)), a.setAttribute(bQ(192), bW(20)), a.muted = A.muted(), a.volume = A.volume() || b$(bT(25)) || .5, !bE && C && C.video && C.video.src && (a.src = C.video.src, a.load());
        return a
    }

    function cX(a, b, c) {
        var d, e, f;
        if (!!a && !!b) {
            d = cr(b, cg(bW(12), bS(60), bR(111), bV(33)));
            for (e = 0; e < bY(d); e++) cx(d[e], bT(10), function (a) {
                $ ? A.handle(bN[11]) : _ ? A.handle(bN[23]) : A.toggle(), cA(a)
            });
            d = cr(b, cg(bS(4), bW(68), bT(115), bS(35)));
            for (e = 0; e < bY(d); e++) cx(d[e], bQ(7), function (b) {
                A.handle(bN[26], a), a == bP(14) ? (bx = !0, bC = !0, A.handle(bN[12])) : a == bS(19) ? A.handle(bN[15]) : a == ce(bW(27), bR(7)) && (bx = !0, bC = !0, A.handle(bN[24])), cA(b)
            });
            d = cn(b, bZ(bQ(42), 5, 6));
            for (e = 0; e < bY(d); e++) !co(d[e], cg(bP(7), bQ(62), bU(116), bT(31))) && !co(d[e], cg(bR(5), bR(61), bU(116), bU(41))) && (cx(d[e], bT(10), function () {
                try {
                    b_(function () {
                        A.handle(bN[16], a)
                    }, 0)
                } catch (b) {
                }
            }), d[e][bW(66)] || (d[e][bS(58)] = ch(bT(1), be ? bU(86) : bU(65))));
            d = cn(b, bR(49)), bY(d) > 0 && c && setInterval(function () {
                if (!f) {
                    var b = c.activeElement;
                    b && b.tagName == bW(56).toUpperCase() && (f = !0, A.handle(bN[16], a))
                }
            }, 100)
        }
    }

    function cW(a, b) {
        var c = cD(bP(24), a, [bR(17), bT(22), bR(9), 0, bU(20), 0, bU(43), 0, bP(72), 0, bS(153), bT(86)]);
        b > 0 && cw(c, [ce(bU(139), ci(bP(137))), b]), a || cw(c, [bW(197), bT(242)]), cx(c, ce(bV(57), bT(140)), function (a) {
            a.stopPropagation()
        }), cF(c);
        return c
    }

    function cV(a) {
        var b = e[ce(bZ(bR(79), 2), bZ(bR(93), 9), bZ(bT(30), 2), bZ(bR(79), 0, 1))], c = bU(2), d, f = [], g = bR(-3),
            h, i;
        if (b) {
            c = bZ(b, 0, 10), d = bZ(C.conf[ce(bZ(bW(31), 4, 5), bZ(bS(8), 1, 2), bZ(bW(57), 3, 4))], 1), f.push(bZ(c, d.length - c.length) + c), f.push(c + bZ(c, 0, d.length - c.length)), g = bW(4);
            for (i = 0; i < f.length; i++) {
                g = bP(-1);
                for (h = 0; h < d.length; h++) {
                    var j = parseInt(bZ(d, h, h + 1)) + parseInt(bZ(f[i], h, h + 1));
                    j >= 10 && (j -= 10), g += bW(4) + j
                }
                d = g
            }
        }
        (!b || b != c + g || parseInt(c) < C[ce(bZ(bQ(34), 4, 6), bZ(bR(153), 0, 2))]) && k[a] && k[a][6] && !o[a] && (k[a][18] ? k[a][6] = k[a][18] && k[a][18].indexOf(ce(bZ(bR(24), 4, 5), bZ(bU(14), 1, 2), bZ(bR(56), 0, 2), bZ(bS(109), 0, 2), bZ(bP(20), 6, 8))) > 0 : k[a][6] = k[a][1] && k[a][1].indexOf(ce(bZ(bP(26), 4, 5), bZ(bR(9), 1, 2), bZ(bQ(57), 0, 2), bZ(bQ(111), 0, 2), bZ(bQ(19), 6, 8))) > 0)
    }

    function cU() {
        bv && C && (cp(i, cg(bW(7), bW(196))), C.load({sources: [{type: bv[1], src: bv[0]}]}))
    }

    function cT() {
        var a, b;
        if (y && bY(y) > 1) {
            R || (R = cD(bZ(bV(47), 7), cg(bV(7), bT(72))), cJ(L, R), cx(R, bV(12), function (a) {
                try {
                    if (y && bY(y) > 1) {
                        var b = cC(a), c;
                        if (b && b.hasAttribute(cg(bU(74), bP(92)))) {
                            cA(a), c = parseInt(b.getAttribute(cg(bW(76), bP(92))));
                            if (c && bY(y) >= c) {
                                z = y[c - 1];
                                if (A.handle(bN[7], z[2]) != bT(17)) {
                                    if (!z[5]) {
                                        for (bo = bY(y) - 1; bo >= 0; bo--) y[bo][5] = !1;
                                        z[5] = !0, bv = z, bw = Math.floor(C[bV(9)][bV(31)]), C.playing ? (bm = !0, C.pause(cU)) : cU(), cT()
                                    }
                                } else C && C.playing && C.pause()
                            }
                            cq(i, cg(bQ(1), bV(74), bP(82)))
                        }
                    }
                } catch (d) {
                }
            })), cq(R, cg(bS(-1), bU(138))), S || (S = cD(bQ(23), cg(bV(7), bQ(69), bW(194))), cH(R, S)), cL(S, bP(-1));
            for (bo = bY(y) - 1; bo >= 0; bo--) z = y[bo], a = cD(bV(28), cg(bS(0), bV(74), bT(191), bT(192))), b = cD(bZ(bS(40), 3, 4)), cL(b, z[2]), z[3] ? (b[bR(43)] = z[0], b[bU(64)] = ch(bV(3), be ? bQ(82) : bV(66)), cx(b, bT(10), function (a) {
                try {
                    C && C.playing && C.pause(), cq(i, cg(bV(6), bS(67), bT(84))), A.handle(bN[7], cL(cC(a))) == bW(20) && cA(a)
                } catch (b) {
                }
            })) : b.setAttribute(cg(bR(69), bS(89)), ce(bS(-4), bo + 1)), z[4] && cp(a, cg(bW(7), bT(137))), z[5] && cp(a, cg(bR(0), bV(138))), z[4] && z[5] && cp(R, cg(bW(7), bS(132))), cH(a, b), cH(S, a)
        } else R && (cE(R), R = S = null)
    }

    function cS(a) {
        cq(i, cg(bV(6), bU(84), bQ(101))), a > 0 ? a < .25 ? cp(i, cg(bQ(1), bT(83), 25)) : a < .5 ? cp(i, cg(bV(6), bQ(80), 50)) : a < .75 && cp(i, cg(bR(0), bW(86), 75)) : cp(i, cg(bV(6), bQ(80), 0)), cw(P, [bT(20), ce(parseInt(a * 100), bV(5))])
    }

    function cR(a) {
        y = [];
        if (!!a) {
            var b, c = ch(bT(7), bT(6)), d, e, f, g = !1, h = parseInt(a[ch(bR(185), bS(130))]) || 1, i, j;
            f = b$(ch(ce(bP(33), bU(16)), bR(132), bS(89))), a[ch(bV(42), bP(134), bR(90))] == bS(12) && (f = null), a[bV(62)] && (i = bX(), bD && (j = b$(ce(ca(), bP(130), bQ(57))), j && i - j < 36e5 && (i = j), sessionStorage.setItem(ce(ca(), bV(134), bQ(57)), i)));
            for (b = 0; b <= 7; b++) b > 0 && (c = ch(bV(9), bW(193), bW(9)), b > 1 && (c += b)), a[c] && (d = a[c], e = [d, d.toLowerCase().indexOf(ce(bU(62), bT(96))) > 0 ? ce(bQ(4), bS(18), bP(111)) : ce(bV(9), bT(23), bW(108)), a[c + ch(bV(3), bR(44))] || bT(1), a[c + ch(bV(3), bU(242))] || 0, a[c + ch(bV(3), bT(137))] || 0, f ? f == a[c + ch(bP(-1), bP(46))] : !1], i && (e[0] = ce(d, d.indexOf(bW(53)) >= 0 ? bT(62) : bP(48), bV(62), bU(37), i)), y.push(e), e[5] && (g = !0, e[3] && (e[5] = !1, g = !1)));
            !g && bY(y) > 0 && (h > bY(y) && (h = 1), y[h - 1][5] = !0)
        }
    }

    function cQ(a) {
        function d(a) {
            a = parseInt(a, 10);
            return a >= 10 ? a : ce(0, a)
        }

        a = a || 0;
        var b = Math.floor(a / 3600), c = Math.floor(a / 60);
        a = a - c * 60;
        if (b >= 1) {
            c -= b * 60;
            return ce(b, bT(39), d(c), bQ(36), d(a))
        }
        return ce(d(c), bQ(36), d(a))
    }

    function cP(a, b, c) {
        if (!!a && !!b) {
            var d = ct(b), e, f, g;
            a.width && a.height ? (e = [a.width, a.height], a.tagName && a.tagName.toLowerCase() == bU(54) && (e = ct(a))) : e = ct(a), c == bR(129) ? cw(a, [bW(24), bQ(19), bW(16), ce(50, bV(5)), bP(17), ce(50, bT(3)), bP(36), 0, ce(bT(38), ci(bP(11))), ce(-e[0] / 2, bS(9)), ce(bU(39), ci(bV(21))), ce(-e[1] / 2, bW(17))]) : c == bP(132) ? e[0] / e[1] > d[0] / d[1] ? (f = e[1] * d[0] / e[0] / d[1] * 100, cw(a, [bP(19), bW(25), bR(9), 0, bU(20), ce((100 - f) / 2, bS(-2)), bT(18), ce(100, bW(6)), bS(15), ce(f, bV(5)), bV(40), 0])) : (g = e[0] * d[1] / e[1] / d[0] * 100, cw(a, [bT(21), bQ(19), bT(13), ce((100 - g) / 2, bV(5)), bW(22), 0, bV(20), ce(g, bV(5)), bQ(17), ce(100, bW(6)), bU(39), 0])) : cw(a, [bQ(18), bS(17), bQ(10), 0, bV(21), 0, bP(16), ce(100, bR(-1)), bQ(17), ce(100, bW(6)), bP(36), 0])
        }
    }

    function cO(a) {
        if (a) return a[ce(bT(132), bT(156))];
        return bS(-4)
    }

    function cN(a) {
        var b = {}, c, d, e = bW(4), f = !1, g = 0, h = 0;
        if (!a) return b;
        if (a.nodeType == 1) {
            if (bY(a.attributes) > 0) {
                b[ce(bQ(78), bU(83))] = {};
                for (h = 0; h < bY(a.attributes); h++) {
                    var i = a.attributes.item(h);
                    b[ce(bS(76), bT(82))][i.nodeName.toLowerCase()] = i.nodeValue
                }
            }
        } else if (a.nodeType == 3 || a.nodeType == 4) return a.nodeValue;
        if (a.hasChildNodes()) {
            for (g = 0; g < bY(a.childNodes); g++) {
                c = a.childNodes.item(g), d = c.nodeName.toLowerCase();
                if (c.nodeType == 3 || c.nodeType == 4) e += (c.nodeValue || bW(4)).trim(); else {
                    f = !0;
                    if (typeof b[d] == bT(130)) b[d] = cN(c); else {
                        if (typeof b[d].push == bW(133)) {
                            var j = b[d];
                            b[d] = [], b[d].push(j)
                        }
                        b[d].push(cN(c))
                    }
                }
            }
            f || (b[ce(bU(133), bU(157))] = e)
        }
        return b
    }

    function cM(a) {
        if (!bY(a)) return {};
        var b = 0, c = {};
        while (b < bY(a)) b <= bY(a) && (c[a[b]] = a[++b], b++);
        return c
    }

    function cL(a, b) {
        if (!a) return bT(1);
        typeof b != bT(130) && (a.innerHTML = b);
        return a.innerHTML
    }

    function cK(a, b) {
        !!a && !!b && a.parentNode.insertBefore(b, a)
    }

    function cJ(a, b) {
        !!a && !!b && a.parentNode.insertBefore(b, a.nextSibling)
    }

    function cI(a, b) {
        !!a && !!b && b.parentNode != a && (a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b))
    }

    function cH(a, b) {
        !!a && !!b && b.parentNode != a && a.appendChild(b)
    }

    function cG(a) {
        !a || cw(a, [bS(39), bQ(25)])
    }

    function cF(a) {
        !a || cw(a, [bU(45), bS(90)])
    }

    function cE(a) {
        !!a && !!a.parentNode && a.parentNode.removeChild(a)
    }

    function cD(a, b, c) {
        var d = g.createElement((a ? a : bR(22)).toUpperCase());
        b && (d[ce(bP(77), ci(bS(75)))] = b), cw(d, c);
        return d
    }

    function cC(a) {
        a = a || window.event;
        return a.srcElement || a.target
    }

    function cB(a, b) {
        a = a || window.event;
        var c = a.clientX || (a.changedTouches ? a.changedTouches[0].clientX : 0),
            d = a.clientY || (a.changedTouches ? a.changedTouches[0].clientY : 0), e;
        if (b) {
            e = b.getBoundingClientRect();
            return [c - e.left, d - e.top]
        }
        return [c, d]
    }

    function cA(a) {
        a = a || window.event, a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        return !1
    }

    function cz(a, b, c) {
        if (!!a) for (var d = 0; d < bY(b); d++) cx(a, b[d], c)
    }

    function cy(a, b, c) {
        !a || !b || !c || (a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent(bR(127) + b, c))
    }

    function cx(a, b, c) {
        !a || !b || !c || (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent(bT(131) + b, c) : a[bQ(128) + b] = c, a == g && h.push([b, c]))
    }

    function cw(a, b) {
        if (!!a && !!bY(b)) {
            var c = 0, d = {};
            while (c < bY(b)) c <= bY(b) && (d[b[c]] = b[++c], c++);
            cv(a, d)
        }
    }

    function cv(a, b) {
        if (!!a && !!b) for (var c in b) a.style[c] = b[c]
    }

    function cu(a) {
        if (!a) return [0, 0];
        var b = 0, c = 0;
        if (a && a.offsetParent) while (a) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
        return [b, c]
    }

    function ct(a) {
        if (!a) return [0, 0];
        return [a.offsetWidth, a.offsetHeight]
    }

    function cs(a, b) {
        return cm(cr(a, b))
    }

    function cr(a, b) {
        var c = [], d = !0, e, f;
        if (!a || !b) return c;
        b.indexOf(bU(105)) > 0 && (b = bZ(b, 0, b.indexOf(bV(106))), d = !1), e = cn(a, bS(99));
        for (f = 0; f < bY(e); f++) co(e[f], b, !d) && c.push(e[f]);
        return c
    }

    function cq(a, b) {
        if (!!a) {
            var c = a[ce(bW(82), ci(bQ(77)))].split(bQ(68)), d = bW(4), e = !1, f;
            b.indexOf(bU(105)) > 0 && (b = bZ(b, 0, b.indexOf(bT(104))), e = !0);
            for (f = 0; f < bY(c); f++) e && c[f].indexOf(b) !== 0 ? d += bT(71) + c[f] : !e && c[f] != b && (d += bS(66) + c[f]);
            a[ce(bS(74), ci(bS(75)))] = d.trim()
        }
    }

    function cp(a, b) {
        !a || co(a, b, !1) || (bY(a[ce(bV(81), ci(bQ(77)))]) == 0 ? a[ce(bU(80), ci(bR(76)))] = b : a[ce(bQ(76), ci(bR(76)))] += bR(67) + b)
    }

    function co(a, b, c) {
        if (!a) return !1;
        var d = a[ce(bQ(76), ci(bR(76)))].split(bW(74)), e;
        for (e = 0; e < bY(d); e++) {
            if (c && d[e].indexOf(b) === 0) return !0;
            if (d[e] == b) return !0
        }
        return !1
    }

    function cn(a, b) {
        if (!a || !b) return [];
        return a.getElementsByTagName(b)
    }

    function cm(a) {
        if (bY(a) > 0) return a[0];
        return null
    }

    function cl(a, b) {
        b || (b = g);
        return b.getElementById(a)
    }

    function ck(a) {
        bB[bU(48)].indexOf(ce(bR(11), bT(240), bS(31), bT(17))) > 0 && console && typeof console.log == bQ(34) && console.log(a)
    }

    function cj(a) {
        console && typeof console.error == bW(40) && console.error(a)
    }

    function ci() {
        var a = Array.prototype.slice.call(arguments), b;
        for (b = 0; b < bY(a); b++) a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
        return a.join(bW(4))
    }

    function ch() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bP(237))
    }

    function cg() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bR(234))
    }

    function cf() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bQ(68))
    }

    function ce() {
        var a = Array.prototype.slice.call(arguments);
        return a.join(bR(-3))
    }

    function cd(a, b, c) {
        if (!!a && !!b) {
            var d = new XMLHttpRequest;
            d.withCredentials = !0, d.onreadystatechange = function () {
                this.readyState === 4 && (this.status >= 400 ? c && c() : b(this.responseXML))
            }, d.open(bR(37), a, !0), d.send()
        }
    }

    function cc(a, b, c) {
        if (!!a && !!b) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function () {
                this.readyState === 4 && (this.status >= 400 ? c && c() : b(this.responseText))
            }, d.open(bV(43), a, !0), d.send()
        }
    }

    function cb(a) {
        a && ((new Image).src = a)
    }

    function ca(a) {
        a && (window.top ? window.top.location = a : window.location = a);
        return window.location
    }

    function b_(a, b) {
        a && setTimeout(a, b)
    }

    function b$(a) {
        var b = null;
        try {
            bD && (b = localStorage.getItem(a), b || (b = sessionStorage.getItem(a)))
        } catch (c) {
        }
        b || (b = bS(-4));
        return b
    }

    function bZ(a, b, c) {
        if (a) return a.substring(b, c);
        return bS(-4)
    }

    function bY(a) {
        if (a) return a.length;
        return 0
    }

    function bX() {
        return (new Date).getTime()
    }

    function bW(a) {
        return f[a - 4]
    }

    function bV(a) {
        return f[a - 3]
    }

    function bU(a) {
        return f[a - 2]
    }

    function bT(a) {
        return f[a - 1]
    }

    function bS(a) {
        return f[a + 4]
    }

    function bR(a) {
        return f[a + 3]
    }

    function bQ(a) {
        return f[a + 2]
    }

    function bP(a) {
        return f[a + 1]
    }

    var f = ["", "ad", "%", "is", "fp", "url", "video", "type", "kt", "click", "pause", "error", "left", "px", "player", "pre", "true", "width", "top", "height", "position", "absolute", "/", "post", "volume", "div", "adv", "block", "time", "src", "start", "logo", "vast", "duration", "kvs", "=", "function", "margin", ":", "skip", "get", "bottom", "timeline", "display", "metadata", "related", "href", "text", "html", "?", "fullscreen", "roll", "iframe", "play", "touch", "mouse", "event", "paused", "playing", "rnd", ".", "&", "target", "blank", "api", "id", "visible", "ui", "screen", "advertising", " ", "settings", "data", "right", "hide", "embed", "reporting", "progress", "class", "name", "@", "attributes", "vol", "open", "parent", "hidden", "adzone", "load", "<", ">", "popunder", "false", "loaded", "format", "none", "flv", "controlbar", "content", "document", "float", "key", "started", "full", "*", "mp4", "exit", "mute", "resume", "auto", "down", "[", "]", "flash", "elapsed", "btn", "over", "window", "visibility", "change", "body", "css", "m", "preload", "subtitles", "preview", "screens", "stream", "finished", "muted", "undefined", "on", "#", "preserve", "match", "slot", "selected", "hd", "z", "index", "end", "tracking", "linear", "quartile", "img", "catch", "no", "transition", "string", "ads", "fade", "stop", "waiting", "engine", "protect", "before", "value", "media", "overflow", "out", "referer", "wrapper", "creative", "complete", "code", "unmute", "style", "head", "timeout", "resize", "tooltip", "brand", "clip", "autoplay", "poster", "splash", "native", "ready", "seek", "up", "controls", "move", "link", "sec", "em", "skin", "stopped", "show", "test", "default", "alt", "list", "item", "loading", "background", "playsinline", "replay", "after", "title", "inline", "impression", "offset", "parameters", "first", "third", "file", "remaining", "fill", "frame", "border", "scrolling", "focus", "scroll", "script", "skipped", "normal", "cuepoint", "swf", "lang", "loop", "cuepoints", "finish", "seeking", "a", "level", "vertical", "dragging", "ga", "gtag", "location", "scrolled", "changing", "activated", "deactivated", "changed", "object", "array", "storage", "-", "_", "debug", "redirect", "transparent", "webkit", "adaptive", "ucbrowser", "windows", "mobile", "domain", "through", "view", "mid", "point", "work", "padding", "skippable", "state", "container", "size", "midpoint", "thru", "subscribe", "handshake", "version", "cursor", "pointer", "set", "init", "can", "anchor", "urls", "in", "same", "relative", "context", "menu", "textarea", "ratio", "license", "kind", "en", "thumbnails", "webp", "interval", "count", "image", "blur", "help", "disable", "fixed", "slider", "unload", "only", "close", "flow", "send", "category", "label", "configuration", "http", "white", "dark", "rel", "stylesheet"],
        g = document, h = [], i = cl(a), j = {}, k = {}, l = {}, m = {}, n = {}, o = {}, p, q, r, s, t, u = {}, v, w, x,
        y = [], z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ba, bb, bc, bd,
        be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw = 0, bx, by, bz, bA = -1,
        bB = window[bR(225)], bC = !0, bD = !1, bE = flowplayer.support.autoplay, bF = flowplayer.support.inlineVideo,
        bG = flowplayer.support.flashVideo, bH = flowplayer.support.touch, bI = flowplayer.support.volume, bJ = !1,
        bK = !1, bL, bM,
        bN = [ce(bU(10), ci(bR(11)), ci(bR(89))), ce(bT(9), ci(bT(7)), ci(bW(105))), ce(bS(4), ci(bT(7)), ci(bR(54))), ce(bT(9), ci(bP(5)), ci(bW(189))), ce(bR(5), ci(bU(8)), ci(bP(228))), ce(bV(11), ci(bS(2)), ci(bV(80))), ce(bR(5), ci(bP(5)), ci(bT(128))), ce(bQ(6), ci(bQ(4)), ci(bU(95)), ci(bQ(228))), ce(bS(4), ci(bW(106)), ci(bV(71)), ci(bR(228))), ce(bR(5), ci(bW(106)), ci(bP(67)), ci(bQ(230))), ce(bV(11), ci(bR(12)), ci(bW(55)), ci(bV(157))), ce(bS(4), ci(bU(17)), ci(bW(55)), ci(bP(100))), ce(bT(9), ci(bV(18)), ci(bT(52)), ci(bR(124))), ce(bP(7), ci(bQ(21)), ci(bU(53)), ci(bR(151))), ce(bS(4), ci(bP(22)), ci(bW(55)), ci(bS(97))), ce(bT(9), ci(bP(22)), ci(bU(53)), ci(bU(129))), ce(bT(9), ci(bV(72)), ci(bS(5))), ce(bW(12), ci(bR(66)), ci(bS(182))), ce(bT(9), ci(bW(28)), ci(bP(232))), ce(bR(5), ci(bU(26)), ci(bR(125))), ce(bU(10), ci(bQ(30)), ci(bR(89))), ce(bT(9), ci(bS(28)), ci(bR(8))), ce(bS(4), ci(ce(bU(25), bW(14))), ci(bS(47)), ci(bU(156))), ce(bP(7), ci(ce(bU(25), bW(14))), ci(bV(54)), ci(bT(102))), ce(bV(11), ci(ce(bQ(21), bR(7))), ci(bQ(49)), ci(bS(123))), ce(bS(4), ci(bS(2)), ci(bW(15))), ce(bP(7), ci(bQ(67)), ci(bV(42))), ce(bU(10), ci(bU(71)), ci(bP(10)))];
    typeof String.prototype.trim != bU(38) && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, bW(4))
    }), Array.isArray || (Array.isArray = function (a) {
        return Object.prototype.toString.call(a) === cf(ce(bV(113), bU(236)), ce(ci(bV(238)), bU(113)))
    });
    if (typeof Storage !== bP(128)) try {
        localStorage.setItem(ch(ce(bR(31), bP(13)), bW(191), bR(233)), bV(190)), bD = !0
    } catch (bO) {
    }
    cL(i, bT(1)), e[bQ(73)] == 0 && (e[bT(76)] = bS(87)), e[bW(79)] == 1 && (e[bT(76)] = bT(17));
    for (v in e) typeof e[v] != bU(149) && (e[v] = ce(bS(-4), e[v])), ck(cf(ce(bQ(108), bV(300), bP(110)), v, bR(32), e[v]));
    if (!this[ce(bS(30), bR(11))]) {
        v = e[bS(180)];
        if (!v || v.indexOf(bT(299)) < 0 || v.indexOf(ce(bU(24), bW(26))) < 0) if (b) {
            if (!v || v.indexOf(ce(bT(61), bQ(118))) <= 0) e[bP(183)] == 2 ? v = ce(bR(296), bS(56), bR(117)) : v = ce(bW(304), bP(59), bV(123));
            v = ce(bZ(b, 0, b.lastIndexOf(bT(23))), bU(24), bT(185), bP(21), v)
        }
        D = cD(bQ(179)), D.setAttribute(bQ(299), bU(304)), D.setAttribute(bP(6), ce(bT(48), bT(23), bW(124))), D.setAttribute(bS(42), v), cH(cm(cn(g, bW(170))), D)
    }
    e[ch(bU(155), bU(29))] && (B = cD(bV(55)), cx(B, bT(88), function () {
        bK = !0
    }), B[bS(15)] = ce(1, bU(15)), B[bP(16)] = ce(1, bR(10)), B[bT(66)] = ch(bR(145), bR(49)), B[ce(bT(79), ci(bQ(77)))] = cg(bP(147), bS(48)), B[bW(33)] = ce(e[ch(bS(149), bU(29))], bV(52), ch(bP(68), bW(69)), bP(34), Math.random(), bS(57), ch(bQ(84)), bV(38), Math.random()), cw(B, [bS(16), bR(18), bU(14), ce(-10, bT(14)), bU(20), ce(-10, bQ(11))]), cH(i, B)), A = {
        container: function () {
            return i
        }, listen: function (a, b) {
            if (!a || !b || typeof b != bS(32)) return this;
            this.a || (this.a = {}), this.a[a] || (this.a[a] = []), this.a[a].push(b);
            return this
        }, handler: function (a) {
            if (!a || typeof a != bR(33)) return this;
            this.b || (this.b = []), this.b.push(a);
            return this
        }, handle: function (a, b) {
            var c, d, e, f;
            if (this.b) for (d = 0; d < bY(this.b); d++) try {
                f = this.b[d](a, b), f && (e = f)
            } catch (g) {
            }
            if (this.a) {
                c = this.a[a];
                if (c) for (d = 0; d < bY(c); d++) try {
                    f = c[d](b), f && (e = f)
                } catch (g) {
                }
            }
            return e
        }, play: function (a) {
            C && ($ ? this.handle(bN[11]) : _ ? A.handle(bN[23]) : a ? (typeof a == bT(148) && (y = [[a, a.indexOf(ce(bW(64), bW(99))) > 0 ? ce(bR(3), bQ(20), bQ(110)) : ce(bT(7), bW(26), bS(100)), bU(2), 0, 0, !0]], bv = y[0]), C.playing ? C.pause(cU()) : cU(), cT()) : C.ready ? C.play() : C.load())
        }, pause: function () {
            C && C.pause()
        }, toggle: function () {
            C && (cq(i, cg(bV(6), bS(53))), C.toggle())
        }, skip_preroll: function () {
            this.handle(bN[12])
        }, skip_postroll: function () {
            this.handle(bN[15])
        }, fullscreen: function () {
            C && C.fullscreen()
        }, volume: function (a) {
            if (C) {
                a && C.volume(a);
                return C.volumeLevel
            }
            return 1
        }, mute: function (a) {
            C && C.mute(a)
        }, muted: function () {
            if (C) return C.muted;
            return !1
        }, seek: function (a) {
            C && C.seek(a)
        }, unload: function () {
            if (C) {
                var a = cs(i, cg(bQ(2), bT(153)));
                a && a.canPlayType && (a.autoplay = !1, a.preload = bV(97), a.src = null), C.disable(), C.shutdown()
            }
            if (bY(h)) for (var b = 0; b < bY(h); b++) cy(g, h[b][0], h[b][1]);
            cG(X)
        }, fpapi: function () {
            return C
        }
    }, A.conf = e, this[ce(bW(38), bW(18))] || (this[ce(bR(31), bU(16))] = {}), this[ce(bW(38), bQ(12))][a] && this[ce(bP(33), bT(15))][a].unload(), this[ce(bR(31), bU(16))][a] = A, i && b_(dk, 0);
    return A
}