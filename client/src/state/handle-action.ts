import {SetterOrUpdater} from 'recoil';
import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {Action} from './action';
import {OptionData} from '../components/option/option-model';
import {fetchContinueConversationData} from '../utils/data-utils';

const appendToPage: (pageData: PageData,
    newCards: CardData[],
    newOptions: OptionData[]) => PageData = (page, newCards, newOptions) => ({
      cards: [...page.cards, ...newCards],
      options: newOptions,
    });

export const handleAction: (
    action: Action,
    currentPage: PageData,
    setCurrentPage: SetterOrUpdater<PageData>,
) => Promise<void> = async (action, currentPage, setCurrentPage) => {
  switch (action.type) {
    case 'click-option': {
      // TODO: update to real implementation

      try {
        // make the API call
        const updates = await fetchContinueConversationData(
            {
              context: {
                username: 'SAMPLE',
              },
              action: action,
            });
        if (updates.type === 'continuation-data') {
          console.log(updates);
          const newPage = appendToPage(currentPage,
              updates.cards, updates.options);
          setCurrentPage(newPage);
        } else {
          console.log(
              `Server error getting conversation ` +
              `continuation data ${updates.body}`);
        }
      } catch (error) {
        console.log(`Client error getting conversation continuation data.`);
      }
    }
  }
};
