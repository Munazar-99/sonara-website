import AdminNotificationEmail from '@/components/email/AdminNotificationEmail';
import UserSignUpEmail from '@/components/email/UserSignUpEmail';
import { resend } from '@/lib/resend';

export const sendSignUpEmail = async (
  email: string,
  name: string,
  businessName = '',
) => {
  const { error } = await resend.emails.send({
    from: 'support@munazar-ali.dev',
    to: [email],
    subject: 'Welcome to Sonara Early Access',
    react: UserSignUpEmail({
      name,
      businessName,
    }),
  });

  if (error) {
    console.error({ error });
    return {
      success: false,
      message: `Failed to send email: ${error.message}`,
    };
  }

  return {
    success: true,
    message: `An email has been sent to ${email}.`,
  };
};

export const sendAdminNotificationEmail = async (
  userName: string,
  userEmail: string,
  businessName = '',
  totalSignups?: number,
) => {
  const adminEmail = process.env.ADMIN_EMAIL || 'info@sonara.ie';

  const { error } = await resend.emails.send({
    from: 'support@munazar-ali.dev',
    to: [adminEmail],
    subject: `New Early Access Signup: ${userName}${businessName ? ` (${businessName})` : ''}`,
    react: AdminNotificationEmail({
      userName,
      userEmail,
      businessName,
      signupDate: new Date().toLocaleString(),
      totalSignups,
    }),
  });

  if (error) {
    console.error({ error });
    return {
      success: false,
      message: `Failed to send admin notification: ${error.message}`,
    };
  }

  return {
    success: true,
    message: `Admin notification sent successfully.`,
  };
};
