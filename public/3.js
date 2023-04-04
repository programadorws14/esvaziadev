(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/home/HomeIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_validate_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/validate_token */ "./resources/js/components/mixins/validate_token.js");
/* harmony import */ var _mixins_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/mixin */ "./resources/js/components/mixins/mixin.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api */ "./resources/js/api/api.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  mixins: [_mixins_validate_token__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    Modal: function Modal() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../shared/Modal */ "./resources/js/components/shared/Modal.vue"));
    },
    Navbar: function Navbar() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../navbar/Nav */ "./resources/js/components/navbar/Nav.vue"));
    }
  },
  data: function data() {
    return {
      loading_declarations: true,
      user: [],
      current_page: null,
      last_page: null,
      declarations: [],
      post: {
        declaration: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.validateToken();

            case 2:
              _this.me().then(function (res) {
                _this.user = res.data;
              });

              _this.getDeclarations();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    submit: function submit() {
      var _this2 = this;

      if (this.post.declaration && this.post.declaration != '') {
        _api_api__WEBPACK_IMPORTED_MODULE_3__["default"].post("/declaration", this.post).then(function (res) {
          if (res.status == 201) {
            if (_this2.post.id) {
              _this2.declarations[_this2.post.indice].declaration = res.data.declaration;
            } else {
              _this2.declarations = [res.data].concat(_toConsumableArray(_this2.declarations));
            }

            _this2.post = {
              declaration: null
            };
          }
        })["catch"](function (e) {
          _this2.message('warn', 'oooops', e.response.data.error);
        });
      }
    },
    getDeclarations: function getDeclarations() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.current_page && _this3.last_page)) {
                  _context2.next = 6;
                  break;
                }

                if (!(_this3.current_page >= _this3.last_page)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return");

              case 5:
                _this3.current_page += 1;

              case 6:
                _context2.next = 8;
                return _api_api__WEBPACK_IMPORTED_MODULE_3__["default"].get("/declarations?page=".concat(_this3.current_page)).then(function (res) {
                  _this3.loading_declarations = false;
                  _this3.declarations = _this3.declarations.concat(res.data.data);
                  _this3.current_page = res.data.current_page;
                  _this3.last_page = res.data.last_page;
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-profile__info[data-v-385a749c]{\n    \n    list-style: none !important;\n}\n.card-profile__info li strong[data-v-385a749c] {\n    max-width: 100px;\n}\n.label_photo_profile[data-v-385a749c]{\n    width: 80px;\n    height: 80px;\n    border:3px dotted rgb(136, 135, 135);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=template&id=385a749c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/home/HomeIndex.vue?vue&type=template&id=385a749c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_logged
    ? _c(
        "div",
        [
          _c("navbar"),
          _vm._v(" "),
          _c("div", { staticClass: "container " }, [
            _c(
              "div",
              { staticClass: "row", attrs: { id: "home" } },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4 col-xl-3 mb-3" }, [
                  _c("div", { staticClass: "p-4 shadow  bg-white rounded" }, [
                    _c(
                      "div",
                      { staticClass: "media align-items-center mb-4" },
                      [
                        !_vm.user.photo
                          ? _c(
                              "label",
                              {
                                staticClass:
                                  "label_photo_profile  rounded-circle mr-3",
                                attrs: { width: "80", height: "80" }
                              },
                              [_vm._v("FOTO")]
                            )
                          : _c("img", {
                              staticClass: "mr-3 rounded-circle",
                              attrs: {
                                src:
                                  "/imagem/profile/" +
                                  _vm.user.id +
                                  "/" +
                                  _vm.user.photo,
                                width: "80",
                                height: "80",
                                alt: ""
                              }
                            }),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v(_vm._s(_vm.user.name ? _vm.user.name : null))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-muted mb-0" }, [
                            _vm._v(
                              _vm._s(_vm._f("dateFormat")(_vm.user.created_at))
                            )
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-5" }, [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "div",
                          { staticClass: "card card-profile text-center" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("h3", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.declarations.length))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-muted px-4" }, [
                              _vm._v("Postagens")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("Você")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(_vm.user.description))
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-8 col-xl-9" }, [
                  _c("div", { staticClass: "card mb-4" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _vm.post.id ? _c("b", [_vm._v("Editando ")]) : _vm._e(),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.post.declaration,
                              expression: "post.declaration",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "declaration",
                            id: "declaration",
                            cols: "30",
                            rows: "2",
                            placeholder: "Faaala dev, o que houve ?"
                          },
                          domProps: { value: _vm.post.declaration },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.post,
                                "declaration",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary mr-1",
                            on: {
                              click: function($event) {
                                return _vm.submit()
                              }
                            }
                          },
                          [_vm._v("Esvaziar")]
                        ),
                        _vm._v(" "),
                        _vm.post.id
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    _vm.post = { declaration: null }
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.loading_declarations
                    ? _c("p", { staticClass: "text-center h5" }, [
                        _vm._v(
                          "\n                    Carregando suas declarações...\n                "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading_declarations
                    ? _c(
                        "div",
                        [
                          _vm._l(_vm.declarations, function(
                            declaration,
                            indice
                          ) {
                            return _c(
                              "div",
                              {
                                key: declaration.id,
                                class:
                                  "card mb-3 " +
                                  (_vm.post.id && _vm.post.id == declaration.id
                                    ? "bg-warning"
                                    : "")
                              },
                              [
                                _c("div", { staticClass: "card-body" }, [
                                  _c(
                                    "div",
                                    { staticClass: "media media-reply" },
                                    [
                                      !declaration.user.photo
                                        ? _c(
                                            "label",
                                            {
                                              staticClass:
                                                "label_photo_profile  rounded-circle mr-3",
                                              attrs: {
                                                width: "50",
                                                height: "50"
                                              }
                                            },
                                            [_vm._v("FOTO")]
                                          )
                                        : _c("img", {
                                            staticClass: "mr-3 rounded-circle",
                                            attrs: {
                                              width: "50",
                                              height: "50",
                                              src:
                                                "/imagem/profile/" +
                                                declaration.user.id +
                                                "/" +
                                                declaration.user.photo,
                                              alt: declaration.user.name
                                            }
                                          }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "media-body" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-sm-flex justify-content-between mb-2"
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "mb-sm-0" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    declaration.user.name
                                                  ) + " "
                                                ),
                                                _c(
                                                  "small",
                                                  {
                                                    staticClass:
                                                      "text-muted ml-3"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        declaration.date_description
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "media-reply__link"
                                              },
                                              [
                                                _vm._m(4, true),
                                                _vm._v(" "),
                                                _vm._m(5, true),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "btn btn-transparent p-0 ml-3 font-weight-bold",
                                                    attrs: { href: "#home" },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.post.id =
                                                          declaration.id
                                                        _vm.post.declaration =
                                                          declaration.declaration
                                                        _vm.post.indice = indice
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        " fas fa-edit"
                                                    }),
                                                    _vm._v(" Editar")
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(declaration.declaration)
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _vm.current_page &&
                          _vm.last_page &&
                          _vm.current_page < _vm.last_page
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-sm btn-lg btn-outline-primary w-100 d-block mb-3",
                                  on: {
                                    click: function($event) {
                                      return _vm.getDeclarations()
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "fas fa-download" }),
                                  _vm._v(
                                    " Carregar mais...\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("modal", { attrs: { id: "start", "show-header": false } }, [
                  _c("h4", { staticClass: "mb-3" }, [
                    _vm._v("uuuuuuph, bora lá")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block w-100 mb-3" }, [
                    _c("span", { staticClass: "h1" }, [_vm._v("1.")]),
                    _vm._v(
                      " Junte todos os pensamentos e emoções que você gerou durante o dia. "
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block w-100 mb-3" }, [
                    _c("span", { staticClass: "h1" }, [_vm._v("2.")]),
                    _vm._v(
                      " Coloque todos dentro do campo de texto disponível na tela, fale tudo que você quiser. "
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block w-100 mb-3" }, [
                    _c("span", { staticClass: "h1" }, [_vm._v("3.")]),
                    _vm._v(
                      ' Depois é só clicar em "ESVAZIAR" e liberar o espaço no seu humor. '
                    )
                  ])
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("notifications", {
            attrs: { group: "message", position: "top right" }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3 mb-3 col-12 text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-lg btn-outline-primary",
          attrs: { "data-toggle": "modal", "data-target": "#start" }
        },
        [
          _c("i", { staticClass: "fas question-circle" }),
          _vm._v(" Sabe como funciona ?\n                ")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mt-2 mb-1 text-primary" }, [
      _c("i", { staticClass: "fas fa-address-book" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "card card-profile text-center" }, [
        _c("span", { staticClass: "mt-2 mb-1 text-primary" }, [
          _c("i", { staticClass: "fas fa-camera" })
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "mb-0" }, [_vm._v("11")]),
        _vm._v(" "),
        _c("p", { staticClass: "text-muted" }, [_vm._v("Fotos")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-center" }, [
      _c("a", { staticClass: "btn btn-primary px-5", attrs: { href: "/me" } }, [
        _vm._v("Atualizar Perfil")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm btn-lg btn-outline-primary mr-2",
        attrs: { "data-toggle": "modal", "data-target": "#start" }
      },
      [
        _c("i", { staticClass: "fa fa-thumbs-up" }),
        _vm._v(" Esvaziei\n                                            ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm btn-lg btn-outline-info mr-2",
        attrs: { "data-toggle": "modal", "data-target": "#start" }
      },
      [
        _c("i", { staticClass: "fa fa-thumbs-down" }),
        _vm._v(" Não Esvaziei\n                                            ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/api.js":
/*!*********************************!*\
  !*** ./resources/js/api/api.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var token = localStorage.getItem('esvaziadev') ? localStorage.getItem('esvaziadev') : null;
var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8000/api"
});

if (token) {
  api.defaults.headers.authorization = "Bearer ".concat(token);
}

/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/components/app/home/HomeIndex.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/app/home/HomeIndex.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeIndex_vue_vue_type_template_id_385a749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeIndex.vue?vue&type=template&id=385a749c&scoped=true& */ "./resources/js/components/app/home/HomeIndex.vue?vue&type=template&id=385a749c&scoped=true&");
/* harmony import */ var _HomeIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/app/home/HomeIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomeIndex_vue_vue_type_style_index_0_id_385a749c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css& */ "./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeIndex_vue_vue_type_template_id_385a749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeIndex_vue_vue_type_template_id_385a749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "385a749c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app/home/HomeIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/app/home/HomeIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/app/home/HomeIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_style_index_0_id_385a749c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=style&index=0&id=385a749c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_style_index_0_id_385a749c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_style_index_0_id_385a749c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_style_index_0_id_385a749c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_style_index_0_id_385a749c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/app/home/HomeIndex.vue?vue&type=template&id=385a749c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/app/home/HomeIndex.vue?vue&type=template&id=385a749c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_template_id_385a749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeIndex.vue?vue&type=template&id=385a749c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/home/HomeIndex.vue?vue&type=template&id=385a749c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_template_id_385a749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeIndex_vue_vue_type_template_id_385a749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/mixins/mixin.js":
/*!*************************************************!*\
  !*** ./resources/js/components/mixins/mixin.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api */ "./resources/js/api/api.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    message: function message(typeMessage) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var message = arguments.length > 2 ? arguments[2] : undefined;
      var durationMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 4000;
      this.$notify({
        group: 'message',
        clean: true
      });
      this.$notify({
        group: 'message',
        title: title,
        text: message,
        type: typeMessage,
        duration: durationMessage
      });
    },
    me: function me() {
      var me = _api_api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/me");

      if (me) {
        return me;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/mixins/validate_token.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/mixins/validate_token.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api */ "./resources/js/api/api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      is_logged: false
    };
  },
  methods: {
    validateToken: function validateToken() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = localStorage.getItem('esvaziadev') ? localStorage.getItem('esvaziadev') : null;

                if (token) {
                  _context.next = 7;
                  break;
                }

                _this.is_logged = false;
                localStorage.removeItem('esvaziadev');
                return _context.abrupt("return", document.location.assign('/login'));

              case 7:
                _this.is_logged = true;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ })

}]);