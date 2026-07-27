import "dotenv/config";

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: Number(process.env.PORT),
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: Number(process.env.SMTP_PORT),
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_FROM: process.env.SMTP_FROM || process.env.SMTP_USER,
  SMTP_SECURE: String(process.env.SMTP_SECURE).toLowerCase() === "true",
  PASSWORD_RESET_OTP_TTL_MINUTES: Number(process.env.PASSWORD_RESET_OTP_TTL_MINUTES),
  MAIL_DEV_RETURN_OTP: String(process.env.MAIL_DEV_RETURN_OTP).toLowerCase() === "true"
};
