<template>
    <div id = 'tab-ber'>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'tabber'
}
</script>

<style>
    #tab-ber{
        display: flex;
        background-color: #f6f6f6;
        position:fixed;
        left: 0;
        right:0;
        bottom: 0;
        box-shadow: 0 -1px 1px rgba(100, 100, 100,.5)
    }
</style>