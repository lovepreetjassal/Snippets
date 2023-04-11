docker buildx use mybuilder
docker buildx build --platform linux/aarch64 -t name:tag --load . 