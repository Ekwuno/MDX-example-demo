const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/obinnaspeaks/Documents/using-MDX/src/templates/blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/obinnaspeaks/Documents/using-MDX/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/obinnaspeaks/Documents/using-MDX/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/obinnaspeaks/Documents/using-MDX/src/pages/index.js")))
}

