// pages/api/send-email.js


export default async function handler(req, res) {
    if (typeof window === "undefined") {
      // Dynamically import nodemailer only on the server side
      const nodemailer = await import('nodemailer');
    if (req.method === 'POST') {
      const { fullname, email, businessServices, companyName, subject } = req.body;
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'maheshyellasiri204@gmail.com',
        subject: 'New Client',
        text: `Full Name: ${fullname}\nEmail: ${email}\nBusiness Services: ${businessServices}\nCompany Name: ${companyName}\nSubject: ${subject}`,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email', details: error });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    }
  }
  