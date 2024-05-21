const restaurants =[
    {
        "name": "Spice Route",
        "address": "123 Main Street, Mumbai, Maharashtra",
        "country": "India",
        "cuisine": "Indian",
        "rating": 4.5,
        "reviews": 120,
        "img":"https://media-cdn.tripadvisor.com/media/photo-m/1280/13/d0/62/eb/the-spice-route.jpg",
        "phone": "+91 9876543210",
        "website": "https://www.spiceroute.com",
        "dishes": [
            {"name": "Butter Chicken", "price": 300, "image": "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg"},
            {"name": "Paneer Tikka", "price": 250, "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food_400.jpg"},
            {"name": "Biryani", "price": 350, "image": "https://www.spiceroute.com/images/biryani.jpg"},
            {"name": "Fish Makhani", "price": 450, "image": "https://indianfoodfreak.com/wp-content/uploads/2012/10/makhani-fish-1.jpg"},
            {"name": "Prawn Thokku", "price": 520, "image": "https://happietrio.com/wp-content/uploads/2021/05/PrawnThokku-500x375.jpg"},
            {"name": "Kadhai Chicken", "price": 530, "image": "https://pipingpotcurry.com/wp-content/uploads/2023/07/Kadai-Chicken-Recipe-Piping-Pot-Curry.jpg"}
            
        ]   
    },
    {
        "name": "Taj Mahal Restaurant",
        "address": "456 South Avenue, New Delhi, Delhi",
        "country": "India",
        "cuisine": "Indian, Mughlai",
        "rating": 4.2,
        "reviews": 90,
        "phone": "+91 9998887776",
        "img": "https://media-cdn.tripadvisor.com/media/photo-o/19/8b/4e/ab/new-place.jpg",
        "website": "https://www.tajmahalrestaurant.com",
        "dishes": [
            {"name": "Tandoori Chicken", "price": 280, "image": "https://www.tajmahalrestaurant.com/images/tandoori_chicken.jpg"},
            {"name": "Mutton Rogan Josh", "price": 320, "image": "https://www.tajmahalrestaurant.com/images/rogan_josh.jpg"},
            {"name": "Kebabs", "price": 250, "image": "https://www.tajmahalrestaurant.com/images/kebabs.jpg"},
            {"name": "Peri Peri Chicken", "price": 340, "image": "https://images.getrecipekit.com/20231209021159-andy-20cooks-20-20chicken-20spatchcock-20with-20peri-20peri-20marinade.jpg?aspect_ratio=4:3&quality=90&"},
            {"name": "Spicy Chicken Masala", "price": 250, "image": "https://static.toiimg.com/thumb/58394256.cms?imgsize=104892&width=800&height=800"},
            {"name": "Malai Chicken", "price": 200, "image": "https://pipingpotcurry.com/wp-content/uploads/2023/08/Malai-Chicken-in-White-Gravy-Recipe-Piping-Pot-Curry.jpg"}
        ]
    },
    {
        "name": "Chowpatty Chaat Corner",
        "address": "789 Beach Road, Goa",
        "country": "India",
        "cuisine": "Indian, Street Food",
        "rating": 4.7,
        "reviews": 150,
        "phone": "+91 8765432109",
        "img": "https://b.zmtcdn.com/data/pictures/1/19760881/8e6d05f389bd590f57c9e775765055c9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "website": "https://www.chowpattychaat.com",
        "dishes": [
            {"name": "Pani Puri", "price": 50, "image": "https://www.chowpattychaat.com/images/pani_puri.jpg"},
            {"name": "Bhel Puri", "price": 60, "image": "https://www.chowpattychaat.com/images/bhel_puri.jpg"},
            {"name": "Sev Puri", "price": 60, "image": "https://www.chowpattychaat.com/images/sev_puri.jpg"},
            {"name": "Sandwich", "price": 70, "image": "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800"},
            {"name": "Batata Puri", "price": 80, "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/sev-puri-recipe.jpg"},
        ]
    },
    {
        "name": "Darjeeling Express",
        "address": "10 Hill Station Road, Darjeeling, West Bengal",
        "country": "India",
        "cuisine": "Indian, Nepali",
        "img": "https://media-cdn.tripadvisor.com/media/photo-o/10/85/dc/08/darjeeling-express.jpg",
        "rating": 4.6,
        "reviews": 135,
        "phone": "+91 7654321098",
        "website": "https://www.darjeelingexpress.com",
        "dishes": [
            {"name": "Momos", "price": 120, "image": "https://www.darjeelingexpress.com/images/momos.jpg"},
            {"name": "Thukpa", "price": 150, "image": "https://www.darjeelingexpress.com/images/thukpa.jpg"},
            {"name": "Sel Roti", "price": 80, "image": "https://www.darjeelingexpress.com/images/sel_roti.jpg"},
            {"name": "Sidu", "price": 90, "image": "https://images.hindi.news18.com/ibnkhabar/uploads/2021/09/Siddu.jpg"},
            {"name": "Pitika", "price": 105, "image": "https://www.sunitabhuyan.net/wp-content/uploads/2022/03/IMG_20220305_234852-scaled.jpg"}
        ]
    },
    {
        "name": "Punjab Grill",
        "address": "15 North Avenue, Chandigarh",
        "country": "India",
        "cuisine": "Indian, Punjabi",
        "rating": 4.3,
        "img": "https://media-cdn.tripadvisor.com/media/photo-s/18/13/5a/c9/punjab-grill-select-city.jpg",
        "reviews": 100,
        "phone": "+91 9876543211",
        "website": "https://www.punjabgrill.com",
        "dishes": [
            {"name": "Sarson Ka Saag with Makki Ki Roti", "price": 350, "image": "https://www.punjabgrill.com/images/sarson_ka_saag.jpg"},
            {"name": "Dal Makhani", "price": 300, "image": "https://www.punjabgrill.com/images/dal_makhani.jpg"},
            {"name": "Punjabi Lassi", "price": 80, "image": "https://www.punjabgrill.com/images/lassi.jpg"},
            {"name": "Chole bhature", "price": 85, "image": "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg"},
            {"name": "Rajma chawal", "price": 95, "image": "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg"},
            {"name": "Curry Chawal", "price": 90, "image": "https://static.toiimg.com/thumb/92950871.cms?imgsize=68608&width=800&height=800"}

            
        ]
    },
    {
        "name": "Dakshin Rasoi",
        "address": "20 East Street, Chennai, Tamil Nadu",
        "country": "India",
        "cuisine": "Indian, South Indian",
        "rating": 4.4,
        "reviews": 110,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBh3T1Icy06KWXMwvMrQ3sLvMu7SVlq46UJw&s",
        "phone": "+91 8765432108",
        "website": "https://www.dakshinrasoi.com",
        "dishes": [
            {"name": "Dosa", "price": 80, "image": "https://www.dakshinrasoi.com/images/dosa.jpg"},
            {"name": "Idli", "price": 60, "image": "https://www.dakshinrasoi.com/images/idli.jpg"},
            {"name": "Sambar Vada", "price": 100, "image": "https://www.dakshinrasoi.com/images/sambar_vada.jpg"},
            {"name": "Uttapam", "price": 120, "image": "https://www.cookingcarnival.com/wp-content/uploads/2022/02/Uttapam-recipe.jpg"},
            {"name": "Upama", "price": 130, "image": "https://m.media-amazon.com/images/I/81jyhClhHHL._AC_UF350,350_QL80_.jpg"}
        ]
    },
    {
        "name": "Mumbai Masala",
        "address": "30 West Street, Mumbai, Maharashtra",
        "country": "India",
        "cuisine": "Indian, Street Food",
        "rating": 4.8,
        "reviews": 160,
        "phone": "+91 7654321097",
        "img": "https://b.zmtcdn.com/data/reviews_photos/080/fa984e4ae6c936ea3f99acec18fb8080_1445854684.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "website": "https://www.mumbaimasala.com",
        "dishes": [
            {"name": "Vada Pav", "price": 40, "image": "https://www.mumbaimasala.com/images/vada_pav.jpg"},
            {"name": "Pav Bhaji", "price": 60, "image": "https://www.mumbaimasala.com/images/pav_bhaji.jpg"},
            {"name": "Misal Pav", "price": 80, "image": "https://www.mumbaimasala.com/images/misal_pav.jpg"},
            {"name": "Keema Pav", "price": 85, "image": "https://swatisani.net/kitchen/wp-content/uploads/2015/06/IMG_8841.jpg"},
            {"name": "Anda Pav", "price": 90, "image": "https://i.pinimg.com/736x/c0/3d/a7/c03da754bdc0e16b891d613e6d3001a4.jpg"}
        ]
    },
    {
        "name": "Paradise Biryani",
        "address": "40 Paradise Road, Hyderabad, Telangana",
        "country": "India",
        "cuisine": "Indian, Biryani",
        "rating": 4.7,
        "reviews": 130,
        "img": "https://media-cdn.tripadvisor.com/media/photo-p/19/f5/3d/25/photo0jpg.jpg",
        "phone": "+91 9876543212",
        "website": "https://www.paradisebiryani.com",
        "dishes": [
            {"name": "Chicken Biryani", "price": 200, "image": "https://www.paradisebiryani.com/images/chicken_biryani.jpg"},
            {"name": "Mutton Biryani", "price": 250, "image": "https://www.paradisebiryani.com/images/mutton_biryani.jpg"},
            {"name": "Veg Biryani", "price": 150, "image": "https://www.paradisebiryani.com/images/veg_biryani.jpg"},
            {"name": "Egg Biryani", "price": 170, "image": "https://spicecravings.com/wp-content/uploads/2020/10/Egg-Biryani-Featured-1.jpg"},
            {"name": "Prawn Biryani", "price": 190, "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg"},
        ]
    },
    {
        "name": "Kolkata Kathi Rolls",
        "address": "60 Street Food Lane, Kolkata, West Bengal",
        "country": "India",
        "cuisine": "Indian, Street Food",
        "rating": 4.5,
        "reviews": 120,
        "img": "https://media-cdn.tripadvisor.com/media/photo-p/19/f5/3d/25/photo0jpg.jpg",
        "phone": "+91 7654321096",
        "website": "https://www.kolkatakathirolls.com",
        "dishes": [
            {"name": "Chicken Kathi Roll", "price": 100, "image": "https://www.kolkatakathirolls.com/images/chicken_kathi_roll.jpg"},
            {"name": "Egg Kathi Roll", "price": 80, "image": "https://www.kolkatakathirolls.com/images/egg_kathi_roll.jpg"},
            {"name": "Paneer Kathi Roll", "price": 90, "image": "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg"},
            {"name": "Veg Kathi Roll", "price": 70, "image": "https://www.sharmispassions.com/wp-content/uploads/2020/12/6465386163_d83aa96fdb_z.jpg"},
            {"name": "Mutton Kathi Roll", "price": 100, "image": "https://i.ndtvimg.com/i/2017-06/kathi-rolls_650x400_41498134746.jpg"},
        ]
    },
    {
        "name": "Rajasthani Rasoi",
        "address": "70 Desert Lane, Jaipur, Rajasthan",
        "country": "India",
        "cuisine": "Indian, Rajasthani",
        "rating": 4.4,
        "reviews": 110,
        "img": "https://media-cdn.tripadvisor.com/media/photo-s/10/5e/2b/a3/its-rajasthani-rasoi.jpg",
        "phone": "+91 9876543213",
        "website": "https://www.rajasthanirasoi.com",
        "dishes": [
            {"name": "Dal Baati Churma", "price": 250, "image": "https://www.rajasthanirasoi.com/images/dal_baati_churma.jpg"},
            {"name": "Gatte Ki Sabji", "price": 200, "image": "https://www.rajasthanirasoi.com/images/gatte_ki_sabji.jpg"},
            {"name": "Ker Sangri", "price": 220, "image": "https://www.rajasthanirasoi.com/images/ker_sangri.jpg"},
            {"name": "Sohan Halwa", "price": 280, "image": "https://www.sweedesi.com/cdn/shop/products/sohan-halwa-agarwal-caterers-699072.jpg?v=1687544956"},
            {"name": "Banjara Murg", "price": 290, "image": "https://i.ytimg.com/vi/RinycursSdk/maxresdefault.jpg"},
        ]
    },
    {
        "name": "Assam Bhawan",
        "address": "80 Assam Road, Guwahati, Assam",
        "country": "India",
        "cuisine": "Indian, Assamese",
        "rating": 4.3,
        "reviews": 100,
        "img": "https://content.jdmagicbox.com/comp/navi-mumbai/33/022p8907433/catalogue/assam-bhavan-vashi-navi-mumbai-government-guest-houses-l5l0yf-250.jpg",
        "phone": "+91 8765432106",
        "website": "https://www.assambhawan.com",
        "dishes": [
            {"name": "Masor Tenga", "price": 180, "image": "https://www.assambhawan.com/images/masor_tenga.jpg"},
            {"name": "Aloo Pitika", "price": 150, "image": "https://www.assambhawan.com/images/aloo_pitika.jpg"},
            {"name": "Bhut Jolokia Chutney", "price": 100, "image": "https://www.assambhawan.com/images/bhut_jolokia_chutney.jpg"},
            {"name": "Prawn Malai Curry", "price": 150, "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Chingri-Malai-Curry.jpg"},
            {"name": "Cold Tuna Fish", "price": 170, "image": "https://www.budgetbytes.com/wp-content/uploads/2023/07/tuna-pasta-salad-plated1.jpg"},
        ]
    },
    {
        "name": "Udupi Sagar",
        "address": "90 Malpe Beach Road, Udupi, Karnataka",
        "country": "India",
        "cuisine": "Indian, Udupi",
        "rating": 4.2,
        "reviews": 95,
        "img": "https://content.jdmagicbox.com/v2/comp/bangalore/v2/080pxx80.xx80.190326214110.s8v2/catalogue/udupi-sagar-hotel-bangalore-0mkb78j48v.jpg",
        "phone": "+91 7654321095",
        "website": "https://www.udupisagar.com",
        "dishes": [
            {"name": "Masala Dosa", "price": 80, "image": "https://www.udupisagar.com/images/masala_dosa.jpg"},
            {"name": "Idli Vada", "price": 60, "image": "https://www.udupisagar.com/images/idli_vada.jpg"},
            {"name": "Mysore Pak", "price": 100, "image": "https://www.udupisagar.com/images/mysore_pak.jpg"},
            {"name": "Paneer Dosa", "price": 120, "image": "https://cdn.tarladalal.com/members/9306/procstepimgs/paneer-chilly-dosa-28-10-189231.jpg"},
            {"name": "Plain Dosa", "price": 90, "image": "https://static.toiimg.com/thumb/53239433.cms?imgsize=247810&width=800&height=800"},


        ]
    },
    {
        "name": "Nawabi Delights",
        "address": "100 Nawabganj Road, Lucknow, Uttar Pradesh",
        "country": "India",
        "cuisine": "Indian, Awadhi",
        "rating": 4.8,
        "reviews": 170,
        "img": "https://content.jdmagicbox.com/comp/delhi/h9/011pxx11.xx11.161123153807.u7h9/catalogue/nawabi-kitchen-ramesh-nagar-delhi-home-delivery-restaurants-26g89y5.jpg",
        "phone": "+91 9876543214",
        "website": "https://www.nawabidelights.com",
        "dishes": [
            {"name": "Galouti Kebab", "price": 300, "image": "https://www.nawabidelights.com/images/galouti_kebab.jpg"},
            {"name": "Lucknawi Biryani", "price": 350, "image": "https://www.nawabidelights.com/images/lucknawi_biryani.jpg"},
            {"name": "Shahi Tukda", "price": 150, "image": "https://www.nawabidelights.com/images/shahi_tukda.jpg"},
            {"name": "chicken changezi", "price": 170, "image": "https://yourfoodfantasy.com/wp-content/webpc-passthru.php?src=https://yourfoodfantasy.com/wp-content/uploads/2020/08/Chicken-Changezi-Recipe-Your-Food-Fantasy-1.jpg&nocache=1"},
            {"name": "chicken chilly", "price": 180, "image": "https://static.toiimg.com/photo/53094926.cms"},

        ]
    },
    {
        "name": "Kerala Kitchen",
        "address": "110 Backwaters Lane, Kochi, Kerala",
        "country": "India",
        "cuisine": "Indian, Kerala",
        "rating": 4.5,
        "reviews": 125,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhGivl4XxzxqM8iE6lAts4yTA_GVTHzwmG18Ag-bSQg&s",
        "phone": "+91 8765432105",
        "website": "https://www.keralakitchen.com",
        "dishes": [
            {"name": "Appam with Stew", "price": 180, "image": "https://www.keralakitchen.com/images/appam_with_stew.jpg"},
            {"name": "Fish Curry", "price": 250, "image": "https://www.keralakitchen.com/images/fish_curry.jpg"},
            {"name": "Puttu and Kadala Curry", "price": 200, "image": "https://www.keralakitchen.com/images/puttu_kadala_curry.jpg"},
            {"name": "Egg Curry", "price": 220, "image": "https://images.services.kitchenstories.io/EPAs3NYa-v4uK2NumQYwhJ4Cd58=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg"},
            {"name": "Chicken Sorma", "price": 190, "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma.jpg"},
        ]
    },
    {
        "name": "Mysore Palace",
        "address": "120 Palace Road, Mysore, Karnataka",
        "country": "India",
        "cuisine": "Indian, South Indian",
        "rating": 4.6,
        "reviews": 135,
        "img": "https://www.treebo.com/blog/wp-content/uploads/2018/04/Garuda-Mall-Mysore-1-1.jpg",
        "phone": "+91 7654321094",
        "website": "https://www.mysorepalace.com",
        "dishes": [
            {"name": "Mysore Masala Dosa", "price": 100, "image": "https://www.mysorepalace.com/images/mysore_masala_dosa.jpg"},
            {"name": "Rava Idli", "price": 80, "image": "https://www.mysorepalace.com/images/rava_idli.jpg"},
            {"name": "Chow Chow Bhath", "price": 120, "image": "https://www.mysorepalace.com/images/chow_chow_bhath.jpg"},
            {"name": "Idli Masala", "price": 130, "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/12/masala-idli-recipe-1.jpg"},
            {"name": "Medu Vada", "price": 150, "image": "https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe.webp"},

        ]
    },
    {
        "name": "Pune Peshwa",
        "address": "130 Deccan Gymkhana Road, Pune, Maharashtra",
        "country": "India",
        "cuisine": "Indian, Maharashtrian",
        "rating": 4.4,
        "reviews": 115,
        "img": "https://www.mericity.com/MeriCityMedia/Business/11785/11785_20181409110217_0.jpeg",
        "phone": "+91 9876543215",
        "website": "https://www.punepeshwa.com",
        "dishes": [
            {"name": "Puran Poli", "price": 80, "image": "https://www.punepeshwa.com/images/puran_poli.jpg"},
            {"name": "Misal Pav", "price": 100, "image": "https://www.punepeshwa.com/images/misal_pav.jpg"},
            {"name": "Bhakri with Pitla", "price": 120, "image": "https://www.punepeshwa.com/images/bhakri_pitla.jpg"},
            {"name": "White Rasuglla", "price": 70, "image": "https://5.imimg.com/data5/SELLER/Default/2023/8/338722324/UI/TQ/SX/38027562/white-sponge-rasgulla.png"},
            {"name": "Kala Jamun", "price": 50, "image": "https://sinfullyspicy.com/wp-content/uploads/2020/07/1200-by-1200-images.jpg"},
        ]
    },
    {
        "name": "Himachal Hideaway",
        "address": "140 Hill Station Road, Shimla, Himachal Pradesh",
        "country": "India",
        "cuisine": "Indian, Himachali",
        "rating": 4.3,
        "reviews": 105,
        "img": "https://q-xx.bstatic.com/xdata/images/hotel/max500/353230973.jpg?k=96130c0aeaebe291471755b745fa4eda0f634e94ba8a1617a6b22631242647ac&o=",
        "phone": "+91 8765432104",
        "website": "https://www.himachalhideaway.com",
        "dishes": [
            {"name": "Sidu", "price": 150, "image": "https://www.himachalhideaway.com/images/sidu.jpg"},
            {"name": "Khatta", "price": 120, "image": "https://www.himachalhideaway.com/images/khatta.jpg"},
            {"name": "Babru", "price": 100, "image": "https://www.himachalhideaway.com/images/babru.jpg"},
            {"name": "momos", "price": 80, "image": "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg"},
            {"name": "soup", "price": 70, "image": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg"}
        ]
    },
    {
        "name": "Kashmiri Kitchen",
        "address": "150 Dal Lake View, Srinagar, Jammu and Kashmir",
        "country": "India",
        "cuisine": "Indian, Kashmiri",
        "rating": 4.7,
        "reviews": 140,
        "img": "https://content.jdmagicbox.com/comp/hoshiarpur/h1/9999p1882.1882.130315134533.x6h1/catalogue/dhiman-kitchen-house-talwara-township-hoshiarpur-interior-designers-2yttym5.jpg",   
        "phone": "+91 7654321093",
        "website": "https://www.kashmirikitchen.com",
        "dishes": [
            {"name": "Rogan Josh", "price": 250, "image": "https://www.kashmirikitchen.com/images/rogan_josh.jpg"},
            {"name": "Yakhni", "price": 200, "image": "https://www.kashmirikitchen.com/images/yakhni.jpg"},
            {"name": "Kahwa", "price": 80, "image": "https://www.kashmirikitchen.com/images/kahwa.jpg"},
            {"name": "Sheermal", "price": 100, "image": "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11599203288517.jpg"},
            {"name": "Shab Deg", "price": 90, "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Shab_Deg__Kashmiri_Mutton_Kofta_and_Turnip_Curry.jpg"},
        ]
    },
    {
        "name": "Bengal Sweets",
        "address": "160 Sweets Lane, Kolkata, West Bengal",
        "country": "India",
        "cuisine": "Indian, Bengali",
        "rating": 4.6,
        "reviews": 130,
        "img": "https://content.jdmagicbox.com/comp/patna/g7/0612px612.x612.211228215756.z1g7/catalogue/-rhdyz0615h.jpg",
        "phone": "+91 9876543216",
        "website": "https://www.bengalsweets.com",
        "dishes": [
            {"name": "Rasgulla", "price": 20, "image": "https://www.bengalsweets.com/images/rasgulla.jpg"},
            {"name": "Sandesh", "price": 30, "image": "https://www.bengalsweets.com/images/sandesh.jpg"},
            {"name": "Mishti Doi", "price": 40, "image": "https://www.bengalsweets.com/images/mishti_doi.jpg"}
        ]
    },
    {
        "name": "Goan Grills",
        "address": "170 Seafood Lane, Goa",
        "country": "India",
        "cuisine": "Indian, Goan, Seafood",
        "rating": 4.5,
        "reviews": 125,
        "img": "https://b.zmtcdn.com/data/pictures/4/19670214/b7288afec8b3cde3ed052bf08119354f.jpg?fit=around|960:500&crop=960:500;*,*",
        "phone": "+91 8765432103",
        "website": "https://www.goangrills.com",
        "dishes": [
            {"name": "Fish Curry Rice", "price": 300, "image": "https://www.goangrills.com/images/fish_curry_rice.jpg"},
            {"name": "Prawn Curry", "price": 350, "image": "https://www.goangrills.com/images/prawn_curry.jpg"},
            {"name": "Crab Xec Xec", "price": 250, "image": "https://www.goangrills.com/images/crab_xec_xec.jpg"},
            {"name": "Clam", "price": 230, "image": "https://www.allrecipes.com/thmb/-V2lHaqFKt6RquQ36pSHbqbqLd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12737-scott-ures-clams-and-garlicddmfs-beauty-3x4-554d8eca8aea404d9e5dc7618fdefe74.jpg"},
            {"name": "Oyster", "price": 210, "image": "https://images-cdn.ubuy.co.in/635660a74f61385c75551995-jefferson-street-ceramic-oyster-shells.jpg"},
        ]
    },
    {
        "name": "Sikkim Delicacies",
        "address": "180 Mountain View, Gangtok, Sikkim",
        "country": "India",
        "cuisine": "Indian, Sikkimese",
        "rating": 4.4,
        "reviews": 115,
        "img": "https://img.traveltriangle.com/blog/wp-content/uploads/2019/07/og-for-Sikkim-Food.jpg",
        "phone": "+91 7654321092",
        "website": "https://www.sikkimdelicacies.com",
        "dishes": [
            {"name": "Gundruk Soup", "price": 120, "image": "https://www.sikkimdelicacies.com/images/gundruk_soup.jpg"},
            {"name": "Phagshapa", "price": 150, "image": "https://www.sikkimdelicacies.com/images/phagshapa.jpg"},
            {"name": "Thenthuk", "price": 100, "image": "https://www.sikkimdelicacies.com/images/thenthuk.jpg"},
            {"name": "Sha Phaley", "price": 130, "image": "https://m.recipes.timesofindia.com/img/80349175/Master.jpg"},
            {"name": "Sinki", "price": 150, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11hHG1FJJAXWDh8MfuwFilo9gNWmqx1gSWVOvWBGdwQ&s"},
            {"name": "Dhindo", "price": 180, "image": "https://i.pinimg.com/736x/5e/bb/c2/5ebbc28e15257fd815e18a9098a84f5b.jpg"},
            
        ]
    },
    {
        "name": "Gujarati Thali House",
        "address": "190 Gujju Lane, Ahmedabad, Gujarat",
        "country": "India",
        "cuisine": "Indian, Gujarati",
        "rating": 4.3,
        "reviews": 110,
        "img": "https://curlytales.com/wp-content/uploads/2019/03/shree-thaker-bhojanalay-kalbadevi-mumbai-gujarati-restaurants-9gfsk7x-e1553841637217.jpg",
        "phone": "+91 9876543217",
        "website": "https://www.gujaratithali.com",
        "dishes": [
            {"name": "Gujarati Thali", "price": 200, "image": "https://www.gujaratithali.com/images/gujarati_thali.jpg"},
            {"name": "Khandvi", "price": 80, "image": "https://www.gujaratithali.com/images/khandvi.jpg"},
            {"name": "Undhiyu", "price": 150, "image": "https://www.gujaratithali.com/images/undhiyu.jpg"},
            {"name": "Muthiya", "price": 130, "image": "https://rakskitchen.net/wp-content/uploads/2022/12/muthiya-recipe.jpg"},
            {"name": "Handvo", "price": 120, "image": "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/09/Gujarati-Handvo-H1.jpg?fit=600%2C904&ssl=1"},
            {"name": "Lilva Kachori", "price": 140, "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/01/gujarati-lilva-kachori-1a.jpg"}
        ]
    },
    {
        "name": "Maharashtra Misal House",
        "address": "200 Misal Road, Nagpur, Maharashtra",
        "country": "India",
        "cuisine": "Indian, Maharashtrian",
        "rating": 4.7,
        "reviews": 140,
        "img": "https://content.jdmagicbox.com/comp/mumbai/z3/022pxx22.xx22.210302121500.w5z3/catalogue/-946ppp4rku.jpg",
        "phone": "+91 8765432102",
        "website": "https://www.misalhouse.com",
        "dishes": [
            {"name": "Kolhapuri Misal", "price": 100, "image": "https://www.misalhouse.com/images/kolhapuri_misal.jpg"},
            {"name": "Puneri Misal", "price": 80, "image": "https://www.misalhouse.com/images/puneri_misal.jpg"},
            {"name": "Nagpuri Misal", "price": 90, "image": "https://www.misalhouse.com/images/nagpuri_misal.jpg"},
            {"name": "Gurudutta Misal", "price": 70, "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/msirus2iwky1pem5rwwg"},
            {"name": "Misal katta", "price": 40, "image": "https://b.zmtcdn.com/data/reviews_photos/8af/20b4423641b27ddd5195422a0b3bf8af_1648460746.jpg"}
        ]
    },
    {
        "name": "Tamil Nadu Tiffin Center",
        "address": "210 Dosai Street, Madurai, Tamil Nadu",
        "country": "India",
        "cuisine": "Indian, Tamil",
        "rating": 4.6,
        "reviews": 135,
        "img": "https://content.jdmagicbox.com/comp/chennai/d4/044pxx44.xx44.121215144951.h8d4/catalogue/udhaya-tiffin-centre-tharamani-chennai-fast-food-ztfmygammc.jpg",
        "phone": "+91 7654321091",
        "website": "https://www.tntc.com",
        "dishes": [
            {"name": "Masala Dosai", "price": 80, "image": "https://www.tntc.com/images/masala_dosai.jpg"},
            {"name": "Pongal", "price": 60, "image": "https://www.tntc.com/images/pongal.jpg"},
            {"name": "Vadai", "price": 40, "image": "https://www.tntc.com/images/vadai.jpg"},
            {"name": "Rasam", "price": 30, "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/11/rasam-recipe.jpg"},
            {"name": "Vadai", "price": 50, "image": "https://www.ticklingpalates.com/wp-content/uploads/2021/09/medhu-vadai-recipe.jpg"},
        ]
    },
    {
        "name": "Rajdhani Thali Palace",
        "address": "220 Rajdhani Road, Jaipur, Rajasthan",
        "country": "India",
        "cuisine": "Indian, Rajasthani",
        "rating": 4.5,
        "reviews": 130,
        "img": "https://images.jdmagicbox.com/v2/comp/bangalore/y5/080pxx80.xx80.120322133947.t3y5/catalogue/rajdhani-thali-restaurant-indiranagar-bangalore-north-indian-restaurants-1miypvn56e.jpg",
        "phone": "+91 9876543218",
        "website": "https://www.rajdhanithali.com",
        "dishes": [
            {"name": "Rajasthani Thali", "price": 300, "image": "https://www.rajdhanithali.com/images/rajasthani_thali.jpg"},
            {"name": "Dal Bati Churma", "price": 250, "image": "https://www.rajdhanithali.com/images/dal_bati_churma.jpg"},
            {"name": "Ghevar", "price": 100, "image": "https://www.rajdhanithali.com/images/ghevar.jpg"},
            {"name": "Daal Baluchi", "price": 120, "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/00/b7/81/baluchi.jpg"},
            {"name": "Pyaz Kachori", "price": 90, "image": "https://www.sweedesi.com/cdn/shop/products/pyaz-kachori-sodhani-sodhani-169839.jpg?v=1700645606"},
        ]
    },
    {
        "name": "Andhra Aroma",
        "address": "230 Spice Market, Vijayawada, Andhra Pradesh",
        "country": "India",
        "cuisine": "Indian, Andhra",
        "rating": 4.4,
        "reviews": 125,
        "img": "https://content.jdmagicbox.com/comp/narasaraopet/s7/9999p8647.8647.220516182348.b1s7/catalogue/-is8g0ejv0n.jpg",
        "phone": "+91 8765432101",
        "website": "https://www.andhraaroma.com",
        "dishes": [
            {"name": "Hyderabadi Biryani", "price": 250, "image": "https://www.andhraaroma.com/images/hyderabadi_biryani.jpg"},
            {"name": "Gongura Mutton", "price": 300, "image": "https://www.andhraaroma.com/images/gongura_mutton.jpg"},
            {"name": "Pulihora", "price": 150, "image": "https://www.andhraaroma.com/images/pulihora.jpg"},
            {"name": "Bandar Ladoo", "price": 110, "image": "https://sitarafoods.com/wp-content/uploads/2023/11/bandar-laddu.jpg"},
            {"name": "Kakinda Kaja", "price": 130, "image": "https://lh3.googleusercontent.com/proxy/J5Ov3IPYKY6WaMDLOlQNfwtqhCXckIzl21F1r9KhYN3TfGOtyggAc36TIwNwQvKFDP6167Ocr9jmvu0QpRV9i1n-bWvBFoVJZ4G0OqbMpymZI6x5bWqO6M9k7jgfs2NGExfhzb4FnAVWRVRs4FrLUWcLx94Gh5BlbeYSafZWNwtyG5KCrysKwQ"},
            {"name": "Palakova", "price": 120, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw4yy68LnGuaA1gvLcH_uwfybrTUkgsg-oLEzj1YtmQ&s"}
        ]
    },
    {
        "name": "Karnataka Kitchen",
        "address": "240 Garden City Road, Bengaluru, Karnataka",
        "country": "India",
        "cuisine": "Indian, Karnataka",
        "rating": 4.3,
        "reviews": 120,
        "img": "https://content.jdmagicbox.com/comp/mangalore/i8/0824px824.x824.131104100244.n1i8/catalogue/kitchenwise-interiors-kudroli-mangalore-modular-kitchen-manufacturers-o1wds6f6ef.jpg?clr=",
        "phone": "+91 9876543219",
        "website": "https://www.karnatakakitchen.com",
        "dishes": [
            {"name": "Bisi Bele Bath", "price": 100, "image": "https://www.karnatakakitchen.com/images/bisi_bele_bath.jpg"},
            {"name": "Mysore Pak", "price": 80, "image": "https://www.karnatakakitchen.com/images/mysore_pak.jpg"},
            {"name": "Akki Roti", "price": 90, "image": "https://www.karnatakakitchen.com/images/akki_roti.jpg"},
            {"name": "Neer Dosa", "price": 70, "image": "https://www.idfreshfood.com/wp-content/uploads/2020/12/gsrgergge.jpg"},
            {"name": "Gojju", "price": 50, "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Madhuri_Aggarwal/Maavinkaayi_Gojju.jpg"}
        ]
    },
    {
        "name": "Patiala Palace",
        "address": "250 Punjab Road, Patiala, Punjab",
        "country": "India",
        "cuisine": "Indian, Punjabi",
        "rating": 4.2,
        "reviews": 115,
        "img": "https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Restaurants-in-Patiala.jpg",
        "phone": "+91 8765432100",
        "website": "https://www.patialapalace.com",
        "dishes": [
            {"name": "Sarson Da Saag", "price": 250, "image": "https://www.patialapalace.com/images/sarson_da_saag.jpg"},
            {"name": "Makki Di Roti", "price": 200, "image": "https://www.patialapalace.com/images/makki_di_roti.jpg"},
            {"name": "Lassi", "price": 80, "image": "https://www.patialapalace.com/images/lassi.jpg"},
            {"name": "Paneer Butter Masala", "price": 220, "image": "https://www.patialapalace.com/images/paneer_butter_masala.jpg"},
            {"name": "Dal Makhani", "price": 180, "image": "https://www.patialapalace.com/images/dal_makhani.jpg"},
            {"name": "Paneer Lababdar", "price": 170, "image": "https://myfoodstory.com/wp-content/uploads/2022/01/Paneer-Lababdar-3.jpg"},
            {"name": "Paneer bhurji", "price": 120, "image": "https://www.sharmispassions.com/wp-content/uploads/2021/09/PaneerBhurji1-500x500.jpg"}
        ]
    },
    {
        "name": "Punjabi Dhaba",
        "address": "10 Highway Road, Amritsar, Punjab",
        "country": "India",
        "cuisine": "Indian, Punjabi",
        "rating": 4.5,
        "reviews": 120,
        "img": "https://content.jdmagicbox.com/comp/mumbai/p6/022pxx22.xx22.200228134959.x1p6/catalogue/punjabi-dhaba-and-family-restaurant-mumbai-1rlcwgzzjr.jpg",
        "phone": "+91 9876543210",
        "website": "https://www.punjabidhaba.com",
        "dishes": [
            {"name": "Sarson Da Saag", "price": 200, "image": "https://www.punjabidhaba.com/images/sarson_da_saag.jpg"},
            {"name": "Makki Di Roti", "price": 180, "image": "https://www.punjabidhaba.com/images/makki_di_roti.jpg"},
            {"name": "Butter Chicken", "price": 250, "image": "https://www.punjabidhaba.com/images/butter_chicken.jpg"},
            {"name": "Paneer Tikka", "price": 220, "image": "https://www.punjabidhaba.com/images/paneer_tikka.jpg"},
            {"name": "Dal Makhani", "price": 180, "image": "https://www.punjabidhaba.com/images/dal_makhani.jpg"},
            {"name": "Lassi", "price": 100, "image": "https://www.punjabidhaba.com/images/lassi.jpg"}
        ]
    },
]
module.exports = restaurants;