(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/profile/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_validate_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/validate_token */ "./resources/js/components/mixins/validate_token.js");
/* harmony import */ var _mixins_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/mixin */ "./resources/js/components/mixins/mixin.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api */ "./resources/js/api/api.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_mixin__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_validate_token__WEBPACK_IMPORTED_MODULE_1__["default"]],
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
      loading: false,
      errors_profile: [],
      post: {
        name: null,
        email: null,
        password: null,
        photo: null,
        photo_url: null,
        description: null
      }
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.validateToken();

              _context.next = 3;
              return _this.me().then(function (res) {
                _this.post.id = res.data.id;
                _this.post.name = res.data.name;
                _this.post.email = res.data.email;
                _this.post.description = res.data.description;

                if (res.data.photo) {
                  _this.post.photo_url = "/imagem/profile/".concat(res.data.id, "/").concat(res.data.photo);
                }
              });

            case 3:
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var dataForm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                dataForm = new FormData();
                dataForm.append('id', _this2.post.id);
                dataForm.append('name', _this2.post.name);
                dataForm.append('email', _this2.post.email);
                dataForm.append('description', _this2.post.description ? _this2.post.description : '');
                dataForm.append('photo', _this2.post.photo ? _this2.post.photo : '');
                dataForm.append('_method', 'put');
                _context2.next = 10;
                return _api_api__WEBPACK_IMPORTED_MODULE_3__["default"].post('/update-profile', dataForm).then(function (res) {
                  _this2.loading = false;

                  if (res.status == 200 && res.data.user) {
                    if (res.data.user.photo) {
                      console.log(res.data.user.photo);
                      _this2.post.photo_url = "/imagem/profile/".concat(_this2.post.id, "/").concat(res.data.user.photo);
                    }

                    _this2.message('success', 'Sucesso', 'Atualizado com sucesso');

                    _this2.post.photo = null;
                    _this2.post.password = null;
                    _this2.errors_profile = [];
                    _this2.$refs.filePhoto.value = '';
                    return;
                  } else {
                    _this2.message('error', null, 'Não foi possível fazer o cadastro, tente novamente daqui alguns minutos');
                  }
                })["catch"](function (e) {
                  console.log(e);
                  _this2.loading = false;

                  if (e.response.data.errors) {
                    _this2.message('error', null, 'Não foi possível fazer sua atualização');

                    _this2.errors_profile = e.response.data.errors;
                  } else {
                    _this2.message('error', null, 'Não foi possível fazer o seu cadastro');
                  }

                  if (e.response.status == 401 && !e.response.data.active) {
                    localStorage.removeItem('esvaziadev');
                    return document.location.assign('/login');
                  }
                });

              case 10:
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.label_photo_profile[data-v-10b0e6ba]{\n    width: 220px;\n    height: 220px;\n    border:3px dotted rgb(136, 135, 135);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=template&id=10b0e6ba&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/app/profile/Profile.vue?vue&type=template&id=10b0e6ba&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("navbar"),
      _vm._v(" "),
      _c("div", { staticClass: "container " }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 mt-3" }, [
            _c("div", { staticClass: "p-4 shadow  bg-white rounded" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "form-group d-block w-100 d-flex justify-content-center align-items-center "
                },
                [
                  !_vm.post.photo_url
                    ? _c(
                        "label",
                        { staticClass: "label_photo_profile  rounded-circle" },
                        [_vm._v("FOTO")]
                      )
                    : _c("img", {
                        staticClass:
                          "label_photo_profile mr-auto ml-auto rounded-circle",
                        attrs: {
                          src: this.post.photo_url,
                          alt: "Imagem de perfil"
                        }
                      })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "inputName" } }, [
                  _vm._v("Foto de Perfil (JPG, GIF, PNG)")
                ]),
                _vm._v(" "),
                _c("input", {
                  ref: "filePhoto",
                  class:
                    "form-control " +
                    (_vm.errors_profile.photo ? "is-invalid" : "") +
                    " ",
                  attrs: {
                    disabled: _vm.loading,
                    type: "file",
                    accept: "image/*",
                    placeholder: "Escolha sua foto",
                    required: "",
                    autofocus: ""
                  },
                  on: {
                    change: function($event) {
                      _vm.post.photo = $event.target.files[0]
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors_profile.photo,
                        expression: "errors_profile.photo"
                      }
                    ],
                    staticClass: "invalid-feedback"
                  },
                  _vm._l(_vm.errors_profile.photo, function(
                    err_photo,
                    index_err_photo
                  ) {
                    return _c("p", { key: index_err_photo }, [
                      _vm._v(" " + _vm._s(err_photo))
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "inputName" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.post.name,
                      expression: "post.name",
                      modifiers: { trim: true }
                    }
                  ],
                  class:
                    "form-control " +
                    (_vm.errors_profile.name ? "is-invalid" : "") +
                    " ",
                  attrs: {
                    disabled: _vm.loading,
                    type: "text",
                    id: "inputName",
                    placeholder: "Digite seu Nome",
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.post.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.post, "name", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors_profile.name,
                        expression: "errors_profile.name"
                      }
                    ],
                    staticClass: "invalid-feedback"
                  },
                  _vm._l(_vm.errors_profile.name, function(
                    err_name,
                    index_err_name
                  ) {
                    return _c("p", { key: index_err_name }, [
                      _vm._v(" " + _vm._s(err_name))
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "inputEmail" } }, [
                  _vm._v("E-mail")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.post.email,
                      expression: "post.email",
                      modifiers: { trim: true }
                    }
                  ],
                  class:
                    "form-control " +
                    (_vm.errors_profile.email ? "is-invalid" : "") +
                    " ",
                  attrs: {
                    disabled: _vm.loading,
                    type: "email",
                    id: "inputEmail",
                    placeholder: "Digite seu e-mail",
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.post.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.post, "email", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors_profile.email,
                        expression: "errors_profile.email"
                      }
                    ],
                    staticClass: "invalid-feedback"
                  },
                  _vm._l(_vm.errors_profile.email, function(
                    err_email,
                    index_err_mail
                  ) {
                    return _c("p", { key: index_err_mail }, [
                      _vm._v(" " + _vm._s(err_email))
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "inputPassword" } }, [
                  _vm._v("Senha")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.post.password,
                      expression: "post.password",
                      modifiers: { trim: true }
                    }
                  ],
                  class:
                    "form-control " +
                    (_vm.errors_profile.password ? "is-invalid" : "") +
                    " ",
                  attrs: {
                    disabled: _vm.loading,
                    type: "password",
                    id: "inputPassword",
                    placeholder: "Digite sua Senha",
                    required: ""
                  },
                  domProps: { value: _vm.post.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.post, "password", $event.target.value.trim())
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors_profile.password,
                        expression: "errors_profile.password"
                      }
                    ],
                    staticClass: "invalid-feedback"
                  },
                  _vm._l(_vm.errors_profile.password, function(
                    err_password,
                    index_err_password
                  ) {
                    return _c("p", { key: index_err_password }, [
                      _vm._v(" " + _vm._s(err_password))
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "inputEmail" } }, [
                  _vm._v("Fale sobre você")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.trim",
                      value: _vm.post.description,
                      expression: "post.description",
                      modifiers: { trim: true }
                    }
                  ],
                  class: "form-control",
                  attrs: {
                    disabled: _vm.loading,
                    id: "inputEmail",
                    placeholder: "Digite seu e-mail"
                  },
                  domProps: { value: _vm.post.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.post,
                        "description",
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
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-primary btn-block",
                  attrs: { disabled: _vm.loading, type: "submit" },
                  on: {
                    click: function($event) {
                      return _vm.submit()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-edit" }),
                  _vm._v(" Atualizar\n                    ")
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("notifications", {
        attrs: { group: "message", position: "top right" }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-block w-100 d-flex justify-content-between" },
      [
        _c("p", [_c("b", [_vm._v("ATUALIZAR MEU PERFIL")])]),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            { staticClass: "btn btn-sm btn-primary", attrs: { href: "/home" } },
            [_c("i", { staticClass: "fas fa-arrow-left" }), _vm._v(" Voltar")]
          )
        ])
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
  baseURL: "http://localhost:8001/api"
});

if (token) {
  api.defaults.headers.authorization = "Bearer ".concat(token);
}

/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/components/app/profile/Profile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/app/profile/Profile.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_10b0e6ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=10b0e6ba&scoped=true& */ "./resources/js/components/app/profile/Profile.vue?vue&type=template&id=10b0e6ba&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/app/profile/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_10b0e6ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css& */ "./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_10b0e6ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_10b0e6ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10b0e6ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/app/profile/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/app/profile/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/app/profile/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_10b0e6ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=style&index=0&id=10b0e6ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_10b0e6ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_10b0e6ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_10b0e6ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_10b0e6ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/app/profile/Profile.vue?vue&type=template&id=10b0e6ba&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/app/profile/Profile.vue?vue&type=template&id=10b0e6ba&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_10b0e6ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=10b0e6ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/app/profile/Profile.vue?vue&type=template&id=10b0e6ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_10b0e6ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_10b0e6ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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