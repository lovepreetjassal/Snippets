# Sync Repos in current Dir
for dir in * ; do cd $dir && git pull && git push && cd .. ; done
