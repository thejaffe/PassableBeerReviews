import got from "got";

export function verifyCaptcha(token: string) {
  const key = process.env.SECRET_KEY;

  if (token === undefined || token === "" || token === null) {
    throw new Error(
      "If you're really a human, please select the Captcha to send mail."
    );
  }

  return got.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`
  );
}
