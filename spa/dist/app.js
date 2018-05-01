webpackJsonp([1],{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(335);
module.exports = __webpack_require__(643);


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_App__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_App__);

window.eventHub = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();




var rootVm = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    components: { App: __WEBPACK_IMPORTED_MODULE_3__components_App___default.a },
    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]
}).$mount('#app');
window.wmd = rootVm;

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Changes__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Changes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Changes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Config__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Dashboard__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Incidents__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Incidents___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Incidents__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_LandingPage__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_LandingPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_LandingPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Login__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_NotFound__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_NotFound___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_NotFound__);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

// Import components








var routes = [{
    path: '/home',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Dashboard___default.a,
    meta: { requiresAuth: true }
}, { path: '/incidents', component: __WEBPACK_IMPORTED_MODULE_5__components_Incidents___default.a }, { path: '/changes', component: __WEBPACK_IMPORTED_MODULE_2__components_Changes___default.a }, { path: '/configuration', component: __WEBPACK_IMPORTED_MODULE_3__components_Config___default.a }, { path: '/login', component: __WEBPACK_IMPORTED_MODULE_7__components_Login___default.a }, { path: '/', component: __WEBPACK_IMPORTED_MODULE_6__components_LandingPage___default.a }, { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__components_NotFound___default.a }];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: routes
}));

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(339)
/* template */
var __vue_template__ = __webpack_require__(340)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Changes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-344b7b43", Component.options)
  } else {
    hotAPI.reload("data-v-344b7b43", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('You have loaded the change management component');
  }
});

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "changes" } }, [
    _vm._v("\n    This will hold change management\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-344b7b43", module.exports)
  }
}

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(342)
/* template */
var __vue_template__ = __webpack_require__(343)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Config.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d8eb872", Component.options)
  } else {
    hotAPI.reload("data-v-1d8eb872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('You have loaded the configuration management component');
  }
});

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "config" } }, [
    _vm._v("\n    This will hold configuration management\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d8eb872", module.exports)
  }
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(345)
/* template */
var __vue_template__ = __webpack_require__(350)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aae30ed8", Component.options)
  } else {
    hotAPI.reload("data-v-aae30ed8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_0__Card___default.a
  },

  data: function data() {
    return {
      cards: [{
        title: "JIRA-12345: Deploy App",
        body: "Deploy Latest App Source to Production environment",
        link: "/changes/JIRA-12345",
        approval: true,
        when: __WEBPACK_IMPORTED_MODULE_1_moment___default()().utc(),
        who: "djfurman"
      }, {
        title: "JIRA-54321: Database baseline for App",
        body: "Get baseline for App database from production database. Downtime is expected.",
        link: "/changes/JIRA-54321",
        approval: true,
        when: __WEBPACK_IMPORTED_MODULE_1_moment___default()().utc().subtract(1, 'day'),
        who: "djfurman"
      }, {
        title: "JIRA-123: Bring new Business App online",
        body: "Deploy new Business App online",
        link: "/changes/JIRA-123",
        approval: true,
        when: __WEBPACK_IMPORTED_MODULE_1_moment___default()().utc().subtract(6, 'day'),
        who: "djfurman"
      }]
    };
  },
  mounted: function mounted() {
    console.log("You have loaded the dashboard component");
  }
});

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(347)
/* template */
var __vue_template__ = __webpack_require__(349)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54cdc180", Component.options)
  } else {
    hotAPI.reload("data-v-54cdc180", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.card_title = this.title;
    this.card_body = this.body;
    this.links_to = this.link;
    this.made_at = __WEBPACK_IMPORTED_MODULE_0_moment___default()(this.when);
    this.made_by = this.who;

    if (!this.approval) {
      this.with_approvals = false;
    } else {
      this.with_approvals = true;
    }
  },


  computed: {
    age: function age() {
      if (this.human_time) {
        return __WEBPACK_IMPORTED_MODULE_0_moment___default()(this.made_at).fromNow();
      }
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(this.made_at).toISOString();
    }
  },

  data: function data() {
    return {
      card_title: "",
      card_body: "",
      links_to: "",
      with_approvals: false,
      made_by: "",
      made_at: __WEBPACK_IMPORTED_MODULE_0_moment___default()(),
      human_time: true
    };
  },


  methods: {
    goTo: function goTo() {
      this.$router.push(this.links_to);
    },
    toggleAge: function toggleAge() {
      this.human_time = !this.human_time;
    }
  },

  props: {
    title: String,
    body: String,
    link: String,
    approval: Boolean,
    when: __WEBPACK_IMPORTED_MODULE_0_moment___default.a,
    who: String
  }
});

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c(
      "header",
      {
        staticClass: "card-header",
        on: {
          click: function($event) {
            _vm.goTo()
          }
        }
      },
      [
        _c("p", { staticClass: "card-header-title" }, [
          _vm._v(_vm._s(_vm.card_title))
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card-content" }, [
      _c("div", { staticClass: "content" }, [
        _vm._v("\n      " + _vm._s(_vm.card_body) + "\n    ")
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("p", [
          _vm._v("Requested By " + _vm._s(_vm.made_by) + ", "),
          _c("span", { on: { click: _vm.toggleAge } }, [
            _vm._v(_vm._s(_vm.age))
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.with_approvals
      ? _c("footer", { staticClass: "footer" }, [
          _c("button", { staticClass: "card-footer-item" }, [
            _vm._v("Approve")
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "card-footer-item" }, [_vm._v("Deny")])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54cdc180", module.exports)
  }
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "dashboard" } }, [
    _vm._v(
      "\n  This dashboard should be the user landing page and provide a direct interaction with necessary components for the user\n  "
    ),
    _c(
      "div",
      { staticClass: "columns" },
      _vm._l(_vm.cards, function(card) {
        return _c(
          "div",
          { key: card.id, staticClass: "column is-one-fourth" },
          [
            _c("card", {
              attrs: {
                title: card.title,
                body: card.body,
                link: card.link,
                approval: card.approval,
                when: card.when,
                who: card.who
              }
            })
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-aae30ed8", module.exports)
  }
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Incidents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2acc7561", Component.options)
  } else {
    hotAPI.reload("data-v-2acc7561", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('You have loaded the incident management component');
  }
});

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "incidents" } }, [
    _vm._v("\n    This will hold incidents\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2acc7561", module.exports)
  }
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(355)
/* template */
var __vue_template__ = __webpack_require__(356)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LandingPage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54f74f74", Component.options)
  } else {
    hotAPI.reload("data-v-54f74f74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            service_list: []
        };
    },


    methods: {
        fetchServices: function fetchServices() {
            // This will be replaced with a database call to get latest services and descriptions
            this.service_list = [{ id: '368ced24-a9c8-481f-affb-48b18962adb5', name: 'Infrastructure Management', desc: 'While each team may know their infrastucture well, combining multiple teams into one or more cloud accounts can make management hard. WMD integrates with cloud providers and allows you to map your infrastructure use cases and identifying cost centers throughout your enterprise architecture.' }, { id: '1def41b3-7d0c-45b6-affb-b201561a661f', name: 'Change Management', desc: 'The heart of production beats as well as it is managed. Scheduled releases with appropriate testing conducted and automatic deployments are a must, but what happens when manual tweaks are required? Managing that process correctly can be a nightmare and in many companies results in an hour of paperwork for a two minute change. Automate the headache and protect what matters, your customer experience.' }, { id: '6b352de4-6f85-4a39-ab27-f8cb0420e619', name: 'Incident Management', desc: 'If your product or service is active, incidents are a matter of when, not if. The key to managing these incidents are to quickly identify and coordinate a team to restore service and build a knowledge base of causes. WMD allows this while providing direct API driven integrations with popular monitoring and response systems, managing the data without getting in the way.' }];
        },
        learnMore: function learnMore(id) {
            this.$router.push('/services/' + id);
        }
    },

    mounted: function mounted() {
        this.fetchServices();
    }
});

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "landing-page" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "columns" },
      _vm._l(_vm.service_list, function(service) {
        return _c(
          "div",
          { key: service.id, staticClass: "column is-one-third" },
          [
            _c("div", { staticClass: "card", attrs: { id: service.id } }, [
              _c("header", { staticClass: "card-header" }, [
                _c("p", { staticClass: "card-header-title is-centered" }, [
                  _vm._v(_vm._s(service.name))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(service.desc) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "card-footer" }, [
                _c(
                  "span",
                  {
                    staticClass: "card-footer-item",
                    on: {
                      click: function($event) {
                        _vm.learnMore(service.id)
                      }
                    }
                  },
                  [_vm._v("Learn More")]
                )
              ])
            ])
          ]
        )
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "hero is-primary is-bold" }, [
      _c("div", { staticClass: "hero-body" }, [
        _c("div", { staticClass: "container" }, [
          _c("h1", { staticClass: "title" }, [
            _vm._v("Well-managed Deployments")
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v("A serverless, cloud-first answer to service management")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54f74f74", module.exports)
  }
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(358)
/* template */
var __vue_template__ = __webpack_require__(622)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef68022e", Component.options)
  } else {
    hotAPI.reload("data-v-ef68022e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_amplify__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_amplify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_amplify__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            username: '',
            password: ''
        };
    },


    methods: {
        login: function login() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_aws_amplify__["Auth"].signIn(this.username, this.password).then(function (user) {
                _this.$store.dispatch('login', {
                    username: _this.username,
                    password: _this.password
                });
            });

            this.redirectTo('home');
        },
        redirectTo: function redirectTo(route) {
            this.$router.push(route);
        }
    }
});

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form", attrs: { id: "login-form" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.login()
          }
        }
      },
      [
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "label", attrs: { for: "username" } }, [
            _vm._v("Username")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.username,
                  expression: "username"
                }
              ],
              staticClass: "input",
              attrs: {
                id: "username",
                type: "text",
                placeholder: "email address or username"
              },
              domProps: { value: _vm.username },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.username = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "label", attrs: { for: "password" } }, [
            _vm._v("Password")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              staticClass: "input",
              attrs: { type: "password", name: "password", id: "password" },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field is-groupd" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c(
              "button",
              {
                staticClass: "button is-text",
                on: {
                  click: function($event) {
                    _vm.redirectTo("/")
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "control" }, [
      _c(
        "button",
        { staticClass: "button is-link", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ef68022e", module.exports)
  }
}

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(624)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/NotFound.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a86191f", Component.options)
  } else {
    hotAPI.reload("data-v-3a86191f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "hero" }, [
      _c("div", { staticClass: "hero-body" }, [
        _c("div", { staticClass: "container" }, [
          _c("h1", { staticClass: "title" }, [
            _vm._v("Uh oh, I can't find what you're attempting to access")
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v(
              "Unless you tried to hack the URL bar, this is probably my fault"
            )
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v("If you did, shame on you!")
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v("If you didn't, I'm sorry, and I'll work on it...")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3a86191f", module.exports)
  }
}

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(332);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var LOGIN = 'LOGIN';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGOUT = 'LOGOUT';

var state = {
    isAuthenticated: !!localStorage.getItem("token")
};

var mutations = (_mutations = {}, _defineProperty(_mutations, LOGIN, function (state) {
    state.pending = true;
}), _defineProperty(_mutations, LOGIN_SUCCESS, function (state) {
    state.isAuthenticated = true;
    state.pending = false;
}), _defineProperty(_mutations, LOGOUT, function (state) {
    state.isAuthenticated = false;
}), _mutations);

var getters = {
    isAuth: function isAuth(state) {
        return state.isAuthenticated;
    }
};

var actions = {
    login: function login(_ref, creds) {
        var commit = _ref.commit;

        commit(LOGIN);
        window.eventHub.$emit('pending', { message: 'Logging you in' });
        return new Promise(function (resolve) {
            setTimeout(function () {
                localStorage.setItem("token", "JWT");
                commit(LOGIN_SUCCESS);
                window.eventHub.$emit('complete');
                resolve();
            }, 1000);
        });
    },
    logout: function logout(_ref2) {
        var commit = _ref2.commit;

        localStorage.removeItem("token");
        commit(LOGOUT);
    }
};

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    actions: actions,
    state: state,
    mutations: mutations,
    getters: getters
}));

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(627)
/* template */
var __vue_template__ = __webpack_require__(642)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-617ab0be", Component.options)
  } else {
    hotAPI.reload("data-v-617ab0be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppFooter__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AppFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppNavBar__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppNavBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AppNavBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Loading__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Loading__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppFooter: __WEBPACK_IMPORTED_MODULE_0__AppFooter___default.a,
    AppNavBar: __WEBPACK_IMPORTED_MODULE_1__AppNavBar___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_2__Loading___default.a
  },

  mounted: function mounted() {
    console.log("Welcome to WMD Professor Falkin, would you like to play a nice game of chess?");
  }
});

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(629)
/* template */
var __vue_template__ = __webpack_require__(630)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/AppFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdb56dc8", Component.options)
  } else {
    hotAPI.reload("data-v-fdb56dc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    year: function year() {
      if (this.current_year == "2018") {
        return "2018";
      }
      return "2018 - " + this.current_year.toString();
    }
  },

  data: function data() {
    return {
      current_year: "2018"
    };
  },
  mounted: function mounted() {
    this.current_year = __WEBPACK_IMPORTED_MODULE_0_moment___default()().format("YYYY");
  }
});

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "footer" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "content has-text-centered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n                Copyright\n                "),
          _c("a", { attrs: { href: "https://github.com/djfurman" } }, [
            _vm._v("Daniel Furman")
          ]),
          _vm._v(", " + _vm._s(_vm.year) + ".\n            ")
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [_vm._v("Well Managed Deployments")]),
      _vm._v(
        " is an open source serverless system. The source code is licensed under the\n                "
      ),
      _c(
        "a",
        {
          attrs: {
            href:
              "https://github.com/djfurman/well-managed-deployments/blob/develop/LICENSE.md"
          }
        },
        [_vm._v("BSD 3-Clause")]
      ),
      _vm._v(".\n            ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fdb56dc8", module.exports)
  }
}

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(632)
/* template */
var __vue_template__ = __webpack_require__(638)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/AppNavBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9dff61e", Component.options)
  } else {
    hotAPI.reload("data-v-f9dff61e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBarBurger__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NavBarBurger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__NavBarBurger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavBarMenu__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavBarMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NavBarMenu__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBarBurger: __WEBPACK_IMPORTED_MODULE_0__NavBarBurger___default.a,
    NavBarMenu: __WEBPACK_IMPORTED_MODULE_1__NavBarMenu___default.a
  },

  methods: {
    goToRoot: function goToRoot() {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(634)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/NavBarBurger.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e8fb235", Component.options)
  } else {
    hotAPI.reload("data-v-1e8fb235", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("a", {
    staticClass: "navbar-burger",
    attrs: { role: "button", "aria-label": "menu", "aria-expanded": "false" }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e8fb235", module.exports)
  }
}

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(636)
/* template */
var __vue_template__ = __webpack_require__(637)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/NavBarMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1beffc2", Component.options)
  } else {
    hotAPI.reload("data-v-f1beffc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    isAuth: function isAuth() {
      return this.$store.getters.isAuth;
    }
  },

  methods: {
    logout: function logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "navbar-menu" }, [
    _c(
      "div",
      { staticClass: "navbar-start" },
      [
        _c(
          "router-link",
          { staticClass: "navbar-item", attrs: { to: "home" } },
          [_vm._v("Home")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "navbar-item", attrs: { to: "changes" } },
          [_vm._v("Changes")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "navbar-item", attrs: { to: "incidents" } },
          [_vm._v("Incidents")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "navbar-item", attrs: { to: "configuration" } },
          [_vm._v("Configuration")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "navbar-end" },
      [
        !_vm.isAuth
          ? _c(
              "router-link",
              { staticClass: "navbar-item", attrs: { to: "login" } },
              [_vm._v("Login")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isAuth
          ? _c(
              "span",
              { staticClass: "navbar-item", on: { click: _vm.logout } },
              [_vm._v("Logout")]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f1beffc2", module.exports)
  }
}

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "navbar",
      attrs: { role: "navigation", "aria-label": "main navigation" }
    },
    [
      _c(
        "div",
        { staticClass: "navbar-brand" },
        [
          _c("a", { staticClass: "navbar-item", on: { click: _vm.goToRoot } }, [
            _c("img", {
              attrs: {
                src: "images/if_Nuclear_explosion_102997.png",
                alt: "WMD: A serverless solution to IT service management",
                width: "64",
                height: "64"
              }
            })
          ]),
          _vm._v(" "),
          _c("nav-bar-burger"),
          _vm._v(" "),
          _c("nav-bar-menu")
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f9dff61e", module.exports)
  }
}

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(640)
/* template */
var __vue_template__ = __webpack_require__(641)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Loading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-efe9d588", Component.options)
  } else {
    hotAPI.reload("data-v-efe9d588", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert2__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        window.eventHub.$on('pending', function (message) {
            __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default()({
                title: 'Please wait',
                text: message.message,
                type: 'info',
                onOpen: function onOpen() {
                    __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.showLoading();
                }
            });
        });

        window.eventHub.$on('complete', function () {
            __WEBPACK_IMPORTED_MODULE_0_sweetalert2___default.a.close();
        });
    }
});

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-efe9d588", module.exports)
  }
}

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("app-nav-bar"),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("app-footer"),
      _vm._v(" "),
      _c("loading")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-617ab0be", module.exports)
  }
}

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

},[334]);