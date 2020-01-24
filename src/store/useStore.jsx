import Store from './Store';

export const VOTES = 'voteData';

const useStore = (name = VOTES) => {
  const store = new Store(name);

  const createVote = (vote, callBack) => {
    const { title: voteTitle, voteItems, date: votePeriod } = vote;
    const { votes: preVotes } = store.getLocalStorage(VOTES);
    const items = voteItems.map(item => {
      return {
        title: item,
        votes: 0,
      };
    });

    store.setLocalStorage(VOTES, {
      votes: [
        ...preVotes,
        {
          creator: '누가만들었음',
          votePeriod,
          Voter: ['투표자'],
          voteTitle,
          items,
        },
      ],
    });
    callBack && callBack();
  };

  const deleteVote = (index, callBack) => {
    const voteData = store.getLocalStorage(VOTES);
    const { votes: preVotes } = voteData;
    const votes = preVotes.filter((item, itemIndex) => {
      return itemIndex !== index;
    });

    store.setLocalStorage(VOTES, { ...voteData, votes });
    callBack && callBack();
  };

  return {
    createVote,
    deleteVote,
  };
};

export default useStore;
