const app = Vue.createApp({  //instancie Vuejs qui est le coeur de notre app Vue.Nous avons accès à cette instance grace au lien CDN de Vueque nous avons importé dans notre fichier index.html
    //la méthode createApp contiendra plusieurs options. Nous allons lui passer un objet qui contiendra une propriété 'data' qui  elle même retournera un objet danslequel nous stockerons nos données 

    data() {
        return {
            product: "Pizza",
            type: "Margarita",
            price: 12,
            image: "assets/images/pizza2.jpg",
            sale: true, //pour afficher prix soldé ou pas
            notAvailable: true, //pour indiquer si dispo en stock ou pas
            ingredients: [
                "Olives vertes",
                "Poulet roti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf",
            ],
            sauces: [
                {
                    id: 1001,
                    type: "Sauce Tomate",
                    color: '#db4006',
                    image: "assets/images/pizza1.jpg",
                },
                {
                    id: 1002,
                    type: "Crème Fraiche",
                    color: '#e9cb8f',
                    image: "assets/images/pizza2.jpg",
                },
            ],
            energy: {
                Kcal: 242,
                Glucides: 27.99,
                Fibres: 1.75,
                Proteines: 9.62,
                Sel: 11,
            },

            totalPrice: 0,
            nbrProduct: 0,
            promo: ""
        };
    },

    methods: {
        addProduct() { /*ici, vu qu'on utilise des données à l'interieur de 
            notre instance, surtout à l'intérieur de nos méthodes, il va falloirles faire précéder d'un this afin d'indiquer qu'on se rtrouvr sur cette instance*/
            if (this.sale) {
                this.nbrProduct += 1;
                this.totalPrice = (this.price - 5) * this.nbrProduct
            } else {
                this.nbrProduct += 1;
                this.totalPrice = this.price * this.nbrProduct
            }
        },
        updateImage(newLinkImage) {
            this.image = newLinkImage;
        },
    },

    computed: {
        title() {
            return this.product + " " + this.type;
        }
    }
});

