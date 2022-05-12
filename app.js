// Require the Bolt package (github.com/slackapi/bolt)
const { App, subtype } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});



app.event('message', async ({client, message}) => {
  try {
    console.log(message)
    if (message.text.includes("test")){
          const messageId = message.ts
          const channelId = message.channel
          
          try {
              // Call the chat.delete method using the WebClient
              const result = await client.chat.delete({
                channel: channelId,
                ts: messageId
              });

              console.log(result);
            }
            catch (error) {
              console.error(error);
            }
    }
  }
  catch (error) {
    console.error(error);
  }
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
