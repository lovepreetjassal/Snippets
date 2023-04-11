# Login to ECR
docker run --rm -it -v "$(pwd)/aws:/root/.aws" -e AWS_PROFILE=$(AWS_PROFILE) amazon/aws-cli --region us-east-1 --no-cli-pager ecr get-login-password | docker login --username AWS --password-stdin $(AWSCCOUNTID).dkr.ecr.us-east-1.amazonaws.com

# Create image repo for the project
docker run --rm -it -v "$(pwd)/aws:/root/.aws" -e AWS_PROFILE=$(AWS_PROFILE) amazon/aws-cli --region us-east-1 --no-cli-pager ecr create-repository --repository-name hello-world --image-scanning-configuration scanOnPush=true --image-tag-mutability MUTABLE

#build image
docker build -t hello-world-lambda .

#Push image
docker tag hello-world-lambda:latest $(AWSCCOUNTID).dkr.ecr.us-east-1.amazonaws.com/hello-world:latest && docker push $(AWSCCOUNTID).dkr.ecr.us-east-1.amazonaws.com/hello-world:latest