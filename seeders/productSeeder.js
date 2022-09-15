const { Product } = require("../models");
const slugify = require("slugify");

module.exports = async function () {
  const productName = "Platycerium bifurcatum M-15";
  const products = [
    {
      productName: "Platycerium bifurcatum M-15",
      description:
        "Platycerium bifurcatum, is a plant also known as Platicerio or Elkhorn, because of the resemblance of its leaves with the antlers of these mammals. It is a fern that is usually used as a hanging plant, the ideal location for the plant is in a luminous place but with an indirect light, since a direct solar incidence can damage the leaves. The watering should be abundant, it needs that the substrate is constantly humid. The ideal is to make a weekly irrigation, submerging the pot during 15-20 minutes in a bucket with water and letting drain later. However, if we opt for a traditional irrigation we have to water it almost daily and without wetting the leaves.It is a plant that requires fairly stable temperatures, although it adapts well in temperatures ranging from 15-30 ºC, so at home it will be perfectly.We should not clean the leaves that have a slight hairy layer. This layer is to avoid excessive evaporation and if we remove it we will damage the plant.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(3).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/platycerum-cuerno-alce_(1).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
        },
      ],
      price: 4.6,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
    {
      productName: "Blechnum silver lady (helecho) M-15",
      description:
        "Blechnum silver lady, known as lady plant, is a very elegant fern for its large light green leaves and beautiful symmetry.It is a fast growing fern, planted in pot or planter to decorate the interior of the house, or directly in the garden.It is a houseplant in humid, illuminated and ventilated place. It can also be placed outdoors in semi-shade or shade, where it does not receive direct sun and has sufficient moisture.The Blechnum lady plant, is a plant that requires enough moisture and well-drained soil, so it is recommended to spray it and water it at the base with a container with water that we will remove once it has absorbed the necessary.Dry environments produced by heating, harmful to the fern, should be avoided.It does not tolerate cold temperatures, wind and frost.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/blechnum_silver_lady.JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/helecho_silver_lady.JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/planta_se%C3%B1ora.JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-3-270x300.jpg",
        },
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
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(1).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-3-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Phlebodium aureum (helecho) M-15",
      description:
        "Phlebodium aureum blue star, known as palm fern, is a variety of fern very elegant for its large blue-green leaves with wavy margins.The showiness of its leaves makes this fern an ideal plant to decorate the interior of the house.It is a houseplant in humid and illuminated place.It can also be placed outdoors in shade or semi-shade, where it does not receive direct sun and has sufficient moisture.The phlebodium is a plant that needs plenty of moisture, so it is recommended to spray and water it. It can also be placed outdoors in shade or semi-shade, where it does not receive direct sun and has sufficient moisture.The phlebodium is a plant that needs enough moisture, so it is recommended to spray it and water it at the base with a container with water that we will remove once it has absorbed the necessary.Dry environments produced by heating should be avoided, harmful to the fern.It does not tolerate cold temperatures, wind and frost, as well as sudden changes in temperature.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(1).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(2).JPG",
        },
        {
          imageThree: "",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-5-270x300.jpg",
        },
      ],
      price: 6.6,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
    {
      productName: "Phlebodium aureum (helecho) M-15",
      description:
        "Phlebodium aureum blue star, known as palm fern, is a variety of fern very elegant for its large blue-green leaves with wavy margins.The showiness of its leaves makes this fern an ideal plant to decorate the interior of the house.It is a houseplant in humid and illuminated place.It can also be placed outdoors in shade or semi-shade, where it does not receive direct sun and has sufficient moisture.The phlebodium is a plant that needs plenty of moisture, so it is recommended to spray and water it. It can also be placed outdoors in shade or semi-shade, where it does not receive direct sun and has sufficient moisture.The phlebodium is a plant that needs enough moisture, so it is recommended to spray it and water it at the base with a container with water that we will remove once it has absorbed the necessary.Dry environments produced by heating should be avoided, harmful to the fern.It does not tolerate cold temperatures, wind and frost, as well as sudden changes in temperature.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(1).JPG",
        },
        {
          imageThree: "",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-5-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-6-270x300.jpg",
        },
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
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/gerbera_jamesoni_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/gerbera_jamesoni_(3).JP",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/gerbera_jamesoni_(5).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-6-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-7-270x300.jpg",
        },
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
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/petunia_grandiflora_(1).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/petunia_2_colores.JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/petunia_bicolor.JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-7-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        },
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
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/celosia_plumosa_(1).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/celosia_plumosa_(2).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/celosia_plumosa_(2).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
        },
      ],
      price: 8.7,
      featured: true,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Amaranthus hybridus",
      description:
        "It is an annual herb, with erect stems, glabrous below, becoming subglabrous or sparsely pubescent upwards with trichomes up to 1 mm long, very thin and irregularly folded; monoecious.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(1).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-9-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
      ],
      price: 8.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Amaranthus hybridus",
      description:
        "Es una hierba anual, con tallos erectos, glabros abajo, tornándose subglabros o escasamente pubescentes hacia arriba con tricomas de hasta 1 mm de largo, muy delgados e irregularmente doblados; monoicas.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(1).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-9-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Amaranthus hybridus",
      description:
        "Es una hierba anual, con tallos erectos, glabros abajo, tornándose subglabros o escasamente pubescentes hacia arriba con tricomas de hasta 1 mm de largo, muy delgados e irregularmente doblados; monoicas.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(1).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-9-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Amaranthus hybridus",
      description:
        "Es una hierba anual, con tallos erectos, glabros abajo, tornándose subglabros o escasamente pubescentes hacia arriba con tricomas de hasta 1 mm de largo, muy delgados e irregularmente doblados; monoicas.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(1).JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/coleo_gigante_(2).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-9-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
      ],
      price: 5.95,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Phlebodium aureum (helecho) M-15",
      description:
        "Phlebodium aureum blue star, conocido como helecho palma, es una variedad de helecho muy elegante por sus grandes hojas de color verde azulado con márgenes ondulados.La vistosidad de sus hojas hace a este helecho una planta ideal para decorar el interior de la vivienda.Es una planta de interior en lugar húmedo e iluminado. También puede situarse en exterior en sombra o semisombra, donde no reciba sol directo y disponga de suficiente humedad.El phlebodium es una planta que necesita bastante humedad, por lo que se recomienda pulverizarla y regarla por la base con un recipiente con agua que retiraremos una vez haya absorbido la necesaria.Se deben evitar los ambientes secos producidos por la calefacción, perjudiciales para el helecho.No tolera temperaturas frías, viento y heladas, así como los cambios bruscos de temperatura. ",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(1).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(2).JPG",
        },
        {
          imageThree: "",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-4-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-5-270x300.jpg",
        },
      ],
      price: 6.6,
      stock: 15,
      featured: false,
      categoryId: 1,
    },
    {
      productName: "Phlebodium aureum (helecho) M-15",
      description:
        "Phlebodium aureum blue star, conocido como helecho palma, es una variedad de helecho muy elegante por sus grandes hojas de color verde azulado con márgenes ondulados.La vistosidad de sus hojas hace a este helecho una planta ideal para decorar el interior de la vivienda.Es una planta de interior en lugar húmedo e iluminado. También puede situarse en exterior en sombra o semisombra, donde no reciba sol directo y disponga de suficiente humedad.El phlebodium es una planta que necesita bastante humedad, por lo que se recomienda pulverizarla y regarla por la base con un recipiente con agua que retiraremos una vez haya absorbido la necesaria.Se deben evitar los ambientes secos producidos por la calefacción, perjudiciales para el helecho.No tolera temperaturas frías, viento y heladas, así como los cambios bruscos de temperatura. ",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/phlebodium_(1).JPG",
        },
        {
          imageThree: "",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-5-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-6-270x300.jpg",
        },
      ],
      price: 6.6,
      featured: true,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Gerbera M-15",
      description:
        "Gerbera, también conocida como Margarita africana, es una planta con grandes flores similares a la flor de la margarita y en una amplia gama de colores.¿Dónde colocarla?.Se trata de una planta de exterior en semisombra o para interiores iluminados.Luz/Temperatura.Necesita luz moderada, es decir, semisombra. Se trata de una planta sensible al frío necesita un clima cálido.Suelo/Abonado.Necesita que la tierra esté bien drenada. Se recomienda un abonado en los meses de primavera y verano, con abono orgánico líquido.Riego.El exceso de agua es perjudicial para la planta, por lo tanto necesita un riego moderado. Sustrato húmedo pero sin excesos.",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/gerbera_jamesoni_(2).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/gerbera_jamesoni_(3).JP",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/gerbera_jamesoni_(5).JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-6-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-7-270x300.jpg",
        },
      ],

      price: 5.99,
      featured: false,
      stock: 15,
      categoryId: 2,
    },
    {
      productName: "Petunia grandiflora M-15",
      description:
        "  *Mezcladas dos plantas de distintos colores en la misma maceta.Petunia grandiflora, es una de las plantas más conocidas y populares tanto por su abundante floración de una amplia gama de colores, por su fácil cultivo. Es una planta de temporada, cuyas hojas son ovaladas de color verde claro y sus flores que van desde el rojo, rosa, azul, púrpura, bicolor…., que aparecen a principios de primavera y se mantienen hasta el final del otoño. La Petunia es una planta ornamental, utilizada en maceta para decorar balcones y ventanas y formando borduras en jardines. Es una planta de exterior, preferiblemente a pleno sol o en semisombra, y en invierno es aconsejable resguardarla, ya que soporta el frío pero no las heladas. Su riego debe ser abundante, sin mojar las flores y evitando el riego en las horas centrales",
      image: [
        {
          imageOne:
            "https://www.tusplantasonline.com/img/galeria/570/petunia_grandiflora_(1).JPG",
        },
        {
          imageTwo:
            "https://www.tusplantasonline.com/img/galeria/570/petunia_2_colores.JPG",
        },
        {
          imageThree:
            "https://www.tusplantasonline.com/img/galeria/570/petunia_bicolor.JPG",
        },
        {
          imageDetailOne:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-7-270x300.jpg",
        },
        {
          imageDetailTwo:
            "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        },
      ],
      price: 3.65,
      featured: false,
      stock: 15,
      categoryId: 1,
    },
  ];
  await Product.bulkCreate(products);
};
