import React, {useMemo, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyle from './styles';
import {IQuizList} from '../../screens/Quiz';
import {IColors} from '../../theme';

enum ResultTypes {
  NOT_CHECKED = 'NOT_CHECKED',
  CORRECT = 'CORRECT',
  NOT_CORRECT = 'NOT_CORRECT',
}

const QuizQuestion = ({
  data,
  nextQuestion,
}: {
  data: IQuizList;
  nextQuestion: () => void;
}) => {
  const {colors}: {colors: IColors} = useTheme();
  const styles = makeStyle(colors);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [result, setResult] = useState<ResultTypes>(ResultTypes.NOT_CHECKED);
  const renderItem = ({item}: {item: string}) => {
    if (item !== selectedOption) {
      return (
        <TouchableOpacity
          onPress={() => {
            setSelectedOption(item);
          }}
          disabled={result !== ResultTypes.NOT_CHECKED}
          style={[styles.optionContainer]}>
          <Text>{item}</Text>
        </TouchableOpacity>
      );
    }
    return <View style={styles.emptyOption} />;
  };

  const checkAnswer = () => {
    setResult(
      data?.correctOption === selectedOption
        ? ResultTypes.CORRECT
        : ResultTypes.NOT_CORRECT,
    );
  };

  const renderBottomButton = () => {
    if (result !== ResultTypes.NOT_CHECKED) {
      return (
        <>
          <Text style={styles.answerText}>
            {result === ResultTypes.CORRECT
              ? 'Great Job!'
              : `Answer: ${data?.correctOption}`}
          </Text>
          <TouchableOpacity
            style={styles.completionContainer}
            onPress={onNextQuestion}>
            <Text
              style={
                result === ResultTypes.CORRECT
                  ? styles.successText
                  : styles.errorText
              }>
              Next Question
            </Text>
          </TouchableOpacity>
        </>
      );
    }
    if (selectedOption) {
      return (
        <TouchableOpacity style={styles.checkContainer} onPress={checkAnswer}>
          <Text style={styles.buttonText}>Check answer</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    );
  };

  const backgroundColor = useMemo(() => {
    if (result !== ResultTypes.NOT_CHECKED) {
      if (result === ResultTypes.CORRECT) {
        return colors.successBackground;
      }
      return colors.failureBackground;
    }
    return colors.transparent;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);
  const onNextQuestion = () => {
    setSelectedOption('');
    setResult(ResultTypes.NOT_CHECKED);
    nextQuestion();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Fill in the missing work</Text>
      <Text style={styles.englishText}>
        {data?.english.join(' ').concat('.')}
      </Text>
      <View style={styles.germanContainer}>
        {data?.german.map((txt, index) => {
          if (txt) {
            return (
              <Text key={index} style={styles.germanText}>
                {`${txt}${index === data?.german?.length - 1 ? '.' : ' '}`}
              </Text>
            );
          } else if (selectedOption) {
            return (
              <View style={[styles.optionContainer]}>
                <Text>{selectedOption}</Text>
              </View>
            );
          }
          return <View style={styles.emptyContainer} />;
        })}
      </View>
      <FlatList
        contentContainerStyle={styles.contentStyle}
        numColumns={2}
        data={data?.options}
        renderItem={renderItem}
      />
      <View style={[styles.bottomButtonContainer, {backgroundColor}]}>
        {renderBottomButton()}
      </View>
    </View>
  );
};

export default QuizQuestion;
