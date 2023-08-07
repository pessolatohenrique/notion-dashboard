FROM node:14-alpine
#USER nodeuser
WORKDIR /app
COPY . .
# PORT to container
ARG PORT_APP=3030
# PORT to application
ENV PORT=${PORT_APP}
EXPOSE ${PORT_APP}
RUN npm install --ignore-scripts
ENTRYPOINT npm start