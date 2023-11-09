export function getSecretRegex(): RegExp {
  return /\b[a-zA-Z]{8,}s\b/;
}
  
export function getSecretWord(regex: RegExp, text: string): string | null {

  const match = text.match(regex);

  if (match) {
    return match[0];
  } else {
    return null;
  }
}
