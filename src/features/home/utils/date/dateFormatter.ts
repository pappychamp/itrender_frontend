const currentDate = () => {
  const date = new Date();
  const current = date.toISOString().split('T')[0];
  return current;
};

export { currentDate };
