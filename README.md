# panther-messenger

### Steps

1. First of all run
```
$ npm install
```

2. Create an environment file named .env and then copy the content from .env.dev and paste into .env (change the values)

3. Run docker compose
```
$ docker-compose up
```

4. Run the project
```
$ npm start
```

5. Create a producer (Optional)
```
$ kafka-console-producer --broker-list localhost:9093 --topic new-message
```

6. Create a consumer (Optional)
```
$ kafka-console-consumer --bootstrap-server localhost:9092 --topic new-message --from-beginning
```

7. Import the postman collection file (Panther.postman_collection.json) and you can run the requests


### Issues

1. Unfortunately I was facing some issues to connect to kafka on the api running on docker compose and I didn't have time to try to fix it :(

That's it!