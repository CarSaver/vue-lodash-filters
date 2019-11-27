<template>
    <div>
        <div id="test1">{{ { 'name': 'John' } | get('name') }}</div>
        <div id="test2">{{ { 'name': 'John' } | get('age') }}</div>
    </div>
</template>

<script>
export default {
    name: 'demo'
}
</script>
