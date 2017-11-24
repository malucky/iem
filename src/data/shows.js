import rucoImage from '../images/Ruco&Kate_Caesars.png';
// import jackyCheungMohegan from '../images/Jacky_Cheung_Mohegan_Sun_2018.jpg';
import jackyCheungVancouver from '../images/Jacky_Cheung_Vancouver.jpg';
import loveConcert from '../images/Xmas_Love_Romance_Concert.jpg';
import jackyImage from '../images/jacky.png';

const shopDomain = 'https://www.iemshowplace.com';
const shows = [
  {
    name: 'Jacky Cheung "A Classic Tour" Connecticut Stop',
    chineseName: '學友• 經典世界巡迴演唱會 康州站',
    time: '2/2/2018(Fri) 9:00 PM, 2/3/2018(Sat) 9:00 PM, 2/4/2018(Sun) 6:00 PM',
    chineseTime: '2/2/2018(五) 晚上九點, 2/3/2018(六) 晚上九點, 2/4/2018(日) 下午6點',
    location: 'Mohegan Sun Arena：1 Mohegan Sun Blvd, Uncasville, CT 06382, USA',
    chineseLocation: '康州金神體育館',
    image: jackyImage,
    prices: ['$138', '$238', '$368', 'VIP $438', 'VVIP $488'],
    url: `${shopDomain}/jacky-cheung-mohegan-sun/`
  },
  {
    name: 'Ruco Chan & Kate Tsui Xmas in Concert 2017',
    chineseName: '陳展鵬 & 徐子珊 聖誕節大西洋城演唱會',
    time: '12/24/2017 1:00AM',
    chineseTime: '十二月二十三日 深夜一時',
    location: 'Caesars Casino AC.- Circus Maximus Theather',
    chineseLocation: '大西洋城凱撒皇宮大賭場',
    image: rucoImage,
    prices: ['$68', '$88', 'VIP $138'],
    url: `${shopDomain}/ruco-chan-kate-tsui-xmas-in-concert-2017/`
  },
  {
    name: 'Love Romance Concert',
    chineseName: '許茹芸*蘇慧倫*丁噹 愛戀耶誕演唱會',
    time: '12/24/2017 1:00AM (23rd pass midnight)',
    chineseTime: '12月23日深夜一時',
    location: 'Mohegan Sun Arena：1 Mohegan Sun Blvd, Uncasville, CT 06382, USA',
    chineseLocation: '康州金神大賭場',
    image: loveConcert,
    prices: ['$48', '$78', '$118', 'VIP $148'],
    url: `${shopDomain}/love-romance-concert/`
  },
  {
    name: 'Jacky Cheung "A Classic Tour" Vancouver Stop',
    chineseName: '學友• 經典世界巡迴演唱會 溫哥華站',
    time: '2/27/2018(Tuesday) 8:00 PM',
    chineseTime: '2/27/2018(二) 晚上八點',
    location: 'Pacific Coliseum: 2901 E Hastings St, Vancouver, BC V5K 5J1, Canada',
    chineseLocation: 'Pacific Coliseum: 2901 E Hastings St, Vancouver, BC V5K 5J1, Canada',
    image: jackyCheungVancouver,
    prices: ['CAD $98', 'CAD $128', 'CAD $188', 'CAD $238', 'CAD $288', 'VIP CAD $388'],
    url: `${shopDomain}/jacky-cheung-a-classic-tour-vancouver-stop/`
  }
];

export default shows;
