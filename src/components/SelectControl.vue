<template>
    <div class="container">
        <label>{{ label}}</label>
        <select :value="value" @change="$emit('input',$event)" type="text" :placeholder="title.placeholder" > 

            <option :value="option" v-for="(option, index) in options" :key="index">{{ option }}</option>
        </select>
    </div>
</template>
<script>

export default {
    name :"SelectControl",
    props:["label","value","options"],
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