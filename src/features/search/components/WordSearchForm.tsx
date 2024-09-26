import { useState } from 'react';
import { TextInput, Group, rem } from '@mantine/core';
import { IconX, IconSearch } from '@tabler/icons-react';
import classes from '../styles/WordSearchForm.module.css';
import CustomBadge from '@/src/components/atoms/CustomBadge';
import CustomButton from '@/src/components/atoms/CustomButton';
import { useFilterWords } from '../context/FilterWordsContext';
import { validateInput } from '../utils/validation/validation';

type props = {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  mobile: boolean | undefined;
};

const WordSearchForm = ({ setMessage, mobile }: props) => {
  const iconX = <IconX style={{ width: rem(12), height: rem(12) }} />;
  const iconSearch = <IconSearch />;
  const enterBagde = (
    <CustomButton
      name="Enterで検索"
      variant="light"
      size="sm"
      color="gray"
      onClick={() => {
        handleAddBadge();
      }}
    />
  );
  const [inputValue, setInputValue] = useState<string>('');
  // const [filterWords, setFilterWords] = useState<string[]>([]);

  const { state, dispatch } = useFilterWords();

  const handleAddBadge = () => {
    const errorMessage = validateInput(inputValue, state.words, 3); // 3は最大単語数

    if (errorMessage) {
      setMessage(errorMessage);
    } else {
      setMessage('');
      dispatch({ type: 'ADD_WORD', payload: inputValue.trim() });
      dispatch({ type: 'SET_PAGE', payload: 1 });
      setInputValue('');
    }
  };
  const handleRemoveBadge = (filterWord: string) => {
    setMessage('');
    dispatch({ type: 'REMOVE_WORD', payload: filterWord });
    dispatch({ type: 'SET_PAGE', payload: 1 });
  };

  return (
    <div>
      <TextInput
        value={inputValue}
        size="lg"
        leftSection={iconSearch}
        rightSection={mobile ? null : enterBagde}
        rightSectionWidth="150px"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddBadge();
          }
        }}
        placeholder="気になる単語を検索"
      />
      <Group mt="md">
        {state.words.map((filterWord, index) => (
          <CustomBadge
            name={filterWord}
            key={index}
            rightSection={iconX}
            variant="light"
            size="lg"
            color="indigo"
            className={`${classes['filter-word-badge']}`}
            onClick={() => handleRemoveBadge(filterWord)}
          />
        ))}
      </Group>
    </div>
  );
};

export default WordSearchForm;
