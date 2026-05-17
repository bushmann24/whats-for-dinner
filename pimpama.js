// pimpama.js
// Preset list for Pimpama & Coomera Local Restaurants

const pimpamaRestaurants = [
    { 
        name: "Red Rooster Pimpama", 
        category: "Chicken",
        distance: "3 mins away", 
        closingTime: "Closes at 10:00 PM", 
        description: "Roast chicken, legendary chips, and fresh rolls. A classic Aussie fast-food favorite.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/redrooster.jpg" 
    },
    { 
        name: "Pizza Hut Pimpama", 
        category: "Pizza",
        distance: "3 mins away", 
        closingTime: "Closes at 11:00 PM", 
        description: "Hot, loaded pan pizzas, garlic bread, and wings ready for a perfect night in.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/pizzahut.jpg" 
    },
    { 
        name: "Kenzo Sushi Pimpama", 
        category: "Sushi",
        distance: "3 mins away", 
        closingTime: "Closes at 7:00 PM", 
        description: "Freshly rolled sushi, sashimi, and warm, delicious Japanese dishes.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/kenzosushi.jpg" 
    },
    { 
        name: "Maccas Pimpama", 
        category: "Burgers",
        distance: "4 mins away", 
        closingTime: "Open 24 Hours", 
        description: "The classic golden arches. Big Macs, salty fries, and late-night nuggets.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/maccas.jpg" 
    },
    { 
        name: "Subway Pimpama", 
        category: "Sandwiches",
        distance: "4 mins away", 
        closingTime: "Closes at 9:00 PM", 
        description: "Freshly made subs, wraps, and salads loaded with whatever you are craving.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/subway.jpg" 
    },
    { 
        name: "GYG Pimpama", 
        category: "Mexican",
        distance: "6 mins away", 
        closingTime: "Closes at 11:00 PM", 
        description: "Authentic Mexican burritos, bowls, tacos, and the best fries with chipotle mayo.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/gyg.jpg" 
    },
    { 
        name: "Oporto Pimpama", 
        category: "Chicken",
        distance: "6 mins away", 
        closingTime: "Closes at 10:00 PM", 
        description: "Flame-grilled Portuguese chicken, legendary Bondi burgers, and irresistible chili sauce.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/oporto.jpg" 
    },
    { 
        name: "Pimpama Kebabs", 
        category: "Kebabs",
        distance: "7 mins away", 
        closingTime: "Closes at 8:30 PM", 
        description: "Hearty doner kebabs, massive snack packs, and fresh, savory gozleme.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/pimpamakebabs.jpg" 
    },
    { 
        name: "Noodle Box Pimpama", 
        category: "Asian",
        distance: "7 mins away", 
        closingTime: "Closes at 9:00 PM", 
        description: "Wok-tossed noodles, spicy stir-fries, and tasty Asian street food.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/noodlebox.jpg" 
    },
    { 
        name: "Danbo Ramen Pimpama", 
        category: "Ramen",
        distance: "8 mins away", 
        closingTime: "Closes at 10:00 PM", 
        description: "Rich, authentic Fukuoka-style Tonkotsu ramen with perfectly cooked noodles.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/danboramen.jpg" 
    },
    { 
        name: "KFC Pimpama", 
        category: "Chicken",
        distance: "10 mins away", 
        closingTime: "Closes at 10:00 PM", 
        description: "Finger lickin' good fried chicken, spicy Zinger burgers, and wicked wings.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/kfc.jpg" 
    },
    { 
        name: "Hungry Jacks Pimpama", 
        category: "Burgers",
        distance: "10 mins away", 
        closingTime: "Closes at 11:00 PM", 
        description: "The burgers are better! Flame-grilled beef, fresh ingredients, and crispy onion rings.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/hungryjacks.jpg" 
    },
    { 
        name: "Dominos Pimpama", 
        category: "Pizza",
        distance: "10 mins away", 
        closingTime: "Closes at 10:00 PM", 
        description: "Classic delivery pizzas, cheesy garlic bread sides, and decadent lava cakes.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/dominos.jpg" 
    },
    { 
        name: "Sushi Break Pimpama", 
        category: "Sushi",
        distance: "10 mins away", 
        closingTime: "Closes at 8:00 PM", 
        description: "Quick, convenient, and delicious sushi rolls for when you need a fresh, light bite.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/sushibreak.jpg" 
    },
    { 
        name: "Gong Fu Kitchen Coomera", 
        category: "Asian",
        distance: "9 mins away", 
        closingTime: "Closes at 8:45 PM", 
        description: "Delicious Chinese dumplings, handmade noodles, and authentic bold Asian flavors.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/gongfukitchen.jpg" 
    },
    { 
        name: "Deep South Upper Coomera", 
        category: "Chicken",
        distance: "15 mins away", 
        closingTime: "Closes at 9:00 PM", 
        description: "Southern-style crispy fried chicken, epic massive burgers, and loaded fries.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/deepsouth.jpg" 
    },
    { 
        name: "Grill'd Upper Coomera", 
        category: "Burgers",
        distance: "15 mins away", 
        closingTime: "Closes at 10:00 PM", 
        description: "Healthy, gourmet burgers made with fresh, locally sourced ingredients and epic sweet potato chips.", 
        image: "https://raw.githubusercontent.com/bushmann24/whats-for-dinner/refs/heads/main/food-photos/grilld.jpg" 
    }
];
