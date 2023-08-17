!(function (t) {
    "function" == typeof define && define.amd ? define(t) : t();
})(function () {
    "use strict";
    function t(t, e) {
        return (
            (function (t) {
                if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    (o = !0), (i = t);
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            })(t, e) ||
            n(t, e) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function e(t) {
        return (
            (function (t) {
                if (Array.isArray(t)) return r(t);
            })(t) ||
            (function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            })(t) ||
            n(t) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function n(t, e) {
        if (t) {
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
        }
    }
    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function o(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    var i,
        a,
        c,
        u = o(
            ((function (t, e) {
                /*!
                 * clipboard.js v2.0.6
                 * https://clipboardjs.com/
                 *
                 * Licensed MIT © Zeno Rocha
                 */
                var n;
                (n = function () {
                    return (function (t) {
                        var e = {};
                        function n(r) {
                            if (e[r]) return e[r].exports;
                            var o = (e[r] = { i: r, l: !1, exports: {} });
                            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
                        }
                        return (
                            (n.m = t),
                            (n.c = e),
                            (n.d = function (t, e, r) {
                                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
                            }),
                            (n.r = function (t) {
                                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                            }),
                            (n.t = function (t, e) {
                                if ((1 & e && (t = n(t)), 8 & e)) return t;
                                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                                var r = Object.create(null);
                                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                                    for (var o in t)
                                        n.d(
                                            r,
                                            o,
                                            function (e) {
                                                return t[e];
                                            }.bind(null, o)
                                        );
                                return r;
                            }),
                            (n.n = function (t) {
                                var e =
                                    t && t.__esModule
                                        ? function () {
                                              return t.default;
                                          }
                                        : function () {
                                              return t;
                                          };
                                return n.d(e, "a", e), e;
                            }),
                            (n.o = function (t, e) {
                                return Object.prototype.hasOwnProperty.call(t, e);
                            }),
                            (n.p = ""),
                            n((n.s = 6))
                        );
                    })([
                        function (t, e) {
                            t.exports = function (t) {
                                var e;
                                if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
                                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                                    var n = t.hasAttribute("readonly");
                                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), (e = t.value);
                                } else {
                                    t.hasAttribute("contenteditable") && t.focus();
                                    var r = window.getSelection(),
                                        o = document.createRange();
                                    o.selectNodeContents(t), r.removeAllRanges(), r.addRange(o), (e = r.toString());
                                }
                                return e;
                            };
                        },
                        function (t, e) {
                            function n() {}
                            (n.prototype = {
                                on: function (t, e, n) {
                                    var r = this.e || (this.e = {});
                                    return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this;
                                },
                                once: function (t, e, n) {
                                    var r = this;
                                    function o() {
                                        r.off(t, o), e.apply(n, arguments);
                                    }
                                    return (o._ = e), this.on(t, o, n);
                                },
                                emit: function (t) {
                                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                                    return this;
                                },
                                off: function (t, e) {
                                    var n = this.e || (this.e = {}),
                                        r = n[t],
                                        o = [];
                                    if (r && e) for (var i = 0, a = r.length; i < a; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                                    return o.length ? (n[t] = o) : delete n[t], this;
                                },
                            }),
                                (t.exports = n),
                                (t.exports.TinyEmitter = n);
                        },
                        function (t, e, n) {
                            var r = n(3),
                                o = n(4);
                            t.exports = function (t, e, n) {
                                if (!t && !e && !n) throw new Error("Missing required arguments");
                                if (!r.string(e)) throw new TypeError("Second argument must be a String");
                                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                                if (r.node(t))
                                    return (function (t, e, n) {
                                        return (
                                            t.addEventListener(e, n),
                                            {
                                                destroy: function () {
                                                    t.removeEventListener(e, n);
                                                },
                                            }
                                        );
                                    })(t, e, n);
                                if (r.nodeList(t))
                                    return (function (t, e, n) {
                                        return (
                                            Array.prototype.forEach.call(t, function (t) {
                                                t.addEventListener(e, n);
                                            }),
                                            {
                                                destroy: function () {
                                                    Array.prototype.forEach.call(t, function (t) {
                                                        t.removeEventListener(e, n);
                                                    });
                                                },
                                            }
                                        );
                                    })(t, e, n);
                                if (r.string(t))
                                    return (function (t, e, n) {
                                        return o(document.body, t, e, n);
                                    })(t, e, n);
                                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                            };
                        },
                        function (t, e) {
                            (e.node = function (t) {
                                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
                            }),
                                (e.nodeList = function (t) {
                                    var n = Object.prototype.toString.call(t);
                                    return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
                                }),
                                (e.string = function (t) {
                                    return "string" == typeof t || t instanceof String;
                                }),
                                (e.fn = function (t) {
                                    return "[object Function]" === Object.prototype.toString.call(t);
                                });
                        },
                        function (t, e, n) {
                            var r = n(5);
                            function o(t, e, n, r, o) {
                                var a = i.apply(this, arguments);
                                return (
                                    t.addEventListener(n, a, o),
                                    {
                                        destroy: function () {
                                            t.removeEventListener(n, a, o);
                                        },
                                    }
                                );
                            }
                            function i(t, e, n, o) {
                                return function (n) {
                                    (n.delegateTarget = r(n.target, e)), n.delegateTarget && o.call(t, n);
                                };
                            }
                            t.exports = function (t, e, n, r, i) {
                                return "function" == typeof t.addEventListener
                                    ? o.apply(null, arguments)
                                    : "function" == typeof n
                                    ? o.bind(null, document).apply(null, arguments)
                                    : ("string" == typeof t && (t = document.querySelectorAll(t)),
                                      Array.prototype.map.call(t, function (t) {
                                          return o(t, e, n, r, i);
                                      }));
                            };
                        },
                        function (t, e) {
                            if ("undefined" != typeof Element && !Element.prototype.matches) {
                                var n = Element.prototype;
                                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
                            }
                            t.exports = function (t, e) {
                                for (; t && 9 !== t.nodeType; ) {
                                    if ("function" == typeof t.matches && t.matches(e)) return t;
                                    t = t.parentNode;
                                }
                            };
                        },
                        function (t, e, n) {
                            n.r(e);
                            var r = n(0),
                                o = n.n(r),
                                i =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (t) {
                                              return typeof t;
                                          }
                                        : function (t) {
                                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                          },
                                a = (function () {
                                    function t(t, e) {
                                        for (var n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                                        }
                                    }
                                    return function (e, n, r) {
                                        return n && t(e.prototype, n), r && t(e, r), e;
                                    };
                                })(),
                                c = (function () {
                                    function t(e) {
                                        !(function (t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                        })(this, t),
                                            this.resolveOptions(e),
                                            this.initSelection();
                                    }
                                    return (
                                        a(t, [
                                            {
                                                key: "resolveOptions",
                                                value: function () {
                                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                    (this.action = t.action), (this.container = t.container), (this.emitter = t.emitter), (this.target = t.target), (this.text = t.text), (this.trigger = t.trigger), (this.selectedText = "");
                                                },
                                            },
                                            {
                                                key: "initSelection",
                                                value: function () {
                                                    this.text ? this.selectFake() : this.target && this.selectTarget();
                                                },
                                            },
                                            {
                                                key: "selectFake",
                                                value: function () {
                                                    var t = this,
                                                        e = "rtl" == document.documentElement.getAttribute("dir");
                                                    this.removeFake(),
                                                        (this.fakeHandlerCallback = function () {
                                                            return t.removeFake();
                                                        }),
                                                        (this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
                                                        (this.fakeElem = document.createElement("textarea")),
                                                        (this.fakeElem.style.fontSize = "12pt"),
                                                        (this.fakeElem.style.border = "0"),
                                                        (this.fakeElem.style.padding = "0"),
                                                        (this.fakeElem.style.margin = "0"),
                                                        (this.fakeElem.style.position = "absolute"),
                                                        (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                                                    var n = window.pageYOffset || document.documentElement.scrollTop;
                                                    (this.fakeElem.style.top = n + "px"),
                                                        this.fakeElem.setAttribute("readonly", ""),
                                                        (this.fakeElem.value = this.text),
                                                        this.container.appendChild(this.fakeElem),
                                                        (this.selectedText = o()(this.fakeElem)),
                                                        this.copyText();
                                                },
                                            },
                                            {
                                                key: "removeFake",
                                                value: function () {
                                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
                                                        this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                                                },
                                            },
                                            {
                                                key: "selectTarget",
                                                value: function () {
                                                    (this.selectedText = o()(this.target)), this.copyText();
                                                },
                                            },
                                            {
                                                key: "copyText",
                                                value: function () {
                                                    var t = void 0;
                                                    try {
                                                        t = document.execCommand(this.action);
                                                    } catch (e) {
                                                        t = !1;
                                                    }
                                                    this.handleResult(t);
                                                },
                                            },
                                            {
                                                key: "handleResult",
                                                value: function (t) {
                                                    this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
                                                },
                                            },
                                            {
                                                key: "clearSelection",
                                                value: function () {
                                                    this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                                                },
                                            },
                                            {
                                                key: "destroy",
                                                value: function () {
                                                    this.removeFake();
                                                },
                                            },
                                            {
                                                key: "action",
                                                set: function () {
                                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                                    if (((this._action = t), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                                },
                                                get: function () {
                                                    return this._action;
                                                },
                                            },
                                            {
                                                key: "target",
                                                set: function (t) {
                                                    if (void 0 !== t) {
                                                        if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                                        this._target = t;
                                                    }
                                                },
                                                get: function () {
                                                    return this._target;
                                                },
                                            },
                                        ]),
                                        t
                                    );
                                })(),
                                u = n(1),
                                l = n.n(u),
                                s = n(2),
                                f = n.n(s),
                                d =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (t) {
                                              return typeof t;
                                          }
                                        : function (t) {
                                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                          },
                                p = (function () {
                                    function t(t, e) {
                                        for (var n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                                        }
                                    }
                                    return function (e, n, r) {
                                        return n && t(e.prototype, n), r && t(e, r), e;
                                    };
                                })(),
                                h = (function (t) {
                                    function e(t, n) {
                                        !(function (t, e) {
                                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                        })(this, e);
                                        var r = (function (t, e) {
                                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
                                        })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                                        return r.resolveOptions(n), r.listenClick(t), r;
                                    }
                                    return (
                                        (function (t, e) {
                                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })),
                                                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                                        })(e, t),
                                        p(
                                            e,
                                            [
                                                {
                                                    key: "resolveOptions",
                                                    value: function () {
                                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                        (this.action = "function" == typeof t.action ? t.action : this.defaultAction),
                                                            (this.target = "function" == typeof t.target ? t.target : this.defaultTarget),
                                                            (this.text = "function" == typeof t.text ? t.text : this.defaultText),
                                                            (this.container = "object" === d(t.container) ? t.container : document.body);
                                                    },
                                                },
                                                {
                                                    key: "listenClick",
                                                    value: function (t) {
                                                        var e = this;
                                                        this.listener = f()(t, "click", function (t) {
                                                            return e.onClick(t);
                                                        });
                                                    },
                                                },
                                                {
                                                    key: "onClick",
                                                    value: function (t) {
                                                        var e = t.delegateTarget || t.currentTarget;
                                                        this.clipboardAction && (this.clipboardAction = null),
                                                            (this.clipboardAction = new c({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }));
                                                    },
                                                },
                                                {
                                                    key: "defaultAction",
                                                    value: function (t) {
                                                        return y("action", t);
                                                    },
                                                },
                                                {
                                                    key: "defaultTarget",
                                                    value: function (t) {
                                                        var e = y("target", t);
                                                        if (e) return document.querySelector(e);
                                                    },
                                                },
                                                {
                                                    key: "defaultText",
                                                    value: function (t) {
                                                        return y("text", t);
                                                    },
                                                },
                                                {
                                                    key: "destroy",
                                                    value: function () {
                                                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                                    },
                                                },
                                            ],
                                            [
                                                {
                                                    key: "isSupported",
                                                    value: function () {
                                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                                            e = "string" == typeof t ? [t] : t,
                                                            n = !!document.queryCommandSupported;
                                                        return (
                                                            e.forEach(function (t) {
                                                                n = n && !!document.queryCommandSupported(t);
                                                            }),
                                                            n
                                                        );
                                                    },
                                                },
                                            ]
                                        ),
                                        e
                                    );
                                })(l.a);
                            function y(t, e) {
                                var n = "data-clipboard-" + t;
                                if (e.hasAttribute(n)) return e.getAttribute(n);
                            }
                            e.default = h;
                        },
                    ]).default;
                }),
                    (t.exports = n());
            })(
                (a = {
                    path: i,
                    exports: {},
                    require: function (t, e) {
                        return (function () {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                        })(null == e && a.path);
                    },
                }),
                a.exports
            ),
            a.exports)
        ),
        l = document.querySelector(".destination"),
        s = document.querySelector(".origin"),
        f = document.querySelector(".process"),
        d = document.querySelector(".slider"),
        p = function () {
            (d.closest(".syllableCount").querySelector("span").textContent = d.value + " sílaba" + (d.value > 1 ? "s" : "")), (c = d.value);
        };
    d.addEventListener("change", p), p();
    var h = new u(".btn--copy");
    h.on("success", function (t) {
        t.trigger.classList.add("success");
    }),
        h.on("error", function (t) {
            t.trigger.classList.add("error");
        });
        //create a function that will be used in the frontend. This function is a form that insert new words in the object.entries

        function addWord(){
            var word = document.getElementById("word").value;
            var syllable = document.getElementById("syllable").value;
            var type = document.getElementById("type").value;
            var meaning = document.getElementById("meaning").value;
            var example = document.getElementById("example").value;
            var newWord = [syllable, type, meaning, example];
            if (word === "" || syllable === "" || type === "" || meaning === "" || example === ""){
                alert("Por favor, preencha todos os campos.");
            } else {
                if (word in Object.entries){
                    alert("Essa palavra já existe.");
                } else {
                    Object.entries[word] = newWord;
                    alert("Palavra adicionada com sucesso!");
                }
            }
        }


    Object.entries({
        cultura: [
            ["A", "ba", "po", "ru"],
            ["A", "cli", "ma", "ção"],
            ["An", "gé", "li", "ca"],
            ["A", "ni", "ta", "Mal", "fa", "tti"],
            ["An", "tro", "po", "fa", "gia"],
            ["Ar", "ri", "go"],
            ["Ar", "te"],
            ["Au", "gus", "ta"],
            ["Ava", "nhan", "da", "va"],
            ["Ba", "la", "da"],
            ["Ba", "ta", "ta"],
            ["Bat", "man"],
            ["Bi", "bi"],
            ["Bo", "tâ", "ni", "co"],
            ["Ca", "lix", "to"],
            ["Cam", "pos"],
            ["Ce", "cí", "lia"],
            ["Chá"],
            ["Con", "cre", "ta"],
            ["Con", "so", "la", "ção"],
            ["Co", "pan"],
            ["Co", "rin", "thi", "ans"],
            ["Cri", "o", "lo"],
            ["Gui", "a", "cu", "í"],
            ["Hi", "gi", "e", "nó", "po", "lis"],
            ["I", "bi", "ra", "pu", "era"],
            ["In", "de", "pen", "dên", "cia"],
            ["I", "pi", "ran", "ga"],
            ["I", "tá", "lia"],
            ["I", "ta", "pu", "ra"],
            ["Ju", "ven", "tus"],
            ["La", "er", "te"],
            ["Lar", "go"],
            ["Le", "nk"],
            ["Li", "ber", "da", "de"],
            ["Li", "na", "Bo", "Bar", "di"],
            ["Li", "ra", "Pau", "lis", "ta", "na"],
            ["Luz"],
            ["Ma", "ri", "a", "na"],
            ["Mar", "ti", "ne", "lli"],
            ["Ma", "ta", "raz", "zo"],
            ["Mo", "der", "nis", "ta"],
            ["Mo", "e", "ma"],
            ["Mo", "o", "ca"],
            ["Mu", "tan", "tes"],
            ["O", "be", "lis", "co"],
            ["O", "ca"],
            ["Os", "car", "Frei", "re"],
            ["Pa", "ca", "em", "bu"],
            ["Pa", "gu"],
            ["Pal", "mei", "ras"],
            ["Pat", "teo"],
            ["Pau", "li", "céia"],
            ["Pau", "lis", "ta‎"],
            ["Per", "di", "zes"],
            ["Pig", "na", "ta", "ri"],
            ["Pi", "na", "co", "te", "ca"],
            ["Pin", "hei", "ros"],
            ["Pom", "peia"],
            ["Por", "tu", "gue", "sa"],
            ["Ra", "ja"],
            ["Ra", "ja", "man", "nar"],
            ["Re", "bou", "ças"],
            ["Re", "pú", "bli", "ca"],
            ["Re", "ti", "ran", "tes"],
            ["Ri", "ta"],
            ["Ro", "ck"],
            ["Roo", "se", "velt"],
            ["San", "ta"],
            ["Sé"],
            ["Su", "ma", "ré"],
            ["Tar", "si", "la"],
            ["Tel", "les"],
            ["Ti", "tãs"],
            ["To", "mie", "Oh", "ta", "ke"],
            ["Tria", "non"],
            ["Tu", "cu", "ru", "vi"],
            ["Vi", "lla", "Lo", "bos"],
            ["Vol", "pi"],
            ["Xê", "pa"],
        ],
        bioma: [
            ["A", "na", "na", "í"],
            ["An", "do", "ri", "nha"],
            ["A", "nhan", "ga", "ba", "ú"],
            ["A", "ra", "pon", "ga"],
            ["A", "rau", "cá", "ria"],
            ["A", "ri", "can", "du", "va"],
            ["A", "sa", "bran", "ca"],
            ["A", "tlân", "ti", "ca"],
            ["A", "vo", "an", "te"],
            ["Bei", "ja", "flor"],
            ["Bem", "te", "vi"],
            ["Be", "sou", "rin", "ho"],
            ["Bi", "co", "de", "la", "cre"],
            ["Bi", "guá"],
            ["Bi", "gua", "tin", "ga"],
            ["Bra", "sil"],
            ["Cam", "ba", "ci", "ca"],
            ["Ca", "ná", "rio"],
            ["Ca", "ra", "ca", "rá"],
            ["Car", "deal"],
            ["Cer", "ra", "do"],
            ["Co", "lei", "rin", "ho"],
            ["Co", "ru", "ja"],
            ["Gar", "ça"],
            ["Gua", "ra", "ná"],
            ["Gua", "ra", "pi", "ran", "ga"],
            ["I", "pê", "A", "mar", "elo"],
            ["Ipi", "ran", "ga"],
            ["I", "re", "rê"],
            ["I", "to", "ro", "ró"],
            ["Ja", "ça", "nã"],
            ["Ja", "cu", "Gua", "çu"],
            ["Jo", "ão", "de", "bar", "ro"],
            ["Ju", "ru", "vi", "ara"],
            ["La", "va", "dei", "ra", "Mas", "ca", "ra", "da"],
            ["Mar"],
            ["Ma", "ra", "ca", "nã", "Pe", "que", "na"],
            ["Ma", "ri", "qui", "ta"],
            ["Mar", "tim"],
            ["Ma", "ta"],
            ["Nei", "nei"],
            ["Pal", "mei", "ra", "Je", "ri", "vá"],
            ["Pa", "pa", "gai", "o"],
            ["Pa", "vão"],
            ["Pei", "ti", "ca"],
            ["Pe", "ri", "qui", "tão", "Ma", "ra", "ca", "nã"],
            ["Pi", "ca", "Pau"],
            ["Pin", "tas", "sil", "go"],
            ["Pi", "tan", "guei", "ra"],
            ["Pi", "ti", "gua", "ri"],
            ["Pomb", "o"],
            ["Qua", "res", "mei", "ra"],
            ["Que", "ro", "Que", "ro"],
            ["Qui", "ri", "Qui", "ri"],
            ["Ri", "bei", "rão"],
            ["Ri", "sa", "din", "ha"],
            ["Ro", "lin", "ha"],
            ["Sa", "biá"],
            ["Saí"],
            ["San", "ha", "çu"],
            ["Sa", "va", "cu"],
            ["Ser", "ra"],
            ["So", "co", "zin", "ho"],
            ["Sui", "ri", "ri"],
            ["Ta", "man", "dua", "teí"],
            ["Tan", "ga", "rá"],
            ["Te", "sou", "ra"],
            ["Ti", "co", "Ti", "co"],
            ["Tiê"],
            ["Ti", "e", "tê"],
            ["Ti", "ri", "ba"],
            ["Trin", "ca", "Fer", "ro"],
            ["Tu", "ca", "no"],
            ["Tu", "im"],
        ],
    }).forEach(function (e) {
        var n = t(e, 2),
            r = n[0],
            o = n[1],
            i = document.createElement("aside");
        (i.textContent = r),
            s.appendChild(i),
            o.forEach(function (t) {
                var e = document.createElement("div");
                (e.className = "container"), (e.innerHTML = '<span class="word" data-syllables=\''.concat(JSON.stringify(t), "'>").concat(t.join(""), "</span>")), s.appendChild(e);
            });
    });
    var y = function () {
        [l, s, f].forEach(function (t) {
            var e = t.closest(".section").querySelector(".actions");
            e.classList.remove("enabled"), t.textContent.trim().length && e.classList.add("enabled");
        });
    };
    y();
    var m = s.querySelectorAll(".word"),
        v = !1,
        b = function (t, e) {
            var n = { x: e.first.left - e.last.left, y: e.first.top - e.last.top };
            t.animate([{ transform: "scale(1,1) translate(".concat(n.x, "px, ").concat(n.y, "px)") }, { transform: "scale(1,1) translate(0, 0)" }], { duration: 300, easing: "ease" }).onfinish = function () {
                return (v = !1);
            };
        },
        g = function (t) {
            var e,
                n,
                r = Math.random(),
                o = t.closest(".container"),
                i = t.getBoundingClientRect();
            (v = !0),
                (o.dataset.id = r),
                (t.dataset.id = r),
                (o.style.height = "".concat(t.offsetHeight, "px")),
                (o.style.width = "".concat(t.offsetWidth, "px")),
                (e = { top: i.top, left: i.left }),
                l.insertAdjacentElement("beforeend", t),
                (n = { top: (i = t.getBoundingClientRect()).top, left: i.left }),
                b(t, { first: e, last: n });
        },
        S = function (t) {
            var n,
                r,
                o = t.dataset.id,
                i = s.querySelector('[data-id="'.concat(o, '"]')),
                a = e(l.querySelectorAll(".word")).filter(function (e) {
                    return e !== t;
                }),
                c = t.getBoundingClientRect();
            (v = !0),
                (n = { top: c.top, left: c.left }),
                a.forEach(function (t) {
                    var e = t.getBoundingClientRect();
                    t.__first = { top: e.top, left: e.left };
                }),
                i.insertAdjacentElement("beforeend", t),
                (r = { top: (c = t.getBoundingClientRect()).top, left: c.left }),
                a.forEach(function (t) {
                    var e = t.getBoundingClientRect();
                    t.__last = { top: e.top, left: e.left };
                }),
                b(t, { first: n, last: r }),
                a.forEach(function (t) {
                    return b(t, { first: t.__first, last: t.__last });
                }),
                (i.style.height = ""),
                (i.style.width = ""),
                i.removeAttribute("data-id"),
                t.removeAttribute("data-id");
        };
    m.forEach(function (t) {
        var e = function () {
            v || (t.closest(".container") ? g(t) : S(t), y());
        };
        t.addEventListener("mouseup", e), t.addEventListener("touchend", e);
    });
    var E = function () {
        m.forEach(function (t) {
            if (t.closest(".container")) return !1;
            S(t);
        }),
            (f.querySelector(".result").innerHTML = ""),
            y();
    };
    document.querySelector(".btn--clear").addEventListener("click", E);
    document.querySelector(".btn--random").addEventListener("click", function (t) {
        return (function (t) {
            t.preventDefault(), E();
            var n = k(e(document.querySelectorAll(".container")));
            (n.length = 2),
                n.forEach(function (t) {
                    return g(t.querySelector(".word"));
                }),
                y();
        })(t);
    });
    document.querySelector(".btn--all").addEventListener("click", function (t) {
        return (function (t) {
            t.preventDefault(),
                E(),
                document.querySelectorAll(".container").forEach(function (t) {
                    return g(t.querySelector(".word"));
                }),
                y();
        })(t);
    });
    var k = function (t) {
            return t
                .map(function (t) {
                    return { sort: Math.random(), value: t };
                })
                .sort(function (t, e) {
                    return t.sort - e.sort;
                })
                .map(function (t) {
                    return t.value;
                });
        },
        A = function () {
            var t = 1;
            !(function n() {
                var r;
                !(function () {
                    var t = [];
                    for (
                        l.querySelectorAll(".word").forEach(function (n) {
                            var r = JSON.parse(n.dataset.syllables);
                            t = [].concat(e(t), e(r));
                        });
                        t.length < c;

                    )
                        t = [].concat(e(t), e(t));
                    var n = k(t);
                    (n.length = c), (n = (n = n.join("").toLowerCase()).charAt(0).toUpperCase() + n.slice(1)), (f.querySelector(".result").textContent = n);
                })(),
                    (t < 10 ||
                        ((r = !1),
                        l.querySelectorAll(".word").forEach(function (t) {
                            t.textContent.toLowerCase() == f.querySelector(".result").textContent.toLowerCase() && (r = !0), l.querySelectorAll(".word").length <= 1 && JSON.parse(t.dataset.syllables).length <= 1 && (r = !1);
                        }),
                        r)) &&
                        (t++, setTimeout(n, 50));
            })();
        };
    document.querySelector(".btn--remix").addEventListener("click", function () {
        A(), (document.querySelector(".btn--copy").className = "btn btn--copy"), y();
    });
});
//# sourceMappingURL=main.js.map
