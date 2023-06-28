update:
	git pull
	rm -rf /var/www/html/*
	cp -r ~/swap/dist/* /var/www/html