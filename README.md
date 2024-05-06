# Transport Task

## About this project
This project uses Mono Repo (Nx.js) to build the storage repository. It uses NextJs (18) as the main website framework. Tailwind is combined with desgin token to achieve rapid development of responsive style, and Storybook is also used as a UI component to display interaction and reuse.

## How it looks
Screenshots are attached, the design looks like:
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/image1.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/image2.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/image3.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/image4.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/image5.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/image6.png)


## Development Environment
```
NodeJs 20.0.0 +
```
 Currently contains an app project (NextJs), a lib repository (Storybook)
- `apps/info/` NextJs
- `libs/info-components` Storybook

## How to start
#### 1） Go to the current root directory
`$ cd transport-task`
#### 2） Install dependent library
`$ npm install`
#### 3） After the installation is complete, run the following commands individually
- Info WebSite Dev CLI: `$ npx nx dev info`
- Info WebSite Components Lib CLI: `$ npx nx storybook info-components`
- Info WebSite E2E Test: `$ npx nx open-e2e info-e2e` 



