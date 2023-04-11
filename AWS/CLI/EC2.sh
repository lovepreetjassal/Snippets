#!/bin/bash
function getInstanceType() {
	docker run --rm -v ~/.aws:/root/.aws -e AWS_PROFILE=profile amazon/aws-cli --region us-east-1 ec2 describe-instances --query "Reservations[*].Instances[*].InstanceType" --filter "Name=instance-id,Values=$1" --output text
}

function getInstanceNameFromID() {
	docker run --rm -v ~/.aws:/root/.aws -e AWS_PROFILE=profile amazon/aws-cli --region us-east-1 ec2 describe-instances --query "Reservations[*].Instances[*].Tags[?Key=='Name'].Value[]" --filter "Name=instance-id,Values=$1" --output text
}

function rebootserverwithInstanceID(){
	if (whiptail --title "Reboot Confirmation" --yesno "Are you sure you want to reboot the server with ID $1?" 8 78); then
		echo "Rebooting $1"
		docker run --rm -i -v ~/.aws:/root/.aws -e AWS_PROFILE=profile amazon/aws-cli --region us-east-1 --no-cli-pager ec2 reboot-instances --instance-ids $1
	else
    		echo "Skipping $1"
	fi
}