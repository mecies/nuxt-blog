export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff",
    failedColor: "#ff0000",
    duration: 5000,
    height: "4px"
  },
  // loadingIndicator: {
  //   name: "circle",
  //   color: "green"
  // },
  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/globalComponents.js", "~plugins/dateFilter.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: "https://mecies-blog.firebaseio.com"
  },
  transition: {
    name: "fade",
    mode: "out-in"
  }
  // srcDir: ""
  // generate: {

  // }
  // rootDir: "/"
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: "*",
  //       component: resolve(__dirname, "/pages.index.vue")
  //     });
  //   }
  // }
};
