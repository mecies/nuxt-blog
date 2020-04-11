export default context => {
  console.log("middleware check auth");
  context.store.dispatch("initAuth", context.req);
};
