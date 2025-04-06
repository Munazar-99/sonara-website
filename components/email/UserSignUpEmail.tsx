import React from 'react';

interface UserSignUpEmailProps {
  name: string;
  businessName?: string;
  email?: string;
}

const UserSignUpEmail = ({
  name = 'there',
  businessName = '',
}: UserSignUpEmailProps) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>You&apos;re on the List! 🎉 Sonara Early Access</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Force white background everywhere */
              body, .body, .container, .content {
                background-color: #ffffff !important;
                color: #1e293b !important;
              }
              
              /* Reset any dark mode overrides */
              [data-ogsc] .body,
              [data-ogsc] .container,
              [data-ogsc] .content,
              [data-ogsb] .body,
              [data-ogsb] .container,
              [data-ogsb] .content {
                background-color: #ffffff !important;
                color: #1e293b !important;
              }
              
              /* Outlook specific fixes */
              .ExternalClass, .ExternalClass div, .ExternalClass font, .ExternalClass p,
              .ExternalClass span, .ExternalClass td {
                line-height: 100%;
              }
              
              /* Mobile responsiveness */
              @media screen and (max-width: 600px) {
                .container {
                  width: 100% !important;
                }
                .content {
                  padding: 30px 20px !important;
                }
              }
            `,
          }}
        />
      </head>
      <body
        style={{
          backgroundColor: '#ffffff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          fontSize: '16px',
          lineHeight: '1.5',
          margin: '0',
          padding: '0',
          WebkitTextSizeAdjust: '100%',
          textSizeAdjust: '100%',
          color: '#1e293b',
        }}
        className="body"
      >
        <table
          cellPadding="0"
          cellSpacing="0"
          border={0}
          width="100%"
          style={{ minWidth: '100%', backgroundColor: '#ffffff' }}
        >
          <tr>
            <td align="center" valign="top" style={{ padding: '40px 0' }}>
              <table
                cellPadding="0"
                cellSpacing="0"
                border={0}
                width="100%"
                style={{
                  maxWidth: '600px',
                  margin: '0 auto',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                className="container"
              >
                {/* Header */}
                <tr>
                  <td
                    style={{
                      padding: '40px 0',
                      backgroundColor: '#eef2ff',
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src="https://lexai-mauve.vercel.app/_next/image?url=%2Fsonara.png&w=384&q=75"
                      alt="Sonara"
                      width="140"
                      height="50"
                      style={{ margin: '0 auto' }}
                    />
                  </td>
                </tr>

                {/* Content */}
                <tr>
                  <td
                    style={{
                      padding: '40px',
                      backgroundColor: '#ffffff',
                      color: '#1e293b',
                    }}
                    className="content"
                  >
                    <h1
                      style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 0 30px',
                        color: '#4A6CF7',
                        textAlign: 'center',
                      }}
                    >
                      You&apos;re on the List! 🎉
                    </h1>

                    <p
                      style={{
                        fontSize: '17px',
                        lineHeight: '28px',
                        margin: '0 0 20px',
                      }}
                    >
                      Hi {name},
                    </p>

                    <p
                      style={{
                        fontSize: '17px',
                        lineHeight: '28px',
                        margin: '0 0 20px',
                      }}
                    >
                      Thank you for signing up for early access to Sonara!
                      We&apos;re excited to help{' '}
                      {businessName ? (
                        <span style={{ color: '#4A6CF7', fontWeight: 'bold' }}>
                          {businessName}
                        </span>
                      ) : (
                        'your business'
                      )}{' '}
                      <span style={{ color: '#4A6CF7', fontWeight: 'bold' }}>
                        never miss a call
                      </span>{' '}
                      and{' '}
                      <span style={{ color: '#4A6CF7', fontWeight: 'bold' }}>
                        never lose a customer
                      </span>
                      .
                    </p>

                    <p
                      style={{
                        fontSize: '17px',
                        lineHeight: '28px',
                        margin: '0 0 20px',
                      }}
                    >
                      Right now, we&apos;re onboarding businesses like yours to
                      streamline call handling with AI-powered automation. A
                      member of our team will reach out soon to discuss how
                      Sonara can fit your needs.
                    </p>

                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      width="100%"
                      style={{
                        backgroundColor: '#f1f5f9',
                        borderRadius: '12px',
                        margin: '25px 0',
                      }}
                    >
                      <tr>
                        <td style={{ padding: '20px 25px' }}>
                          <p
                            style={{
                              fontSize: '16px',
                              lineHeight: '26px',
                              margin: '0 0 10px',
                            }}
                          >
                            Sonara helps you:
                          </p>
                          <ul style={{ margin: '0', paddingLeft: '25px' }}>
                            <li style={{ margin: '8px 0' }}>
                              Answer calls 24/7 with our AI receptionist
                            </li>
                            <li style={{ margin: '8px 0' }}>
                              Qualify real opportunities automatically
                            </li>
                            <li style={{ margin: '8px 0' }}>
                              Book appointments directly in your calendar
                            </li>
                            <li style={{ margin: '8px 0' }}>
                              Focus on high-value tasks while we handle the rest
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>

                    <p
                      style={{
                        fontSize: '17px',
                        lineHeight: '28px',
                        margin: '25px 0 20px',
                      }}
                    >
                      If you have any immediate questions or specific
                      requirements, feel free to email us at{' '}
                      <a
                        href="mailto:hello@sonara.app"
                        style={{ color: '#4A6CF7', textDecoration: 'none' }}
                      >
                        hello@sonara.app
                      </a>
                      —we&apos;d love to hear from you!
                    </p>

                    <p
                      style={{
                        fontSize: '17px',
                        lineHeight: '28px',
                        margin: '0 0 10px',
                      }}
                    >
                      Stay tuned, and we&apos;ll be in touch shortly.
                    </p>

                    <div style={{ marginTop: '30px' }}>
                      <p
                        style={{
                          fontSize: '17px',
                          lineHeight: '24px',
                          margin: '0 0 5px',
                        }}
                      >
                        Best,
                      </p>
                      <p
                        style={{
                          fontSize: '17px',
                          lineHeight: '24px',
                          margin: '0 0 5px',
                          fontWeight: 'bold',
                        }}
                      >
                        Munazar
                      </p>
                      <p
                        style={{
                          fontSize: '17px',
                          lineHeight: '24px',
                          margin: '0',
                        }}
                      >
                        Founder, Sonara
                      </p>
                    </div>

                    <hr
                      style={{
                        border: 'none',
                        height: '1px',
                        backgroundColor: '#e0e7ff',
                        margin: '30px 0',
                      }}
                    />

                    <p
                      style={{
                        fontSize: '14px',
                        margin: '0',
                        textAlign: 'center',
                        color: '#64748b',
                      }}
                    >
                      This is an automated message from Sonara.
                    </p>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td
                    style={{
                      backgroundColor: '#f8fafc',
                      padding: '25px',
                      textAlign: 'center',
                      color: '#64748b',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '13px',
                        margin: '0 0 10px',
                        color: '#64748b',
                      }}
                    >
                      © {new Date().getFullYear()} Sonara. All rights reserved.
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        margin: '0',
                        color: '#64748b',
                      }}
                    >
                      <a
                        href="https://sonara.app/privacy"
                        style={{
                          color: '#4A6CF7',
                          textDecoration: 'none',
                          margin: '0 10px',
                        }}
                      >
                        Privacy Policy
                      </a>{' '}
                      |{' '}
                      <a
                        href="https://sonara.app/terms"
                        style={{
                          color: '#4A6CF7',
                          textDecoration: 'none',
                          margin: '0 10px',
                        }}
                      >
                        Terms of Service
                      </a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

export default UserSignUpEmail;
