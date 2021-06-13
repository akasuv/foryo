import { v4 as uuid } from "uuid";
export const templates = [
  {
    id: uuid(),
    type: "Card",
    props: {
      classes: {},
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
                  alt: "Contemplative Reptile",
                  height: "140",
                  image:
                    "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-neon-genesis-evangelion-asuka.jpg",
                  title: "Contemplative Reptile",
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
                        gutterBottom: true,
                        variant: "h5",
                        component: "h2",
                        // children: ["Lizard"],
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
                        /*
                                            children: [
                                              `
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica`,
                                            ],
                      */
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
                  // children: ["share"],
                },
              },
              {
                type: "Button",
                props: {
                  classes: {},
                  size: "small",
                  color: "primary",
                  // children: ["share"],
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
                  alt: "Contemplative Reptile",
                  height: "140",
                  image:
                    "https://cdn.vox-cdn.com/thumbor/xCY7CYlUfkCvLrSUUj5p3ex-Hj0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21786368/GreatPretender_006.png",
                  title: "Contemplative Reptile",
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
                        gutterBottom: true,
                        variant: "h5",
                        component: "h2",
                        // children: ["Lizard"],
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
                        /*
                                                                    children: [
                                                                      `
                                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                                species, ranging across all continents except Antarctica`,
                                                                    ],
                                              */
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
                  // children: ["share"],
                },
              },
              {
                type: "Button",
                props: {
                  classes: {},
                  size: "small",
                  color: "primary",
                  // children: ["share"],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
