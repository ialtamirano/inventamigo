<template>
    <div class="container">
        <label>{{ label}}</label>
        <input :value="value" @click="$emit('input', $event)" :placeholder="placeholder" >
    </div>
</template>
<script>

export default {
    name :"InputControl",
    props:["label","value","placeholder"],
    emits:["input"]
}
</script>
<style scoped>
.container {
    display : flex;
    flex-direction: column;
    width: 20rem;
}

.container label{
    font-weight: 800;
}

.container input{
    height: 20px;
    padding: 10px;
    border-radius: 10px;
}
</style>