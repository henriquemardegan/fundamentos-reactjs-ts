import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/henriquemardegan.png',
      name: 'Luiz Henrique Mardegan',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Esse é o texto do post.' },
      { type: 'paragraph', content: 'Beleza, mas e como funciona isso tudo?' },
      { type: 'link', content: 'https://maisumlink.com.br' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/billgates.png',
      name: 'Pedro da Mata',
      role: 'CSS Expert'
    },
    content: [
      { type: 'paragraph', content: 'Esse é o texto do post de exemplo, apenas um parágrafo de exemplo, curto e objetivo.' },
      { type: 'paragraph', content: 'Fique à vontade!' },
      { type: 'link', content: 'https://link.com.br' },
    ],
    publishedAt: new Date('2022-05-12 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}