export const html = ({
  url,
  host,
  isExistingUser,
}: {
  url: string
  host: string
  isExistingUser: boolean
}): string => {
  const email = new URL(url).searchParams.get('email')?.replace(/\./g, '&#8203;.')
  const escapedHost = host.replace(/\./g, '&#8203;.')

  const terms =
    process.env.NODE_ENV !== 'production'
      ? `http://${escapedHost}/legal/term`
      : `https://${escapedHost}/legal/term` || `https://${process.env.VERCEL_URL}/legal/term`

  const policy =
    process.env.NODE_ENV !== 'production'
      ? `http://${escapedHost}/legal/policy`
      : `https://${escapedHost}/legal/policy` || `https://${process.env.VERCEL_URL}/legal/policy`

  const imgSrc =
    process.env.NODE_ENV !== 'production'
      ? `http://${escapedHost}/image/logo-chuck.svg`
      : `https://${escapedHost}/image/logo-chuck.svg` ||
        `https://${process.env.VERCEL_URL}/image/logo-chuck.svg`

  const logInOrSignUp = isExistingUser ? 'log in' : 'sign up'

  const emailContent = isExistingUser
    ? 'We have received a login attempt. To complete the login process, please click on the button below.'
    : 'Thank you for joining us, we have received a signup attempt. <br /> To complete the signup process, please click on the button below.'

  return `
<!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <title style="text-transform: capitalize">
      ${logInOrSignUp} verification email
    </title>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
  </head>
  <body style="margin-top: 115px; padding: 0">
    <table
      role="presentation"
      style="
        width: 100%;
        border-collapse: collapse;
        border: 0;
        border-spacing: 0;
        background: #ffffff;
      "
    >
      <tr>
        <td align="center" style="padding: 0">
          <table
            role="presentation"
            style="
              max-width: 620px;
              border: 1px solid #666666;
              border-radius: 6px;
            "
          >
            <tr>
              <td align="center" style="padding: 60px 72px 48px 72px">
                <img src="${imgSrc}" alt="ChuckRoo" width="236" />
              </td>
            </tr>
            <tr>
              <td style="padding: 0px 72px 24px 72px">
                <table
                  role="presentation"
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                  "
                >
                  <tr>
                    <td>
                      <h1
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 700;
                          font-size: 24px;
                          line-height: 32px;
                          text-align: center;
                          color: #131313;
                          margin: 0 0 48px 0;
                        "
                      >
                        Verify your email to ${logInOrSignUp} for Chuckroo
                      </h1>
                      <p
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 400;
                          font-size: 14px;
                          line-height: 22px;
                          color: #131313;
                          margin: 0 0 12px 0;
                        "
                      >
                        Hello
                        <span
                          style="
                            font-family: Inter, sans-serif;
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 22px;
                            color: #0a0b0d;
                            margin: 0 0 12px 0;
                          "
                          >${email}</span
                        >,
                      </p>
                      <p
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 400;
                          font-size: 14px;
                          line-height: 22px;
                          color: #131313;
                          margin: 0 0 28px 0;
                        "
                      >
                        ${emailContent}
                      </p>
                      <p
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 400;
                          font-size: 14px;
                          line-height: 22px;
                          color: #131313;
                          margin: 0;
                        "
                      >
                        Please note that by completing your ${logInOrSignUp} you
                        are agreeing to our
                        <br />
                        <a href="${terms}" style="color: #0070f3"
                          >Terms of Service</a
                        >
                        and
                        <a href="${policy}" style="color: #0070f3"
                          >Privacy Policy</a
                        >
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <a
                        href="${url}"
                        target="_blank"
                        style="
                          display: block;
                          font-family: Inter, sans-serif;
                          font-weight: 500;
                          font-size: 18px;
                          line-height: 26px;
                          margin: 48px 0 48px 0;
                          width: 160px;
                          text-decoration: none;
                          text-align: center;
                          padding: 12px;
                          color: #ffffff;
                          background-color: #131313;
                          border-radius: 4px;
                          text-transform: capitalize;
                        "
                        >${logInOrSignUp}</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 400;
                          font-size: 14px;
                          line-height: 22px;
                          color: #131313;
                          margin: 0 0 12px 0;
                        "
                      >
                        Or copy and paste this URL into a new tab of your
                        browser: <br />
                      </p>
                      <a
                        href="${url}"
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 400;
                          font-size: 14px;
                          margin: 0 0 48px 0;
                          color: #0070f3;
                        "
                        >${url}</a
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px 60px 40px">
                <hr />
                <table
                  role="presentation"
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                    font-size: 12px;
                    font-family: Inter, sans-serif;
                  "
                >
                  <tr>
                    <td>
                      <p
                        style="
                          font-family: Inter, sans-serif;
                          font-weight: 400;
                          font-size: 12px;
                          line-height: 18px;
                          color: #666666;
                          margin: 24px 0 0 0;
                          padding: 0 12px 0 12px;
                          text-align: center;
                        "
                      >
                        If you didn't attempt to ${logInOrSignUp} but received
                        this email, please ignore this email. If you are
                        concerned about your account's safety, please reply to
                        this email to get in touch with us.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

`
}

export const text = ({
  url,
  host,
  isExistingUser,
}: {
  url: string
  host: string
  isExistingUser: boolean
}): string => (isExistingUser ? `Log in to ${host}\n${url}\n\n` : `Sign up to ${host}\n${url}\n\n`)
