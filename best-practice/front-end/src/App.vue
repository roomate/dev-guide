<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'app',
}
</script>
<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    height: 100%;
}
#app{
    height: 100%;
}
</style>