# KONARA production setup

The codebase is ready for production contact delivery. The remaining steps require access to external accounts and secrets, so they cannot be completed safely inside source code.

## 1. Configure contact delivery

The site sends `POST /api/contact` to a Vercel Function. The function sends the enquiry through Resend's Email API.

Add these environment variables to the Vercel project:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `CONTACT_ALLOWED_ORIGIN` (recommended after the final domain is active)
- `CONTACT_SUBJECT_PREFIX` (optional)

`CONTACT_FROM_EMAIL` must use a sender/domain accepted by the email provider.

## 2. Voiceflow

NARA is already connected in the source. Confirm the production Voiceflow project is active and has the required account/credit configuration.

## 3. Deploy

Deploy the project from its root so Vercel sees:

- `vercel.json`
- `api/contact.ts`
- `package.json`
- `src/`

After adding/changing environment variables, redeploy.

## 4. Final live test

On the deployed domain:

1. Open every route directly and refresh it.
2. Change languages, including Arabic or Urdu.
3. Open NARA and use the website guide.
4. Submit a real contact enquiry and verify it reaches `CONTACT_TO_EMAIL`.
5. Reply to the received enquiry and confirm the reply targets the visitor's email.
6. Test on desktop and mobile.

Do not place API keys in `src/` or in variables prefixed with `VITE_`.
