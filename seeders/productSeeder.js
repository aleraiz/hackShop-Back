const { Product } = require("../models");
const slugify = require("slugify");

module.exports = async function () {
  const productName = "Platycerium bifurcatum M-15";
  const product = [
    {
      productName: "Platycerium bifurcatum M-15",
      description:
        "Platycerium bifurcatum, es una planta también conocida como Platicerio o Cuerno de alce, por el parecido de sus hojas con las astas de estos mamíferos. Se trata de un helecho que se suele utilizar como planta colgante.La ubicación ideal para la planta es en un lugar luminoso pero con un luz indirecta, ya que una incidencia solar directa puede dañar las hojas. Podemos tenerla perfectamente en interiores.El riego debe ser abundante, necesita que el sustrato este constantemente húmedo. Lo ideal es hacer un riego semanal, sumergiendo la maceta durante 15-20 minutos en un cubo con agua y dejando escurrir posteriormente. Sin embargo, si optamos por un riego tradicional tenemos que regarla casi a diario y sin mojar las hojas.Es una planta que requiere temperaturas bastante estables, aunque se adapta bien en temperaturas que oscilen de 15-30 ºC, por lo que en casa estará perfectamente.No debemos limpiar las hojas que tienen una ligera capa vellosa. Esta capa es para evitar una excesiva evaporación y si la quitamos dañaremos la planta.",
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
      price: "4.60",
      featured: false,
      slug: slugify(productName, {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
      categoryId: 1,
    },
    {
      productName: "Blechnum silver lady (helecho) M-15",
      description:
        "Blechnum silver lady, conocido como planta señora, es un helecho muy elegante por sus grandes hojas de color verde claro y bella simetría.Es un helecho de crecimiento rápido, plantado en maceta o jardinera para decorar el interior de la vivienda, o directamente en el jardín.Es una planta de interior en lugar húmedo, iluminado y ventilado. También puede situarse en exterior en semisombra o sombra, donde no reciba sol directo y disponga de suficiente humedad.El Blechnum planta señora,  es una planta que requiere bastante humedad y suelo bien drenado, por lo que se recomienda pulverizarla y regarla por la base con un recipiente con agua que retiraremos una vez haya absorbido la necesaria.Se deben evitar los ambientes secos producidos por la calefacción, perjudiciales para el helecho.No tolera las temperaturas frías, el viento y las heladas.",
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
      price: "6.65",
      featured: true,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
      categoryId: 2,
    },
    {
      productName: "Coleus gigante M-15",
      description:
        "El Coleus gigante es una variante del Coleus original pero difiere en que sus hojas son más grandes.También llamado Coleo, es una planta de temporada que debe ubicarse en semisombra, donde no reciba sol directo pero sí bastante iluminación. Los llamativos colores de sus hojas, hacen que el Coleus sea una planta ornamental perfecta para alegrar el hogar.Su riego debe de ser moderado, no necesitan de mucha agua pero si mantener el sustrato húmedo evitando los encharcamientos.",
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
      price: "5.95",
      featured: false,
      slug: slugify("Blechnum silver lady (helecho) M-15", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "6.60",
      featured: false,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "6,60",
      featured: true,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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

      price: "5.99",
      featured: false,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "3.65",
      featured: false,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
      categoryId: 1,
    },
    {
      productName: "Celosia plumosa M-15",
      description:
        "Celosia argentea plumosa, conocida como celosia plumosa, celosia, amaranto plumoso, cresta de gallo, penacho, es una bonita planta herbácea anual cultivada normalmente en macetas, jardineras y utilizada como flor cortada fresca o seca.Esta planta posee un tallo erecto con hojas en forma de lanza y largas de color verde claro. Sus flores en forma de plumas, son pequeñas y densas y nacen amontonándose en penachos muy coloridos.La celosía plumosa empieza a florecer desde finales de primavera hasta el otoño, y los tonos de sus flores pueden ser amarillos, naranjas, rosas, rojos…Es una planta de exterior a pleno sol, así florecerá abundantemente. Es conveniente limpiarla de flores marchitas.Una vez que florece, se puede colocar en el interior en un lugar bien iluminado.La celosía plumosa necesita un riego constante, manteniendo siempre el suelo húmedo.No tolera las corrientes de aire y el frio intenso. No soporta las heladas. ",
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
      price: "5.70",
      featured: true,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "5.95",
      featured: false,
      slug: slugify("Blechnum silver lady (helecho) M-15", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "5.95",
      featured: false,
      slug: slugify("Blechnum silver lady (helecho) M-15", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "5.95",
      featured: false,
      slug: slugify("Blechnum silver lady (helecho) M-15", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "5.95",
      featured: false,
      slug: slugify("Blechnum silver lady (helecho) M-15", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "6.60",
      featured: false,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "6,60",
      featured: true,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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

      price: "5.99",
      featured: false,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
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
      price: "3.65",
      featured: false,
      slug: slugify("productName", {
        replacement: "-",
        lower: true,
        strict: true,
        locale: "en",
        trim: true,
      }),
      categoryId: 1,
    },
  ];
  await Product.bulkCreate(product);
};
