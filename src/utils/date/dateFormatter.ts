const currentDate = () => {
  const date = new Date();
  const current = date.toISOString().split('T')[0];
  return current;
};

const getPastDates = (days: number) => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - i);

    // 日付を 'YYYY/MM/DD' の形式にフォーマット
    const formattedDate = pastDate.toISOString().split('T')[0];

    dates.push(formattedDate);
  }

  return dates;
};

export { currentDate, getPastDates };
