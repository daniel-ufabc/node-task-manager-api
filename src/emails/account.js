const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'danielmmartin@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcom to the Task App, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'danielmmartin@gmail.com',
        subject: 'Cancelation of your account on the Task App',
        text: `Goodbye, ${name}. We hope to see you back soon to manage your tasks with us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}