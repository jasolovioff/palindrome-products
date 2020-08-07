solution-up:
	docker-compose up

database-up:
	(cd products-db && make database-docker-up )

solution-reset:
	docker-compose restart

solution-down:
	docker-compose down
