import React from 'react';

interface AdminNotificationEmailProps {
  userName: string;
  userEmail: string;
  businessName?: string;
  signupDate: string;
  totalSignups?: number;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://sonara.app';

const AdminNotificationEmail = ({
  userName = 'New User',
  userEmail = 'user@example.com',
  businessName = '',
  signupDate = new Date().toLocaleString(),
  totalSignups = 1,
}: AdminNotificationEmailProps) => {
  return (
    <html>
      <head>
        <title>New Early Access Signup - Sonara</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content="light dark" name="color-scheme" />
        <meta content="light dark" name="supported-color-schemes" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
          }
          @media (prefers-color-scheme: dark) {
            .logo-light { display: none !important; }
            .logo-dark { display: block !important; }
            .body { background-color: #1e1b4b !important; }
            .container { background-color: #312e81 !important; }
            .content { color: #e0e7ff !important; }
            .footer { background-color: #1e1b4b !important; color: #c7d2fe !important; }
            .highlight { color: #818cf8 !important; }
            .button { background-color: #4A6CF7 !important; color: #ffffff !important; }
            .divider { border-color: #4338ca !important; }
            .user-info { background-color: #3730a3 !important; border-color: #4338ca !important; }
            .stat-box { background-color: #3730a3 !important; }
          }
          @media screen and (max-width: 600px) {
            .container { width: 100% !important; }
            .stat-container { display: block !important; }
            .stat-box { width: 100% !important; margin: 0 0 10px 0 !important; }
          }
        `,
          }}
        />
      </head>
      <body
        className="body"
        style={{
          backgroundColor: '#eef2ff',
          margin: '0',
          padding: '0',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          className="preview"
          style={{ display: 'none', maxHeight: '0px', overflow: 'hidden' }}
        >
          New Early Access Signup: {userName} ({userEmail})
        </div>
        <div
          className="container"
          style={{
            maxWidth: '600px',
            margin: '40px auto',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              backgroundColor: '#312e81',
              padding: '30px 0',
              textAlign: 'center',
            }}
          >
            <img
              src={`${baseUrl}/images/logo-light.png`}
              width="120"
              height="40"
              alt="Sonara"
              className="logo-light"
              style={{ margin: '0 auto' }}
            />
            <img
              src={`${baseUrl}/images/logo-dark.png`}
              width="120"
              height="40"
              alt="Sonara"
              className="logo-dark"
              style={{ margin: '0 auto', display: 'none' }}
            />
            <h1
              style={{
                fontSize: '18px',
                fontWeight: 'normal',
                margin: '15px 0 0',
                color: '#ffffff',
              }}
            >
              Admin Notification
            </h1>
          </div>
          <div
            className="content"
            style={{
              padding: '40px',
              backgroundColor: '#ffffff',
              color: '#333333',
            }}
          >
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                margin: '0 0 20px',
                color: '#4A6CF7',
              }}
            >
              New Early Access Signup
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '26px',
                margin: '0 0 20px',
              }}
            >
              A new user has signed up for early access to Sonara.
            </p>

            <div
              className="user-info"
              style={{
                padding: '20px',
                backgroundColor: '#f6f9fc',
                borderRadius: '8px',
                border: '1px solid #e0e7ff',
                margin: '20px 0',
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '26px',
                  margin: '0 0 10px',
                  fontWeight: 'bold',
                }}
              >
                User Details:
              </p>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  margin: '0 0 5px',
                }}
              >
                <strong>Name:</strong> {userName}
              </p>
              {businessName && (
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '24px',
                    margin: '0 0 5px',
                  }}
                >
                  <strong>Business:</strong> {businessName}
                </p>
              )}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '24px',
                  margin: '0 0 5px',
                }}
              >
                <strong>Email:</strong> {userEmail}
              </p>
              <p style={{ fontSize: '15px', lineHeight: '24px', margin: '0' }}>
                <strong>Signup Date:</strong> {signupDate}
              </p>
            </div>

            <div
              style={{ margin: '30px 0', textAlign: 'center' }}
              className="stat-container"
            >
              <div
                style={{
                  display: 'inline-block',
                  width: '48%',
                  padding: '15px 0',
                  backgroundColor: '#eef2ff',
                  borderRadius: '8px',
                  margin: '0 1%',
                }}
                className="stat-box"
              >
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4338ca',
                    margin: '0 0 5px',
                    fontWeight: 'bold',
                  }}
                >
                  TOTAL SIGNUPS
                </p>
                <p
                  style={{
                    fontSize: '24px',
                    color: '#4A6CF7',
                    margin: '0',
                    fontWeight: 'bold',
                  }}
                >
                  {totalSignups}
                </p>
              </div>
              <div
                style={{
                  display: 'inline-block',
                  width: '48%',
                  padding: '15px 0',
                  backgroundColor: '#eef2ff',
                  borderRadius: '8px',
                  margin: '0 1%',
                }}
                className="stat-box"
              >
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4338ca',
                    margin: '0 0 5px',
                    fontWeight: 'bold',
                  }}
                >
                  TODAY
                </p>
                <p
                  style={{
                    fontSize: '24px',
                    color: '#4A6CF7',
                    margin: '0',
                    fontWeight: 'bold',
                  }}
                >
                  +1
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', margin: '30px 0' }}>
              <a
                className="button"
                href={`${baseUrl}/admin/dashboard`}
                style={{
                  backgroundColor: '#312e81',
                  color: '#ffffff',
                  padding: '12px 30px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                View Admin Dashboard
              </a>
            </div>

            <hr
              className="divider"
              style={{
                borderColor: '#e0e7ff',
                borderWidth: '1px',
                margin: '30px 0',
              }}
            />

            <p
              style={{
                fontSize: '14px',
                color: '#666666',
                margin: '0',
                textAlign: 'center',
              }}
            >
              This is an automated notification from the Sonara platform.
            </p>
          </div>
          <div
            className="footer"
            style={{
              backgroundColor: '#f6f9fc',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '12px', color: '#666666', margin: '0' }}>
              © {new Date().getFullYear()} Sonara. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AdminNotificationEmail;
