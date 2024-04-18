"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19364],{15680:(e,n,r)=>{r.d(n,{xA:()=>l,yg:()=>f});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,f=c["".concat(s,".").concat(u)]||c[u]||g[u]||a;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35420:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>c});r(96540);var t=r(15680);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project",next:"3.xx.xx/tutorial/getting-started/store-your-repository"}},s=void 0,d={unversionedId:"tutorial/getting-started/antd/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/antd/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/antd/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/antd",slug:"/tutorial/getting-started/antd/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/antd/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/antd/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"growfrow",lastUpdatedAt:1713437848,formattedLastUpdatedAt:"Apr 18, 2024",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project",next:"3.xx.xx/tutorial/getting-started/store-your-repository"}}},l={},c=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",n)},u=g("DocThumbsUpDownFeedbackWidget"),f=g("Checklist"),y=g("ChecklistItem"),m={toc:c},h="wrapper";function v(e){var{components:n}=e,r=i(e,["components"]);return(0,t.yg)(h,a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},m,r),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"inferencer"},"Inferencer"),(0,t.yg)(u,{id:"inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Inferencer is a powerful tool in the ",(0,t.yg)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations.")),(0,t.yg)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,t.yg)(u,{id:"why-use-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"There are several benefits:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,t.yg)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks.")),(0,t.yg)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,t.yg)(u,{id:"learn-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Learn about ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,t.yg)("li",{parentName:"ul"},"Learn about ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/inferencer/"},"how to use Inferencer with Ant Design"),"."))),(0,t.yg)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,t.yg)(u,{id:"how-to-use-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,t.yg)("inlineCode",{parentName:"p"},"<AntdInferencer/>")," component, which can be imported from ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd"),". It used to generate CRUD pages based on your API response with Ant Design components."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"<AntdInferencer/>")," component is used by passing to appropriate values in the ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,t.yg)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"In ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n//highlight-next-line\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      //highlight-start\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n      //highlight-end\n    />\n  );\n};\n\nexport default App;\n')),(0,t.yg)("p",null,"At this point, ",(0,t.yg)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response.")),(0,t.yg)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,t.yg)(u,{id:"preview-the-auto-generated-pages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,t.yg)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,t.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,t.yg)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"In ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,t.yg)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,t.yg)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,t.yg)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.')),(0,t.yg)("h3",{id:"list-page"},"List Page"),(0,t.yg)(u,{id:"list-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the list page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,t.yg)("p",null,"You should see the list page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"When you navigate to the ",(0,t.yg)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,t.yg)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,t.yg)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"create-page"},"Create Page"),(0,t.yg)(u,{id:"create-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the create page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,t.yg)("p",null,"You should see the create page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"edit-page"},"Edit Page"),(0,t.yg)(u,{id:"edit-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the edit page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,t.yg)("p",null,"You should see the edit page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,t.yg)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n'))),(0,t.yg)("h3",{id:"show-page"},"Show Page"),(0,t.yg)(u,{id:"show-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"To preview the show page, go back to your browser and open the ",(0,t.yg)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,t.yg)("p",null,"You should see the show page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,t.yg)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { AntdInferencer } from "@pankod/refine-inferencer/antd";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "blog_posts",\n          list: AntdInferencer,\n          show: AntdInferencer,\n          create: AntdInferencer,\n          edit: AntdInferencer,\n        },\n      ]}\n    />\n  );\n};\n\nrender(<App />);\n')),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"In ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/adding-crud-pages/antd/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,t.yg)(f,{mdxType:"Checklist"},(0,t.yg)(y,{id:"generated-crud-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,t.yg)(y,{id:"generated-crud-pages-2",mdxType:"ChecklistItem"},(0,t.yg)("p",null,"I inspected the auto-generated ",(0,t.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"edit"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"show")," pages.")))))}v.isMDXComponent=!0}}]);