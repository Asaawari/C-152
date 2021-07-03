AFRAME.registerComponent('log',{
    schema:{
        //data
        message:{type:'string', default : 'Hello World !!!'}
    },

    init : function(){
        //Do something when the component is first attached
        console.log(this.data.message);
    },

    // update:function(){
    //     //Do something when component's data is updated
    // },

    // remove : function(){
    //     //Do something when the component or its entity is detached
    // },

    // tick : function(){
    //     //Do something on every scene tick or frame
    // }
});