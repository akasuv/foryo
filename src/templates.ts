import { v4 as uuid } from "uuid";
export const templates = [
  {
    imageSrc:
      "https://cdn.vox-cdn.com/thumbor/xCY7CYlUfkCvLrSUUj5p3ex-Hj0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21786368/GreatPretender_006.png",
    title: "Great Pretender",
    description:
      "Makoto Edamura, supposedly Japan's greatest swindler, gets more than he bargained for when he tries to con real world-class crook Laurent Thierry.\n",
  },
  {
    imageSrc:
      "https://cdn.bagogames.com/wp-content/uploads/2020/06/12194023/great-pretender.png?strip=all&lossy=1&resize=1440%2C805&ssl=1",
    title: "Great Pretender",
    description:
      "Makoto Edamura, supposedly Japan's greatest swindler, gets more than he bargained for when he tries to con real world-class crook Laurent Thierry.\n",
  },
  {
    imageSrc:
      "https://thehollywoodtribune.com/wp-content/uploads/2020/08/Great-Pretender-5.jpg",
    title: "Great Pretender",
    description:
      "Makoto Edamura, supposedly Japan's greatest swindler, gets more than he bargained for when he tries to con real world-class crook Laurent Thierry.\n",
  },
].map(getLayout);

function getLayout(item, index) {
  const layouts = [
    {
      id: uuid(),
      type: "Card",
      props: {
        classes: {},
        className: "template",
        children: [
          {
            type: "CardActionArea",
            props: {
              classes: {},
              children: [
                {
                  type: "CardMedia",
                  props: {
                    classes: {},
                    component: "img",
                    alt: item.title,
                    height: "140",
                    image: item.imageSrc,
                    title: item.title,
                  },
                },
                {
                  type: "CardContent",
                  props: {
                    classes: {},
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          style: {
                            fontWeight: 900,
                          },
                          gutterBottom: true,
                          variant: "h5",
                          component: "h2",
                          children: [item.title],
                        },
                      },
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: [item.description],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "CardActions",
            props: {
              classes: {},
              children: [
                {
                  type: "Button",
                  props: {
                    classes: {},
                    size: "small",
                    color: "primary",
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: ["Share"],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Button",
                  props: {
                    classes: {},
                    size: "small",
                    color: "primary",
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: ["like"],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: uuid(),
      type: "Card",
      props: {
        classes: {},
        className: "template",
        children: [
          {
            type: "CardActionArea",
            props: {
              classes: {},
              children: [
                {
                  type: "CardContent",
                  props: {
                    classes: {},
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: [item.description],
                        },
                      },
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          style: {
                            fontWeight: 900,
                            textAlign: "end",
                          },
                          gutterBottom: true,
                          variant: "h5",
                          component: "h2",
                          children: [item.title],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "CardMedia",
                  props: {
                    classes: {},
                    component: "img",
                    alt: item.title,
                    height: "140",
                    image: item.imageSrc,
                    title: item.title,
                  },
                },
              ],
            },
          },
          {
            type: "CardActions",
            props: {
              classes: {},
              style: {
                display: "flex",
                justifyContent: "flex-end",
              },
              children: [
                {
                  type: "Button",
                  props: {
                    classes: {},
                    size: "small",
                    color: "primary",
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: ["Share"],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Button",
                  props: {
                    classes: {},
                    size: "small",
                    color: "primary",
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: ["like"],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: uuid(),
      type: "Card",
      props: {
        classes: {},
        className: "template",
        children: [
          {
            type: "CardActionArea",
            props: {
              classes: {},
              children: [
                {
                  type: "CardContent",
                  props: {
                    classes: {},
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          style: {
                            textAlign: "center",
                            fontWeight: 900,
                          },
                          gutterBottom: true,
                          variant: "h5",
                          component: "h2",
                          children: [item.title],
                        },
                      },
                      {
                        type: "Typography",
                        props: {
                          style: {
                            textAlign: "center",
                          },
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: [item.description],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "CardMedia",
                  props: {
                    classes: {},
                    component: "img",
                    alt: item.title,
                    height: "140",
                    image: item.imageSrc,
                    title: item.title,
                  },
                },
              ],
            },
          },
          {
            type: "CardActions",
            props: {
              classes: {},
              style: {
                display: "flex",
                justifyContent: "center",
              },
              children: [
                {
                  type: "Button",
                  props: {
                    classes: {},
                    size: "small",
                    color: "primary",
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: ["Share"],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Button",
                  props: {
                    classes: {},
                    size: "small",
                    color: "primary",
                    children: [
                      {
                        type: "Typography",
                        props: {
                          classes: {},
                          gutterBottom: true,
                          variant: "body2",
                          component: "p",
                          color: "textSecondary",
                          children: ["like"],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];
  return layouts[index];
}
