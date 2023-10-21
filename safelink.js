// directlink
var directlink = "https://irawannnnria85.app.link/e/directlink"

// click body 
var valued = true

function addEvent(obj, eventName, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + eventName, func);
    } else if (obj.addEventListener) {
        obj.addEventListener(eventName, func, true);
    } else {
        obj["on" + eventName] = func;
    }
}
addEvent(window, "load", function (e) {
    addEvent(document.body, "click", function (e) {
        if (valued) {
            window.open(directlink);
            window.focus();
            valued = false
            setTimeout(function () {
                valued = true
            }, 30 * 1000);
        }
    });
});

/* anti ctrl */
shortcut = {
    all_shortcuts: {},
    add: function (a, b, c) {
        var d = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]);
        else c = d;
        d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)), a = a.toLowerCase(), e = function (d) {
            d = d || window.event;
            if (c.disable_in_input) {
                var e;
                d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
                if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return
            }
            d.keyCode ? code = d.keyCode : d.which && (code = d.which), e = String.fromCharCode(code)
                .toLowerCase(), 188 == code && (e = ","), 190 == code && (e = ".");
            var f = a.split("+"),
                g = 0,
                h = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                i = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                j = !1,
                l = !1,
                m = !1,
                n = !1,
                o = !1,
                p = !1,
                q = !1,
                r = !1;
            d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
            for (var s = 0; k = f[s], s < f.length; s++) "ctrl" == k || "control" == k ? (g++, m = !0) : "shift" == k ? (g++, j = !0) : "alt" == k ? (g++, o = !0) : "meta" == k ? (g++, q = !0) : 1 < k.length ? i[k] == code && g++ : c.keycode ? c.keycode == code && g++ : e == k ? g++ : h[e] && d.shiftKey && (e = h[e], e == k && g++);
            if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate)) return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
        }, this.all_shortcuts[a] = {
            callback: e,
            target: d,
            event: c.type
        }, d.addEventListener ? d.addEventListener(c.type, e, !1) : d.attachEvent ? d.attachEvent("on" + c.type, e) : d["on" + c.type] = e
    },
    remove: function (a) {
        var a = a.toLowerCase(),
            b = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (b) {
            var a = b.event,
                c = b.target,
                b = b.callback;
            c.detachEvent ? c.detachEvent("on" + a, b) : c.removeEventListener ? c.removeEventListener(a, b, !1) : c["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function () {
    location.replace(directlink);
});

/* inspect element */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n)
                .length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64._utf8_decode(output);
        return output;
    },
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
var encode = document.getElementById('encode'),
    decode = document.getElementById('decode'),
    output = document.getElementById('output'),
    input = document.getElementById('input');
var User_ID = "";
var protected_links = "";
var a_to_va = 0;
var a_to_vb = 0;
var a_to_vc = "";

function auto_safelink() {
    auto_safeconvert();
}

function auto_safeconvert() {
    var a_to_vd = window.location.hostname;
    if (protected_links != "" && !protected_links.match(a_to_vd)) {
        protected_links += ", " + a_to_vd;
    } else if (protected_links == "") {
        protected_links = a_to_vd;
    }
    var a_to_ve = "";
    var a_to_vf = new Array();
    var a_to_vg = 0;
    a_to_ve = document.getElementsByTagName("a");
    a_to_va = a_to_ve.length;
    a_to_vf = a_to_fa();
    a_to_vg = a_to_vf.length;
    var a_to_vh = false;
    var j = 0;
    var a_to_vi = "";
    for (var i = 0; i < a_to_va; i++) {
        a_to_vh = false;
        j = 0;
        while (a_to_vh == false && j < a_to_vg) {
            a_to_vi = a_to_ve[i].href;
            if (a_to_vi.match(a_to_vf[j]) || !a_to_vi || !a_to_vi.match("http")) {
                a_to_vh = true;
            }
            j++;
        }
        if (a_to_vh == false) {
            var encryptedUrl = Base64.encode(a_to_vi);
            var x = Math.floor((Math.random() * 4) + 1);
            var xxx = null;
            if (x == "1") {
                xxx = "the-way-to-start-business-at-home.html"
            }
            if (x == "2") {
                xxx = "10-tips-for-start-small-business-startup.html"
            }
            if (x == "3") {
                xxx = "advantages-of-being-home-business-owner.html"
            }
            if (x == "4") {
                xxx = "practice-environmental-qwareness-to-our.html"
            }
            a_to_ve[i].href = "https://houtube.eu.org/safelink/" + xxx + "?url=" + encryptedUrl;
            a_to_ve[i].rel = "nofollow";
            a_to_vb++;
            a_to_vc += i + ":::" + a_to_ve[i].href + "\n";
        }
    }
    var a_to_vj = document.getElementById("anonyminized");
    var a_to_vk = document.getElementById("found_links");
    if (a_to_vj) {
        a_to_vj.innerHTML += a_to_vb;
    }
    if (a_to_vk) {
        a_to_vk.innerHTML += a_to_va;
    }
}

function a_to_fa() {
    var a_to_vf = new Array();
    protected_links = protected_links.replace(" ", "");
    a_to_vf = protected_links.split(",");
    return a_to_vf;
}