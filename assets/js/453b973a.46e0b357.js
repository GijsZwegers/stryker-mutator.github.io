"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2672],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),y=p(r),f=a,m=y["".concat(c,".").concat(f)]||y[f]||l[f]||o;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},95745:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return l}});var n=r(87462),a=(r(67294),r(3905));const o={slug:"typescript-coverage-analysis-support",title:"TypeScript coverage analysis support",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,s={permalink:"/blog/typescript-coverage-analysis-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-01-10-typescript-coverage-analysis-support.md",source:"@site/blog/2018-01-10-typescript-coverage-analysis-support.md",title:"TypeScript coverage analysis support",description:"Let's start this new year strong. Stryker 0.18 adds coverage analysis support for transpilers, starting with the TypeScript transpiler.",date:"2018-01-10T00:00:00.000Z",formattedDate:"January 10, 2018",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:4.62,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Webpack support is here",permalink:"/blog/webpack-support"},nextItem:{title:"Stryker adds Babel support",permalink:"/blog/babel-support"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function l({components:t,...e}){return(0,a.kt)("wrapper",(0,n.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's start this new year strong. Stryker 0.18 adds coverage analysis support for transpilers, starting with the TypeScript transpiler."))}l.isMDXComponent=!0}}]);