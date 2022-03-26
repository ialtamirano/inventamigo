<template>
    <div class="form-control">
        <label>{{ title.label}}</label>
        <input class="input" type="text" :placeholder="title.placeholder" :value="title.value">
    </div>
</template>
<script>

export default {
    props: ['title']
    
 
 
}
</script>
