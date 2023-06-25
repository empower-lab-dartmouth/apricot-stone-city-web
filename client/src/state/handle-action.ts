import {SetterOrUpdater} from 'recoil';
import {PageData} from '../components/page/page-model';
import {CardData} from '../components/card/card-model';
import {OptionData} from '../components/option/option-model';
import {fetchContinueConversationData} from '../utils/data-utils';
import {Stores} from '../utils/stores';

const appendToPage: (pageData: PageData,
    selectedOption: OptionData,
    newCards: CardData[],
    newOptions: OptionData[],
    newStores: Stores) => PageData = (page,
        selectedOption, newCards, newOptions, newStores) => ({
      currentStores: newStores,
      chatHistory: [...page.chatHistory, selectedOption, ...newCards],
      options: newOptions,
    });

export const handleAction: (
    option: OptionData,
    currentPage: PageData,
    setCurrentPage: SetterOrUpdater<PageData>,
) => Promise<void> = async (optionData, currentPage, setCurrentPage) => {
  switch (optionData.action.type) {
    case 'click-option': {
      // TODO: update to real implementation

      try {
        // make the API call
        const updates = await fetchContinueConversationData(
            {
              context: {
                username: 'SAMPLE',
                context: currentPage.currentStores,
              },
              action: optionData.action,
            });
        if (updates.type === 'continuation-data') {
          console.log(updates);
          const newPage = appendToPage(currentPage,
              optionData,
              updates.cards, updates.options, updates.context);
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
