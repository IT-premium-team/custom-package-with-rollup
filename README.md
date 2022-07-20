# Introduction

The repository provides an example of the custom JavaScript package made with [Rollup](https://rollupjs.org/guide/en/).

There are two directories in packages:
- my-awesome-package - an example of the library
- react-example - an example of a React project, where the custom package is used

## my-awesome-package

### General info

This project should be in a private repository. In this example, let's assume the package is in the private repo
https://github.com/IT-premium-team/my-awesome-package.git". Check the React app section below to to see how include it.

The project in ./my-awesome-package has two directories:
- src, which contains examples of the hooks, contexts, components
- lib, the build directory with all recollected types and a target JavaScript file under ./my-awesome-package/lib/cjs

Using Rollup it is easy to create a custom package to share and reuse the code.

The key points why Rollup is used instead of tsc to set up, compile and use a package:
- using third party plugins it is easy to resolve all dependencies in the project
- also it is possible to exclude the peer dependencies or some of the libraries which could be installed and resolved on the side of the frontend application
- it is easier to compile all (SCSS) styles and provide a single CSS file which could be included into the app's style file with `@import "~my-awesome-package";`
- it provides an opportunity to do some other actions (like removing the build directory with all the files which were build before)
- it is easier to recollect and keep all types of the hookes/components/utilities/etc with Rollup
- the package could be built with several different formats like CJS and/or ESM

### How to use

Run the following command in order to build the package:

```bash
yarn build
```

Using [yarn link](https://classic.yarnpkg.com/en/docs/cli/link) it is possible to test the lib locally (without accessing it from the remote repository):
1) run `yarn link` in the packages/my-awesome-package directory, so a symlink to that folder could be added to the global node_modules
2) run `yarn link my-awesome-package` in the packages/react-example to add the package to the app's node_modules

## react-example app

This is an example of a React application which imports components, hooks etc. from my-awesome-package.
Let's assume the package is in a private repository. In that case we could include it into package.json this way:

```json
{
    dependencies: {
        "my-awesome-package": "git+ssh://git@github.com:IT-premium-team/my-awesome-package.git#1.0.0"
    }
}
```

It is better to use package versions in order to track changes properly. So in the example above there is a specific git tag to point to a specific version of the package, which inclues all necessary changes.

In addition to that, we could include the styles exported from my-awesome-package this way:

```css
/* i.e. index.scss */
@import "~my-awesome-package";
```

Also for the components imported from my-awesome-package some stories are added.
Use the following command to run [Storybook](https://storybook.js.org/):

```bash
yarn storybook
```
