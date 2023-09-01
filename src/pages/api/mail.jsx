import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Initialize a nodemailer transporter with Gmail credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'sukhbir.richestsoft@gmail.com',
        pass: 'SUKHASTIK',
      },
    });

    // Create an email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: subject,
      text: `${name} and ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Email sending failed', error });
    }
  } else {
    res.status(405).end();
  }
}