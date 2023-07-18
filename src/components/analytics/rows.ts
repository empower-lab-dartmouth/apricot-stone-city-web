import {TableColumn} from 'react-data-table-component';
import {QuestSummaryStats, allQuests} from '../../state/recoil';
import * as stats from 'stats-lite';
import _ from 'lodash';

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
    selector: (row: QuestsRow) => row.stdSelfReportedEnjoyment,
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
        sum(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
    cumulativeCreateEngagement: _.round(stats.
        sum(v.flatMap((x) => x.avgConsumeEngagementScore)), 2),
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
