docker run -it --env-file=/home/$USER/.aws/env -p 9000:8080 lambdaimage
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"payload":"hello world!"}'