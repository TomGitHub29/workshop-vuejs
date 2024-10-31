
app.component('product-display', {
    props: {
        premium: {
          type: Boolean,
          required: true,
        }
      },

    template:
    /*html*/
    `
        <p>{{message}}</p>
        <h2>Panier</h2>
        <p>Articles dans le panier: {{ cart }}</p>

        <img height="200" v-bind:src="image" />
        <p v-if="inStock">Disponible</p>
        <p v-else>Indisponible</p>
        <p v-if="stock > 10">Disponible</p>
        <p v-else-if="stockLow && stock > 0">Peu de stock</p>
        <p v-else>Plus de stock</p>


        <p v-show="onSale">En Vente !</p>

        <product-details :details="details"></product-details>

        <p>Livraison: {{ shipping }}</p>

        <div>
            <span v-for="(carouselImage, index) in carouselImages" :key="carouselImage.id"
                @mouseover="updateImage(index)">
                <img height="50" :alt="carouselImage.text" :src="carouselImage.image" />
            </span>
        </div>

        <div v-for="paquet in packageTab" :key="paquet.id">
            <h2>{{paquet.name}}</h2>
            <p>{{paquet.price}}</p>
            <p>{{paquet.quantity}}</p>
        </div>

        <button @click="addToCart" :style="styles.roundButton" :disabled="stockLow" :class="{ disabledButton: stockLow }">
            Ajouter au panier
        </button>
        <button @click="substractFromCart" :style="styles.roundButton">
            Retirer du panier
        </button>
    `,
    data() {
        return {
            message: "Achetez votre café en ligne",
            inStock: true,
            stock: 5,
            onSale: false,
            selectedImage: 0,
            cart: 0,
            premium: false,
            carouselImages: [
                { id: 1, text: "Capsule 1", image: "./assets/images/colombia.png" },
                {
                    id: 2,
                    text: "Capsule 2",
                    image: "./assets/images/colombia_de_cote.png",
                },
                { id: 3, text: "Tasse", image: "./assets/images/colombia_tasse.png" },
                { id: 4, text: "Paquet", image: "./assets/images/colombia_paquet.png" },
            ],
            packageTab: [
                { id: 1, quantity: 10, price: 5.99 },
                { id: 2, quantity: 20, price: 10.99 },
                { id: 3, quantity: 50, price: 25.99 },
            ],
            details: [
                { id: 1, text: "Détail 1", color: "red" },
                { id: 2, text: "Détail 2", color: "blue" },
                { id: 3, text: "Détail 3", color: "green" },
            ],
            styles: {
                roundButton: {
                    borderRadius: "20px",
                    padding: "10px",
                    backgroundColor: "rgb(0, 114, 180)",
                    color: "white",
                    cursor: "pointer",
                },
            },
        };
    },
    methods: {
        updateImage(index) {
            this.selectedImage = index;
        },
        addToCart() {
            if (this.stock > 0) {
                this.stock -= 1;
                this.cart += 1;
            }
        },
        substractFromCart() {
            if (this.stock < 5) {
                this.stock += 1;
                this.cart -= 1;
            }
        },
    },
    computed: {
        image() {
            return this.carouselImages[this.selectedImage].image;
        },
        stockLow() {
            return this.stock <= 0;
        },
        shipping() {
            if (this.premium) {
                return "Gratuit";
            }
            return 2.99;
        }
    },
});
