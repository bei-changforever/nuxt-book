<template>
    <div class="prev-next">
        <NuxtLink class="btn" v-if="prev" :to="prev._path.replace('/articles','/blog')">← {{ prev.title }}</NuxtLink>
        <span v-else>&nbsp;</span>
        <NuxtLink class="btn" v-if="next" :to="next._path.replace('/articles','/blog')">{{ next.title }} →</NuxtLink>
        <span v-else>&nbsp;</span>
    </div>
</template>

<script setup>
defineProps({
    prev: {
        type: Object,
        default: () => null
    },
    next: {
        type: Object,
        default: () => null
    }
})
</script>

<style lang="scss" scoped>
.prev-next {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;

    .btn {
        color: var(--color-secondary);
    }
}

</style>