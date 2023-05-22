import { reactive } from 'vue';

const eventBus = reactive({
  renderizaSidebar: false,

  toggleRenderizaSidebar() {
    this.renderizaSidebar = !this.renderizaSidebar;
  },

  getRenderizaSidebar() {
    return this.renderizaSidebar;
  }
});

export default eventBus;