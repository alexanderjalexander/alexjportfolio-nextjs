export function getVideoURL(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function getVideoThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}
