const app = Vue.createApp({
    data() {
        return {
            todos:[
                {
                    content:"把項目做完",
                    complete:true,
                },
                {
                    content:"去超市購物",
                    complete:true ,
                },
                {
                    content:"看10分鐘的書",
                    complete:false, 
                }
            ]
        };
    },
});
app.mount("#app");