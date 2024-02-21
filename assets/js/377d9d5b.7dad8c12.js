"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"GraphQL",source:"https://github.com/refinedev/refine/tree/master/packages/graphql",swizzle:!0},p=void 0,d={unversionedId:"data/packages/graphql/index",id:"data/packages/graphql/index",title:"GraphQL",description:"Refine provides a data provider for GraphQL APIs that has all the features of Refine without giving up the GraphQL features.",source:"@site/docs/data/packages/graphql/index.md",sourceDirName:"data/packages/graphql",slug:"/data/packages/graphql/",permalink:"/docs/data/packages/graphql/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/graphql/index.md",tags:[],version:"current",lastUpdatedBy:"Hirotomo Yamada",lastUpdatedAt:1708495738,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"GraphQL",source:"https://github.com/refinedev/refine/tree/master/packages/graphql",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Appwrite",permalink:"/docs/data/packages/appwrite/"},next:{title:"Simple REST",permalink:"/docs/data/packages/simple-rest/"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Realtime",id:"realtime",level:3},{value:"Authentication",id:"authentication",level:2},{value:"GraphQL Query Builder",id:"graphql-query-builder",level:2},{value:"Usage with Inferencer",id:"usage-with-inferencer",level:2},{value:"Example",id:"example",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=m("InstallPackagesCommand"),h=m("CodeSandboxExample"),k={toc:u};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Refine provides a data provider for GraphQL APIs that has all the features of Refine without giving up the GraphQL features."),(0,n.kt)("admonition",{title:"Good to know",type:"simple"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GraphQL data provider doesn't support ",(0,n.kt)("inlineCode",{parentName:"p"},"meta.gqlQuery")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"meta.gqlMutation")," fields yet. We'll add support in the future.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This library uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jasonkuhrt/graphql-request"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To build queries and mutations, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},(0,n.kt)("inlineCode",{parentName:"a"},"gql-query-builder"))," is used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To learn more about data fetching in Refine, check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide.")))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(c,{args:"@refinedev/graphql",mdxType:"InstallPackagesCommand"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/graphql";\n\n// highlight-next-line\nconst client = new GraphQLClient("https://api.example.com/graphql");\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider(client)}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,n.kt)("h3",{id:"realtime"},"Realtime"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/graphql")," also provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider")," to enable realtime features of Refine. These features are powered by GraphQL subscriptions and uses ",(0,n.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/ws"},(0,n.kt)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the connections."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\n// highlight-next-line\nimport dataProvider, { GraphQLClient, liveProvider, graphqlWS } from "@refinedev/graphql";\n\nconst client = new GraphQLClient("https://api.example.com/graphql");\n// highlight-next-line\nconst wsClient = graphqlWS.createClient({ url: "wss://api.example.com/graphql" });\n\nconst App = () => (\n  <Refine\n    dataProvider={dataProvider(client)}\n    // highlight-next-line\n    liveProvider={liveProvider(wsClient)}\n    options={{ liveMode: "auto" }}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"If your API uses authentication, you can easily provide a custom fetcher for the requests and handle the authentication logic there. When creating a GraphQL Client, you can pass a ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch")," function to the client options. This function will be used to append the authentication headers to the requests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="data-provider.tsx"',title:'"data-provider.tsx"'},'import graphqlDataProvider, { GraphQLClient } from "@refinedev/graphql";\n\nconst client = new GraphQLClient(API_URL, {\n  fetch: (url: string, options: RequestInit) => {\n    return fetch(url, {\n      ...options,\n      headers: {\n        ...options.headers,\n        /**\n         * For demo purposes, we\'re using `localStorage` to access the token.\n         * You can use your own authentication logic here.\n         * In real world applications, you\'ll need to handle it in sync with your `authProvider`.\n         */\n        // highlight-next-line\n        Authorization: `Bearer ${localStorage.getItem("token")}`,\n      },\n    });\n  },\n});\n\n/**\n * Create the data provider with the custom client.\n */\nconst dataProvider = graphqlDataProvider(client);\n')),(0,n.kt)("h2",{id:"graphql-query-builder"},"GraphQL Query Builder"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder"},"GraphQL Query Builder")," allows us to build queries and mutations. The ",(0,n.kt)("inlineCode",{parentName:"p"},"getList"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"getMany"),", and, ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," methods in our ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," generate a query to send a request. On the other hand, the ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"createMany"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"updateMany"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteOne"),", and, ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteMany")," methods generate a mutation to send a request."),(0,n.kt)("p",null,"In order to create a GraphQL query, our ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," has to take some options, such as specifying which fields will come in response, we pass these options to our ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," methods with ",(0,n.kt)("inlineCode",{parentName:"p"},"MetaDataQuery"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/atulmy/gql-query-builder#options"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"meta")," properties for detailed usage. ","\u2192")),(0,n.kt)("p",null,"Hooks and components that support ",(0,n.kt)("inlineCode",{parentName:"p"},"meta"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Supported data hooks"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported other hooks"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported components"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-update"},(0,n.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-form"},(0,n.kt)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/components/buttons/delete-button"},(0,n.kt)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-update"},(0,n.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-modal-form"},(0,n.kt)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/components/buttons/refresh-button"},(0,n.kt)("inlineCode",{parentName:"a"},"RefreshButton")," ","\u2192"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-delete"},(0,n.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-drawer-form"},(0,n.kt)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-delete"},(0,n.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-steps-form"},(0,n.kt)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-create"},(0,n.kt)("inlineCode",{parentName:"a"},"useCreate")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-table"},(0,n.kt)("inlineCode",{parentName:"a"},"useTable")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-create"},(0,n.kt)("inlineCode",{parentName:"a"},"useCreateMany")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-editable-table"},(0,n.kt)("inlineCode",{parentName:"a"},"useEditableTable")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-list"},(0,n.kt)("inlineCode",{parentName:"a"},"useList")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-simple-list"},(0,n.kt)("inlineCode",{parentName:"a"},"useSimpleList")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-one"},(0,n.kt)("inlineCode",{parentName:"a"},"useOne")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-show"},(0,n.kt)("inlineCode",{parentName:"a"},"useShow")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-many"},(0,n.kt)("inlineCode",{parentName:"a"},"useMany")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/core/hooks/utilities/use-export"},(0,n.kt)("inlineCode",{parentName:"a"},"useExport")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-custom"},(0,n.kt)("inlineCode",{parentName:"a"},"useCustom")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-checkbox-group"},(0,n.kt)("inlineCode",{parentName:"a"},"useCheckboxGroup")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/data/hooks/use-select"},(0,n.kt)("inlineCode",{parentName:"a"},"useSelect")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-radio-group"},(0,n.kt)("inlineCode",{parentName:"a"},"useRadioGroup")," ","\u2192")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"usage-with-inferencer"},"Usage with Inferencer"),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package to generate sample codes for your views. Since the GraphQL data providers rely on ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," fields, you'll need to provide some ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," values beforehand and then Inferencer will use these values to infer the fields of the data provider's response, generate a code and a preview."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages#usage-with-graphql-backends-and-meta-values"},"Check out Inferencer docs for more information. ","\u2192")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(h,{path:"data-provider-nestjs-query",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);