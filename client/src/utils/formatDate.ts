export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ro-Ro', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });
};
