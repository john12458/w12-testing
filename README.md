
# W12Testing Homework
Question : [Potter Kata](https://ihower.tw/blog/archives/8162

Code Path: apps/bowling/src/app/bookstore.ts
Test Code Path: apps/bowling/src/app/bookstore.spec.ts

Commit History: 
```
commit c42264d725921e662879d80cf359d9192e59bd46 (HEAD -> bookstore)
    All Test OK

commit 872d3067dd00f6fe0ff1560c95046e34e047b085
    [TEST OK] '第一集買 1 本、第二集買 2 本、第三集買 3 本、第四集買 4 本、第五集買 5 本、第六集買 6 本'

commit 519604c4d1942027abcfc69932210ec54617b25d
    [TEST OK] '第一集買 1 本、第二集買 2 本、第三集買 3 本、第四集買 4 本、第五集買 5 本'

commit 687667258d036cc5a72658f897d72a43bae928ce
    [TEST OK] '第一集買 1 本、第二集買 2 本、第三集買 3 本、第四集買 4 本'

commit b73bd6b6cf9b44218ee0d5b6d800f52858e9f37a
    [TEST OK] 第一集買 1 本、第二集買 2 本、第三集買 3 本

commit 4c1e8f0c49977bc6d9481300cf08e70974807fbd
    [TEST OK] 第一集買 1 本、第二集買 2 本

commit ca7dfffd2157b8431b764aa9ba52edb4b9793820
    test sell two book ok

commit 682cd3dada7150fade8dc2f03e602e45eb642124
    add book title

commit 3549a4515f32815a25e3ed2523a8393804cf5fd8
    bookstore sell one book ok

commit df0cc80ac455255af421aa8d7497deff2687f7b5 (origin/master, origin/HEAD, master)
    Merge branch 'master' of github.com:john12458/w12-testing

```




# W12Testing

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@w12-testing/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
