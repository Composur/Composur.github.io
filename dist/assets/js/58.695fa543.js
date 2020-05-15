(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{423:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"react-hooks-速学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-速学"}},[t._v("#")]),t._v(" React  Hooks 速学")]),t._v(" "),a("blockquote",[a("p",[t._v("Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的 JavaScript 函数。不编写 class 的情况下使用 state 以及其他的 React 特性。")])]),t._v(" "),a("h4",{attrs:{id:"出现的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现的原因"}},[t._v("#")]),t._v(" 出现的原因")]),t._v(" "),a("ul",[a("li",[t._v("代码管理困难，每个组件的状态，修改状态改动的文件较多。Hooks 可以把组件相互关联的部分拆分成函数。使其无需按照生命周期划分。")]),t._v(" "),a("li",[t._v("class 带来的问题，this 绑定、不能很好的压缩、热重载不稳定等问题。")])]),t._v(" "),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[t._v("只能在"),a("strong",[t._v("函数最外层")]),t._v("调用 Hook。不要在循环、条件判断或者子函数中调用")]),t._v(" "),a("li",[t._v("只能在 "),a("strong",[t._v("React 的函数组件")]),t._v("中调用 Hook，"),a("strong",[t._v("不要在普通的 JavaScript 函数中调用 Hook")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("借助插件来强制执行以上规则"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"class-与-hooks-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-与-hooks-的区别"}},[t._v("#")]),t._v(" class 与 hooks 的区别")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Hook 允许我们按照代码的用途分离他们，")]),t._v(" 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的"),a("em",[t._v("每一个")]),t._v(" effect。")])]),t._v(" "),a("h4",{attrs:{id:"新增的-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增的-hook"}},[t._v("#")]),t._v(" 新增的 Hook")]),t._v(" "),a("h5",{attrs:{id:"_1-usestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-usestate"}},[t._v("#")]),t._v(" 1. useState")]),t._v(" "),a("p",[t._v("返回一个 state，以及更新 state 的函数。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("useState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// useState 的唯一参数就是 state 0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个新的叫做 “count” 的 state 变量 ，和一个 操作 count 的函数 setCount")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当函数退出的时候，state 会保存在 React 中，其它变量会被回收。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("You clicked ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(" times")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(" \n        Click me\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Example\n")])])]),a("p",[t._v("我们可以在单个组件中使用多个 State Hook 或 Effect Hook，怎么确定哪个 state 对应 useState ？")]),t._v(" "),a("p",[t._v("答案是：React 靠的是 Hook 调用的顺序，Hook 的调用顺序在每次渲染中都是相同的，所以它能够正常工作。")]),t._v(" "),a("h5",{attrs:{id:"_2-effect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-effect"}},[t._v("#")]),t._v(" 2. Effect")]),t._v(" "),a("blockquote",[a("p",[t._v("用来执行副作用的操作，它跟 class 组件中的 "),a("code",[t._v("componentDidMount")]),t._v("、"),a("code",[t._v("componentDidUpdate")]),t._v(" 和 "),a("code",[t._v("componentWillUnmount")]),t._v(" 具有相同的用途，在第一次渲染和每次更新后都会执行。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于 componentDidMount 和 componentDidUpdate: title 会及时更新。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用浏览器的 API 更新页面标题")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("You clicked ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" times")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个可选参数 仅在 count 更改时更新")]),t._v("\n")])])]),a("p",[t._v("执行结束需要清除副作用 的话，需要返回一个函数，在函数内部清除。")]),t._v(" "),a("h4",{attrs:{id:"自定义hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook"}},[t._v("#")]),t._v(" 自定义Hook")]),t._v(" "),a("blockquote",[a("p",[t._v("通过自定义 Hook，可以将组件逻辑提取到可重用的函数中")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("自定义的 Hook 是一个函数，以 use 开头，useXXX。"),a("strong",[t._v("函数内部可以调用其他的 Hook")])])]),t._v(" "),a("li",[a("p",[t._v("用法和其它 Hook 一样，就像函数一样去传参、使用就可以。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);