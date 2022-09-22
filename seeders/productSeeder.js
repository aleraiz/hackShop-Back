const { Product } = require("../models");
const slugify = require("slugify");

module.exports = async function () {
  const products = [
    {
      productName: "Platycerium bifurcatum M-15",
      description:
        "Platycerium bifurcatum, is a plant also known as Platicerio or Elkhorn, because of the resemblance of its leaves with the antlers of these mammals. It is a fern that is usually used as a hanging plant, the ideal location for the plant is in a luminous place but with an indirect light, since a direct solar incidence can damage the leaves. The watering should be abundant, it needs that the substrate is constantly humid. The ideal is to make a weekly irrigation, submerging the pot during 15-20 minutes in a bucket with water and letting drain later. However, if we opt for a traditional irrigation we have to water it almost daily and without wetting the leaves.It is a plant that requires fairly stable temperatures, although it adapts well in temperatures ranging from 15-30 ºC, so at home it will be perfectly.We should not clean the leaves that have a slight hairy layer. This layer is to avoid excessive evaporation and if we remove it we will damage the plant.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610138/ecommerce/v8fud5cxreod3topstov.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610380/ecommerce/oth803tzvvplw6iyalky.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610447/ecommerce/e21x3dmafzyaj7wzl22r.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610138/ecommerce/v8fud5cxreod3topstov.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610380/ecommerce/oth803tzvvplw6iyalky.png",
      ],
      price: 4.6,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
    {
      productName: "Blechnum silver lady M-15",
      description:
        "Blechnum silver lady, known as lady plant, is a very elegant fern for its large light green leaves and beautiful symmetry.It is a fast growing fern, planted in pot or planter to decorate the interior of the house, or directly in the garden.It is a houseplant in humid, illuminated and ventilated place. It can also be placed outdoors in semi-shade or shade, where it does not receive direct sun and has sufficient moisture.The Blechnum lady plant, is a plant that requires enough moisture and well-drained soil, so it is recommended to spray it and water it at the base with a container with water that we will remove once it has absorbed the necessary.Dry environments produced by heating, harmful to the fern, should be avoided.It does not tolerate cold temperatures, wind and frost.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611481/ecommerce/u12erdjgb4qebmbe1cvc.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612275/ecommerce/kmgvpaz9zqmxxp6h8ur1.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612290/ecommerce/t5btgns50spjfl6bsrod.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611411/ecommerce/w9f3gvktkzv7mpn1ezt7.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611453/ecommerce/azsgvwlsfrzbx74sohir.png",
      ],
      price: 6.65,
      featured: true,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Coleus gigante M-15",
      description:
        "Coleus giganteus is a variant of the original Coleus but differs in that its leaves are larger.Also called Coleo, it is a seasonal plant that should be located in semi-shade, where it does not receive direct sun but enough lighting. The striking colors of its leaves, make the Coleus a perfect ornamental plant to brighten up the home.its watering should be moderate, they do not need a lot of water but keep the substrate moist avoiding puddles.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612127/ecommerce/mnpuqlrbsecdpzfxuebm.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612153/ecommerce/qsl1gfcfqxpcvxqsgtej.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612200/ecommerce/buhizexdlonb0u4dcqbn.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612063/ecommerce/wjs7awh67ge7rmebefns.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612101/ecommerce/k5w995zmfzaxipv9olmy.png",
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Calibrachoa M-13",
      description:
        "Calibrachoa, known as petunia calibrachoa, is a spectacular hanging plant with an abundant and colorful flowering ideal for growing in terrines, planters, pots ... and place it on terraces, balconies .... It has a long flowering, from the beginning of spring until the end of autumn and has a wide range of colors ranging from pinks, purples, whites, yellows, oranges ... So that it blooms more abundantly it is necessary to clean it of withered flowers. It is an outdoor plant, in full sun or semi-shade. Watering should be moderate but regular during the flowering period. Avoid waterlogging and it is not advisable to wet the flowers. In winter it is convenient to shelter it, since it supports the cold but not the frosts. ",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612540/ecommerce/zlvtjkhbi9kbzh2sloda.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612552/ecommerce/lwcbq2pwcimh14joo6lu.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612570/ecommerce/ezfkjff6fd0v2pbnvlsy.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612501/ecommerce/hv697ou3ori7vm7hbnug.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663612520/ecommerce/y06ps1tks0uo4gnhp3gp.png",
      ],
      price: 6.6,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
    {
      productName: "Phlebodium aureum M-15",
      description:
        "Phlebodium aureum blue star, known as palm fern, is a variety of fern very elegant for its large blue-green leaves with wavy margins.The showiness of its leaves makes this fern an ideal plant to decorate the interior of the house.It is a houseplant in humid and illuminated place.It can also be placed outdoors in shade or semi-shade, where it does not receive direct sun and has sufficient moisture.The phlebodium is a plant that needs plenty of moisture, so it is recommended to spray and water it. It can also be placed outdoors in shade or semi-shade, where it does not receive direct sun and has sufficient moisture.The phlebodium is a plant that needs enough moisture, so it is recommended to spray it and water it at the base with a container with water that we will remove once it has absorbed the necessary.Dry environments produced by heating should be avoided, harmful to the fern.It does not tolerate cold temperatures, wind and frost, as well as sudden changes in temperature.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613121/ecommerce/mwils6dk6hoinjjapeib.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613135/ecommerce/whcwjabiymml3sax8mpf.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613150/ecommerce/hnesc821z39z0trx3gux.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613090/ecommerce/zpiejpk0x4fojawtmpm5.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613103/ecommerce/fyxsboylkuffgxfrqol9.png",
      ],
      price: 6.6,
      featured: true,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Gerbera M-15",
      description:
        "Gerbera, also known as African Daisy, is a plant with large flowers similar to the daisy flower and in a wide range of colors.Where to place it.This is an outdoor plant in semi-shade or for lighted interiors.Light/Temperature.It needs moderate light, i.e., semi-shade. It is a plant sensitive to cold and needs a warm climate.Soil/Soil.It needs a well-drained soil. A fertilizer is recommended in the spring and summer months, with liquid organic fertilizer.Watering.Excess water is detrimental to the plant, therefore it needs moderate watering. Substrate moist but not excessive.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613475/ecommerce/pq5rw3wlgd95svbdtd4w.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613492/ecommerce/sw1ghvvnwwfb5akx3brb.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613504/ecommerce/slze1agya3geu1texm8i.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613445/ecommerce/zbxnxgvmfeq8ufkxo3rz.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613461/ecommerce/sywnfisi3g43bs4odcvl.png",
      ],

      price: 4.99,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Petunia grandiflora M-15",
      description:
        "Mixed two plants of different colors in the same pot.Petunia grandiflora, is one of the most well-known and popular plants both for its abundant flowering of a wide range of colors, for its easy cultivation. It is a seasonal plant, whose leaves are oval light green and its flowers ranging from red, pink, blue, purple, purple, bicolor...., which appear in early spring and remain until late autumn. Petunia is an ornamental plant, used in pots to decorate balconies and windows and forming borders in gardens. It is an outdoor plant, preferably in full sun or semi-shade, and in winter it is advisable to shelter it, as it withstands the cold but not frost. Its watering should be abundant, without wetting the flowers and avoiding watering in the central hours.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613836/ecommerce/bcdau9nhthe6sshdq3tl.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613846/ecommerce/lcq2344tnxjvssq2peee.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613939/ecommerce/itl1tbskhbh23i80ufxy.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613804/ecommerce/najiccygqygusstincgj.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663613822/ecommerce/r0wm2pzbjau7kf0mdspf.png",
      ],
      price: 3.65,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
    {
      productName: "Celosia plumosa M-15",
      description:
        "Celosia argentea plumosa, known as feathery celosia, celosia, feathery amaranth, cockscomb, plume, is a beautiful annual herbaceous plant commonly grown in pots, planters and used as a fresh or dried cut flower.This plant has an erect stem with lance-shaped, long, light green, lance-like leaves. Its feathery flowers are small and dense and are borne in very colorful tufts.The feathery celosia begins to bloom from late spring until autumn, and the shades of its flowers can be yellow, orange, pink, red ... It is an outdoor plant in full sun, so it will bloom abundantly. It is advisable to clean it of faded flowers.Once it blooms, it can be placed indoors in a well-lit place.The feathery celosia needs constant watering, always keeping the soil moist.It does not tolerate drafts and intense cold. It does not tolerate frost.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663607619/ecommerce/n7plsaxmj0plldjav4ks.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663607654/ecommerce/xwt4wohvsin4v8afdd6z.webp",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663607876/ecommerce/dnuaeyycizm4rksks4hr.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663607423/ecommerce/zmkjt8vbze6r5qchijq7.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663607451/ecommerce/mhtwb5qu3ot8yseyuhqr.png",
      ],
      price: 8.7,
      featured: true,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Kalanchoe M-11",
      description:
        "Kalanchoe blossfediana, known as Kalanchoe, Calanchoe or Scarlet, is a small ornamental plant, very easy to grow and very popular for its abundant flowering that lasts almost all year round and the colorful flowers. Its leaves are thick and fleshy and its flowers are arranged in clusters or simple bouquets of pink, orange, white. It is an outdoor plant in semi-shade, since the direct sun of half a day can damage it, it can also be located indoors in areas with enough light. Watering should be moderate, allowing the substrate to dry between watering, excess water is harmful. It does not support the cold, it develops better with warm temperatures.",

      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663681765/ecommerce/nawciwvyidq6uhbfi2xb.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663681790/ecommerce/wfaem72eiqac8nhugamu.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663681803/ecommerce/leib96s8hqm5srzkeopn.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663681734/ecommerce/bxbkdyv0cjegglgv3vdh.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663681748/ecommerce/y3xa4kg21jgppx6ooafz.png",
      ],
      price: 3.05,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Portulaca umbraticola tarrina 15",
      description:
        "Portulaca Umbraticola is a creeping plant used to upholster small areas of gardens. Its leaves are lanceolate in shape and its flowers of 5 petals can be of various colors, such as yellow, red or orange. Its location is outdoors in full sun, so it is ideal for decorating gardens, balconies and terraces, although it can also be in semi-shade as long as there is plenty of light. In winter it is advisable to protect it from cold and frost. Watering should be frequent in summer, while in winter it should be reduced depending on the area. In addition, it is necessary to avoid stagnant water.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608325/ecommerce/x7ik93u1q4jvgrufcfay.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608354/ecommerce/f4kk3yz3noeze2o8qrxt.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608476/ecommerce/qzoag6lglsz4i0khpyuf.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608205/ecommerce/rkswxlvpzghz5jgmhox4.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608170/ecommerce/xwbkun9zn6yuizcsngdv.png",
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Osteospermum (dimorfoteca) M-15",
      description:
        "The dimorphotheca is a shrubby plant, fast growing, very hardy and easy to grow. Its flower is very similar to that of the daisy, with a darker center and bright pink, lilac and white colors, blooming from winter to spring. The flower of the dimorphotheca closes at night. It is an outdoor plant in full sun, in climates with mild temperatures. It does not tolerate hard frosts. Its irrigation should be moderate in well-drained soil, to avoid excess moisture and waterlogging. It tolerates some drought.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608737/ecommerce/vetczj0pym6urpgmwxnf.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608758/ecommerce/cpz4xepvl9lzn78zivba.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608778/ecommerce/cntkyevldrbwuhnhyxqa.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608688/ecommerce/tnr0mzkrcnfm35tm4ysf.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663608663/ecommerce/tbgqu2vnaspoqf3ws9rq.png",
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Crassula T-15",
      description:
        "Crassulas are a variety of succulents. They are very resistant plants whose main characteristic is their capacity to store water thanks to their fleshy leaves, but also to their roots and stems. It is a very resistant plant, which needs very little care. However, they have very attractive and ornamental shapes. Where to place it? It can be placed both outdoors and indoors. It is a real all-rounder. Light/Temperature: Light is one of its main requirements. They appreciate indirect light since a very direct sun can burn their leaves. It can withstand a wide range of temperatures, even the highest. Soil/Soil: They are plants that grow even on rocks. They need a poor soil, with few minerals. A good idea would be to mix the substrate with sand.Watering: The substrate of the succulent should have a good drainage. We should only water when the substrate is about to be completely dry. In summer we can increase the frequency, but always bearing in mind that they do not need much water. ",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663609414/ecommerce/ujhb22oicfgw6k5ada1y.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663609856/ecommerce/sh7ho7d1c6gmn2fhfrno.webp",
        "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663609381/ecommerce/qebq2t31exnwlrxu4z0b.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663609358/ecommerce/z1296g9omzxa2wzyugfw.png",
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Alternanthera purple M-15",
      description:
        "The Alternanthera purple plant is also known by the common name of coquette. Its main attraction are its leaves in purple tones and oval shape. It also presents flowering periods but they are not the most outstanding aspect of this plant, however its flowers are small and white. Its frequent use is as a ground cover or to create color contrasts in gardens. Where to place it? It is a perfect outdoor plant for gardens. Although we can also place it in pots in terraces or patios. Light/Temperature: It is a plant that needs full sun exposure to develop in all its fullness. Being a tropical plant, it needs temperate climates and does not tolerate cold weather. Soil/Soil: It needs a well-drained and soft soil with a certain richness in organic matter. During the spring it is convenient to add some mineral fertilizer every two weeks. Watering: It does not need much watering, it is necessary to wait until the substrate is almost dry between waterings. The important thing is that it is never waterlogged.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610435/ecommerce/tgdtn00ddmtvzkt4jxdf.webp",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610193/ecommerce/gvajbxtg4kwbu7johimc.jpg",
        " https://res.cloudinary.com/mdeluca/image/upload/v1663610435/ecommerce/tgdtn00ddmtvzkt4jxdf.webp",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610071/ecommerce/u20waxoqlvrlwi5iz4s7.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610110/ecommerce/xrradidewqntjdndu2me.png",
      ],
      price: 6.6,
      stock: 15,
      featured: false,
      categoryId: 1,
    },
    {
      productName: "Petunia grandiflora M-11",
      description:
        "It is a seasonal plant, whose leaves are light green oval and its flowers ranging from red, pink, blue, purple, purple, bicolor...., which appear in early spring and remain until late autumn. Petunia is an ornamental plant, used in pots to decorate balconies and windows and forming borders in gardens. It is an outdoor plant, preferably in full sun or semi-shade, and in winter it is advisable to shelter it, as it withstands the cold but not frost. Watering should be abundant, without wetting the flowers and avoiding watering in the central hours of the day.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663685662/ecommerce/nyocwgrwbelitf9nupnu.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663685672/ecommerce/xnaltmlwbexleflig8cu.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611066/ecommerce/wzpi2iycfyeokqethqjm.webp",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610937/ecommerce/axybafxvikuw4alxwiw8.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663610957/ecommerce/srasuasqekwsrqnzp1qq.png",
      ],
      price: 6.6,
      featured: true,
      stock: 15,
      categoryId: 2,
    },

    {
      productName: "Euphorbia milii M-13",
      description:
        " Euphorbia mili, commonly known as Crown of Thorns or Thorn of Christ, is a shrub with branched and thorny stems (hence its common name), whose leaves are oval and light green. The Crown of Thorns produces small yellow, red, white, etc... flowers, grouped in clusters practically all year round. The Thorn of Christ is an ornamental plant whose attraction are the showy bracts that surround its flowers and that are of intense colors, ranging from red, pink, yellow, white and orange. It is an ideal outdoor plant to place in gardens or balconies in full sun or semi-shade. It is also widely used as an indoor plant in places where it receives plenty of light and some direct sun. Euphorbia should be watered moderately and sparingly in winter, avoiding waterlogging of the substrate due to root rot. It is very resistant to drought. It does not support cold temperatures, the Euphorbia that is outdoors, will have to be sheltered from cold and frost. Euphorbia has a milky liquid (Latex), irritating and caustic, so avoid contact with skin and eyes and ingestion.",
      image: [
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611780/ecommerce/rrutgdqevsvesypdcvva.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611780/ecommerce/rrutgdqevsvesypdcvva.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611780/ecommerce/rrutgdqevsvesypdcvva.jpg",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611718/ecommerce/puvqvddu5wj627wikbpp.png",
        "https://res.cloudinary.com/mdeluca/image/upload/v1663611739/ecommerce/jlvkp5mqsa7lw0te5a1t.png",
      ],
      price: 3.65,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
  ];
  await Product.bulkCreate(products);
};
