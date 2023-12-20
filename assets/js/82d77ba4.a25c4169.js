"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"useGetIdentity",description:"useGetIdentity data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/useGetIdentity/index.ts"},u=void 0,c={unversionedId:"core/hooks/auth/use-get-identity/index",id:"core/hooks/auth/use-get-identity/index",title:"useGetIdentity",description:"useGetIdentity data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/core/hooks/auth/use-get-identity/index.md",sourceDirName:"core/hooks/auth/use-get-identity",slug:"/core/hooks/auth/use-get-identity/",permalink:"/docs/core/hooks/auth/use-get-identity/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/auth/use-get-identity/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1703054129,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"useGetIdentity",description:"useGetIdentity data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/useGetIdentity/index.ts"},sidebar:"mainSidebar",previous:{title:"useOnError",permalink:"/docs/core/hooks/auth/use-on-error/"},next:{title:"useLogin",permalink:"/docs/core/hooks/auth/use-login/"}},l={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"getIdentity")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.kt)("p",null,"Data that is resolved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"getIdentity")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get user information anywhere in your code."),(0,r.kt)("p",null,"Let's say that you want to show the user's name."),(0,r.kt)("p",null,"We have a logic in ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getIdentity")," method like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n  // ...\n  // highlight-start\n  getIdentity: async () => {\n    return {\n      id: 1,\n      fullName: "Jane Doe",\n    };\n  },\n  // highlight-end\n};\n')),(0,r.kt)("p",null,"You can access identity data like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@refinedev/core";\n\nexport const User = () => {\n  // highlight-next-line\n  const { data: identity } = useGetIdentity<IIdentity>();\n\n  return <span>{identity?.fullName}</span>;\n};\n\ntype IIdentity = {\n  id: number;\n  fullName: string;\n};\n')))}f.isMDXComponent=!0}}]);