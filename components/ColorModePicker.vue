<template>
    <div class="colormode-picker">
        <div>
            <ul>
                <li v-for="c of colors" :key="c.mode" :class="{
                    preferred: !$colorMode.unknown && c.mode === $colorMode.preference,
                    selected: !$colorMode.unknown && c.mode === $colorMode.value
                }">
                    <component :is="c.comp" @click="$colorMode.preference = c.mode" />
                </li>
            </ul>
        </div>

        <!-- 
        ColorScheme 组件, 如果你使用SSR渲染并且页面主题默认值 mode 为 system, 这时你又Vue模板中使用 $colorMode 时将会造成页面的闪烁, 
        因为在预呈现页面时无法知道用户的偏好,因为系统偏好是需要在客户端检测的

        为了避免闪烁,他就必须使用
        1.   $colorMode.unknown 保护任何依赖于 $colormode 的渲染路径, 

        2, ColorScheme 配合占位符 来渲染 $colormode 所依赖的渲染组件

     -->

        <!-- <p>
            <ColorScheme placeholder=" " tag="div">
                Color mode: <b>{{ $colorMode.preference }}</b>
                <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span>
            </ColorScheme>
        </p> -->
    </div>
</template>

<script setup>
import IconSystem from './IconSystem.vue'
import IconDark from './IconDark.vue'
import IconLight from './IconLight.vue'
import IconSepia from './IconSepia.vue'

const colors = [
    {
        mode: 'system',
        comp: IconSystem
    },
    {
        mode: 'light',
        comp: IconLight
    },

    {
        mode: 'dark',
        comp: IconDark
    },
    {
        mode: 'sepia',
        comp: IconSepia
    }
]

// const colorMode = useColorMode()

// console.log(colorMode.preference)


// const changeColorModel = (model) => {
//     colorMode.preference = model
// }

</script>


<style>
.colormode-picker ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.colormode-picker ul li {
    display: inline-block;
    padding: 5px;
    width: 48px;
    height: 48px;
}

.colormode-picker p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}

.colormode-picker .feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    width: 36px;
    height: 36px;
    /* width: 24px;
    height: 24px; */
    /* font-size: 36px; */
    border-radius: 5px;
    transition: all 0.1s ease;
}

.colormode-picker .feather:hover {
    top: -3px;
}

.colormode-picker .preferred .feather {
    border-color: var(--color-primary);
    top: -3px;
}

.colormode-picker .selected .feather {
    color: var(--color-primary);
}
</style>