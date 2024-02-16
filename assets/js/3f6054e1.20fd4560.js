"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"mui-custom-sider",title:"Sider",swizzle:!0},l=void 0,p={unversionedId:"api-reference/mui/customization/mui-custom-sider",id:"version-3.xx.xx/api-reference/mui/customization/mui-custom-sider",title:"Sider",description:"You can access the logout, dashboard, items elements and collapsed state that we use in our default Sider component by using render properties. Customize it to your needs or you can create a custom ` component and use it either by passing it to ` or using a Custom Layout.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/customization/sider.md",sourceDirName:"api-reference/mui/customization",slug:"/api-reference/mui/customization/mui-custom-sider",permalink:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-sider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/customization/sider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1708078260,formattedLastUpdatedAt:"Feb 16, 2024",frontMatter:{id:"mui-custom-sider",title:"Sider",swizzle:!0},sidebar:"someSidebar",previous:{title:"Layout",permalink:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-layout"},next:{title:"Packages",permalink:"/docs/3.xx.xx/packages"}},c={},u=[{value:"Customize Sider by Using <code>render</code> property",id:"customize-sider-by-using-render-property",level:2},{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",level:2}],d={toc:u};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const Wrapper = ({ children }) => {\n  return (\n    <RefineMui.ThemeProvider theme={RefineMui.LightTheme}>\n      <RefineMui.CssBaseline />\n      <RefineMui.GlobalStyles\n        styles={{ html: { WebkitFontSmoothing: "auto" } }}\n      />\n      {children}\n    </RefineMui.ThemeProvider>\n  );\n};\n')),(0,r.kt)("p",null,"You can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," elements and ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," state that we use in our default ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," properties. Customize it to your needs or you can create a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider />")," component and use it either by passing it to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine />"))," or using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-layout"},"Custom Layout"),"."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"customize-sider-by-using-render-property"},"Customize Sider by Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"render")," property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { Box, ListItemText, Sider } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n  return <div>PostList Page</div>;\n};\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n        },\n      ]}\n      Sider={Sider}\n      Layout={({ children, Sider, Header, Footer, OffLayoutArea }) => (\n        <Box display="flex" flexDirection="row">\n          {/* highlight-start */}\n          <Sider\n            render={({ items }) => {\n              return (\n                <>\n                  <ListItemText primary="Custom Element" />\n                  {items}\n                </>\n              );\n            }}\n          />\n          {/* highlight-end */}\n          <Box\n            sx={{\n              display: "flex",\n              flexDirection: "column",\n              flex: 1,\n              minHeight: "100vh",\n            }}\n          >\n            {Header && <Header />}\n            <Box\n              component="main"\n              sx={{\n                p: { xs: 1, md: 2, lg: 3 },\n                flexGrow: 1,\n                bgcolor: (theme) => theme.palette.background.default,\n              }}\n            >\n              {children}\n            </Box>\n            {Footer && <Footer />}\n          </Box>\n          {OffLayoutArea && <OffLayoutArea />}\n        </Box>\n      )}\n    />\n  );\n};\n// visible-block-end\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," state to manage the component that you want to add to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component.")),(0,r.kt)("h2",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,r.kt)("p",null,"You can also customize your Sider component by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomSider")," component."),(0,r.kt)("p",null,"When you examine the code of the live-preview example below, you will see the same code that we used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default sider")," component. You can create a customized ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomSider")," component for yourself by following this code."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also run the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command to export the source code of the default sider component. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI"))," for more information.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/CustomSider.tsx"',title:'"src/components/CustomSider.tsx"'},'import React, { useState } from "react";\nimport {\n  CanAccess,\n  ITreeMenu,\n  useIsExistAuthentication,\n  useLogout,\n  useTitle,\n  useTranslate,\n  useRouterContext,\n  useMenu,\n  useRefineContext,\n} from "@pankod/refine-core";\nimport {\n  Layout,\n  Box,\n  Drawer,\n  MuiList,\n  ListItemButton,\n  ListItemIcon,\n  ListItemText,\n  Collapse,\n  Tooltip,\n  Button,\n  IconButton,\n  Title as DefaultTitle,\n} from "@pankod/refine-mui";\nimport type { RefineLayoutSiderProps } from "@pankod/refine-mui";\n\n// We use @mui/icons-material for icons but you can use any icon library you want.\nimport {\n  ListOutlined,\n  Logout,\n  ExpandLess,\n  ExpandMore,\n  ChevronLeft,\n  ChevronRight,\n  MenuRounded,\n  Dashboard,\n} from "@mui/icons-material";\n\nconst CustomSider: React.FC<RefineLayoutSiderProps> = ({ render }) => {\n  const [collapsed, setCollapsed] = useState(false);\n  const [opened, setOpened] = useState(false);\n\n  const drawerWidth = () => {\n    if (collapsed) return 64;\n    return 200;\n  };\n\n  const t = useTranslate();\n  const { Link } = useRouterContext();\n  const { hasDashboard } = useRefineContext();\n  const translate = useTranslate();\n\n  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n  const isExistAuthentication = useIsExistAuthentication();\n  const { mutate: mutateLogout } = useLogout();\n  const Title = useTitle();\n\n  const [open, setOpen] = useState<{ [k: string]: any }>({});\n\n  React.useEffect(() => {\n    setOpen((previousOpen) => {\n      const previousOpenKeys: string[] = Object.keys(previousOpen);\n      const uniqueKeys = new Set([...previousOpenKeys, ...defaultOpenKeys]);\n      const uniqueKeysRecord = Object.fromEntries(\n        Array.from(uniqueKeys.values()).map((key) => [key, true]),\n      );\n      return uniqueKeysRecord;\n    });\n  }, [defaultOpenKeys]);\n\n  const RenderToTitle = Title ?? DefaultTitle;\n\n  const handleClick = (key: string) => {\n    setOpen({ ...open, [key]: !open[key] });\n  };\n\n  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n    return tree.map((item: ITreeMenu) => {\n      const { icon, label, route, name, children, parentName } = item;\n      const isOpen = open[route || ""] || false;\n\n      const isSelected = route === selectedKey;\n      const isNested = !(parentName === undefined);\n\n      if (children.length > 0) {\n        return (\n          <CanAccess\n            key={route}\n            resource={name.toLowerCase()}\n            action="list"\n            params={{\n              resource: item,\n            }}\n          >\n            <div key={route}>\n              <Tooltip\n                title={label ?? name}\n                placement="right"\n                disableHoverListener={!collapsed}\n                arrow\n              >\n                <ListItemButton\n                  onClick={() => {\n                    if (collapsed) {\n                      setCollapsed(false);\n                      if (!isOpen) {\n                        handleClick(route || "");\n                      }\n                    } else {\n                      handleClick(route || "");\n                    }\n                  }}\n                  sx={{\n                    pl: isNested ? 4 : 2,\n                    justifyContent: "center",\n                    "&.Mui-selected": {\n                      "&:hover": {\n                        backgroundColor: "transparent",\n                      },\n                      backgroundColor: "transparent",\n                    },\n                  }}\n                >\n                  <ListItemIcon\n                    sx={{\n                      justifyContent: "center",\n                      minWidth: 36,\n                      color: "primary.contrastText",\n                    }}\n                  >\n                    {icon ?? <ListOutlined />}\n                  </ListItemIcon>\n                  <ListItemText\n                    primary={label}\n                    primaryTypographyProps={{\n                      noWrap: true,\n                      fontSize: "14px",\n                      fontWeight: isSelected ? "bold" : "normal",\n                    }}\n                  />\n                  {!collapsed && (isOpen ? <ExpandLess /> : <ExpandMore />)}\n                </ListItemButton>\n              </Tooltip>\n              {!collapsed && (\n                <Collapse in={open[route || ""]} timeout="auto" unmountOnExit>\n                  <MuiList component="div" disablePadding>\n                    {renderTreeView(children, selectedKey)}\n                  </MuiList>\n                </Collapse>\n              )}\n            </div>\n          </CanAccess>\n        );\n      }\n\n      return (\n        <CanAccess\n          key={route}\n          resource={name.toLowerCase()}\n          action="list"\n          params={{ resource: item }}\n        >\n          <Tooltip\n            title={label ?? name}\n            placement="right"\n            disableHoverListener={!collapsed}\n            arrow\n          >\n            <ListItemButton\n              component={Link}\n              to={route}\n              selected={isSelected}\n              onClick={() => {\n                setOpened(false);\n              }}\n              sx={{\n                pl: isNested ? 4 : 2,\n                py: isNested ? 1.25 : 1,\n                "&.Mui-selected": {\n                  "&:hover": {\n                    backgroundColor: "transparent",\n                  },\n                  backgroundColor: "transparent",\n                },\n                justifyContent: "center",\n              }}\n            >\n              <ListItemIcon\n                sx={{\n                  justifyContent: "center",\n                  minWidth: 36,\n                  color: "primary.contrastText",\n                }}\n              >\n                {icon ?? <ListOutlined />}\n              </ListItemIcon>\n              <ListItemText\n                primary={label}\n                primaryTypographyProps={{\n                  noWrap: true,\n                  fontSize: "14px",\n                  fontWeight: isSelected ? "bold" : "normal",\n                }}\n              />\n            </ListItemButton>\n          </Tooltip>\n        </CanAccess>\n      );\n    });\n  };\n\n  const dashboard = hasDashboard ? (\n    <CanAccess resource="dashboard" action="list">\n      <Tooltip\n        title={translate("dashboard.title", "Dashboard")}\n        placement="right"\n        disableHoverListener={!collapsed}\n        arrow\n      >\n        <ListItemButton\n          component={Link}\n          to="/"\n          selected={selectedKey === "/"}\n          onClick={() => {\n            setOpened(false);\n          }}\n          sx={{\n            pl: 2,\n            py: 1,\n            "&.Mui-selected": {\n              "&:hover": {\n                backgroundColor: "transparent",\n              },\n              backgroundColor: "transparent",\n            },\n            justifyContent: "center",\n          }}\n        >\n          <ListItemIcon\n            sx={{\n              justifyContent: "center",\n              minWidth: 36,\n              color: "primary.contrastText",\n            }}\n          >\n            <Dashboard />\n          </ListItemIcon>\n          <ListItemText\n            primary={translate("dashboard.title", "Dashboard")}\n            primaryTypographyProps={{\n              noWrap: true,\n              fontSize: "14px",\n              fontWeight: selectedKey === "/" ? "bold" : "normal",\n            }}\n          />\n        </ListItemButton>\n      </Tooltip>\n    </CanAccess>\n  ) : null;\n\n  const logout = isExistAuthentication && (\n    <Tooltip\n      title={t("buttons.logout", "Logout")}\n      placement="right"\n      disableHoverListener={!collapsed}\n      arrow\n    >\n      <ListItemButton\n        key="logout"\n        onClick={() => mutateLogout()}\n        sx={{ justifyContent: "center" }}\n      >\n        <ListItemIcon\n          sx={{\n            justifyContent: "center",\n            minWidth: 36,\n            color: "primary.contrastText",\n          }}\n        >\n          <Logout />\n        </ListItemIcon>\n        <ListItemText\n          primary={t("buttons.logout", "Logout")}\n          primaryTypographyProps={{\n            noWrap: true,\n            fontSize: "14px",\n          }}\n        />\n      </ListItemButton>\n    </Tooltip>\n  );\n\n  const items = renderTreeView(menuItems, selectedKey);\n\n  const renderSider = () => {\n    if (render) {\n      return render({\n        dashboard,\n        logout,\n        items,\n        collapsed,\n      });\n    }\n    return (\n      <>\n        {dashboard}\n        {items}\n        {logout}\n      </>\n    );\n  };\n\n  const drawer = (\n    <MuiList disablePadding sx={{ mt: 1, color: "primary.contrastText" }}>\n      {renderSider()}\n    </MuiList>\n  );\n\n  return (\n    <>\n      <Box\n        sx={{\n          width: { xs: drawerWidth() },\n          display: {\n            xs: "none",\n            md: "block",\n          },\n          transition: "width 0.3s ease",\n        }}\n      />\n      <Box\n        component="nav"\n        sx={{\n          position: "fixed",\n          zIndex: 1101,\n          width: { sm: drawerWidth() },\n          display: "flex",\n        }}\n      >\n        <Drawer\n          variant="temporary"\n          open={opened}\n          onClose={() => setOpened(false)}\n          ModalProps={{\n            keepMounted: true, // Better open performance on mobile.\n          }}\n          sx={{\n            display: { sm: "block", md: "none" },\n            "& .MuiDrawer-paper": {\n              width: 256,\n              bgcolor: "secondary.main",\n            },\n          }}\n        >\n          <Box\n            sx={{\n              height: 64,\n              display: "flex",\n              alignItems: "center",\n              justifyContent: "center",\n            }}\n          >\n            <RenderToTitle collapsed={false} />\n          </Box>\n          {drawer}\n        </Drawer>\n        <Drawer\n          variant="permanent"\n          PaperProps={{ elevation: 1 }}\n          sx={{\n            display: { xs: "none", md: "block" },\n            "& .MuiDrawer-paper": {\n              width: drawerWidth,\n              bgcolor: "secondary.main",\n              overflow: "hidden",\n              transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",\n            },\n          }}\n          open\n        >\n          <Box\n            sx={{\n              height: 64,\n              display: "flex",\n              alignItems: "center",\n              justifyContent: "center",\n            }}\n          >\n            <RenderToTitle collapsed={collapsed} />\n          </Box>\n          <Box\n            sx={{\n              flexGrow: 1,\n              overflowX: "hidden",\n              overflowY: "auto",\n            }}\n          >\n            {drawer}\n          </Box>\n          <Button\n            sx={{\n              background: "rgba(0,0,0,.5)",\n              color: "primary.contrastText",\n              textAlign: "center",\n              borderRadius: 0,\n              borderTop: "1px solid #ffffff1a",\n            }}\n            fullWidth\n            size="large"\n            onClick={() => setCollapsed((prev) => !prev)}\n          >\n            {collapsed ? <ChevronRight /> : <ChevronLeft />}\n          </Button>\n        </Drawer>\n        <Box\n          sx={{\n            display: { xs: "block", md: "none" },\n            position: "fixed",\n            top: "64px",\n            left: "0px",\n            borderRadius: "0 6px 6px 0",\n            bgcolor: "secondary.main",\n            zIndex: 1199,\n            width: "36px",\n          }}\n        >\n          <IconButton\n            sx={{ color: "#fff", width: "36px" }}\n            onClick={() => setOpened((prev) => !prev)}\n          >\n            <MenuRounded />\n          </IconButton>\n        </Box>\n      </Box>\n    </>\n  );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is used to get style agnostic menu items. We render these items in the body of the sider. We create a recursive ",(0,r.kt)("inlineCode",{parentName:"p"},"renderTreeView")," function to create menu items from the list of resources passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),". We get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTitle")," hook."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to create a multi-level menu, you can take a look at this ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/examples/multi-level-menu"},(0,r.kt)("inlineCode",{parentName:"a"},"multi-level menu"))," example and also ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/multi-level-menu"},(0,r.kt)("inlineCode",{parentName:"a"},"here"))," is the guide.")),(0,r.kt)("p",null,"We can override the default sider and show the custom menu we implemented in its place by passing a custom component to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=420px",live:!0,previewHeight:"420px"},'import {\n  useDataGrid,\n  DataGrid,\n  GridColumns,\n  List,\n  Sider as CustomSider,\n  TextField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n  { field: "id", headerName: "ID", type: "number" },\n  {\n    field: "title",\n    headerName: "Title",\n    minWidth: 100,\n    flex: 1,\n  },\n  {\n    field: "slug",\n    headerName: "Slug",\n    minWidth: 100,\n    flex: 1,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostsList } from "pages/posts";\n\n// highlight-next-line\nimport { CustomSider } from "./components/CustomSider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      dataProvider={dataProvider(API_URL)}\n      routerProvider={routerProvider}\n      Layout={Layout}\n      // highlight-next-line\n      Sider={CustomSider}\n      resources={[{ name: "posts", list: PostsList }]}\n    />\n  );\n};\n\n// visible-block-end\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')))}m.isMDXComponent=!0}}]);