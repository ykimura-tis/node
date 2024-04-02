#!/bin/bash

AWS_PROFILE='user-switch-role'
export AWS_REGION='ap-northeast-1'

# クレデンシャルを取得して、環境変数にセットする
AWS_STS_CREDENTIALS=`aws sts assume-role \
  --profile ${AWS_PROFILE} \
  --role-arn $(aws configure get ${AWS_PROFILE}.role_arn) \
  --role-session-name "tool-session-name" \
  `; \
export AWS_ACCESS_KEY_ID=`echo "${AWS_STS_CREDENTIALS}" | jq -r '.Credentials.AccessKeyId'`; \
export AWS_SECRET_ACCESS_KEY=`echo "${AWS_STS_CREDENTIALS}" | jq -r '.Credentials.SecretAccessKey'`; \
export AWS_SESSION_TOKEN=`echo "${AWS_STS_CREDENTIALS}" | jq -r '.Credentials.SessionToken'`

export AWS_SDK_LOAD_CONFIG='true'
