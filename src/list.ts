import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider";
import proxy from 'proxy-agent';

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
  httpOptions: { agent: proxy(process.env.HTTP_PROXY) },
  region: process.env.AWS_REGION,
}


 const main = async () => {
  console.log('1')
   const client = new CognitoIdentityProviderClient({});
  const input = {
    "AttributesToGet": [
      "email",
      "sub"
    ],
//    "Filter": "\"email\"^=\"testuser\"",
    "Limit": 3,
    "UserPoolId": "ap-northeast-1_Yt7yLhIuC"
  };
  console.log('2')
  const listUsers = new ListUsersCommand(input);
  console.log('3')
  const response = await client.send(listUsers);
  console.log('4')

  return '5'
};

main()
