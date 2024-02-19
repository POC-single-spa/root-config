import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@hbler/main-layout",
  app: () => System.import<LifeCycles>("@hbler/main-layout"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
