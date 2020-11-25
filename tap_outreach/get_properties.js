let tbody = document.querySelector('body > table:nth-child(775) > tbody')
let propertiesArr = Array.from(tbody.querySelectorAll('tr')).map(el => { let tds = Array.from(el.querySelectorAll('td')); return tds[0].innerText.split('\n') })
// const propertiesArr = [["automationPercentage","number"],["bounceCount","integer"],["clickCount","integer"],["createdAt","date-time"],["deliverCount","integer"],["description","string"],["durationInDays","integer"],["enabled","boolean"],["enabledAt","date-time"],["failureCount","integer"],["finishOnReply","boolean"],["lastUsedAt","date-time"],["locked","boolean"],["lockedAt","date-time"],["maxActivations","integer"],["name","string"],["negativeReplyCount","integer"],["neutralReplyCount","integer"],["numContactedProspects","integer"],["numRepliedProspects","integer"],["openCount","integer"],["optOutCount","integer"],["positiveReplyCount","integer"],["primaryReplyAction","string"],["primaryReplyPauseDuration","integer"],["replyCount","integer"],["scheduleCount","integer"],["scheduleIntervalType","string"],["secondaryReplyAction","string"],["secondaryReplyPauseDuration","integer"],["sequenceStepCount","integer"],["sequenceType","string"],["shareType","string"],["tags","string"],["throttleCapacity","integer"],["throttleMaxAddsPerDay","integer"],["throttlePaused","boolean"],["throttlePausedAt","date-time"],["transactional","boolean"],["updatedAt","date-time"]]


const properties = Object.assign({}, ...propertiesArr.map(([propertyName, type]) => {
  const ret = {
    [propertyName]: {
      "type": [
        "null",
        type === "date-time" ? "string" : type,
      ]
    }
  };
  if (type === "date-time") {
    ret[propertyName]['format'] = "date-time";
  }
  return ret;
}));

properties['id'] = {
  "type": [
    "integer"
  ]
}

const schema = {
  "type": "object",
  "additionalProperties": false,
  properties,
}

JSON.stringify(schema);

console.warn("Please check for properties that are lists in the schema as they are not properly generated with this script.");
console.warn("Please check for relationships as they are not generated");



