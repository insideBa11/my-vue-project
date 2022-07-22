import loadingUrl from "@/assets/loading.svg";
// const loadingUrl = require("@/assets/loading.svg");

import styles from "./loading.module.less";
// const styles = require("./loading.module.less")

export default function (el, binding) {
    const curImg = el.querySelector('img[data-role=loading]'); // 获取文档中有 "data-role=loading" 属性的第一个<img>元素
    if (binding.value && !curImg) {
        const img = document.createElement('img');
        // HTMLElement.dataset 属性允许读写在 HTML或 DOM中的元素上设置的所有自定义数据属性(data-*)集。
        // 请注意，dataset 属性本身可以被读取，但不能直接写入。相反，所有的写入必须是它的“属性”，这反过来表示数据属性。
        // 还要注意，一个HTML data-attribute 及其对应的DOM dataset.property 不共享相同的名称，但它们总是相似的：
        // 最后该注意，该属性部支持驼峰命名，在解析的时候，所有的大写字母会被解析成小写。
        img.dataset.role = 'loading'; // 写入一个自定义属性，为了能使用querySelector来捕获元素
        img.src = loadingUrl;
        img.className = styles.loading;
        el.appendChild(img);
        console.log(img,loadingUrl);
    } else if (!binding.value && curImg) curImg.remove()
}