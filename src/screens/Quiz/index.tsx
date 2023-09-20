import React, {useEffect, useState} from 'react';
import makeStyle from './styles';
import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import QuizQuestion from '../../components/QuizQuestion';
import {IColors} from '../../theme';

export interface IQuizList {
  correctOption: string;
  english: Array<string>;
  german: Array<string>;
  options: Array<string>;
}

function Quiz(): JSX.Element {
  const {colors}: {colors: IColors} = useTheme();
  const styles = makeStyle(colors);
  const [quizData, setQuizData] = useState<Array<IQuizList>>([]);
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);

  const fetchData = async () => {
    const quizList = await firestore().collection('quiz').get();
    const data: Array<IQuizList> = [];
    quizList.forEach(documentSnapshot => {
      const documentSnapshotData: IQuizList = documentSnapshot.data();
      data.push(documentSnapshotData);
    });
    setQuizData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextQuestion = () => {
    setCurrentQuiz(state => (state < quizData?.length - 1 ? state + 1 : 0));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <QuizQuestion
          data={quizData[currentQuiz]}
          nextQuestion={nextQuestion}
        />
      </View>
    </View>
  );
}

export default Quiz;
