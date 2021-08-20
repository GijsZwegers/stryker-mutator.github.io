"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2074],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),a=(n(67294),n(3905));const o={title:"Mutant schemata",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/mutant-schemata.md"},i=void 0,c={unversionedId:"stryker-net/technical-reference/Mutant-schemata",id:"stryker-net/technical-reference/Mutant-schemata",isDocsHomePage:!1,title:"Mutant schemata",description:"Stryker.NET chose to work with mutant schemata. This created a number of challenges.",source:"@site/docs/stryker-net/technical-reference/Mutant-schemata.md",sourceDirName:"stryker-net/technical-reference",slug:"/stryker-net/technical-reference/Mutant-schemata",permalink:"/docs/stryker-net/technical-reference/Mutant-schemata",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/mutant-schemata.md",version:"current",frontMatter:{title:"Mutant schemata",custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/technical-reference/mutant-schemata.md"},sidebar:"docs",previous:{title:"Research",permalink:"/docs/stryker-net/technical-reference/Research"},next:{title:"Composite pattern",permalink:"/docs/stryker-net/technical-reference/ProjectComponents"}},l=[{value:"Compile errors",id:"compile-errors",children:[]},{value:"Scope",id:"scope",children:[]},{value:"Constant values",id:"constant-values",children:[]}],s={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker.NET chose to work with mutant schemata. This created a number of challenges."),(0,a.kt)("h2",{id:"compile-errors"},"Compile errors"),(0,a.kt)("p",null,"Some mutations result in compile errors like the one below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'if (Environment.GetEnvironmentVariable("ActiveMutation") == "1") {\n  return "hello " - "world"; // mutated code\n} else {\n  return "hello " + "world"; // original code\n}\n')),(0,a.kt)("p",null,"We chose to accept the fact that not all mutations can be compiled. So mutators don't have to take compile errors in account. This keeps the mutators as simple as possible."),(0,a.kt)("p",null,"The framework itself should handle the compile errors. "),(0,a.kt)("p",null,"This is done by rollbacking all mutations that result in compile errors. The mutant that linked to that piece of code gets the status ",(0,a.kt)("inlineCode",{parentName:"p"},"builderror"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compile")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"remove compile error codes")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"compile 2nd time")),(0,a.kt)("p",null,"Sometimes not all errors are returned by the compiler at the first try. Thats why we repeat this process untill we have compiling code. Usually 1-3 retries are needed. With roslyns incremental compilation these retries are fast."),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"The scope of some variables can change by placing it insite an if statement. This results in compile errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'if (Environment.GetEnvironmentVariable("ActiveMutation") == "1") {\n  int i = 0; // mutated code\n} else {\n  int i = 99; // original code\n}\nreturn i;\n')),(0,a.kt)("p",null,"This kind of errors can't be rollbacked because the location of the diagnostic error will be the return statement. The location of the actual code that causes the error will be somewhere else."),(0,a.kt)("p",null,"This can be solved by using conditional statements instead of if statements."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'int i = Environment.GetEnvironmentVariable("ActiveMutation") == "1" ? 0 : 99;\nreturn i;\n')),(0,a.kt)("p",null,"What kind of placement should be used depends on the type of SyntaxNode the mutation is made in. There are some rules build into Stryker.net when to choose an if-statement and when to use a conditional statement."),(0,a.kt)("h2",{id:"constant-values"},"Constant values"),(0,a.kt)("p",null,"A drawback of mutant schemata is that Stryker.NET cannot mutate constant values. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum Numbers\n{\n    One = 1,\n    Two = (One + 1)\n}\n")),(0,a.kt)("p",null,"would be mutated into"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public enum Numbers\n{\n    One = 1,\n    Two = (MutantControl.IsActive(0) ? (One - 1) : (One + 1))\n}\n")),(0,a.kt)("p",null,"This cannot compile since ",(0,a.kt)("inlineCode",{parentName:"p"},"MutantControl.IsActive(0)")," is not a constant value. That is why we skip constant values from mutating."),(0,a.kt)("p",null,"We are researching ways to overcome this issue but have not yet found a way to do this."))}u.isMDXComponent=!0}}]);