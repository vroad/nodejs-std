(function (console) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.lastIndexOf = function(a,obj,i) {
	var len = a.length;
	if(i >= len) i = len - 1; else if(i < 0) i += len;
	while(i >= 0) {
		if(a[i] === obj) return i;
		i--;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var ImportAll = function() { };
$hxClasses["ImportAll"] = ImportAll;
ImportAll.__name__ = ["ImportAll"];
ImportAll.main = function() {
	exports.haxe_HttpEncoding = haxe_HttpEncoding;
	exports.haxe_io_Bytes = haxe_io_Bytes;
	exports.haxe_io_BytesBuffer = haxe_io_BytesBuffer;
	exports.haxe_io_BytesData = haxe_io_BytesData;
	exports.haxe_io_BytesInput = haxe_io_BytesInput;
	exports.haxe_io_StringInput = haxe_io_StringInput;
	exports.haxe_Json = haxe_Json;
	exports.js_node_Connect = js_node_Connect;
	exports.js_node_Cookies = js_node_Cookies;
	exports.js_node_EveryAuth = js_node_EveryAuth;
	exports.js_node_Express = js_node_Express;
	exports.js_node_FacebookClient = js_node_FacebookClient;
	exports.js_node_Mime = js_node_Mime;
	exports.js_node_MongoDb = js_node_MongoDb;
	exports.js_node_MongoDbCollection = js_node_MongoDbCollection;
	exports.js_node_MongoDbConnection = js_node_MongoDbConnection;
	exports.js_node_MongoDbCursor = js_node_MongoDbCursor;
	exports.js_node_MongoDBTypes = js_node_MongoDBTypes;
	exports.js_node_NodeCanvasElement = js_node_NodeCanvasElement;
	exports.js_node_NodeCanvasFont = js_node_NodeCanvasFont;
	exports.js_node_NodeCanvasImage = js_node_NodeCanvasImage;
	exports.js_node_NodeCanvasRenderingContext2D = js_node_NodeCanvasRenderingContext2D;
	exports.js_node_NodeStatic = js_node_NodeStatic;
	exports.js_node_NodeUuid = js_node_NodeUuid;
	exports.js_node_SocketIo = js_node_SocketIo;
	exports.js_node_SocketIoClient = js_node_SocketIoClient;
	exports.js_node_UserAgent = js_node_UserAgent;
	exports.js_node_V8Profiler = js_node_V8Profiler;
	exports.js_node_WebSocketServer = js_node_WebSocketServer;
	exports.js_Node = js_Node;
	exports.nodejs_connect_App = nodejs_connect_App;
	exports.nodejs_connect_Middleware = nodejs_connect_Middleware;
	exports.nodejs_connect_Middlewares = nodejs_connect_Middlewares;
	exports.nodejs_connect_Mime = nodejs_connect_Mime;
	exports.nodejs_connect_Pause = nodejs_connect_Pause;
	exports.nodejs_webkit_Clipboard = nodejs_webkit_Clipboard;
	exports.nodejs_webkit_Menu = nodejs_webkit_Menu;
	exports.nodejs_webkit_MenuItem = nodejs_webkit_MenuItem;
	exports.nodejs_webkit_MenuItemType = nodejs_webkit_MenuItemType;
	exports.nodejs_webkit_UI = nodejs_webkit_UI;
	exports.nodejs_webkit_Window = nodejs_webkit_Window;
	exports.sys_FileStat = sys_FileStat;
	exports.sys_FileSystem = sys_FileSystem;
	exports.sys_io_File = sys_io_File;
	exports.Sys = Sys;
};
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIterator"] = IntIterator;
IntIterator.__name__ = ["IntIterator"];
IntIterator.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIterator
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = [];
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
Lambda.list = function(it) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
};
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
};
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
};
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
};
Lambda.iter = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
};
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
};
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
};
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
};
Lambda.empty = function(it) {
	return !$iterator(it)().hasNext();
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
Lambda.find = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		if(f(v)) return v;
	}
	return null;
};
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = $iterator(a)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = $iterator(b)();
	while( $it1.hasNext() ) {
		var x1 = $it1.next();
		l.add(x1);
	}
	return l;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		if(this.h == null) return null; else return this.h[0];
	}
	,last: function() {
		if(this.q == null) return null; else return this.q[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,toString: function() {
		var s_b = "";
		var first = true;
		var l = this.h;
		s_b += "{";
		while(l != null) {
			if(first) first = false; else s_b += ", ";
			s_b += Std.string(Std.string(l[0]));
			l = l[1];
		}
		s_b += "}";
		return s_b;
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else if(sep == null) s.b += "null"; else s.b += "" + sep;
			s.add(l[0]);
			l = l[1];
		}
		return s.b;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
$hxClasses["_List.ListIterator"] = _$List_ListIterator;
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	head: null
	,val: null
	,hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		haxe_CallStack.lastException = e;
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		Reflect.setField(o2,f,Reflect.field(o,f));
	}
	return o2;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js_Boot.__instanceof(v,t);
};
Std.instance = function(value,c) {
	if((value instanceof c)) return value; else return null;
};
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,get_length: function() {
		return this.b.length;
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,toString: function() {
		return this.b;
	}
	,__class__: StringBuf
	,__properties__: {get_length:"get_length"}
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&quot;").join("\"").split("&#039;").join("'").split("&amp;").join("&");
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = s + c;
	return s;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
StringTools.isEof = function(c) {
	return c != c;
};
var Sys = function() { };
$hxClasses["Sys"] = Sys;
Sys.__name__ = ["Sys"];
Sys.args = function() {
	return process.argv;
};
Sys.getEnv = function(key) {
	return Reflect.field(process.env,key);
};
Sys.environment = function() {
	return process.env;
};
Sys.exit = function(code) {
	process.exit(code);
};
Sys.time = function() {
	return Date.now() / 1000;
};
Sys.systemName = function() {
	var _g = process.platform;
	switch(_g) {
	case "darwin":
		return "Darwin";
	case "freebsd":
		return "BSD";
	case "linux":
		return "Linux";
	case "sunos":
		return "SunOS";
	case "win32":
		return "Windows";
	default:
		return "";
	}
};
Sys.println = function(v) {
	console.log(v);
};
Sys.executablePath = function() {
	return process.execPath;
};
Sys.getCwd = function() {
	return process.cwd();
};
Sys.setCwd = function(s) {
	process.chdir(s);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
ValueType.__empty_constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TUnknown];
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		return Reflect.callMethod(e,f,params);
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw new js__$Boot_HaxeError(index + " is not a valid enum constructor index");
	return Type.createEnum(e,c,params);
};
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"__meta__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		haxe_CallStack.lastException = e1;
		if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
		return false;
	}
	return true;
};
Type.enumConstructor = function(e) {
	return e[0];
};
Type.enumParameters = function(e) {
	return e.slice(2);
};
Type.enumIndex = function(e) {
	return e[1];
};
Type.allEnums = function(e) {
	return e.__empty_constructs__;
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
haxe_IMap.prototype = {
	get: null
	,set: null
	,exists: null
	,remove: null
	,keys: null
	,iterator: null
	,toString: null
	,__class__: haxe_IMap
};
var haxe_HttpEncoding = $hxClasses["haxe.HttpEncoding"] = { __ename__ : ["haxe","HttpEncoding"], __constructs__ : ["BINARY","UTF8"] };
haxe_HttpEncoding.BINARY = ["BINARY",0];
haxe_HttpEncoding.BINARY.toString = $estr;
haxe_HttpEncoding.BINARY.__enum__ = haxe_HttpEncoding;
haxe_HttpEncoding.UTF8 = ["UTF8",1];
haxe_HttpEncoding.UTF8.toString = $estr;
haxe_HttpEncoding.UTF8.__enum__ = haxe_HttpEncoding;
haxe_HttpEncoding.__empty_constructs__ = [haxe_HttpEncoding.BINARY,haxe_HttpEncoding.UTF8];
var haxe__$Int32_Int32_$Impl_$ = {};
$hxClasses["haxe._Int32.Int32_Impl_"] = haxe__$Int32_Int32_$Impl_$;
haxe__$Int32_Int32_$Impl_$.__name__ = ["haxe","_Int32","Int32_Impl_"];
haxe__$Int32_Int32_$Impl_$.preIncrement = function(this1) {
	return (function($this) {
		var $r;
		var x = ++this1;
		$r = this1 = x | 0;
		return $r;
	}(this));
};
haxe__$Int32_Int32_$Impl_$.postIncrement = function(this1) {
	var ret = this1++;
	this1 = this1 | 0;
	return ret;
};
haxe__$Int32_Int32_$Impl_$.preDecrement = function(this1) {
	return (function($this) {
		var $r;
		var x = --this1;
		$r = this1 = x | 0;
		return $r;
	}(this));
};
haxe__$Int32_Int32_$Impl_$.postDecrement = function(this1) {
	var ret = this1--;
	this1 = this1 | 0;
	return ret;
};
haxe__$Int32_Int32_$Impl_$.add = function(a,b) {
	return a + b | 0;
};
haxe__$Int32_Int32_$Impl_$.addInt = function(a,b) {
	return a + b | 0;
};
haxe__$Int32_Int32_$Impl_$.sub = function(a,b) {
	return a - b | 0;
};
haxe__$Int32_Int32_$Impl_$.subInt = function(a,b) {
	return a - b | 0;
};
haxe__$Int32_Int32_$Impl_$.intSub = function(a,b) {
	return a - b | 0;
};
haxe__$Int32_Int32_$Impl_$.mul = function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
};
haxe__$Int32_Int32_$Impl_$.mulInt = function(a,b) {
	return haxe__$Int32_Int32_$Impl_$.mul(a,b);
};
haxe__$Int32_Int32_$Impl_$.toFloat = function(this1) {
	return this1;
};
haxe__$Int32_Int32_$Impl_$.ucompare = function(a,b) {
	if(a < 0) if(b < 0) return ~b - ~a | 0; else return 1;
	if(b < 0) return -1; else return a - b | 0;
};
haxe__$Int32_Int32_$Impl_$.clamp = function(x) {
	return x | 0;
};
var haxe__$Int64_Int64_$Impl_$ = {};
$hxClasses["haxe._Int64.Int64_Impl_"] = haxe__$Int64_Int64_$Impl_$;
haxe__$Int64_Int64_$Impl_$.__name__ = ["haxe","_Int64","Int64_Impl_"];
haxe__$Int64_Int64_$Impl_$.__properties__ = {get_low:"get_low",get_high:"get_high"}
haxe__$Int64_Int64_$Impl_$._new = function(x) {
	return x;
};
haxe__$Int64_Int64_$Impl_$.copy = function(this1) {
	var x = new haxe__$Int64__$_$_$Int64(this1.high,this1.low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.make = function(high,low) {
	var x = new haxe__$Int64__$_$_$Int64(high,low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.ofInt = function(x) {
	var x1 = new haxe__$Int64__$_$_$Int64(x >> 31,x);
	return x1;
};
haxe__$Int64_Int64_$Impl_$.toInt = function(x) {
	if(x.high != x.low >> 31) throw new js__$Boot_HaxeError("Overflow");
	return x.low;
};
haxe__$Int64_Int64_$Impl_$["is"] = function(val) {
	return js_Boot.__instanceof(val,haxe__$Int64__$_$_$Int64);
};
haxe__$Int64_Int64_$Impl_$.getHigh = function(x) {
	return x.high;
};
haxe__$Int64_Int64_$Impl_$.getLow = function(x) {
	return x.low;
};
haxe__$Int64_Int64_$Impl_$.isNeg = function(x) {
	return x.high < 0;
};
haxe__$Int64_Int64_$Impl_$.isZero = function(x) {
	var b;
	{
		var x1 = new haxe__$Int64__$_$_$Int64(0,0);
		b = x1;
	}
	return x.high == b.high && x.low == b.low;
};
haxe__$Int64_Int64_$Impl_$.compare = function(a,b) {
	var v = a.high - b.high | 0;
	if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low);
	if(a.high < 0) {
		if(b.high < 0) return v; else return -1;
	} else if(b.high >= 0) return v; else return 1;
};
haxe__$Int64_Int64_$Impl_$.ucompare = function(a,b) {
	var v = haxe__$Int32_Int32_$Impl_$.ucompare(a.high,b.high);
	if(v != 0) return v; else return haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low);
};
haxe__$Int64_Int64_$Impl_$.toStr = function(x) {
	return haxe__$Int64_Int64_$Impl_$.toString(x);
};
haxe__$Int64_Int64_$Impl_$.toString = function(this1) {
	var i = this1;
	if((function($this) {
		var $r;
		var b;
		{
			var x = new haxe__$Int64__$_$_$Int64(0,0);
			b = x;
		}
		$r = i.high == b.high && i.low == b.low;
		return $r;
	}(this))) return "0";
	var str = "";
	var neg = false;
	if(i.high < 0) {
		neg = true;
		var high = ~i.high;
		var low = -i.low;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
			ret;
		}
		var x1 = new haxe__$Int64__$_$_$Int64(high,low);
		i = x1;
	}
	var ten;
	{
		var x2 = new haxe__$Int64__$_$_$Int64(0,10);
		ten = x2;
	}
	while((function($this) {
		var $r;
		var b1;
		{
			var x3 = new haxe__$Int64__$_$_$Int64(0,0);
			b1 = x3;
		}
		$r = i.high != b1.high || i.low != b1.low;
		return $r;
	}(this))) {
		var r = haxe__$Int64_Int64_$Impl_$.divMod(i,ten);
		str = r.modulus.low + str;
		i = r.quotient;
	}
	if(neg) str = "-" + str;
	return str;
};
haxe__$Int64_Int64_$Impl_$.divMod = function(dividend,divisor) {
	if(divisor.high == 0) {
		var _g = divisor.low;
		switch(_g) {
		case 0:
			throw new js__$Boot_HaxeError("divide by zero");
			break;
		case 1:
			return { quotient : (function($this) {
				var $r;
				var x = new haxe__$Int64__$_$_$Int64(dividend.high,dividend.low);
				$r = x;
				return $r;
			}(this)), modulus : (function($this) {
				var $r;
				var x1 = new haxe__$Int64__$_$_$Int64(0,0);
				$r = x1;
				return $r;
			}(this))};
		}
	}
	var divSign = dividend.high < 0 != divisor.high < 0;
	var modulus;
	if(dividend.high < 0) {
		var high = ~dividend.high;
		var low = -dividend.low;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
			ret;
		}
		var x2 = new haxe__$Int64__$_$_$Int64(high,low);
		modulus = x2;
	} else {
		var x3 = new haxe__$Int64__$_$_$Int64(dividend.high,dividend.low);
		modulus = x3;
	}
	if(divisor.high < 0) {
		var high1 = ~divisor.high;
		var low1 = -divisor.low;
		if(low1 == 0) {
			var ret1 = high1++;
			high1 = high1 | 0;
			ret1;
		}
		var x4 = new haxe__$Int64__$_$_$Int64(high1,low1);
		divisor = x4;
	} else divisor = divisor;
	var quotient;
	{
		var x5 = new haxe__$Int64__$_$_$Int64(0,0);
		quotient = x5;
	}
	var mask;
	{
		var x6 = new haxe__$Int64__$_$_$Int64(0,1);
		mask = x6;
	}
	while(!(divisor.high < 0)) {
		var cmp;
		var v = haxe__$Int32_Int32_$Impl_$.ucompare(divisor.high,modulus.high);
		if(v != 0) cmp = v; else cmp = haxe__$Int32_Int32_$Impl_$.ucompare(divisor.low,modulus.low);
		var b = 1;
		b &= 63;
		if(b == 0) {
			var x7 = new haxe__$Int64__$_$_$Int64(divisor.high,divisor.low);
			divisor = x7;
		} else if(b < 32) {
			var x8 = new haxe__$Int64__$_$_$Int64(divisor.high << b | divisor.low >>> 32 - b,divisor.low << b);
			divisor = x8;
		} else {
			var x9 = new haxe__$Int64__$_$_$Int64(divisor.low << b - 32,0);
			divisor = x9;
		}
		var b1 = 1;
		b1 &= 63;
		if(b1 == 0) {
			var x10 = new haxe__$Int64__$_$_$Int64(mask.high,mask.low);
			mask = x10;
		} else if(b1 < 32) {
			var x11 = new haxe__$Int64__$_$_$Int64(mask.high << b1 | mask.low >>> 32 - b1,mask.low << b1);
			mask = x11;
		} else {
			var x12 = new haxe__$Int64__$_$_$Int64(mask.low << b1 - 32,0);
			mask = x12;
		}
		if(cmp >= 0) break;
	}
	while((function($this) {
		var $r;
		var b2;
		{
			var x13 = new haxe__$Int64__$_$_$Int64(0,0);
			b2 = x13;
		}
		$r = mask.high != b2.high || mask.low != b2.low;
		return $r;
	}(this))) {
		if((function($this) {
			var $r;
			var v1 = haxe__$Int32_Int32_$Impl_$.ucompare(modulus.high,divisor.high);
			$r = v1 != 0?v1:haxe__$Int32_Int32_$Impl_$.ucompare(modulus.low,divisor.low);
			return $r;
		}(this)) >= 0) {
			var x14 = new haxe__$Int64__$_$_$Int64(quotient.high | mask.high,quotient.low | mask.low);
			quotient = x14;
			var high2 = modulus.high - divisor.high | 0;
			var low2 = modulus.low - divisor.low | 0;
			if(haxe__$Int32_Int32_$Impl_$.ucompare(modulus.low,divisor.low) < 0) {
				var ret2 = high2--;
				high2 = high2 | 0;
				ret2;
			}
			var x15 = new haxe__$Int64__$_$_$Int64(high2,low2);
			modulus = x15;
		}
		var b3 = 1;
		b3 &= 63;
		if(b3 == 0) {
			var x16 = new haxe__$Int64__$_$_$Int64(mask.high,mask.low);
			mask = x16;
		} else if(b3 < 32) {
			var x17 = new haxe__$Int64__$_$_$Int64(mask.high >>> b3,mask.high << 32 - b3 | mask.low >>> b3);
			mask = x17;
		} else {
			var x18 = new haxe__$Int64__$_$_$Int64(0,mask.high >>> b3 - 32);
			mask = x18;
		}
		var b4 = 1;
		b4 &= 63;
		if(b4 == 0) {
			var x19 = new haxe__$Int64__$_$_$Int64(divisor.high,divisor.low);
			divisor = x19;
		} else if(b4 < 32) {
			var x20 = new haxe__$Int64__$_$_$Int64(divisor.high >>> b4,divisor.high << 32 - b4 | divisor.low >>> b4);
			divisor = x20;
		} else {
			var x21 = new haxe__$Int64__$_$_$Int64(0,divisor.high >>> b4 - 32);
			divisor = x21;
		}
	}
	if(divSign) {
		var high3 = ~quotient.high;
		var low3 = -quotient.low;
		if(low3 == 0) {
			var ret3 = high3++;
			high3 = high3 | 0;
			ret3;
		}
		var x22 = new haxe__$Int64__$_$_$Int64(high3,low3);
		quotient = x22;
	}
	if(dividend.high < 0) {
		var high4 = ~modulus.high;
		var low4 = -modulus.low;
		if(low4 == 0) {
			var ret4 = high4++;
			high4 = high4 | 0;
			ret4;
		}
		var x23 = new haxe__$Int64__$_$_$Int64(high4,low4);
		modulus = x23;
	}
	return { quotient : quotient, modulus : modulus};
};
haxe__$Int64_Int64_$Impl_$.neg = function(x) {
	var high = ~x.high;
	var low = -x.low;
	if(low == 0) {
		var ret = high++;
		high = high | 0;
		ret;
	}
	var x1 = new haxe__$Int64__$_$_$Int64(high,low);
	return x1;
};
haxe__$Int64_Int64_$Impl_$.preIncrement = function(this1) {
	{
		var ret = this1.low++;
		this1.low = this1.low | 0;
		ret;
	}
	if(this1.low == 0) {
		var ret1 = this1.high++;
		this1.high = this1.high | 0;
		ret1;
	}
	return this1;
};
haxe__$Int64_Int64_$Impl_$.postIncrement = function(this1) {
	var ret;
	var x = new haxe__$Int64__$_$_$Int64(this1.high,this1.low);
	ret = x;
	{
		var ret1 = this1.low++;
		this1.low = this1.low | 0;
		ret1;
	}
	if(this1.low == 0) {
		var ret2 = this1.high++;
		this1.high = this1.high | 0;
		ret2;
	}
	this1;
	return ret;
};
haxe__$Int64_Int64_$Impl_$.preDecrement = function(this1) {
	if(this1.low == 0) {
		var ret = this1.high--;
		this1.high = this1.high | 0;
		ret;
	}
	{
		var ret1 = this1.low--;
		this1.low = this1.low | 0;
		ret1;
	}
	return this1;
};
haxe__$Int64_Int64_$Impl_$.postDecrement = function(this1) {
	var ret;
	var x = new haxe__$Int64__$_$_$Int64(this1.high,this1.low);
	ret = x;
	if(this1.low == 0) {
		var ret1 = this1.high--;
		this1.high = this1.high | 0;
		ret1;
	}
	{
		var ret2 = this1.low--;
		this1.low = this1.low | 0;
		ret2;
	}
	this1;
	return ret;
};
haxe__$Int64_Int64_$Impl_$.add = function(a,b) {
	var high = a.high + b.high | 0;
	var low = a.low + b.low | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(low,a.low) < 0) {
		var ret = high++;
		high = high | 0;
		ret;
	}
	var x = new haxe__$Int64__$_$_$Int64(high,low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.addInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	var high = a.high + b1.high | 0;
	var low = a.low + b1.low | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(low,a.low) < 0) {
		var ret = high++;
		high = high | 0;
		ret;
	}
	var x1 = new haxe__$Int64__$_$_$Int64(high,low);
	return x1;
};
haxe__$Int64_Int64_$Impl_$.sub = function(a,b) {
	var high = a.high - b.high | 0;
	var low = a.low - b.low | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low) < 0) {
		var ret = high--;
		high = high | 0;
		ret;
	}
	var x = new haxe__$Int64__$_$_$Int64(high,low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.subInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	var high = a.high - b1.high | 0;
	var low = a.low - b1.low | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b1.low) < 0) {
		var ret = high--;
		high = high | 0;
		ret;
	}
	var x1 = new haxe__$Int64__$_$_$Int64(high,low);
	return x1;
};
haxe__$Int64_Int64_$Impl_$.intSub = function(a,b) {
	var a1;
	{
		var x = new haxe__$Int64__$_$_$Int64(a >> 31,a);
		a1 = x;
	}
	var high = a1.high - b.high | 0;
	var low = a1.low - b.low | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(a1.low,b.low) < 0) {
		var ret = high--;
		high = high | 0;
		ret;
	}
	var x1 = new haxe__$Int64__$_$_$Int64(high,low);
	return x1;
};
haxe__$Int64_Int64_$Impl_$.mul = function(a,b) {
	var mask = 65535;
	var al = a.low & mask;
	var ah = a.low >>> 16;
	var bl = b.low & mask;
	var bh = b.low >>> 16;
	var p00 = haxe__$Int32_Int32_$Impl_$.mul(al,bl);
	var p10 = haxe__$Int32_Int32_$Impl_$.mul(ah,bl);
	var p01 = haxe__$Int32_Int32_$Impl_$.mul(al,bh);
	var p11 = haxe__$Int32_Int32_$Impl_$.mul(ah,bh);
	var low = p00;
	var high = (p11 + (p01 >>> 16) | 0) + (p10 >>> 16) | 0;
	p01 = p01 << 16;
	low = low + p01 | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(low,p01) < 0) {
		var ret = high++;
		high = high | 0;
		ret;
	}
	p10 = p10 << 16;
	low = low + p10 | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(low,p10) < 0) {
		var ret1 = high++;
		high = high | 0;
		ret1;
	}
	var b1;
	var a1 = haxe__$Int32_Int32_$Impl_$.mul(a.low,b.high);
	var b2 = haxe__$Int32_Int32_$Impl_$.mul(a.high,b.low);
	b1 = a1 + b2 | 0;
	high = high + b1 | 0;
	var x = new haxe__$Int64__$_$_$Int64(high,low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.mulInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	var mask = 65535;
	var al = a.low & mask;
	var ah = a.low >>> 16;
	var bl = b1.low & mask;
	var bh = b1.low >>> 16;
	var p00 = haxe__$Int32_Int32_$Impl_$.mul(al,bl);
	var p10 = haxe__$Int32_Int32_$Impl_$.mul(ah,bl);
	var p01 = haxe__$Int32_Int32_$Impl_$.mul(al,bh);
	var p11 = haxe__$Int32_Int32_$Impl_$.mul(ah,bh);
	var low = p00;
	var high = (p11 + (p01 >>> 16) | 0) + (p10 >>> 16) | 0;
	p01 = p01 << 16;
	low = low + p01 | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(low,p01) < 0) {
		var ret = high++;
		high = high | 0;
		ret;
	}
	p10 = p10 << 16;
	low = low + p10 | 0;
	if(haxe__$Int32_Int32_$Impl_$.ucompare(low,p10) < 0) {
		var ret1 = high++;
		high = high | 0;
		ret1;
	}
	var b2;
	var a1 = haxe__$Int32_Int32_$Impl_$.mul(a.low,b1.high);
	var b3 = haxe__$Int32_Int32_$Impl_$.mul(a.high,b1.low);
	b2 = a1 + b3 | 0;
	high = high + b2 | 0;
	var x1 = new haxe__$Int64__$_$_$Int64(high,low);
	return x1;
};
haxe__$Int64_Int64_$Impl_$.div = function(a,b) {
	return haxe__$Int64_Int64_$Impl_$.divMod(a,b).quotient;
};
haxe__$Int64_Int64_$Impl_$.divInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return haxe__$Int64_Int64_$Impl_$.divMod(a,b1).quotient;
};
haxe__$Int64_Int64_$Impl_$.intDiv = function(a,b) {
	{
		var x;
		var x2;
		var a1;
		{
			var x3 = new haxe__$Int64__$_$_$Int64(a >> 31,a);
			a1 = x3;
		}
		x2 = haxe__$Int64_Int64_$Impl_$.divMod(a1,b).quotient;
		if(x2.high != x2.low >> 31) throw new js__$Boot_HaxeError("Overflow");
		x = x2.low;
		var x1 = new haxe__$Int64__$_$_$Int64(x >> 31,x);
		return x1;
	}
};
haxe__$Int64_Int64_$Impl_$.mod = function(a,b) {
	return haxe__$Int64_Int64_$Impl_$.divMod(a,b).modulus;
};
haxe__$Int64_Int64_$Impl_$.modInt = function(a,b) {
	{
		var x;
		var x2;
		var b1;
		{
			var x3 = new haxe__$Int64__$_$_$Int64(b >> 31,b);
			b1 = x3;
		}
		x2 = haxe__$Int64_Int64_$Impl_$.divMod(a,b1).modulus;
		if(x2.high != x2.low >> 31) throw new js__$Boot_HaxeError("Overflow");
		x = x2.low;
		var x1 = new haxe__$Int64__$_$_$Int64(x >> 31,x);
		return x1;
	}
};
haxe__$Int64_Int64_$Impl_$.intMod = function(a,b) {
	{
		var x;
		var x2;
		var a1;
		{
			var x3 = new haxe__$Int64__$_$_$Int64(a >> 31,a);
			a1 = x3;
		}
		x2 = haxe__$Int64_Int64_$Impl_$.divMod(a1,b).modulus;
		if(x2.high != x2.low >> 31) throw new js__$Boot_HaxeError("Overflow");
		x = x2.low;
		var x1 = new haxe__$Int64__$_$_$Int64(x >> 31,x);
		return x1;
	}
};
haxe__$Int64_Int64_$Impl_$.eq = function(a,b) {
	return a.high == b.high && a.low == b.low;
};
haxe__$Int64_Int64_$Impl_$.eqInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return a.high == b1.high && a.low == b1.low;
};
haxe__$Int64_Int64_$Impl_$.neq = function(a,b) {
	return a.high != b.high || a.low != b.low;
};
haxe__$Int64_Int64_$Impl_$.neqInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return a.high != b1.high || a.low != b1.low;
};
haxe__$Int64_Int64_$Impl_$.lt = function(a,b) {
	return (function($this) {
		var $r;
		var v = a.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low);
		$r = a.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) < 0;
};
haxe__$Int64_Int64_$Impl_$.ltInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return (function($this) {
		var $r;
		var v = a.high - b1.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b1.low);
		$r = a.high < 0?b1.high < 0?v:-1:b1.high >= 0?v:1;
		return $r;
	}(this)) < 0;
};
haxe__$Int64_Int64_$Impl_$.intLt = function(a,b) {
	var a1;
	{
		var x = new haxe__$Int64__$_$_$Int64(a >> 31,a);
		a1 = x;
	}
	return (function($this) {
		var $r;
		var v = a1.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a1.low,b.low);
		$r = a1.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) < 0;
};
haxe__$Int64_Int64_$Impl_$.lte = function(a,b) {
	return (function($this) {
		var $r;
		var v = a.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low);
		$r = a.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) <= 0;
};
haxe__$Int64_Int64_$Impl_$.lteInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return (function($this) {
		var $r;
		var v = a.high - b1.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b1.low);
		$r = a.high < 0?b1.high < 0?v:-1:b1.high >= 0?v:1;
		return $r;
	}(this)) <= 0;
};
haxe__$Int64_Int64_$Impl_$.intLte = function(a,b) {
	var a1;
	{
		var x = new haxe__$Int64__$_$_$Int64(a >> 31,a);
		a1 = x;
	}
	return (function($this) {
		var $r;
		var v = a1.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a1.low,b.low);
		$r = a1.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) <= 0;
};
haxe__$Int64_Int64_$Impl_$.gt = function(a,b) {
	return (function($this) {
		var $r;
		var v = a.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low);
		$r = a.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) > 0;
};
haxe__$Int64_Int64_$Impl_$.gtInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return (function($this) {
		var $r;
		var v = a.high - b1.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b1.low);
		$r = a.high < 0?b1.high < 0?v:-1:b1.high >= 0?v:1;
		return $r;
	}(this)) > 0;
};
haxe__$Int64_Int64_$Impl_$.intGt = function(a,b) {
	var a1;
	{
		var x = new haxe__$Int64__$_$_$Int64(a >> 31,a);
		a1 = x;
	}
	return (function($this) {
		var $r;
		var v = a1.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a1.low,b.low);
		$r = a1.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) > 0;
};
haxe__$Int64_Int64_$Impl_$.gte = function(a,b) {
	return (function($this) {
		var $r;
		var v = a.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b.low);
		$r = a.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) >= 0;
};
haxe__$Int64_Int64_$Impl_$.gteInt = function(a,b) {
	var b1;
	{
		var x = new haxe__$Int64__$_$_$Int64(b >> 31,b);
		b1 = x;
	}
	return (function($this) {
		var $r;
		var v = a.high - b1.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a.low,b1.low);
		$r = a.high < 0?b1.high < 0?v:-1:b1.high >= 0?v:1;
		return $r;
	}(this)) >= 0;
};
haxe__$Int64_Int64_$Impl_$.intGte = function(a,b) {
	var a1;
	{
		var x = new haxe__$Int64__$_$_$Int64(a >> 31,a);
		a1 = x;
	}
	return (function($this) {
		var $r;
		var v = a1.high - b.high | 0;
		if(v != 0) v = v; else v = haxe__$Int32_Int32_$Impl_$.ucompare(a1.low,b.low);
		$r = a1.high < 0?b.high < 0?v:-1:b.high >= 0?v:1;
		return $r;
	}(this)) >= 0;
};
haxe__$Int64_Int64_$Impl_$.complement = function(a) {
	var x = new haxe__$Int64__$_$_$Int64(~a.high,~a.low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.and = function(a,b) {
	var x = new haxe__$Int64__$_$_$Int64(a.high & b.high,a.low & b.low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.or = function(a,b) {
	var x = new haxe__$Int64__$_$_$Int64(a.high | b.high,a.low | b.low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.xor = function(a,b) {
	var x = new haxe__$Int64__$_$_$Int64(a.high ^ b.high,a.low ^ b.low);
	return x;
};
haxe__$Int64_Int64_$Impl_$.shl = function(a,b) {
	b &= 63;
	if(b == 0) {
		var x = new haxe__$Int64__$_$_$Int64(a.high,a.low);
		return x;
	} else if(b < 32) {
		var x1 = new haxe__$Int64__$_$_$Int64(a.high << b | a.low >>> 32 - b,a.low << b);
		return x1;
	} else {
		var x2 = new haxe__$Int64__$_$_$Int64(a.low << b - 32,0);
		return x2;
	}
};
haxe__$Int64_Int64_$Impl_$.shr = function(a,b) {
	b &= 63;
	if(b == 0) {
		var x = new haxe__$Int64__$_$_$Int64(a.high,a.low);
		return x;
	} else if(b < 32) {
		var x1 = new haxe__$Int64__$_$_$Int64(a.high >> b,a.high << 32 - b | a.low >>> b);
		return x1;
	} else {
		var x2 = new haxe__$Int64__$_$_$Int64(a.high >> 31,a.high >> b - 32);
		return x2;
	}
};
haxe__$Int64_Int64_$Impl_$.ushr = function(a,b) {
	b &= 63;
	if(b == 0) {
		var x = new haxe__$Int64__$_$_$Int64(a.high,a.low);
		return x;
	} else if(b < 32) {
		var x1 = new haxe__$Int64__$_$_$Int64(a.high >>> b,a.high << 32 - b | a.low >>> b);
		return x1;
	} else {
		var x2 = new haxe__$Int64__$_$_$Int64(0,a.high >>> b - 32);
		return x2;
	}
};
haxe__$Int64_Int64_$Impl_$.get_high = function(this1) {
	return this1.high;
};
haxe__$Int64_Int64_$Impl_$.set_high = function(this1,x) {
	return this1.high = x;
};
haxe__$Int64_Int64_$Impl_$.get_low = function(this1) {
	return this1.low;
};
haxe__$Int64_Int64_$Impl_$.set_low = function(this1,x) {
	return this1.low = x;
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	high: null
	,low: null
	,toString: function() {
		return haxe__$Int64_Int64_$Impl_$.toString(this);
	}
	,__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Json = function() { };
$hxClasses["haxe.Json"] = haxe_Json;
haxe_Json.__name__ = ["haxe","Json"];
haxe_Json.stringify = function(obj,replacer,insertion) {
	return JSON.stringify(obj,replacer,insertion);
};
haxe_Json.parse = function(jsonString) {
	return JSON.parse(jsonString);
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	map: null
	,keys: null
	,index: null
	,count: null
	,hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,rh: null
	,isReserved: function(key) {
		return __map_reserved[key] != null;
	}
	,set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var keys = this.arrayKeys();
		var _g1 = 0;
		var _g = keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			var k = keys[i];
			if(k == null) s.b += "null"; else s.b += "" + k;
			s.b += " => ";
			s.add(Std.string(__map_reserved[k] != null?this.getReserved(k):this.h[k]));
			if(i < keys.length) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(length,new Buffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var nb = new Buffer(s,"utf8");
	return new haxe_io_Bytes(nb.length,nb);
};
haxe_io_Bytes.ofData = function(b) {
	return new haxe_io_Bytes(b.length,b);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v;
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		src.b.copy(this.b,pos,srcpos,srcpos + len);
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var nb = new Buffer(len);
		var slice = this.b.slice(pos,pos + len);
		slice.copy(nb,0,0,len);
		return new haxe_io_Bytes(len,nb);
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len;
		if(this.length < other.length) len = this.length; else len = other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,readString: function(pos,len) {
		return this.getString(pos,len);
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,toHex: function() {
		var s_b = "";
		var chars = [];
		var str = "0123456789abcdef";
		var _g1 = 0;
		var _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g11 = 0;
		var _g2 = this.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var c = this.b[i1];
			s_b += String.fromCharCode(chars[c >> 4]);
			s_b += String.fromCharCode(chars[c & 15]);
		}
		return s_b;
	}
	,getData: function() {
		return this.b;
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_BytesBuffer = function() {
	this.b = [];
};
$hxClasses["haxe.io.BytesBuffer"] = haxe_io_BytesBuffer;
haxe_io_BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe_io_BytesBuffer.prototype = {
	b: null
	,get_length: function() {
		return this.b.length;
	}
	,addByte: function($byte) {
		this.b.push($byte);
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0;
		var _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,getBytes: function() {
		var nb = new Buffer(this.b);
		var bytes = new haxe_io_Bytes(nb.length,nb);
		this.b = null;
		return bytes;
	}
	,__class__: haxe_io_BytesBuffer
	,__properties__: {get_length:"get_length"}
};
var haxe_io_Input = function() { };
$hxClasses["haxe.io.Input"] = haxe_io_Input;
haxe_io_Input.__name__ = ["haxe","io","Input"];
haxe_io_Input.prototype = {
	bigEndian: null
	,readByte: function() {
		throw new js__$Boot_HaxeError("Not implemented");
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,close: function() {
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readAll: function(bufsize) {
		if(bufsize == null) bufsize = 16384;
		var buf = haxe_io_Bytes.alloc(bufsize);
		var total = new haxe_io_BytesBuffer();
		try {
			while(true) {
				var len = this.readBytes(buf,0,bufsize);
				if(len == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
				total.addBytes(buf,0,len);
			}
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,haxe_io_Eof) ) {
			} else throw(e);
		}
		return total.getBytes();
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = haxe_io_Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readUntil: function(end) {
		var buf_b = "";
		var last;
		while((last = this.readByte()) != end) buf_b += String.fromCharCode(last);
		return buf_b;
	}
	,readLine: function() {
		var buf_b = "";
		var last;
		var s;
		try {
			while((last = this.readByte()) != 10) buf_b += String.fromCharCode(last);
			s = buf_b;
			if(HxOverrides.cca(s,s.length - 1) == 13) s = HxOverrides.substr(s,0,-1);
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,haxe_io_Eof) ) {
				s = buf_b;
				if(s.length == 0) throw new js__$Boot_HaxeError(e);
			} else throw(e);
		}
		return s;
	}
	,readFloat: function() {
		return haxe_io_FPHelper.i32ToFloat(this.readInt32());
	}
	,readDouble: function() {
		var i1 = this.readInt32();
		var i2 = this.readInt32();
		if(this.bigEndian) return haxe_io_FPHelper.i64ToDouble(i2,i1); else return haxe_io_FPHelper.i64ToDouble(i1,i2);
	}
	,readInt8: function() {
		var n = this.readByte();
		if(n >= 128) return n - 256;
		return n;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n;
		if(this.bigEndian) n = ch2 | ch1 << 8; else n = ch1 | ch2 << 8;
		if((n & 32768) != 0) return n - 65536;
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) return ch2 | ch1 << 8; else return ch1 | ch2 << 8;
	}
	,readInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var n;
		if(this.bigEndian) n = ch3 | ch2 << 8 | ch1 << 16; else n = ch1 | ch2 << 8 | ch3 << 16;
		if((n & 8388608) != 0) return n - 16777216;
		return n;
	}
	,readUInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		if(this.bigEndian) return ch3 | ch2 << 8 | ch1 << 16; else return ch1 | ch2 << 8 | ch3 << 16;
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24; else return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readString: function(len) {
		var b = haxe_io_Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,getDoubleSig: function(bytes) {
		return ((bytes[1] & 15) << 16 | bytes[2] << 8 | bytes[3]) * 4294967296. + (bytes[4] >> 7) * 2147483648 + ((bytes[4] & 127) << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7]);
	}
	,__class__: haxe_io_Input
	,__properties__: {set_bigEndian:"set_bigEndian"}
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe_io_BytesInput;
haxe_io_BytesInput.__name__ = ["haxe","io","BytesInput"];
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	b: null
	,pos: null
	,len: null
	,totlen: null
	,get_position: function() {
		return this.pos;
	}
	,get_length: function() {
		return this.totlen;
	}
	,set_position: function(p) {
		if(p < 0) p = 0; else if(p > this.totlen) p = this.totlen;
		this.len = this.totlen - p;
		return this.pos = p;
	}
	,readByte: function() {
		if(this.len == 0) throw new js__$Boot_HaxeError(new haxe_io_Eof());
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		if(this.len == 0 && len > 0) throw new js__$Boot_HaxeError(new haxe_io_Eof());
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
	,__properties__: $extend(haxe_io_Input.prototype.__properties__,{get_length:"get_length",set_position:"set_position",get_position:"get_position"})
});
var haxe_io_Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
haxe_io_Error.__empty_constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds];
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var haxe_io_Output = function() { };
$hxClasses["haxe.io.Output"] = haxe_io_Output;
haxe_io_Output.__name__ = ["haxe","io","Output"];
haxe_io_Output.prototype = {
	bigEndian: null
	,writeByte: function(c) {
		throw new js__$Boot_HaxeError("Not implemented");
	}
	,writeBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		while(k > 0) {
			this.writeByte(b[pos]);
			pos++;
			k--;
		}
		return len;
	}
	,flush: function() {
	}
	,close: function() {
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,write: function(s) {
		var l = s.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(s,p,l);
			if(k == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
			p += k;
			l -= k;
		}
	}
	,writeFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.writeBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,writeFloat: function(x) {
		this.writeInt32(haxe_io_FPHelper.floatToI32(x));
	}
	,writeDouble: function(x) {
		var i64 = haxe_io_FPHelper.doubleToI64(x);
		if(this.bigEndian) {
			this.writeInt32(i64.high);
			this.writeInt32(i64.low);
		} else {
			this.writeInt32(i64.low);
			this.writeInt32(i64.high);
		}
	}
	,writeInt8: function(x) {
		if(x < -128 || x >= 128) throw new js__$Boot_HaxeError(haxe_io_Error.Overflow);
		this.writeByte(x & 255);
	}
	,writeInt16: function(x) {
		if(x < -32768 || x >= 32768) throw new js__$Boot_HaxeError(haxe_io_Error.Overflow);
		this.writeUInt16(x & 65535);
	}
	,writeUInt16: function(x) {
		if(x < 0 || x >= 65536) throw new js__$Boot_HaxeError(haxe_io_Error.Overflow);
		if(this.bigEndian) {
			this.writeByte(x >> 8);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8);
		}
	}
	,writeInt24: function(x) {
		if(x < -8388608 || x >= 8388608) throw new js__$Boot_HaxeError(haxe_io_Error.Overflow);
		this.writeUInt24(x & 16777215);
	}
	,writeUInt24: function(x) {
		if(x < 0 || x >= 16777216) throw new js__$Boot_HaxeError(haxe_io_Error.Overflow);
		if(this.bigEndian) {
			this.writeByte(x >> 16);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16);
		}
	}
	,writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	}
	,prepare: function(nbytes) {
	}
	,writeInput: function(i,bufsize) {
		if(bufsize == null) bufsize = 4096;
		var buf = haxe_io_Bytes.alloc(bufsize);
		try {
			while(true) {
				var len = i.readBytes(buf,0,bufsize);
				if(len == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
				var p = 0;
				while(len > 0) {
					var k = this.writeBytes(buf,p,len);
					if(k == 0) throw new js__$Boot_HaxeError(haxe_io_Error.Blocked);
					p += k;
					len -= k;
				}
			}
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,haxe_io_Eof) ) {
			} else throw(e);
		}
	}
	,writeString: function(s) {
		var b = haxe_io_Bytes.ofString(s);
		this.writeFullBytes(b,0,b.length);
	}
	,__class__: haxe_io_Output
	,__properties__: {set_bigEndian:"set_bigEndian"}
};
var haxe_io_StringInput = function(s) {
	haxe_io_BytesInput.call(this,haxe_io_Bytes.ofString(s));
};
$hxClasses["haxe.io.StringInput"] = haxe_io_StringInput;
haxe_io_StringInput.__name__ = ["haxe","io","StringInput"];
haxe_io_StringInput.__super__ = haxe_io_BytesInput;
haxe_io_StringInput.prototype = $extend(haxe_io_BytesInput.prototype,{
	__class__: haxe_io_StringInput
});
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	val: null
	,__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
};
js_Boot.isClass = function(o) {
	return o.__name__;
};
js_Boot.isEnum = function(e) {
	return e.__ename__;
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			haxe_CallStack.lastException = e;
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var js_NodeC = function() { };
$hxClasses["js.NodeC"] = js_NodeC;
js_NodeC.__name__ = ["js","NodeC"];
var js_Node = function() { };
$hxClasses["js.Node"] = js_Node;
js_Node.__name__ = ["js","Node"];
js_Node.__properties__ = {get___dirname:"get___dirname",get___filename:"get___filename",get_zlib:"get_zlib",get_json:"get_json",get_vm:"get_vm",get_util:"get_util",get_url:"get_url",get_tls:"get_tls",get_repl:"get_repl",get_querystring:"get_querystring",get_path:"get_path",get_os:"get_os",get_net:"get_net",get_https:"get_https",get_http:"get_http",get_fs:"get_fs",get_dns:"get_dns",get_dgram:"get_dgram",get_crypto:"get_crypto",get_cluster:"get_cluster",get_child_process:"get_child_process",get_assert:"get_assert"}
js_Node.assert = null;
js_Node.child_process = null;
js_Node.cluster = null;
js_Node.crypto = null;
js_Node.dgram = null;
js_Node.dns = null;
js_Node.fs = null;
js_Node.http = null;
js_Node.https = null;
js_Node.net = null;
js_Node.os = null;
js_Node.path = null;
js_Node.querystring = null;
js_Node.repl = null;
js_Node.tls = null;
js_Node.url = null;
js_Node.util = null;
js_Node.vm = null;
js_Node.json = null;
js_Node.zlib = null;
js_Node.__filename = null;
js_Node.__dirname = null;
js_Node.queryString = null;
js_Node.get_assert = function() {
	return js_Node.require("assert");
};
js_Node.get_child_process = function() {
	return js_Node.require("child_process");
};
js_Node.get_cluster = function() {
	return js_Node.require("cluster");
};
js_Node.get_crypto = function() {
	return js_Node.require("crypto");
};
js_Node.get_dgram = function() {
	return js_Node.require("dgram");
};
js_Node.get_dns = function() {
	return js_Node.require("dns");
};
js_Node.get_fs = function() {
	return js_Node.require("fs");
};
js_Node.get_http = function() {
	return js_Node.require("http");
};
js_Node.get_https = function() {
	return js_Node.require("https");
};
js_Node.get_net = function() {
	return js_Node.require("net");
};
js_Node.get_os = function() {
	return js_Node.require("os");
};
js_Node.get_path = function() {
	return js_Node.require("path");
};
js_Node.get_querystring = function() {
	return js_Node.require("querystring");
};
js_Node.get_repl = function() {
	return js_Node.require("repl");
};
js_Node.get_tls = function() {
	return js_Node.require("tls");
};
js_Node.get_url = function() {
	return js_Node.require("url");
};
js_Node.get_util = function() {
	return js_Node.require("util");
};
js_Node.get_vm = function() {
	return js_Node.require("vm");
};
js_Node.get_zlib = function() {
	return js_Node.require("zlib");
};
js_Node.get___filename = function() {
	return __filename;
};
js_Node.get___dirname = function() {
	return __dirname;
};
js_Node.get_json = function() {
	return JSON;
};
js_Node.newSocket = function(options) {
	var net = js_Node.require("net");
	return new net.Socket(options);
};
js_Node.isNodeWebkit = function() {
	return (typeof process == "object");
};
var js_html__$CanvasElement_CanvasUtil = function() { };
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js_html__$CanvasElement_CanvasUtil;
js_html__$CanvasElement_CanvasUtil.__name__ = ["js","html","_CanvasElement","CanvasUtil"];
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) return ctx;
	}
	return null;
};
var js_node_ConnectStatic = function() { };
$hxClasses["js.node.ConnectStatic"] = js_node_ConnectStatic;
js_node_ConnectStatic.__name__ = ["js","node","ConnectStatic"];
js_node_ConnectStatic.Static = function(c,path,options) {
	return c.static(path, options);
};
var js_node_MongoIdHelper = function() { };
$hxClasses["js.node.MongoIdHelper"] = js_node_MongoIdHelper;
js_node_MongoIdHelper.__name__ = ["js","node","MongoIdHelper"];
js_node_MongoIdHelper.cleanId = function(data) {
	data._id = Std.string(data._id);
	return data;
};
js_node_MongoIdHelper.cleanIds = function(datas) {
	var _g = 0;
	while(_g < datas.length) {
		var data = datas[_g];
		++_g;
		data._id = Std.string(data._id);
	}
	return datas;
};
js_node_MongoIdHelper.mongoIdStr = function(db,x) {
	return db.bson_serializer.ObjectID(x);
};
js_node_MongoIdHelper.mongoId = function(db,x) {
	return db.bson_serializer.ObjectID(x._id);
};
var js_node_NodeStatic = function() { };
$hxClasses["js.node.NodeStatic"] = js_node_NodeStatic;
js_node_NodeStatic.__name__ = ["js","node","NodeStatic"];
js_node_NodeStatic.Server = function(pathToServe) {
	var watchedFolder = pathToServe;
	var node_static = require('node-static');
	return new node_static.Server(watchedFolder);
};
var nodejs_webkit_$ui = function() { };
$hxClasses["nodejs.webkit.$ui"] = nodejs_webkit_$ui;
nodejs_webkit_$ui.__name__ = ["nodejs","webkit","$ui"];
var sys_FileSystem = function() { };
$hxClasses["sys.FileSystem"] = sys_FileSystem;
sys_FileSystem.__name__ = ["sys","FileSystem"];
sys_FileSystem.exists = function(path) {
	return js_Node.require("fs").existsSync(path);
};
sys_FileSystem.rename = function(path,newpath) {
	js_Node.require("fs").renameSync(path,newpath);
};
sys_FileSystem.stat = function(path) {
	return js_Node.require("fs").statSync(path);
};
sys_FileSystem.fullPath = function(relpath) {
	return js_Node.require("path").resolve(null,relpath);
};
sys_FileSystem.isDirectory = function(path) {
	if(js_Node.require("fs").statSync(path).isSymbolicLink()) return false; else return js_Node.require("fs").statSync(path).isDirectory();
};
sys_FileSystem.createDirectory = function(path) {
	js_Node.require("fs").mkdirSync(path);
};
sys_FileSystem.deleteFile = function(path) {
	js_Node.require("fs").unlinkSync(path);
};
sys_FileSystem.deleteDirectory = function(path) {
	js_Node.require("fs").rmdirSync(path);
};
sys_FileSystem.readDirectory = function(path) {
	return js_Node.require("fs").readdirSync(path);
};
sys_FileSystem.signature = function(path) {
	var shasum = js_Node.require("crypto").createHash("md5");
	shasum.update(js_Node.require("fs").readFileSync(path));
	return shasum.digest("hex");
};
sys_FileSystem.join = function(p1,p2,p3) {
	return js_Node.require("path").join(p1 == null?"":p1,p2 == null?"":p2,p3 == null?"":p3);
};
sys_FileSystem.readRecursive = function(path,filter) {
	var files = sys_FileSystem.readRecursiveInternal(path,null,filter);
	if(files == null) return []; else return files;
};
sys_FileSystem.readRecursiveInternal = function(root,dir,filter) {
	if(dir == null) dir = "";
	if(root == null) return null;
	var dirPath = js_Node.require("path").join(root == null?"":root,dir == null?"":dir,"");
	if(!(js_Node.require("fs").existsSync(dirPath) && sys_FileSystem.isDirectory(dirPath))) return null;
	var result = [];
	var _g = 0;
	var _g1 = js_Node.require("fs").readdirSync(dirPath);
	while(_g < _g1.length) {
		var file = _g1[_g];
		++_g;
		var fullPath = js_Node.require("path").join(dirPath == null?"":dirPath,file == null?"":file,"");
		var relPath;
		if(dir == "") relPath = file; else relPath = js_Node.require("path").join(dir == null?"":dir,file == null?"":file,"");
		if(js_Node.require("fs").existsSync(fullPath)) {
			if(sys_FileSystem.isDirectory(fullPath)) {
				if(fullPath.charCodeAt(fullPath.length - 1) == 47) fullPath = HxOverrides.substr(fullPath,0,-1);
				if(filter != null && !filter(relPath)) continue;
				var recursedResults = sys_FileSystem.readRecursiveInternal(root,relPath,filter);
				if(recursedResults != null && recursedResults.length > 0) result = result.concat(recursedResults);
			} else if(filter == null || filter(relPath)) result.push(relPath);
		}
	}
	return result;
};
var sys_io_File = function() { };
$hxClasses["sys.io.File"] = sys_io_File;
sys_io_File.__name__ = ["sys","io","File"];
sys_io_File.append = function(path,binary) {
	throw new js__$Boot_HaxeError("Not implemented");
	return null;
};
sys_io_File.copy = function(src,dst) {
	var content = js_Node.require("fs").readFileSync(src);
	js_Node.require("fs").writeFileSync(dst,content);
};
sys_io_File.getBytes = function(path) {
	var o = js_Node.require("fs").openSync(path,"r");
	var s = js_Node.require("fs").fstatSync(o);
	var len = s.size;
	var pos = 0;
	var bytes = haxe_io_Bytes.alloc(s.size);
	while(len > 0) {
		var r = js_Node.require("fs").readSync(o,bytes.b,pos,len,null);
		pos += r;
		len -= r;
	}
	js_Node.require("fs").closeSync(o);
	return bytes;
};
sys_io_File.getContent = function(path) {
	return js_Node.require("fs").readFileSync(path,sys_io_File.UTF8_ENCODING);
};
sys_io_File.saveBytes = function(path,bytes) {
	js_Node.require("fs").writeFileSync(path,bytes.b);
};
sys_io_File.saveContent = function(path,content) {
	js_Node.require("fs").writeFileSync(path,content);
};
sys_io_File.write = function(path,binary) {
	throw new js__$Boot_HaxeError("Not implemented");
	return null;
};
var sys_io_FileSeek = $hxClasses["sys.io.FileSeek"] = { __ename__ : ["sys","io","FileSeek"], __constructs__ : ["SeekBegin","SeekCur","SeekEnd"] };
sys_io_FileSeek.SeekBegin = ["SeekBegin",0];
sys_io_FileSeek.SeekBegin.toString = $estr;
sys_io_FileSeek.SeekBegin.__enum__ = sys_io_FileSeek;
sys_io_FileSeek.SeekCur = ["SeekCur",1];
sys_io_FileSeek.SeekCur.toString = $estr;
sys_io_FileSeek.SeekCur.__enum__ = sys_io_FileSeek;
sys_io_FileSeek.SeekEnd = ["SeekEnd",2];
sys_io_FileSeek.SeekEnd.toString = $estr;
sys_io_FileSeek.SeekEnd.__enum__ = sys_io_FileSeek;
sys_io_FileSeek.__empty_constructs__ = [sys_io_FileSeek.SeekBegin,sys_io_FileSeek.SeekCur,sys_io_FileSeek.SeekEnd];
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
function $arrayPushClosure(a) { return function(x) { a.push(x); }; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
if(Array.prototype.lastIndexOf) HxOverrides.lastIndexOf = function(a1,o1,i1) {
	return Array.prototype.lastIndexOf.call(a1,o1,i1);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var Void = $hxClasses.Void = { __ename__ : ["Void"]};
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
var __map_reserved = {}
var Cookies = require('cookies');
FacebookClient = js_Node.require("facebook-client").FacebookClient;
var Db = require('mongodb').Db;
var connect = require('mongodb').connect;
var Collection = require('mongodb').Collection;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var ServerPair = Server.ServerPair;
var ServerCluster = Server.ServerCluster;
var Cursor = require('mongodb').Cursor;
try {
	var Canvas = js_Node.require("canvas");
} catch( e ) {
	haxe_CallStack.lastException = e;
	if (e instanceof js__$Boot_HaxeError) e = e.val;
}
try {
	var Font = js_Node.require("canvas").Font;
} catch( e ) {
	haxe_CallStack.lastException = e;
	if (e instanceof js__$Boot_HaxeError) e = e.val;
}
try {
	var Image = js_Node.require("canvas").Image;
} catch( e ) {
	haxe_CallStack.lastException = e;
	if (e instanceof js__$Boot_HaxeError) e = e.val;
}
var WebSocketServer = js_Node.require("websocket").server;
nodejs.webkit.$ui = require('nw.gui');
nodejs.webkit.Clipboard = nodejs_webkit_$ui.Clipboard;
nodejs.webkit.Menu = nodejs_webkit_$ui.Menu;
nodejs.webkit.MenuItem = nodejs_webkit_$ui.MenuItem;
nodejs.webkit.Window = nodejs_webkit_$ui.Window;
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
haxe_io_FPHelper.LN2 = 0.6931471805599453;
js_Boot.__toStr = {}.toString;
js_NodeC.UTF8 = "utf8";
js_NodeC.ASCII = "ascii";
js_NodeC.BINARY = "binary";
js_NodeC.BASE64 = "base64";
js_NodeC.HEX = "hex";
js_NodeC.EVENT_EVENTEMITTER_NEWLISTENER = "newListener";
js_NodeC.EVENT_EVENTEMITTER_ERROR = "error";
js_NodeC.EVENT_STREAM_DATA = "data";
js_NodeC.EVENT_STREAM_END = "end";
js_NodeC.EVENT_STREAM_ERROR = "error";
js_NodeC.EVENT_STREAM_CLOSE = "close";
js_NodeC.EVENT_STREAM_DRAIN = "drain";
js_NodeC.EVENT_STREAM_CONNECT = "connect";
js_NodeC.EVENT_STREAM_SECURE = "secure";
js_NodeC.EVENT_STREAM_TIMEOUT = "timeout";
js_NodeC.EVENT_STREAM_PIPE = "pipe";
js_NodeC.EVENT_PROCESS_EXIT = "exit";
js_NodeC.EVENT_PROCESS_UNCAUGHTEXCEPTION = "uncaughtException";
js_NodeC.EVENT_PROCESS_SIGINT = "SIGINT";
js_NodeC.EVENT_PROCESS_SIGUSR1 = "SIGUSR1";
js_NodeC.EVENT_CHILDPROCESS_EXIT = "exit";
js_NodeC.EVENT_HTTPSERVER_REQUEST = "request";
js_NodeC.EVENT_HTTPSERVER_CONNECTION = "connection";
js_NodeC.EVENT_HTTPSERVER_CLOSE = "close";
js_NodeC.EVENT_HTTPSERVER_UPGRADE = "upgrade";
js_NodeC.EVENT_HTTPSERVER_CLIENTERROR = "clientError";
js_NodeC.EVENT_HTTPSERVERREQUEST_DATA = "data";
js_NodeC.EVENT_HTTPSERVERREQUEST_END = "end";
js_NodeC.EVENT_CLIENTREQUEST_RESPONSE = "response";
js_NodeC.EVENT_CLIENTRESPONSE_DATA = "data";
js_NodeC.EVENT_CLIENTRESPONSE_END = "end";
js_NodeC.EVENT_NETSERVER_CONNECTION = "connection";
js_NodeC.EVENT_NETSERVER_CLOSE = "close";
js_NodeC.FILE_READ = "r";
js_NodeC.FILE_READ_APPEND = "r+";
js_NodeC.FILE_WRITE = "w";
js_NodeC.FILE_WRITE_APPEND = "a+";
js_NodeC.FILE_READWRITE = "a";
js_NodeC.FILE_READWRITE_APPEND = "a+";
js_Node.console = console;
js_Node.process = process;
js_Node.require = require;
js_Node.setTimeout = setTimeout;
js_Node.clearTimeout = clearTimeout;
js_Node.setInterval = setInterval;
js_Node.clearInterval = clearInterval;
js_Node.setImmediate = (function($this) {
	var $r;
	var version = HxOverrides.substr(js_Node.process.version,1,null).split(".").map(Std.parseInt);
	$r = version[0] > 0 || version[1] >= 9?js_Node.isNodeWebkit()?global.setImmediate:setImmediate:null;
	return $r;
}(this));
js_Node.clearImmediate = (function($this) {
	var $r;
	var version = HxOverrides.substr(js_Node.process.version,1,null).split(".").map(Std.parseInt);
	$r = version[0] > 0 || version[1] >= 9?js_Node.isNodeWebkit()?global.clearImmediate:clearImmediate:null;
	return $r;
}(this));
js_Node.global = global;
js_Node.module = js_Node.isNodeWebkit()?global.module:module;
js_Node.stringify = JSON.stringify;
js_Node.parse = JSON.parse;
sys_io_File.UTF8_ENCODING = { encoding : "utf8"};
ImportAll.main();
})(typeof console != "undefined" ? console : {log:function(){}});
