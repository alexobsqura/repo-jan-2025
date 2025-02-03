FROM node:latest
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# dev environment
CMD ["npm", "start"]

# production environment
# FROM nginx:latest
# COPY --from=build /app/build /usr/share/nginx/html
# # EXPOSE 8081
# CMD ["nginx", "-g", "daemon off;"]