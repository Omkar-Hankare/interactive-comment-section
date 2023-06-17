export const SAMPLE = "SAMPLE";

export const COMMENTS = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    lastModified: "1 month ago",
    votes: 12,
    user: {
      image: {
        png: "/images/avatars/image-amyrobson.png",
        webp: "/images/avatars/image-amyrobson.webp",
      },
    },
    userName: "amyrobson",
    children: [
      {
        id: 64,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        lastModified: "1 week ago",
        votes: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "/images/avatars/image-ramsesmiron.png",
            webp: "/images/avatars/image-ramsesmiron.webp",
          },
        },
        userName: "ramsesmiron",
        children: [
          {
            id: 1,
            content:
              "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            lastModified: "1 month ago",
            votes: 12,
            user: {
              image: {
                png: "/images/avatars/image-amyrobson.png",
                webp: "/images/avatars/image-amyrobson.webp",
              },
            },
            userName: "amyrobson",
          },
        ],
      },
      {
        id: 78,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        lastModified: "1 week ago",
        votes: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "/images/avatars/image-ramsesmiron.png",
            webp: "/images/avatars/image-ramsesmiron.webp",
          },
        },
        userName: "ramsesmiron",
        children: [],
      },
    ],
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    lastModified: "2 weeks ago",
    votes: 5,
    userName: "maxblagun",
    user: {
      image: {
        png: "/images/avatars/image-maxblagun.png",
        webp: "/images/avatars/image-maxblagun.webp",
      },
    },
    children: [
      {
        id: 3,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        lastModified: "1 week ago",
        votes: 4,
        replyingTo: "maxblagun",
        user: {
          image: {
            png: "/images/avatars/image-ramsesmiron.png",
            webp: "/images/avatars/image-ramsesmiron.webp",
          },
        },
        userName: "ramsesmiron",
      },
      {
        id: 4,
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        lastModified: "2 days ago",
        votes: 2,
        replyingTo: "ramsesmiron",
        user: {
          image: {
            png: "/images/avatars/image-juliusomo.png",
            webp: "/images/avatars/image-juliusomo.webp",
          },
        },
        userName: "juliusomo",
      },
    ],
  },
];
