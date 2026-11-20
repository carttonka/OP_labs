'use strict';

const ages = (persons) => {
  const liveTime = {};
  for (const name in persons) {
    liveTime[name] = persons[name].died - persons[name].born;
  }
  return liveTime;
};

module.exports = { ages };