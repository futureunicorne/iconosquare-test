# Welcome to IconoSquare Test!

This is documentation about the **IconoSquare Test application** .

## Technical stack

- Next Js https://nextjs.org/docs/getting-started
- React hook Form https://react-hook-form.com/
- Tailwind https://tailwindcss.com/docs
- Eslint https://eslint.org/
- Prettier https://prettier.io/
- Husky https://github.com/typicode/husky

## Build and start app

**STANDARD**:

    yarn run build
    yarn run start

**EXPORT**:
If you want an exported build of this app, you can do:

    yarn run export

> **Note:** Export is not working on this project cause of **getServersideProps**.

## Environment variable

Add an .env file in your local repository, to work

## Link : ESLint, Prettier, Husky

**ESLINT :**

To configure eslint, you need to edit `.eslintrc.js` and to check lint:

    yarn run lint

**PRETTIER :**

Prettier is a code formatter, if you want to configure prettier, you need to edit `.prettierrc.js` and to check prettier:

    yarn run prettier

To configure typescript you need to edit `tsconfig.js` and to check type in your code:

    yarn run typing

**GLOBAL:**

To check Types, Prettier and Eslint, you can do:

    yarn run all-check

To fix all:

    yarn run fix

**HUSKY:**

To configure husky, you need to update `./husky/.pre-commit` :
