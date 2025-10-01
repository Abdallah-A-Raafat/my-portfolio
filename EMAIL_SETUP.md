# Email Configuration Setup

## Quick Setup (Currently Active)

Your contact form is currently set up to use the `mailto:` method, which opens the user's default email client with your email address pre-filled.

## For Advanced Email Integration (Optional)

If you want emails to be sent directly without opening an email client, follow these steps to set up EmailJS:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (abdallah.araafat@gmail.com)
5. Note down your Service ID

### Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: New Portfolio Contact - {{subject}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Note down your Template ID

### Step 4: Get Public Key

1. Go to "Account" in your dashboard
2. Find your Public Key
3. Copy it

### Step 5: Update Contact Component

Replace the placeholder values in your Contact.jsx file:

- Replace 'YOUR_SERVICE_ID' with your actual Service ID
- Replace 'YOUR_TEMPLATE_ID' with your actual Template ID
- Replace 'YOUR_PUBLIC_KEY' with your actual Public Key

### Step 6: Update the handleSubmit function

Uncomment the EmailJS code and comment out the mailto fallback.

## Current Functionality

- When someone fills out the contact form, it opens their default email client
- The email is pre-addressed to: abdallah.araafat@gmail.com
- All form data is pre-filled in the email body
- User just needs to click "Send" in their email client

This method works immediately without any setup and ensures you receive all messages!
