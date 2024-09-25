export const validateInput = (
  input: string,
  words: string[],
  maxWords: number,
): string | null => {
  const trimmedInput = input.trim();

  if (!trimmedInput) {
    return '単語を検索してください';
  }

  if (words.some((word) => word.toLowerCase() === trimmedInput.toLowerCase())) {
    return 'すでにその単語は検索されています';
  }

  if (words.length >= maxWords) {
    return `${maxWords}単語以上は検索できません`;
  }

  return null; // バリデーション成功
};
