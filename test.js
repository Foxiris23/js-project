'use strict';

const video = ["youtube", "vimeo", "rutube"],
      blog = ["wordpress", "journal", "blogger"],
      internet = [...video, ...blog, 'vk', 'facebook'];

console.log(internet);

const obj={
    a: 1,
    b: 2
};

const obj2 = {...obj};

console.log(obj2);

obj2.a=2;

console.log(obj2);
console.log(obj);