import caesarSaladImg from '../assets/foodimages/CaesarSalad.png';
import greekSaladImg from '../assets/foodimages/GreekSalad.png';
import chocolateCakeImg from '../assets/foodimages/ChocolateCake.png';
import vanillaIceCreamImg from '../assets/foodimages/VanillaIceCream.png';
import spaghettiBologneseImg from '../assets/foodimages/SpaghettiBolognese.png';
import penneAlfredoImg from '../assets/foodimages/PenneAlfredo.png';
import cocaColaImg from '../assets/foodimages/CocaCola.png';
import dietCokeImg from '../assets/foodimages/DietCoke.png';
import paneerButterMasalaImg from '../assets/foodimages/PaneerButterMasala.png';
import alooGobiImg from '../assets/foodimages/AlooGobi.png';
import springRollsImg from '../assets/foodimages/SpringRolls.png';
import vegManchurianImg from '../assets/foodimages/VegManchurian.png';
import chickenBiryaniImg from '../assets/foodimages/ChickenBiryani.png';
import fishBiryaniImg from '../assets/foodimages/FishBiryani.png';
import gardenSaladImg from '../assets/foodimages/GardenSalad.png';
import capreseSaladImg from '../assets/foodimages/CapreseSalad.png';
import kaleSaladImg from '../assets/foodimages/KaleSalad.png';
import quinoaSaladImg from '../assets/foodimages/QuinoaSalad.png';
import tiramisuImg from '../assets/foodimages/Tiramisu.png';
import cheesecakeImg from '../assets/foodimages/Cheesecake.png';
import brownieImg from '../assets/foodimages/Brownie.png';
import fettuccineAlfredoImg from '../assets/foodimages/FettuccineAlfredo.png';
import penneArrabbiataImg from '../assets/foodimages/PenneArrabbiata.png';
import lasagnaImg from '../assets/foodimages/Lasagna.png';
import MacandCheeseimg from '../assets/foodimages/MacandCheese.png';
import cokeZeroImg from '../assets/foodimages/CokeZero.png';
import spriteImg from '../assets/foodimages/Sprite.png';
import fantaImg from '../assets/foodimages/Fanta.png';
import shahiPaneerImg from '../assets/foodimages/ShahiPaneer.png';
import choleBhatureImg from '../assets/foodimages/CholeBhature.png';
import thaliImg from '../assets/foodimages/Thali.png';
import bainganBhartaImg from '../assets/foodimages/BainganBharta.png';
import samosaImg from '../assets/foodimages/Samosa.png';
import chowmeinImg from '../assets/foodimages/Chowmein.png';
import stuffedMushroomsImg from '../assets/foodimages/StuffedMushrooms.png';
import chickenCurryImg from '../assets/foodimages/ChickenCurry.png';
import muttonRoganJoshImg from '../assets/foodimages/MuttonRoganJosh.png';
import butterChickenImg from '../assets/foodimages/ButterChicken.png';
import fishTikkaImg from '../assets/foodimages/FishTikka.png';

const foodData = [
    {
      "CategoryName": "Salad",
      "name": "Caesar Salad",
      "img": caesarSaladImg,
      "options": [
        {
          "Regular": 120,
          "Large": 180
        }
      ],
      "description": "Classic Caesar salad with romaine lettuce, croutons, and Parmesan cheese."
    },
    {
      "CategoryName": "Salad",
      "name": "Greek Salad",
      "img": greekSaladImg,
      "options": [
        {
          "Regular": 100,
          "Large": 160
        }
      ],
      "description": "Fresh and healthy Greek salad with cucumbers, tomatoes, olives, and feta cheese."
    },
    {
      "CategoryName": "Dessert",
      "name": "Chocolate Cake",
      "img": chocolateCakeImg,
      "options": [
        {
          "Slice": 80,
          "Whole": 600
        }
      ],
      "description": "Rich and moist chocolate cake with a creamy chocolate frosting."
    },
    {
      "CategoryName": "Dessert",
      "name": "Vanilla Ice Cream",
      "img": vanillaIceCreamImg,
      "options": [
        {
          "Single scoop": 50,
          "Double scoop": 90
        }
      ],
      "description": "Creamy and smooth vanilla ice cream made with real vanilla beans."
    },
    {
      "CategoryName": "Pasta",
      "name": "Spaghetti Bolognese",
      "img": spaghettiBologneseImg,
      "options": [
        {
          "Regular": 150,
          "Large": 250
        }
      ],
      "description": "Classic Italian pasta with a rich and hearty meat sauce."
    },
    {
      "CategoryName": "Pasta",
      "name": "Penne Alfredo",
      "img": penneAlfredoImg,
      "options": [
        {
          "Regular": 140,
          "Large": 230
        }
      ],
      "description": "Creamy Alfredo pasta with penne and freshly grated Parmesan cheese."
    },
    {
      "CategoryName": "Coke",
      "name": "Coca Cola",
      "img": cocaColaImg,
      "options": [
        {
          "Can": 50,
          "Bottle": 70
        }
      ],
      "description": "Classic Coca Cola to refresh your taste buds."
    },
    {
      "CategoryName": "Coke",
      "name": "Diet Coke",
      "img": dietCokeImg,
      "options": [
        {
          "Can": 50,
          "Bottle": 70
        }
      ],
      "description": "Diet Coke with zero calories and the same great taste."
    },
    {
      "CategoryName": "Veg",
      "name": "Paneer Butter Masala",
      "img": paneerButterMasalaImg,
      "options": [
        {
          "Half": 120,
          "Full": 220
        }
      ],
      "description": "Rich and creamy paneer butter masala cooked in a tomato-based gravy."
    },
    {
      "CategoryName": "Veg",
      "name": "Aloo Gobi",
      "img": alooGobiImg,
      "options": [
        {
          "Half": 100,
          "Full": 180
        }
      ],
      "description": "A classic Indian dish with potatoes and cauliflower cooked in spices."
    },
    {
      "CategoryName": "Starters",
      "name": "Spring Rolls",
      "img": springRollsImg,
      "options": [
        {
          "Half": 80,
          "Full": 150
        }
      ],
      "description": "Crispy vegetable spring rolls served with a tangy dipping sauce."
    },
    {
      "CategoryName": "Starters",
      "name": "Veg Manchurian",
      "img": vegManchurianImg,
      "options": [
        {
          "Half": 120,
          "Full": 200
        }
      ],
      "description": "Indo-Chinese starter with vegetable balls in a spicy, tangy sauce."
    },
    {
      "CategoryName": "NonVeg",
      "name": "Chicken Biryani",
      "img": chickenBiryaniImg,
      "options": [
        {
          "Half": 170,
          "Full": 300
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of chicken were added."
    },
    {
      "CategoryName": "NonVeg",
      "name": "Fish Biryani",
      "img": fishBiryaniImg,
      "options": [
        {
          "Half": 200,
          "Full": 320
        }
      ],
      "description": "Delicious fish biryani made with fresh spices and basmati rice."
    },
    {
      "CategoryName": "Salad",
      "name": "Garden Salad",
      "img": gardenSaladImg,
      "options": [
        {
          "Regular": 110,
          "Large": 170
        }
      ],
      "description": "A mix of fresh garden vegetables served with a light vinaigrette."
    },
    {
      "CategoryName": "Salad",
      "name": "Caprese Salad",
      "img": capreseSaladImg,
      "options": [
        {
          "Regular": 130,
          "Large":190
        }
      ],
      "description": "Classic Italian salad with tomatoes, mozzarella, basil, and balsamic glaze."
    },
    {
      "CategoryName": "Salad",
      "name": "Kale Salad",
      "img": kaleSaladImg,
      "options": [
        {
          "Regular": 120,
          "Large": 180
        }
      ],
      "description": "Healthy kale salad with orange Slices, almonds, and a citrus dressing."
    },
    {
      "CategoryName": "Salad",
      "name": "Quinoa Salad",
      "img": quinoaSaladImg,
      "options": [
        {
          "Regular": 140,
          "Large":200
        }
      ],
      "description": "Protein-packed quinoa salad with vegetables and a lemon vinaigrette."
    },
    {
      "CategoryName": "Dessert",
      "name": "Tiramisu",
      "img": tiramisuImg,
      "options": [
        {
          "Slice": 90,
          "Whole": 650
        }
      ],
      "description": "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese."
    },
    {
      "CategoryName": "Dessert",
      "name": "Cheesecake",
      "img": cheesecakeImg,
      "options": [
        {
          "Slice": 100,
          "Whole": 700
        }
      ],
      "description": "Creamy cheesecake with a graham cracker crust and a berry topping."
    },
    {
      "CategoryName": "Dessert",
      "name": "Brownie",
      "img": brownieImg,
      "options": [
        {
          "piece": 60,
          "box of 6": 320
        }
      ],
      "description": "Rich and fudgy brownies made with dark chocolate."
    },
    {
      "CategoryName": "Pasta",
      "name": "Fettuccine Alfredo",
      "img": fettuccineAlfredoImg,
      "options": [
        {
          "Regular": 160,
          "Large":260
        }
      ],
      "description": "Creamy Alfredo sauce served with fettuccine pasta."
    },
    {
      "CategoryName": "Pasta",
      "name": "Penne Arrabbiata",
      "img": penneArrabbiataImg,
      "options": [
        {
          "Regular": 150,
          "Large":250
        }
      ],
      "description": "Spicy tomato sauce served with penne pasta."
    },
    {
      "CategoryName": "Pasta",
      "name": "Lasagna",
      "img": lasagnaImg,
      "options": [
        {
          "Regular": 180,
          "Large": 280
        }
      ],
      "description": "Layers of pasta with meat sauce, ricotta, and mozzarella cheese."
    },
    {
      "CategoryName": "Pasta",
      "name": "Mac and Cheese",
      "img": MacandCheeseimg,
      "options": [
        {
          "Regular": 140,
          "Large": 220
        }
      ],
      "description": "Classic mac and cheese made with a creamy cheese sauce."
    },
    {
      "CategoryName": "Coke",
      "name": "Coke Zero",
      "img": cokeZeroImg,
      "options": [
        {
          "Can":50,
          "Bottle": 70
        }
      ],
      "description": "Coke Zero with the same great taste and zero sugar."
    },
    {
      "CategoryName": "Coke",
      "name": "Sprite",
      "img": spriteImg,
      "options": [
        {
          "Can": 50,
          "Bottle": 70
        }
      ],
      "description": "Refreshing lemon-lime Sprite."
    },
    {
      "CategoryName": "Coke",
      "name": "Fanta",
      "img": fantaImg,
      "options": [
        {
          "Can": 50,
          "Bottle": 70
        }
      ],
      "description": "Fruit-flavored Fanta soda."
    },
    {
      "CategoryName": "Veg",
      "name": "Shahi Paneer",
      "img": shahiPaneerImg,
      "options": [
        {
          "Half": 140,
          "Full":240
        }
      ],
      "description": "Creamy paneer dish cooked in a royal, rich, and aromatic gravy."
    },
    {
      "CategoryName": "Veg",
      "name": "Chole Bhature",
      "img": choleBhatureImg,
      "options": [
        {
          "plate": 150
        }
      ],
      "description": "Spicy chickpeas served with fried bread."
    },
    {
      "CategoryName": "Veg",
      "name": "Thali",
      "img": thaliImg,
      "options": [
        {
          "Regular": 200
        }
      ],
      "description": "A traditional Indian meal with multiple dishes."
    },
    {
      "CategoryName": "Veg",
      "name": "Baingan Bharta",
      "img": bainganBhartaImg,
      "options": [
        {
          "Half": 100,
          "Full": 180
        }
      ],
      "description": "Smoky roasted eggplant mashed and cooked with spices."
    },
    {
      "CategoryName": "Starters",
      "name": "Samosa",
      "img": samosaImg,
      "options": [
        {
          "Piece":20,
          "Plate": 100
        }
      ],
      "description": "Crispy fried pastry filled with spiced potatoes and peas."
    },
    {
      "CategoryName": "Starters",
      "name": "Chowmein",
      "img": chowmeinImg,
      "options": [
        {
          "Half": 70,
          "Full": 130
        }
      ],
      "description": "Stir-fried noodles with vegetables and soy sauce."
    },
    {
      "CategoryName": "Starters",
      "name": "Stuffed Mushrooms",
      "img": stuffedMushroomsImg,
      "options": [
        {
          "Half": 150,
          "Full": 250
        }
      ],
      "description": "Mushrooms stuffed with cheese and herbs, then baked to perfection."
    },
    {
      "CategoryName": "NonVeg",
      "name": "Chicken Curry",
      "img": chickenCurryImg,
      "options": [
        {
          "Half": 160,
          "Full": 280
        }
      ],
      "description": "A classic chicken curry cooked with aromatic spices and herbs."
    },
    {
      "CategoryName": "NonVeg",
      "name": "Mutton Rogan Josh",
      "img": muttonRoganJoshImg,
      "options": [
        {
          "Half": 200,
          "Full":350
        }
      ],
      "description": "Aromatic and spicy Kashmiri mutton curry."
    },
    {
      "CategoryName": "NonVeg",
      "name": "Butter Chicken",
      "img": butterChickenImg,
      "options": [
        {
          "Half": 190,
          "Full": 330
        }
      ],
      "description": "Rich and creamy butter chicken cooked in a tomato-based gravy."
    },
    {
      "CategoryName": "NonVeg",
      "name": "Fish Tikka",
      "img": fishTikkaImg,
      "options": [
        {
          "Half": 210,
          "Full": 360
        }
      ],
      "description": "Marinated fish chunks grilled to perfection."
    }
];
export default foodData;