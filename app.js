require('dotenv').config(); // Load environment variables from .env file
const express  = require('express');
const bodyParser = require('body-parser');
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

const PORT = 5000 || process.env.PORT;



// Set EJS as the view engine
app.set('view engine', 'ejs');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Website route controls
app.use('/', require('./routes/index'));


// Initialize Mailchimp client
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const dc = process.env.MAILCHIMP_DC;


mailchimp.setConfig({
  apiKey: mailchimpApiKey,
  server: dc,
});

// Handle Newsletter Signup Form Submission
app.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;


    // Add subscriber to Mailchimp audience
    const response = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
    });

    // res.send('Subscription successful!');
    res.render('index', { newsletterError: 'Error message for newsletter form' });

  } catch (error) {
    // console.error('Error subscribing to newsletter:', error);
    // res.status(500).send('Error subscribing to newsletter');
    res.render('index', { newsletterSuccess: 'Success message for newsletter form' });
  }
});

// Handle Request Quote Form Submission
app.post('/submitQuote', (req, res) => {
    const gname = req.body.gname;
    const gmail = req.body.gmail; 
    const cname = req.body.cname;
    const message = req.body.message;

    // Process the form data as needed

    res.send('Form submitted successfully');
});

// Handle Contact Form Submission
app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;


  console.log(name, subject);

});



// const subscribingUser = {
//   firstName: "Prudence",
//   lastName: "McVankab",
//   email: "prudence.mcvankab@example.com"
// };
// const addList = async () => {
//   const response = await mailchimp.lists.addListMember(audienceId, {
//     email_address: email,
//     status: "subscribed",
//     merge_fields: {
//       FNAME: subscribingUser.firstName,
//       LNAME: subscribingUser.lastName
//     }
//   });
//   console.log(response);
// };

// addList();



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})


