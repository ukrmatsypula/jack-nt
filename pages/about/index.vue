<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog: </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ut laudantium facere ab error, a numquam pariatur itaque consequatur fugit officia, et sapiente praesentium, quaerat ipsam. Earum aspernatur excepturi quis esse nulla? Sed modi minus consequuntur accusamus impedit corrupti, molestias quibusdam doloribus tempore quod, vitae, culpa similique libero nesciunt nihil amet maxime dolore aperiam ut molestiae temporibus magni. Temporibus assumenda libero vitae voluptas animi architecto earum debitis hic aperiam. Vel voluptates repellat dolore, voluptas voluptatibus quod! Facere temporibus voluptas soluta voluptatum nesciunt assumenda, tempora ullam aliquam laborum repudiandae labore modi officiis omnis adipisci vitae pariatur consequuntur itaque nobis, ex saepe.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ut laudantium facere ab error, a numquam pariatur itaque consequatur fugit officia, et sapiente praesentium, quaerat ipsam. Earum aspernatur excepturi quis esse nulla? Sed modi minus consequuntur accusamus impedit corrupti, molestias quibusdam doloribus tempore quod, vitae, culpa similique libero nesciunt nihil amet maxime dolore aperiam ut molestiae temporibus magni. Temporibus assumenda libero vitae voluptas animi architecto earum debitis hic aperiam. Vel voluptates repellat dolore, voluptas voluptatibus quod! Facere temporibus voluptas soluta voluptatum nesciunt assumenda, tempora ullam aliquam laborum repudiandae labore modi officiis omnis adipisci vitae pariatur consequuntur itaque nobis, ex saepe.</p>

          <Intro title="lorem inpum emet dolor" />

          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ut laudantium facere ab error, a numquam pariatur itaque consequatur fugit officia, et sapiente praesentium, quaerat ipsam. Earum aspernatur excepturi quis esse nulla? Sed modi minus consequuntur accusamus impedit corrupti, molestias quibusdam doloribus tempore quod, vitae, culpa similique libero nesciunt nihil amet maxime dolore aperiam ut molestiae temporibus magni. Temporibus assumenda libero vitae voluptas animi architecto earum debitis hic aperiam. Vel voluptates repellat dolore, voluptas voluptatibus quod! Facere temporibus voluptas soluta voluptatum nesciunt assumenda, tempora ullam aliquam laborum repudiandae labore modi officiis omnis adipisci vitae pariatur consequuntur itaque nobis, ex saepe.</p>

        <img src="@/assets/img/about.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>


export default {
  head() {
    let title = "About my ssr blog";
    let descritpion = "about my ssr blog with nuxt.js";
    let type = 'site'

    return {
      title,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: title,
        },
        {
          hid: "og: description",
          name: "og: description",
          content: "My ssr blog with nuxt.js",
        },
        {
          hid: "description",
          name: "description",
          content: descritpion,
        },
         {
          hid: "og:type",
          name: "og:type",
          content: type,
        },
      ],
    };
  },
}
</script>

<style lang="scss">
  .about {
    text-align: center;
    margin-top: 10px;
  }
</style>