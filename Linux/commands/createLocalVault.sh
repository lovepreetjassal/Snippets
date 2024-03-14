#Create Local Vault
filename=$(gum input --placeholder "Enter Vault Filename")
size=$(gum input --placeholder "Enter Vault Size in MB")

dd if=/dev/urandom of=$filename.img bs=1M count=$size

gum style --foreground "#04B575" "Creating luks on file..."
sudo cryptsetup --verify-passphrase luksFormat $filename.img

gum style --foreground "#04B575" "Opening luks on file..."
sudo cryptsetup open --type luks $filename.img $filename

gum style --foreground "#04B575" "Creating ext4 filesystem..."
sudo mkfs.ext4 -L $filename /dev/mapper/$filename