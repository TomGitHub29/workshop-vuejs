const app = Vue.createApp({
    data() {
        return {
            action: "Achat de café",
            brand: "Nespresso",
            packageTab: [
                { id: 1, quantity: 10, price: 5.99 },
                { id: 2, quantity: 20, price: 10.99 },
                { id: 3, quantity: 50, price: 25.99 },
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

    },
    computed: {
        title() {
            return this.action + " " + this.brand;
        },
        image() {
            return this.carouselImages[this.selectedImage].image;
        },
        stockLow() {
            return this.stock <= 0;
        },
    },
});

