import Home from '@/views/Home/'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import About from '@/views/About'
import Project from '@/views/Project'
import Detail from '@/views/Blog/Detail' // 文章页细节

export default [ // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    {name: 'Home', path: '/', component: Home, meta: {title: '首页'}},
    // 当匹配到路径 /bar 时，渲染 Bar 组件
    {name: 'Blog', path: '/blog', component: Blog, meta: {title: '文章'}},
    {name: 'CategoryBlog', path: '/blog/cate/:categoryId', component: Blog},
    {name: 'Detail', path: '/blog/:id', component: Detail, meta: {title: '博客详情'}},
    {name: 'Message', path: '/message', component: Message, meta: {title: '留言板'}},
    {name: 'About', path: '/About', component: About, meta: {title: '关于我'}},
    {name: 'Project', path: '/Project', component: Project, meta: {title: '项目&效果'}},
]