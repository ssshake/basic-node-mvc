const Redis = require('ioredis');
const redis = new Redis();

const blacklistKeywords = require('../pages/index/json/blacklist-keywords.json').join('|'); //not used but should be
const webring = require('../pages/index/json/webring.json');
const badges = require('../pages/index/json/badges.json');
const gamingText = require('../pages/index/json/gaming-text.json');
const gamingGraphics = require('../pages/index/json/gaming-graphics.json');
const favesOfTheMonth = require('../pages/index/json/fav-sites-of-the-month.json');
const searchEngines = require('../pages/index/json/search-engines.json');
const news = require('../pages/index/json/news.json');


const indexPageController = async () => {
    const dataFromRedis = await getDataFromRedis();
    return buildTemplateVariables(dataFromRedis);
}

const getDataFromRedis = async () => {
    return {
        totalGeocitiesHomepages: await redis.get('totalGeocitiesHomepages'), 
        totalAolHomepages: await redis.get('totalAolHomepages'), 
        totalUsers: await redis.get('totalUsers'), 
        totalSearches: await redis.get('totalSearches'), 
        totalUserAgents: await redis.get('totalUserAgents'), 
        top10Sites: await redis.get('top10Sites').then(stringToJson),
        top10UserAgents: await redis.get('top10UserAgents').then(stringToJson), 
        randomGeocities: await redis.get('randomGeocities').then(stringToJson), 
        randomAol: await redis.get('randomAol').then(stringToJson), 
    }
}

const stringToJson = async (string) => {
    return JSON.parse(string);
}

const buildTemplateVariables = (dataFromRedis) => {
    return {
        showSearch: true,
        news: news, 
        action: 'get',
        options: {
            year: 1996,
            noscripts: true,
            decode: true
        },
        stats: {
            counter: dataFromRedis.totalSearches,
            users: dataFromRedis.totalUsers,
            agents: [],
            agentsTop10: dataFromRedis.top10UserAgents,
            agentsCount: dataFromRedis.totalUserAgents,
        },
        urls: {
            links: dataFromRedis.top10Sites,
            aolHomepages: dataFromRedis.randomAol,
            aolHomepagesTotal: dataFromRedis.totalAolHomepages,
            geocitiesHomepages: dataFromRedis.randomGeocities,
            geocitiesHomepagesTotal: dataFromRedis.totalGeocitiesHomepages,
            webring: webring,
            badges: badges,
            gamingText: gamingText,
            gamingGraphics: gamingGraphics,
            favesOfTheMonth: favesOfTheMonth,
            searchEngines: searchEngines,
            fanSitesOfTheMonth: [],
            messageArchives: [],
        }
    }
}

module.exports = indexPageController;