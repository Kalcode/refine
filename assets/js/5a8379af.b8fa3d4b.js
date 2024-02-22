"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Memoization in React - How useCallback Works",description:"Improve app performance with React useCallback() hook.",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-usecallback-guide",source:"@site/blog/2024-01-25-react-use-callback.md",title:"Memoization in React - How useCallback Works",description:"Improve app performance with React useCallback() hook.",date:"2024-01-25T00:00:00.000Z",formattedDate:"January 25, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:8.71,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Memoization in React - How useCallback Works",description:"Improve app performance with React useCallback() hook.",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},prevItem:{title:"An Intro to Server Components in React",permalink:"/blog/react-server-components"},nextItem:{title:"TDD vs BDD - A Detailed Guide",permalink:"/blog/tdd-vs-bdd"},relatedPosts:[{title:"Svelte vs React Comparison",description:"We will compare the optimal performance of React and Svelte",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.225,date:"2022-12-08T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.555,date:"2022-02-21T00:00:00.000Z"},{title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.43,date:"2022-12-15T00:00:00.000Z"}],authorPosts:[{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",permalink:"/blog/javascript-try-catch-finally",formattedDate:"January 30, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.42,date:"2024-01-30T00:00:00.000Z"},{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",permalink:"/blog/refine-pixels-4",formattedDate:"February 17, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.15,date:"2023-02-17T00:00:00.000Z"},{title:"How to Use Tailwind CSS Grid",description:"We look at how to implement responsive layouts with CSS Grid using TailwindCSS Grid classes.",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.75,date:"2022-10-21T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is React <code>useCallback</code> ?",id:"what-is-react-usecallback-",level:2},{value:"Why Use React <code>useCallback</code> Hook?",id:"why-use-react-usecallback-hook",level:3},{value:"Memoize Functions with React <code>useCallback</code>: Ensuring A Callback&#39;s Referential Equality",id:"memoize-functions-with-react-usecallback-ensuring-a-callbacks-referential-equality",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Code Investigation",id:"code-investigation",level:3},{value:"Referential Inequality of Callbacks: Observing Unnecessary Re-renders",id:"referential-inequality-of-callbacks-observing-unnecessary-re-renders",level:3},{value:"Memoizing an Event Listener with <code>useCallback()</code>",id:"memoizing-an-event-listener-with-usecallback",level:3},{value:"React <code>useCallback</code> with Dependencies",id:"react-usecallback-with-dependencies",level:3},{value:"When to Use React <code>useCallback</code>",id:"when-to-use-react-usecallback",level:2},{value:"Other Cases",id:"other-cases",level:3},{value:"When Not to Use React&#39;s <code>useCallback</code> Hook",id:"when-not-to-use-reacts-usecallback-hook",level:2},{value:"Summary",id:"summary",level:2},{value:"Example",id:"example",level:2}],m=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const h={toc:d};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"This article was last updated on January 25, 2024 to expand code examples add more real use-cases for React useCallback hook."))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about using the React ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook. We demonstrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," in a React component and examine how it impacts performance in a demo app."),(0,a.kt)("p",null,"This is the third and final part of the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"React Memoization Series")," hosted on ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/"},"Refine.dev blog"),"."),(0,a.kt)("p",null,"The preceding two parts are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/react-memo-guide/"},"React Memo Guide with Examples")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://refine.dev/blog/react-usememo/"},"React useMemo Hook Guide With Examples"))),(0,a.kt)("p",null,"In this post, we explore how to use React ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," in order to memoize a function passed from a parent to a child component. We follow up by making changes to the demo blog app in ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usememo/"},"Part II")," and try to understand how function memoization using ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," gives performance gains to a React app."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-react-usecallback-"},"What is React ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback")," ?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-use-react-usecallback-hook"},"Why Use React ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback")," Hook?")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#memoize-functions-with-react-usecallback-ensuring-a-callbacks-referential-equality"},"Memoize Functions with React ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback"),": Ensuring A Callback's Referential Equality"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#referential-inequality-of-callbacks-observing-unnecessary-re-renders"},"Referential Inequality of Callbacks: Observing Unnecessary Re-renders")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#memoizing-an-event-listener-with-usecallback"},"Memoizing an Event Listener with ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#react-usecallback-with-dependencies"},"React ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback")," with Dependencies")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#when-to-use-react-usecallback"},"When to Use React ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#when-not-to-use-reacts-usecallback-hook"},"When Not to Use React's ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback")," Hook"))),(0,a.kt)("h2",{id:"what-is-react-usecallback-"},"What is React ",(0,a.kt)("inlineCode",{parentName:"h2"},"useCallback")," ?"),(0,a.kt)("p",null,"React ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," is a hook that memoizes a function definition and ensures its referential integrity between re-renders of a React component. It works by accepting the function as an argument, memoizing it, and then returning the memoized function. The memoized function then can be passed down to child components and invoked from therein."),(0,a.kt)("p",null,"Memoization of a function definition with ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," helps optimize a React component by preventing unnecessary re-renderings originating from a change in the function's object identity."),(0,a.kt)("h3",{id:"why-use-react-usecallback-hook"},"Why Use React ",(0,a.kt)("inlineCode",{parentName:"h3"},"useCallback")," Hook?"),(0,a.kt)("p",null,"In React, callback functions like event handlers inside a component create new individual function objects at every re-render of the component. This behavior breaks referential equality of callbacks passed to and invoked inside a child component."),(0,a.kt)("p",null,"For example, in a case where a callback is passed from a parent component to a child as a prop, by default, the child receives a new copy of the callback at every render of the parent. This leads to an additional re-render in the child component just because of the change in the accepted function object's identity. Such unnecessary re-renders add to the app's cost. So, callback functions in React should be memoized in a way that they maintain referential integrity across re-renders of a parent component."),(0,a.kt)("p",null,"Memoizing a callback in React with ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps ensure the function's referential integrity and prevent these re-renders. ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," works by storing the function object itself. So, every time the parent re-renders, the same callback object is passed to the child and the child's re-render is prevented."),(0,a.kt)("h2",{id:"memoize-functions-with-react-usecallback-ensuring-a-callbacks-referential-equality"},"Memoize Functions with React ",(0,a.kt)("inlineCode",{parentName:"h2"},"useCallback"),": Ensuring A Callback's Referential Equality"),(0,a.kt)("p",null,"In the sections ahead, inside the demo blog app, we first examine the way a callback, ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost"),", passed to a child component (",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),") by default triggers unnecessary re-renders. We then implement memoization of the callback function with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook and observe how it prevents these re-renders."),(0,a.kt)("p",null,"Prior to that, let's first get familiar with the code we are dealing with."),(0,a.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,a.kt)("p",null,"The demo app is the same one we have been using in the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"React Memoization Series"),". It is based on the idea of a list of posts on a blog."),(0,a.kt)("p",null,"We recommend you follow along from Part I and II. This way, you should already have the app cloned, opened in a code editor, installed, and up and running in a browser."),(0,a.kt)("p",null,"There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships and their state changes. You should especially be familiar with what's going on in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPosts />")," components before we make the changes to with ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"The example app live code")),(0,a.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing callback functions that are passed as a prop from a parent component to a child. We are going to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook for this."),(0,a.kt)("h3",{id:"code-investigation"},"Code Investigation"),(0,a.kt)("p",null,"As we're already familiar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<App />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," components from Part I and II, in this post, we'll start with the",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," component. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'import React, { useEffect, useState } from "react";\nimport fetchUserPosts from "../fetch/fetchUserPosts";\nimport UserPostsList from "./UserPostsList";\n\nconst UserPostsIndex = ({ signedIn }) => {\n  const [userPosts, setUserPosts] = useState([]);\n\n  const deletePost = (e) => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter((post) => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n  };\n\n  useEffect(() => {\n    const posts = fetchUserPosts();\n    setUserPosts(posts);\n  }, []);\n\n  return (\n    <div className="my-1 p-2 box">\n      <div className="m-1 py-1">\n        <h2 className="heading-md">Your Posts</h2>\n        <p className="m-1 p-1">{signedIn ? `Signed in` : `Signed out `}</p>\n        {userPosts && <div className="px-1">{<UserPostsList userPosts={userPosts} deletePost={deletePost} />}</div>}\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," receives ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," as a prop from ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". It then fetches the user's posts and sets ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," when the component mounts."),(0,a.kt)("p",null,"In the JSX, a ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component is rendered with ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," function passed to it, along with ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList>")," component looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},'import React from "react";\nimport UserPost from "./UserPost";\n\nconst UserPostsList = ({ userPosts, deletePost }) => {\n  console.log("Rendering UserPostsList component");\n\n  return (\n    <div className="px-1">\n      {userPosts.map((post) => (\n        <div key={post.id} className="my-1 box flex-row">\n          <UserPost post={post} />\n          <button className="btn btn-danger" data-post-id={post.id} onClick={deletePost}>\n            Delete\n          </button>\n        </div>\n      ))}\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsList);\n')),(0,a.kt)("p",null,"Here, we are receiving the ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," array and the ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," callback. In the JSX, we map a ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />")," to each post in ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," array and invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," to remove a post from the list."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is a presentational component where we display the title as a link. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nconst UserPost = ({ post }) => {\n  // console.log(\'Rendering UserPost component\')\n\n  return (\n    <div className="my-1 flex-row-left">\n      <a href={`#${post.title}`} className="">\n        <h4 id={post.title} className="px-2 font-sm font-bold">\n          {post.title}\n        </h4>\n      </a>\n    </div>\n  );\n};\n\nexport default UserPost;\n')),(0,a.kt)("h3",{id:"referential-inequality-of-callbacks-observing-unnecessary-re-renders"},"Referential Inequality of Callbacks: Observing Unnecessary Re-renders"),(0,a.kt)("p",null,"As you can already tell, ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," is a callback function expected cause re-renders of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),". In order to observe them, let's add the following to ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'console.log("Rendering UserPostsIndex component");\n')),(0,a.kt)("p",null,"And this one to ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},'console.log("Rendering UserPostsList component");\n')),(0,a.kt)("p",null,"If we check our console now, we can see the logs showing the initial rendering of these components."),(0,a.kt)("p",null,"Then if we click the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignOut")," button on the navbar, we see batches of renders originating from ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />"),":"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback1.png",alt:"usecallback1"})),(0,a.kt)("p",null,"It is possible to account for the re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," because the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," prop changed when we clicked ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign Out"),"."),(0,a.kt)("p",null,"However, re-rendering of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," at first does not make sense because we expect it to re-render when only ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," change. And ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," does not change with the change in the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),". And since nothing else is notably changing."),(0,a.kt)("p",null,"Also, we already memoized ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()")," to prevent its re-renders due to changes in any of its ancestors' state."),(0,a.kt)("p",null,"But curious, if ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," changes ?"),(0,a.kt)("p",null,"Well, it does. It changes due to ",(0,a.kt)("strong",{parentName:"p"},"referential inequality")," because at every re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", a new ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," function object is spun into runtime. This change in object identity triggers a re-render in ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),". The way it is happening above is, when we change ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," re-renders, creates and passes in a new version of ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," and causes ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," to re-render."),(0,a.kt)("h3",{id:"memoizing-an-event-listener-with-usecallback"},"Memoizing an Event Listener with ",(0,a.kt)("inlineCode",{parentName:"h3"},"useCallback()")),(0,a.kt)("p",null,"Now, memoizing ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," would deliver the same function object at every re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),". So, let's memoize it with ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," by making the following changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostsIndex.jsx"',title:'"components/UserPostsIndex.jsx"'},'  // highlight-next-line\nimport React, { useCallback, useEffect, useState } from "react";\n\nconst UserPostsIndex = ({ signedIn }) => {\n\n// highlight-next-line\n  const deletePost = useCallback(e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n    // highlight-next-line\n  }, [userPosts]);\n\n  ...\n\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,a.kt)("p",null,"Now, if we click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign Out")," button a few times, we'll see in the console that ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," is re-rendered, but ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />")," are not:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback2.png",alt:"usecallback2"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," caches and produces the same copy of ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," at every render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),". So referential integrity of ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," is maintained and it prevents unnecessary re-renderings of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", contributing to performance optimization of the component."),(0,a.kt)("h3",{id:"react-usecallback-with-dependencies"},"React ",(0,a.kt)("inlineCode",{parentName:"h3"},"useCallback")," with Dependencies"),(0,a.kt)("p",null,"Notice we are passing a dependency in the array passed as the second argument of ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback"),". With ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," as a dependency, we want a change in ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," to trigger a renewal of the function memo. So, every time the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," changes, a new ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost")," function object will be created in ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," will be re-rendered."),(0,a.kt)("h2",{id:"when-to-use-react-usecallback"},"When to Use React ",(0,a.kt)("inlineCode",{parentName:"h2"},"useCallback")),(0,a.kt)("p",null,"React ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook is intended to memoize a callback function by maintaining its referential integrity. It should not be confused with ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," which is used to cache the value of a function.",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," is commonly used for memoizing functions between re-renders."),(0,a.kt)("h3",{id:"other-cases"},"Other Cases"),(0,a.kt)("p",null,"React ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," is also used to cache callbacks in debouncing, as well as preventing firing of events typically in ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," hooks."),(0,a.kt)("h2",{id:"when-not-to-use-reacts-usecallback-hook"},"When Not to Use React's ",(0,a.kt)("inlineCode",{parentName:"h2"},"useCallback")," Hook"),(0,a.kt)("p",null,"We should not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook for memoizing the value of a function. We should also avoid overusing ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," since the hook itself contributes to the component's cost. It is recommended to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook only in cases referential equality of the function is important."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this post, we demonstrated how to leverage the React ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook in preventing unnecessary re-renderings originating from a callback function's referential inequality."),(0,a.kt)("p",null,"We first observed from the browser's console how a callback passed to a child component triggers useless re-renders due to change in the function's object identity. We then learned how to prevent them by implementing the callback's memoization with React's ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook which helps us produce the same function object at every re-render of the parent."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(m,{path:"blog-react-memoization-memo",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);