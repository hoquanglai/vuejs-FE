<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="card">
      <Carousel
        :value="products"
        :numVisible="1"
        :numScroll="1"
        :circular="true"
        :autoplayInterval="3000"
        :showNavigators="false"
        :indicators="false"
      >
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div>
                <img style="width: 100%" :src="slotProps.data.image" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          image: "../src/image/slide1.png",
          name: "anckhdsabf",
        },
        {
          name: "Product Description",
          image: "../src/image/slide1.png",
        },
      ],
    };
  },
};
</script>
