From the root of the uikit directory, build container (only build once, unless you modify Dockerfile):
```
docker build -t uikit .
```

From the root of the uikit directory, run the service:
```
docker-compose run --rm --service-ports uikit_dev_env
```

In the container shell, execute the following command to run the Node server (if you prefer, use npm):
```
yarn start
```

To test the server, visit http://localhost:8080/ in your local browser.

Keep in mind this repo is for DEMO purpose only. It illustrates the tutorial available from the bottom links of this readme.md. This DEMO already provides a package.json file that was generated in a way described [here](https://auth0.com/blog/use-docker-to-create-a-node-development-environment/#L-a-class--toc-target--id--installing-dependencies-and-running-the-server----a-Installing-Dependencies-and-Running-the-Server).

Whenever you want to use this container for personal purpose, you'd better read the tutorial before cloning this repo to a new directory labelled after your project's name and start editing Docker files regarding your needs, build a fresh container.

Reference links for better explaination and further information:
* [Use Docker to create a node development environment](https://auth0.com/blog/use-docker-to-create-a-node-development-environment)
* Backuped version of above tutorial: [Utiliser Docker pour créer un environnement de développement Node JS](http://devfrontend.info/dockernodejs-utiliser-docker-pour-creer-un-environnement-de-developpement-nodejs/)

