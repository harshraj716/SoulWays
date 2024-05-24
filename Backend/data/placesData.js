const placesData = [
  {
    name: "Punjab",
    capital: "Chandigarh",
    about: "Deriving its name from five full-bodied rivers Sutlej, Beas, Ravi, Jhelum, and Chenab which flow through its vast plains, Punjab is representative of abundant things. It is one of the smaller albeit prosperous states of the nation.",
    climate: "The summer in Punjab starts from mid-April, with temperatures rising from February onwards. Rainfall ranges from 250mm to 1000mm, crucial for agriculture. Winters, mainly in January, see temperatures drop to 5°C at night and around 12°C in the day.",
    history: "The history of Punjab goes back thousands of years. It has been the cradle of the Indus Valley Civilization, with remains at the Ropar archaeological site. It finds mention in the Mahabharata and Ramayana.",
    time: "The best time to visit Punjab is in the spring, from February to April, and in the autumn, from September to November.",
    food: "Punjab is synonymous with mouthwatering delicacies, rich in color, ingredients, and spices. Punjabi cuisine offers a variety of dishes, from Paratha and Tandoori Chicken to Paneer delicacies and traditional sweets like Gajar ka Halwa and Jalebi.",
    img: [
      "https://bit.ly/2XjaMVx",
      "https://bit.ly/356rXMx"
    ],
    tourist: [
      {
        name: "GOLDEN TEMPLE",
        info: "The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.",
        images: "https://iptb.b-cdn.net/wp-content/uploads/2018/07/Golden-Temple-Punjab-1.jpg",
        location: "https://goo.gl/maps/3ySXx3roa59yMwQf8",
      },
      {
        name: "WAGAH BORDER",
        info: "Located at a distance of 22 km from Lahore and 28 km from Amritsar, Wagah Border marks the boundaries between Indian and Pakistani borders.",
        images: "https://m.economictimes.com/thumb/msid-68217133,width-1200,height-900,resizemode-4,imgsize-703119/daily-retreat-ceremony-along-attari-wagah-border-cancelled-bsf.jpg",
        location: "https://goo.gl/maps/ubA4BwRj3oNQXd2f8",
      },
      {
        name: "JALLIANWALA BAGH",
        info: "Jallianwala Bagh is a historic garden and memorial of national importance in Amritsar, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre.",
        images: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d8/6c/2f/jallianwala-bagh.jpg?w=2000&h=-1&s=1",
        location: "https://goo.gl/maps/ZaaEum3vfCUwLhjW7",
      },
      {
        name: "BHAKRA NANGAL DAM",
        info: "Bhakra Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh in northern India.",
        images: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/dam647_081117121907_1-x404.jpg?9FIZpe39SqXGiX7EIroLsVdcLWjDaUeV",
        location: "https://goo.gl/maps/cdozGk6gACGGZbTn7",
      },
      {
        name: "SUKHNA LAKE",
        info: "Sukhna Lake in Chandigarh, India, is a reservoir at the foothills (Shivalik hills) of the Himalayas.",
        images: "https://www.trawell.in/admin/images/upload/472763834Chandigarh_Sukhna_Lake_Main.jpg",
        location: "https://goo.gl/maps/Hxkr5S6ffwQFq6zU8",
      },
      {
        name: "SHAHPUR KANDI FORT",
        info: "The Shahpur Kandi Fort, named after Shah Jahan, nestles on the banks of the Ravi River in the picturesque foothills of the Himalayas.",
        images: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Nurpur-Fort.jpg",
        location: "https://goo.gl/maps/XjJz9jHrQkFkzVFi6",
      }
    ],    
    guides: [
      {
        Guide_name: "Arun Kumar",
        Category: "Punjab",
        guide_location: "Jalandhar",
        State: "Punjab",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f1e2f1550911ec11e0db0/master/w_1600,c_limit/prem-sagar.jpg",
        Experience: "10 years",
        Rating: 4.7
      },
      {
        Guide_name: "Sunita Devi",
        Category: "Scuba Diving",
        guide_location: "Amritsar",
        State: "Punjab",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f19cba7e965061db36786/master/w_1600,c_limit/maria-victor.jpg",
        Experience: "8 years",
        Rating: 4.5
      },
      {
        Guide_name: "Rajesh Singh",
        Category: "Island Hopping",
        guide_location: "Chandigarh",
        State: "Punjab",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f19c1a7e965061db36782/master/w_1600,c_limit/Anwar-Wain11.jpg",
        Experience: "12 years",
        Rating: 4.6
      },
      {
        Guide_name: "Tashi Wangchu",
        Category: "Monasteries",
        guide_location: "Chandigarh",
        State: "Punjab",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f19c1a7e965061db36782/master/w_1600,c_limit/Anwar-Wain11.jpg",
        Experience: "14 years",
        Rating: 4.9
      },
      {
        Guide_name: "Tushar Kumar",
        Category: "Pathankot",
        guide_location: "Ziro Valley",
        State: "Punjab",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f23efef20fb3fd11e5371/master/w_1600,c_limit/Abhishek-jamalabad%20(2).jpg",
        Experience: "12 years",
        Rating: 4.7
      },
      {
        Guide_name: "Sonam Singh",
        Category: "Cultural Heritage",
        guide_location: "Pathankot",
        State: "Punjab",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/60ba1952f27d46df614fc34c/master/w_1600,c_limit/Jonty-Rajagopalan.jpg",
        Experience: "10 years",
        Rating: 4.6
      }
    ]    
  },  
  {
    name: "Rajasthan",
    capital: "Jaipur",
    about: "Recognized as the 'Land of Kings' and having sheer variety of experiences to offer, Rajasthan is the largest state of India located on the northwestern side. ",
    climate: "Summers in Rajasthan last from April to June with temperatures rising up to 48°C during the day. Monsoon, from July to September, brings pleasant weather with rain showers transforming the arid landscape.",
    history: "Rajasthan has a history dating back thousands of years, from the Indus Valley Civilization to the rise of the Mughal Empire and subsequent British rule. The various princely states of Rajasthan were integrated into India after Independence in 1947.",
    time: "Winter sets in from October to March, with December and January experiencing severe temperature drops, sometimes as low as 0°C. This is the best time to visit Rajasthan as the days are pleasant, and most festivals held during this period are planned as tourist attractions.",
    food: "Rajasthan's cuisine is primarily vegetarian and offers a fabulous variety of mouthwatering dishes. Names like Dal Bati Churma, Moong Dal ka Halwa, Ghevar, and Rabdi are popular across North India, reflecting the rich and unique preparations of the state.",
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg",
      "https://ihplb.b-cdn.net/wp-content/uploads/2011/02/Forts.jpg",
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Gadisar-Lake-in-Rajasthan..jpg",
      "https://cdn1.tripoto.com/media/filter/tst/img/1682588/Image/1568655470_things_to_do_in_udaipur_rajasthan.jpg",
      "https://static.toiimg.com/thumb/68427211/3.jpg?width=748&height=499"
    ],
    tourist: [
      {
        name: "Jaipur",
        info: "Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. The capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. Jaipur rises majestically against the backdrop of forts Nahargarh, Jaigarh, and Garh Ganesh Temple.",
        images: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fd/47/4e/le-bassin-d-eau-sacree.jpg?w=2000&h=-1&s=1",
        location: "https://goo.gl/maps/Yb5Vu1sW66D2"
      },
      {
        name: "Amber Palace",
        info: "Amber (pronounced Amer) is about 11 kilometres from Jaipur. Now a UNESCO World Heritage Site, it was the bastion of the Kachwahas of Amber until the capital was moved to the plains, to what is today Jaipur. The palace, located in craggy hills, is a beautiful melange of Hindu and Mughal styles.",
        images: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f0/17/a5/caption.jpg?w=1400&h=-1&s=1",
        location: "https://goo.gl/maps/9SNUf85wDJM2"
      },
      {
        name: "Hawa Mahal",
        info: "Hawa Mahal, literally the Palace of Winds, was built in 1799 by the poet king Sawai Pratap Singh as a summer retreat for him and his family. This unique five-storey structure is a blend of Hindu and Islamic architecture, and the exterior resembles the crown of Lord Krishna.",
        images: "https://static.toiimg.com/photo/50355399/.jpg",
        location: "https://goo.gl/maps/bZwHRz38cU72"
      },
      {
        name: "Albert Hall Museum",
        info: "The exquisitely built Albert Hall is housed in the centre of Ram Niwas Garden. Sir Swinton Jacob conceptualised and designed it using styles from the Indo-Sarcenic architecture, and the Prince of Wales laid the foundation stone in 1876.",
        images: "https://live.staticflickr.com/2845/12542763994_d8b41967a3_b.jpg",
        location: "https://goo.gl/maps/5cq7T8epJQN2"
      },
      {
        name: "Jal Mahal",
        info: "One of the most wonderful sights in Jaipur is the beautiful Jal Mahal or Lake Palace, appearing to float in the centre of Man Sagar Lake. The light, sand-coloured stone walls and the deep blue of the water make for a wonderful contrast.",
        images: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Jal_Mahal_in_Man_Sagar_Lake.jpg",
        location: "https://goo.gl/maps/peR4MmPNS2N2"
      },
      {
        name: "Chittorgarh Fort",
        info: "The Chittor Fort or Chittorgarh is one of the largest forts in India, a UNESCO World Heritage Site. It sprawls over a hill 180 m in height spread over an area of 280 ha above the plains of the valley drained by the Berach River.",
        images: "https://www.chittorgarh.com/images/chittorgarh_fort.jpg",
        location: "https://goo.gl/maps/H9wrsG7sUht"
      },
      {
        name: "The Ajmer Sharif Dargah",
        info: "This Sufi shrine encloses the 'maqbara' (grave) of Garib Nawaz, the Sufi saint Khwaja Moinuddin Chisti. Built in the 13th century, the shrine is popular among people of all faiths who flock here to have their prayers answered.",
        images: "https://resources.thomascook.in/images/holidays/sightSeeing/ajmerdargha.jpg",
        location: "https://goo.gl/maps/W35tvzMdJv32"
      },
      {
        name: "Jaisalmer Fort",
        info: "Jaisalmer Fort is situated in the city of Jaisalmer, in the Indian state of Rajasthan. It is believed to be one of the very few 'living forts' in the world, as nearly one fourth of the old city's population still resides within the fort.",
        images: "http://www.rajasthantourplanner.com/blog/wp-content/uploads/2016/08/jaisalmer-fort-1024x654.jpg",
        location: "https://goo.gl/maps/6wN6VCWuP2P2"
      }
    ],    
    guides: [
      {
        Guide_name: "Rajiv Sharma",
        Category: "Adventure Tourism",
        guide_location: "Jodhpur",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/60ba22151fa22668f025a4c0/master/w_1600,c_limit/Tenzin-portrait.jpg",
        Experience: "8 years",
        Rating: 4.8
      },
      {
        Guide_name: "Meera Patel",
        Category: "Wildlife Safari",
        guide_location: "Ranthambore",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f19c5a7e965061db36784/master/w_1600,c_limit/alisha-sadikot%20(2).jpg",
        Experience: "6 years",
        Rating: 4.7
      },
      {
        Guide_name: "Amit Singh",
        Category: "Cultural Heritage",
        guide_location: "Udaipur",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/64c3d09c0d528c30692aaa4d/master/w_1600,c_limit/gurinder%20singh.jpeg",
        Experience: "9 years",
        Rating: 4.5
      },
      {
        Guide_name: "Priya Verma",
        Category: "Desert Safari",
        guide_location: "Jaisalmer",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.CKXFCdeovs2R08Sh5P5JrQHaE7?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Experience: "7 years",
        Rating: 4.9
      },
      {
        Guide_name: "Vikram Rathore",
        Category: "Historical Tours",
        guide_location: "Chittorgarh",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/64c3d123b9660a556bb21a0d/master/w_1600,c_limit/Snapinsta.app_310695170_523960069561273_8922433127840265957_n_1080.jpg",
        Experience: "5 years",
        Rating: 4.6
      },
      {
        Guide_name: "Neha Gupta",
        Category: "Cultural Heritage",
        guide_location: "Pushkar",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://thumbs.dreamstime.com/b/outdoor-portrait-mature-beautiful-happy-woman-arms-crossed-outdoor-portrait-mature-beautiful-happy-woman-arms-174391882.jpg",
        Experience: "7 years",
        Rating: 4.7
      },
      {
        Guide_name: "Ravi Kumar",
        Category: "Spiritual Tourism",
        guide_location: "Ajmer",
        State: "Rajasthan",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/614f1e3ba7e965061db3678c/master/w_1600,c_limit/bharat-gothoskar.jpg",
        Experience: "6 years",
        Rating: 4.8
      }
    ]    
  },  
  {
    name: "Kerala",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    about: "Kerala, famously known as 'God's Own Country', is a tropical paradise on the Malabar coast of Southern India. It offers diverse experiences, from languid backwaters to sprawling tea gardens and vibrant dance forms.",
    climate: "Kerala has a tropical climate with hot and humid summers (April-June), followed by the Southwest Monsoon (June-September) and pleasant winters (November-January). The best time to visit is from September to March.",
    history: "Legend says Kerala emerged from the sea by the axe of Parasurama, the sixth avatar of Vishnu. It's also known for its Chera dynasty and influences from various invaders.",
    time: "The best time to visit Kerala is between September and March for comfortable weather. Monsoon season (June-August) is ideal for ayurvedic treatments.",
    food: "Kerala cuisine is rich in spices, seafood, and coconut-based dishes. From Mappila biryani to Sadya feasts, it offers a diverse culinary experience.",
    img: [
      "https://dmgupcwbwy0wl.cloudfront.net/system/images/000/246/174/b6e6fbfe0a70425bfa209af67b1a1ac6/x1000gt/shutterstock_1154918653.jpg?1552906145",
      "https://www.bookitforgetit.com/wp-content/uploads/2016/10/Kerala-is-a-state-in-the-southwest-region-of-India.jpg",
      "https://www.myjewishlearning.com/wp-content/uploads/2010/07/Kerala_Backwaters.jpeg",
    ],
    tourist: [
      {
        name: "Munnar",
        info: "Munnar is famous for its tea estates, lush greenery, and wildlife. Explore the Eravikulam National Park and enjoy bamboo rafting in its catchment area.",
        images:
          "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Munnar_1_l_1025_1869.jpg",
        location:
          "https://www.google.co.in/maps/place/Munnar,+Kerala+685612/@10.0806491,77.0466683,14z/data=!3m1!4b1!4m5!3m4!1s0x3b0799794d099a6d:0x63250e5553c7e0c!8m2!3d10.0889333!4d77.0595248",
      },
      {
        name: "Alleppey",
        info: "Alleppey offers houseboat cruises through serene backwaters. Don't miss the Alleppey beach and traditional snake boat races.",
        images:
          "https://miro.medium.com/max/2560/1*MjHGGH7V_SeoC9t2zmC-lA.jpeg",
        location:
          "https://www.google.co.in/maps/place/Alappuzha,+Kerala/data=!4m2!3m1!1s0x3b0884f1aa296b61:0xb84764552c41f85a?sa=X&ved=2ahUKEwj6uuG_nPnlAhXSzDgGHaOWA00Q8gEwJXoECBwQBA",
      },
      {
        name: "Wayanad",
        info: "Wayanad is best known for the wildlife reserves - Wayanad wildlife reserve which is home to an exquisite variety of flora and fauna. Wayanad wildlife reserve is an integral part of the Nilgiri biosphere reserve peacefully located amidst the serene hills of Western Ghats.",
        images: "https://www.wayanad.com/files/slides/3253378071.jpg",
        location:
          "https://www.google.co.in/maps/place/Wayanad,+Kerala/@11.7141243,75.8289888,10z/data=!3m1!4b1!4m5!3m4!1s0x3ba60cf91a9c5f0d:0x71dd4da2e1d3e46f!8m2!3d11.6853575!4d76.1319953",
      },
      {
        name: "Kochi",
        info: "The city is marked by influences of Arabs, Dutch, Phoenicians, Portuguese, Chinese and the British city as well as that of the Indian rule of the Chera Dynasty followed by rule of the Feudal Lords.",
        images: "https://www.holidify.com/images/bgImages/KOCHI.jpg",
        location:
          "https://www.google.co.in/maps/place/Kochi,+Kerala/@9.9823428,76.1608472,11z/data=!3m1!4b1!4m5!3m4!1s0x3b080d514abec6bf:0xbd582caa5844192!8m2!3d9.9312328!4d76.2673041",
      },
      {
        name: "Thekkady",
        info: "Home to the country's largest Tiger Reserve- Periyar, Thekkady is a great way to enjoy a jungle vacation.Periyar National Park, being a major attraction, is one place where you can enjoy bamboo rafting in the catchment area of Mullaiperiyar Dam, hiking, and in the midst of the wilderness, shopping!",
        images: "https://static.toiimg.com/photo/56892948/.jpg",
        location:
          "https://www.google.co.in/maps/place/Thekkady,+Kumily,+Kerala/data=!4m2!3m1!1s0x3b06f8812df2a199:0x468af17958c54ae8?sa=X&ved=2ahUKEwiwlMjtnfnlAhVzpOkKHeYdD04Q8gEwJXoECBUQBA",
      },
      {
        name: "Varkala",
        info: "Varkala is a coastal town in the southern part of Kerala known for the unique 15m high 'Northern Cliff' adjacent to the Arabian Sea. It is popular for its hippie culture, shacks on the cliff serving great seafood and playing global music and the samadhi of Kerala's saint Sree Narayana Guru.",
        images: "https://www.varkkala.com/uploads/slides/2435199045.jpg",
        location:
          "https://www.google.co.in/maps/place/Varkala,+Kerala/data=!4m2!3m1!1s0x3b05ef26d90220fb:0xa3ec40c67d4dd020?sa=X&ved=2ahUKEwiat__AnvnlAhUpzjgGHckOB_wQ8gEwIHoECBYQBA",
      },
      {
        name: "Poovar",
        info: "Poovar is a small rustic town situated 27 kms from Thiruvananthapuram with unspoilt, unexplored golden sand beaches and beautiful backwaters of Kerala.Also known as a fishing village, the tranquil Poovar island lies between the Arabian Sea and the Neyyar River.",
        images:
          "https://www.keralatourism.org/images/service-providers/photos/property-3322-Exterior-11040-20180831082544.jpg",
        location:
          "https://www.google.co.in/maps/place/Poovar,+Kerala+695525/@8.3223957,77.0598044,15z/data=!3m1!4b1!4m5!3m4!1s0x3b05a9085a9c7bad:0xae2a78c866e7e46d!8m2!3d8.3177774!4d77.0708759",
      },
      {
        name: "Kovalam",
        info: "Kovalam is an idyllic coastal town located around 13 km from Thiruvananthapuram in Kerala. Famous for its three adjacent crescent-shaped shallow water and low tidal beaches, Kovalam is dotted with resorts and ayurvedic massage centres.",
        images: "https://www.kovalam.com/files/slides/8838110887.jpg",
        location:
          "https://www.google.co.in/maps/place/Kovalam,+Kerala/data=!4m2!3m1!1s0x3b05a5090a19ec65:0xb67f315bc0b762ac?sa=X&ved=2ahUKEwi284Swn_nlAhXgzTgGHcQ1D_UQ8gEwJHoECBgQBA",
      },
      {
        name: "Sabarimala",
        info: "More than 30 million pilgrims visit the temple in Sabarimala annually, making it the largest in India and second largest in the world, after Hajj Pilgrimage of Mecca in Saudi Arabia. ",
        images:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/PTI11_16_2019_000158B-770x433.jpeg?eFOiXxMDU61sAiFgEzJPjbOtsTtRQPKo",
        location:
          "https://www.google.co.in/maps/place/Sabarimala,+Kerala/data=!4m2!3m1!1s0x3b065b984dd41c11:0x953037d850a3006e?sa=X&ved=2ahUKEwi1uorbn_nlAhVUzTgGHRcCDFcQ8gEwJ3oECBYQBA",
      },
      {
        name: "Kollam",
        info: "A treasure trove of natural wonders and historical edifices, Kollam is an enchanting town with backwaters and picturesque landscapes.",
        images:
          "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
        location:
          "https://www.google.co.in/maps/place/Kollam,+Kerala/@8.9040558,76.5250328,12z/data=!3m1!4b1!4m5!3m4!1s0x3b05fc5bdda9c621:0x8bf03195267372f7!8m2!3d8.8932118!4d76.6141396",
      },
      {
        name: "Trivandrum",
        info: "Offering an appealing blend of a strongly rooted heritage and a nostalgic colonial legacy, the city of Trivandrum has an exceptional vibe to it.",
        images:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a9/f3/43/great-views.jpg?w=2000&h=800&s=1",
        location:
          "https://www.google.co.in/maps/place/Thiruvananthapuram,+Kerala/data=!4m2!3m1!1s0x3b05bbb805bbcd47:0x15439fab5c5c81cb?sa=X&ved=2ahUKEwjHvvn_oPnlAhVV4jgGHRluCM4Q8gEwFnoECB0QBA",
      },
    ],
    guides: [
      {
        Guide_name: "Rajesh Kumar",
        Category: "Backwater Tours",
        guide_location: "Alleppey",
        State: "Kerala",
        Country: "India",
        ProfileImg: "https://assets.cntraveller.in/photos/6528e2702e0c5748b130ae42/master/w_1600,c_limit/IMG_20230526_140153%20(1).jpg",
        Experience: "12 years",
        Rating: 4.9
      },
      {
        Guide_name: "Priya Patel",
        Category: "Ayurvedic Retreats",
        guide_location: "Kochi",
        State: "Kerala",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.20FitzkFZUDPa2IIwGtIRwHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
        Experience: "8 years",
        Rating: 4.7
      },
      {
        Guide_name: "Rahul Singh",
        Category: "Wildlife Safaris",
        guide_location: "Wayanad",
        State: "Kerala",
        Country: "India",
        ProfileImg: "https://media-cdn.tripadvisor.com/media/photo-s/14/f3/2d/0e/caption.jpg",
        Experience: "10 years",
        Rating: 4.8
      },
      {
        Guide_name: "Anita Nair",
        Category: "Cultural Tours",
        guide_location: "Kochi",
        State: "Kerala",
        Country: "India",
        ProfileImg: "https://www.bing.com/images/search?view=detailV2&ccid=AaT9541e&id=384DFF99379A973E0C084048C55E8E1A69512EE6&thid=OIP.AaT9541erUfQBQbpf7K-ewHaLH&mediaurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fbeautiful-asian-girl-having-vacation-party-beach-asia-91813406.jpg&exph=900&expw=600&q=The+Female+in+Tourist&simid=608048377794100916&form=IRPRST&ck=738C5376408E614FB7C92C22D633F008&selectedindex=6&itb=0&ajaxhist=0&ajaxserp=0&cit=ccid_ELQ%2BmbP1*cp_E8F16C8A1474B5D830430DA65D80CA50*mid_94538B38C523C91B090C149E9D4E5CAB0B7B4037*simid_608002571971550842*thid_OIP.ELQ-mbP1-aSD0iVgP3C4ggHaFc&vt=2",
        Experience: "15 years",
        Rating: 4.9
      },
      {
        Guide_name: "Arun Kumar",
        Category: "Adventure Activities",
        guide_location: "Thekkady",
        State: "Kerala",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.rHluyIiEbCASVOBWj1ECYAHaF3?pid=ImgDet&w=184&h=146&c=7&dpr=1.3",
        Experience: "9 years",
        Rating: 4.6
      },
      {
        Guide_name: "Deepa Menon",
        Category: "Historical Tours",
        guide_location: "Trivandrum",
        State: "Kerala",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.1wvs6057A6JHDyiOwrXFowAAAA?pid=ImgDet&w=184&h=278&c=7&dpr=1.3",
        Experience: "11 years",
        Rating: 4.8
      }
    ],
  },
  {
    name: "Maharashtra",
    capital: "Mumbai",
    about: "Maharashtra, the land of everything unlimited invites you into its widespread plethora of attractions. It is adorned by the beautiful Sahyadri ranges of the Western Ghats with high mountains that disappear into the morning mist.",
    climate: "Summer: March, April and May are the hottest months. During April and May thunderstorms are common all over the state. Temperature varies between 22°C-39°C during this season. Rainy: Rainfall starts normally in the first week of June.",
    history: "The modern state of Maharashtra is bordered by the Arabian Sea to the West, Gujrat and the Union Territory of Dadara Nagar haveli to the North West,Madhya Pradesh to the North & North East, Chhattisgadh to the East, Karnataka to the South.",
    time: "There is no particular best time to explore the state since the eevry season has its own pros and cons. However, winters are most suitable since the weather remains calm and pleasant. Summers are too scorching but are perfect to visit hilly regions.",
    food: "Maharashtrian cuisine is one which can tickle and surprise your taste buds. The food ranges from mild to really spicy food as well as flattering deserts that you will love to indulge in",
    img: [
      "https://www.tripsavvy.com/thmb/sOKirs6tks8NcKlhytwechtqOm4=/4241x2386/smart/filters:no_upscale()/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
      "https://ihpl.b-cdn.net/pictures/travelguide/other-images/dest_head_img-550.jpeg",
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/05/713821-mumbai-pune-expressway-03.jpg"
    ],
    tourist: [
      {
        name: "Mumbai",
        info: "Mumbai, the capital city of the Indian state of Maharashtra, is a spectacular paradox of chaos and hope, glamour and squalor, modernity and tradition.",
        images: "https://www.holidify.com/images/bgImages/MUMBAI.jpg",
        location: "https://www.google.co.in/maps/place/Mumbai,+Maharashtra/data=!4m2!3m1!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69?sa=X&ved=2ahUKEwib5sWm5frlAhW5xTgGHf10CCMQ8gEwKXoECBcQBA"
      },
      {
        name: "Ajanta And Ellora Caves",
        info: "Ajanta and Ellora caves, considered to be one of the finest examples of ancient rock-cut caves are located near Aurangabad in the state of Maharashtra, India.",
        images: "https://static.toiimg.com/photo/52533940/.jpg",
        location: "https://www.google.co.in/maps/place/Ajanta+Caves/@20.5518603,75.7032521,15z/data=!4m5!3m4!1s0x0:0x7ca8d7c57639691f!8m2!3d20.5518603!4d75.7032521"
      },
      {
        name: "Mahabaleshwar",
        info: "Mahabaleshwar is a hill station located in the Western Ghats, in Satara district of Maharashtra. Known for its captivating beauty and the beautiful strawberry farms.",
        images: "https://www.holidify.com/images/bgImages/MAHABALESHWAR.jpg",
        location: "https://www.google.co.in/maps/place/Mahabaleshwar,+Maharashtra+412806/@17.925819,73.6137621,13z/data=!3m1!4b1!4m5!3m4!1s0x3bc2655313cba1bb:0xca8196c7aa20a0a8!8m2!3d17.9307285!4d73.6477342"
      },
      {
        name: "Lonavala",
        info: "Popular hill station close to Pune and Mumbai, Lonavla is the place to be during monsoons. With lots of waterfalls, lakes and hills around, Lonavala is frequented by all sorts of people, especially hikers and trekkers.",
        images: "https://cdn1.goibibo.com/t_tg_fs/pune-lonavala-150034126364-orijgp.jpg",
        location: "https://www.google.co.in/maps/place/Lonavla,+Maharashtra/data=!4m2!3m1!1s0x3be801098bdf8145:0x696b4a60a5e28658?sa=X&ved=2ahUKEwiYz_Di5vrlAhV-xjgGHRRIDJsQ8gEwG3oECBsQBA"
      },
      {
        name: "Alibag",
        info: "A little coastal town tucked away in the Konkan region of Maharashtra, Alibaug is a very popular weekend getaway holiday destination and has earned itself the name of 'mini-Goa', owing to the high tourist footfall all year round.",
        images: "https://www.holidify.com/images/bgImages/ALIBAG.jpg",
        location: "https://www.google.co.in/maps/place/Alibag,+Maharashtra/@18.6581318,72.8637615,14z/data=!3m1!4b1!4m5!3m4!1s0x3be87a3b9826f96b:0xa9634e5680f68b81!8m2!3d18.6568523!4d72.8705888"
      },
      {
        name: "Shirdi",
        info: "The home of great saint Sai Baba, Shirdi is a religious site close to Nasik with various temples apart from the famous Sai Baba temple and a few historical sites.Located in the Ahmednagar district of Maharashtra",
        images: "http://jivantahotel.com/blog/wp-content/uploads/2017/02/www.jivatahotel.com_.png",
        location: "https://www.google.co.in/maps/place/Shirdi,+Maharashtra/@19.7605623,74.4590232,14z/data=!3m1!4b1!4m5!3m4!1s0x3bdc5ba7461768af:0xd802d2c2943c99c!8m2!3d19.7645364!4d74.4762124"
      },
      {
        name: "Nashik",
        info: "Nashik (Nasik), named after a relic associated with Ramayana, is a city in Maharashtra located on the banks of river Godavari. Nashik plays host to the famous Kumbh Mela every 12 years.",
        images: "https://3.bp.blogspot.com/-9E9gZXWCViM/XJ3nDqdji3I/AAAAAAABVxg/eYWwfQDFXOEruwo_ZgBoEiPL1D3LH6z6gCLcBGAs/s1600/Gondeshwar_temple.jpg",
        location: "https://www.google.co.in/maps/place/Nashik,+Maharashtra/@19.9909493,73.7334397,12z/data=!3m1!4b1!4m5!3m4!1s0x3bddd290b09914b3:0xcb07845d9d28215c!8m2!3d19.9974533!4d73.7898023"
      },
      {
        name: "Pune",
        info: "Pune is a bustling metropolis of Maharashtra, ranked number one in India in the ease of living. Often referred to as the Oxford of the East.",
        images: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/05/713821-mumbai-pune-expressway-03.jpg",
        location: "https://www.google.co.in/maps/place/Pune,+Maharashtra/@18.5245649,73.7228783,11z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437"
      },
      {
        name: "Kashid",
        info: "A Beach town, popular for its white sand and blue seas situated in Konkan region of Maharashtra, Kashid is the perfect destination for a quiet weekend getaway from Mumbai.",
        images: "https://www.holidify.com/images/bgImages/KASHID.jpg",
        location: "https://www.google.co.in/maps/place/Kashid,+Maharashtra/@18.4401081,72.8902862,14z/data=!3m1!4b1!4m5!3m4!1s0x3be01fd1dd8a6d49:0xd9e0be5a50f1b236!8m2!3d18.4420143!4d72.882793"
      }
    ],
    guides :[
      {
        Guide_name: "Nidhi Gupta",
        Category: "Cultural Tours",
        guide_location: "Pune",
        State: "Maharashtra",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.jcIthg1cYTKzkdYcklw2PwHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
        Experience: "8 years",
        Rating: 4.7
      },
      {
        Guide_name: "Meera Patel",
        Category: "Food Tours",
        guide_location: "Mumbai",
        State: "Maharashtra",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.Li9hb6anpv36mI5l96DHfwAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
        Experience: "5 years",
        Rating: 4.9
      },
      {
        Guide_name: "Rahul Singh",
        Category: "Adventure Tours",
        guide_location: "Lonavala",
        State: "Maharashtra",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.r7-G6x4_wY_Tk4eX0H90GgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
        Experience: "6 years",
        Rating: 4.6
      },
      {
        Guide_name: "Sneha Joshi",
        Category: "Nature Tours",
        guide_location: "Mahabaleshwar",
        State: "Maharashtra",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.Li9hb6anpv36mI5l96DHfwAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
        Experience: "7 years",
        Rating: 4.8
      },
      {
        Guide_name: "Prashant Sharma",
        Category: "Historical Tours",
        guide_location: "Aurangabad",
        State: "Maharashtra",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.uL4JRITF8Dz6olGJ0IW8SQHaLM?pid=ImgDet&w=184&h=278&c=7&dpr=1.3",
        Experience: "9 years",
        Rating: 4.7
      },
      {
        Guide_name: "Neha Desai",
        Category: "Shopping Tours",
        guide_location: "Mumbai",
        State: "Maharashtra",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.uJT1hid9p5rfXHR7_AW2dwAAAA?w=400&h=400&rs=1&pid=ImgDetMain",
        Experience: "4 years",
        Rating: 4.5
      }
      
    ]
  },  
  {
    name: "Uttarakhand",
    capital: "Dehradun",
    about:
      "Famously known as Devbhumi, or the Land of the Gods, Uttarakhand is a land of untouched natural beauty and sublime spirituality. Carved out from Uttar Pradesh, the state, formerly known as Uttaranchal.",
    climate:
      "Climate ranges from subtropical in the southern foothills, averaging summer temperatures of about 30° C (about 86° F) and winter temperatures of about 18° C (about 64° F).",
    history:
      "Ancient rock paintings, rock shelters, paleolithic stone tools (hundreds of thousands of years old), and megaliths provide evidence that the mountains of the region have been inhabited since prehistoric times.",
    time: "Uttarakhand can be visited throughout the year except for the peak monsoon season in July and August. Uttarakhand is an ever embracing state, but summer is the best time to visit this state when the temperature is cold and pleasant.",
    food: "The distinctive characteristic food of Uttarakhand lies in the way it is prepared- wood and charcoal are burnt which helps to keep the nutritional content intact. The food is simple, prepared with local ingredients, using herbs and spices which make the food highly energetic.",
    img: [
      "https://www.holidify.com/images/compressed/flexPage_35.jpg",
      "https://www.holidify.com/images/compressed/664.jpg?v=1.1",
      "https://www.chardham-tours.com/wp-content/uploads/2018/07/uttarakhand-tour-packages.jpg",
    ],

    tourist: [
      {
        name: "Rishikesh",
        info: 'Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh (also called as Hrishikesh) is known for its adventure activities',
        images: "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
        location:
          "https://www.google.co.in/maps/place/Rishikesh,+Uttarakhand/@30.0876602,78.2005685,12z/data=!3m1!4b1!4m5!3m4!1s0x39093e67cf93f111:0xcc78804a6f941bfe!8m2!3d30.0869281!4d78.2676116",
      },
      {
        name: "Nainital",
        info: "The gem of Uttarakhand - Nainital is a charming hill station that sits prettily at the green foothills of the Kumaon ranges in the Himalayas. Located at an elevation of around 1938 metres",
        images: "https://www.holidify.com/images/bgImages/NAINITAL.jpg",
        location:
          "https://www.google.co.in/maps/place/Nainital,+Uttarakhand/@29.3835928,79.4377611,14z/data=!3m1!4b1!4m5!3m4!1s0x39a0a1bc28fd9d61:0x7cae7ba916987db3!8m2!3d29.3919202!4d79.4542033",
      },
      {
        name: "Mussorie",
        info: "If your idea of the perfect holiday involves tranquil hills, untouched nature and a holiday experience that is unadulterated in the truest sense of the term, Mussoorie is the place you should be heading to.",
        images: "https://www.holidify.com/images/bgImages/MUSSOORIE.jpg",
        location:
          "https://www.google.co.in/maps/place/Mussoorie,+Uttarakhand/@30.4547186,78.0414204,13z/data=!3m1!4b1!4m5!3m4!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!8m2!3d30.4597892!4d78.0643723",
      },
      {
        name: "Badrinath",
        info: "Perched on the Garhwal hill tracks, near Alaknanda River, the most sacred Badrinath Temple or the Badrinarayan Temple is dedicated to Lord Vishnu. The temple is also one of the four Char Dham and Chota Char Dham pilgrimage yatras.",
        images: "https://www.holidify.com/images/bgImages/BADRINATH%20.jpg",
        location:
          "https://www.google.co.in/maps/place/Badrinath,+Uttarakhand+246422/@30.7417338,79.4852149,15z/data=!3m1!4b1!4m5!3m4!1s0x39a78e9f973108e7:0xf05a8b5e0c71473!8m2!3d30.7433085!4d79.4937634",
      },
      {
        name: "Haridwar",
        info: "Haridwar, considered to be among the seven holiest cities in India, is an ancient city located on the banks of River Ganga in the Garhwal region of Uttarakhand. Dotted with temples, ashrams and narrow lanes across the city.",
        images: "https://www.holidify.com/images/bgImages/HARIDWAR.jpg",
        location:
          "https://www.google.co.in/maps/place/Haridwar,+Uttarakhand/@29.9526313,78.0458849,12z/data=!3m1!4b1!4m5!3m4!1s0x3909470eb8ee57c9:0x4e449176a640f5f3!8m2!3d29.9456906!4d78.1642478",
      },
      {
        name: "Jim Corbett National Park",
        info: "The oldest National Park in India, Jim Corbett National Park was established in 1936 as Hailey National Park and is home to the critically endangered species of the Royal Bengal Tiger. It was the first place where Project Tiger was launched in 1973.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/djbfhsdfb_20181212152809.jpeg",
        location:
          "https://www.google.co.in/maps/place/Jim+Corbett+National+Park/@29.5300138,78.7724716,17z/data=!3m1!4b1!4m5!3m4!1s0x390a24ffffffffff:0x3017b72d3d253fd7!8m2!3d29.5300138!4d78.7746603",
      },
      {
        name: "Kedarnath",
        info: 'Kedarnath is one of the most sacred Hindu temples as it is a part of Chhota Char Dham Yatra in Uttarakhand. The temple is the highest among the 12 Jyotirlingas dedicated to Lord Shiva.',
        images: "https://www.holidify.com/images/bgImages/KEDARNATH.jpg",
        location:
          "https://www.google.co.in/maps/place/Kedarnath,+Uttarakhand+246445/@30.7344814,79.0625578,16z/data=!3m1!4b1!4m5!3m4!1s0x39083ee051e628b1:0x167ce4efaf440f1e!8m2!3d30.7346267!4d79.0668943",
      },
      {
        name: "Auli",
        info: "Dotted with the apple orchards, old oaks and pine trees there is no dearth of natural beauty in Auli. Apart from skiing you can also go for numerous treks in the hills of Garhwal Himalayas and enjoy the spellbinding views of the snow-draped mountains.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/sdfsdsdgsdgsdg_20181211083314.jpg",
        location:
          "https://www.google.co.in/maps/place/Auli,+Himachal+Pradesh+171210/@30.9494163,77.739048,15z/data=!3m1!4b1!4m5!3m4!1s0x390f50aafcc75db9:0xdc3ec1a504bf4830!8m2!3d30.949417!4d77.7478028",
      },
      {
        name: "Dehradun",
        info: "Nestled amidst the Doon Valley in the state of Uttarakhand, Dehradun is a very popular hill station that beckons solo travellers, families and couples alike. Proudly boasting of a scenic backdrop of the Garhwal Himalayas",
        images: "https://www.holidify.com/images/bgImages/DEHRADUN.jpg",
        location:
          "https://www.google.co.in/maps/place/Dehradun,+Uttarakhand/@30.3254098,77.9470938,12z/data=!3m1!4b1!4m5!3m4!1s0x390929c356c888af:0x4c3562c032518799!8m2!3d30.3164945!4d78.0321918",
      },
      {
        name: "Almora",
        info: 'Famous for its rich cultural heritage, unique handicrafts, sumptuous cuisine and magnificent wildlife, coupled with an easy accessibility, Almora promises its tourists a visit full of fun and unforgettable moments.',
        images: "https://www.holidify.com/images/bgImages/ALMORA.jpg",
        location:
          "https://www.google.co.in/maps/place/Almora,+Uttarakhand/data=!4m2!3m1!1s0x39a0b7328910d81f:0x9811d25dd87d8ed5?sa=X&ved=2ahUKEwj84dL0kIDmAhXSzDgGHWwiAgcQ8gEwKHoECBgQBA",
      },
      {
        name: "Dhanaulti",
        info: "With minimal human intrusion, without overloading or overwhelming your senses or expectations, Dhanaulti slowly seeps into your conscience like a long lost pleasant dream, bringing with it comfort and quiet.",
        images:
          "https://www.holidify.com/images/foreign/compressed/attr_123716.jpg",
        location:
          "https://www.google.co.in/maps/place/Dhanaulti,+Uttarakhand/@30.4042688,78.2158203,14z/data=!3m1!4b1!4m5!3m4!1s0x3908df1c5802cb27:0x8d7cc78f77682e05!8m2!3d30.4049903!4d78.2333743",
      },
      {
        name: "Ranikhet",
        info: "Ranikhet meaning Queen's farm, is a hill station developed by the Britishers around ancient temples, undulating Himalayan hills and forests.Ranikhet with its cool climate and simple natural beauty can freshen up your senses to the very core.",
        images: "https://www.holidify.com/images/bgImages/RANIKHET.jpg",
        location:
          "https://www.google.co.in/maps/place/Ranikhet,+Uttarakhand/@29.6420292,79.4020335,13z/data=!3m1!4b1!4m5!3m4!1s0x39a0abd4273fb1dd:0x17d59cc393c2ccdc!8m2!3d29.6433615!4d79.4321825",
      },
      {
        name: "Lansdowne",
        info: "Perched amidst the Garhwal Hills of Uttarakhand, Lansdowne is a quaint little hill town that not many tourists know of. Off the beaten tourist trail, Lansdowne is an untouched, pristine town, miles away from the hustle and bustle of the city.",
        images: "https://www.holidify.com/images/bgImages/LANSDOWNE.jpg",
        location:
          "https://www.google.co.in/maps/place/Lansdowne,+Uttarakhand+246155/@29.8433325,78.6711537,15z/data=!3m1!4b1!4m5!3m4!1s0x390982b9e5122989:0x2798532cabd61501!8m2!3d29.8377457!4d78.6871069",
      },
      {
        name: "Bhimtal",
        info: "Located at a distance of 23 kilometres from Nainital in Uttarakhand, Bhimtal is an offbeat version of Nainital, most famous for the picturesque Bhimtal Lake. Bounded with a dense forest of oaks, pine and shrubs,",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/18461307841_3e8be80572_b_20180205182813.jpg",
        location:
          "https://www.google.co.in/maps/place/Bhimtal,+Uttarakhand+263136/@29.3489227,79.5360265,14z/data=!3m1!4b1!4m5!3m4!1s0x39a098214690ff0d:0x3adc3244429741dc!8m2!3d29.346082!4d79.5519144",
      },
      {
        name: "Joshimath",
        info: "Joshimath, also known as Jyotirmath, is a hill town perched at the height of 6150 feet in Chamoli district of Gharwal region of Uttarakhand.",
        images: "https://www.holidify.com/images/tooltipImages/JOSHIMATH.jpg",
        location:
          "https://www.google.co.in/maps/place/Joshimath,+Uttarakhand+246443/@30.5541844,79.5457361,14z/data=!3m1!4b1!4m5!3m4!1s0x39a79cad49e7760f:0x9897a724d1bf7174!8m2!3d30.5505524!4d79.5659633",
      },
      {
        name: "Mukteshwar",
        info: "Mukteshwar is a small hill town located around 50 km from Nainital in Uttarakhand. Known for adventure sports and a dazzling view of Himalayan ranges.",
        images: "https://www.holidify.com/images/bgImages/MUKTESHWAR.jpg",
        location:
          "https://www.google.co.in/maps/place/Mukteshwar,+Uttarakhand/@29.4679952,79.6325108,14z/data=!3m1!4b1!4m5!3m4!1s0x39a0bbfdf924848f:0x72b5b5db99b0efdb!8m2!3d29.4604149!4d79.6558242",
      },
      {
        name: "Rudra Prayag",
        info: "Lying at the confluence of River Alaknanda and River Mandakini, Rudraprayag is a sacred place regarded as one of the Panch Prayags and place of great religious significance.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/RudraprayagConfluence_20171012211252.JPG",
        location:
          "https://www.google.co.in/maps/place/Rudraprayag,+Uttarakhand+246171/@30.285391,78.9709604,15z/data=!3m1!4b1!4m5!3m4!1s0x3909b7aea36f26f1:0x9eb43bf27ef18d47!8m2!3d30.2844141!4d78.9811407",
      },
      {
        name: "Uttarkashi",
        info: "Endearingly called as Devbhoomi, Uttarkashi, literally meaning 'Kashi of the North', is a quaint little town tucked away in the hill state of Uttarakhand.",
        images:
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Uttarkashi_trip.jpg",
        location:
          "https://www.google.co.in/maps/place/Uttarkashi,+Uttarakhand/@30.7249569,78.4114192,14z/data=!3m1!4b1!4m5!3m4!1s0x3908ed2ff38e31ef:0x7fdeebfe93c9add1!8m2!3d30.7268307!4d78.4354042",
      },
      {
        name: "DevPrayag",
        info: "Marked by the confluence point of rivers Alaknanda and Bhagirathi, Devprayag is a religious hub and is quite popular among tourists coming for pilgrimage or seeking some solitude close to nature.Situated amidst rolling Himalayan ranges.",
        images: "https://www.holidify.com/images/bgImages/DEVPRAYAG.jpg",
        location:
          "https://www.google.co.in/maps/place/Devprayag,+Uttarakhand/@30.1458785,78.5961056,16z/data=!3m1!4b1!4m5!3m4!1s0x3909090d5b91180d:0x5d7916d17f992317!8m2!3d30.1459471!4d78.5992925",
      },
    ],
    guides :[
      {
          Guide_name: "Rajesh Thakur",
          Category: "Trekking",
          Location: "Manali",
          State: "Himachal Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.MIyUyXi_6-QQCSmD-2pc7gHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
          Experience: "15 years",
          Rating: 4.8
      },
      {
          Guide_name: "Anjali Sharma",
          Category: "Sightseeing",
          Location: "Shimla",
          State: "Himachal Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.mv3ATF21adz5pT2jUXI8twHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
          Experience: "10 years",
          Rating: 4.6
      },
      {
          Guide_name: "Lovely Singh",
          Category: "Adventure Sports",
          Location: "Kullu",
          State: "Himachal Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.EpPETGHpZzRU8U6wejwKCwHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
          Experience: "12 years",
          Rating: 4.7
      },
      {
          Guide_name: "Vivek Singh",
          Category: "Baidyanath Temple",
          Location: "Deoghar",
          State: "Jharkhand",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.H9zjfARkcnpH24LMRzYkqwHaK3?pid=ImgDet&w=184&h=270&c=7&dpr=1.3",
          Experience: "12 years",
          Rating: 4.7
      },
      {
          Guide_name: "Shneha Sharma",
          Category: "Rock Garden",
          Location: "Chandigarh",
          State: "Punjab",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.dtAtKOCQZ9Kht0Bh7ZdzjwHaJQ?pid=ImgDet&w=206&h=257&c=7&dpr=1.3",
          Experience: "10 years",
          Rating: 4.5
      },
      {
          Guide_name: "Prema Singh",
          Category: "Sukhna Lake",
          Location: "Chandigarh",
          State: "Punjab",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.cxBvbEJYWqxWsCQKnlUinwHaK5?pid=ImgDet&w=184&h=270&c=7&dpr=1.3",
          Experience: "8 years",
          Rating: 4.3
      }
  ]  
  },
  {
    name: "Himachal Pradesh",
    capital: "Shimla",
    about:
      "A place of immense beauty and charm, Himachal is endowed with clear and serene lakes, lofty mountains, ancient temples and cheerful people. Home to some of the best tourist destinations like Kullu, Manali, Chamba and Shimla, Himachal is paradise on earth inviting an onslaught of tourists all around the year.",
    climate:
      "There is a huge variation in the climatic conditions of Himachal Pradesh due to variation in altitude (450–6500 metres). The climate varies from hot and sub-humid tropical (450–900 metres) in the southern low tracts.",
    history:
      "During the Vedic period, several small republics known as Janapada existed which were later conquered by the Gupta Empire. After a brief period of supremacy by King Harshavardhana, the region was divided into several local powers headed by chieftains.",
    time: "Best time to visit Himachal is between February and June (spring and summer). The state also undergoes a beautiful transformation during the winters, i.e. between October and February making it an ideal time to experience snow (at places located on higher altitudes)",
    img: [
      "https://toib.b-cdn.net/wp-content/uploads/2018/01/shimla.jpg",
      "https://static.toiimg.com/thumb/70229685/janjehli.jpg?width=748&height=499",
    ],
    tourist: [
      {
        name: "Manali",
        info: "Nestled in between the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges, Manali is one of the most popular hill stations in the country.",
        images: "https://www.holidify.com/images/bgImages/MANALI.jpg",
        location:
          "https://www.google.co.in/maps/place/Manali,+Himachal+Pradesh/@32.2394177,77.1696102,14z/data=!3m1!4b1!4m5!3m4!1s0x39048708163fd03f:0x8129a80ebe5076cd!8m2!3d32.2396325!4d77.1887145",
      },
      {
        name: "Shimla",
        info: "Situated at a height of 2200m, Shimla is the capital and the largest city of Himachal Pradesh in India. Set amidst beautiful hills and mystical woods.",
        images: "https://www.holidify.com/images/bgImages/SHIMLA.jpg",
        location:
          "https://www.google.co.in/maps/place/Shimla,+Himachal+Pradesh/@31.0782147,77.1240016,13z/data=!3m1!4b1!4m5!3m4!1s0x390578e3e35d6e67:0x1f7e7ff6ff9f54b7!8m2!3d31.1048145!4d77.1734033",
      },
      {
        name: "Mcleodganj",
        info: "Mcleodganj is a hill station near Dharamshala, popular among trekkers. Its culture is a beautiful blend of Tibetan with some British influence.",
        images: "https://www.holidify.com/images/bgImages/MCLEODGANJ.jpg",
        location:
          "https://www.google.co.in/maps/place/McLeod+Ganj,+Dharamshala,+Himachal+Pradesh/@32.2450192,76.3068294,15z/data=!3m1!4b1!4m5!3m4!1s0x391b56d4e3d36d19:0xa3e8725f0584be76!8m2!3d32.2425758!4d76.3212781",
      },
      {
        name: "Dalhousie",
        info: "The tiny tinsel town Dalhousie tucked away in the lap of Himachal Pradesh is a piece of paradise for all the travellers.",
        images: "https://www.holidify.com/images/bgImages/DALHOUSIE.jpg",
        location:
          "https://www.google.co.in/maps/place/Dalhousie,+Himachal+Pradesh/@32.5402904,75.9560874,14z/data=!3m1!4b1!4m5!3m4!1s0x391c9138637f1ae1:0xbac8f1954c198c20!8m2!3d32.5387385!4d75.9709978",
      },
      {
        name: "Spiti Valley",
        info: "Long winding roads and valleys that present unforgettable glimpses of cold desert and snow-crowned mountains welcome you when you set foot into Spiti Valley.",
        images: "https://www.holidify.com/images/bgImages/SPITI.jpg",
        location:
          "https://www.google.co.in/maps/place/Spiti+Valley,+Marango+Rangarik,+Himachal+Pradesh+172114/@32.2461362,78.0261612,15z/data=!3m1!4b1!4m5!3m4!1s0x3906a40ef42dc09b:0x52b583a91132a239!8m2!3d32.246137!4d78.034916",
      },
      {
        name: "Kasol",
        info: "A small village in Himachal situated along the banks of the river Parvati, Kasol is a tourist attraction that is rapidly gaining fame as a very popular hub for trekkers, backpackers, and nature lovers.",
        images: "https://www.holidify.com/images/compressed/dest_wiki_6702.jpg",
        location:
          "https://www.google.co.in/maps/place/Kasol,+Himachal+Pradesh+175105/@32.0098591,77.312116,17z/data=!3m1!4b1!4m5!3m4!1s0x39045c4474aa31e9:0xf112d2e32b47949d!8m2!3d32.0099986!4d77.3149625",
      },
      {
        name: "Dharamshala",
        info: "Dharamsala is famed as the holy residence of the Dalai Lama and houses the Tibetan monk in exile. Dharamsala is located in Kangra district at a distance of 18km from Kangra City. The city is distinctively separated as upper and lower divisions with different altitudes.",
        images: "https://www.holidify.com/images/bgImages/DHARAMSALA.jpg",
        location:
          "https://www.google.co.in/maps/place/Dharamshala,+Himachal+Pradesh/@32.2167773,76.3016556,14z/data=!3m1!4b1!4m5!3m4!1s0x391b50df65bd7311:0x3e08bdb100c6dc10!8m2!3d32.219042!4d76.3234037",
      },
      {
        name: "Tirthan Valley",
        info: "The land of untouched and mystifying beauty, Tirthan Valley is a destination with a plethora of delights. Lying nearly 3 km from the entrance of Great Himalayan National Park, this place is abundant in adventurous activities and a paradise for nature lovers.",
        images: "https://www.holidify.com/images/bgImages/TIRTHAN-VALLEY.jpg",
        location:
          "https://www.google.co.in/maps/place/Tirthan+Valley/@31.6376776,77.3418905,17z/data=!3m1!4b1!4m5!3m4!1s0x3905add9fd04eb17:0xa5d8ce3f5d2f42df!8m2!3d31.6376776!4d77.3440792",
      },
      {
        name: "Kasauli",
        info: "Located on the way from Chandigarh to Shimla, Kasauli is a hilly cantonment town which makes for an ideal peaceful holiday location, away from the rush.Kasauli is a small town in the south-west part of Himachal and is on the relatively lower edges of Himalayas.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/iuubub_20181011181109.jpg",
        location:
          "https://www.google.co.in/maps/place/Kasauli,+Himachal+Pradesh/@30.8995898,76.9503449,14z/data=!3m1!4b1!4m5!3m4!1s0x390f88e0ddfe0b27:0x2cf1b6ec9befd181!8m2!3d30.90129!4d76.9648753",
      },
      {
        name: "Kinnaur",
        info: 'Kinnaur, also known as "Land of God" is about 235 Km from Shimla and is known for its serenity and beauty of the lush green and rocky mountainscape having Satluj, Baspa and Spiti river meandering through it.',
        images: "https://www.holidify.com/images/bgImages/KINNAUR.jpg",
        location:
          "https://www.google.co.in/maps/place/Kinnaur,+Himachal+Pradesh/@31.5918866,77.8154937,9z/data=!3m1!4b1!4m5!3m4!1s0x390643bef5f84a51:0xddfea72b01d3f354!8m2!3d31.6509576!4d78.4751945",
      },
      {
        name: "Kufri",
        info: "Kufri in Shimla district, Himachal Pradesh is one of the most sought after holiday destinations, and more so for couples, because of its proximity to Shimla and relatively higher altitude which makes it a place with snow all through the winters.",
        images: "https://www.holidify.com/images/bgImages/KUFRI.jpg",
        location:
          "https://www.google.co.in/maps/place/Kufri,+Himachal+Pradesh/@31.1003579,77.2589384,15z/data=!3m1!4b1!4m5!3m4!1s0x390583e9fa930c1d:0x557edf73688dd0d5!8m2!3d31.0978583!4d77.2678137",
      },
      {
        name: "Chamba",
        info: "Chamba is a Himalayan town located in Chamba district of Himachal Pradesh. Known for the ancient temples, the caves, and the edifices that speak highly of Indian history, Chamba is famous for the gob-smacking views of the Pir Panjal, Zanskar and Dhauladhar ranges set in the backdrop of a picture-postcard town.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/Pir_Panjal_&_Chamera_Lake_20190210174543.jpg",
        location:
          "https://www.google.co.in/maps/place/Chamba,+Himachal+Pradesh/@32.5473433,76.0962028,13z/data=!3m1!4b1!4m5!3m4!1s0x391cbdcc1d2b79c9:0x4d6719d7059007af!8m2!3d32.5533633!4d76.1258083",
      },
      {
        name: "Chail",
        info: "Chail is a quiet hill station close to Shimla, known for the world's highest cricket ground and the heritage hotel, Chail Palace, in the midst of pine and deodar trees.",
        images: "https://www.holidify.com/images/bgImages/CHAIL.jpg",
        location:
          "https://www.google.co.in/maps/place/Chail,+Himachal+Pradesh+173217/@30.9685464,77.1758651,14z/data=!3m1!4b1!4m5!3m4!1s0x390f7ff448852819:0x3580141bd7f106e6!8m2!3d30.9676214!4d77.1916497",
      },
      {
        name: "Mandi",
        info: "Packed with a thick green cover of pine and deodar trees, the town of Mandi is situated at the junction of Kullu and Dharamshala. It is often referred to as 'Varanasi of Hills', or 'Choti Kashi' as the town has as many as 81 temples spread across its area.",
        images: "https://www.holidify.com/images/tooltipImages/MANDI.jpg",
        location:
          "google.co.in/maps/place/Mandi,+Himachal+Pradesh/@31.7094734,76.9232438,14z/data=!3m1!4b1!4m5!3m4!1s0x3904e238c88ea491:0x87e6743a04fb62fe!8m2!3d31.7087153!4d76.9320104",
      },
      {
        name: "Kullu",
        info: "Kullu, a popular tourist destination generally coupled with Manali, is an open valley with panoramic views and majestic hills covered with Deodar and Pine trees.Situated at an altitude of 1230 meters, Kullu is a nature lover's paradise. Abundant with lush greenery, pristine river streams and a wonderful climate, Kullu is known as one of the most popular tourist spots in Himachal Pradesh.",
        images:
          "https://www.holidify.com/blog/wp-content/uploads/2014/09/286594254_5455f2e097_o.jpg",
        location:
          "https://www.google.co.in/maps/place/Kullu,+Himachal+Pradesh+175101/@31.9545843,77.0937828,14z/data=!3m1!4b1!4m5!3m4!1s0x3904f6a95c673edb:0x40f8c144f79ad609!8m2!3d31.957851!4d77.1094597",
      },
      {
        name: "Kaza",
        info: "Kaza, sitting huddled in the corner of Himachal Pradesh is a tranquil getaway on the plains of the Spiti River. Lapped by majestic mountains covered in snow, meandering and bubbling rivers and streams and picturesque barren landscape with scattered patches of green, Kaza is a dream destination.It is divided in to two parts: old and new Kaza, each accommodating government offices and king's palace respectively.",
        images: "https://www.holidify.com/images/bgImages/KAZA.jpg",
        location:
          "https://www.google.co.in/maps/place/Kaza,+Himachal+Pradesh+172114/@32.2251708,78.0523144,14z/data=!3m1!4b1!4m5!3m4!1s0x3906a374a0af9f8b:0x6ec85005a1175d47!8m2!3d32.2275991!4d78.0709903",
      },
      {
        name: "Palampur",
        info: "Nestled between the majestic Dhauladhar Ranges, Palampur is known for its tea plantations and its excellent quality of tea. Palampur was first noticed by the Englishmen and was soon turned into a bustling town as the centre of trade and commerce. Their presence in this town is beautifully reflected in the Victorian style mansions and castles.",
        images: "https://www.holidify.com/images/compressed/5199.jpg",
        location:
          "https://www.google.co.in/maps/place/Palampur,+Himachal+Pradesh/@32.1192814,76.5056556,13z/data=!3m1!4b1!4m5!3m4!1s0x3904b3e0d1e63ac9:0x11046afda32dfd59!8m2!3d32.1108599!4d76.5362526",
      },
      {
        name: "Nahan",
        info: "Away from the buzzing crowd of the city, Nahan is a perfect romantic getaway. Lying among the lofty Shivalik range overlooking lush green fields, dirt free roads and clean streets, this small hill station serves as an ideal holiday destination.Nahan has its past spun around many tales and legends.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/kangojodi_20180806205221.jpg",
        location:
          "google.co.in/maps/place/Nahan,+Himachal+Pradesh+173001/@30.5600418,77.2758363,14z/data=!3m1!4b1!4m5!3m4!1s0x390f0c0853d80c9b:0xdaf447e96e7ae7c3!8m2!3d30.5599327!4d77.295483",
      },
      {
        name: "Kangra",
        info: "Kangra is a district in Himachal Pradesh with Dharamshala as the administrative headquarters. With might Beas River flowing through the Valley, Kangra is also known for the backdrop of Dhauladar range, ancient temples and endless tea plantations. Repeated mention of the Valley in the holy Hindu texts, present Kangra as 'Devbhumi' or Land of the Gods.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1276735357_20191007124639_20191007124659.png",
        location:
          "https://www.google.co.in/maps/place/Kangra,+Himachal+Pradesh+176001/@32.1029683,76.2551163,14z/data=!3m1!4b1!4m5!3m4!1s0x391b458198590ddf:0xad8e3ff3dfe5b1fe!8m2!3d32.0998031!4d76.2691006",
      },
      {
        name: "Narkanda",
        info: "Situated at a height of 9000 feet, this town attracts tourists for its ethereal natural beauty and its beautiful apple orchards. Surrounded by tropical forests and majestic hills, this is one place that tourists to Himachal Pradesh should not miss. Narkanda also has a lake called the Tannu Jabar Lake which is one of the most important tourist attraction here.",
        images: "https://www.holidify.com/images/bgImages/NARKANDA.jpg",
        location:
          "https://www.google.co.in/maps/place/Narkand,+Himachal+Pradesh+171213/@31.2587059,77.4544286,16z/data=!3m1!4b1!4m5!3m4!1s0x390591661a142a1d:0x5feef9c405007657!8m2!3d31.2577718!4d77.4601581",
      },
      {
        name: "Manikaran Sahib",
        info: "Located at a distance of 4km from Kasol in the Parvati Valley along the banks of river Parvati in the Kullu District of Himachal Pradesh, Manikaran is known as a famous pilgrimage destination for both Sikhs and Hindus. A good number of temples, Gurudwara Manikaran Sahib and hot springs forms the religious pattern of the place and attract several people.",
        images: "https://www.holidify.com/images/bgImages/MANIKARAN-SAHIB.jpg",
        location:
          "https://www.google.co.in/maps/place/Gurudwara+Manikaran+Sahib/@32.0270448,77.3427227,17z/data=!3m1!4b1!4m5!3m4!1s0x39045ce615555555:0x3a27550ec7c38e2a!8m2!3d32.0270448!4d77.3449114",
      },
      {
        name: "Solang Valley",
        info: "When heading to Manali for a vacation, two absolutely essential destinations in the itinerary are Rohtang and Solang Valley. 14 kilometres to the north west of the main town of Manali, Solang Valley is one of the most popular tourist destinations in Himachal Pradesh.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_633164246_20190904103856_20190904103926.jpg",
        location:
          "https://www.google.co.in/maps/place/Solang+Valley/@32.3174354,77.1513273,17z/data=!3m1!4b1!4m5!3m4!1s0x3904873b67f51935:0x711b3f450dfe5abf!8m2!3d32.3174354!4d77.153516",
      },
      {
        name: "Beas Kund Trek",
        info: "Other than being famous a tourist destination, Manali is also the way to one of the most undertaken treks - the Beas Kund Trek. This trek is a perfect weekend getaway plan which takes you away from the hustle and bustle of the city life.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/6103594064_86a392d5b5_b_20180813140617.jpg",
        location:
          "https://www.google.co.in/maps/place/Beas+Kund+Trek/@32.3528046,77.1130119,17z/data=!3m1!4b1!4m5!3m4!1s0x39048168b4e9b33b:0x5d36383cf7bef7ea!8m2!3d32.3528046!4d77.1152006",
      },
      {
        name: "Kheerganga Trek",
        info: "Kheer Ganga (3050 meters) lies at the extreme end of Parvati valley and the last inhibited village while trekking to pin valley via Pin-Parvati pass. Kheerganga's panoramic skies and vast greenery are a much-needed delight to the trekker's eyes and especially the tired legs.",
        images: "https://www.holidify.com/images/compressed/dest_wiki_6702.jpg",
        location:
          "https://www.google.co.in/maps/place/Kheerganga+Trekking/@31.9929633,77.4864388,17z/data=!3m1!4b1!4m5!3m4!1s0x39044773d4420251:0xf3ca2f9d1ab1a5f9!8m2!3d31.9929633!4d77.4886275",
      },
    ],
    food: "A staple meal in the state would consist of Dals, rice, broth, roti and sabzi. Meat, especially red meat is also a favourite, and almost all delicacies here are prepared with a rich gravy, fragrant with local aromatic spices and herbs. With few of these constants in place.",
    guides:[
      {
          Guide_name: "Rajesh Thakur",
          Category: "Trekking",
          Location: "Manali",
          State: "Himachal Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.Zm20_nH-xHBnhqAOUyYWcQHaLL?pid=ImgDet&w=184&h=278&c=7&dpr=1.3",
          Experience: "15 years",
          Rating: 4.8
      },
      {
          Guide_name: "Anjali Sharma",
          Category: "Sightseeing",
          Location: "Shimla",
          State: "Himachal Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.EsemZcrPtkOOjrBCrcYrDwAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
          Experience: "10 years",
          Rating: 4.6
      },
      {
          Guide_name: "Vikram Singh",
          Category: "Adventure Sports",
          Location: "Kullu",
          State: "Himachal Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.uL4JRITF8Dz6olGJ0IW8SQHaLM?pid=ImgDet&w=184&h=278&c=7&dpr=1.3",
          Experience: "12 years",
          Rating: 4.7
      },
      {
          Guide_name: "Vivek Singh",
          Category: "Baidyanath Temple",
          Location: "Deoghar",
          State: "Jharkhand",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.BzxW-oJaNPFh9mtRcelV6wAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
          Experience: "12 years",
          Rating: 4.7
      },
      {
          Guide_name: "Pooja Singh",
          Category: "Sukhna Lake",
          Location: "Chandigarh",
          State: "Punjab",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.ajvBA_-7YgzLYrRFWgkxaAHaE8?pid=ImgDet&w=184&h=122&c=7&dpr=1.3",
          Experience: "8 years",
          Rating: 4.3
      },
      {
          Guide_name: "Karan Malhotra",
          Category: "Rose Garden",
          Location: "Chandigarh",
          State: "Punjab",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/R.e68b933710a70f505df10915d664d33e?rik=S7%2frqXQL2HgsEQ&riu=http%3a%2f%2ftravelsfinders.com%2fwp-content%2fuploads%2f2018%2f04%2findia-tour-guide-hd-16.jpg&ehk=cXdcXfJgECfSGdRPdueT9ZCPEOZUN8djI4U8a%2fIdqEs%3d&risl=&pid=ImgRaw&r=0",
          Experience: "12 years",
          Rating: 4.6
      },
      {
          Guide_name: "Rajesh Patel",
          Category: "Historical Sites",
          Location: "Ahmedabad",
          State: "Gujarat",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.QJ6_9-Uq256JRvuInjwT_gHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
          Experience: "15 years",
          Rating: 4.8
      },
      {
          Guide_name: "Anita Shah",
          Category: "Beaches",
          Location: "Diu",
          State: "Gujarat",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.nkyagkmCHvDR4oZk-Pir6gHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
          Experience: "10 years",
          Rating: 4.6
      }
  ]  
  },
  {
    name: "Gujarat",
    capital: "Gandhinagar",
    about:
      "Located in the westernmost part of India, Gujarat is home to several architectural marvels and is famous for its vibrant culture and rich heritage, apart from the scenic landscapes and mouth-watering cuisine. ",
    climate:
      "Situated near the Chenab River, about 120 km to the north of Lahore, Gujarat is a coastal state lying on the west coast of India. Blessed with the longest coastline (1290 km) in the country, Gujarat is a serene and pristine land where the azure seas meet sparkling sands.",
    history:
      "The history of Gujarat began with Stone Age settlements followed by Chalcolithic and Bronze Age settlements like Indus Valley Civilisation. Gujarat's coastal cities, chiefly Bharuch, served as ports and trading centers in the Nanda, Maurya, Satavahana and Gupta empires as well as Western Kshatrapas period.",
    time: "The best time to visit Gujarat is during the winter season, i.e. between October and February. Since it is a dry region and experiences high temperatures and humidity; visiting the state in the monsoons (July to September) may also be a good idea especially in the regions that receive less or no rainfall.",
    img: [
      "https://www.swantour.com/blogs/wp-content/uploads/2018/04/Gujarat-Tourism.jpg",
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/12/753361-statueofunity-reuters-110118.jpg",
      "https://www.visittnt.com/images/gujarat/gujarat-tourism.jpg",
    ],
    tourist: [
      {
        name: "Ahmedabad",
        info: "A rapidly growing metropolis, an industrial hub, an educational hotspot, and a city with a magnificent past – Ahmedabad is one of the most important cities in Gujarat. Located on the banks of the Sabarmati River, Ahmedabad is the former capital of Gujarat, and its delicious food, colourful culture is making it a fast-growing tourist destination.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/Jama_Masjid_Ahmedabad_heritage_20190515120421.jpg",
        location:
          "https://www.google.co.in/maps/place/Ahmedabad,+Gujarat/data=!4m2!3m1!1s0x395e848aba5bd449:0x4fcedd11614f6516?sa=X&ved=2ahUKEwiM-bWC84fmAhVSwjgGHQ1sCLQQ8gEwHXoECBwQBA",
      },
      {
        name: "Kutch",
        info: "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past.Kutch is probably one of the most beautiful, yet surreal places in India. With the vast expanses of white salt desert in the Rann of Kutch area, this is an amazing experience to witness.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/Great_Rann_of_Kutch_20180205161526.jpg",
        location:
          "https://www.google.co.in/maps/place/Kutch,+Gujarat/@23.7083639,68.8013806,8z/data=!3m1!4b1!4m5!3m4!1s0x39511e0750db4489:0x2049bf8ec25dea88!8m2!3d23.7337326!4d69.8597406",
      },
      {
        name: "Gir National Park",
        info: "Gir National Park is the only remaining home for the Asiatic Lions that are almost a definition to this park in Gujarat, which has a lot more to offerGir provides you with the unique experience of visiting a place which almost singularly plays a crucial and defining role in the preservation and sustaining of a certain species.",
        images:
          "https://www.holidify.com/images/bgImages/GIR-NATIONAL-PARK.jpg",
        location:
          "https://www.google.co.in/maps/place/Gir+National+Park/@21.1329211,70.7843612,13z/data=!3m1!4b1!4m5!3m4!1s0x3be2bfc278812b53:0x3408d6d983464baf!8m2!3d21.1243054!4d70.8241507",
      },
      {
        name: "Somnath",
        info: "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.Primarily a temple town, Somnath is a place where a strong scent of religion and legends lingers around tourism and even daily life.",
        images: "https://www.holidify.com/images/bgImages/SOMNATH.jpg",
        location:
          "https://www.google.co.in/maps/place/Somnath,+Gujarat/@20.9031968,70.3730104,14z/data=!3m1!4b1!4m5!3m4!1s0x3bfd328b9ce28aeb:0x6d2efaa0d9eda083!8m2!3d20.9060022!4d70.3843721",
      },
      {
        name: "Porbandar",
        info: "The birth place of Mahatma Gandhi, Porbandar is a beautiful beach town with some temples and dams, and is now also a popular trading hub.The coastal city with a significant event in its history is a tourist destination which modestly offers a number of attractions.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/Hari_Mandir_Porbandar_20190116141529.jpg",
        location:
          "https://www.google.co.in/maps/place/Porbandar,+Gujarat/@21.6354569,69.595266,13z/data=!3m1!4b1!4m5!3m4!1s0x3956345051c2f8e5:0x9e2165b8de9bd8ca!8m2!3d21.6416979!4d69.6293059",
      },
      {
        name: "Vadodara",
        info: "Vadodara or Baroda is a cosmopolitan city located in Gujarat. Home to some of the most exemplary displays of architecture, Vadodara is a fitting memorial to Maratha leader Sayaji Rao Gaekwad III who had envisioned a dream to make this Big City an educational, industrial and commercial centre.",
        images: "https://www.holidify.com/images/bgImages/VADODARA.jpg",
        location:
          "https://www.google.co.in/maps/place/Vadodara,+Gujarat/@22.3220425,73.0329975,11z/data=!3m1!4b1!4m5!3m4!1s0x395fc8ab91a3ddab:0xac39d3bfe1473fb8!8m2!3d22.3071588!4d73.1812187",
      },
      {
        name: "Dwarka",
        info: "Famous for having one of the 12 Jyotirlingas, Dwarka is best known as the home of Lord Krishna and will enchant you with the holiness that the air here carries. Located on the western tip of the Saurashtra peninsula in Gujarat, Dwarka is popularly known as the home of Lord Krishna.",
        images: "https://www.holidify.com/images/bgImages/DWARKA.jpg",
        location:
          "https://www.google.co.in/maps/place/Dwarka,+Gujarat/@22.2467142,68.9518839,14z/data=!3m1!4b1!4m5!3m4!1s0x39569c266399e37b:0xb5866e461a106e0a!8m2!3d22.2441975!4d68.9684562",
      },
      {
        name: "Junagadh",
        info: "Being the capital of Junagadh Princely State once, the town shines with historical significance with many historical monuments to see.Junagad is also very close to the Girnar Hills and the world renowned Gir National Park. Catch a glimpse of the wild in the Sakkabaug Zoo and the Wildlife Museum.",
        images: "https://www.holidify.com/images/bgImages/JUNAGADH.jpg",
        location:
          "https://www.google.co.in/maps/place/Junagadh,+Gujarat/@21.5305516,70.3675688,12z/data=!3m1!4b1!4m5!3m4!1s0x3958018c6a277f53:0x13b52f8520a86e48!8m2!3d21.5222203!4d70.4579436",
      },
      {
        name: "Gandhinagar",
        info: "Gandhinagar, the capital city of Gujarat, is located at a distance of around 23 km from Ahmedabad on the western bank of Sabarmati river. Gandhinagar, one of India's few planned cities encompasses Akshardham Temple, one of the country's most beautiful temple. Gandhinagar offers a rich cultural heritage.",
        images:
          "https://upload.wikimedia.org/wikipedia/commons/7/77/Akshardham_Gandhinagar_Gujarat.jpg",
        location:
          "https://www.google.co.in/maps/place/Gandhinagar,+Gujarat/@23.2206942,72.575507,12z/data=!3m1!4b1!4m5!3m4!1s0x395c2b987c6d6809:0xf86f06a7873e0391!8m2!3d23.2156354!4d72.6369415",
      },
      {
        name: "Diu",
        info: "Located near the port of Veraval, Diu is a small island which was earlier a Portuguese colony, and is now guarded by beaches all around.The Diu Fort, a primary imprint of the Portuguese on the area's heritage and architecture makes up a popular tourist attraction.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/1024_20190430184549.jpg",
        location:
          "https://www.google.co.in/maps/place/Diu,+Daman+and+Diu+362520/@20.7141776,70.9608083,14z/data=!3m1!4b1!4m5!3m4!1s0x3be31ce77c7a67bf:0x4664503a0396202!8m2!3d20.7144094!4d70.9873719",
      },
      {
        name: "Bhuj",
        info: "A desert city with long history of kings and empires make Bhuj one of the most interesting and unique historical places to see.The city has a long history of kings and empires - and hence many historic places to see.",
        images: "https://www.holidify.com/images/bgImages/BHUJ.jpg",
        location:
          "https://www.google.co.in/maps/place/Bhuj,+Gujarat/@23.2507239,69.5988791,12z/data=!3m1!4b1!4m5!3m4!1s0x3950e209000b6f17:0x7077f358af0774a6!8m2!3d23.2419997!4d69.6669324",
      },
      {
        name: "Surat",
        info: "Surat, having its name associated with Saurashtra (the good land), is a port city in Gujarat. The second most populated city in the state, Surat is a global diamond cutting centre and a commercial hub of textiles. Known as 'the city of flyovers'.",
        images:
          "https://www.holidify.com/images/cmsuploads/compressed/17192531_1054548924649434_1507851808365750554_o_20180329163703.jpg",
        location:
          "https://www.google.co.in/maps/place/Surat,+Gujarat/@21.1591425,72.6822074,11z/data=!3m1!4b1!4m5!3m4!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607",
      },
    ],
    food: "Gujarati cuisines vary in taste and flavour as one moves from region to region. The most distinct of them are the ones from Surat, Kathiawad, Kachchh and North Gujarat. The food is mostly vegetarian, and you can sense the hints of sweetness and spice distinctly in the dishes.",
    guides: [
      {
          Guide_name: "Rajesh Patel",
          Category: "Historical Sites",
          Location: "Ahmedabad",
          State: "Gujarat",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.Q4qTjtimxQ3rvCmJl2rjZgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
          Experience: "15 years",
          Rating: 4.8
      },
      {
          Guide_name: "Anita Shah",
          Category: "Beaches",
          Location: "Diu",
          State: "Gujarat",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.qoLKXN-19f_qnh54eJ992QAAAA?pid=ImgDet&w=187&h=280&c=7&dpr=1.3",
          Experience: "10 years",
          Rating: 4.6
      },
      {
          Guide_name: "Vikram Desai",
          Category: "Wildlife",
          Location: "Gir National Park",
          State: "Gujarat",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.X6NgzSPUjco38ZoSvbFRlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
          Experience: "12 years",
          Rating: 4.7
      },
      {
          Guide_name: "Anshul Verma",
          Category: "Bastar Tribal Culture",
          Location: "Bastar",
          State: "Chhattisgarh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.SjlRdS5ii_DBDNQF_fbKeQHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
          Experience: "15 years",
          Rating: 4.8
      },
      {
          Guide_name: "Anjali Sahu",
          Category: "Chitrakote Waterfalls",
          Location: "Jagdalpur",
          State: "Chhattisgarh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.-sdiJ_F_SHqS_dd-lDVgCAHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          Experience: "10 years",
          Rating: 4.6
      },
      {
          Guide_name: "Ravi Tiwari",
          Category: "Kanger Ghati National Park",
          Location: "Bastar",
          State: "Chhattisgarh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.NgooTQw4DeEmMNEe8MY0awHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
          Experience: "12 years",
          Rating: 4.7
      },
      {
          Guide_name: "Sunita Sharma",
          Category: "Tiger Reserves",
          Location: "Bandhavgarh National Park",
          State: "Madhya Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP.UmIdzi01H0ZqMlrfOcEU1gHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
          Experience: "13 years",
          Rating: 4.9
      },
      {
          Guide_name: "Deepak Mishra",
          Category: "Temples",
          Location: "Khajuraho",
          State: "Madhya Pradesh",
          Country: "India",
          ProfileImg: "https://th.bing.com/th/id/OIP._NaCKfyhkQTcE6WVO0bfFgAAAA?pid=ImgDet&w=184&h=221&c=7&dpr=1.3",
          Experience: "11 years",
          Rating: 4.6
      }
  ]  
  },
  {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    about: "Uttar Pradesh is known for its rich cultural heritage and spiritual significance, home to some of India's most revered holy sites. It offers a blend of historical monuments, vibrant festivals, and diverse cuisine.",
    climate: "Uttar Pradesh experiences extreme climatic conditions. Summers (April to June) are hot with temperatures soaring up to 45°C, while winters (December to February) are cold with temperatures dropping to around 5°C. The state also receives moderate to heavy rainfall from July to September.",
    history: "Uttar Pradesh has a history that dates back to ancient times. It was the center of several major empires, including the Maurya, Gupta, and Mughal empires. The state is also significant in Hindu mythology and has been a key region in India's independence movement.",
    time: "The best time to visit Uttar Pradesh is during the cooler months, from October to March, when the weather is pleasant for sightseeing and outdoor activities.",
    food: "The cuisine of Uttar Pradesh is diverse and flavorful, featuring dishes like kebabs, biryanis, kachoris, and sweets like jalebi and petha. Each region in the state has its own culinary specialties, influenced by its history and culture.",
    img: [
      "https://www.savaari.com/blog/wp-content/uploads/2021/01/indian-temple-4782312_1920-1024x683.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/74/1e/e3.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/74/1e/e7.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/d5/92/64/hanuman-garhi-temple.jpg?w=1100&h=-1&s=1"
    ],
    tourist: [
      {
        name: "Vrindavan",
        info: "Vrindavan, a town in Uttar Pradesh, is considered one of the most revered places for devotees of Lord Krishna. It is known for its numerous temples, each with its own unique charm and historical significance.",
        images: "https://i.pinimg.com/474x/d4/87/76/d4877699356441533f4fd0e39e2d311c.jpg",
        location: "https://www.bing.com/maps?q=location+of+vrindavan&FORM=HDRSC6&cp=27.572789%7E77.693338&lvl=16.0"
      },
      {
        name: "Mathura",
        info: "Mathura, the birthplace of Lord Krishna, is a city filled with ancient temples and historical sites. It is an important pilgrimage destination for Hindus and offers a deep spiritual experience.",
        images: "https://i.pinimg.com/474x/d1/95/d5/d195d5b5b6266f023831be975f859fe9.jpg",
        location: "https://maps.app.goo.gl/eAGMQW75ouMdsxte6"
      },
      {
        name: "Ayodhya",
        info: "Ayodhya, the birthplace of Lord Rama, is a city with immense religious significance. It is known for its ancient temples and ghats, making it a major pilgrimage site for Hindus.",
        images: "https://i.pinimg.com/474x/27/be/2c/27be2c84a694ac886174052b85515291.jpg",
        location: "https://maps.app.goo.gl/WFj1UrCQ8ndQ8vk6A"
      },
      {
        name: "Varanasi",
        info: "Varanasi, one of the world's oldest continually inhabited cities, is a major cultural and religious center in India. The city is famous for its ghats along the Ganges River, where pilgrims perform rituals and ceremonies.",
        images: "https://i.pinimg.com/236x/01/1c/45/011c458ea52cb89f19bf98e29ad4c3e3.jpg",
        location: "https://maps.app.goo.gl/FQ2NW4sUapHgXF7K9"
      }
    ],
    guides: [
      {
        Guide_name: "Rahul Sharma",
        Category: "Historical and Spiritual Tours",
        guide_location: "Vrindavan",
        State: "Uttar Pradesh",
        Country: "India",
        ProfileImg: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0355c6102794621.5f3e8f2baaf0a.jpg",
        Experience: "4 years",
        Rating: 4.8
      },
      {
        Guide_name: "Amit Verma",
        Category: "Cultural and Heritage Tours",
        guide_location: "Mathura",
        State: "Uttar Pradesh",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.JijhuhuKo0nto46FGDYq5QHaLF?w=1368&h=2048&rs=1&pid=ImgDetMain",
        Experience: "8 years",
        Rating: 4.7
      },
      {
        Guide_name: "Sita Devi",
        Category: "Pilgrimage Tours",
        guide_location: "Ayodhya",
        State: "Uttar Pradesh",
        Country: "India",
        ProfileImg: "https://th.bing.com/th/id/OIP.ny5DMld-roqntY5MXatlXAAAAA?rs=1&pid=ImgDetMain",
        Experience: "7 years",
        Rating: 4.9
      },
      {
        Guide_name: "Ravi Tripathi",
        Category: "Cultural and Historical Tours",
        guide_location: "Varanasi",
        State: "Uttar Pradesh",
        Country: "India",
        ProfileImg: "https://media.licdn.com/dms/image/C5103AQHqIRuLyyIpvQ/profile-displayphoto-shrink_800_800/0/1561613947597?e=2147483647&v=beta&t=ZaR50SXrqpHix6UHLDZQTKl1RFQ6G5R1Rn2FPdkIr_E",
        Experience: "5 years",
        Rating: 5.0
      }
    ]
  }
];

module.exports = placesData;
