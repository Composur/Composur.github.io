(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{398:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http、https、原理握手过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http、https、原理握手过程"}},[t._v("#")]),t._v(" HTTP、HTTPS、原理握手过程")]),t._v(" "),a("h3",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("p",[t._v("HTTP 缺省工作在TCP协议80端口，用户访问网站http:// 打头的都是标准HTTP服务，HTTP所封装的信息是明文的，通过抓包工具可以分析其信息内容，如果这些信息包含有你的银行卡帐号、密码，你肯定无法接受这种服务，那有没有可以加密这些敏感信息的服务呢？那就是HTTPS！")]),t._v(" "),a("p",[t._v("HTTPS缺省工作在TCP协议443端口，它的工作流程一般如以下方式：\n1） 完成TCP三次同步握手\n2） 客户端验证服务器数字证书，通过，进入步骤3\n3） DH算法协商对称加密算法的密钥、hash算法的密钥\n4） SSL安全加密隧道协商完成\n5）网页以加密的方式传输，用协商的对称加密算法和密钥加密，保证数据机密性；用协商的hash算法进行数据完整性保护，保证数据不被篡改")]),t._v(" "),a("p",[t._v("如果HTTPS是网银服务，以上SSL安全隧道成功建立才会要求用户输入账户信息，账户信息是在安全隧道里传输，所以不会泄密！")])])}),[],!1,null,null,null);s.default=e.exports}}]);