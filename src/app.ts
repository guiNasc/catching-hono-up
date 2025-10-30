import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";

import ConfigureOpenAPI from "./lib/configure-open-api";
import createApp from "./lib/create-app";

const app = createApp();

const routes = [
  index,
  tasks,
];

ConfigureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
