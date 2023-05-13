#Get folder size in MiB
du -m foldernamehere

#Create image in MiB
dd if=/dev/zero of=image.img bs=1MiB count=1

#Create filesystem in image
mkfs.exfat image.img

#mount image
sudo mount image.img mountdirectory 

#Copy files

#unmount image
sudo umount mountdirectory