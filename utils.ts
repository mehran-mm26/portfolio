export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

export function calculateExperience() {
  const start = new Date("2017-04-01");
  const now = new Date();
  return now.getFullYear() - start.getFullYear();
}
