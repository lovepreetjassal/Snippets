#Encrypt
gpg -o filename.tar.gz.gpg -c fileordirectory

#Decrypt
gpg -d filename.tar.gz.gpg | tar --directory=/path/to/dir -xvzf -
