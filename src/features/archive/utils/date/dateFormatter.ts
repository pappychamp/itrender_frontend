const getPastDates = (days: number) => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < days; i++) {
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - i);

    // 日付を 'YYYY/MM/DD' の形式にフォーマット
    const formattedDate = pastDate
      .toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '-');

    dates.push(formattedDate);
  }
  return dates;
};

export { getPastDates };