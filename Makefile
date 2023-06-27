update:
	git pull
	npm run build
	rm -rf /var/www/html/*
	cp -r ~/swap/dist/* /var/www/html