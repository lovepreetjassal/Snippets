#!/bin/zsh
GIT_COMMIT=$(git rev-parse --short HEAD)
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
DOCKERFILE=$(gum filter)
DOCKER_TAG=$(gum input --placeholder "Enter tag")
docker build -f $DOCKERFILE -t $DOCKER_TAG --label git-commit=$GIT_COMMIT --label git-branch=$GIT_BRANCH .
gum confirm "Push image?" && docker push $DOCKER_TAG unset DOCKERFILE unset DOCKER_TAG