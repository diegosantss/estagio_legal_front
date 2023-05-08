import { createApp } from 'vue';

const eventBus = createApp({});

eventBus.config.globalProperties.$emitSmallMenu = (isSmallMenu) => {
  eventBus.emit('smallMenu', isSmallMenu);
};

eventBus.config.globalProperties.$onSmallMenu = (callback) => {
  eventBus.on('smallMenu', callback);
};

export default eventBus;