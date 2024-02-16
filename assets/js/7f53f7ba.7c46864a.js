"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",slug:"zustand-react-state",authors:"chidume_nnamdi",tags:["dev-tools","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-18-zustand/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/zustand-react-state",source:"@site/blog/2023-05-18-zustand.md",title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",date:"2023-05-18T00:00:00.000Z",formattedDate:"May 18, 2023",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"},{label:"react",permalink:"/blog/tags/react"}],readingTime:15.585,hasTruncateMarker:!1,authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],frontMatter:{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",slug:"zustand-react-state",authors:"chidume_nnamdi",tags:["dev-tools","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-18-zustand/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on TypeScript Enum with Examples",permalink:"/blog/typescript-enum"},nextItem:{title:"How Next.js Redirects Work",permalink:"/blog/next-js-redirect"},relatedPosts:[{title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",permalink:"/blog/tanstack-react-table",formattedDate:"October 31, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.7,date:"2023-10-31T00:00:00.000Z"},{title:"Why you should prefer using pnpm over npm and yarn?",description:"The advantages of pnpm and comparison guide.",permalink:"/blog/pnpm-vs-npm-and-yarn",formattedDate:"October 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.805,date:"2022-10-13T00:00:00.000Z"},{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.445,date:"2022-09-24T00:00:00.000Z"}],authorPosts:[{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"February 7, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.44,date:"2024-02-07T00:00:00.000Z"},{title:"Top Frameworks for Building Admin Panels and Dashboards in 2024",description:"We'll look at the best frameworks for building admin panels and dashboards in 2024.",permalink:"/blog/admin-panels",formattedDate:"December 29, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:14.24,date:"2023-12-29T00:00:00.000Z"},{title:"React Props Explained with Examples",description:"A detailed guide on React props with examples",permalink:"/blog/react-props",formattedDate:"November 16, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:10.95,date:"2022-11-16T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Zustand?",id:"what-is-zustand",level:2},{value:"Getting started with Zustand",id:"getting-started-with-zustand",level:2},{value:"Build a To-do app using Zustand",id:"build-a-to-do-app-using-zustand",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d};function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Redux changed the game in the global management system. It was so successful that it was widely adopted and used as the ideal state management system in any framework. Not only in the framework but its principle still serves greatly in software development. Almost all developers have used Redux to manage their global state, and we can all attest to how powerful, fast, and maintainable it is to use Redux as the global state management tool. It makes debugging very easy and our app is predictable."),(0,a.kt)("p",null,"Yes, Redux took the grand stage in global state management, but there is a new kid on the block. This new kid is poised, and ready to capture the audience of the global state management system. It comes packing a powerful punch and is armed to the teeth. Its name is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand"},"Zustand"),".\nWith the arrival of Zustand and the goodies it brings, will it suffice to say that Redux reign is coming to an end?"),(0,a.kt)("p",null,"In this article, we will deep dive into Zustand. We will learn about this kid, to understand how it works, its state management technique, and how it will take the state management world by storm."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-zustand"},"What is Zustand?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getting-started-with-zustand"},"Getting started with Zustand")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#build-a-to-do-app-using-zustand"},"Build a To-do app using Zustand"))),(0,a.kt)("h2",{id:"what-is-zustand"},"What is Zustand?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A small, fast, and scalable barebones state-management solution using simplified flux principles. Has a comfy API based on hooks, and isn't boilerplates or opinionated. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand"},"https://github.com/pmndrs/zustand"))),(0,a.kt)("p",null,"Zustand is a small unopinionated state management library built by Jotai and React-spring. It has a comfy API based on hooks, and isn't opinionated. Zustand is open-source with a large community of users and support developers working round the clock to make Zustand stable. It sits on Github with 30,000+ stars."),(0,a.kt)("p",null,"Zustand is very different from Redux in terms of how it is used. Zustand is simple and un-opinionated, it does not wrap your app in content providers like how we do with React-Redux. It mainly uses hooks as a means of communicating back and forth with the state.\nAt its core, Zustand embraces the concept of a single source of truth, where the entire application state is stored in a centralized store. This store is composed of state slices, which are individual units of state that represent different parts of the application. Each state slice is defined as a separate store, allowing for modularity and encapsulation of related state properties and their associated actions.\nWorking with Zustand, you will need less boilerplate for it and its state management is centralized and action-based."),(0,a.kt)("p",null,"Zustand promotes immutability by default, ensuring that state updates are handled in an immutable fashion. When updating the state, you create a new state object rather than modifying the existing state directly. This approach simplifies state management, prevents common mutation-related bugs, and enables efficient change detection and re-rendering in React components."),(0,a.kt)("p",null,"Another notable feature of Zustand is its built-in support for subscriptions and selective reactivity. Components can subscribe to specific state slices and be automatically re-rendered when those slices change. Zustand uses a fine-grained dependency tracking mechanism based on proxies, allowing for highly efficient updates and minimizing unnecessary re-renders."),(0,a.kt)("p",null,"In the next section, we will learn how to install and use Zustand in our project."),(0,a.kt)("h2",{id:"getting-started-with-zustand"},"Getting started with Zustand"),(0,a.kt)("p",null,"We know that Zustand is a JavaScript library that runs on Nodejs. So we will need some basic tools to be installed on your machine before we start."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nodejs"),": We need the Nodejs binaries installed in our system. Go over to ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download")," and install the binaries meant for your machine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"npm or yarn"),": These are Node Package Managers, they help in maintaining and managing the dependencies, and the Nodejs environment of our project. ",(0,a.kt)("inlineCode",{parentName:"li"},"npm")," comes bundled with the Nodejs binaries, so once you install Nodejs you don't need a separate installation for npm. ",(0,a.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install/"},"Yarn")," can be installed by running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i yarn -g"),".")),(0,a.kt)("p",null,"Let's create a Nodejs project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir zustand-prj\ncd zustand-prj\nnpm init --y\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir zustand-prj"),': This command creates a new directory named "zustand-prj" in the current location. It is equivalent to "make directory." The "zu'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd zustand-prj"),': This command changes the current working directory to "zustand-prj." By running this command, you will navigate into the newly created directory.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm init --y"),': This command initializes a new Node.js project within the "zustand-prj" directory. The npm init command is used to generate a package.json file, which is a manifest file that describes your project\'s metadata and dependencies. The ',(0,a.kt)("inlineCode",{parentName:"li"},"--y"),' flag is added to automatically accept all default options without prompting for user input. It is a shortcut for answering "yes" to all the initialization questions.')),(0,a.kt)("p",null,"To install the zustand library, we run the below command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install zustand # or yarn add zustand\n")),(0,a.kt)("p",null,"This command installs the ",(0,a.kt)("inlineCode",{parentName:"p"},"zustand")," library in our project."),(0,a.kt)("p",null,"To use zustand, we have to import a ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { create } from "zustand";\n')),(0,a.kt)("p",null,"This function is called with a callback function and it returns a custom hook. The callback function passed to it is where we will define our state and the functions we can use to manipulate the state. The state and the functions are all in an object returned by this callback function."),(0,a.kt)("p",null,"Let's see an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"}," const useCounter = create((set) => {\n    return {\n        counter: 0,\n        incrCounter: () => set((state) => ({ counter: state.counter + 1 })),\n    };\n});\n")),(0,a.kt)("p",null,"See that the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function, passes a ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function to the callback function. This ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function is a function used to manipulate the state in the store. States in zustand can be primitives, objects, or functions. In our above example, we have two states in our store: ",(0,a.kt)("inlineCode",{parentName:"p"},"counter"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"incrCounter"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," is a custom hook, we can use this hook in our components and we will be able to get the latest state in them. If we use the hook in components A, B, and C. Any change done to the state in B will be reflected in both A and C, and they will all re-render to reflect the new changes."),(0,a.kt)("p",null,"The custom hook returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," acts similarly to ",(0,a.kt)("inlineCode",{parentName:"p"},"useAppSelector")," in React-Redux, it lets you select a slice of state from the store. You call the hook and pass it a callback function. This function is called by the hook internally and passes the current state to it. So we will then get this state and return the part of the state we want."),(0,a.kt)("p",null,"Let's see an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const counter = useCounter((state) => state.counter);\n")),(0,a.kt)("p",null,"See that we called the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," hook and passed a callback function to it. Then, we expect a state from the hook and then return the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," part of the state."),(0,a.kt)("p",null,"We can then, display the counter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const DisplayCounter = () => {\n    const counter = useCounter((state) => state.counter);\n    return <div>Counter: {counter}</div>;\n};\n")),(0,a.kt)("p",null,"Now, we want to create a component where we can increase the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const CounterControl = () => {\n    const incrCounter = useCounter((state) => state.incrCounter);\n\n    return (\n        <div>\n            <button onClick={incrCounter}>Incr. Counter</button>\n        </div>\n    );\n};\n")),(0,a.kt)("p",null,"This is a separate component from where we increase the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state. See that we sliced out the ",(0,a.kt)("inlineCode",{parentName:"p"},"incrState")," function from the state, and we set it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," event of the button. This will increase the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter"),' state when the button is clicked.\nSee how the components are independent of each yet they can "see" the current state from the store. Whenever we click the ',(0,a.kt)("inlineCode",{parentName:"p"},"Incr. Counter")," button in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CounterControl")," component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayComponent")," will re-render to display the newest ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state value."),(0,a.kt)("p",null,"Let's see how we use them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n    return (\n        <>\n            <DisplayCounter />\n            <CounterControl />\n        </>\n    );\n};\n")),(0,a.kt)("p",null,"They are independent of each other yet magically connected by zustand. This gives React-Redux a run for its money because trying to re-create this small state in Redux-React will take more code to set up:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we will create a store."),(0,a.kt)("li",{parentName:"ul"},"We will wrap either the ",(0,a.kt)("inlineCode",{parentName:"li"},"App")," component or its children in a Content Provider and pass the store to the Context Provider via a ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," props."),(0,a.kt)("li",{parentName:"ul"},"We will import ",(0,a.kt)("inlineCode",{parentName:"li"},"useSelector, useDispatch")," in any component we wish to use in the store."),(0,a.kt)("li",{parentName:"ul"},"To get a slice of the state we will call the ",(0,a.kt)("inlineCode",{parentName:"li"},"useSelector")," with a callback function."),(0,a.kt)("li",{parentName:"ul"},"To dispatch an action to the store, we will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"useDispatch")," hook.")),(0,a.kt)("p",null,"It's quite lengthy, but with Zustand it's oversimplified."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returning the whole state"),"\nNow, when we call the custom hook returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function without a callback function, the hook will return the whole state of the store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = useCounter();\n")),(0,a.kt)("p",null,"See that we called the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," hook with no callback function, so in this case, the function will return the whole state in the store."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," holds the whole state in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," store. We can get the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state by doing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"state.counter;\n// 0\n")),(0,a.kt)("p",null,"We can also, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"incrCounter")," state function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"state.counter;\n// 0\n    \nstate.incrCounter();\n// 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Memoization"),"\nWe can memoize our zustand store. Memoization is an optimization technique used to optimize the execution of functions by caching the results of expensive or time-consuming function calls. It involves storing the return value of a function associated with a specific set of input parameters so that if the function is called again with the same parameters, the cached result can be returned instead of re-evaluating the function.\nThe goal of memoization is to improve performance and efficiency by avoiding redundant computations."),(0,a.kt)("p",null,"Now, zustand gives us the ability to add memoization to the custom hook it returns to us. It exports a ",(0,a.kt)("inlineCode",{parentName:"p"},"shallow")," function that we can use to add memoization to our state picks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { shallow } from "zustand/shallow";\n')),(0,a.kt)("p",null,"Still using our ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," as an example, let's say we want to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state from the store. We do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// DisplayComponent\nconst counter = useCounter((state) => state.counter);\n")),(0,a.kt)("p",null,"Now, let's say the initial state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," is 0, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state is updated using the ",(0,a.kt)("inlineCode",{parentName:"p"},"incrCounter"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayComponent")," will be re-rendered. Now, if the updated value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," is 0 we will see that it is ",(0,a.kt)("strong",{parentName:"p"},"unnecessary")," to re-render the ",(0,a.kt)("inlineCode",{parentName:"p"},"DisplayCounter")," component."),(0,a.kt)("p",null,"How do we stop this unnecessary re-rendering from occurring when the previous state and the next state are equal? Zustand directs us to pass a comparator function as a second parameter to the custom hook. This comparator function will compare the previous slice state and the next slice state, if both are the same the component will not re-render, else the component will re-render."),(0,a.kt)("p",null,"This is exactly what other React hooks do: useEffect, useMemo, and useCallback.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"shallow")," function is a comparator function provided to us by Zustand. It shallowly compares the two-state slices using the ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," shallow equality operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const counter = useCounter((state) => state.counter, shallow);\n")),(0,a.kt)("p",null,"See we passed the ",(0,a.kt)("inlineCode",{parentName:"p"},"shallow")," function as a second parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," hook. On each state change in the store, the ",(0,a.kt)("inlineCode",{parentName:"p"},"shallow")," will determine if the component will re-render based on the previous and next value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state.\nWe can use our custom-made comparator if we don't trust the ",(0,a.kt)("inlineCode",{parentName:"p"},"shallow")," function to do the job. The comparator function takes two parameters, the first parameter is the previous value of the state slice while the second parameter is the next value of the state slice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(previousState, nextStateSlice) =>\n")),(0,a.kt)("p",null,"Inside this function is where we do our comparing and return the result. Returning ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," will make the hook skip the component from re-rendering while returning ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," will make the component re-render."),(0,a.kt)("p",null,"Let's create our comparator function for the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state slice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(previousCounter, nextCounter) => previousCounter === nextCounter;\n")),(0,a.kt)("p",null,"This uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"===")," equality operator to check if the two are the same. It returns a Boolean. "),(0,a.kt)("p",null,"Let's plug it back into the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const counter = useCounter(\n    (state) => state.counter,\n    (previousCounter, nextCounter) => previousCounter === nextCounter\n);\n")),(0,a.kt)("p",null,"Now, we have memoized our ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," hook. With this, we have made our application a bit faster, with no more unnecessary re-renders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Updating the whole state"),"\nWe have only talked about getting the state from the store, but we have not delved into how to set the state. We only saw it briefly when we created the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCounter")," hook earlier on. Now, we will see how to update the state."),(0,a.kt)("p",null,"We learned that zustand passes a function to the callback function passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," function. This function widely accepted to be referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," is used to update all or parts of the state."),(0,a.kt)("p",null,"Let's look into the ",(0,a.kt)("inlineCode",{parentName:"p"},"incrCounter")," state function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const useCounter = create((set) => {\n    return {\n        counter: 0,\n        incrCounter: () => set((state) => ({ counter: state.counter + 1 })),\n    };\n});\n")),(0,a.kt)("p",null,"Here, we are passing a callback function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function. The ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function will call this function and pass it the state as an argument, then use the result of the function to update the state. See that in the callback function, we are returning an object with a ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," property. The ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function uses the properties found in the object to know the properties in the state to update."),(0,a.kt)("p",null,"We see that when we pass a function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function as an argument, the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function expects that we return an object."),(0,a.kt)("p",null,"We can pass an object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"set({\n    counter: 9,\n});\n")),(0,a.kt)("p",null,"This will update the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state value to 9."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Clear the entire state"),"\nWe can clear the state in a zustand store by passing an empty object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"set({}, true);\n")),(0,a.kt)("p",null,"This will clear the state and the actions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What are actions?"),"\nActions are functions that are part of the state in a zustand store. They are like dispatch actions in React-Redux, they are used to effect changes in the store. For example, our ",(0,a.kt)("inlineCode",{parentName:"p"},"incrCounter")," is an action, we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function inside it to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using async actions"),"\nActions in zustand also support asynchronicity. In fact, according to Zustand docs, zustand does not care if your action is asynchronous or not.\nWe can perform an asynchronous function in an action. For example, we can make an HTTP request to an endpoint from our action and update the state with the result from the HTTP call."),(0,a.kt)("p",null,"Let's show an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const useCounter = create((set) => {\n    return {\n        counter: 0,\n        incrCounter: async () => {\n            const { data } = await axios.get("/counter");\n            set({\n                counter: data.counter,\n            });\n        },\n    };\n});\n')),(0,a.kt)("p",null,"See that in the ",(0,a.kt)("inlineCode",{parentName:"p"},"incrCounter")," we made it an asynchronous function by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," keyword. Inside the function, we made a call to an ",(0,a.kt)("inlineCode",{parentName:"p"},"/counter")," endpoint and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," function to update the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"counter")," in the state."),(0,a.kt)("h2",{id:"build-a-to-do-app-using-zustand"},"Build a To-do app using Zustand"),(0,a.kt)("p",null,"Now, we have learned the basics of zustand and its API. We will create a To-do app using Zustand."),(0,a.kt)("p",null,"The To-do app will be a React app, while the Zustand will power our state management."),(0,a.kt)("p",null,"Let's start, we will scaffold a React project using the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"create-react-app todo-app\ncd todo-app\n")),(0,a.kt)("p",null,"Next, we install ",(0,a.kt)("inlineCode",{parentName:"p"},"zustand"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install zustand\n")),(0,a.kt)("p",null,"The first thing we create our hook store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import create from "zustand";\n\nconst useStore = create((set) => ({\n    todos: [],\n    addTodo: (text) =>\n        set((state) => ({\n            todos: [\n                ...state.todos,\n                {\n                    id: Date.now(),\n                    text,\n                    completed: false,\n                },\n            ],\n        })),\n    toggleTodo: (id) =>\n        set((state) => ({\n            todos: state.todos.map((todo) =>\n                todo.id === id ? { ...todo, completed: !todo.completed } : todo\n            ),\n        })),\n    deleteTodo: (id) =>\n        set((state) => ({\n            todos: state.todos.filter((todo) => todo.id !== id),\n        })),\n}));\n\nexport default useStore;\n')),(0,a.kt)("p",null,"See, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," state. This will hold an array of our todos. We have three actions: ",(0,a.kt)("inlineCode",{parentName:"p"},"addTodo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTodo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteTodo"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"addTodo")," action adds new todo to the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," state. , the ",(0,a.kt)("inlineCode",{parentName:"p"},"toggleTodo")," action toggles the ",(0,a.kt)("inlineCode",{parentName:"p"},"completed")," state of a todo. The ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteTodo")," removes a todo from the array state.\nNow, let's build the components."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DisplayTodos"),"\nThis component will have one job. It will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const DisplayTodos = () => {\n    const { todos, deleteTodo } = useStore((state) => {\n        return { todos: state.todos, deleteTodo: state.deleteTodo };\n    });\n\n    return (\n        <ul>\n            {todos.map((todo) => (\n                <li\n                    key={todo.id}\n                    style={{\n                        textDecoration: todo.completed\n                            ? "line-through"\n                            : "none",\n                    }}\n                    onClick={() => toggleTodo(todo.id)}\n                >\n                    {todo.text}\n                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>\n                </li>\n            ))}\n        </ul>\n    );\n};\n\nexport default DisplayTodos;\n')),(0,a.kt)("p",null,"We sliced off the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," array from the state and used the ",(0,a.kt)("inlineCode",{parentName:"p"},"Array#map")," method to render the todos, also we sliced off the ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAction"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete")," button removes each todo from the list, it does this by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAction")," action with the id of the todo clicked.\nNow, let's build the component where we can add a todo to the list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TodosControl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const TodosControl = () => {\n    const addTodo = useStore((state) => state.addTodo);\n    const [text, setText] = useState("");\n\n    function handleSubmit(e) {\n        e.preventDefault();\n        addTodo(text);\n        setText("");\n    }\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input\n                type="text"\n                value={text}\n                onChange={(e) => setText(e.target.value)}\n            />\n            <button type="submit">Add</button>\n        </form>\n    );\n};\n\nexport default TodosControl;\n')),(0,a.kt)("p",null,"This component provides us a form where we input a todo and add it to the state store. We have a state ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," that holds the text we type in the input element. Then, the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleSubmit")," function is called when the form is submitted via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," button. Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleSubmit")," function, the ",(0,a.kt)("inlineCode",{parentName:"p"},"addTodo")," is called passing in the text in the ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," state as an argument. This will create and add a new todo to the ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," state."),(0,a.kt)("p",null,"Bringing them all together:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"}," const App = () => {\n    return (\n        <>\n            <DisplayTodos />\n            <TodosControl />\n        </>\n    );\n};\n\nexport default App;\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have come a long way. Zustand is interesting and freakingly minimal and basic to use. Mind you, what we learned here is just the basics, the power of Zustand is yet to be covered in total and it runs deep."),(0,a.kt)("p",null,"Let's recap. We started by introducing Zustand; how it works and how it differentiates itself from the world-popular Redux. Next, we saw how to install the Zustand library, we learned also how to set up a state in it and how to use the actions. We learned how to set up async operations in actions, how to update a state, and how to get slices off a state."))}h.isMDXComponent=!0}}]);