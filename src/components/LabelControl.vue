<template>
    <div class="container">
        <label><span>{{ label}}:</span>{{value}}</label>
        
    </div>
</template>
<script>

export default {
    name :"LabelControl",
    props:["label","value","placeholder"],
    
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