#FROM mongo:3.6.8
FROM mongo:latest
WORKDIR /database
COPY ./database ./
ENV MONGO_INITDB_ROOT_USERNAME=productListUser
ENV MONGO_INITDB_ROOT_PASSWORD=productListPassword
EXPOSE 27017
CMD ["mongod"]