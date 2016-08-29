#!/bin/bash
APP_NAME=foodbook

pm2 describe ${APP_NAME} > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
	pm2 start --name ${APP_NAME} $1
else
	pm2 restart ${APP_NAME}
fi;
