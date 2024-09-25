import { mailtrapClient, sender } from "./mailtrap.config.js"
import  {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, Welcome_Email_Template} from "./emailTemplates.js"

export const sendVerificationEmail = async (email, verificationToken)=>{
 
  try {
    const response = await mailtrapClient.sendMail({
        from: sender,
        to: email,
        subject : "Verify your Email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        text:"Email Verification"
    })

    console.log ("Email Sent Successfully",response)
  } catch (error) {
    console.log(`Error Sending verification email:`,error)
    throw new Error(`Error Sending verification email:${error}`)
  }

}

export const sendWelcomeEmail = async (email,name) =>{


  try {
    const response = await mailtrapClient.sendMail({
      from : sender,
      to :email,
      subject : "Welcome",
      html: Welcome_Email_Template.replace("{name}", name),
      text:"Welcome Email"
    

    })
    console.log("Welcome email sent successfully", response)

  } catch (error) {
    console.log(" Error sending Welcome Email", error)
    throw new Error(`Error sending welcome email: ${error}`)
  }

}

export const sendPasswordResetEmail = async (email,resetURL)=>{


 try {
  const  response = await mailtrapClient.sendMail({
    from: sender,
    to:email,
    subject:"Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
    category: "Password Reset"
  })
 } catch (error) {
   console.error("Error Sending Password reset email",error)

   throw new Error(`Error sending password reset email:${error}`)
 }
}

export const sendResetSuccessEmail = async (email) =>{


  try {
    const response = await mailtrapClient.sendMail({
      from :sender,
      to: email,
      subject: "Password Reset successful",
      html:PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset"
    });

    console.log("Password Reset Email Sent Successfully", response)
  } catch (error) {
     console.error("Error Sending password reset success email", error)

     throw new Error(`Error sending password reset success email : ${error}`)
  }
}