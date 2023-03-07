const MAX_UINT32_VALUE = 4294967295; // 2 ** 32 - 1

const getRandomValue = (max) => {
  const value = crypto.getRandomValues(new Uint32Array(1))[0] / MAX_UINT32_VALUE;

  if (!max || max === 1) return value;

  return Math.ceil(value * max);
};

const getRandomList = (list, count) => {
  let similarCount = count;

  const result = new Array(similarCount);
  let len = list.length;
  const taken = new Array(len);

  while (similarCount--) {
    const x = Math.floor(getRandomValue() * len);
    result[similarCount] = list[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};


const employers = [...document.querySelectorAll('[role=list][aria-label=Participants] [role=listitem] [avatar-tooltip-id] [jsname] span')].map((el) => el.innerHTML);

getRandomList(employers, 10);
