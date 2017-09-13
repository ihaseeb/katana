export default {
    state: {
        loadSuppliers: [{
            imageUrl: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
            id: '12345asda',
            name: 'Haseeb',
            rating: '4',
            location: 'G-11 markaz Islamabad',
            features: ['feature1', 'feature2'],
            discountPrice: '1250',
            originalPrice: '2000'
        }]
    },
    getters: {
        loadSuppliers(state) {
            return state.loadSuppliers
        }
    }
}