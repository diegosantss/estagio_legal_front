import Vue from 'vue';
export default new Vue({
    methods:{
        emitSmallMenu(isSmallMenu){
            this.$emit('smallMenu', isSmallMenu);
        },
        onSmallMenu(callback){
            this.$on('smallMenu',callback);
        }
    }
});