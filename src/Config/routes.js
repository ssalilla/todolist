import TodoPage from "../Todolist/Todolist.js";
import LoginPage from "../Login/Login.js";
import GoalPage from "../Goal/Goal.js";
import RegisterPage from "../Regis/Regis.js";

const component = {
  todolist: {
    url: "/todolist",
    component: TodoPage,
  },
  login: {
    url: "/",
    component: LoginPage,
  },
  goal: {
    url: "/goal",
    component: GoalPage,
  },
  registeration: {
    url: "/registeration",
    component: RegisterPage,
  },
};

const configRoles = {
  guest: {
    allowedRoutes: [component.login, component.register],
    redirectRoutes: "/",
  },
  user: {
    allowedRoutes: [component.todo, component.goal, component.login],
    redirectRoutes: "/todo",
  },
};

export default configRoles;
