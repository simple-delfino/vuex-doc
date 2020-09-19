(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{517:function(t,s,n){"use strict";n.r(s);var e=n(42),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"アプリケーションの構造"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#アプリケーションの構造"}},[t._v("#")]),t._v(" アプリケーションの構造")]),t._v(" "),n("p",[t._v("Vuex は実際のところ、あなたがコードを構造化する方法を制限しません。もっと正確に言うと、それより高いレベルの原理原則を適用させます:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("アプリケーションレベルの状態はストアに集約されます。")])]),t._v(" "),n("li",[n("p",[t._v("状態を変更する唯一の方法は、同期的に処理を行う"),n("strong",[t._v("ミューテーション")]),t._v("をコミットすることのみです。")])]),t._v(" "),n("li",[n("p",[t._v("非同期的なロジックはカプセル化されるべきであり、それは"),n("strong",[t._v("アクション")]),t._v("によって構成されます。")])])]),t._v(" "),n("p",[t._v("これらのルールに従っている限り、プロジェクトをどのように構造化するかはあなた次第です。もしストアファイルが大きくなり過ぎたら、単純にアクションやミューテーション、ゲッターをそれぞれ別のファイルに切り出すことができます。")]),t._v(" "),n("p",[t._v("それなりに手の込んだアプリケーションであれば、モジュールを活用する必要が出てきそうです。プロジェクトの構造の例は以下のようになります:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── index.html\n├── main.js\n├── api\n│   └── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API 呼び出しを抽象化する")]),t._v("\n├── components\n│   ├── App.vue\n│   └── "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n└── store\n    ├── index.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# モジュールを集めてストアをエクスポートする")]),t._v("\n    ├── actions.js        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# アクションのルートファイル")]),t._v("\n    ├── mutations.js      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ミューテーションのルートファイル")]),t._v("\n    └── modules\n        ├── cart.js       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cart モジュール")]),t._v("\n        └── products.js   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# products モジュール")]),t._v("\n")])])]),n("p",[t._v("参考として "),n("a",{attrs:{href:"https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shopping Cart Example"),n("OutboundLink")],1),t._v(" をみてみるのもよいでしょう。")])])}),[],!1,null,null,null);s.default=a.exports}}]);