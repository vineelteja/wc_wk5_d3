Vue.component("menu-item", {
  props: ["items"],
  template: `
        <div id="item" v-for='each in items'>
            <img
            v-bind:src="each.img"
            alt=""
            />
            <p id="name">{{each.name}}</p>
            <p id="description">{{each.content}}</p>
            <button>Add to cart</button>
        </div>
    `,
});

const vue = new Vue({
  el: "#vue",
  data: {
    items: [
      {
        id: 1,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg",
        name: "Pasta",
        content: "Healthy pasta",
      },
      {
        id: 3,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg",
        name: "Breakfast special",
        content: "Good for soul",
      },
      {
        id: 4,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg",
        name: "Sea shells mix",
        content: "for shell lovers",
      },
      {
        id: 5,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg",
        name: "Ultimate kebab",
        content: "The best from middle east",
      },
      {
        id: 6,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg",
        name: "chicken steak",
        content: "grilled to perfection",
      },
      {
        id: 7,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg",
        name: "filet mignon",
        content: "Juicky steak served with potatos",
      },
      {
        id: 8,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg",
        name: "Bistro Brunch",
        content: "A touch of Australia",
      },
      {
        id: 9,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg",
        name: "California Crepe",
        content: "Stuffed with grilled shrimp",
      },
      {
        id: 10,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg",
        name: "Top burger",
        content: "Tallest from peru",
      },
      {
        id: 11,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg",
        name: "chicken garlic piz",
        content: "speciality pizza",
      },
      {
        id: 12,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg",
        name: "wok away healthy",
        content: "healthy blend of noodles and veggies",
      },
      {
        id: 13,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG",
        name: "Red Crabs",
        content: "Fresh from alaska",
      },
    ],
  },
});
