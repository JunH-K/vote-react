import Store from './Store';

export const VOTES = 'voteData';

const useStore = (name = VOTES) => {
  const store = new Store(name);

  const login = (name, callBack) => {
    const votesData = store.getLocalStorage(VOTES);
    const { users = [] } = votesData;
    const [user] = users.filter(item => {
      return item.name === name;
    });

    if (user) {
      store.setLocalStorage(VOTES, {
        ...votesData,
        loginUser: user,
      });
    } else {
      alert('존재하지 않는 아이디 입니다.');
    }
    callBack && callBack(!!user);
  };

  const logout = callBack => {
    const votesData = store.getLocalStorage(VOTES);
    store.setLocalStorage(VOTES, {
      ...votesData,
      loginUser: {},
    });
    callBack && callBack(true);
  };

  const createUser = (name, callBack) => {
    if (isDuplicationUser(name)) {
      return alert('중복 아이디가 있습니다.');
    }

    const votesData = store.getLocalStorage(VOTES);
    const { users = [] } = store.getLocalStorage(VOTES);
    const [lastUser = {}] = users.slice(-1);
    const { userId: lastUserId = 0 } = lastUser;
    const userId = lastUserId + 1;

    store.setLocalStorage(VOTES, {
      ...votesData,
      users: [
        ...users,
        {
          name,
          userId,
        },
      ],
    });
    callBack && callBack(true);
  };

  const getUsers = () => {
    const { users = [] } = store.getLocalStorage(VOTES);
    return users;
  };

  const isDuplicationUser = name => {
    const users = getUsers();
    return users.some(user => {
      return user.name === name;
    });
  };

  const getLoginUser = () => {
    const { loginUser } = store.getLocalStorage(VOTES);
    return loginUser;
  };

  const createVote = (vote, callBack) => {
    const votesData = store.getLocalStorage(VOTES);
    const { title: voteTitle, voteItems, date: votePeriod, creator } = vote;
    const { votes: preVotes = [] } = store.getLocalStorage(VOTES);
    const items = voteItems.map(item => {
      return {
        title: item,
        votes: 0,
      };
    });

    store.setLocalStorage(VOTES, {
      ...votesData,
      votes: [
        ...preVotes,
        {
          creator,
          votePeriod,
          voter: [],
          voteTitle,
          items,
        },
      ],
    });
    callBack && callBack();
  };

  const editVote = (vote, callBack) => {
    const votesData = store.getLocalStorage(VOTES);
    const { title: voteTitle, voteItems, date: votePeriod, index } = vote;
    const { votes: preVotes = [] } = votesData;
    const items = voteItems.map(item => {
      return {
        title: item,
        votes: 0,
      };
    });

    const votes = preVotes.map((vote, voteIndex) => {
      if (voteIndex === parseInt(index)) {
        return {
          ...vote,
          voter: [],
          voteTitle,
          items,
          votePeriod,
        };
      }
    });

    store.setLocalStorage(VOTES, {
      ...votesData,
      votes,
    });
    callBack && callBack();
  };

  const deleteVote = (index, callBack) => {
    const votesData = store.getLocalStorage(VOTES);
    const { votes: preVotes } = votesData;
    const votes = preVotes.filter((item, itemIndex) => {
      return itemIndex !== index;
    });

    store.setLocalStorage(VOTES, { ...votesData, votes });
    callBack && callBack();
  };

  const getVotes = index => {
    const { votes: preVotes = [] } = store.getLocalStorage(VOTES);
    const parseIndex = parseInt(index);

    if (!isNaN(parseIndex) && typeof parseIndex === 'number') {
      return preVotes.filter((item, itemIndex) => {
        return itemIndex === parseIndex;
      });
    }

    return preVotes;
  };

  const updateVote = (voteIndex, selectedIndex, voter, callBack) => {
    const votesData = store.getLocalStorage(VOTES);
    const voteIndexNum = parseInt(voteIndex);
    const selectedIndexNum = parseInt(selectedIndex);
    const preVotes = getVotes() || [];
    const [vote] = preVotes.slice(voteIndexNum, voteIndexNum + 1);
    const { items: preItems = [] } = vote;

    const items = preItems.map((item, itemIndex) => {
      if (itemIndex === selectedIndexNum) {
        return {
          ...item,
          votes: item.votes + 1,
        };
      }
      return item;
    });

    const votes = preVotes.map((vote, index) => {
      if (index === voteIndexNum) {
        return {
          ...vote,
          voter: [...vote.voter, voter],
          items,
        };
      }
      return vote;
    });

    store.setLocalStorage(VOTES, {
      ...votesData,
      votes,
    });

    callBack && callBack();
  };

  const getResult = index => {
    const [vote = {}] = getVotes(index);
    const { voter: { length } = {} } = vote;
    const totalVoter = length;
    const { items: preItems = [] } = vote;

    const items = preItems.map(item => {
      const percentage = ((item.votes / totalVoter) * 100).toFixed(1);
      return {
        ...item,
        percentage: isNaN(percentage) ? 0 : percentage,
      };
    });

    return {
      totalVoter,
      items,
    };
  };

  return {
    login,
    logout,
    createUser,
    getLoginUser,
    getUsers,
    createVote,
    getVotes,
    deleteVote,
    updateVote,
    getResult,
    editVote,
  };
};

export default useStore;
