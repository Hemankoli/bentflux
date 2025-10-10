function generateEmailTemplate({ name, message }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome Email</title>
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background-color: #f8f9fc;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        background-color: #ffffff;
        max-width: 600px;
        margin: 40px auto;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
      }
      .header {
        text-align: center;
        border-bottom: 3px solid #ec4899;
        padding-bottom: 15px;
      }
      .header h1 {
        color: #111827;
        font-size: 24px;
      }
      .highlight {
        color: #ec4899;
      }
      .content {
        margin-top: 20px;
        line-height: 1.6;
        color: #374151;
      }
      .content p {
        font-size: 16px;
      }
      .button {
        display: inline-block;
        margin-top: 25px;
        padding: 12px 30px;
        background-color: #ec4899;
        color: #fff !important;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }
      .button:hover {
        background-color: #db2777;
      }
      .footer {
        text-align: center;
        font-size: 13px;
        color: #9ca3af;
        margin-top: 40px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to <span class="highlight">MyApp</span> 🚀</h1>
      </div>
      <div class="content">
        <p>Hi <strong>${name}</strong>,</p>
        <p>${message}</p>
        <p>We’re thrilled to have you onboard! You can explore your dashboard and get started right away.</p>
        <a href="https://yourwebsite.com/dashboard" class="button">Go to Dashboard</a>
      </div>
      <div class="footer">
        <p>© ${new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}

module.exports = generateEmailTemplate;
