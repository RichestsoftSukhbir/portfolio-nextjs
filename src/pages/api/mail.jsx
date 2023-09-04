import nodemailer from 'nodemailer';

const cred = {
  email: process.env.NEXT_PUBLIC_NM_EMAIL,
  pass: process.env.NEXT_PUBLIC_NM_PASSWORD
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: cred.email,
    pass: cred.pass
  }
});


const handler = async (req, res) => {
  if(req.method === 'POST') {
    const data = req.body;
    if(!data.name || !data.email || !data.subject || !data.message) {
      res.status(400).json({message: 'Bad request'});
    }
    
    try {
      await transporter.sendMail({
        from: data.email,
        to: cred.email,
        subject: data.subject,
        text: data.message,
        html: `name: ${data.name} <br/> email: ${data.email} <br/> subject: ${data.subject} <br/> message: ${data.message}`
      });

      return res.status(200).json({success: true});
    } catch (error) {
      console.log(error);
      res.status(400).json({message: error.message});
    }
  }


  res.status(400).json({message: 'Bad request'});
}

export default handler;