export const buildAvatarInitials = (username: string): string =>
  username.split(' ').reduce((acc, curr) => acc + curr.charAt(0).toLocaleUpperCase(), '');
