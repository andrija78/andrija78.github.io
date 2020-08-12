const util = require('util'); //for debugging only
const AWS = require('aws-sdk');

const graphqlQuery = `
query GetMatch { getMatch(matchId:22){matchData, playerId}}
`;


const playEvent = /* GraphQL */ `
  mutation PlayEvent($input: PlayEventInput!) {
    playEvent(input: $input) {
      matchId
      success
      playerId
      eventType
      inputData
      eventData
      matchData
    }
  }
`;

const gql = require('graphql-tag');
const AWSAppSyncClient = require('aws-appsync').default;
require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = process.env.API_TRESETAGQL_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;

AWS.config.update({
  region,
  credentials: new AWS.Credentials(
    process.env.AWS_ACCESS_KEY_ID,
    process.env.AWS_SECRET_ACCESS_KEY,
    process.env.AWS_SESSION_TOKEN
  ),
});
const credentials = AWS.config.credentials;

const appsyncClient = new AWSAppSyncClient(
  {
    url,
    region,
    auth: {
      type: 'AWS_IAM',
      credentials,
    },
    disableOffline: true,
  },
  {
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  }
);

const mutation = gql(playEvent);

async function runMutation(matchId, playerId, card) {


    try {
    const client = await appsyncClient.hydrated();
    const data = await client.mutate(
        { 
            mutation: mutation, 
            variables: {
                input:{
                    matchId:matchId, 
                    playerId:playerId,
                    eventType:"playCard", 
                    eventData: JSON.stringify(
                        {
                            card:{
                                    suite:card.suite, 
                                    value:card.value
                            }, 
                            tucem:false, 
                            striso:false, 
                            sOvimDosta: false}
                    )
                }
            } 
        }
    );
    console.log('Call succeded');
    console.log(util.inspect(data, false, null, false /* enable colors */));
    return { success: 'get call succeeded!', data: data};
  } catch (error) {
    console.log(error);
    return { failed: 'get call failed!', error: error};
  }

}

module.exports = {
    runMutation:runMutation
};