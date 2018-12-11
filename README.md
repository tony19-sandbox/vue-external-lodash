> Demo for https://stackoverflow.com/questions/53664163/webpack-external-library-access-with-vue-web-components

This project demonstrates using Lodash CDN from within a Vue library.

*Notes:*

 * In `public/index.html`, import Lodash from CDN with:

        <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js"></script>

* When building (with `npm run build`), edit `dist/demo.html` to also include the `<script>` tag above.

* In the library component (`src/components/HelloWorld.vue`), the `_` global can be used **without importing `lodash`**.
 
* To avoid lint errors, specify `_` as an [ESLint global](https://eslint.org/docs/user-guide/configuring#specifying-globals) (`/* global _ */`).

* In [`vue.config.js`](https://cli.vuejs.org/config/#vue-config-js), configure Webpack to externalize `lodash`:

      module.exports = {
        configureWebpack: {
          externals: {
            lodash: {
              commonjs: 'lodash',
              amd: 'lodash',
              root: '_' // indicates global variable
            }
          }
        }
      }