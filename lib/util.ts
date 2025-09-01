
export const generate2FACode = () => {
  const code = Math.floor(1000000 + Math.random() * 9000000).toString();  // Generate a random 7-digit code
  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 1);
  return { code, expirationTime };
};