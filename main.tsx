/** @jsx h */

import blog, {h} from "./blog.tsx";

blog({
    title: "alex's haikus",
    description: "haikus about tech and stuff",
    showHeaderOnPostPage: true,
    avatar: "https://cdn.upload.systems/uploads/05VxMRfA.png",
    avatarClass: "rounded-full",
    author: "Alex",
    lang: "en",
    links: [
        {
            title: "Email",
            url: "mailto:haikus@alexaa.dev"
        },
        {
            title: "GitHub",
            url: "https://github.com/minsk-dev"
        },
        {
            title: "Twitter",
            url: "https://twitter.com/alexsyntaxtree"
        },
        {
            title: "Curriculum",
            url: "https://alexaa.dev"
        }
    ],
});
