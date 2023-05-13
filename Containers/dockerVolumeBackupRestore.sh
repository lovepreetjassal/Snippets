#To backup
docker run --rm --volumes-from httpd -v "$(pwd)/backup/:/backup/" ubuntu tar cvf /backup/test.tar -C /usr/local/apache2/htdocs/ .

#To restore
docker run --rm --volumes-from httpd -v $(pwd)/backup/:/backup ubuntu bash -c "cd /usr/local/apache2/htdocs && tar xvf /backup/test.tar --strip 1"
