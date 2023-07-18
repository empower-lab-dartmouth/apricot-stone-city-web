import {TableColumn} from 'react-data-table-component';
import {QuestSummaryStats, UserSummary, allQuests} from '../../state/recoil';
import * as stats from 'stats-lite';
import _ from 'lodash';
const STATS = require('statistics.js');

export type QuestsRow = {
    avgTestScore: number,
    medianTestScore: number,
    stdTestScore: number,
    cumulativeConsumeEngagement: number,
    avgConsumeEngagementScore: number,
    medianConsumeEngagementScore: number,
    stdConsumeEngagementScore: number,
    avgCreateEngagementScore: number,
    medianCreateEngagementScore: number,
    cumulativeCreateEngagement: number,
    stdCreateEngagementScore: number,
    // numberOfUsersCompleted: number,
    avgSelfReportedLearning: number,
    medianSelfReportedLearning: number,
    stdSelfReportedLearning: number,
    avgSelfReportedEnjoyment: number,
    medianSelfReportedEnjoyment: number,
    stdSelfReportedEnjoyment: number,
    avgLearnerMadeQuestionsScore: number,
    medianLearnerMadeQuestionsScore: number,
    stdLearnerMadeQuestionsScore: number,
    avgTimePerWord: number,
    medianTimePerWord: number,
    stdTimePerWord: number,
    questId: string,
    questName: string,
  }

export const questColumns: TableColumn<QuestsRow>[] =[
  {
    name: 'Quest ID',
    selector: (row: QuestsRow) => row.questId,
    sortable: true,
  },
  {
    name: 'Quest Name',
    selector: (row: QuestsRow) => row.questName,
    sortable: true,
  },
  {
    name: 'Avg. test score',
    selector: (row: QuestsRow) => row.avgTestScore,
    sortable: true,
  },
  {
    name: 'Med. test score',
    selector: (row: QuestsRow) => row.medianTestScore,
    sortable: true,
  },
  {
    name: 'Std. test score',
    selector: (row: QuestsRow) => row.stdTestScore,
    sortable: true,
  },
  {
    name: 'cum. consume engagement',
    selector: (row: QuestsRow) => row.cumulativeConsumeEngagement,
    sortable: true,
  },
  {
    name: 'Avg. consume engagement',
    selector: (row: QuestsRow) => row.avgConsumeEngagementScore,
    sortable: true,
  },
  {
    name: 'Med. Consume engagement',
    selector: (row: QuestsRow) => row.medianConsumeEngagementScore,
    sortable: true,
  },
  {
    name: 'Std. Consume engagement',
    selector: (row: QuestsRow) => row.stdConsumeEngagementScore,
    sortable: true,
  },
  {
    name: 'cum. create engagement',
    selector: (row: QuestsRow) => row.cumulativeConsumeEngagement,
    sortable: true,
  },
  {
    name: 'Avg. create engagement',
    selector: (row: QuestsRow) => row.avgCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Med. engagement',
    selector: (row: QuestsRow) => row.medianCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Std. engagement',
    selector: (row: QuestsRow) => row.stdCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Avg. self rep. learning',
    selector: (row: QuestsRow) => row.avgSelfReportedLearning,
    sortable: true,
  },
  {
    name: 'Med. self rep. learning',
    selector: (row: QuestsRow) => row.medianSelfReportedLearning,
    sortable: true,
  },
  {
    name: 'Std. self rep. learning',
    selector: (row: QuestsRow) => row.stdSelfReportedLearning,
    sortable: true,
  },
  {
    name: 'Avg. self rep. enjoyment',
    selector: (row: QuestsRow) => row.avgSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Med. self rep. enjoyment',
    selector: (row: QuestsRow) => row.medianSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Std. self rep. enjoyment',
    selector: (row: QuestsRow) => row.stdSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Avg. learner made questions',
    selector: (row: QuestsRow) => row.avgLearnerMadeQuestionsScore,
    sortable: true,
  },
  {
    name: 'Med. learner made questions',
    selector: (row: QuestsRow) => row.medianLearnerMadeQuestionsScore,
    sortable: true,
  },
  {
    name: 'Std. self rep. enjoyment',
    selector: (row: QuestsRow) => row.stdSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Avg. time per word',
    selector: (row: QuestsRow) => row.avgTimePerWord,
    sortable: true,
  },
  {
    name: 'Med. time per word',
    selector: (row: QuestsRow) => row.medianTimePerWord,
    sortable: true,
  },
  {
    name: 'Std. time per word',
    selector: (row: QuestsRow) => row.stdTimePerWord,
    sortable: true,
  },


//   {
//     name: 'num users completed',
//     selector: (row: QuestsRow) => row.numberOfUsersCompleted,
//     sortable: true,
//   },
];

export const summaryToRow: (summary: QuestSummaryStats) => QuestsRow = (s) => {
  const v = Object.values(s.sessions);
  return ({
    avgTestScore: _.round(stats.mean(v.flatMap((x) => x.testScores)), 2),
    medianTestScore: _.round(stats.median(v.flatMap((x) => x.testScores)), 2),
    stdTestScore: _.round(stats.stdev(v.flatMap((x) => x.testScores)), 2),
    avgConsumeEngagementScore: _.round(stats.
        mean(v.flatMap((x) => x.consumptionTime)), 2),
    cumulativeConsumeEngagement: _.round(stats.
        sum(v.flatMap((x) => x.consumptionTime)), 2),
    cumulativeCreateEngagement: _.round(stats.
        sum(v.flatMap((x) => x.contributionTime)), 2),
    medianConsumeEngagementScore: _.round(stats.
        median(v.flatMap((x) => x.consumptionTime)), 2),
    stdConsumeEngagementScore: _.round(stats.
        stdev(v.flatMap((x) => x.consumptionTime)), 2),
    avgCreateEngagementScore: _.round(stats
        .mean(v.flatMap((x) => x.contributionTime)), 2),
    medianCreateEngagementScore: _.round(stats
        .median(v.flatMap((x) => x.contributionTime)), 2),
    stdCreateEngagementScore: _.round(stats
        .stdev(v.flatMap((x) => x.contributionTime)), 2),
    avgSelfReportedLearning: _.round(stats
        .mean(v.flatMap((x) => x.selfReportedLearning)), 2),
    medianSelfReportedLearning: _.round(stats
        .median(v.flatMap((x) => x.selfReportedLearning)), 2),
    stdSelfReportedLearning: _.round(stats
        .stdev(v.flatMap((x) => x.selfReportedLearning)), 2),
    avgSelfReportedEnjoyment: _.round(stats
        .mean(v.flatMap((x) => x.selfReportedEnjoyment)), 2),
    medianSelfReportedEnjoyment: _.round(stats
        .median(v.flatMap((x) => x.selfReportedEnjoyment)), 2),
    stdSelfReportedEnjoyment: _.round(stats
        .stdev(v.flatMap((x) => x.selfReportedEnjoyment)), 2),
    avgLearnerMadeQuestionsScore: _.round(stats
        .mean(v.flatMap((x) => x.userMadeQuizScores)), 2),
    medianLearnerMadeQuestionsScore: _.round(stats
        .median(v.flatMap((x) => x.userMadeQuizScores)), 2),
    stdLearnerMadeQuestionsScore: _.round(stats
        .stdev(v.flatMap((x) => x.userMadeQuizScores)), 2),
    avgTimePerWord: _.round(stats
        .mean(v.flatMap((x) => x.timePerWord)), 2),
    medianTimePerWord: _.round(stats
        .median(v.flatMap((x) => x.timePerWord)), 2),
    stdTimePerWord: _.round(stats
        .stdev(v.flatMap((x) => x.timePerWord)), 2),
    questId: s.questId,
    questName: allQuests[s.questId].title,
  });
};

export const summaryToRows: (summary: QuestSummaryStats[]) => QuestsRow[] =
(summary) => {
  const v: QuestsRow[] = summary.map((s) => summaryToRow(s));
  const totalRow = {
    avgTestScore: _.round(stats.mean(v.map((x) => x.avgTestScore)), 2),
    medianTestScore: _.round(stats.median(v.flatMap((x) => x.avgTestScore)), 2),
    stdTestScore: _.round(stats.stdev(v.flatMap((x) => x.avgTestScore)), 2),
    avgConsumeEngagementScore: _.round(stats.
        mean(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    cumulativeConsumeEngagement: _.round(stats.
        sum(v.flatMap((x) => x.cumulativeConsumeEngagement)), 2),
    cumulativeCreateEngagement: _.round(stats.
        sum(v.flatMap((x) => x.cumulativeCreateEngagement)), 2),
    medianConsumeEngagementScore: _.round(stats.
        median(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    stdConsumeEngagementScore: _.round(stats.
        stdev(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    avgCreateEngagementScore: _.round(stats
        .mean(v.flatMap((x) => x.avgCreateEngagementScore)), 2),
    medianCreateEngagementScore: _.round(stats
        .median(v.flatMap((x) => x.avgCreateEngagementScore)), 2),
    stdCreateEngagementScore: _.round(stats
        .stdev(v.flatMap((x) => x.avgCreateEngagementScore)), 2),
    avgSelfReportedLearning: _.round(stats
        .mean(v.flatMap((x) => x.avgSelfReportedLearning)), 2),
    medianSelfReportedLearning: _.round(stats
        .median(v.flatMap((x) => x.avgSelfReportedLearning)), 2),
    stdSelfReportedLearning: _.round(stats
        .stdev(v.flatMap((x) => x.avgSelfReportedLearning)), 2),
    avgSelfReportedEnjoyment: _.round(stats
        .mean(v.flatMap((x) => x.avgSelfReportedEnjoyment)), 2),
    medianSelfReportedEnjoyment: _.round(stats
        .median(v.flatMap((x) => x.avgSelfReportedEnjoyment)), 2),
    stdSelfReportedEnjoyment: _.round(stats
        .stdev(v.flatMap((x) => x.avgSelfReportedEnjoyment)), 2),
    avgLearnerMadeQuestionsScore: _.round(stats
        .mean(v.flatMap((x) => x.avgLearnerMadeQuestionsScore)), 2),
    medianLearnerMadeQuestionsScore: _.round(stats
        .median(v.flatMap((x) => x.avgLearnerMadeQuestionsScore)), 2),
    stdLearnerMadeQuestionsScore: _.round(stats
        .stdev(v.flatMap((x) => x.avgLearnerMadeQuestionsScore)), 2),
    avgTimePerWord: _.round(stats
        .mean(v.flatMap((x) => x.avgTimePerWord)), 2),
    medianTimePerWord: _.round(stats
        .median(v.flatMap((x) => x.avgTimePerWord)), 2),
    stdTimePerWord: _.round(stats
        .stdev(v.flatMap((x) => x.avgTimePerWord)), 2),
    questId: 'TOTAL',
    questName: 'TOTAL',
  };
  return [...v, totalRow];
};


export type UserRow = {
  avgTestScore: number,
  medianTestScore: number,
  stdTestScore: number,
  cumulativeConsumeEngagement: number,
  avgConsumeEngagementScore: number,
  medianConsumeEngagementScore: number,
  stdConsumeEngagementScore: number,
  avgCreateEngagementScore: number,
  medianCreateEngagementScore: number,
  cumulativeCreateEngagement: number,
  stdCreateEngagementScore: number,
  timeOnAnalytics: number,
  avgOtherUsersTest: number,
  medianOtherUsersTest: number,
  stdOtherUsersTest: number,
  avgOtherUsersLearning: number,
  medianOtherUsersLearning: number,
  stdOtherUsersLearning: number,
  avgOtherUsersEnjoyment: number,
  medianOtherUsersEnjoyment: number,
  stdOtherUsersEnjoyment: number,
  // questsCompleted: number,
  // numberCollaborators: number,
  // numberOfUsersCompleted: number,
  avgSelfReportedLearning: number,
  medianSelfReportedLearning: number,
  stdSelfReportedLearning: number,
  avgSelfReportedEnjoyment: number,
  medianSelfReportedEnjoyment: number,
  stdSelfReportedEnjoyment: number,
  avgLearnerMadeQuestionsScore: number,
  medianLearnerMadeQuestionsScore: number,
  stdLearnerMadeQuestionsScore: number,
  avgTimePerWord: number,
  medianTimePerWord: number,
  stdTimePerWord: number,
  username: string,
  maxLevel: number,
}


export const userColumns: TableColumn<UserRow>[] =[
  {
    name: 'username',
    selector: (row: UserRow) => row.username,
    sortable: true,
  },
  {
    name: 'Avg. test score',
    selector: (row: UserRow) => row.avgTestScore,
    sortable: true,
  },
  {
    name: 'Max level',
    selector: (row: UserRow) => row.maxLevel,
    sortable: true,
  },
  {
    name: 'Time on analytics',
    selector: (row: UserRow) => row.timeOnAnalytics,
    sortable: true,
  },
  {
    name: 'Med. test score',
    selector: (row: UserRow) => row.medianTestScore,
    sortable: true,
  },
  {
    name: 'Std. test score',
    selector: (row: UserRow) => row.stdTestScore,
    sortable: true,
  },
  {
    name: 'cum. consume engagement',
    selector: (row: UserRow) => row.cumulativeConsumeEngagement,
    sortable: true,
  },
  {
    name: 'Avg. consume engagement',
    selector: (row: UserRow) => row.avgConsumeEngagementScore,
    sortable: true,
  },
  {
    name: 'Med. Consume engagement',
    selector: (row: UserRow) => row.medianConsumeEngagementScore,
    sortable: true,
  },
  {
    name: 'Std. Consume engagement',
    selector: (row: UserRow) => row.stdConsumeEngagementScore,
    sortable: true,
  },
  {
    name: 'cum. create engagement',
    selector: (row: UserRow) => row.cumulativeCreateEngagement,
    sortable: true,
  },
  {
    name: 'Avg. create engagement',
    selector: (row: UserRow) => row.avgCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Med. engagement',
    selector: (row: UserRow) => row.medianCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Std. engagement',
    selector: (row: UserRow) => row.stdCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Avg. self rep. learning',
    selector: (row: UserRow) => row.avgSelfReportedLearning,
    sortable: true,
  },
  {
    name: 'Med. self rep. learning',
    selector: (row: UserRow) => row.medianSelfReportedLearning,
    sortable: true,
  },
  {
    name: 'Std. self rep. learning',
    selector: (row: UserRow) => row.stdSelfReportedLearning,
    sortable: true,
  },
  {
    name: 'Avg. self rep. enjoyment',
    selector: (row: UserRow) => row.avgSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Med. self rep. enjoyment',
    selector: (row: UserRow) => row.medianSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Std. self rep. enjoyment',
    selector: (row: UserRow) => row.stdSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Avg. learner made questions',
    selector: (row: UserRow) => row.avgLearnerMadeQuestionsScore,
    sortable: true,
  },
  {
    name: 'Med. learner made questions',
    selector: (row: UserRow) => row.medianLearnerMadeQuestionsScore,
    sortable: true,
  },
  {
    name: 'Std. self rep. enjoyment',
    selector: (row: UserRow) => row.stdSelfReportedEnjoyment,
    sortable: true,
  },
  {
    name: 'Avg. time per word',
    selector: (row: UserRow) => row.avgTimePerWord,
    sortable: true,
  },
  {
    name: 'Med. time per word',
    selector: (row: UserRow) => row.medianTimePerWord,
    sortable: true,
  },
  {
    name: 'Std. time per word',
    selector: (row: UserRow) => row.stdTimePerWord,
    sortable: true,
  },
  {
    name: 'Avg. other users test',
    selector: (row: UserRow) => row.avgOtherUsersTest,
    sortable: true,
  },
  {
    name: 'Med. other users test',
    selector: (row: UserRow) => row.medianOtherUsersTest,
    sortable: true,
  },
  {
    name: 'Std. other users test',
    selector: (row: UserRow) => row.stdOtherUsersTest,
    sortable: true,
  },
  {
    name: 'avg. other users enjoy',
    selector: (row: UserRow) => row.avgOtherUsersEnjoyment,
    sortable: true,
  },
  {
    name: 'med. other users enjoy',
    selector: (row: UserRow) => row.medianOtherUsersEnjoyment,
    sortable: true,
  },
  {
    name: 'std. other users enjoy',
    selector: (row: UserRow) => row.stdOtherUsersEnjoyment,
    sortable: true,
  },
  {
    name: 'avg. other users learn',
    selector: (row: UserRow) => row.avgOtherUsersLearning,
    sortable: true,
  },
  {
    name: 'med. other users learn',
    selector: (row: UserRow) => row.medianOtherUsersLearning,
    sortable: true,
  },
  {
    name: 'std. other users learn',
    selector: (row: UserRow) => row.stdOtherUsersLearning,
    sortable: true,
  },
];

const quizScore = (correct: number, incorrect: number) => {
  if (correct + incorrect <= 0) {
    return [];
  }
  return [correct / (stats.sum([correct, incorrect]))];
};

export const userSummaryToRow: (summary: UserSummary) => UserRow = (s) => {
  const v = Object.values(s.sessionData);
  return ({
    avgTestScore: _.round(stats.mean(v.flatMap((x) => x.testScores)), 2),
    medianTestScore: _.round(stats.median(v.flatMap((x) => x.testScores)), 2),
    stdTestScore: _.round(stats.stdev(v.flatMap((x) => x.testScores)), 2),
    avgConsumeEngagementScore: _.round(stats.
        mean(v.flatMap((x) => x.timeConsumingContent)), 2),
    cumulativeConsumeEngagement: _.round(stats.
        sum(v.flatMap((x) => x.timeConsumingContent)), 2),
    cumulativeCreateEngagement: _.round(stats.
        sum(v.flatMap((x) => x.timeContributing)), 2),
    medianConsumeEngagementScore: _.round(stats.
        median(v.flatMap((x) => x.timeConsumingContent)), 2),
    stdConsumeEngagementScore: _.round(stats.
        stdev(v.flatMap((x) => x.timeConsumingContent)), 2),
    avgCreateEngagementScore: _.round(stats
        .mean(v.flatMap((x) => x.timeContributing)), 2),
    medianCreateEngagementScore: _.round(stats
        .median(v.flatMap((x) => x.timeContributing)), 2),
    stdCreateEngagementScore: _.round(stats
        .stdev(v.flatMap((x) => x.timeContributing)), 2),
    avgSelfReportedLearning: _.round(stats
        .mean(v.flatMap((x) => x.learnScores)), 2),
    medianSelfReportedLearning: _.round(stats
        .median(v.flatMap((x) => x.learnScores)), 2),
    stdSelfReportedLearning: _.round(stats
        .stdev(v.flatMap((x) => x.learnScores)), 2),
    avgSelfReportedEnjoyment: _.round(stats
        .mean(v.flatMap((x) => x.enjoymentScores)), 2),
    medianSelfReportedEnjoyment: _.round(stats
        .median(v.flatMap((x) => x.enjoymentScores)), 2),
    stdSelfReportedEnjoyment: _.round(stats
        .stdev(v.flatMap((x) => x.enjoymentScores)), 2),
    avgLearnerMadeQuestionsScore: _.round(stats
        .mean(v.flatMap((x) => quizScore(
            x.userMadeQuizCorrect, x.userMadeQuizIncorrect))), 2),
    medianLearnerMadeQuestionsScore: _.round(stats
        .median(v.flatMap((x) => quizScore(
            x.userMadeQuizCorrect, x.userMadeQuizIncorrect))), 2),
    stdLearnerMadeQuestionsScore: _.round(stats
        .stdev(v.flatMap((x) => quizScore(
            x.userMadeQuizCorrect, x.userMadeQuizIncorrect))), 2),
    avgTimePerWord: _.round(stats
        .mean(v.flatMap((x) => x.timePerWord)), 2),
    medianTimePerWord: _.round(stats
        .median(v.flatMap((x) => x.timePerWord)), 2),
    stdTimePerWord: _.round(stats
        .stdev(v.flatMap((x) => x.timePerWord)), 2),
    avgOtherUsersTest: _.round(stats
        .mean(v.flatMap((x) => x.othersTestScoresOnContribution)), 2),
    medianOtherUsersTest: _.round(stats
        .median(v.flatMap((x) => x.othersTestScoresOnContribution)), 2),
    stdOtherUsersTest: _.round(stats
        .stdev(v.flatMap((x) => x.othersTestScoresOnContribution)), 2),
    avgOtherUsersEnjoyment: _.round(stats
        .mean(v.flatMap((x) => x.othersEnjoymentOfContribution)), 2),
    medianOtherUsersEnjoyment: _.round(stats
        .median(v.flatMap((x) => x.othersEnjoymentOfContribution)), 2),
    stdOtherUsersEnjoyment: _.round(stats
        .stdev(v.flatMap((x) => x.othersEnjoymentOfContribution)), 2),
    avgOtherUsersLearning: _.round(stats
        .mean(v.flatMap((x) => x.othersLearningFromContribution)), 2),
    medianOtherUsersLearning: _.round(stats
        .median(v.flatMap((x) => x.othersLearningFromContribution)), 2),
    stdOtherUsersLearning: _.round(stats
        .stdev(v.flatMap((x) => x.othersLearningFromContribution)), 2),
    username: s.userId,
    timeOnAnalytics: _.round(stats
        .sum(v.flatMap((x) => x.timeOnAnalytics)), 2),
    maxLevel: s.levels
        .reduce((agg, b) => (b.leveledUpTo > agg ?
        b.leveledUpTo : agg), 0),
  });
};

export const userSummariesToRow: (summary: UserSummary[]) => UserRow[] =
(s) => {
  const v = s.map((x) => userSummaryToRow(x));
  const totalRow: UserRow = ({
    avgTestScore: _.round(stats.mean(v.flatMap((x) => x.avgTestScore)), 2),
    medianTestScore: _.round(stats.median(v.flatMap((x) => x.avgTestScore)), 2),
    stdTestScore: _.round(stats.stdev(v.flatMap((x) => x.avgTestScore)), 2),
    avgConsumeEngagementScore: _.round(stats.
        mean(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    cumulativeConsumeEngagement: _.round(stats.
        sum(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    cumulativeCreateEngagement: _.round(stats.
        sum(v.flatMap((x) => x.cumulativeCreateEngagement)), 2),
    medianConsumeEngagementScore: _.round(stats.
        median(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    stdConsumeEngagementScore: _.round(stats.
        stdev(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    avgCreateEngagementScore: _.round(stats
        .mean(v.flatMap((x) => x.avgCreateEngagementScore)), 2),
    medianCreateEngagementScore: _.round(stats
        .median(v.flatMap((x) => x.avgCreateEngagementScore)), 2),
    stdCreateEngagementScore: _.round(stats
        .stdev(v.flatMap((x) => x.avgCreateEngagementScore)), 2),
    avgSelfReportedLearning: _.round(stats
        .mean(v.flatMap((x) => x.avgSelfReportedLearning)), 2),
    medianSelfReportedLearning: _.round(stats
        .median(v.flatMap((x) => x.avgSelfReportedLearning)), 2),
    stdSelfReportedLearning: _.round(stats
        .stdev(v.flatMap((x) => x.avgSelfReportedLearning)), 2),
    avgSelfReportedEnjoyment: _.round(stats
        .mean(v.flatMap((x) => x.avgSelfReportedEnjoyment)), 2),
    medianSelfReportedEnjoyment: _.round(stats
        .median(v.flatMap((x) => x.avgSelfReportedEnjoyment)), 2),
    stdSelfReportedEnjoyment: _.round(stats
        .stdev(v.flatMap((x) => x.avgSelfReportedEnjoyment)), 2),
    avgLearnerMadeQuestionsScore: _.round(stats
        .mean(v.flatMap((x) => x.avgLearnerMadeQuestionsScore)), 2),
    medianLearnerMadeQuestionsScore: _.round(stats
        .median(v.flatMap((x) => x.avgLearnerMadeQuestionsScore)), 2),
    stdLearnerMadeQuestionsScore: _.round(stats
        .stdev(v.flatMap((x) => x.avgLearnerMadeQuestionsScore)), 2),
    avgTimePerWord: _.round(stats
        .mean(v.flatMap((x) => x.avgTimePerWord)), 2),
    medianTimePerWord: _.round(stats
        .median(v.flatMap((x) => x.avgTimePerWord)), 2),
    stdTimePerWord: _.round(stats
        .stdev(v.flatMap((x) => x.avgTimePerWord)), 2),
    avgOtherUsersTest: _.round(stats
        .mean(v.flatMap((x) => x.avgOtherUsersTest)), 2),
    medianOtherUsersTest: _.round(stats
        .median(v.flatMap((x) => x.avgOtherUsersTest)), 2),
    stdOtherUsersTest: _.round(stats
        .stdev(v.flatMap((x) => x.avgOtherUsersTest)), 2),
    avgOtherUsersEnjoyment: _.round(stats
        .mean(v.flatMap((x) => x.avgOtherUsersEnjoyment)), 2),
    medianOtherUsersEnjoyment: _.round(stats
        .median(v.flatMap((x) => x.medianOtherUsersEnjoyment)), 2),
    stdOtherUsersEnjoyment: _.round(stats
        .stdev(v.flatMap((x) => x.stdOtherUsersEnjoyment)), 2),
    avgOtherUsersLearning: _.round(stats
        .mean(v.flatMap((x) => x.avgOtherUsersLearning)), 2),
    medianOtherUsersLearning: _.round(stats
        .median(v.flatMap((x) => x.medianOtherUsersLearning)), 2),
    stdOtherUsersLearning: _.round(stats
        .stdev(v.flatMap((x) => x.stdOtherUsersLearning)), 2),
    username: 'TOTAL',
    timeOnAnalytics: _.round(stats
        .mean(v.flatMap((x) => x.timeOnAnalytics)), 2),
    maxLevel: _.round(stats
        .mean(v.flatMap((x) => x.maxLevel)), 2),
  });
  return [...v, totalRow];
};


export type UserCorrRow = {
  avgTestScore: number,
  cumulativeConsumeEngagement: number,
  avgConsumeEngagementScore: number,
  avgCreateEngagementScore: number,
  cumulativeCreateEngagement: number,
  timeOnAnalytics: number,
  avgOtherUsersTest: number,
  avgOtherUsersLearning: number,
  avgOtherUsersEnjoyment: number,
  // questsCompleted: number,
  // numberCollaborators: number,
  // numberOfUsersCompleted: number,
  avgSelfReportedLearning: number,
  avgSelfReportedEnjoyment: number,
  avgLearnerMadeQuestionsScore: number,
  avgTimePerWord: number,
  maxLevel: number,
  field: string,
};

export const userCorrColumns: TableColumn<UserCorrRow>[] =[
  {
    name: 'field',
    selector: (row: UserCorrRow) => row.field,
    sortable: true,
  },
  {
    name: 'Avg. test score',
    selector: (row: UserCorrRow) => row.avgTestScore,
    sortable: true,
  },
  {
    name: 'Max level',
    selector: (row: UserCorrRow) => row.maxLevel,
    sortable: true,
  },
  {
    name: 'Time on analytics',
    selector: (row: UserCorrRow) => row.timeOnAnalytics,
    sortable: true,
  },
  {
    name: 'cum. consume engagement',
    selector: (row: UserCorrRow) => row.cumulativeConsumeEngagement,
    sortable: true,
  },
  {
    name: 'Avg. consume engagement',
    selector: (row: UserCorrRow) => row.avgConsumeEngagementScore,
    sortable: true,
  },

  {
    name: 'cum. create engagement',
    selector: (row: UserCorrRow) => row.cumulativeConsumeEngagement,
    sortable: true,
  },
  {
    name: 'Avg. create engagement',
    selector: (row: UserCorrRow) => row.avgCreateEngagementScore,
    sortable: true,
  },
  {
    name: 'Avg. self rep. learning',
    selector: (row: UserCorrRow) => row.avgSelfReportedLearning,
    sortable: true,
  },

  {
    name: 'Avg. self rep. enjoyment',
    selector: (row: UserCorrRow) => row.avgSelfReportedEnjoyment,
    sortable: true,
  },

  {
    name: 'Avg. learner made questions',
    selector: (row: UserCorrRow) => row.avgLearnerMadeQuestionsScore,
    sortable: true,
  },

  {
    name: 'Avg. time per word',
    selector: (row: UserCorrRow) => row.avgTimePerWord,
    sortable: true,
  },

  {
    name: 'Avg. other users test',
    selector: (row: UserCorrRow) => row.avgOtherUsersTest,
    sortable: true,
  },

  {
    name: 'avg. other users enjoy',
    selector: (row: UserCorrRow) => row.avgOtherUsersEnjoyment,
    sortable: true,
  },
  {
    name: 'avg. other users learn',
    selector: (row: UserCorrRow) => row.avgOtherUsersLearning,
    sortable: true,
  },
];

const userRowMetrics: any = {
  avgTestScore: 'metric',
  cumulativeConsumeEngagement: 'metric',
  avgConsumeEngagementScore: 'metric',
  avgCreateEngagementScore: 'metric',
  cumulativeCreateEngagement: 'metric',
  timeOnAnalytics: 'metric',
  avgOtherUsersTest: 'metric',
  avgOtherUsersLearning: 'metric',
  avgOtherUsersEnjoyment: 'metric',
  // questsCompleted: number,
  // numberCollaborators: number,
  // numberOfUsersCompleted: number,
  avgSelfReportedLearning: 'metric',
  avgSelfReportedEnjoyment: 'metric',
  avgLearnerMadeQuestionsScore: 'metric',
  avgTimePerWord: 'metric',
  maxLevel: 'metric',
};

export const userSummariesToCorrelations:
(summary: UserSummary[]) => UserCorrRow[] =
(s) => {
  const v = s.map((x) => userSummaryToRow(x));
  return Object.entries(userRowMetrics).map(([key, val]) => {
    const s = new STATS(v, userRowMetrics);
    return {
      field: key,
      avgTestScore: _.round(s.correlationCoefficient(key, 'avgTestScore')
          .correlationCoefficient, 3),
      cumulativeConsumeEngagement:
      _.round(s.correlationCoefficient(key, 'cumulativeConsumeEngagement')
          .correlationCoefficient, 3),
      avgConsumeEngagementScore:
      _.round(s.correlationCoefficient(key, 'avgConsumeEngagementScore')
          .correlationCoefficient, 3),
      avgCreateEngagementScore:
      _.round(s.correlationCoefficient(key, 'avgCreateEngagementScore')
          .correlationCoefficient, 3),
      cumulativeCreateEngagement:
      _.round(s.correlationCoefficient(key, 'cumulativeCreateEngagement')
          .correlationCoefficient, 3),
      timeOnAnalytics: _.round(s.correlationCoefficient(key, 'timeOnAnalytics')
          .correlationCoefficient, 3),
      avgOtherUsersTest: _.round(s.correlationCoefficient(key,
          'avgOtherUsersTest')
          .correlationCoefficient, 3),
      avgOtherUsersLearning:
      _.round(s.correlationCoefficient(key, 'avgOtherUsersLearning')
          .correlationCoefficient, 3),
      avgOtherUsersEnjoyment:
      _.round(s.correlationCoefficient(key, 'avgOtherUsersEnjoyment')
          .correlationCoefficient, 3),
      // questsCompleted: number,
      // numberCollaborators: number,
      // numberOfUsersCompleted: number,
      avgSelfReportedLearning:
      _.round(s.correlationCoefficient(key, 'avgSelfReportedLearning')
          .correlationCoefficient, 3),
      avgSelfReportedEnjoyment:
      _.round(s.correlationCoefficient(key, 'avgSelfReportedEnjoyment')
          .correlationCoefficient, 3),
      avgLearnerMadeQuestionsScore:
      _.round(s.correlationCoefficient(key, 'avgLearnerMadeQuestionsScore')
          .correlationCoefficient, 3),
      avgTimePerWord: _.round(s.correlationCoefficient(key, 'avgTimePerWord')
          .correlationCoefficient, 3),
      maxLevel: _.round(s.correlationCoefficient(key, 'maxLevel')
          .correlationCoefficient, 3),
    };
  });
};
