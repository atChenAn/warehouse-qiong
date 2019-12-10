import React from "react";
import { Menu as AntMenu, Icon } from "antd";
import { isEmpty } from "lodash";
import history from "@/utils/history";
import { Route } from "react-router";

interface Menu {
  title: string;
  routePath: string;
  component?: React.LazyExoticComponent<any>;
  children?: Array<Menu>;
  authorith?: string; // 保留字段，权限将会使用
  showMenu?: boolean; // def true 是否渲染菜单
  disable?: boolean; // def false 是否禁用，禁用后将不会注册路由、菜单
  icon?: string;
}

export const menuConf: Menu[] = [
  // {
  //   title: "个人中心",
  //   routePath: "/home",
  //   component: React.lazy(() => import("@/app/Center/Center")),
  //   icon: "home"
  // },
  {
    title: "用户管理",
    routePath: "/user",
    icon: "user",
    children: [
      {
        title: "新增用户",
        routePath: "/user/add",
        component: React.lazy(() => import("@/app/User/UserAdd/UserAdd"))
      },
      {
        title: "用户列表",
        routePath: "/user/list",
        component: React.lazy(() => import("@/app/User/UserList/UserList"))
      }
    ]
  },
  {
    title: "计划管理",
    routePath: "/plan",
    icon: "project",
    children: [
      {
        title: "新增计划",
        routePath: "/plan/add",
        component: React.lazy(() => import("@/app/Plan/PlanAdd/PlanAdd"))
      },
      {
        title: "计划列表",
        routePath: "/plan/list",
        component: React.lazy(() => import("@/app/Plan/PlanList/PlanList"))
      }
    ]
  },
  {
    title: "日志管理",
    routePath: "/log",
    icon: "file-search",
    component: React.lazy(() => import("@/app/Log/Log"))
  }
];

export function renderMenu() {
  const onMenuClick = ({ key }) => {
    history.push(key);
  };
  return (
    <AntMenu mode="inline" theme="dark" onClick={onMenuClick}>
      {menuConf.map(menu =>
        menu.disable !== false && false !== menu.showMenu
          ? renderMenuItem(menu)
          : null
      )}
    </AntMenu>
  );
}

export function renderRouter() {
  return menuConf.map(menu =>
    menu.disable !== false ? registerRouter(menu) : null
  );
}

function registerRouter(menus: Menu) {
  return menus.children && menus.children.length > 0 ? (
    menus.children.map(menu => (
      <Route
        key={menu.routePath}
        path={menu.routePath}
        component={menu.component}
      />
    ))
  ) : (
    <Route
      key={menus.routePath}
      path={menus.routePath}
      component={menus.component}
    />
  );
}

function renderMenuItem(menus: Menu) {
  return menus.children && menus.children.length > 0 ? (
    <AntMenu.SubMenu
      key={menus.title}
      title={
        <span>
          {menus.icon && <Icon type={menus.icon} />}
          <span>{menus.title}</span>
        </span>
      }
    >
      {menus.children.map(menu => (
        <AntMenu.Item key={menu.routePath}>
          {menu.icon && <Icon type={menu.icon} />}
          {menu.title}
        </AntMenu.Item>
      ))}
    </AntMenu.SubMenu>
  ) : (
    <AntMenu.Item key={menus.routePath}>
      {menus.icon && <Icon type={menus.icon} />}
      {menus.title}
    </AntMenu.Item>
  );
}
