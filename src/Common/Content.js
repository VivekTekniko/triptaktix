import katra from "../Assets/travel/vaishno1.jpg";
import patni from "../Assets/travel/patnitop1.jpg";
import srinagar from "../Assets/travel/srinagar1.jpeg";
import Gulmarg from "../Assets/travel/gulmarg1.jpg";
import Pahalgam from "../Assets/travel/pahalgam1.jpg";
import Sonmarg from "../Assets/travel/sonmarg1.jpg";
import Leh from "../Assets/travel/leh1.jpg";
import Pangong from "../Assets/travel/pangong1.jpg";
import Nubra from "../Assets/travel/nubra1.jpg";
// import Turtuk from "../Assets/travel/t";
import Kargil from "../Assets/travel/kargil1.jpg";
import Manali from "../Assets/travel/manali1.jpg";
import Shimla from "../Assets/travel/shimla.jpg";
// import Kashmir from "../Assets/travel/kargil1.jpg";
// import Kufri from "../Assets/travel/Kufr";
import Tosh from "../Assets/travel/tosh1.jpeg";
import Malana from "../Assets/travel/manali1.jpg";
import Dhramshala from "../Assets/travel/dharamshala1.jpg";
import Tirthan from "../Assets/travel/tirthan1.jpg";
import Spiti from "../Assets/travel/spiti1.jpg";
import Alleppy from "../Assets/travel/alleppy1.jpg";
import Munnar from "../Assets/travel/munnar1.jpg";
import Thekkady from "../Assets/travel/thekkaddy1.jpg";
import Goa from "../Assets/travel/goa.jpg";
import Himachal from "../Assets/travel/himachal1.jpg";
import Kasol from "../Assets/travel/kasol1.jpg";
import Dalhousie from "../Assets/travel/dalhousie1.jpg";
import rajasthanbg from "../Assets/travel/rajasthanbanner.jpg";
import hpbg from "../Assets/travel/himachalbanner.jpg";
import shimlabg from "../Assets/travel/shimlabann1.jpg";
import kashmir from "../Assets/travel/kashmir.jpg"
import Darjiling from "../Assets/travel/Darjeeling.jpg";
import northeast from "../Assets/travel/northeast.jpg";
import maldivis from "../Assets/travel/Maldives.jpg";
import thailand from "../Assets/travel/Thailand.jpg";
import singapore from "../Assets/travel/singapore.jpg";
import dubai from "../Assets/travel/dubai.jpg";
import rishikesh from "../Assets/travel/rishikesh.jpg"

export const data = [
    {
        id: 1,
        state: "Jammu",
        text: "Gateway to Serenity: Where Nature Meets Majesty.",
        img: patni,
        bgImg:kashmir,
        destinationType:"domestic",
        showbanner:false,
        destination: [
            {
                place: "Katra",
                img: katra,
                text: "",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Patnitop",
                img: patni,
                text: "",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
           
        ]
    },
    {
        id: 1,
        state: "Kashmir",
        text: "Paradise on Earth: Experience Heaven’s Splendor.",
        bgImg:shimlabg,
        img: srinagar,
        destinationType:"domestic",
        showbanner:true,
        destination: [
            // {
            //     place: "Srinagar",
            //     img: srinagar,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:false,
            //     popular:true,
            //     packagePrice: "4999/-",
            // },
            {
                place: "Gulmarg",
                img: Gulmarg,
                text: "Experience the magic of snow and adventure in Gulmarg, a winter wonderland that’s perfect for skiing and scenic beauty.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
                
            },
            {
                place: "Pahalgam",
                img: Pahalgam,
                text: "Reconnect with nature in Pahalgam, a tranquil retreat surrounded by lush meadows and stunning landscapes.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:true,
                packagePrice: "4999/-",
            },
            // {
            //     place: "Sonmarg",
            //     img: Sonmarg,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:false,
            //     popular:false,
            //     packagePrice: "4999/-",
            // },
            {
                place: "Leh",
                img: Leh,
                text: "Explore the rugged beauty of Leh, a high-altitude desert filled with mesmerizing monasteries and breathtaking views.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            // {
            //     place: "Pangong",
            //     img: Pangong,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:true,
            //     popular:false,
            //     packagePrice: "4999/-",
            // },
            // {
            //     place: "Nubra Valley",
            //     img: Nubra,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:true,
            //     popular:false,
            //     packagePrice: "4999/-",
            // },
            // {
            //     place: "Kargil",
            //     img: Kargil,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:true,
            //     popular:false,
            //     packagePrice: "4999/-",
            // },
        ]
    },
    {
        id: 1,
        state: "Himachal",
        text: "Land of Snowy Bliss: Embrace the Mountains’ Magic.",
        img: Himachal,
        bgImg:hpbg,
        destinationType:"domestic",
        showbanner:true,
        destination: [
            {
                place: "Manali",
                img: Manali,
                text: "Escape to the charming hill station of Manali, where snow-capped peaks and lively streets await your visit",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Shimla",
                img: Shimla,
                text: "Take a stroll through the colonial charm of Shimla, surrounded by pine forests and cool mountain air.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Kasol",
                img: Kasol,
                text: "Unwind in Kasol, the backpackers’ haven, known for its serene vibes, lush valleys, and cultural mix.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Tosh",
                img: Tosh,
                text: "Escape to the peaceful village of Tosh, hidden in the Himalayas, with its serene vibe and breathtaking views.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
            // {
            //     place: "Malana",
            //     img: Malana,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:false,
            //     popular:false,
            //     packagePrice: "4999/-",
            // },
            {
                place: "Dalhousie",
                img: Dalhousie,
                text: "Dalhousie is a hill station situated at a high elevation, spanning across five hills near the Dhauladhar mountain range.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Dhramshala",
                img: Dhramshala,
                text: "Immerse yourself in the peaceful surroundings of Dharamshala, home to Tibetan culture and stunning mountain views.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Tirthan",
                img: Tirthan,
                text: "Discover the hidden gem of Tirthan Valley, where untouched nature and serene rivers offer a perfect retreat.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Spiti",
                img: Spiti,
                text: "Discover the rugged beauty of Spiti Valley, where monasteries, mountains, and adventure await.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
        ]
    },
    {
        id: 1,
        state: "Kerala",
        text: "God’s Own Country: Where Backwaters and Bliss Collide",
        bgImg:Alleppy,
        img: Alleppy,
        destinationType:"domestic",
        showbanner:false,
        destination: [
            {
                place: "Alleppy",
                img: Alleppy,
                text: "Cruise through Alleppey’s tranquil backwaters on a traditional houseboat and embrace the charm of Kerala.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
            {
                place: "Munnar",
                img: Munnar,
                text: "A mountain retreat and former getaway for the British Raj aristocracy, it is encircled by lush hills adorned with tea plantations.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
            // {
            //     place: "Thekkady",
            //     img: Thekkady,
            //     text: "",
            //     content: "",
            //     package: "2N & 4D",
            //     season:true,
            //     popular:false,
            //     packagePrice: "4999/-",
            // },
        ]
    },
    {
        id: 1,
        state: "Goa",
        text: "Sunkissed Escapes: The Ultimate Beach Paradise.",
        img: Goa,
        bgImg:Goa,
        destinationType:"domestic",
        showbanner:true,
        destination: [
            {
                place: "Goa",
                img: Goa,
                text: "Bask in the sun and enjoy the vibrant energy of Goa, a paradise for beach lovers and party enthusiasts.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:true,
                packagePrice: "4999/-",
            },
           
        ]
    },
    {
        id: 1,
        state: "Uttarakhand",
        text: "Devbhoomi: A Journey to the Abode of the Gods.",
        img: rishikesh,
        bgImg:rishikesh,
        destinationType:"domestic",
        showbanner:false,
        destination: [
            {
                place: "Rishikesh",
                img: rishikesh,
                text: "From rolling green hills to sacred rivers, Uttarakhand offers the perfect mix of adventure and peace.",
                content: "",
                package: "2N & 3D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
           
        ]
    },

    {
        id: 1,
        // state: "West Bengal",
        state:"Darjiling",
        text: "Savor the essence of Darjeeling",
        img: Darjiling,
        bgImg:Darjiling,
        destinationType:"domestic",
        showbanner:true,
        destination: [
            {
                place: "Darjiling",
                img: Darjiling,
                text: "Savor the essence of Darjeeling, with its lush tea gardens, scenic views, and tranquil mountain air.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
           
        ]
    },
    {
        id: 1,
        // state: "North East",
        state:"North-East",
        text: "Explore the mystical beauty of Sikkim.",
        img: northeast,
        bgImg:northeast,
        destinationType:"domestic",
        showbanner:false,
        destination: [
            {
                place: "Sikkim",
                img: northeast,
                text: "Explore the mystical beauty of Sikkim, where serene monasteries and snow-covered peaks captivate every traveler.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
            {
                place: "Shilong",
                img: northeast,
                text: "Perfect for couples and groups, it’s where every moment turns into a story worth telling.",
                content: "",
                package: "2N & 4D",
                season:true,
                popular:false,
                packagePrice: "4999/-",
            },
           
        ]
    },

    // Interrrrrrrrrrrrrrrrrrrnnnnnnnnnnnnnttttttttttttiiiiiiiiiiiioooooooooonnnnnnnnaaaaaaaaaaaaalllllllllllllllllll

    {
        id: 1,
        state:"Maldives",
        text: "Indulge in luxury and serenity in the Maldives",
        img: maldivis,
        bgImg:maldivis,
        destinationType:"International",
        showbanner:true,
        destination: [
            {
                place: "Maldives",
                img: maldivis,
                text: "Indulge in luxury and serenity in the Maldives, where pristine beaches and turquoise waters create paradise.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:false,
                packagePrice: "24999/-",
            },
           
        ]
    },

    {
        id: 1,
        state:"Thailand",
        text: "A paradise of untouched natural beauty, vibrant cultures.",
        img: thailand,
        bgImg:thailand,
        destinationType:"International",
        showbanner:true,
        destination: [
            {
                place: "Thailand",
                img: thailand,
                text: "Immerse yourself in the vibrant culture of Thailand, from stunning beaches to bustling markets and exotic flavors.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:false,
                packagePrice: "14999/-",
            },
           
        ]
    },

    {
        id: 1,
        state:"Singapore",
        text: "Discover the futuristic charm of Singapore",
        img: singapore,
        bgImg:singapore,
        destinationType:"International",
        showbanner:false,
        destination: [
            {
                place: "Singapore",
                img: singapore,
                text: "Discover the futuristic charm of Singapore, with its iconic skyline, vibrant streets, and lush gardens.",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:false,
                packagePrice: "44999/-",
            },
           
        ]
    },

    {
        id: 1,
        state:"Dubai",
        text: "Experience the glitz and glamour of Dubai",
        img: dubai,
        bgImg:dubai,
        destinationType:"International",
        showbanner:false,
        destination: [
            {
                place: "Dubai",
                img: dubai,
                text: "Experience the glitz and glamour of Dubai, where modern skyscrapers meet golden deserts and Arabian nights",
                content: "",
                package: "2N & 4D",
                season:false,
                popular:false,
                packagePrice: "54999/-",
            },
           
        ]
    },



]