(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{404:function(t,e,s){"use strict";s.r(e);var a=s(33),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"ubuntu-apt-cache列出版本列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-apt-cache列出版本列表"}},[t._v("#")]),t._v(" Ubuntu apt-cache列出版本列表")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("apt-cache madison nginx\n")])])]),s("h3",{attrs:{id:"apt-show-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-show-versions"}},[t._v("#")]),t._v(" apt-show-versions")]),t._v(" "),s("p",[t._v("说明：列举出所有版本，且能查看是否已经安装。还可以通过apt-show-versions -u <>来查询是否有升级版本。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("apt-show-versions -a nginx \n")])])]),s("p",[t._v("server {\nlisten       80;\nserver_name  www.vue-blog.top;\n#charset koi8-r;\nlog_format www.vue-blog.top '$remote_addr - $remote_user [$time_local] $request'\naccess_log /var/www/logs/vue-blog.top.log www.vue-blog.top;\nlocation / {\nuwsgi_pass  127.0.0.1:9090;\ninclude uwsgi_params;\n}\nlocation ^~ /static/ {\nroot /home/xt_one/fork/vue-project/vue-blog2/dist;\n}\nlocation ~ ^/(images|javascript|js|css|flash|media)/ {\nexpires 30d;\nroot /home/xt_one/fork/vue-project/vue-blog2/dist/static/;\n}\n}")])])}),[],!1,null,null,null);e.default=o.exports}}]);