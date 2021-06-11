module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost/makeanodejsapi-dev',\n  JWT_SECRET: 'thisisasecret'\n};\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost/makeanodejsapi-test'\n};\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost/makeanodejsapi-prod'\n};\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n} //Take defaultConfig and make it a single object \n//So, we have concatenated two objects into one \n\n\nexports.default = { ...defaultConfig,\n  ...envConfig(\"development\")\n};\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//Removes the warning with promises \n_mongoose2.default.Promise = global.Promise; //Connect the db with the url provided \n\ntry {\n  _mongoose2.default.connect(_constants2.default.MONGO_URL);\n} catch (err) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n\n_mongoose2.default.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {\n  throw e;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({\n    extended: true\n  }));\n  app.use(_passport2.default.initialize());\n\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middleware = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-console */\nconst app = (0, _express2.default)();\n(0, _middleware2.default)(app);\n\nconst swaggerUi = __webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\"),\n      swaggerDocument = __webpack_require__(/*! ../swagger.json */ \"./swagger.json\");\n\napp.use('/', _express2.default.static('../client/dist'));\napp.use('/profile', _express2.default.static('../client/dist'));\napp.use('/doctor', _express2.default.static('../client/dist'));\napp.use('/login', _express2.default.static('../client/dist'));\napp.use('/signin', _express2.default.static('../client/dist'));\napp.use('/complain', _express2.default.static('../client/dist'));\napp.use('/about', _express2.default.static('../client/dist'));\n\nconst resolve = __webpack_require__(/*! path */ \"path\").resolve;\n\napp.get('/', function (req, res) {\n  // save html files in the `views` folder...\n  res.sendFile(resolve('../client/dist/index.html'));\n}); // app.get('/', (req, res) => {\n//    res.send('Hello world!');\n// });\n\n(0, _modules2.default)(app);\napp.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(` Server running on port: ${_constants2.default.PORT} --- Running on ${\"development\"} --- Make something great `);\n    console.log(` Dirname: ${resolve('../client/dist/index.html')} `);\n  }\n});\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\napp.use(\"/\", _express2.default.static(__dirname));\napp.use(\"/public\", _express2.default.static(path.join(__dirname, 'public')));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/doctor/doctor.controllers.js":
/*!**************************************************!*\
  !*** ./src/modules/doctor/doctor.controllers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createDoctor = createDoctor;\nexports.getDoctorById = getDoctorById;\nexports.getAllDoctor = getAllDoctor;\nexports.getDoctorByUserId = getDoctorByUserId;\n\nvar _doctor = __webpack_require__(/*! ./doctor.model */ \"./src/modules/doctor/doctor.model.js\");\n\nvar _doctor2 = _interopRequireDefault(_doctor);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createDoctor(req, res) {\n  try {\n    const doctor = await _doctor2.default.createDoctor(req.body, req.user._id);\n    return res.status(_httpStatus2.default.CREATED).json(doctor);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getDoctorById(req, res) {\n  try {\n    const doctor = await _doctor2.default.findById(req.params.id).populate('user');\n    return res.status(_httpStatus2.default.OK).json(doctor);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getAllDoctor(req, res) {\n  try {\n    console.log(`Trying Doctor.find({}) `);\n\n    _doctor2.default.find({\n      user: {\n        $ne: null\n      }\n    }).populate('user').then(doctor => {\n      console.log(`found some doctors  ${doctor.count}`);\n      return res.status(_httpStatus2.default.OK).json(doctor);\n    }).catch(e => {\n      console.log(`Error Post.find({})`);\n      return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n    });\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getDoctorByUserId(req, res) {\n  try {\n    const filter = {\n      user: req.params.id\n    };\n    const doctor = await _doctor2.default.find(filter).populate('user');\n    return res.status(_httpStatus2.default.OK).json(doctor);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/doctor/doctor.controllers.js?");

/***/ }),

/***/ "./src/modules/doctor/doctor.model.js":
/*!********************************************!*\
  !*** ./src/modules/doctor/doctor.model.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst DoctorSchema = new _mongoose.Schema({\n  hospitalname: {\n    type: String,\n    trim: true,\n    required: [true, 'Hospital name is required!']\n  },\n  workhours: {\n    type: String,\n    trim: true,\n    required: [false]\n  },\n  user: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  }\n});\nDoctorSchema.pre('save', function (next) {\n  return next();\n});\nDoctorSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      user: this.user,\n      hospitalname: this.hospitalname,\n      workhours: this.workhours\n    };\n  }\n\n};\nDoctorSchema.statics = {\n  createDoctor(args, user) {\n    return this.create({ ...args,\n      user\n    });\n  }\n\n};\nexports.default = _mongoose2.default.model('Doctor', DoctorSchema);\n\n//# sourceURL=webpack:///./src/modules/doctor/doctor.model.js?");

/***/ }),

/***/ "./src/modules/doctor/doctor.routes.js":
/*!*********************************************!*\
  !*** ./src/modules/doctor/doctor.routes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _doctor = __webpack_require__(/*! ./doctor.controllers */ \"./src/modules/doctor/doctor.controllers.js\");\n\nvar doctorController = _interopRequireWildcard(_doctor);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _doctor2 = __webpack_require__(/*! ./doctor.validations */ \"./src/modules/doctor/doctor.validations.js\");\n\nvar _doctor3 = _interopRequireDefault(_doctor2);\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst routes = new _express.Router();\nroutes.post('/', _auth.authJwt, (0, _expressValidation2.default)(_doctor3.default.createDoctor), doctorController.createDoctor);\nroutes.get('/:id', doctorController.getDoctorById);\nroutes.get('/user/:id', doctorController.getDoctorByUserId);\nroutes.get('/', doctorController.getAllDoctor);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/doctor/doctor.routes.js?");

/***/ }),

/***/ "./src/modules/doctor/doctor.validations.js":
/*!**************************************************!*\
  !*** ./src/modules/doctor/doctor.validations.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createDoctor: {\n    body: {\n      hospitalname: _joi2.default.string().required(),\n      workhours: _joi2.default.string().required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/doctor/doctor.validations.js?");

/***/ }),

/***/ "./src/modules/doctorspecialization/doctorspecialization.controllers.js":
/*!******************************************************************************!*\
  !*** ./src/modules/doctorspecialization/doctorspecialization.controllers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createDoctorspecialization = createDoctorspecialization;\nexports.getDoctorspecializationById = getDoctorspecializationById;\n\nvar _doctorspecialization = __webpack_require__(/*! ./doctorspecialization.model */ \"./src/modules/doctorspecialization/doctorspecialization.model.js\");\n\nvar _doctorspecialization2 = _interopRequireDefault(_doctorspecialization);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createDoctorspecialization(req, res) {\n  try {\n    const doctorspecialization = await _doctorspecialization2.default.create(req.doctor.id, req.specialization);\n    return res.status(_httpStatus2.default.CREATED).json(doctorspecialization);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getDoctorspecializationById(req, res) {\n  try {\n    const doctorspecialization = await _doctorspecialization2.default.findById(req.params.id).populate('doctor');\n    return res.status(_httpStatus2.default.OK).json(doctorspecialization);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/doctorspecialization/doctorspecialization.controllers.js?");

/***/ }),

/***/ "./src/modules/doctorspecialization/doctorspecialization.model.js":
/*!************************************************************************!*\
  !*** ./src/modules/doctorspecialization/doctorspecialization.model.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst DoctorspecializationSchema = new _mongoose.Schema({\n  doctor: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'Doctor'\n  },\n  specialization: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'Specialization'\n  }\n});\nDoctorspecializationSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      doctor: this.doctor,\n      specialization: this.specialization\n    };\n  }\n\n};\nexports.default = _mongoose2.default.model('DoctorspecializationSchema', DoctorspecializationSchema);\n\n//# sourceURL=webpack:///./src/modules/doctorspecialization/doctorspecialization.model.js?");

/***/ }),

/***/ "./src/modules/doctorspecialization/doctorspecialization.routes.js":
/*!*************************************************************************!*\
  !*** ./src/modules/doctorspecialization/doctorspecialization.routes.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _doctorspecialization = __webpack_require__(/*! ./doctorspecialization.controllers */ \"./src/modules/doctorspecialization/doctorspecialization.controllers.js\");\n\nvar doctorspecializationController = _interopRequireWildcard(_doctorspecialization);\n\nvar _doctorspecialization2 = __webpack_require__(/*! ./doctorspecialization.validations */ \"./src/modules/doctorspecialization/doctorspecialization.validations.js\");\n\nvar _doctorspecialization3 = _interopRequireDefault(_doctorspecialization2);\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst routes = new _express.Router();\nroutes.post('/', (0, _expressValidation2.default)(_doctorspecialization3.default.createDoctorspecialization), doctorspecializationController.createDoctorspecialization);\nroutes.get('/:id', doctorspecializationController.getDoctorspecializationById);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/doctorspecialization/doctorspecialization.routes.js?");

/***/ }),

/***/ "./src/modules/doctorspecialization/doctorspecialization.validations.js":
/*!******************************************************************************!*\
  !*** ./src/modules/doctorspecialization/doctorspecialization.validations.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createDoctorspecialization: {\n    body: {\n      doctor: _joi2.default.string(),\n      specialization: _joi2.default.string()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/doctorspecialization/doctorspecialization.validations.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _post = __webpack_require__(/*! ./posts/post.routes */ \"./src/modules/posts/post.routes.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _doctor = __webpack_require__(/*! ./doctor/doctor.routes */ \"./src/modules/doctor/doctor.routes.js\");\n\nvar _doctor2 = _interopRequireDefault(_doctor);\n\nvar _doctorspecialization = __webpack_require__(/*! ./doctorspecialization/doctorspecialization.routes */ \"./src/modules/doctorspecialization/doctorspecialization.routes.js\");\n\nvar _doctorspecialization2 = _interopRequireDefault(_doctorspecialization);\n\nvar _specialization = __webpack_require__(/*! ./specialization/specialization.routes */ \"./src/modules/specialization/specialization.routes.js\");\n\nvar _specialization2 = _interopRequireDefault(_specialization);\n\nvar _postsymp = __webpack_require__(/*! ./postsymp/postsymp.routes */ \"./src/modules/postsymp/postsymp.routes.js\");\n\nvar _postsymp2 = _interopRequireDefault(_postsymp);\n\nvar _symtom = __webpack_require__(/*! ./symptom/symtom.routes */ \"./src/modules/symptom/symtom.routes.js\");\n\nvar _symtom2 = _interopRequireDefault(_symtom);\n\nvar _auth = __webpack_require__(/*! ../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  app.use('/api/v1/users', _user2.default);\n  app.use('/api/v1/posts', _post2.default);\n  app.use('/api/v1/doctors', _doctor2.default);\n  app.use('/api/v1/specialization', _specialization2.default);\n  app.use('/api/v1/symptom', _symtom2.default);\n  app.use('/api/v1/doctorspecialization', _doctorspecialization2.default);\n  app.use('/api/v1/postsymp', _postsymp2.default);\n  app.get('/hello', _auth.authJwt, (req, res) => {\n    res.send('This is a private route!!!!');\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/posts/post.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/posts/post.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createPost = createPost;\nexports.getPostById = getPostById;\nexports.getAllPosts = getAllPosts;\nexports.getParentPosts = getParentPosts;\nexports.getPostByUserId = getPostByUserId;\n\nvar _post = __webpack_require__(/*! ./post.model */ \"./src/modules/posts/post.model.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createPost(req, res) {\n  try {\n    const post = await _post2.default.createPost(req.body, req.user._id);\n    return res.status(_httpStatus2.default.CREATED).json(post);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getPostById(req, res) {\n  try {\n    const post = await _post2.default.findById(req.params.id).populate('user');\n    return res.status(_httpStatus2.default.OK).json(post);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getAllPosts(req, res) {\n  try {\n    console.log(`Trying Post.find({}) `);\n\n    _post2.default.find({\n      user: {\n        $ne: null\n      }\n    }).populate('user').then(post => {\n      console.log(`found some posts  ${post.count}`);\n      return res.status(_httpStatus2.default.OK).json(post);\n    }).catch(e => {\n      console.log(`Error Post.find({})`);\n      return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n    });\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getParentPosts(req, res) {\n  try {\n    _post2.default.find({\n      parentid: {\n        $eq: null\n      }\n    }).populate('user').then(post => {\n      return res.status(_httpStatus2.default.OK).json(post);\n    }).catch(e => {\n      console.log(`Error Post.find({})`);\n      return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n    });\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getPostByUserId(req, res) {\n  try {\n    const filter = {\n      user: req.params.id\n    };\n    const post = await _post2.default.find(filter).populate('user');\n    return res.status(_httpStatus2.default.OK).json(post);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/posts/post.controllers.js?");

/***/ }),

/***/ "./src/modules/posts/post.model.js":
/*!*****************************************!*\
  !*** ./src/modules/posts/post.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst PostSchema = new _mongoose.Schema({\n  title: {\n    type: String,\n    trim: true,\n    default: null\n  },\n  parentid: {\n    type: String,\n    trim: true,\n    default: null\n  },\n  doctorid: {\n    type: String,\n    trim: true,\n    default: null\n  },\n  text: {\n    type: String,\n    trim: true,\n    required: [true, 'Text   is required!'],\n    minlength: [10, 'Text   need to be longer!']\n  },\n  user: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  },\n  favoriteCount: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\nPostSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: '{VALUE} already taken!'\n});\nPostSchema.pre('validate', function (next) {\n  next();\n});\nPostSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      title: this.title,\n      text: this.text,\n      parentid: this.parentid,\n      createdAt: this.createdAt,\n      user: this.user,\n      doctorid: this.doctorid,\n      favoriteCount: this.favoriteCount\n    };\n  }\n\n};\nPostSchema.statics = {\n  createPost(args, user) {\n    return this.create({ ...args,\n      user\n    });\n  }\n\n};\nexports.default = _mongoose2.default.model('Post', PostSchema);\n\n//# sourceURL=webpack:///./src/modules/posts/post.model.js?");

/***/ }),

/***/ "./src/modules/posts/post.routes.js":
/*!******************************************!*\
  !*** ./src/modules/posts/post.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _post = __webpack_require__(/*! ./post.controllers */ \"./src/modules/posts/post.controllers.js\");\n\nvar postController = _interopRequireWildcard(_post);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _post2 = __webpack_require__(/*! ./post.validations */ \"./src/modules/posts/post.validations.js\");\n\nvar _post3 = _interopRequireDefault(_post2);\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\nroutes.post('/', _auth.authJwt, (0, _expressValidation2.default)(_post3.default.createPost), postController.createPost);\nroutes.get('/p', postController.getParentPosts);\nroutes.get('/:id', postController.getPostById);\nroutes.get('/user/:id', postController.getPostByUserId);\nroutes.get('/', postController.getAllPosts);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/posts/post.routes.js?");

/***/ }),

/***/ "./src/modules/posts/post.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/posts/post.validations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createPost: {\n    body: {\n      title: _joi2.default.string(),\n      text: _joi2.default.string().required(),\n      parentid: _joi2.default.string(),\n      doctorid: _joi2.default.string()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/posts/post.validations.js?");

/***/ }),

/***/ "./src/modules/postsymp/postsymp.controllers.js":
/*!******************************************************!*\
  !*** ./src/modules/postsymp/postsymp.controllers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createPostsymp = createPostsymp;\nexports.getPostsympById = getPostsympById;\n\nvar _postsymp = __webpack_require__(/*! ./postsymp.model */ \"./src/modules/postsymp/postsymp.model.js\");\n\nvar _postsymp2 = _interopRequireDefault(_postsymp);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createPostsymp(req, res) {\n  try {\n    const postsymp = await _postsymp2.default.create(req.post.id, req.symptom.id);\n    return res.status(_httpStatus2.default.CREATED).json(postsymp);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getPostsympById(req, res) {\n  try {\n    const postsymp = await Postsymp.findById(req.params.id).populate('post');\n    return res.status(_httpStatus2.default.OK).json(postsymp);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/postsymp/postsymp.controllers.js?");

/***/ }),

/***/ "./src/modules/postsymp/postsymp.model.js":
/*!************************************************!*\
  !*** ./src/modules/postsymp/postsymp.model.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst PostsympSchema = new _mongoose.Schema({\n  post: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'Post'\n  },\n  symptom: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'Symtom'\n  }\n});\nPostsympSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      post: this.post,\n      symptom: this.symptom\n    };\n  }\n\n};\nexports.default = _mongoose2.default.model('PostsymptomSchema', PostsympSchema);\n\n//# sourceURL=webpack:///./src/modules/postsymp/postsymp.model.js?");

/***/ }),

/***/ "./src/modules/postsymp/postsymp.routes.js":
/*!*************************************************!*\
  !*** ./src/modules/postsymp/postsymp.routes.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _postsymp = __webpack_require__(/*! ./postsymp.controllers */ \"./src/modules/postsymp/postsymp.controllers.js\");\n\nvar PostsympController = _interopRequireWildcard(_postsymp);\n\nvar _postsymp2 = __webpack_require__(/*! ./postsymp.validations */ \"./src/modules/postsymp/postsymp.validations.js\");\n\nvar _postsymp3 = _interopRequireDefault(_postsymp2);\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst routes = new _express.Router();\nroutes.post('/', (0, _expressValidation2.default)(_postsymp3.default.createPostsymp), PostsympController.createPostsymp);\nroutes.get('/:id', PostsympController.getPostsympById);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/postsymp/postsymp.routes.js?");

/***/ }),

/***/ "./src/modules/postsymp/postsymp.validations.js":
/*!******************************************************!*\
  !*** ./src/modules/postsymp/postsymp.validations.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createPostsymp: {\n    body: {\n      post: _joi2.default.string(),\n      symptom: _joi2.default.string()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/postsymp/postsymp.validations.js?");

/***/ }),

/***/ "./src/modules/specialization/specialization.controllers.js":
/*!******************************************************************!*\
  !*** ./src/modules/specialization/specialization.controllers.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createSpecialization = createSpecialization;\nexports.getSpecializationById = getSpecializationById;\nexports.getAllSpecializations = getAllSpecializations;\n\nvar _specialization = __webpack_require__(/*! ./specialization.model */ \"./src/modules/specialization/specialization.model.js\");\n\nvar _specialization2 = _interopRequireDefault(_specialization);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createSpecialization(req, res) {\n  try {\n    const specialization = await _specialization2.default.create(req.body);\n    return res.status(_httpStatus2.default.CREATED).json(specialization);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getSpecializationById(req, res) {\n  try {\n    const specialization = await _specialization2.default.findById(req.params.id).populate('doctor');\n    return res.status(_httpStatus2.default.OK).json(specialization);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getAllSpecializations(req, res) {\n  try {\n    const specialization = await _specialization2.default.find(req.params.id);\n    return res.status(_httpStatus2.default.OK).json(specialization);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/specialization/specialization.controllers.js?");

/***/ }),

/***/ "./src/modules/specialization/specialization.model.js":
/*!************************************************************!*\
  !*** ./src/modules/specialization/specialization.model.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst SpecializationSchema = new _mongoose.Schema({\n  name: {\n    type: String,\n    required: [true, 'Name   is required!'],\n    unique: true\n  }\n});\nSpecializationSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      name: this.name\n    };\n  }\n\n};\nexports.default = _mongoose2.default.model('Specialization', SpecializationSchema);\n\n//# sourceURL=webpack:///./src/modules/specialization/specialization.model.js?");

/***/ }),

/***/ "./src/modules/specialization/specialization.routes.js":
/*!*************************************************************!*\
  !*** ./src/modules/specialization/specialization.routes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _specialization = __webpack_require__(/*! ./specialization.controllers */ \"./src/modules/specialization/specialization.controllers.js\");\n\nvar specializationController = _interopRequireWildcard(_specialization);\n\nvar _specialization2 = __webpack_require__(/*! ./specialization.validations */ \"./src/modules/specialization/specialization.validations.js\");\n\nvar _specialization3 = _interopRequireDefault(_specialization2);\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\nroutes.post('/', (0, _expressValidation2.default)(_specialization3.default.createSpecialization), specializationController.createSpecialization);\nroutes.get('/:id', specializationController.getSpecializationById);\nroutes.get('/', specializationController.getAllSpecializations);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/specialization/specialization.routes.js?");

/***/ }),

/***/ "./src/modules/specialization/specialization.validations.js":
/*!******************************************************************!*\
  !*** ./src/modules/specialization/specialization.validations.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createSpecialization: {\n    body: {\n      name: _joi2.default.string().required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/specialization/specialization.validations.js?");

/***/ }),

/***/ "./src/modules/symptom/symtom.controllers.js":
/*!***************************************************!*\
  !*** ./src/modules/symptom/symtom.controllers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createSymptom = createSymptom;\nexports.getSymptomById = getSymptomById;\nexports.getAllSymptom = getAllSymptom;\n\nvar _symtom = __webpack_require__(/*! ./symtom.model */ \"./src/modules/symptom/symtom.model.js\");\n\nvar _symtom2 = _interopRequireDefault(_symtom);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createSymptom(req, res) {\n  try {\n    const symptom = await _symtom2.default.create(req.body);\n    return res.status(_httpStatus2.default.CREATED).json(symptom);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getSymptomById(req, res) {\n  try {\n    const symptom = await _symtom2.default.findById(req.params.id).populate('post');\n    return res.status(_httpStatus2.default.OK).json(symptom);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getAllSymptom(req, res) {\n  try {\n    const symptom = await _symtom2.default.find(req.params.id);\n    return res.status(_httpStatus2.default.OK).json(symptom);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/symptom/symtom.controllers.js?");

/***/ }),

/***/ "./src/modules/symptom/symtom.model.js":
/*!*********************************************!*\
  !*** ./src/modules/symptom/symtom.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst SymtomSchema = new _mongoose.Schema({\n  name: {\n    type: String,\n    required: [true, 'Name   is required!'],\n    unique: true\n  }\n});\nSymtomSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      name: this.name\n    };\n  }\n\n};\nexports.default = _mongoose2.default.model('Symtom', SymtomSchema);\n\n//# sourceURL=webpack:///./src/modules/symptom/symtom.model.js?");

/***/ }),

/***/ "./src/modules/symptom/symtom.routes.js":
/*!**********************************************!*\
  !*** ./src/modules/symptom/symtom.routes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _symtom = __webpack_require__(/*! ./symtom.controllers */ \"./src/modules/symptom/symtom.controllers.js\");\n\nvar symptomController = _interopRequireWildcard(_symtom);\n\nvar _symtom2 = __webpack_require__(/*! ./symtom.validations */ \"./src/modules/symptom/symtom.validations.js\");\n\nvar _symtom3 = _interopRequireDefault(_symtom2);\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nconst routes = new _express.Router();\nroutes.post('/', (0, _expressValidation2.default)(_symtom3.default.createSymptom), symptomController.createSymptom);\nroutes.get('/:id', symptomController.getSymptomById);\nroutes.get('/', symptomController.getAllSymptom);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/symptom/symtom.routes.js?");

/***/ }),

/***/ "./src/modules/symptom/symtom.validations.js":
/*!***************************************************!*\
  !*** ./src/modules/symptom/symtom.validations.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createSymptom: {\n    body: {\n      name: _joi2.default.string().required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/symptom/symtom.validations.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\nexports.getUserById = getUserById;\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n  try {\n    const user = await _user2.default.create(req.body);\n    return res.status(_httpStatus2.default.CREATED).json(user.toAuthJSON());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nfunction login(req, res, next) {\n  res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());\n  return next();\n}\n\nasync function getUserById(req, res) {\n  try {\n    const user = await _user2.default.findById(req.params.id).populate('user');\n    return res.status(_httpStatus2.default.OK).json(user);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);\n\nvar _user = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n\n      message: '{VALUE} is not a valid email!'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'FirstName is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'LastName is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'UserName is required!'],\n    trim: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _user.passwordReg.test(password);\n      },\n\n      message: '{VALUE} is not a valid password!'\n    }\n  }\n});\nUserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nUserSchema.methods = {\n  _hashPassword(password) {\n    return _bcryptNodejs2.default.hashSync(password);\n  },\n\n  authenticateUser(password) {\n    return _bcryptNodejs2.default.compareSync(password, this.password);\n  },\n\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id\n    }, _constants2.default.JWT_SECRET);\n  },\n\n  toAuthJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: `JWT ${this.createToken()}`\n    };\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      firstName: this.firstName,\n      lastName: this.lastName,\n      email: this.email //token: `JWT ${this.createToken()}`,\n\n    };\n  }\n\n};\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\nroutes.post('/signup', (0, _expressValidation2.default)(_user3.default.signup), userController.signUp);\nexports.default = routes;\nroutes.post('/login', _auth.authLocal, userController.login);\nroutes.get('/:id', userController.getUserById);\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.validations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nexports.default = {\n  signup: {\n    email: _joi2.default.string().email().required(),\n    password: _joi2.default.string().regex(passwordReg).required(),\n    firstName: _joi2.default.string().required(),\n    lastName: _joi2.default.string().required(),\n    userName: _joi2.default.string().required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwt = exports.authLocal = undefined;\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst localOpts = {\n  usernameField: 'email'\n}; // Jwt strategy\n\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme(\"jwt\"),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n    //Identify user by ID\n    const user = await _user2.default.findById(payload._id);\n\n    if (!user) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\n\n_passport2.default.use(jwtStrategy);\n\nconst authLocal = exports.authLocal = _passport2.default.authenticate('local', {\n  session: false\n});\n\nconst authJwt = exports.authJwt = _passport2.default.authenticate('jwt', {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Transpile all code following this line with babel and use 'env' (aka ES6) preset.\n__webpack_require__(/*! babel-register */ \"babel-register\")({\n  presets: ['env']\n}); //console.log(process.env.NODE_ENV.trim())\n// Import the rest of our application.\n\n\nmodule.exports = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n//# sourceURL=webpack:///./src/start.js?");

/***/ }),

/***/ "./swagger.json":
/*!**********************!*\
  !*** ./swagger.json ***!
  \**********************/
/*! exports provided: swagger, info, host, basePath, tags, schemes, consumes, produces, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"swagger\\\":\\\"2.0\\\",\\\"info\\\":{\\\"version\\\":\\\"1.0.0\\\",\\\"description\\\":\\\"My Patient Doctor Application API\\\",\\\"license\\\":{\\\"name\\\":\\\"MIT\\\",\\\"url\\\":\\\"https://opensource.org/licenses/MIT\\\"}},\\\"host\\\":\\\"localhost:3000\\\",\\\"basePath\\\":\\\"/\\\",\\\"tags\\\":[{\\\"name\\\":\\\"Medical Care Consultations\\\",\\\"description\\\":\\\"API for patients and doctors in the system\\\"}],\\\"schemes\\\":[\\\"http\\\"],\\\"consumes\\\":[\\\"application/json\\\"],\\\"produces\\\":[\\\"application/json\\\"]}\");\n\n//# sourceURL=webpack:///./swagger.json?");

/***/ }),

/***/ "babel-register":
/*!*********************************!*\
  !*** external "babel-register" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-register\");\n\n//# sourceURL=webpack:///external_%22babel-register%22?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-ui-express\");\n\n//# sourceURL=webpack:///external_%22swagger-ui-express%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });