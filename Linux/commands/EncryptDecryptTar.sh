#Encrypt and Archive
tar -cvzf - folder | gpg -c > folder.tar.gz.gpg
# PS instead of - we can use /dev/stdout as - is more of implementation by each program
# more info here
# https://unix.stackexchange.com/questions/16357/usage-of-dash-in-place-of-a-filename 

#Decrypt and unarchive
gpg -d testdir.tar.gz.pgp | tar -xvzf -  
