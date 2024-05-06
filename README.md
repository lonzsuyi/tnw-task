# Transport Task

## About this project
This project uses Mono Repo (Nx.js) to build the storage repository. It uses NextJs (18) as the main website framework. Tailwind is combined with desgin token to achieve rapid development of responsive style, and Storybook is also used as a UI component to display interaction and reuse.

## How it looks
Screenshots are attached, the demo looks like:

![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/output-image1.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/output-image2.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/output-image3.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/output-image4.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/output-image5.png)
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/output-image6.png)


## Development Environment
```
NodeJs 20.0.0 +
```
 Currently contains an app project (NextJs), a lib repository (Storybook)
- `apps/info/` NextJs
- `libs/info-components` Storybook

## How to test
#### 1） Go to the current root directory
`$ cd tnw-task`
#### 2） Build with docker 
Run 
`$ docker build -t tnw-task .`
in your terminal
Output should look like:

![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/dev-image1.png)


#### 3）Dev demo
After the installation is complete, run 

`$ docker run  -p 3000:3000 -p 4401:4401 tnw-task`


Output should look like:

![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/dev-image2.png)

We can then go to http://localhost:3000/ to check dev env demo.

This is equivalent with running `$ npx nx dev info` in the docker.


#### 4）Storybook Components Lib 
Find the container sha with 
`$ docker ps`

![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/component-image1.png)
Here it is `496c6219e834`, then we log into the container with
`$ docker exec -it 496c6219e834 bash`
Remember to replace the container sha, then run 
`$ npx nx storybook info-components`
inside the container. Output is like

![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/component-image2.png)

Then we can go to http://localhost:4401/
![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/component-image3.png)



#### 5）E2E Test
Similarly as 4), log into the container and run command:
`$ npx nx open-cypress info-e2e`

We can see cypress tests are successful at:

![ScreenShot](https://raw.github.com/lonzsuyi/tnw-task/main/screenshots/cypress-image1.png)

 
 