# todo-ts

Todo app backend

## Tech Stack
- NodeJs
- TypeScript
- Express
- MongoDB
- SwaggerUI
- js-yaml
- Docker

## Running in local machine

- clone the repo.
- run ``` npm install ```
- run ``` npm start ```

## Running docker file

- open terminal and download docker image by running  ``` docker pull sujalk/todo-ts:latest ```
- then run ``` docker run -p 4000:4000 15e6ecd42764 ``` . This will run a docker container with the image. The command ``` -p 4000:4000 ``` port forwards the local port[first port] to image port [second port].

-- you can port it to any port but then the swaggerUI server port needs to be changed too in the code.


You could also view the [postman documetation](https://documenter.getpostman.com/view/19384536/2s93z9cNmm)

[DEMO VIDEO](https://drive.google.com/file/d/1arAnveh57BFCKa_wuj5cijuOtKI-I54O/view?usp=sharing)
