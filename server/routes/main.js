const express  = require('express');
const router = express.Router();
const axios = require('axios');

// Routes
router.get('', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/service', (req, res) => {
    res.render('service');
});

router.get('/quote', (req, res) => {
    res.render('quote');
});

// // Handle 404 errors
// router.use((req, res, next) => {
//     res.status(404).render('404');
// });



// router.post('/newsletter', async (req, res) => {
//     const { email } = req.body;

//     // Fake Mailchimp details (replace with actual details)
//     const FAKE_MAILCHIMP_SERVER_PREFIX = 'us1';
//     const FAKE_MAILCHIMP_API_KEY = 'your-fake-api-key';
//     const FAKE_AUDIENCE_ID = 'your-fake-audience-id';

//     // Validate email format
//     if (!isValidEmail(email)) {
//         return res.status(400).send('Invalid email address.');
//     }

//     try {
//         // Fake Mailchimp API endpoint (replace with actual endpoint)
//         const response = await axios.post(
//             `https://${FAKE_MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${FAKE_AUDIENCE_ID}/members`,
//             {
//                 email_address: email,
//                 status: 'subscribed', // 'subscribed' or 'pending'
//             },
//             {
//                 headers: {
//                     Authorization: `Basic ${Buffer.from(`apikey:${FAKE_MAILCHIMP_API_KEY}`).toString('base64')}`,
//                 },
//             }
//         );

//         console.log('Subscriber added to Mailchimp:', response.data);

//         // Render confirmation page
//         res.render('confirmation');
//     } catch (error) {
//         console.error('Error adding subscriber to Mailchimp:', error.response.data);
//         if (error.response && error.response.status === 400) {
//             return res.status(400).send('Bad request. Please check your email address.');
//         } else if (error.response && error.response.status === 401) {
//             return res.status(401).send('Unauthorized. API key may be invalid.');
//         } else {
//             return res.status(500).send('Internal server error. Please try again later.');
//         }
//     }
// });

// function isValidEmail(email) {
//     // Email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }



module.exports = router;