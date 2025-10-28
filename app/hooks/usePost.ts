// "use client"
// import {useMemo } from 'react';
// import {useRecoilValue } from 'recoil';
// // import { categoriesState } from '@/states/categories';
// // import { pageState } from '@/states/page';
// // import { queryState } from '@/states/query';
// // import { Post } from '@/types/post';
// import { Post } from '@/app/types/post';
// // import { search } from '@/utils/search';
// // import { toUniqueArray } from '@/utils/to-unique-array';
// import { pageState } from '../states/page';
// import { toUniqueArray } from '../utils/to-unique-array';

// const POST_PER_PAGE = 6;

// export default function usePosts(allPosts: Post[]) {
//   const page = useRecoilValue(pageState);
// //   const query = useRecoilValue(queryState);
// //   const [categories, setCategories] = useRecoilState(categoriesState);

//   const allPostsFiltered = useMemo(
//     () =>
//       allPosts.filter((post) => {
//         if (!post.published) {
//           return false;
//         }
//         // if (query && !search(post.title, query)) {
//         //   return false;
//         // }

//         // if (categories.selected.length) {
//         //   const isCategoryMatch = categories.selected.every((cat) =>
//         //     post.categories.includes(cat)
//         //   );
//         //   if (!isCategoryMatch) {
//         //     return false;
//         //   }
//         // }
//         return true;
//       }),
//     [allPosts]
//   );
// //   allPostsFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

//   const totalPages = Math.ceil(allPostsFiltered.length / POST_PER_PAGE);
//   const offset = (page ? +page - 1 : 0) * POST_PER_PAGE;
//   const postsForCurrentPage = allPostsFiltered.slice(
//     offset,
//     offset + POST_PER_PAGE
//   );

//   return {
//     posts: postsForCurrentPage,
//     totalPages,
//   };
// }
