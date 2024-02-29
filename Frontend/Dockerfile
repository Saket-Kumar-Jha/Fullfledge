#FROM node:alpine

#WORKDIR /app

#COPY . .

#EXPOSE 4200 

#RUN npm install -g @angular/cli

#RUN npm install

#CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli

COPY . .

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
