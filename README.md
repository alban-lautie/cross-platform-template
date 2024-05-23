# Template crossplatform mono-repos (web & mobile)

Monorepos to create cross-platform applications both on the web and mobile with a shared design system in react native.
Uses [react-native-web](https://necolas.github.io/react-native-web/) to transpile react native code to the web.

## Started with turborepo react-native starter

This is an official starter Turborepo.

### What's inside?

This Turborepo includes the following packages/apps:

#### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/eslint`: `eslint.config.js` used throughout the monorepo
- `@repo/prettier`: `eslint.config.js` used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
- [Eslint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io/) for code testing
- [Husky](https://typicode.github.io/husky/) for git hooks
- [Changeset](https://github.com/changesets/changesets) for generate changelog and manage npm version
- [Commitlint](https://commitlint.js.org/) for commit linting
- [Storybook](https://storybook.js.org/) for `@repo/ui` documentation
