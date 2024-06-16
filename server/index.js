const express = require('express');
const bodyParser = require('body-parser');
const soap = require('soap');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors())

const url = 'https://www.get.cbord.com/GETServices/services/authentication?wsdl';

soap.createClient(url, (err, client) => {
  if (err) {
    console.error('Error creating SOAP client:', err);
  } else {
    // Construct the SOAP request
    const args = {
      systemCredentials: {
        // Your system credentials structure here
      },
      userCredentials: {
        password: 'your_password',
        institutionId: 'your_institution_id',
        domain: 'your_domain',
        userName: 'your_username'
      }
    };

    // Call the SOAP method (authenticateUser in this case)
    client.authenticateUser(args, (err, result) => {
      if (err) {
        console.error('Error calling authenticateUser:', err);
      } else {
        console.log('Authentication Result:', result);
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
