
#zip folders linux
for i in *; do [ -d "$i" ] && cd "$i" && zip -r "../$i.zip" * && cd ..; done
