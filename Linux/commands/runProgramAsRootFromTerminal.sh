#Run program as root fedora
if [ $XDG_SESSION_TYPE = "wayland" ]; then
    xhost +si:localuser:root
fi