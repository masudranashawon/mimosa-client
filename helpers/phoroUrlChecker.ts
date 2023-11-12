export const phoroUrlChecker = (photoUrl: string) => {
  if (
    photoUrl.includes('images.pexels.com') ||
    photoUrl.includes('images.unsplash.com') ||
    photoUrl.includes('res.cloudinary.com')
  ) {
    return true;
  }

  return false;
};
