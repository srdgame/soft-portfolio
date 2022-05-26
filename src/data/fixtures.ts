export default {
  author: "Dirk Chang",
  hero: {
    subtitle: "物联网从业者",
    description: "专注于工业物联网领域，从事工业边缘计算网关产品、云边计算平台的探索和设计",
    cta: "查看作品",
  },
  products: {
    featured: [
      {
        name: "FreeIOE",
        medium: "开源 · 开放 · 灵活",
        summary: "FreeIOE 工业边缘计算网关产品",
        copy: [
          "开源的工业边缘计算网关产品，帮助客户快速形成云边计算架构的工业物联网产品."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://github.com/freeioe/freeioe"
          }
        },
        images: [
          "/freeioe/0.png",
          "/freeioe/1.png",
        ]
      },
      {
        name: "冬笋云平台",
        medium: "智能 · 免费 · 开放",
        summary: "冬笋科技运营的云边计算平台产品.",
        copy: [
          "冬笋科技基于 FreeIOE 构建的工业品质的 ThingsLink 边缘计算网关产品的配套云平台.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Try it",
            url: "http://cloud.iiot8.com/"
          }
        },
        images: [
          "/thingsroot/0.png",
          "/thingsroot/1.png",
          "/thingsroot/2.png",
          "/thingsroot/3.png",
          "/thingsroot/4.png",
        ]
      },
      {
        name: "KooIoT Cloud",
        medium: "Smart · Free · Customizable",
        summary: "Free and customizable cloud platform.",
        copy: [
          "The gateway device maintain cloud platform, support all FreeIOE inside gateway devices.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Try it",
            url: "http://iot.kooiot.cn/"
          }
        },
        images: [
          "/kooiot/0.png",
          "/kooiot/1.png",
          "/kooiot/2.png",
          "/kooiot/3.png",
          "/kooiot/4.png",
          "/kooiot/5.png",
          "/kooiot/6.png",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Document",
        description: "How to develop FreeIOE application?",
        link: {
          name: "Guide",
          url: "https://github.com/freeioe/freeioe_app_book"
        }
      },
      {
        name: "Discussion",
        description: "Join the discussion for making FreeIOE be better.",
        link: {
          name: "Forum",
          url: "http://freeioe.org"
        }
      },
      {
        name: "Hardware",
        description: "The third party hardwares supported by FreeIOE.",
        link: {
          name: "View",
          url: "/hardwares"
        }
      }
    ]
  },
  logoSection: {
    title: "Where to buy?",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/product/C202.png",
        url: "http://kooiot.com/",
        alt: "KooIoT"
      },
      {
        src: "/product/Q102.jpg",
        url: "http://www.thingsroot.com/",
        alt: "ThingsLink"
      },
      {
        src: "/logos/cashapp.svg",
        url: "/hardwares",
        alt: "Hardwares"
      }
  ]
  },
  footer: {
    tagline: "Dirk Chang — Beijing, China",
    beiAn: "京ICP备2021026964号",
    gongAn: "京公网安备 11010802035844号",
    gongAnID: "11010802035844",
    links: [
      {
        name: "Github",
        url: "https://github.com/samzx",
        fa: "fab fa-github"
      },
      {
        name: "Email",
        url: "mailto:dirk@kooiot.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}