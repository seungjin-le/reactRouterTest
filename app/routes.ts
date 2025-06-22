import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('./layouts/default.tsx',[
    index("routes/home.tsx")
  ]),
  layout('./layouts/login.tsx',[
    route("login",'routes/login.tsx')
  ])
] satisfies RouteConfig;
