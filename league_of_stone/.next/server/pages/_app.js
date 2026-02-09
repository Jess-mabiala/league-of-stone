/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/authSlice.js":
/*!**************************!*\
  !*** ./src/authSlice.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/*import { createSlice } from \"@reduxjs/toolkit\";\n\nconst getInitialState = () => {\n  if (typeof window !== \"undefined\") {\n    return {\n      token: sessionStorage .getItem(\"authToken\") || null,\n      name: sessionStorage .getItem(\"username\") || \"\",\n    };\n  }\n  return { token: null, name: \"\" }; // Retourne un état valide côté serveur\n};\n\nconst authSlice = createSlice({\n  name: \"auth\",\n  initialState : getInitialState(),\n  //token: typeof window !== \"undefined\" ? sessionStorage .getItem(\"authToken\") || null : null,\n  reducers: {\n    login: (state, action) => {\n      state.token = action.payload.token;\n      state.name = action.payload.name;\n      sessionStorage .setItem(\"authToken\", action.payload.token);\n      sessionStorage .setItem(\"username\", action.payload.name);\n      console.log(\"données stockées\");\n      setTimeout(() => {\n        state.token = null;\n        sessionStorage .removeItem(\"authToken\");\n      }, 60 * 60 * 1000);\n    },\n    logout: (state) => {\n      state.token = null;\n      sessionStorage .removeItem(\"username\");\n      sessionStorage .removeItem(\"authToken\");\n    },\n  },\n});\n\nexport const { login, logout } = authSlice.actions;\n\nexport default authSlice.reducer;*/ \nconst initialState = {\n    token:  false ? 0 : null,\n    name:  false ? 0 : null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            state.token = action.payload.token;\n            state.name = action.payload.name;\n            if (false) {}\n        },\n        logout: (state)=>{\n            state.token = null;\n            state.name = null;\n            if (false) {}\n        }\n    }\n});\nconst { login, logout } = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FzQ2lDLEdBRWM7QUFFL0MsTUFBTUMsZUFBZTtJQUNuQkMsT0FBTyxNQUE2QixHQUFHQyxDQUFvQyxHQUFHO0lBQzlFRSxNQUFNLE1BQTZCLEdBQUdGLENBQW1DLEdBQUc7QUFDOUU7QUFFQSxNQUFNRyxZQUFZTiw2REFBV0EsQ0FBQztJQUM1QkssTUFBTTtJQUNOSjtJQUNBTSxVQUFVO1FBQ1JDLE9BQU8sQ0FBQ0MsT0FBT0M7WUFDYkQsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDbENPLE1BQU1KLElBQUksR0FBR0ssT0FBT0MsT0FBTyxDQUFDTixJQUFJO1lBQ2hDLElBQUksS0FBNkIsRUFBRSxFQUdsQztRQUNIO1FBQ0FRLFFBQVEsQ0FBQ0o7WUFDUEEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1KLElBQUksR0FBRztZQUNiLElBQUksS0FBNkIsRUFBRSxFQUdsQztRQUNIO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUcsS0FBSyxFQUFFSyxNQUFNLEVBQUUsR0FBR1AsVUFBVVMsT0FBTyxDQUFDO0FBQ25ELGlFQUFlVCxVQUFVVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXR1XFxEZXNrdG9wXFxMSUNFTkNFX01JQVNIU1xcTDNfTUlBU0hTMlxcU0VNRVNUUkVfMlxcUFJPR1JBTU1BVElPTl9XRUJcXHByb2pldF9sZWFndWVfb2Zfc3RvbmVcXGxlYWd1ZV9vZl9zdG9uZVxcc3JjXFxhdXRoU2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGdldEluaXRpYWxTdGF0ZSA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IHNlc3Npb25TdG9yYWdlIC5nZXRJdGVtKFwiYXV0aFRva2VuXCIpIHx8IG51bGwsXG4gICAgICBuYW1lOiBzZXNzaW9uU3RvcmFnZSAuZ2V0SXRlbShcInVzZXJuYW1lXCIpIHx8IFwiXCIsXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyB0b2tlbjogbnVsbCwgbmFtZTogXCJcIiB9OyAvLyBSZXRvdXJuZSB1biDDqXRhdCB2YWxpZGUgY8O0dMOpIHNlcnZldXJcbn07XG5cbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhdXRoXCIsXG4gIGluaXRpYWxTdGF0ZSA6IGdldEluaXRpYWxTdGF0ZSgpLFxuICAvL3Rva2VuOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gc2Vzc2lvblN0b3JhZ2UgLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikgfHwgbnVsbCA6IG51bGwsXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9naW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xuICAgICAgc3RhdGUubmFtZSA9IGFjdGlvbi5wYXlsb2FkLm5hbWU7XG4gICAgICBzZXNzaW9uU3RvcmFnZSAuc2V0SXRlbShcImF1dGhUb2tlblwiLCBhY3Rpb24ucGF5bG9hZC50b2tlbik7XG4gICAgICBzZXNzaW9uU3RvcmFnZSAuc2V0SXRlbShcInVzZXJuYW1lXCIsIGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coXCJkb25uw6llcyBzdG9ja8OpZXNcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3RhdGUudG9rZW4gPSBudWxsO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZSAucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcbiAgICAgIH0sIDYwICogNjAgKiAxMDAwKTtcbiAgICB9LFxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS50b2tlbiA9IG51bGw7XG4gICAgICBzZXNzaW9uU3RvcmFnZSAucmVtb3ZlSXRlbShcInVzZXJuYW1lXCIpO1xuICAgICAgc2Vzc2lvblN0b3JhZ2UgLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIik7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7Ki9cblxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRva2VuOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gc2Vzc2lvblN0b3JhZ2UgLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikgOiBudWxsLFxuICBuYW1lOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gc2Vzc2lvblN0b3JhZ2UgLmdldEl0ZW0oXCJ1c2VybmFtZVwiKSA6IG51bGwsXG59O1xuXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYXV0aFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9naW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xuICAgICAgc3RhdGUubmFtZSA9IGFjdGlvbi5wYXlsb2FkLm5hbWU7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZSAuc2V0SXRlbShcImF1dGhUb2tlblwiLCBhY3Rpb24ucGF5bG9hZC50b2tlbik7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlIC5zZXRJdGVtKFwidXNlcm5hbWVcIiwgYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUudG9rZW4gPSBudWxsO1xuICAgICAgc3RhdGUubmFtZSA9IG51bGw7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZSAucmVtb3ZlSXRlbShcImF1dGhUb2tlblwiKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UgLnJlbW92ZUl0ZW0oXCJ1c2VybmFtZVwiKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dvdXQgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibmFtZSIsImF1dGhTbGljZSIsInJlZHVjZXJzIiwibG9naW4iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRJdGVtIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/authSlice.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/Game.module.css":
/*!***********************************!*\
  !*** ./src/pages/Game.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Game_container__S5R9c\",\n\t\"heading1\": \"Game_heading1__8jhoL\",\n\t\"heading2\": \"Game_heading2__bA1UY\",\n\t\"new\": \"Game_new__JBnsy\",\n\t\"cardContainer\": \"Game_cardContainer__JBOEo\",\n\t\"deckContainer\": \"Game_deckContainer__SyPJD\",\n\t\"card\": \"Game_card__Fs6pC\",\n\t\"button\": \"Game_button__gBqg8\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9HYW1lLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFdHVcXERlc2t0b3BcXExJQ0VOQ0VfTUlBU0hTXFxMM19NSUFTSFMyXFxTRU1FU1RSRV8yXFxQUk9HUkFNTUFUSU9OX1dFQlxccHJvamV0X2xlYWd1ZV9vZl9zdG9uZVxcbGVhZ3VlX29mX3N0b25lXFxzcmNcXHBhZ2VzXFxHYW1lLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR2FtZV9jb250YWluZXJfX1M1UjljXCIsXG5cdFwiaGVhZGluZzFcIjogXCJHYW1lX2hlYWRpbmcxX184amhvTFwiLFxuXHRcImhlYWRpbmcyXCI6IFwiR2FtZV9oZWFkaW5nMl9fYkExVVlcIixcblx0XCJuZXdcIjogXCJHYW1lX25ld19fSkJuc3lcIixcblx0XCJjYXJkQ29udGFpbmVyXCI6IFwiR2FtZV9jYXJkQ29udGFpbmVyX19KQk9Fb1wiLFxuXHRcImRlY2tDb250YWluZXJcIjogXCJHYW1lX2RlY2tDb250YWluZXJfX1N5UEpEXCIsXG5cdFwiY2FyZFwiOiBcIkdhbWVfY2FyZF9fRnM2cENcIixcblx0XCJidXR0b25cIjogXCJHYW1lX2J1dHRvbl9fZ0JxZzhcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/Game.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"(pages-dir-node)/./src/store.js\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game.module.css */ \"(pages-dir-node)/./src/pages/Game.module.css\");\n/* harmony import */ var _Game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(pages-dir-node)/../../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_3__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n // Importation de Bootstrap si besoin\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Etu\\\\Desktop\\\\LICENCE_MIASHS\\\\L3_MIASHS2\\\\SEMESTRE_2\\\\PROGRAMMATION_WEB\\\\projet_league_of_stone\\\\league_of_stone\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Etu\\\\Desktop\\\\LICENCE_MIASHS\\\\L3_MIASHS2\\\\SEMESTRE_2\\\\PROGRAMMATION_WEB\\\\projet_league_of_stone\\\\league_of_stone\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ1Y7QUFDSDtBQUNtQixDQUFFLHFDQUFxQztBQUVyRSxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSixpREFBUUE7UUFBQ0MsT0FBU0EsOENBQUtBO2tCQUN0Qiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFdHVcXERlc2t0b3BcXExJQ0VOQ0VfTUlBU0hTXFxMM19NSUFTSFMyXFxTRU1FU1RSRV8yXFxQUk9HUkFNTUFUSU9OX1dFQlxccHJvamV0X2xlYWd1ZV9vZl9zdG9uZVxcbGVhZ3VlX29mX3N0b25lXFxzcmNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCBcIi4vR2FtZS5tb2R1bGUuY3NzXCJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyAgLy8gSW1wb3J0YXRpb24gZGUgQm9vdHN0cmFwIHNpIGJlc29pblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authSlice */ \"(pages-dir-node)/./src/authSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _authSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _authSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        auth: _authSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFDWjtBQUV0QyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUN6QkcsU0FBUztRQUNMQyxNQUFNSCxrREFBV0E7SUFDckI7QUFDSjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEV0dVxcRGVza3RvcFxcTElDRU5DRV9NSUFTSFNcXEwzX01JQVNIUzJcXFNFTUVTVFJFXzJcXFBST0dSQU1NQVRJT05fV0VCXFxwcm9qZXRfbGVhZ3VlX29mX3N0b25lXFxsZWFndWVfb2Zfc3RvbmVcXHNyY1xcc3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhTbGljZSc7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtcbiAgICAgICAgYXV0aDogYXV0aFJlZHVjZXIsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJhdXRoUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsImF1dGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/store.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();