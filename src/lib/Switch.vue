<template>
    <div>
        <button :class="{checked:value}" @click="toggle">
            <span></span>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    props:{
        value: Boolean
    },
    setup(props,context){
        const toggle = ()=>{
            context.emit('update:value', !props.value) // 接收传递值的组件不能直接修改值，要通知发送值的组件去修改
        }
        return { toggle}
    }
}
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height:$h;
        width:$h*2;
        border:none;
        background:#eee;
        border-radius: $h/2;
        position: relative;
        border-style: none;
    }
    span{
        position: absolute;
        top:2px;
        left:2px;
        height:$h2;
        width:$h2;
        background:white;
        border-radius: $h2 /2;
        transition:left .3s;
    }
    button.checked {
        background:#1989fa;
    }
    button.checked > span {
        left:calc(100% - #{$h2} - 2px);
    }
    button:focus{
        outline: none;
    }
</style>