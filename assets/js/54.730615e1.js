(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{523:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api-레퍼런스"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-레퍼런스"}},[t._v("#")]),t._v(" API 레퍼런스")]),t._v(" "),s("h2",{attrs:{id:"vuex-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store"}},[t._v("#")]),t._v(" Vuex.Store")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"vuex-store-생성자-옵션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-생성자-옵션"}},[t._v("#")]),t._v(" Vuex.Store 생성자 옵션")]),t._v(" "),s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" state")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("Object | Function")])]),t._v(" "),s("p",[t._v("Vuex 저장소의 루트 상태 객체 입니다. "),s("RouterLink",{attrs:{to:"/kr/guide/state.html"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("오브젝트를 반환하는 함수를 전달하면, 반환된 오브젝트가 루트 상태로 사용됩니다. 이것은 모듈 재사용을 위해 상태 객체를 재사용하고자 할 때 유용합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#모듈-재사용"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"mutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutations"}},[t._v("#")]),t._v(" mutations")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),s("p",[t._v("저장소에 변이를 등록하십시오. 핸들러 함수는 항상 첫 번째 전달인자로 "),s("code",[t._v("state")]),t._v("를 받습니다 (모듈에 정의 된 경우 모듈 로컬 상태가됩니다). 두 번째 "),s("code",[t._v("payload")]),t._v(" 전달인자가 있으면 처리합니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/kr/guide/mutations.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" actions")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("{ [type: string]: Function }")])]),t._v(" "),s("p",[t._v("저장소에 액션을 등록하십시오. 핸들러 함수는 다음 속성을 노출하는 "),s("code",[t._v("context")]),t._v(" 객체를받습니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.state와 같습니다. 또는 모듈에 있는 경우 로컬 상태")]),t._v("\n  rootState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.state와 같습니다. 모듈 안에만 존재합니다")]),t._v("\n  commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.commit와 같습니다.")]),t._v("\n  dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.dispatch와 같습니다.")]),t._v("\n  getters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.getters와 같습니다. 또는 모듈에 있는 로컬 getters")]),t._v("\n  rootGetters "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store.getters와 같습니다. 모듈 안에만 존재합니다")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("두 번째 "),s("code",[t._v("payload")]),t._v(" 전달인자가 있으면 처리합니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/kr/guide/actions.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[t._v("#")]),t._v(" getters")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("{ [key: string]: Function }")])]),t._v(" "),s("p",[t._v("저장소에 getter를 등록하십시오. getter 함수는 다음 전달인자를 받습니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("state,     // 모듈에 정의 된 경우 모듈 로컬 상태가됩니다.\ngetters   // store.getters와 같습니다.\n")])])]),s("p",[t._v("모듈 안에서 정의할 때의 사양입니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("state,       // 모듈에 정의 된 경우 모듈 로컬 상태가됩니다.\ngetters,     // store.getters와 같습니다.\nrootState    // 글로벌 상태 입니다\nrootGetters  // 모든 getters 입니다\n")])])]),s("p",[t._v("등록된 getter는 "),s("code",[t._v("store.getters")]),t._v("에 노출됩니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/kr/guide/getters.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" modules")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("저장소에 병합될 하위 모듈을 포함하는 객체 입니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    namespaced"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("각 모듈은 루트 옵션과 비슷한 "),s("code",[t._v("state")]),t._v(" 와 "),s("code",[t._v("mutations")]),t._v(" 를 포함 할 수 있습니다. 모듈의 상태는 모듈의 키를 사용하여 저장소의 루트 상태에 연결됩니다. 모듈의 변이와 getter는 모듈의 로컬 상태를 루트 상태 대신 첫 번째 전달인자로 받으며 모듈 액션의 "),s("code",[t._v("context.state")]),t._v("도 로컬 상태를 가리 킵니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/kr/guide/modules.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("Array<Function>")])]),t._v(" "),s("p",[t._v("저장소에 적용 할 플러그인 함수의 배열입니다. 플러그인은 저장소를 유일한 전달인자로 받아들이고 아웃바운드 데이터 지속성, 로깅 또는 디버깅을 위한 변이를 감시하거나 (인바운드 데이터 (예: 웹 소켓 또는 관찰 가능 항목)의 디스패치 변이) 감시할 수 있습니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/kr/guide/plugins.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"strict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[t._v("#")]),t._v(" strict")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("boolean")])])]),t._v(" "),s("li",[s("p",[t._v("기본값: "),s("code",[t._v("false")])]),t._v(" "),s("p",[t._v("Vuex 저장소를 strict 모드로 변경합니다. strict 모드에서 변이 핸들러 외부의 Vuex 상태에 대한 임의의 변이는 오류를 발생시킵니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/kr/guide/strict.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h2",{attrs:{id:"vuex-store-인스턴스-속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-인스턴스-속성"}},[t._v("#")]),t._v(" Vuex.Store 인스턴스 속성")]),t._v(" "),s("h3",{attrs:{id:"state-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-2"}},[t._v("#")]),t._v(" state")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("루트 상태. 읽기 전용")])])]),t._v(" "),s("h3",{attrs:{id:"getters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters-2"}},[t._v("#")]),t._v(" getters")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("자료형: "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("등록된 getters 입니다. 읽기 전용.")])])]),t._v(" "),s("h2",{attrs:{id:"vuex-store-인스턴스-메소드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-store-인스턴스-메소드"}},[t._v("#")]),t._v(" Vuex.Store 인스턴스 메소드")]),t._v(" "),s("h3",{attrs:{id:"commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" commit")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("commit(type: string, payload?: any, options?: Object)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("commit(mutation: Object, options?: Object)")])]),t._v(" "),s("p",[t._v("변이를 커밋합니다. "),s("code",[t._v("options")]),t._v(" 에 "),s("code",[t._v("root:true")]),t._v(" 를 포함하면 "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#네임스페이스"}},[t._v("네임스페이스 모듈")]),t._v(" 의 root 변이에 commit 을 허용합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/mutations.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"dispatch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch"}},[t._v("#")]),t._v(" dispatch")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("dispatch(type: string, payload?: any, options?: Object): Promise<any>")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("dispatch(action: Object, options?: Object): Promise<any>")])]),t._v(" "),s("p",[t._v("액션을 디스패치 합니다. "),s("code",[t._v("options")]),t._v(" 에 "),s("code",[t._v("root:true")]),t._v(" 를 포함하면 "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#네임스페이스"}},[t._v("네임스페이스 모듈")]),t._v(" 의 root 액션에 디스패치를 허용합니다. 모든 트리거된 액션 핸들러를 처리하는 Promise를 반환합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/actions.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"replacestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacestate"}},[t._v("#")]),t._v(" replaceState")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("replaceState(state: Object)")])]),t._v(" "),s("p",[t._v("저장소의 루트 상태를 바꿉니다. 상태에 대한 상호작용/시점 변경 목적으로 만 사용하십시오.")])])]),t._v(" "),s("h3",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("watch(fn: Function, callback: Function, options?: Object): Function")])]),t._v(" "),s("p",[s("code",[t._v("fn")]),t._v(" 함수의 반환 값을 반응적으로 지켜보고 값이 변경되면 콜백을 호출합니다. "),s("code",[t._v("fn")]),t._v("는 저장소의 상태를 첫 번째 인수로 받고, getters를 두 번째 인수로 받습니다. Vue의 "),s("code",[t._v("vm.$watch")]),t._v(" 메소드와 같은 옵션을 취하는 옵션 객체를 받아들입니다.")]),t._v(" "),s("p",[t._v("감시를 중단하려면 반환된 핸들 함수를 호출하십시오.")])])]),t._v(" "),s("h3",{attrs:{id:"subscribe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[t._v("#")]),t._v(" subscribe")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("subscribe(handler: Function): Function")])]),t._v(" "),s("p",[t._v("저장소 변이를 구독합니다. "),s("code",[t._v("handler")]),t._v("는 모든 변이 이후 호출되고 변이 디스크립터와 변이 상태를 전달인자로 받습니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("구독을 중단하려면 반환된 구독 해제 함수를 호출하십시오.")]),t._v(" "),s("p",[t._v("플러그인에서 가장 일반적으로 사용됩니다. "),s("RouterLink",{attrs:{to:"/kr/guide/plugins.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"subscribeaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribeaction"}},[t._v("#")]),t._v(" subscribeAction")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("subscribeAction(handler: Function): Function")])])]),t._v(" "),s("blockquote",[s("p",[t._v("2.5.0 에서 추가됨")])]),t._v(" "),s("p",[t._v("저장소 액션을 구독합니다. "),s("code",[t._v("handler")]),t._v("는 모든 디스패치 액션 이후 호출되고 액션 디스크립터와 현재 저장소 상태를 전달인자로 받습니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("구독을 중단하려면 반환된 구독 해제 함수를 호출하십시오.")]),t._v(" "),s("p",[t._v("플러그인에서 가장 일반적으로 사용됩니다. "),s("RouterLink",{attrs:{to:"/kr/guide/plugins.html"}},[t._v("상세")])],1),t._v(" "),s("h3",{attrs:{id:"registermodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registermodule"}},[t._v("#")]),t._v(" registerModule")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("registerModule(path: string | Array<string>, module: Module, options?: Object)")])]),t._v(" "),s("p",[t._v("동적 모듈을 등록합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#동적-모듈-등록"}},[t._v("상세")])],1),t._v(" "),s("p",[s("code",[t._v("options")]),t._v("은 이전 속성을 보호하는 "),s("code",[t._v("preserveState: true")]),t._v("를 가질 수 있습니다. 이것은 서버사이드 렌더링에서 유용합니다.")])])]),t._v(" "),s("h3",{attrs:{id:"unregistermodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unregistermodule"}},[t._v("#")]),t._v(" unregisterModule")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("unregisterModule(path: string | Array<string>)")])]),t._v(" "),s("p",[t._v("동적 모듈을 해제 합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#동적-모듈-등록"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"hotupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hotupdate"}},[t._v("#")]),t._v(" hotUpdate")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("hotUpdate(newOptions: Object)")])]),t._v(" "),s("p",[t._v("새 액션과 변이를 핫 스왑 합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/hot-reload.html"}},[t._v("상세")])],1)])]),t._v(" "),s("h2",{attrs:{id:"컴포넌트-바인딩-헬퍼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-바인딩-헬퍼"}},[t._v("#")]),t._v(" 컴포넌트 바인딩 헬퍼")]),t._v(" "),s("h3",{attrs:{id:"mapstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapstate"}},[t._v("#")]),t._v(" mapState")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapState(namespace?: string, map: Array<string> | Object<string | function>): Object")])]),t._v(" "),s("p",[t._v("Vuex 저장소의 하위 트리를 반환하는 컴포넌트 계산 옵션을 만듭니다. "),s("RouterLink",{attrs:{to:"/kr/guide/state.html#mapstate-헬퍼"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("처음 argument는 string 타입의 namespace가 될 수 있습니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#헬퍼에서-네임스페이스-바인딩"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("두번째 오브젝트 argument는 함수가 될 수 있습니다. "),s("code",[t._v("function(state: any)")])])])]),t._v(" "),s("h3",{attrs:{id:"mapgetters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapgetters"}},[t._v("#")]),t._v(" mapGetters")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapGetters(namespace?: string, map: Array<string> | Object<String>): Object")])]),t._v(" "),s("p",[t._v("getter의 평가된 값을 반환하는 컴포넌트 계산 옵션을 만듭니다. "),s("RouterLink",{attrs:{to:"/kr/guide/getters.html#mapgetters-헬퍼"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("처음 argument는 string 타입의 namespace가 될 수 있습니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#헬퍼에서-네임스페이스-바인딩"}},[t._v("상세")])],1)])]),t._v(" "),s("h3",{attrs:{id:"mapactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapactions"}},[t._v("#")]),t._v(" mapActions")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapActions(namespace?: string, map: Array<string> | Object<string | function>): Object")])]),t._v(" "),s("p",[t._v("액션을 전달하는 컴포넌트 메소드 옵션을 만듭니다. "),s("RouterLink",{attrs:{to:"/kr/guide/actions.html#컴포넌트-내부에서-디스패치-액션-사용하기"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("처음 argument는 string 타입의 namespace가 될 수 있습니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#헬퍼에서-네임스페이스-바인딩"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("두번째 오브젝트 argument는 함수가 될 수 있습니다. "),s("code",[t._v("function(dispatch: function, ...args: any[])")])])])]),t._v(" "),s("h3",{attrs:{id:"mapmutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapmutations"}},[t._v("#")]),t._v(" mapMutations")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("mapMutations(namespace?: string, map: Array<string> | Object<string | function>): Object")])]),t._v(" "),s("p",[t._v("변이를 커밋하는 컴포넌트 메소드 옵션을 만듭니다. "),s("RouterLink",{attrs:{to:"/kr/guide/mutations.html#컴포넌트-안에서-변이-커밋하기"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("처음 argument는 string 타입의 namespace가 될 수 있습니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#헬퍼에서-네임스페이스-바인딩"}},[t._v("상세")])],1),t._v(" "),s("p",[t._v("두번째 오브젝트 argument는 함수가 될 수 있습니다. "),s("code",[t._v("function(commit: function, ...args: any[])")])])])]),t._v(" "),s("h3",{attrs:{id:"createnamespacedhelpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createnamespacedhelpers"}},[t._v("#")]),t._v(" createNamespacedHelpers")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("createNamespacedHelpers(namespace: string): Object")])]),t._v(" "),s("p",[t._v("namespace가 적용된 컴포넌트 바인딩 helper를 만듭니다. 주어진 namespace가 적용된 "),s("code",[t._v("mapState")]),t._v(", "),s("code",[t._v("mapGetters")]),t._v(", "),s("code",[t._v("mapActions")]),t._v(" "),s("code",[t._v("mapMutations")]),t._v("들을 가지고 있는 오브젝트를 반환합니다. "),s("RouterLink",{attrs:{to:"/kr/guide/modules.html#헬퍼에서-네임스페이스-바인딩"}},[t._v("상세")])],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);