FROM node:latest

WORKDIR /home/app
USER node
ENV PORT 8000

EXPOSE 8000

ENTRYPOINT /bin/bash

