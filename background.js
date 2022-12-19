"use strict";

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.tabs.create({ url: "https://chat.openai.com/chat" })
    }
})

chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({url: "https://chat.openai.com/chat"}, function([ tab ]) {
        if (tab) {
        chrome.tabs.update(tab.id, {active: true})
        } else {
        chrome.tabs.create({url: "https://chat.openai.com/chat"})
        }
    })
})