const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Tuition Enquiry",
            html: `
        <h2>New Enquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Mobile:</strong> ${body.mobile}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Course:</strong> ${body.course}</p>

        <p><strong>Education Level:</strong> ${body.level}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: body.email,
            subject: "Thank you for contacting Aura Bridge",
            html: `
    <h2>Thank You for Your Enquiry!</h2>

    <p>Dear ${body.name},</p>

    <p>
      Thank you for contacting <strong>Aura Bridge</strong>.
      We have received your enquiry and appreciate your interest in our tuition programmes.
    </p>

    <p>
      Our team will review your enquiry and get back to you as soon as possible.
    </p>

    <hr>

    <h3>Your Enquiry</h3>

    <p><strong>Course:</strong> ${body.course}</p>

    <p><strong>Education Level:</strong> ${body.level}</p>

    <p><strong>Message:</strong></p>

    <p>${body.message}</p>

    <br>

    <p>Best regards,</p>

    <p><strong>Aura Bridge</strong></p>
  `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Email sent successfully",
            }),
        };
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to send email",
            }),
        };
    }
};