"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1338],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4612:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(7462),o=(r(7294),r(3905));const i={title:"Installing Stryker in pipelines",sidebar_position:70,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/stryker-in-pipeline.md"},a=void 0,s={unversionedId:"stryker-net/stryker-in-pipeline",id:"stryker-net/stryker-in-pipeline",isDocsHomePage:!1,title:"Installing Stryker in pipelines",description:"When running stryker in your pipeline there are some things to take into consideration",source:"@site/docs/stryker-net/stryker-in-pipeline.md",sourceDirName:"stryker-net",slug:"/stryker-net/stryker-in-pipeline",permalink:"/docs/stryker-net/stryker-in-pipeline",editUrl:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/stryker-in-pipeline.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Installing Stryker in pipelines",sidebar_position:70,custom_edit_url:"https://github.com/stryker-mutator/stryker-net/edit/master/docs/stryker-in-pipeline.md"},sidebar:"docs",previous:{title:"Reporters",permalink:"/docs/stryker-net/reporters"},next:{title:"Updating",permalink:"/docs/stryker-net/updating"}},l=[{value:"Configuring dashboard compare in pull requests",id:"configuring-dashboard-compare-in-pull-requests",children:[],level:2},{value:"Azure DevOps Extensions",id:"azure-devops-extensions",children:[{value:"Mutation Report Publisher",id:"mutation-report-publisher",children:[],level:3},{value:"Run Stryker .Net",id:"run-stryker-net",children:[],level:3}],level:2}],p={toc:l};function u({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When running stryker in your pipeline there are some things to take into consideration"),(0,o.kt)("p",null,"Due to the way dotnet core global tools are installed on the system a regular ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet tool install -g")," is often not effective in pipelines."),(0,o.kt)("p",null,"Instead use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--tool-path")," to install stryker in a local folder or use the project level install of dotnet core 3.0+"),(0,o.kt)("p",null,"Example for installing in azure devops:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- task: DotNetCoreCLI@2\n    displayName: 'Install dotnet-stryker'\n    inputs:\n      command: custom\n      custom: tool\n      arguments: install dotnet-stryker --tool-path $(Agent.BuildDirectory)/tools\n")),(0,o.kt)("p",null,"And then running this locally installed tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- task: Powershell@2\n    displayName: 'Run dotnet-stryker'\n    inputs:\n      workingDirectory: <test-project-folder-here>\n      targetType: 'inline'\n      pwsh: true\n      script: $(Agent.BuildDirectory)/tools/dotnet-stryker\n")),(0,o.kt)("h2",{id:"configuring-dashboard-compare-in-pull-requests"},"Configuring dashboard compare in pull requests"),(0,o.kt)("p",null,"Dashboard compare is very useful when running stryker in pipelines because it cuts down on the total runtime by only testing mutations that have changed compared to for example master\nThe following minimal steps are needed to use dashboard compare"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable --with-baseline"),(0,o.kt)("li",{parentName:"ol"},"Choose a storage provider (Dashboard for public projects or Azure File Share for private projects)"),(0,o.kt)("li",{parentName:"ol"},"Set up authentication for the chosen storage provider "),(0,o.kt)("li",{parentName:"ol"},"Set --version to the name of the source branch (usually current branch)"),(0,o.kt)("li",{parentName:"ol"},"Set --since to the name of the target branch (usually master/main or development)"),(0,o.kt)("li",{parentName:"ol"},"Set any other options needed for your chosen storage provider (see: ",(0,o.kt)("a",{parentName:"li",href:"https://stryker-mutator.io/docs/stryker-net/configuration#baselineprovider-string"},"storage provider docs"),")")),(0,o.kt)("p",null,"Example for azure devops with dashboard storage provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet stryker --with-baseline --dashboard-api-key $(Stryker.Dashboard.Api.Key) --version $(System.PullRequest.SourceBranch) --since $(System.PullRequest.TargetBranch)\nor short:\ndotnet stryker --dashboard-api-key $(Stryker.Dashboard.Api.Key) -v $(System.PullRequest.SourceBranch) --since $(System.PullRequest.TargetBranch)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stryker-config": {\n    "baseline": {\n      "provider": "Dashboard"\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"azure-devops-extensions"},"Azure DevOps Extensions"),(0,o.kt)("p",null,"There are multiple Azure DevOps extensions to enrich the Stryker experience. "),(0,o.kt)("h3",{id:"mutation-report-publisher"},"Mutation Report Publisher"),(0,o.kt)("p",null,"With this extension you add the mutation report to your build summary so you can view the mutation test result on azure devops."),(0,o.kt)("p",null,"In YAML pipelines add the following after the test step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- task: PublishMutationReport@0\n  displayName: 'Publish Mutation Test Report'\n  inputs:\n    reportPattern: '**/mutation-report.html'\n")),(0,o.kt)("p",null,"You now get a new tab on your build pipeline where you can click through the complete mutation testing report generated by your mutation test run. When using Stryker the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/mutation-testing-elements"},"mutation testing report")," looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mutation report in a build",src:r(5058).Z})),(0,o.kt)("p",null,"To install 'Mutation Report Publisher' or for more information go to the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=stryker-mutator.mutation-report-publisher"},"marketplace"),"."),(0,o.kt)("h3",{id:"run-stryker-net"},"Run Stryker .Net"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0 This is not an official ",(0,o.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/"},"Stryker Mutator")," extension. This extension is not cross platform and only works on Windows.")),(0,o.kt)("p",null,"This is an Azure Devops extension to run mutation testing with Stryker .Net without having to install Stryker yourself. "),(0,o.kt)("p",null,"In YAML pipelines add the following after the test step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- task: run-stryker@1\n  inputs:\n    testProject: '*Tests.csproj' #example value\n    parameters: '--reporters \"['html', 'progress']\" #example value'\n")),(0,o.kt)("p",null,"To install 'Run Stryker .Net' or for more information go to the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=raschmitt.run-stryker-net-task"},"marketplace"),"."))}u.isMDXComponent=!0},5058:function(e,t,r){t.Z=r.p+"assets/images/devops-report-publisher-tab-ae41ccf2157de44828c7dc9bb162c264.png"}}]);