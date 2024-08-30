<template>
    <h1>Blog Posts</h1>
    <ul class="blog-wrap">
        <li v-for="a in articles" :id="a._id" class="blog-item">
            <NuxtLink :to="a._path.replace('/articles', '/blog')" class="blog-link">
                <img :src="a.img">
                <div class="desc-box">
                    <h2 class="title">{{ a.title }}</h2>
                    <p class="author">by {{ a.author.name }}</p>
                    <p class="description">{{ a.description }}</p>
                </div>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>

const { data: articles } = useAsyncData(() => queryContent('articles').sort({ createdAt: 1 }).find())

/*
const { data, refresh } = await useFetch('/api/json')

onMounted(() => {

    refresh()

    $fetch('/api/test', {
        method: 'POST',
        body: { hello: 'world ' }
    })

})
*/
</script>

<style lang="scss" scoped>
.blog-wrap {
    display: flex;
    flex-wrap: wrap;
    min-width: 785px;
    padding-bottom: 20px;

    .blog-item {
        margin: 0 6px 6px;
        width: 30%;

        img {
            width: 100%;
            aspect-ratio: 5/2;
            object-fit: cover;
        }
    }

    .desc-box {
        padding: 10px;
        border-radius: 0 0 8px 8px;
        background-color: var(--bg-secondary);

        .title {
            font-weight: bold;
            width: 80%;
        }

        .description {
            font-size: 12px;
            margin-bottom: 10px;
        }

        .title, 
        .description  {
            max-width: 85%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>