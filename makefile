#!/bin/bash


start:
	node_modules/.bin/next

deploy:
	now deploy --target production
	cd redirect && now deploy --target production