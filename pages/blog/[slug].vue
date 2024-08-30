<template>
    <article class="post-article">
        <div class="header">
            <img :src="articles.img" />
            <div class="desc">
                <p>Post createdAt: {{ formatDate(articles.createdAt) }}</p>
                <span>•</span>
                <p>{{ articles.author.name }}</p>
            </div>
            <h1 class="title">{{ articles.title }}</h1>
            <p class="description"> {{ articles.description }} </p>

        </div>
        <div class="md-box">
            <ContentDoc :path="filePath" />
            <PrevNext :prev="prev" :next="next" />
            <div>&nbsp;</div>
        </div>
    </article>
</template>

<script setup>
const { params } = useRoute()
const filePath = ref(`/articles/${params.slug}`)
// 获取当前文章
const { data: articles } = await useAsyncData('articles', () => queryContent('articles').where({ _path: filePath.value }).findOne())

// 获取上一章下一章

const { data: prevNuxt } = await useAsyncData(() => queryContent('articles').sort({ createdAt: 1 }).findSurround(filePath.value))
const [prev, next] = prevNuxt.value

console.log(prevNuxt.value, prev);

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    return new Date(date).toLocaleDateString('en', options)
}

// console.log(articles);

</script>

<style lang="scss" scoped>
.post-article {
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-width: 785px;
    overflow: hidden;


    .header {
        position: relative;
        width: 100%;
        // height: 42rem;


        img {
            display: block;
            // position: absolute;
            width: 100%;
            // height: 100%;
        }

        .desc {
            display: flex;
            position: absolute;
            top: 16px;
            left: 16px;
            color: #fff;
        }

        .title {
            position: absolute;
            left: 1rem;
            top: 20%;
            font-size: 48px;
            color: #fff;
            font-weight: 900;
            // z-index: 999;
        }

        .description {
            position: absolute;
            left: 1rem;
            top: calc(20% + 80px);
            color: #999;
        }
    }

    .md-box {
        padding: 0 20px 20px;
    }
}



@media (min-width: 992px) {
    .post-article {
        max-width: 100vw;
        flex-direction: row;
        max-height: calc(100vh - 70px);
        overflow: hidden;

        .md-box {
            flex: 1;
            padding: 0;
            margin-left: 15px;
            height: calc(100vh - 60px);
            overflow: auto;
        }

        .header {
            flex: 1;
            width: 50vw;
            height: calc(100vh - 60px);

            img {
                height: 100%;
            }
        }
    }
}
</style>
